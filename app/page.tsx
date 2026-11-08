"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardQRModal from "@/components/CardQRModal";
import {
  Scissors,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  QrCode,
  LogIn,
  ShoppingBag,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  AlertCircle,
  ExternalLink,
  Flame,
  Award,
} from "lucide-react";

export default function HomePage() {
  // Global State
  const [settings, setSettings] = useState<any>(null);
  const [branches, setBranches] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected Booking Details
  const [selectedBranchId, setSelectedBranchId] = useState<string>("");
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>(""); // empty = Any Specialist
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("06:00 PM");
  const [notes, setNotes] = useState<string>("");

  // Category filter
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  // Auth / Customer State
  const [customer, setCustomer] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authStep, setAuthStep] = useState<"INPUT" | "OTP">("INPUT");
  const [regForm, setRegForm] = useState({ name: "", phone: "", email: "" });
  const [otpCode, setOtpCode] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Confirmed Booking State
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [submittingBooking, setSubmittingBooking] = useState(false);

  // QR Modal
  const [showQrModal, setShowQrModal] = useState(false);

  // Available Time Slots
  const timeSlots = [
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
    "01:00 AM",
  ];

  // Initialize Data
  useEffect(() => {
    // Set default date to today
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);

    // Check saved customer
    try {
      const saved = localStorage.getItem("saddam_customer");
      if (saved) setCustomer(JSON.parse(saved));
    } catch {}

    async function loadData() {
      try {
        setLoading(true);
        const [resSet, resB, resS, resSpec] = await Promise.all([
          fetch("/api/settings"),
          fetch("/api/branches"),
          fetch("/api/services"),
          fetch("/api/specialists"),
        ]);

        const [dataSet, dataB, dataS, dataSpec] = await Promise.all([
          resSet.json(),
          resB.json(),
          resS.json(),
          resSpec.json(),
        ]);

        if (dataSet.success && dataSet.settings) setSettings(dataSet.settings);
        if (dataB.success && dataB.branches) {
          setBranches(dataB.branches);
          if (dataB.branches.length > 0) {
            setSelectedBranchId(dataB.branches[0].id);
          }
        }
        if (dataS.success && dataS.services) setServices(dataS.services);
        if (dataSpec.success && dataSpec.specialists) setSpecialists(dataSpec.specialists);
      } catch (e) {
        console.error("Failed to load initial data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter Specialists by Branch
  const filteredSpecialists = specialists.filter(
    (s) => !selectedBranchId || s.branchId === selectedBranchId
  );

  // Filter Services by Category
  const filteredServices = services.filter((s) => {
    if (activeCategory === "ALL") return true;
    return s.category === activeCategory;
  });

  // Calculate Totals
  const totalAmount = selectedServices.reduce((sum, s) => sum + Number(s.price || 0), 0);
  const totalDuration = selectedServices.reduce(
    (sum, s) => sum + Number(s.durationMinutes || 30),
    0
  );

  // Toggle Service Selection
  const toggleService = (srv: any) => {
    setSelectedServices((prev) => {
      const exists = prev.some((item) => item.id === srv.id);
      if (exists) {
        return prev.filter((item) => item.id !== srv.id);
      } else {
        return [...prev, srv];
      }
    });
  };

  // Submit Register / Send OTP
  const handleStartAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name.trim() || !regForm.phone.trim()) {
      setAuthError("الاسم ورقم الهاتف مطلوبين");
      return;
    }

    try {
      setAuthLoading(true);
      setAuthError("");
      const res = await fetch("/api/auth/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "REGISTER",
          name: regForm.name.trim(),
          phone: regForm.phone.trim(),
          email: regForm.email.trim() || null,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setServerOtp(data.verificationCode);
        setAuthStep("OTP");
      } else {
        setAuthError(data.error || "فشل إرسال كود التفعيل");
      }
    } catch {
      setAuthError("تعذر الاتصال بالخادم");
    } finally {
      setAuthLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) {
      setAuthError("يرجى كتابة كود التفعيل المكون من 6 أرقام");
      return;
    }

    try {
      setAuthLoading(true);
      setAuthError("");
      const res = await fetch("/api/auth/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "VERIFY_OTP",
          phone: regForm.phone.trim(),
          code: otpCode.trim(),
        }),
      });

      const data = await res.json();
      if (data.success && data.customer) {
        setCustomer(data.customer);
        localStorage.setItem("saddam_customer", JSON.stringify(data.customer));
        setShowAuthModal(false);
        // Automatically proceed to book if services are selected
        if (selectedServices.length > 0) {
          executeBooking(data.customer.id);
        }
      } else {
        setAuthError(data.error || "كود التفعيل غير صحيح");
      }
    } catch {
      setAuthError("تعذر التحقق من الكود");
    } finally {
      setAuthLoading(false);
    }
  };

  // Execute Final Booking
  const executeBooking = async (customerIdToUse?: string) => {
    const custId = customerIdToUse || customer?.id;
    if (!custId) {
      setShowAuthModal(true);
      return;
    }

    if (selectedServices.length === 0) {
      alert("برجاء اختيار خدمة واحدة على الأقل لإتمام الحجز");
      return;
    }

    try {
      setSubmittingBooking(true);
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: custId,
          branchId: selectedBranchId,
          specialistId: selectedSpecialistId || null,
          serviceIds: selectedServices.map((s) => ({
            id: s.id,
            nameAr: s.nameAr,
            price: s.price,
            durationMinutes: s.durationMinutes,
          })),
          bookingDate: selectedDate,
          timeSlot: selectedTimeSlot,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success && data.booking) {
        setConfirmedBooking(data.booking);
        // Reset selections
        setSelectedServices([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert(data.error || "فشل إتمام الحجز");
      }
    } catch {
      alert("حدث خطأ أثناء إرسال الحجز");
    } finally {
      setSubmittingBooking(false);
    }
  };

  const selectedBranch = branches.find((b) => b.id === selectedBranchId);

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* ─────────────────────────────────────────────────────────────
          1. LUXURY TOP NAVIGATION BAR
         ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#0f0f15]/90 backdrop-blur-md border-b border-amber-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg">
        {/* Logo and Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-md shadow-amber-500/20 bg-black shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="صالون حلاقة صدام" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-amber-400 tracking-wide">
                صالون حلاقة صدام
              </h1>
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>
            <p className="text-[10px] sm:text-xs text-amber-200/60 font-mono font-bold tracking-wider uppercase">
              SADDAM BARBER SHOP • VIP LUXURY
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Card 2 QR Button */}
          <button
            onClick={() => setShowQrModal(true)}
            className="py-1.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-black transition flex items-center gap-1.5 shadow-xs"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">كارت الـ 2 QR</span>
          </button>

          {/* Customer Profile / Login */}
          {customer ? (
            <div className="flex items-center gap-2 py-1 px-3 rounded-xl bg-white/5 border border-amber-500/30 text-xs">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold text-white max-w-[100px] truncate">{customer.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-black">
                VIP
              </span>
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthStep("INPUT");
                setShowAuthModal(true);
              }}
              className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              <User className="w-3.5 h-3.5" />
              <span>تسجيل / دخول</span>
            </button>
          )}

          {/* Staff Login Direct Shortcut */}
          <Link
            href="/login"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition"
            title="دخول الطاقم والإدارة"
          >
            <LogIn className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION WITH GOLD ACCENTS
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-10 px-4 sm:px-8 border-b border-amber-500/15 bg-gradient-to-b from-[#14141c] via-[#0d0d12] to-[#0a0a0e] text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>تجربة الحلاقة والعناية الملكية الأولى في مصر 👑</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            ليس مجرد صالون،{" "}
            <span className="gold-gradient-text">بل تجربة ملوك متكاملة</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed">
            احجز موعدك واختر مصففك المفضل في فرع{" "}
            <strong className="text-amber-400">حدائق القبة</strong> أو فرع{" "}
            <strong className="text-amber-400">مدينة نصر</strong> بكل سهولة مع أفضل الخامات الإيطالية والبروتين الأصلي.
          </p>

          {/* Live Branches Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {branches.map((b) => {
              const isSelected = selectedBranchId === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`py-2 px-4 rounded-2xl text-xs font-black transition flex items-center gap-2 ${
                    isSelected
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400"
                      : "bg-[#181822] hover:bg-[#20202c] text-slate-300 border border-amber-500/20"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{b.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CONFIRMED BOOKING SUCCESS CARD (IF ANY)
         ───────────────────────────────────────────────────────────── */}
      {confirmedBooking && (
        <section className="max-w-xl mx-auto p-4 sm:p-6 w-full animate-fade-in">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1a1a24] to-[#121218] border-2 border-emerald-500/50 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                تم تأكيد حجزك بنجاح! 🎉
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                رقم الحجز: #{confirmedBooking.bookingNumber}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/20 text-right space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">الفرع:</span>
                <span className="font-bold text-amber-300">{confirmedBooking.branch?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">التاريخ والوقت:</span>
                <span className="font-bold text-white">
                  {confirmedBooking.bookingDate} • {confirmedBooking.timeSlot}
                </span>
              </div>
              {confirmedBooking.specialist && (
                <div className="flex justify-between">
                  <span className="text-slate-400">المتخصص:</span>
                  <span className="font-bold text-amber-300">{confirmedBooking.specialist?.name}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-white/10 pt-2 font-black">
                <span className="text-slate-300">الإجمالي المقدر:</span>
                <span className="font-mono text-amber-400 text-sm">
                  {confirmedBooking.totalAmount} ج.م
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium">
              نحن بانتظارك في الموعد المحدد لتقديم أرقى خدمة عناية وحلاقة ملكية! 👑
            </p>

            <button
              onClick={() => setConfirmedBooking(null)}
              className="py-2.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition"
            >
              حجز موعد إضافي ➕
            </button>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN BOOKING WORKFLOW (BRANCH -> SPECIALIST -> SERVICES)
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
        {/* STEP 1: CHOOSE SPECIALIST */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                1
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                اختر المصفف / المتخصص
              </h3>
            </div>
            <span className="text-xs text-amber-300/80 font-bold">
              {filteredSpecialists.length} متخصصين متاحين
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {/* Any Specialist Card */}
            <div
              onClick={() => setSelectedSpecialistId("")}
              className={`cursor-pointer p-4 rounded-2xl border transition text-center space-y-2 flex flex-col items-center justify-center ${
                selectedSpecialistId === ""
                  ? "bg-amber-500/15 border-amber-400 ring-2 ring-amber-400 shadow-md shadow-amber-500/10"
                  : "bg-[#14141c] hover:bg-[#1a1a24] border-white/10"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center text-xl font-black">
                ⚡
              </div>
              <div>
                <p className="font-black text-xs sm:text-sm text-white">أي متخصص متاح</p>
                <span className="text-[10px] text-amber-300 font-bold">أول كرسي خالي</span>
              </div>
            </div>

            {/* Specialist Cards */}
            {filteredSpecialists.map((spec) => {
              const isSelected = selectedSpecialistId === spec.id;
              const isWithClient = spec.status === "WITH_CLIENT";

              return (
                <div
                  key={spec.id}
                  onClick={() => setSelectedSpecialistId(spec.id)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition text-center space-y-2 flex flex-col items-center relative ${
                    isSelected
                      ? "bg-amber-500/15 border-amber-400 ring-2 ring-amber-400 shadow-md shadow-amber-500/10"
                      : "bg-[#14141c] hover:bg-[#1a1a24] border-white/10"
                  }`}
                >
                  {/* Status Indicator Pill */}
                  <span
                    className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-black ${
                      isWithClient
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    }`}
                  >
                    {isWithClient ? "على الكرسي 💺" : "متاح 🟢"}
                  </span>

                  {/* Specialist Photo */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-md bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={spec.photo || "/logo.jpg"}
                      alt={spec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-black text-xs text-white truncate max-w-[120px]">
                      {spec.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate max-w-[120px]">{spec.title}</p>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{spec.rating}</span>
                    <span className="text-slate-500">• ك {spec.chairNumber}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 2: CHOOSE SERVICES */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                2
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                اختر الخدمات المطلوبة
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {[
                { id: "ALL", label: "جميع الخدمات" },
                { id: "HAIR", label: "شعر ✂️" },
                { id: "BEARD", label: "دقن 🧔" },
                { id: "VIP_PACKAGES", label: "بكجات VIP 👑" },
                { id: "SKIN_CARE", label: "عناية بالبشرة 🧖" },
                { id: "COLOR_KERATIN", label: "فرد وصبغة 🎨" },
                { id: "KIDS", label: "أطفال 👦" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`py-1.5 px-3 rounded-xl whitespace-nowrap font-bold transition text-xs ${
                    activeCategory === c.id
                      ? "bg-amber-500 text-slate-950 font-black shadow-xs"
                      : "bg-[#181822] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredServices.map((srv) => {
              const isSelected = selectedServices.some((item) => item.id === srv.id);
              return (
                <div
                  key={srv.id}
                  onClick={() => toggleService(srv)}
                  className={`cursor-pointer p-4 rounded-2xl border transition flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400"
                      : "bg-[#14141c] hover:bg-[#181824] border-white/10"
                  }`}
                >
                  <div className="space-y-1 flex-1">
                    <h4 className="font-black text-sm text-white">{srv.nameAr}</h4>
                    {srv.description && (
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {srv.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 pt-1 text-[11px]">
                      <span className="font-mono text-amber-400 font-black text-sm">
                        {srv.price} ج.م
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        <span>{srv.durationMinutes} دقيقة</span>
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition ${
                      isSelected
                        ? "bg-amber-500 text-slate-950"
                        : "bg-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {isSelected ? "✓" : "+"}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 3: DATE & TIME SLOT SELECTION */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
              3
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              تحديد التاريخ وموعد الحضور
            </h3>
          </div>

          <div className="p-5 rounded-3xl bg-[#14141c] border border-white/10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>تاريخ الموعد:</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Notes Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  ملاحظات أو طلبات خاصة (اختياري):
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="مثال: تجهيز عريس، حلاقة مناسبة خاصة..."
                  className="w-full py-2.5 px-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-xs font-bold text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>اختر الوقت المناسب:</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-1.5 px-3 rounded-xl text-xs font-mono font-bold transition ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                          : "bg-black/40 text-slate-300 hover:text-white border border-white/5"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          4. FLOATING SUMMARY & CONFIRMATION BAR
         ───────────────────────────────────────────────────────────── */}
      {selectedServices.length > 0 && (
        <aside className="sticky bottom-0 z-40 bg-[#0f0f15]/95 backdrop-blur-md border-t border-amber-500/30 p-4 shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>الخدمات المحددة:</span>
                <strong className="font-mono text-white text-sm">
                  ({selectedServices.length})
                </strong>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>الوقت المقدر:</span>
                <strong className="font-mono text-white">{totalDuration} دقيقة</strong>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <span>الإجمالي:</span>
                <strong className="font-mono text-amber-400 text-lg font-black">
                  {totalAmount} ج.م
                </strong>
              </div>
            </div>

            <button
              onClick={() => executeBooking()}
              disabled={submittingBooking}
              className="w-full sm:w-auto py-3 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50"
            >
              <span>{submittingBooking ? "جارٍ تسجيل الحجز..." : "تأكيد حجز الموعد الآن 👑"}</span>
            </button>
          </div>
        </aside>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. CUSTOMER AUTH & GMAIL OTP MODAL
         ───────────────────────────────────────────────────────────── */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans"
          dir="rtl"
        >
          <div className="relative w-full max-w-md bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute left-4 top-4 p-1.5 rounded-xl text-slate-400 hover:text-white bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto text-xl font-bold">
                👑
              </div>
              <h3 className="text-lg font-black text-white">تسجيل حساب عميل صالون صدام</h3>
              <p className="text-xs text-amber-200/70">
                سجل حسابك الدائم لتفعيل الحجز والحصول على نقاط وخصومات الـ VIP
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {authStep === "INPUT" ? (
              <form onSubmit={handleStartAuth} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">الاسم ثلاثي:</label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    placeholder="مثال: أحمد سامي"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-bold focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">رقم الهاتف (موبايل):</label>
                  <input
                    type="tel"
                    required
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    placeholder="010XXXXXXXX"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400 text-left"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">
                    البريد الإلكتروني (Gmail لاستلام كود التفعيل):
                  </label>
                  <input
                    type="email"
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    placeholder="example@gmail.com"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono focus:outline-none focus:border-amber-400 text-left"
                  />
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  <span>{authLoading ? "جارٍ الإرسال..." : "إرسال كود التفعيل 📩"}</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-3.5">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1 text-xs text-amber-200">
                  <p>تم إرسال كود التفعيل بنجاح!</p>
                  {serverOtp && (
                    <p className="font-mono text-sm font-black text-amber-400">
                      كود التفعيل للتجربة الفورية: {serverOtp}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">أدخل كود الـ OTP (6 أرقام):</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="123456"
                    className="w-full py-3 px-4 rounded-xl bg-black/60 border border-amber-500/40 text-center font-mono text-xl tracking-widest text-amber-400 font-black focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{authLoading ? "جارٍ التحقق..." : "تأكيد الحساب ومتابعة الحجز ✅"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. LUXURY CARD 2 QR MODAL
         ───────────────────────────────────────────────────────────── */}
      <CardQRModal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        hadayekPhone={settings?.hadayekPhone || "01018671000"}
        nasrCityPhone={settings?.nasrCityPhone || "01118400150"}
        hotline={settings?.hotline || "19888"}
      />
    </div>
  );
}
