import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      subscription,
      role = "CUSTOMER",
      branchId = null,
      outletId = null,
      userId = null,
      userName = null,
      customerPhone = null,
    } = body;

    if (!subscription || !subscription.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) {
      return NextResponse.json({ error: "بيانات الاشتراك غير مكتملة" }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || null;
    const normalizedBranchId = branchId || outletId || null;
    const normalizedPhone = customerPhone ? String(customerPhone).trim() : null;

    const record = await prisma.pushSubscription.upsert({
      where: { endpoint: subscription.endpoint },
      update: {
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
        role: String(role || "CUSTOMER").toUpperCase(),
        branchId: normalizedBranchId,
        userId: userId || null,
        userName: userName || null,
        customerPhone: normalizedPhone,
        userAgent,
        isActive: true,
        updatedAt: new Date(),
      },
      create: {
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
        role: String(role || "CUSTOMER").toUpperCase(),
        branchId: normalizedBranchId,
        userId: userId || null,
        userName: userName || null,
        customerPhone: normalizedPhone,
        userAgent,
        isActive: true,
      },
    });

    return NextResponse.json({ success: true, id: record.id });
  } catch (error) {
    console.error("[Push Subscribe] Error:", error);
    return NextResponse.json({ error: "فشل حفظ اشتراك الإشعارات" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const endpoint = searchParams.get("endpoint");
    if (!endpoint) {
      return NextResponse.json({ error: "endpoint مطلوب" }, { status: 400 });
    }

    await prisma.pushSubscription
      .update({
        where: { endpoint },
        data: { isActive: false },
      })
      .catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Push Unsubscribe] Error:", error);
    return NextResponse.json({ error: "فشل إلغاء الإشعارات" }, { status: 500 });
  }
}
