import { NextResponse } from "next/server";
import { getVapidKeys } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { publicKey } = await getVapidKeys();
    return NextResponse.json({ publicKey });
  } catch (error) {
    console.error("[WebPush VAPID] Error:", error);
    return NextResponse.json({ error: "فشل استخراج مفتاح الإشعارات" }, { status: 500 });
  }
}
