import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const specialistId = searchParams.get("specialistId");
    const branchId = searchParams.get("branchId");

    const where: any = {};
    if (specialistId) where.specialistId = specialistId;
    if (branchId && branchId !== "ALL") where.branchId = branchId;

    const ledgers = await prisma.specialistLedger.findMany({
      where,
      orderBy: { date: "desc" },
      include: {
        specialist: { select: { id: true, name: true, chairNumber: true, payType: true } },
        branch: { select: { id: true, name: true } },
      },
      take: 100,
    });

    return NextResponse.json({ success: true, ledgers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { specialistId, branchId, type, amount, notes, recordedBy } = body;

    if (!specialistId || !type || amount === undefined) {
      return NextResponse.json(
        { success: false, error: "المتخصص ونوع الحركة والمبلغ مطلوبين" },
        { status: 400 }
      );
    }

    // Resolve branchId if not provided
    let finalBranchId = branchId;
    if (!finalBranchId) {
      const spec = await prisma.specialist.findUnique({ where: { id: specialistId } });
      if (spec) finalBranchId = spec.branchId;
    }

    const ledger = await prisma.specialistLedger.create({
      data: {
        specialistId,
        branchId: finalBranchId,
        type, // SALARY_PAYOUT, ADVANCE_WITHDRAWAL, BONUS, DEDUCTION, COMMISSION_EARNED
        amount: Number(amount),
        notes: notes?.trim() || null,
        recordedBy: recordedBy || "المالك (Maestro)",
        date: new Date(),
      },
      include: {
        specialist: true,
      },
    });

    return NextResponse.json({ success: true, ledger });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
