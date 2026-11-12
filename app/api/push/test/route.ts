import { NextResponse } from "next/server";
import { sendPushNotifications } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      endpoint,
      role,
      branchId,
      customerPhone,
      title = "👑 تجربة إشعارات صالون صدام VIP",
      message = "الإشعارات شغالة بامتياز! هتصلك تنبيهات الحجز والـ 15 دقيقة والرسائل حتى لو المتصفح مقفول.",
    } = body;

    const result = await sendPushNotifications(
      endpoint
        ? { endpoints: [endpoint] }
        : customerPhone
          ? { customerPhone }
          : role
            ? { roles: [role], branchId: branchId || undefined }
            : { roles: ["OWNER", "ADMIN", "COORDINATOR", "POS", "CUSTOMER"] },
      {
        title,
        body: message,
        url: role === "CUSTOMER" || customerPhone ? "/" : role === "POS" ? "/pos" : role === "COORDINATOR" ? "/coordinator" : "/admin",
        tag: "saddam-test-push",
        requireInteraction: true,
      }
    );

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("[Push Test] Error:", error);
    return NextResponse.json({ error: "فشل إرسال الإشعار التجريبي" }, { status: 500 });
  }
}
