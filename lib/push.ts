import * as webpush from "web-push";
import { prisma } from "@/lib/prisma";

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
  icon?: string;
  badge?: string;
  requireInteraction?: boolean;
  data?: Record<string, unknown>;
}

export interface PushFilter {
  roles?: string[];
  branchId?: string | null;
  customerPhone?: string;
  endpoints?: string[];
}

function normalizePhoneVariants(phone?: string): string[] {
  if (!phone) return [];
  const raw = String(phone).trim();
  const digits = raw.replace(/\D/g, "");
  const variants = new Set<string>([raw]);
  if (digits) variants.add(digits);
  if (digits.startsWith("20") && digits.length === 12) {
    variants.add(`0${digits.slice(2)}`);
  } else if (digits.startsWith("0") && digits.length === 11) {
    variants.add(`2${digits}`);
  }
  return Array.from(variants).filter(Boolean);
}

let cachedVapid: { publicKey: string; privateKey: string } | null = null;

export async function getVapidKeys(): Promise<{ publicKey: string; privateKey: string }> {
  if (cachedVapid) return cachedVapid;

  const settings = await prisma.systemSettings.findUnique({
    where: { id: "default-settings" },
    select: { vapidPublicKey: true, vapidPrivateKey: true },
  });

  if (settings?.vapidPublicKey && settings?.vapidPrivateKey) {
    cachedVapid = {
      publicKey: settings.vapidPublicKey,
      privateKey: settings.vapidPrivateKey,
    };
    return cachedVapid;
  }

  const keys = webpush.generateVAPIDKeys();
  await prisma.systemSettings.upsert({
    where: { id: "default-settings" },
    update: {
      vapidPublicKey: keys.publicKey,
      vapidPrivateKey: keys.privateKey,
    },
    create: {
      id: "default-settings",
      vapidPublicKey: keys.publicKey,
      vapidPrivateKey: keys.privateKey,
    },
  });

  cachedVapid = keys;
  return cachedVapid;
}

export async function sendPushNotifications(filter: PushFilter, payload: PushPayload) {
  try {
    const keys = await getVapidKeys();
    webpush.setVapidDetails(
      "mailto:support@saddamsalon.app",
      keys.publicKey,
      keys.privateKey
    );

    const whereClause: Record<string, unknown> = {
      isActive: true,
    };

    if (filter.roles && filter.roles.length > 0) {
      whereClause.role = { in: filter.roles };
    }

    if (filter.endpoints && filter.endpoints.length > 0) {
      whereClause.endpoint = { in: filter.endpoints };
    }

    const phoneVariants = normalizePhoneVariants(filter.customerPhone);
    if (phoneVariants.length > 0) {
      whereClause.customerPhone = { in: phoneVariants };
    }

    if (filter.branchId) {
      whereClause.OR = [
        { branchId: filter.branchId },
        { branchId: null },
      ];
    }

    const subscriptions = await prisma.pushSubscription.findMany({
      where: whereClause as never,
    });

    if (subscriptions.length === 0) {
      return { sent: 0, failed: 0, deactivated: 0 };
    }

    const notificationBody = JSON.stringify({
      title: payload.title,
      body: payload.body,
      url: payload.url || "/",
      tag: payload.tag || "saddam-vip-alert",
      icon: payload.icon || "/logo.jpg",
      badge: payload.badge || "/logo.jpg",
      requireInteraction: payload.requireInteraction ?? true,
      data: payload.data || {},
    });

    let sent = 0;
    let failed = 0;
    let deactivated = 0;

    await Promise.all(
      subscriptions.map(async (sub) => {
        try {
          await webpush.sendNotification(
            {
              endpoint: sub.endpoint,
              keys: {
                p256dh: sub.p256dh,
                auth: sub.auth,
              },
            },
            notificationBody
          );
          sent++;
          await prisma.pushSubscription
            .update({
              where: { id: sub.id },
              data: { lastNotifiedAt: new Date() },
            })
            .catch(() => {});
        } catch (err: unknown) {
          failed++;
          const statusCode = (err as { statusCode?: number })?.statusCode;
          if (statusCode === 404 || statusCode === 410) {
            deactivated++;
            await prisma.pushSubscription
              .update({
                where: { id: sub.id },
                data: { isActive: false },
              })
              .catch(() => {});
          } else {
            console.error("[Saddam WebPush] Failed for", sub.endpoint.slice(0, 48), err);
          }
        }
      })
    );

    return { sent, failed, deactivated };
  } catch (error) {
    console.error("[Saddam WebPush] Global send error:", error);
    return { sent: 0, failed: 0, deactivated: 0 };
  }
}
