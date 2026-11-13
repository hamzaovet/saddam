import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendPushNotifications } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { offerId, customMessage } = body;

    if (!offerId) {
      return NextResponse.json({ success: false, error: "معرف العرض مطلوب" }, { status: 400 });
    }

    const offer = await prisma.offer.findUnique({
      where: { id: offerId },
      include: { branch: true },
    });

    if (!offer) {
      return NextResponse.json({ success: false, error: "العرض غير موجود" }, { status: 404 });
    }

    const branchName = offer.branch?.name || "صالون صدام الملكي";
    const discountInfo = offer.discountPercent
      ? ` (خصم ${offer.discountPercent}%)`
      : offer.oldPrice
        ? ` (بدلاً من ${offer.oldPrice} ج)`
        : "";

    const promoBody =
      customMessage?.trim() ||
      offer.announcementText?.trim() ||
      `🎉 عرض خاص وحصري لـ ${branchName}: "${offer.titleAr}" بسعر ${offer.price} ج.م فقط${discountInfo}! احجز الآن لتستمتع بأرقى عناية ملكية 👑`;

    // 1. Send Background Web Push to Customers of this branch
    const pushResult = await sendPushNotifications(
      {
        roles: ["CUSTOMER"],
        branchId: offer.branchId || undefined,
      },
      {
        title: `👑 عرض ملكي جديد: ${offer.titleAr} (${branchName})`,
        body: promoBody,
        url: `/?branch=${offer.branchId || "all"}&offer=${offer.id}`,
        tag: `saddam-offer-${offer.id}`,
        requireInteraction: true,
        data: { offerId: offer.id, branchId: offer.branchId },
      }
    );

    // 2. Broadcast in-app Chat Messages to customers of this branch
    const whereCust: any = {};
    if (offer.branchId) {
      whereCust.OR = [
        { branchId: offer.branchId },
        { bookings: { some: { branchId: offer.branchId } } },
        { tickets: { some: { branchId: offer.branchId } } },
      ];
    }

    const targetCustomers = await prisma.customer.findMany({
      where: whereCust,
      select: { id: true, name: true, phone: true },
      take: 200,
    });

    let chatCreated = 0;
    await Promise.all(
      targetCustomers.map(async (c) => {
        if (!c.phone) return;
        try {
          await prisma.chatMessage.create({
            data: {
              sender: "SALON",
              senderName: `إدارة صالون صدام (${branchName}) 👑`,
              customerPhone: c.phone,
              customerName: c.name,
              branchId: offer.branchId,
              message: promoBody,
              isRead: false,
            },
          });
          chatCreated++;
        } catch {}
      })
    );

    await prisma.offer.update({
      where: { id: offer.id },
      data: { broadcastSentAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      message: `تم إرسال إشعار العرض بنجاح (${pushResult.sent} إشعار خلفية • ${chatCreated} رسالة شات لعملاء ${branchName}) 📢`,
      push: pushResult,
      chatCreated,
    });
  } catch (error: any) {
    console.error("[Offer Broadcast] Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
