import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let settings = await prisma.systemSettings.findFirst();
    if (!settings) {
      settings = await prisma.systemSettings.create({
        data: {
          id: "default-settings",
          salonNameAr: "صالون حلاقة صدام",
          salonNameEn: "SADDAM BARBER SHOP",
        },
      });
    }
    return NextResponse.json({ success: true, settings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const settings = await prisma.systemSettings.upsert({
      where: { id: "default-settings" },
      update: {
        ...(body.salonNameAr && { salonNameAr: body.salonNameAr }),
        ...(body.salonNameEn && { salonNameEn: body.salonNameEn }),
        ...(body.logoUrl && { logoUrl: body.logoUrl }),
        ...(body.systemLocked !== undefined && { systemLocked: Boolean(body.systemLocked) }),
        ...(body.lockMessage !== undefined && { lockMessage: body.lockMessage }),
        ...(body.hadayekPhone && { hadayekPhone: body.hadayekPhone }),
        ...(body.nasrCityPhone && { nasrCityPhone: body.nasrCityPhone }),
        ...(body.hotline && { hotline: body.hotline }),
        ...(body.whatsappNumber && { whatsappNumber: body.whatsappNumber }),
        ...(body.facebookUrl && { facebookUrl: body.facebookUrl }),
        ...(body.defaultOpenHour && { defaultOpenHour: body.defaultOpenHour }),
        ...(body.defaultCloseHour && { defaultCloseHour: body.defaultCloseHour }),
      },
      create: {
        id: "default-settings",
        salonNameAr: body.salonNameAr || "صالون حلاقة صدام",
        salonNameEn: body.salonNameEn || "SADDAM BARBER SHOP",
        systemLocked: Boolean(body.systemLocked),
        lockMessage: body.lockMessage || "النظام مغلق مؤقتاً لأعمال الصيانة والتطوير الدوري.",
      },
    });

    return NextResponse.json({ success: true, settings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
