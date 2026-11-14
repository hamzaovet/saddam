import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  console.log("=== DB INSPECTION ===");
  const branches = await prisma.branch.findMany({ select: { id: true, name: true, code: true } });
  console.log("Branches:", branches);

  const userCount = await prisma.user.count();
  console.log("Users Count:", userCount);
  const users = await prisma.user.findMany({ select: { username: true, role: true, name: true } });
  console.log("Users:", users);

  const specCount = await prisma.specialist.count();
  console.log("Specialists Count:", specCount);
  const specs = await prisma.specialist.findMany({ select: { name: true, branchId: true } });
  console.log("Specialists:", specs);

  const servCount = await prisma.service.count();
  console.log("Services Count:", servCount);

  const offerCount = await prisma.offer.count();
  console.log("Offers Count:", offerCount);

  const bookCount = await prisma.booking.count();
  console.log("Bookings Count:", bookCount);

  const ticketCount = await prisma.ticket.count();
  console.log("Tickets Count:", ticketCount);

  const shiftCount = await prisma.cashShift.count();
  console.log("Shifts Count:", shiftCount);

  const custCount = await prisma.customer.count();
  console.log("Customers Count:", custCount);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
