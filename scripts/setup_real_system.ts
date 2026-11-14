import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  console.log("💈 Starting Full Production Setup for SALON SADDAM...");

  // ========================================================
  // 1. WIPE OLD MOCK / TEST DATA
  // ========================================================
  console.log("🧹 1. Cleaning out all mock / test data...");
  await prisma.ticket.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.cashShift.deleteMany();
  await prisma.treasuryExpense.deleteMany();
  await prisma.chatMessage.deleteMany();
  await prisma.specialistLedger.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.specialist.deleteMany();
  await prisma.service.deleteMany();
  await prisma.offer.deleteMany();

  // Clean old mock users (keep or update maestro)
  await prisma.user.deleteMany({
    where: {
      username: {
        not: "maestro",
      },
    },
  });
  console.log("✅ All mock data wiped clean (0 tickets, 0 bookings, 0 mock records).");

  // ========================================================
  // 2. SETUP OFFICIAL BRANCHES
  // ========================================================
  console.log("🏢 2. Setting up official branches...");
  const nasrBranch = await prisma.branch.upsert({
    where: { code: "BR-NASR-CITY" },
    update: {
      name: "فرع مدينة نصر (VIP)",
      address: "28 شارع مصطفى حمام، متفرع من عباس العقاد، أمام أبو العز السوري، مدينة نصر",
      phone: "01121537537",
      whatsapp: "01121537537",
      googleMapsUrl: "https://maps.google.com/?q=28+Mostafa+Hammam+Abbas+El+Akkad+Nasr+City",
      isActive: true,
    },
    create: {
      name: "فرع مدينة نصر (VIP)",
      code: "BR-NASR-CITY",
      address: "28 شارع مصطفى حمام، متفرع من عباس العقاد، أمام أبو العز السوري، مدينة نصر",
      phone: "01121537537",
      whatsapp: "01121537537",
      googleMapsUrl: "https://maps.google.com/?q=28+Mostafa+Hammam+Abbas+El+Akkad+Nasr+City",
      isActive: true,
    },
  });

  const qobbaBranch = await prisma.branch.upsert({
    where: { code: "BR-KOBBA" },
    update: {
      name: "فرع حدائق القبة",
      address: "87 شارع مصر والسودان، حدائق القبة، القاهرة",
      phone: "01121537537",
      whatsapp: "01121537537",
      googleMapsUrl: "https://maps.google.com/?q=87+Misr+wa+El+Sudan+Hadayek+El+Qobba",
      isActive: true,
    },
    create: {
      name: "فرع حدائق القبة",
      code: "BR-KOBBA",
      address: "87 شارع مصر والسودان، حدائق القبة، القاهرة",
      phone: "01121537537",
      whatsapp: "01121537537",
      googleMapsUrl: "https://maps.google.com/?q=87+Misr+wa+El+Sudan+Hadayek+El+Qobba",
      isActive: true,
    },
  });

  // Global System Settings
  await prisma.systemSettings.upsert({
    where: { id: "default-settings" },
    update: {
      salonNameAr: "صالون حلاقة صدام VIP",
      salonNameEn: "SADDAM BARBER SHOP",
      hadayekPhone: "01121537537",
      nasrCityPhone: "01121537537",
      hotline: "01121537537",
      whatsappNumber: "01121537537",
      facebookUrl: "https://www.facebook.com/SaddamSalon/",
      defaultOpenHour: "12:00 PM",
      defaultCloseHour: "02:00 AM",
      receiptFooterNotes: "شكراً لزيارتكم صالون صدام الملكي 👑 تجربة استثنائية لأناقة الرجل",
    },
    create: {
      id: "default-settings",
      salonNameAr: "صالون حلاقة صدام VIP",
      salonNameEn: "SADDAM BARBER SHOP",
      logoUrl: "/logo.jpg",
      hadayekPhone: "01121537537",
      nasrCityPhone: "01121537537",
      hotline: "01121537537",
      whatsappNumber: "01121537537",
      facebookUrl: "https://www.facebook.com/SaddamSalon/",
      defaultOpenHour: "12:00 PM",
      defaultCloseHour: "02:00 AM",
      receiptFooterNotes: "شكراً لزيارتكم صالون صدام الملكي 👑 تجربة استثنائية لأناقة الرجل",
    },
  });
  console.log("✅ Branches & Settings ready.");

  // ========================================================
  // 3. SETUP USER ACCOUNTS WITH DISTINCT PASSWORDS & PINS
  // ========================================================
  console.log("👤 3. Setting up official staff & management accounts...");

  // 1. Maestro (Owner)
  await prisma.user.upsert({
    where: { username: "maestro" },
    update: {
      name: "أ / حمزة عباس (المايسترو - المالك)",
      passwordHash: "123456789",
      pin: "157230",
      role: "owner",
      branchId: null,
      isActive: true,
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

  // 2. صدام (المدير العام للفروع وصاحب الصالون)
  await prisma.user.upsert({
    where: { username: "saddam" },
    update: {
      name: "كابتن صدام (المدير العام وصاحب الصالون)",
      passwordHash: "saddam@2026",
      pin: "909011",
      role: "general_manager",
      branchId: null,
      isActive: true,
    },
    create: {
      name: "كابتن صدام (المدير العام وصاحب الصالون)",
      username: "saddam",
      passwordHash: "saddam@2026",
      pin: "909011",
      phone: "01121537537",
      role: "general_manager",
      branchId: null,
      isActive: true,
    },
  });

  // 3. وعد (مديرة ومنسقة فرع مدينة نصر)
  await prisma.user.upsert({
    where: { username: "waad" },
    update: {
      name: "أ / وعد (مديرة ومنسقة فرع مدينة نصر)",
      passwordHash: "waad@2026",
      pin: "707022",
      role: "coordinator",
      branchId: nasrBranch.id,
      isActive: true,
    },
    create: {
      name: "أ / وعد (مديرة ومنسقة فرع مدينة نصر)",
      username: "waad",
      passwordHash: "waad@2026",
      pin: "707022",
      phone: "01061402242",
      role: "coordinator",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  // 4. محمود صدام (مدير ومنسق فرع حدائق القبة)
  await prisma.user.upsert({
    where: { username: "mahmoud_saddam" },
    update: {
      name: "أ / محمود صدام (مدير ومنسق فرع حدائق القبة)",
      passwordHash: "mahmoud@2026",
      pin: "808033",
      role: "coordinator",
      branchId: qobbaBranch.id,
      isActive: true,
    },
    create: {
      name: "أ / محمود صدام (مدير ومنسق فرع حدائق القبة)",
      username: "mahmoud_saddam",
      passwordHash: "mahmoud@2026",
      pin: "808033",
      phone: "01121537537",
      role: "coordinator",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });

  // 5. كاشير مدينة نصر
  await prisma.user.upsert({
    where: { username: "cashier_nasr" },
    update: {
      name: "كاشير فرع مدينة نصر",
      passwordHash: "nasr@2026",
      pin: "404055",
      role: "cashier",
      branchId: nasrBranch.id,
      isActive: true,
    },
    create: {
      name: "كاشير فرع مدينة نصر",
      username: "cashier_nasr",
      passwordHash: "nasr@2026",
      pin: "404055",
      phone: "01121537537",
      role: "cashier",
      branchId: nasrBranch.id,
      isActive: true,
    },
  });

  // 6. كاشير حدائق القبة
  await prisma.user.upsert({
    where: { username: "cashier_qobba" },
    update: {
      name: "كاشير فرع حدائق القبة",
      passwordHash: "qobba@2026",
      pin: "505066",
      role: "cashier",
      branchId: qobbaBranch.id,
      isActive: true,
    },
    create: {
      name: "كاشير فرع حدائق القبة",
      username: "cashier_qobba",
      passwordHash: "qobba@2026",
      pin: "505066",
      phone: "01121537537",
      role: "cashier",
      branchId: qobbaBranch.id,
      isActive: true,
    },
  });
  console.log("✅ All 6 official accounts created successfully with distinct credentials.");

  // ========================================================
  // 4. SETUP OFFICIAL SPECIALISTS PER BRANCH
  // ========================================================
  console.log("✂️ 4. Setting up official specialists per branch...");

  // فرع مدينة نصر (10 مختصين)
  const nasrSpecialists = [
    { name: "شمندورة", title: "كبير خبراء التصفيف والحلاقة الملكية", chairNumber: 1 },
    { name: "أحمد جمال", title: "خبير حلاقة وتدريج إيطالي", chairNumber: 2 },
    { name: "كريم", title: "أخصائي قصات الشعر الحديثة واللحية", chairNumber: 3 },
    { name: "اسلام البرازيلي", title: "خبير معالجات الشعر والبروتين البرازيلي", chairNumber: 4 },
    { name: "اسلام", title: "أخصائي حلاقة وتصفيف شعر ولحية", chairNumber: 5 },
    { name: "هادي", title: "ستايلست قص وتحديد دقن بخار", chairNumber: 6 },
    { name: "الشاذلي", title: "أخصائي تصفيف وسشوار وصبغات", chairNumber: 7 },
    { name: "منار", title: "أخصائية باديكير وعناية متقدمة بالبشرة", chairNumber: 8 },
    { name: "هند", title: "أخصائية هيدروفيشيال وباديكير علاجي", chairNumber: 9 },
    { name: "غزل", title: "أخصائية عناية باليدين والقدمين والبشرة", chairNumber: 10 },
  ];

  for (const s of nasrSpecialists) {
    await prisma.specialist.create({
      data: {
        branchId: nasrBranch.id,
        name: s.name,
        title: s.title,
        chairNumber: s.chairNumber,
        status: "AVAILABLE",
        rating: 4.95,
        payType: "SALARY_PLUS_COMMISSION",
        baseSalary: 0,
        commissionRate: 20,
        isActive: true,
      },
    });
  }

  // فرع حدائق القبة (6 مختصين)
  const qobbaSpecialists = [
    { name: "أحمد السيد", title: "كبير خبراء التصفيف والحلاقة الملكية", chairNumber: 1 },
    { name: "كرولس", title: "خبير حلاقة وتدريج إيطالي", chairNumber: 2 },
    { name: "عماد", title: "أخصائي قصات حديثة وتحديد ذقن", chairNumber: 3 },
    { name: "محمد جمال", title: "ستايلست حلاقة وتصفيف", chairNumber: 4 },
    { name: "باسم", title: "أخصائي لحية وشعر وسشوار", chairNumber: 5 },
    { name: "محمد ربيع", title: "أخصائي تصفيف وعناية بالشعر", chairNumber: 6 },
  ];

  for (const s of qobbaSpecialists) {
    await prisma.specialist.create({
      data: {
        branchId: qobbaBranch.id,
        name: s.name,
        title: s.title,
        chairNumber: s.chairNumber,
        status: "AVAILABLE",
        rating: 4.92,
        payType: "SALARY_PLUS_COMMISSION",
        baseSalary: 0,
        commissionRate: 20,
        isActive: true,
      },
    });
  }
  console.log("✅ Specialists created: 10 for Nasr City + 6 for Hadayek El-Kobba.");

  // ========================================================
  // 5. SETUP BRANCH-SPECIFIC SEPARATE SERVICES
  // ========================================================
  console.log("📋 5. Setting up branch-specific separate services...");

  // --- فرع مدينة نصر (VIP) من الصورة الرسمية (نصر 2.jpeg) ---
  const nasrServices = [
    // خدمات الشعر واللحية
    { nameAr: "قص شعر (+ فوطة سخنة & فوطة صاقعة)", price: 250, durationMinutes: 30, category: "HAIR", sortOrder: 1 },
    { nameAr: "قص أطفال", price: 200, durationMinutes: 20, category: "KIDS", sortOrder: 2 },
    { nameAr: "دقن بخار", price: 200, durationMinutes: 25, category: "BEARD", sortOrder: 3 },
    { nameAr: "دقن (+ فوطة صاقعة)", price: 150, durationMinutes: 20, category: "BEARD", sortOrder: 4 },
    { nameAr: "شعر + دقن + سكرب + فوطة سخنة & صاقعة + حمام كريم", price: 500, durationMinutes: 45, category: "VIP_PACKAGES", sortOrder: 5 },
    { nameAr: "سشوار", price: 150, durationMinutes: 15, category: "HAIR", sortOrder: 6 },

    // العناية بالبشرة
    { nameAr: "جلسة بشرة VIP", price: 500, durationMinutes: 40, category: "SKIN_CARE", sortOrder: 7 },
    { nameAr: "تنظيف بشرة هيدروفاشيال 7 مراحل", price: 800, durationMinutes: 50, category: "SKIN_CARE", sortOrder: 8 },
    { nameAr: "تنظيف بشرة هيدروفاشيال 11 مرحلة متكاملة", price: 1200, durationMinutes: 60, category: "SKIN_CARE", sortOrder: 9 },

    // وكس وإزالة الشعر
    { nameAr: "وكس كامل للبشرة", price: 200, durationMinutes: 20, category: "SKIN_CARE", sortOrder: 10 },
    { nameAr: "وكس عادي", price: 150, durationMinutes: 15, category: "SKIN_CARE", sortOrder: 11 },

    // صبغات وتجميل
    { nameAr: "صبغة شعر احترافية", price: 300, durationMinutes: 40, category: "COLOR_KERATIN", sortOrder: 12 },
    { nameAr: "توبيك لملء فراغات الشعر", price: 150, durationMinutes: 15, category: "HAIR", sortOrder: 13 },

    // العناية بالشعر والمعالجات
    { nameAr: "حمام زيت ساخن", price: 200, durationMinutes: 25, category: "HAIR", sortOrder: 14 },
    { nameAr: "حمام زيت أمبول علاجي", price: 350, durationMinutes: 30, category: "HAIR", sortOrder: 15 },
    { nameAr: "جلسة ترميم شعر مكثف", price: 500, durationMinutes: 45, category: "COLOR_KERATIN", sortOrder: 16 },
    { nameAr: "فرد شعر أمريكي", price: 250, durationMinutes: 40, category: "COLOR_KERATIN", sortOrder: 17 },

    // أسعار الجرام (بروتين / كافيار / بوتكس / كيراتين)
    { nameAr: "فرد بروتين برازيلي (سعر الجرام)", price: 70, durationMinutes: 60, category: "COLOR_KERATIN", sortOrder: 18, description: "70 جنيه / جرام - بروتين برازيلي أصلي بدون فورمالين" },
    { nameAr: "جلسة كافيار معالج (سعر الجرام)", price: 80, durationMinutes: 60, category: "COLOR_KERATIN", sortOrder: 19, description: "80 جنيه / جرام - تغذية وترميم عميق لبصيلات الشعر" },
    { nameAr: "جلسة بوتكس للشعر (سعر الجرام)", price: 85, durationMinutes: 60, category: "COLOR_KERATIN", sortOrder: 20, description: "85 جنيه / جرام - فرد وترطيب عالي الكثافة" },
    { nameAr: "فرد كيراتين علاجي (سعر الجرام)", price: 60, durationMinutes: 60, category: "COLOR_KERATIN", sortOrder: 21, description: "60 جنيه / جرام - لمعان ونعومة طبيعية" },

    // باديكير
    { nameAr: "باديكير قدم", price: 350, durationMinutes: 40, category: "VIP_PACKAGES", sortOrder: 22 },
    { nameAr: "باديكير يد", price: 250, durationMinutes: 30, category: "VIP_PACKAGES", sortOrder: 23 },
    { nameAr: "باديكير علاجي متكامل (يد + قدم)", price: 750, durationMinutes: 60, category: "VIP_PACKAGES", sortOrder: 24 },

    // سبا واسترخاء ومساج
    { nameAr: "ساونا علاجي", price: 400, durationMinutes: 30, category: "VIP_PACKAGES", sortOrder: 25 },
    { nameAr: "استيم بخار تركي + ليفة مغربي", price: 500, durationMinutes: 45, category: "VIP_PACKAGES", sortOrder: 26 },
    { nameAr: "جاكوزي مائي دافئ", price: 350, durationMinutes: 30, category: "VIP_PACKAGES", sortOrder: 27 },
    { nameAr: "مساج استرخائي (45 دقيقة - مدرب)", price: 650, durationMinutes: 45, category: "VIP_PACKAGES", sortOrder: 28 },
    { nameAr: "مساج ملكي VIP كامل (60 دقيقة)", price: 800, durationMinutes: 60, category: "VIP_PACKAGES", sortOrder: 29 },
  ];

  for (const s of nasrServices) {
    await prisma.service.create({
      data: {
        branchId: nasrBranch.id,
        nameAr: s.nameAr,
        price: s.price,
        durationMinutes: s.durationMinutes,
        category: s.category,
        sortOrder: s.sortOrder,
        description: s.description || null,
        isActive: true,
      },
    });
  }

  // --- فرع حدائق القبة من الصورة الرسمية (اسعار الحدائق.jpeg) ---
  const qobbaServices = [
    // الحلاقة والعناية
    { nameAr: "قص الشعر", price: 170, durationMinutes: 30, category: "HAIR", sortOrder: 1 },
    { nameAr: "قص ودقن", price: 280, durationMinutes: 45, category: "HAIR", sortOrder: 2 },
    { nameAr: "قص أطفال", price: 150, durationMinutes: 20, category: "KIDS", sortOrder: 3 },
    { nameAr: "حلاقة وتحديد دقن", price: 100, durationMinutes: 20, category: "BEARD", sortOrder: 4 },
    { nameAr: "استشوار وتصفيف", price: 100, durationMinutes: 15, category: "HAIR", sortOrder: 5 },
    { nameAr: "وكس لإزالة الشعر", price: 100, durationMinutes: 15, category: "SKIN_CARE", sortOrder: 6 },
    { nameAr: "سكرب للوجه", price: 50, durationMinutes: 15, category: "SKIN_CARE", sortOrder: 7 },

    // البشرة والشعر
    { nameAr: "تنظيف البشرة VIP", price: 400, durationMinutes: 40, category: "SKIN_CARE", sortOrder: 8 },
    { nameAr: "تنظيف البشرة هيدروفيشيال", price: 700, durationMinutes: 50, category: "SKIN_CARE", sortOrder: 9 },
    { nameAr: "حمام زيت عادي", price: 100, durationMinutes: 25, category: "HAIR", sortOrder: 10 },
    { nameAr: "حمام زيت أمبول", price: 150, durationMinutes: 30, category: "HAIR", sortOrder: 11 },
    { nameAr: "جلسة ترميم الشعر", price: 400, durationMinutes: 45, category: "COLOR_KERATIN", sortOrder: 12 },

    // الصبغات والتصفيف
    { nameAr: "صبغة دقن", price: 100, durationMinutes: 25, category: "BEARD", sortOrder: 13 },
    { nameAr: "صبغة شعر", price: 150, durationMinutes: 35, category: "COLOR_KERATIN", sortOrder: 14 },
    { nameAr: "صبغة سيلفر ملكية", price: 500, durationMinutes: 60, category: "COLOR_KERATIN", sortOrder: 15 },
    { nameAr: "تسريحة ويفي", price: 70, durationMinutes: 20, category: "HAIR", sortOrder: 16 },
    { nameAr: "ويفي برم", price: 150, durationMinutes: 35, category: "HAIR", sortOrder: 17 },
    { nameAr: "فرد الشعر", price: 150, durationMinutes: 35, category: "COLOR_KERATIN", sortOrder: 18 },
    { nameAr: "فرد أمريكي", price: 200, durationMinutes: 40, category: "COLOR_KERATIN", sortOrder: 19 },
    { nameAr: "توبيك إخفاء فراغات", price: 70, durationMinutes: 10, category: "HAIR", sortOrder: 20 },
    { nameAr: "توبيك كامل للرأس", price: 100, durationMinutes: 15, category: "HAIR", sortOrder: 21 },

    // العناية باليدين والقدمين
    { nameAr: "بديكير إيد", price: 200, durationMinutes: 30, category: "VIP_PACKAGES", sortOrder: 22 },
    { nameAr: "بديكير قدم", price: 250, durationMinutes: 40, category: "VIP_PACKAGES", sortOrder: 23 },
    { nameAr: "بديكير علاجي متكامل", price: 450, durationMinutes: 50, category: "VIP_PACKAGES", sortOrder: 24 },
  ];

  for (const s of qobbaServices) {
    await prisma.service.create({
      data: {
        branchId: qobbaBranch.id,
        nameAr: s.nameAr,
        price: s.price,
        durationMinutes: s.durationMinutes,
        category: s.category,
        sortOrder: s.sortOrder,
        description: null,
        isActive: true,
      },
    });
  }
  console.log("✅ Services catalog seeded: 29 for Nasr City + 24 for Hadayek El-Kobba.");

  // ========================================================
  // 6. SETUP BRANCH-SPECIFIC OFFERS
  // ========================================================
  console.log("🔥 6. Setting up official offers per branch...");

  // عروض فرع حدائق القبة (من عرض الحدائق.jpeg)
  await prisma.offer.create({
    data: {
      titleAr: "عرض العريس GROOM VIP",
      badge: "وفر 401 ج.م 🔥",
      price: 1099,
      oldPrice: 1500,
      discountPercent: 27,
      image: "/offers/offer-qobba-groom.jpg",
      description: "تجهيز متكامل لإطلالة العريس المثالية في صالون صدام حدائق القبة",
      features: JSON.stringify([
        "قص شعر ودقن احترافي",
        "تنظيف بشرة VIP متكامل",
        "حمام زيت ساخن وترطيب عميق",
        "سشوار وتصفيف لوك المناسبات",
        "وكس كامل للبشرة",
        "توبيك NEW لملء فراغات الشعر",
      ]),
      branchId: qobbaBranch.id,
      announcementText: "عرض العريس VIP فقط بـ 1099 جنيه بدلاً من 1500 بفرع حدائق القبة",
      sortOrder: 1,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "عرض العريس GROOM CLASSIC",
      badge: "وفر 251 ج.م",
      price: 799,
      oldPrice: 1050,
      discountPercent: 24,
      image: "/offers/offer-qobba-groom.jpg",
      description: "باكدج كلاسيكي أنيق لتجهيز العريس بأفضل سعر وجودة ملكية",
      features: JSON.stringify([
        "قص شعر ودقن",
        "تنظيف بشرة سوفت",
        "حمام زيت ساخن",
        "سشوار وتصفيف",
        "وكس كامل للبشرة",
      ]),
      branchId: qobbaBranch.id,
      announcementText: "عرض العريس كلاسيك بـ 799 جنيه فقط بفرع حدائق القبة",
      sortOrder: 2,
      isActive: true,
    },
  });

  // عروض فرع مدينة نصر (من الصور نصر 1 إلى نصر 8)
  await prisma.offer.create({
    data: {
      titleAr: "عرض العريس الملكي المتكامل (3500)",
      badge: "العرض الملكي الأقوى 👑",
      price: 3500,
      oldPrice: 4000,
      discountPercent: 13,
      image: "/offers/offer-groom-3500.jpg",
      description: "مش مجرد حلاقة .. دي تجربة صدام VIP. تجربة متكاملة تخليك في أفضل لوك وأعلى استرخاء قبل أهم يوم في حياتك",
      features: JSON.stringify([
        "مساج استرخائي كامل للجسم",
        "ساونا علاجية واستيم وبخار تركي + ليفة مغربي",
        "جاكوزي مائي دافئ",
        "باديكير كامل لليدين والقدمين",
        "قص شعر ملكي وتحديد الذقن باحتراف",
        "تنظيف بشرة هيدروفاشيل 11 مرحلة متكاملة",
        "وكس للبشرة وإزالة الرؤوس السوداء",
        "صبغة شعر احترافية + جلسة ترميم شعر",
        "حمام زيت + حمام كريم وترطيب",
        "سشوار وتثبيت اللوك + شاور وبعد الشاور تعطير",
        "مميزات إضافية: لوكر خاص، مشروبات مجانية، غرفة تغيير خاصة، تعقيم كامل وأدوات شخصية",
      ]),
      branchId: nasrBranch.id,
      announcementText: "عرض العريس الملكي بفرع مدينة نصر بـ 3500 بدلاً من 4000 ج.م",
      sortOrder: 1,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "عرض العريس GROOM VIP EXPERIENCE (2300)",
      badge: "وفر 1150 ج.م 🔥",
      price: 2300,
      oldPrice: 3450,
      discountPercent: 33,
      image: "/offers/offer-groom-vip-2300.jpg",
      description: "مش مجرد خدمات .. دي تجربة ملكية متكاملة للعريس والأفراح بفرع مدينة نصر",
      features: JSON.stringify([
        "قص شعر وتحديد الذقن",
        "تنظيف بشرة هيدروفاشيل 7 مراحل",
        "وكس للبشرة وصبغة شعر",
        "حمام زيت + حمام كريم",
        "مساج وساونا واستيم وليفة مغربي",
        "سشوار وتثبيت اللوك وتوبيك لملء الفراغات",
        "باديكير يد وباديكير قدم",
        "شاور وبعد الشاور تعطير + غرفة تغيير خاصة",
      ]),
      branchId: nasrBranch.id,
      announcementText: "عرض العريس 2300 بفرع مدينة نصر بدلاً من 3450 ج.م",
      sortOrder: 2,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "VIP RELAXATION PACKAGE (مساج وسبا وحمام مغربي)",
      badge: "خصم 46% 🔥",
      price: 1499,
      oldPrice: 2750,
      discountPercent: 46,
      image: "/offers/offer-relaxation-1499.jpg",
      description: "دلل نفسك.. خد وقتك لأنك تستحق. تجربة الراحة والعناية الكاملة في مكان واحد",
      features: JSON.stringify([
        "جلسة مساج استرخائي كاملة",
        "حمام مغربي أصلي بالليفة والصابون المغربي",
        "حجامة علاجية وحجامة نارية لتنشيط الجسم",
        "ساونا علاجية وجاكوزي مائي منعش",
        "استرخاء تام ونشاط وحيوية وصحة ونظافة وتحسين الدورة الدموية",
      ]),
      branchId: nasrBranch.id,
      announcementText: "باكدج الاسترخاء والمساج بـ 1499 بدلاً من 2750 ج.م بفرع مدينة نصر",
      sortOrder: 3,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "العرض المميز VIP CARE PACKAGE",
      badge: "وفر 501 ج.م",
      price: 1499,
      oldPrice: 2000,
      discountPercent: 25,
      image: "/offers/offer-vip-care-1499.jpg",
      description: "خدمات متكاملة .. للعناية بمظهرك وأناقتك بفرع مدينة نصر",
      features: JSON.stringify([
        "قص شعر وتحديد الذقن",
        "سشوار وتثبيت اللوك",
        "توبيك لملء الفراغات في الشعر",
        "تنظيف بشرة سوفت",
        "باديكير يد وباديكير قدم",
        "شاور وبعد الشاور تعطير",
        "مميزات إضافية: غسيل شعر قبل الخدمة وغسيل شعر بعد الخدمة",
      ]),
      branchId: nasrBranch.id,
      announcementText: "العرض المميز VIP CARE PACKAGE بـ 1499 ج.م بفرع مدينة نصر",
      sortOrder: 4,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "باكدج العناية المتكاملة شعر ودقن VIP",
      badge: "شعر ودقن VIP 👑",
      price: 1000,
      oldPrice: 1450,
      discountPercent: 31,
      image: "/offers/offer-vip-1000.jpg",
      description: "إطلالة متكاملة وأناقة كاملة للرجل في فرع مدينة نصر",
      features: JSON.stringify([
        "قص الشعر الاحترافي",
        "حلاقة وتحديد ورسم الدقن",
        "سشوار وتصفيف لوك عصري",
        "وكس للبشرة",
        "بشرة تفتيح وترطيب",
        "حمام كريم للشعر",
      ]),
      branchId: nasrBranch.id,
      announcementText: "باكدج الشعر والدقن والعناية VIP فقط بـ 1000 جنيه بفرع مدينة نصر",
      sortOrder: 5,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "عرض صاحب العريس (إطلالة مميزة في أهم يوم)",
      badge: "وفر 201 ج.م",
      price: 399,
      oldPrice: 600,
      discountPercent: 33,
      image: "/offers/offer-groom-friend-399.jpg",
      description: "إطلالة مميزة ومظهر متألق لصاحب العريس وأصدقائه - متاح بفرعي عباس العقاد وحدائق القبة",
      features: JSON.stringify([
        "قص شعر بأحدث القصات",
        "تحديد الذقن بدقة",
        "سشوار وتثبيت اللوك",
        "سكرب وانتعاش للبشرة",
        "فوطة ساخنة وفوطة صاقعة",
        "غسيل شعر قبل الخدمة وبعد الخدمة",
      ]),
      branchId: null, // متاح في الفرعين
      announcementText: "عرض صاحب العريس بـ 399 جنيه فقط بدلاً من 600 ج.م بجميع الفروع",
      sortOrder: 6,
      isActive: true,
    },
  });

  await prisma.offer.create({
    data: {
      titleAr: "عرض خاص SADDAM VIP COMBO (باكدج الشعر والدقن)",
      badge: "خصم حصري 🔥",
      price: 299,
      oldPrice: 450,
      discountPercent: 33,
      image: "/offers/offer-combo-299.jpg",
      description: "إطلالة متكاملة ... في تجربة VIP استثنائية بفرع عباس العقاد مدينة نصر",
      features: JSON.stringify([
        "قص شعر VIP",
        "تحديد دقن باحتراف",
        "فوطة ساخنة + فوطة باردة صاقعة",
        "سكرب وانتعاش كامل للوجه",
      ]),
      branchId: nasrBranch.id,
      announcementText: "باكدج الشعر والدقن VIP بـ 299 جنيه بدلاً من 450 ج.م بفرع عباس العقاد فقط",
      sortOrder: 7,
      isActive: true,
    },
  });
  console.log("✅ All offers seeded cleanly.");

  console.log("🎉 Full Production Setup for SALON SADDAM Complete!");
}

main()
  .catch((e) => {
    console.error("❌ Setup Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
