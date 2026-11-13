import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const branchId = searchParams.get("branchId");

    const andConditions: any[] = [];

    if (search && search.trim()) {
      const q = search.trim();
      andConditions.push({
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { phone: { contains: q } },
          { email: { contains: q, mode: "insensitive" } },
        ],
      });
    }

    if (branchId && branchId !== "ALL") {
      andConditions.push({
        OR: [
          { branchId },
          { bookings: { some: { branchId } } },
          { tickets: { some: { branchId } } },
        ],
      });
    }

    const where: any = andConditions.length > 0 ? { AND: andConditions } : {};

    const rawCustomers = await prisma.customer.findMany({
      where,
      orderBy: [{ totalSpent: "desc" }, { createdAt: "desc" }],
      include: {
        branch: { select: { id: true, name: true, code: true } },
        bookings: {
          select: {
            branchId: true,
            branch: { select: { id: true, name: true } },
          },
          take: 10,
        },
        tickets: {
          select: {
            branchId: true,
            branch: { select: { id: true, name: true } },
          },
          take: 10,
        },
        _count: {
          select: { bookings: true, tickets: true },
        },
      },
      take: 200,
    });

    const customers = rawCustomers.map((c) => {
      const visitedBranchMap = new Map<string, string>();
      if (c.branch) visitedBranchMap.set(c.branch.id, c.branch.name);
      c.bookings.forEach((b) => {
        if (b.branch) visitedBranchMap.set(b.branch.id, b.branch.name);
      });
      c.tickets.forEach((t) => {
        if (t.branch) visitedBranchMap.set(t.branch.id, t.branch.name);
      });

      const branchesVisited = Array.from(visitedBranchMap.values());
      const primaryBranchName = c.branch?.name || (branchesVisited.length > 0 ? branchesVisited[0] : "غير محدد");
      const computedLoyalty = c.loyaltyPoints > 0 ? c.loyaltyPoints : Math.floor((c.totalSpent || 0) / 10);

      return {
        id: c.id,
        name: c.name,
        phone: c.phone,
        email: c.email,
        branchId: c.branchId,
        primaryBranchName,
        branchesVisited,
        vipLevel: c.vipLevel,
        loyaltyPoints: computedLoyalty,
        totalVisits: c.totalVisits,
        totalSpent: c.totalSpent,
        notes: c.notes,
        lastVisitAt: c.lastVisitAt,
        createdAt: c.createdAt,
        bookingsCount: c._count.bookings,
        ticketsCount: c._count.tickets,
      };
    });

    return NextResponse.json({ success: true, customers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, vipLevel, notes, name } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "معرف العميل مطلوب" }, { status: 400 });
    }

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        ...(name && { name: name.trim() }),
        ...(vipLevel && { vipLevel }),
        ...(notes !== undefined && { notes: notes?.trim() || null }),
      },
    });

    return NextResponse.json({ success: true, customer });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
