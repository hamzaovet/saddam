import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const branchId = searchParams.get("branchId");
    const activeOnly = searchParams.get("activeOnly") !== "false";

    const where: any = {};
    if (activeOnly) where.isActive = true;
    if (category && category !== "ALL") where.category = category;
    if (branchId && branchId !== "ALL") {
      where.OR = [{ branchId }, { branchId: null }];
    }

    const services = await prisma.service.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { price: "asc" }],
      include: {
        branch: { select: { id: true, name: true, code: true } },
      },
    });

    return NextResponse.json({ success: true, services });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nameAr, nameEn, category, price, durationMinutes, description, image, sortOrder, branchId, isActive } = body;

    if (!nameAr || price === undefined) {
      return NextResponse.json(
        { success: false, error: "اسم الخدمة والسعر مطلوبان" },
        { status: 400 }
      );
    }

    const service = await prisma.service.create({
      data: {
        branchId: branchId || null,
        nameAr: nameAr.trim(),
        nameEn: nameEn?.trim() || null,
        category: category || "HAIR",
        price: Number(price),
        durationMinutes: Number(durationMinutes || 30),
        description: description?.trim() || null,
        image: image?.trim() || null,
        sortOrder: Number(sortOrder || 0),
        isActive: isActive !== undefined ? Boolean(isActive) : true,
      },
      include: {
        branch: { select: { id: true, name: true, code: true } },
      },
    });

    return NextResponse.json({ success: true, service });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, nameAr, nameEn, category, price, durationMinutes, description, image, sortOrder, branchId, isActive } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف الخدمة مطلوب" }, { status: 400 });
    }

    const service = await prisma.service.update({
      where: { id },
      data: {
        ...(branchId !== undefined && { branchId: branchId || null }),
        ...(nameAr && { nameAr: nameAr.trim() }),
        ...(nameEn !== undefined && { nameEn: nameEn?.trim() || null }),
        ...(category && { category }),
        ...(price !== undefined && { price: Number(price) }),
        ...(durationMinutes !== undefined && { durationMinutes: Number(durationMinutes) }),
        ...(description !== undefined && { description: description?.trim() || null }),
        ...(image !== undefined && { image: image?.trim() || null }),
        ...(sortOrder !== undefined && { sortOrder: Number(sortOrder) }),
        ...(isActive !== undefined && { isActive: Boolean(isActive) }),
      },
      include: {
        branch: { select: { id: true, name: true, code: true } },
      },
    });

    return NextResponse.json({ success: true, service });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف الخدمة مطلوب" }, { status: 400 });
    }

    await prisma.service.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "تم حذف الخدمة بنجاح" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
