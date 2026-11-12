import "dotenv/config";
import { PrismaClient } from "../lib/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_16DiXvhoduLs@ep-polished-haze-baajleln-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const pool = new Pool({
  connectionString: rawUrl,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool, { schema: "public" });
const prisma = new PrismaClient({ adapter });

async function seed() {
  console.log("💈 Starting Saddam Barber Shop DB Seed...");

  // 1. System Settings
  await prisma.systemSettings.upsert({
    where: { id: "default-settings" },
    update: {},
    create: {
      id: "default-settings",
      salonNameAr: "صالون حلاقة صدام",
      salonNameEn: "SADDAM BARBER SHOP",
      logoUrl: "/logo.jpg",
      systemLocked: false,
      lockMessage: "النظام مغلق مؤقتاً لأعمال الصيانة والتطوير الدوري.",
      hadayekPhone: "01018671000",
      nasrCityPhone: "01118400150",
      hotline: "19888",
      whatsappNumber: "01018671000",
      facebookUrl: "https://www.facebook.com/SaddamSalon/",
      defaultOpenHour: "12:00 PM",
      defaultCloseHour: "02:00 AM",
    },
  });
  console.log("✅ System Settings seeded");

  // 2. Branches
  const qobbaBranch = await prisma.branch.upsert({
    where: { code: "BR-KOBBA" },
    update: {},
    create: {
      name: "فرع حدائق القبة (الرئيسي)",
      code: "BR-KOBBA",
      address: "17 شارع مصر والسودان، بجوار دير الملاك، حدائق القبة",
      phone: "01018671000",
      whatsapp: "01018671000",
      googleMapsUrl: "https://maps.google.com/?q=Hadayek+El+Kobba+Cairo",
      isActive: true,
    },
  });

  const nasrBranch = await prisma.branch.upsert({
    where: { code: "BR-NASR-CITY" },
    update: {},
    create: {
      name: "فرع مدينة نصر (VIP)",
      code: "BR-NASR-CITY",
      address: "تقاطع مكرم عبيد مع عباس العقاد، مدينة نصر، القاهرة",
      phone: "01118400150",
      whatsapp: "01118400150",
      googleMapsUrl: "https://maps.google.com/?q=Nasr+City+Cairo",
      isActive: true,
    },
  });
  console.log("✅ Branches seeded (حدائق القبة + مدينة نصر)");

  // 3. Users (Owner, Managers, Cashiers, Specialists, Workers)
  // Owner (Maestro)
  const ownerUser = await prisma.user.upsert({
    where: { username: "maestro" },
    update: {
      passwordHash: "123456789",
      pin: "157230",
      role: "owner",
    },
    create: {
      name: "أ / حمزة عباس (المايسترو - المالك)",
      username: "maestro",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01018671000",
      role: "owner",
      branchId: null,
      isActive: true,
    },
  });

  // General Manager
  await prisma.user.upsert({
    where: { username: "gm-saddam" },
    update: {},
    create: {
      name: "كابتن صدام (المدير العام والشريك المؤسس)",
      username: "gm-saddam",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01000000001",
      role: "general_manager",
      branchId: null,
      isActive: true,
    },
  });

  // Branch Managers
  await prisma.user.upsert({
    where: { username: "mgr-qobba" },
    update: {},
    create: {
      name: "مدير فرع حدائق القبة",
      username: "mgr-qobba",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01000000002",
      role: "manager",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { username: "mgr-nasr" },
    update: {},
    create: {
      name: "مدير فرع مدينة نصر",
      username: "mgr-nasr",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01000000003",
      role: "manager",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  // Branch Coordinators (منسق لكل فرع - الراوتر المركزي داخل كل فرع)
  await prisma.user.upsert({
    where: { username: "coordinator-qobba" },
    update: {
      role: "coordinator",
      branchId: qobbaBranch.id,
      isActive: true,
    },
    create: {
      name: "منسق فرع حدائق القبة",
      username: "coordinator-qobba",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01121537537",
      role: "coordinator",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { username: "coordinator-nasr" },
    update: {
      role: "coordinator",
      branchId: nasrBranch.id,
      isActive: true,
    },
    create: {
      name: "منسق فرع مدينة نصر",
      username: "coordinator-nasr",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01121537538",
      role: "coordinator",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  // Cashiers
  await prisma.user.upsert({
    where: { username: "cashier-qobba" },
    update: {},
    create: {
      name: "كاشير فرع حدائق القبة",
      username: "cashier-qobba",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01000000004",
      role: "cashier",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { username: "cashier-nasr" },
    update: {},
    create: {
      name: "كاشير فرع مدينة نصر",
      username: "cashier-nasr",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01000000005",
      role: "cashier",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  // Specialists Users & Profiles
  // 1. صدام (حدائق القبة)
  const saddamUser = await prisma.user.upsert({
    where: { username: "saddam-vip" },
    update: {},
    create: {
      name: "كابتن صدام (الماستر باربر VIP)",
      username: "saddam-vip",
      passwordHash: "123456789",
      pin: "157230",
      phone: "01018671000",
      role: "specialist",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  await prisma.specialist.upsert({
    where: { userId: saddamUser.id },
    update: {},
    create: {
      userId: saddamUser.id,
      branchId: qobbaBranch.id,
      name: "كابتن صدام (Master Stylist)",
      phone: "01018671000",
      photo: "https://i.ibb.co/3d5wZ0B/barber1.jpg",
      title: "كبير خبراء التصفيف والحلاقة الملكية",
      chairNumber: 1,
      status: "AVAILABLE",
      rating: 5.0,
      payType: "COMMISSION_ONLY",
      baseSalary: 0,
      commissionRate: 50,
      isActive: true,
    },
  });

  // 2. كابتن أحمد (حدائق القبة)
  const ahmedUser = await prisma.user.upsert({
    where: { username: "barber-ahmed" },
    update: {},
    create: {
      name: "كابتن أحمد سامي (أخصائي شعر ودقن)",
      username: "barber-ahmed",
      passwordHash: "123456789",
      pin: "157230",
      role: "specialist",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  await prisma.specialist.upsert({
    where: { userId: ahmedUser.id },
    update: {},
    create: {
      userId: ahmedUser.id,
      branchId: qobbaBranch.id,
      name: "كابتن أحمد سامي",
      phone: "01023456781",
      photo: "https://i.ibb.co/j4C1pWk/barber2.jpg",
      title: "أخصائي قصات الشعر الحديثة وتحديد الدقن",
      chairNumber: 2,
      status: "AVAILABLE",
      rating: 4.9,
      payType: "SALARY_PLUS_COMMISSION",
      baseSalary: 6000,
      commissionRate: 20,
      isActive: true,
    },
  });

  // 3. كابتن عمر (مدينة نصر)
  const omarUser = await prisma.user.upsert({
    where: { username: "barber-omar" },
    update: {},
    create: {
      name: "كابتن عمر الشناوي (خبير عناية بالبشرة)",
      username: "barber-omar",
      passwordHash: "123456789",
      pin: "157230",
      role: "specialist",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  await prisma.specialist.upsert({
    where: { userId: omarUser.id },
    update: {},
    create: {
      userId: omarUser.id,
      branchId: nasrBranch.id,
      name: "كابتن عمر الشناوي",
      phone: "01123456782",
      photo: "https://i.ibb.co/m0fTjQ9/barber3.jpg",
      title: "أخصائي تنظيف البشرة والصبغات والعلاج بالبروتين",
      chairNumber: 1,
      status: "AVAILABLE",
      rating: 4.95,
      payType: "DAILY",
      baseSalary: 350,
      commissionRate: 15,
      isActive: true,
    },
  });

  // 4. كابتن زياد (مدينة نصر)
  const ziadUser = await prisma.user.upsert({
    where: { username: "barber-ziad" },
    update: {},
    create: {
      name: "كابتن زياد هلال (ستايلست VIP)",
      username: "barber-ziad",
      passwordHash: "123456789",
      pin: "157230",
      role: "specialist",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  await prisma.specialist.upsert({
    where: { userId: ziadUser.id },
    update: {},
    create: {
      userId: ziadUser.id,
      branchId: nasrBranch.id,
      name: "كابتن زياد هلال",
      phone: "01223456783",
      photo: "https://i.ibb.co/b31v2G9/barber4.jpg",
      title: "أخصائي التصفيف الإيطالي وحلاقة المناسبات",
      chairNumber: 2,
      status: "AVAILABLE",
      rating: 4.88,
      payType: "WEEKLY",
      baseSalary: 1800,
      commissionRate: 20,
      isActive: true,
    },
  });

  console.log("✅ Users & Specialists seeded");

  // 4. Services Catalog
  const servicesData = [
    {
      nameAr: "حلاقة شعر ملكية كلاسيك (Classic Cut)",
      category: "HAIR",
      price: 150,
      durationMinutes: 30,
      description: "قص وتدريج احترافي بأحدث صيحات الموضة العالمية مع غسيل وسيشوار تركي.",
      sortOrder: 1,
    },
    {
      nameAr: "تحديد وحلاقة دقن بالبخار والموس الإيطالي",
      category: "BEARD",
      price: 100,
      durationMinutes: 25,
      description: "رسم وتحديد الدقن بالخيط والموس مع حمام بخار ساخن وترطيب بالزيوت الطبيعية.",
      sortOrder: 2,
    },
    {
      nameAr: "باكيدج صدام الملكي VIP (شعر + دقن + حمام زيت)",
      category: "VIP_PACKAGES",
      price: 320,
      durationMinutes: 60,
      description: "تجربة ملكية كاملة: قص شعر استثنائي + تحديد دقن بالبخار + حمام زيت ساخن وتدليك فروة الرأس.",
      sortOrder: 3,
    },
    {
      nameAr: "جلسة تنظيف وبخار وتقشير البشرة (Deep Facial)",
      category: "SKIN_CARE",
      price: 180,
      durationMinutes: 40,
      description: "جلسة هيدرافيشال متكاملة لإزالة الرؤوس السوداء مع ماسك الفحم الكوري وترطيب عميق.",
      sortOrder: 4,
    },
    {
      nameAr: "فرد الشعر بالبروتين والمعالج البرازيلي",
      category: "COLOR_KERATIN",
      price: 650,
      durationMinutes: 90,
      description: "فرد علاجي طبيعي آمن خالٍ من الفورمالين يعيد النعومة واللمعان الطبيعي لشعرك.",
      sortOrder: 5,
    },
    {
      nameAr: "صبغة شعر وإخفاء الشيب وتلوين احترافي",
      category: "COLOR_KERATIN",
      price: 250,
      durationMinutes: 45,
      description: "صبغات أوروبية أصلية تدوم طويلاً وتمنحك لوناً طبيعياً متجانساً ومشرقاً.",
      sortOrder: 6,
    },
    {
      nameAr: "باديكير متكامل وعناية باليدين والأظافر",
      category: "VIP_PACKAGES",
      price: 200,
      durationMinutes: 40,
      description: "إزالة الجلد الميت وتقليم وتنظيف الأظافر مع سبا استرخائي لليدين.",
      sortOrder: 7,
    },
    {
      nameAr: "حلاقة أطفال مريحة ومرحة (Kids Cut)",
      category: "KIDS",
      price: 100,
      durationMinutes: 20,
      description: "قصات شعر مبهجة للأبطال الصغار مع كرسي الأطفال وألعاب ترفيهية.",
      sortOrder: 8,
    },
    {
      nameAr: "سيشوار واستشوار وتصفيف للشعر",
      category: "HAIR",
      price: 70,
      durationMinutes: 15,
      description: "تصفيف وتسريح أنيق وجذاب مناسب لجميع الخروجات والمناسبات السريعة.",
      sortOrder: 9,
    },
  ];

  for (const s of servicesData) {
    const existing = await prisma.service.findFirst({ where: { nameAr: s.nameAr } });
    if (!existing) {
      await prisma.service.create({ data: s });
    }
  }
  console.log("✅ Services catalog seeded (9 distinct services)");

  // 5. Retail Beauty Products
  const productsData = [
    {
      nameAr: "كريم تصفيف ومات كندي (Matte Hair Clay)",
      category: "STYLING",
      price: 220,
      costPrice: 130,
      stockQty: 45,
    },
    {
      nameAr: "سيروم اللحية الفاخر بزيت الأرجان وزبدة الشيا",
      category: "BEARD_CARE",
      price: 190,
      costPrice: 110,
      stockQty: 30,
    },
    {
      nameAr: "شمع شعر عنبر تثبيت 24 ساعة (Strong Wax)",
      category: "STYLING",
      price: 160,
      costPrice: 90,
      stockQty: 50,
    },
    {
      nameAr: "عطر رجالي صدام VIP أو دي بارفيوم (100 مل)",
      category: "PERFUMES",
      price: 380,
      costPrice: 220,
      stockQty: 25,
    },
    {
      nameAr: "ماسك الفحم الكوري لتنظيف وتنعيم مسام الوجه",
      category: "SKIN_CARE",
      price: 140,
      costPrice: 80,
      stockQty: 40,
    },
  ];

  for (const p of productsData) {
    const existing = await prisma.product.findFirst({ where: { nameAr: p.nameAr } });
    if (!existing) {
      await prisma.product.create({
        data: {
          ...p,
          branchId: qobbaBranch.id,
        },
      });
    }
  }
  console.log("✅ Retail beauty products seeded");

  console.log("🎉 Saddam Barber Shop DB Seed Completed Successfully!");
}

seed()
  .catch((e) => {
    console.error("❌ Seed Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
