"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardQRModal from "@/components/CardQRModal";
import CustomerChatWidget from "@/components/CustomerChatWidget";
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
  AlertTriangle,
  Bell,
  ExternalLink,
  Flame,
  Award,
  Check,
  Heart,
  Coffee,
  Sparkle,
  Tag,
  LogOut,
} from "lucide-react";

export default function HomePage() {
  // Global State
  const [settings, setSettings] = useState<any>(null);
  const [branches, setBranches] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected Booking Details
  const [selectedBranchId, setSelectedBranchId] = useState<string>("");
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>("");
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
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authSuccessMsg, setAuthSuccessMsg] = useState("");
  const [showCustomerMenu, setShowCustomerMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Custom Toast State (No Windows native alerts!)
  const [pageToast, setPageToast] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);

  const showToast = (type: "success" | "error" | "info", message: string) => {
    setPageToast({ type, message });
    setTimeout(() => {
      setPageToast((prev) => (prev?.message === message ? null : prev));
    }, 4500);
  };

  const handleCustomerLogout = () => {
    setShowLogoutModal(true);
  };

  const executeCustomerLogout = () => {
    localStorage.removeItem("saddam_customer");
    setCustomer(null);
    setShowCustomerMenu(false);
    setShowLogoutModal(false);
    showToast("info", "تم تسجيل خروجك من الحساب بنجاح 🚪");
  };

  // Confirmed Booking & Schedule Modal State
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [submittingBooking, setSubmittingBooking] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // 15-Minute Upcoming Appointment Reminder State
  const [activeAppointmentReminder, setActiveAppointmentReminder] = useState<any>(null);

  // QR Modal
  const [showQrModal, setShowQrModal] = useState(false);

  // Day Off Checker (Barbers Weekly Day Off e.g. MONDAY)
  const checkIsDayOff = (dateStr: string) => {
    if (!dateStr || !settings?.isDayOffEnabled) return false;
    try {
      const d = new Date(dateStr + "T12:00:00Z");
      const dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
      const dayName = dayNames[d.getUTCDay()];
      return dayName === (settings?.weeklyDayOff || "MONDAY");
    } catch {
      return false;
    }
  };

  // Customer Royal Reminder Audio Chime
  const playCustomerReminderChime = () => {
    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;
      [[659.25, 0], [880, 0.25], [1318.51, 0.5]].forEach(([freq, delay]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.4, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.45);
      });
    } catch {}
  };

  // Available Time Slots
  const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
    "12:00 AM",
    "12:30 AM",
    "01:00 AM",
    "01:30 AM",
  ];

  // 15-Minute Reminder Polling
  useEffect(() => {
    if (!customer?.id) return;

    const checkUpcomingAppointment = async () => {
      try {
        const res = await fetch(`/api/bookings?customerId=${customer.id}&status=CONFIRMED`);
        const data = await res.json();
        if (data.success && data.bookings && data.bookings.length > 0) {
          const today = new Date().toISOString().split("T")[0];
          const todayBookings = data.bookings.filter((b: any) => b.bookingDate === today);
          if (todayBookings.length > 0) {
            const b = todayBookings[0];
            const parts = (b.timeSlot || "").trim().split(" ");
            if (parts.length === 2) {
              let [h, m] = parts[0].split(":").map(Number);
              const period = parts[1];
              if (period === "PM" && h < 12) h += 12;
              if (period === "AM" && h === 12) h = 0;
              const slotMin = h * 60 + m;
              const nowMin = new Date().getHours() * 60 + new Date().getMinutes();
              const diff = slotMin - nowMin;
              const reminderLead = settings?.reminderMinutesBefore || 15;
              if (diff >= -15 && diff <= reminderLead + 10) {
                setActiveAppointmentReminder({ ...b, diffMinutes: diff });
                const remindedKey = `saddam_reminded_${b.id}`;
                if (!sessionStorage.getItem(remindedKey)) {
                  sessionStorage.setItem(remindedKey, "1");
                  playCustomerReminderChime();
                }
              }
            }
          }
        }
      } catch {}
    };

    checkUpcomingAppointment();
    const interval = setInterval(checkUpcomingAppointment, 60000);
    return () => clearInterval(interval);
  }, [customer, settings]);

  // Initialize Data
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);

    try {
      const saved = localStorage.getItem("saddam_customer");
      if (saved) setCustomer(JSON.parse(saved));
    } catch {}

    async function loadData() {
      try {
        setLoading(true);
        const [resSet, resB, resS, resSpec, resO] = await Promise.all([
          fetch("/api/settings", { cache: "no-store" }),
          fetch("/api/branches", { cache: "no-store" }),
          fetch("/api/services", { cache: "no-store" }),
          fetch("/api/specialists", { cache: "no-store" }),
          fetch("/api/offers?activeOnly=true", { cache: "no-store" }),
        ]);

        const [dataSet, dataB, dataS, dataSpec, dataO] = await Promise.all([
          resSet.json(),
          resB.json(),
          resS.json(),
          resSpec.json(),
          resO.json(),
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
        if (dataO.success && dataO.offers) setOffers(dataO.offers);
      } catch (e) {
        console.error("Failed to load initial data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter Specialists by Branch & Sort by Active Shift Presence
  const filteredSpecialists = specialists
    .filter((s) => !selectedBranchId || s.branchId === selectedBranchId)
    .sort((a, b) => {
      const order: Record<string, number> = {
        AVAILABLE: 1,
        WITH_CLIENT: 2,
        BREAK: 3,
        OFF_DUTY: 4,
        DAY_OFF: 5,
        ABSENT: 6,
      };
      return (order[a.status] || 99) - (order[b.status] || 99);
    });

  // Filter Offers by Branch
  const filteredOffers = offers.filter(
    (o) => !selectedBranchId || !o.branchId || o.branchId === selectedBranchId
  );

  // Quick Select an Offer / Package
  const handleSelectOffer = (offer: any) => {
    const offerItem = {
      id: `offer-${offer.id}`,
      nameAr: `${offer.titleAr} (${offer.badge || "عرض خاص"})`,
      price: offer.price,
      durationMinutes: 60,
      image: offer.image,
    };
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === offerItem.id);
      if (exists) return prev;
      return [...prev, offerItem];
    });

    if (offer.branchId) {
      setSelectedBranchId(offer.branchId);
    }

    const stepEl = document.getElementById("step-specialists");
    if (stepEl) {
      stepEl.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Submit Register / Send OTP via Gmail
  const handleStartAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name.trim() || !regForm.phone.trim()) {
      setAuthError("الاسم ورقم الهاتف مطلوبان");
      return;
    }
    if (!regForm.email.trim()) {
      setAuthError("البريد الإلكتروني (Gmail) مطلوب لاستلام كود التفعيل");
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
          email: regForm.email.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setAuthSuccessMsg(
          `تم إرسال كود التفعيل السري المكون من 6 أرقام إلى بريدك الإلكتروني (${regForm.email.trim()}). يرجى فحص صندوق الوارد (أو الـ Spam).`
        );
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
      setShowBookingModal(false);
      setShowAuthModal(true);
      showToast("info", "يرجى تسجيل الدخول أو إدخال بريدك لاستلام كود التفعيل وتأكيد الحجز 🔑");
      return;
    }

    if (selectedServices.length === 0) {
      showToast("error", "برجاء اختيار خدمة واحدة على الأقل لإتمام الحجز");
      return;
    }

    // Day Off Validation (e.g. MONDAY)
    if (checkIsDayOff(selectedDate)) {
      showToast(
        "error",
        settings?.dayOffMessage ||
          "عفواً، صالون صدام في عطلة أسبوعية يوم الإثنين - نتشرف بحجز موعدكم طوال باقي أيام الأسبوع ✂️"
      );
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
        setSelectedServices([]);
        setShowBookingModal(false);
        showToast("success", "تم استلام وتأكيد طلب حجزك الملكي بنجاح! 👑🎉");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        showToast("error", data.error || "فشل إتمام الحجز");
      }
    } catch {
      showToast("error", "حدث خطأ أثناء إرسال الحجز");
    } finally {
      setSubmittingBooking(false);
    }
  };

  const selectedBranch = branches.find((b) => b.id === selectedBranchId);

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* ─────────────────────────────────────────────────────────────
          0. UPCOMING APPOINTMENT 15-MINUTE ROYAL REMINDER BANNER
         ───────────────────────────────────────────────────────────── */}
      {activeAppointmentReminder && (
        <aside
          className="sticky top-0 z-50 bg-gradient-to-r from-amber-950 via-[#261505] to-amber-950 border-b-2 border-amber-400 p-3 sm:px-8 text-white font-sans shadow-2xl animate-fade-in"
          dir="rtl"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow-lg animate-bounce shrink-0">
                👑
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-amber-300 text-sm">
                    تذكير بموعدك الملكي في صالون صدام
                  </span>
                  <span className="py-0.5 px-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                    حجز #{activeAppointmentReminder.bookingNumber}
                  </span>
                </div>
                <p className="text-slate-200 text-[11px] leading-relaxed pt-0.5">
                  موعدك اليوم في تمام الساعة{" "}
                  <strong className="text-white font-mono font-bold text-xs">
                    {activeAppointmentReminder.timeSlot}
                  </strong>{" "}
                  بفرع{" "}
                  <strong className="text-amber-300">
                    {activeAppointmentReminder.branch?.name || "صالون صدام"}
                  </strong>
                  {activeAppointmentReminder.diffMinutes > 0
                    ? ` (متبقي حوالي ${activeAppointmentReminder.diffMinutes} دقيقة على موعدك)`
                    : " (حان موعدك الآن بالفرع)"}
                  {activeAppointmentReminder.specialist
                    ? ` • مع كابتن ${activeAppointmentReminder.specialist.name}`
                    : ""}{" "}
                  — طاقم العمل بانتظارك لتقديم أرقى خدمة وأعلى درجات الفخامة! 💈✂️
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveAppointmentReminder(null)}
                className="py-1.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-md cursor-pointer"
              >
                أنا في الطريق 🚗
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. LUXURY TOP NAVIGATION BAR (RESPONSIVE & AIRY ON MOBILE)
         ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#0c0c12]/95 backdrop-blur-md border-b border-amber-500/25 px-3 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between shadow-2xl">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg shadow-amber-500/20 bg-black shrink-0 group-hover:scale-105 transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="صالون حلاقة صدام" className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-lg md:text-xl font-black text-amber-400 tracking-wide whitespace-nowrap">
                صالون صدام <span className="hidden sm:inline">حلاقة</span> VIP
              </h1>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse hidden sm:block" />
            </div>
            <p className="text-[9px] sm:text-xs text-amber-200/60 font-mono font-bold tracking-widest uppercase hidden md:block">
              SADDAM BARBER SHOP • ROYAL EXPERIENCE
            </p>
          </div>
        </Link>

        {/* Action Buttons: Staff Login + Card QR + Customer */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* STAFF LOGIN BUTTON: Icon on small mobile, full text on larger screens */}
          <Link
            href="/login"
            className="py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/50 text-amber-300 hover:text-amber-200 text-xs font-black transition flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
            title="دخول طاقم العمل والإدارة"
          >
            <LogIn className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">دخول الطاقم والإدارة 🔒</span>
          </Link>

          {/* Card 2 QR Button: Icon on mobile, label on desktop */}
          <button
            onClick={() => setShowQrModal(true)}
            className="p-2 sm:py-2 sm:px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold transition flex items-center gap-1.5 shrink-0"
            title="كارت الـ 2 كيو آر كود"
          >
            <QrCode className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="hidden lg:inline">كارت الـ 2 QR 🪪</span>
          </button>

          {/* Customer Profile / Login */}
          {customer ? (
            <div className="relative shrink-0">
              <div className="flex items-center gap-1 sm:gap-1.5 py-1 px-2 sm:px-2.5 rounded-xl bg-black/70 border border-amber-500/40 text-xs shadow-md">
                <button
                  type="button"
                  onClick={() => setShowCustomerMenu(!showCustomerMenu)}
                  className="flex items-center gap-1.5 hover:opacity-80 transition cursor-pointer"
                  title="عرض تفاصيل الحساب"
                >
                  <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-bold text-white max-w-[65px] sm:max-w-[100px] truncate">{customer.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-black border border-amber-500/30">
                    VIP
                  </span>
                </button>

                <div className="h-3.5 w-px bg-white/10 mx-0.5" />

                <button
                  type="button"
                  onClick={handleCustomerLogout}
                  className="p-1 rounded-lg hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition cursor-pointer"
                  title="تسجيل الخروج من الحساب 🚪"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>

              {/* Customer Dropdown Menu */}
              {showCustomerMenu && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-[#12121a] border border-amber-500/40 rounded-2xl p-4 shadow-2xl z-50 space-y-3 animate-fade-in font-sans text-xs">
                  <div className="border-b border-white/10 pb-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-white text-sm">{customer.name}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black">
                        VIP عضو ملكي
                      </span>
                    </div>
                    <p className="text-slate-400 font-mono text-[11px] pt-1">{customer.phone}</p>
                    {customer.email && (
                      <p className="text-slate-500 text-[10px] truncate">{customer.email}</p>
                    )}
                  </div>

                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <p className="text-amber-300 font-bold">✨ مرحباً بك في صالون صدام الملكي</p>
                    <p className="text-slate-400 text-[10px]">يمكنك حجز مواعيدك ومتابعة عروضك الملكية أولاً بأول.</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCustomerLogout}
                    className="w-full py-2 px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-black text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>تسجيل الخروج من الحساب 🚪</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthStep("INPUT");
                setShowAuthModal(true);
              }}
              className="py-1.5 px-3 sm:py-2 sm:px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 shrink-0" />
              <span>تسجيل / حسابي</span>
            </button>
          )}
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. GRAND VISUAL HERO SECTION (ROYAL SADDAM BARBER EXPERIENCE)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 px-4 sm:px-8 border-b border-amber-500/20">
        {/* Background Visual Image with Dark Gold Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 pointer-events-none filter blur-xs"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/90 via-[#0a0a0f]/95 to-[#07070a] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          {/* Centered Royal Logo Emblem */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-amber-400 bg-black mx-auto shadow-2xl shadow-amber-500/30 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="صالون حلاقة صدام" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Royal Slogan */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-black shadow-lg">
              <span>👑 SADDAM BARBER SHOP • VIP MEN EXPERIENCE 👑</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              مش مجرد حلاقة ... <br className="hidden sm:inline" />
              <span className="gold-gradient-text">دي تجربة صدام</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed">
            الوجهة الأولى للرجل الباحث عن الأناقة الملكية والتميز بفرعي{" "}
            <strong className="text-amber-400">مدينة نصر (عباس العقاد)</strong> و{" "}
            <strong className="text-amber-400">حدائق القبة</strong>.
          </p>

          {/* Quick Features Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 max-w-3xl mx-auto text-xs">
            <div className="p-2.5 rounded-2xl bg-[#12121a]/90 border border-amber-500/25 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">خامات إيطالية أصلية</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#12121a]/90 border border-amber-500/25 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">تعقيم طبي متكامل</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#12121a]/90 border border-amber-500/25 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">دقة تامة في المواعيد</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#12121a]/90 border border-amber-500/25 flex items-center justify-center gap-2">
              <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">ضيافة VIP ملكية</span>
            </div>
          </div>

          {/* Live Branches Switcher Pills with Addresses */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-bold text-slate-400">اختر الفرع الأقرب لك لحجز الموعد أو العرض:</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {branches.map((b) => {
                const isSelected = selectedBranchId === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`py-2.5 px-5 rounded-2xl text-xs font-black transition flex items-center gap-2 ${
                      isSelected
                        ? "bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 ring-2 ring-amber-400 scale-105"
                        : "bg-[#14141e] hover:bg-[#1a1a28] text-slate-300 border border-amber-500/30"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{b.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2.5 DYNAMIC ROYAL OFFERS & PACKAGES (FROM OFFICIAL FLYERS)
         ───────────────────────────────────────────────────────────── */}
      {filteredOffers.length > 0 && (
        <section className="max-w-6xl w-full mx-auto px-4 sm:px-8 py-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-md shadow-amber-500/20">
                👑
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  باكدجات وعروض صدام الملكية الحصرية (VIP Packages)
                </h3>
                <p className="text-xs text-slate-400">
                  خصومات فورية تصل إلى 46% على باكدجات العرسان والاسترخاء والعناية المتكاملة 💈
                </p>
              </div>
            </div>

            <span className="text-xs text-amber-400 font-bold bg-amber-500/10 py-1.5 px-3.5 rounded-full border border-amber-500/30 self-start sm:self-auto">
              {filteredOffers.length} عروض متاحة الآن
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer) => {
              const isSelected = selectedServices.some((s) => s.id === `offer-${offer.id}`);
              let featuresList: string[] = [];
              try {
                featuresList = JSON.parse(offer.features || "[]");
              } catch {
                featuresList = [];
              }

              return (
                <div
                  key={offer.id}
                  className={`rounded-3xl bg-[#12121a] border-2 transition overflow-hidden flex flex-col shadow-2xl group ${
                    isSelected
                      ? "border-amber-400 ring-2 ring-amber-400 shadow-amber-500/20 scale-[1.02]"
                      : "border-amber-500/30 hover:border-amber-400/80"
                  }`}
                >
                  {/* Flyer Image Header */}
                  <div className="relative h-60 w-full bg-black overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={offer.image}
                      alt={offer.titleAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {offer.badge && (
                      <span className="absolute top-3.5 right-3.5 py-1 px-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs shadow-xl">
                        {offer.badge}
                      </span>
                    )}

                    <span className="absolute top-3.5 left-3.5 py-1 px-3 rounded-full bg-black/70 border border-white/20 text-amber-300 font-bold text-[10px]">
                      {offer.branch?.name || "متاح بجميع الفروع 📍"}
                    </span>

                    <div className="absolute bottom-3.5 right-3.5 left-3.5 flex items-end justify-between">
                      <div className="max-w-[65%]">
                        <h4 className="font-black text-sm sm:text-base text-white drop-shadow-lg leading-tight">
                          {offer.titleAr}
                        </h4>
                      </div>
                      <div className="text-left font-mono">
                        {offer.oldPrice && (
                          <span className="text-xs text-rose-400 line-through block font-bold">
                            {offer.oldPrice} ج
                          </span>
                        )}
                        <span className="text-lg sm:text-xl font-black text-amber-400">
                          {offer.price} ج.م
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content & Features */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    {offer.description && (
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {offer.description}
                      </p>
                    )}

                    {featuresList.length > 0 && (
                      <ul className="space-y-1.5 text-xs text-slate-200 border-t border-white/5 pt-3">
                        {featuresList.slice(0, 5).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 font-bold" />
                            <span className="truncate">{f}</span>
                          </li>
                        ))}
                        {featuresList.length > 5 && (
                          <li className="text-[11px] text-amber-300 font-bold">
                            + {featuresList.length - 5} خدمات ومراحل إضافية مشمولة بالعرض...
                          </li>
                        )}
                      </ul>
                    )}

                    <button
                      onClick={() => handleSelectOffer(offer)}
                      className={`w-full py-3 rounded-2xl font-black text-xs transition flex items-center justify-center gap-2 shadow-xl ${
                        isSelected
                          ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                          : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>تم اختيار هذا الباكدج الملكي ✅</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>حجز هذا الباكدج الملكي الآن 👑</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          CONFIRMED BOOKING SUCCESS CARD (IF ANY)
         ───────────────────────────────────────────────────────────── */}
      {confirmedBooking && (
        <section className="max-w-xl mx-auto p-4 sm:p-6 w-full animate-fade-in">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181824] to-[#101016] border-2 border-emerald-500/60 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                تم استلام وتأكيد طلب حجزك بنجاح! 🎉
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                رقم الحجز: #{confirmedBooking.bookingNumber}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/20 text-right space-y-2 text-xs">
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
          3. MAIN BOOKING WORKFLOW (SPECIALISTS & VISUAL SERVICES)
         ───────────────────────────────────────────────────────────── */}
      <main id="step-specialists" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-10 space-y-12">
        {/* STEP 1: CHOOSE SPECIALIST */}
        <section className="space-y-5">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-black text-white">اختر المصفف / المتخصص المفضل</h3>
                <p className="text-xs text-slate-400">
                  شاهد صورة الحلاق، تقييمه، رقم الكرسي، وحالته اللحظية
                </p>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-bold bg-amber-500/10 py-1 px-3 rounded-full border border-amber-500/30">
              {filteredSpecialists.length} متخصصين بالفرع
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Any Specialist Card */}
            <div
              onClick={() => setSelectedSpecialistId("")}
              className={`cursor-pointer p-4 rounded-3xl border transition text-center space-y-2 flex flex-col items-center justify-center ${
                selectedSpecialistId === ""
                  ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/10"
                  : "bg-[#101018] hover:bg-[#161622] border-white/10"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center text-2xl font-black">
                ⚡
              </div>
              <div>
                <p className="font-black text-xs sm:text-sm text-white">أي متخصص متاح</p>
                <span className="text-[10px] text-amber-300 font-bold">أول كرسي خالي بالفرع</span>
              </div>
            </div>

            {/* Specialist Cards with Live Shift Attendance Status */}
            {filteredSpecialists.map((spec) => {
              const isSelected = selectedSpecialistId === spec.id;
              const isAvailable = spec.status === "AVAILABLE";
              const isWithClient = spec.status === "WITH_CLIENT";
              const isBreak = spec.status === "BREAK";
              const isOffDuty = spec.status === "OFF_DUTY" || spec.status === "DAY_OFF" || spec.status === "ABSENT";

              return (
                <div
                  key={spec.id}
                  onClick={() => {
                    if (isOffDuty) {
                      showToast(
                        "info",
                        `عذراً، المتخصص (${spec.name}) غير متواجد بالصالون حالياً (${spec.statusReason || "إجازة / انتهت الوردية اليوم"}). يُرجى اختيار متخصص آخر متواجد أو "أي متخصص متاح" 💈`
                      );
                      return;
                    }
                    setSelectedSpecialistId(spec.id);
                  }}
                  className={`p-3.5 rounded-3xl border transition text-center space-y-2.5 flex flex-col items-center relative group ${
                    isOffDuty
                      ? "opacity-50 grayscale-[40%] bg-[#0e0e16] border-white/5 cursor-not-allowed"
                      : "cursor-pointer"
                  } ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 shadow-xl shadow-amber-500/15"
                      : !isOffDuty
                      ? "bg-[#101018] hover:bg-[#161622] border-white/10"
                      : ""
                  }`}
                >
                  {/* Status Indicator Pill */}
                  <span
                    className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-black border ${
                      isAvailable
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : isWithClient
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : isBreak
                        ? "bg-sky-500/20 text-sky-300 border-sky-500/40"
                        : spec.status === "OFF_DUTY"
                        ? "bg-slate-700/80 text-slate-300 border-slate-600"
                        : spec.status === "DAY_OFF"
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                        : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                    }`}
                  >
                    {isAvailable && "متاح الآن 🟢"}
                    {isWithClient && "على الكرسي 💺"}
                    {isBreak && "استراحة ☕"}
                    {spec.status === "OFF_DUTY" && "انتهت ورديته 🏠"}
                    {spec.status === "DAY_OFF" && "إجازة اليوم 🏖️"}
                    {spec.status === "ABSENT" && "غير متواجد 🔴"}
                  </span>

                  {/* Specialist Photo */}
                  <div className={`w-20 h-20 rounded-2xl overflow-hidden border-2 shadow-md bg-black shrink-0 transition ${
                    isOffDuty ? "border-slate-700" : "border-amber-400 group-hover:scale-105"
                  }`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={spec.photo || "/logo.jpg"}
                      alt={spec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-0.5 w-full">
                    <h4 className="font-black text-xs sm:text-sm text-white truncate max-w-[130px] mx-auto">
                      {spec.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate max-w-[130px] mx-auto">{spec.title}</p>
                    {spec.statusReason && (
                      <p className="text-[9px] text-amber-300/80 truncate max-w-[125px] mx-auto pt-0.5">
                        {spec.statusReason}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold bg-black/40 py-0.5 px-2 rounded-full border border-white/5">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{spec.rating}</span>
                    <span className="text-slate-500">• ك {spec.chairNumber}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 2: CHOOSE SERVICES WITH HIGH-RES PHOTOS */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-black text-white">اختر الخدمات التجميلية والعناية المطلوبة</h3>
                <p className="text-xs text-slate-400">
                  شاهد صور كل خدمة، مدتها بالدقائق، وسعرها الواضح
                </p>
              </div>
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
                      : "bg-[#14141e] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* VISUAL SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((srv) => {
              const isSelected = selectedServices.some((item) => item.id === srv.id);
              return (
                <div
                  key={srv.id}
                  onClick={() => toggleService(srv)}
                  className={`cursor-pointer rounded-3xl border overflow-hidden transition flex flex-col justify-between group ${
                    isSelected
                      ? "bg-amber-500/15 border-amber-400 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400"
                      : "bg-[#101018] hover:bg-[#161622] border-white/10"
                  }`}
                >
                  {/* Service Photo Banner */}
                  <div className="relative h-36 w-full overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        srv.image ||
                        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&auto=format&fit=crop&q=80"
                      }
                      alt={srv.nameAr}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-black/30" />

                    {/* Category Badge & Duration */}
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-amber-300">
                      {srv.category}
                    </span>

                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-slate-300 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{srv.durationMinutes} دقيقة</span>
                    </span>
                  </div>

                  {/* Service Content */}
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-sm text-white group-hover:text-amber-300 transition">
                        {srv.nameAr}
                      </h4>
                      {srv.description && (
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1">
                          {srv.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="font-mono text-amber-400 font-black text-lg">
                        {srv.price} ج.م
                      </span>

                      <div
                        className={`py-1.5 px-3 rounded-xl flex items-center gap-1.5 font-bold text-xs transition ${
                          isSelected
                            ? "bg-amber-500 text-slate-950 font-black shadow-md"
                            : "bg-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>تم الاختيار</span>
                          </>
                        ) : (
                          <>
                            <span>+ إضافة للحجز</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STEP 3: DATE & TIME SLOT SELECTION */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 border-b border-amber-500/20 pb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
              3
            </div>
            <div>
              <h3 className="text-lg font-black text-white">تحديد التاريخ وموعد الحضور</h3>
              <p className="text-xs text-slate-400">احجز مسبقاً وتفادى أوقات الزحمة بالفرع</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-[#101018] border border-amber-500/25 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>تاريخ الموعد:</span>
                </label>

                {/* Quick Date Pills */}
                <div className="flex items-center gap-2 pb-1">
                  {[
                    { label: "اليوم 📅", val: new Date().toISOString().split("T")[0] },
                    {
                      label: "غداً ☀️",
                      val: new Date(Date.now() + 86400000).toISOString().split("T")[0],
                    },
                    {
                      label: "بعد غد 💈",
                      val: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
                    },
                  ].map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setSelectedDate(d.val)}
                      className={`py-1 px-2.5 rounded-lg text-[11px] font-bold border transition ${
                        selectedDate === d.val
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                          : "bg-black/40 text-slate-300 border-white/10 hover:border-amber-500/30"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-xs font-bold text-white focus:outline-none focus:border-amber-400"
                />

                {/* Day off warning in Step 3 */}
                {checkIsDayOff(selectedDate) && (
                  <div className="p-3 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs space-y-1 animate-pulse">
                    <div className="flex items-center gap-2 font-black text-rose-300">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>
                        عطلة الصالون الأسبوعية ({settings?.weeklyDayOff === "MONDAY" ? "يوم الإثنين" : settings?.weeklyDayOff}) 💈
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {settings?.dayOffMessage ||
                        "عفواً، صالون صدام في عطلة أسبوعية يوم الإثنين - نتشرف بحجز موعدكم طوال باقي أيام الأسبوع ✂️"}
                    </p>
                  </div>
                )}
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
                  placeholder="مثال: حلاقة عريس، قصة مخصصة..."
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
                          ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-105"
                          : "bg-black/50 text-slate-300 hover:text-white border border-white/5"
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
        <aside className="sticky bottom-0 z-40 bg-[#0c0c12]/98 backdrop-blur-md border-t border-amber-500/40 p-4 shadow-2xl">
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
              onClick={() => setShowBookingModal(true)}
              disabled={submittingBooking}
              className="w-full sm:w-auto py-3 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>متابعة وتأكيد موعد الحجز الملكي 📅👑</span>
            </button>
          </div>
        </aside>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4.5. SCHEDULE & BOOKING CONFIRMATION MODAL (ROYAL VIP)
         ───────────────────────────────────────────────────────────── */}
      {showBookingModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans animate-fade-in"
          dir="rtl"
        >
          <div className="relative w-full max-w-xl bg-gradient-to-b from-[#161622] via-[#12121a] to-[#0c0c12] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute left-4 top-4 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-amber-500/10">
                👑
              </div>
              <h3 className="text-lg font-black text-white">تأكيد تفاصيل وموعد حجزك الملكي</h3>
              <p className="text-xs text-slate-400">
                اختر الفرع، المتخصص، واليوم والساعة المناسبة لك قبل اعتماد الحجز
              </p>
            </div>

            {/* Branch Selector */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>الفرع المطلوب:</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {branches.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition text-right cursor-pointer ${
                      selectedBranchId === b.id
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black"
                        : "bg-black/50 text-slate-300 border-white/10 hover:border-amber-500/30"
                    }`}
                  >
                    <div className="font-bold">{b.name}</div>
                    <div className="text-[10px] opacity-80 font-normal truncate">{b.address}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Specialist Selector */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-slate-300 flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-amber-400" />
                <span>المتخصص المفضل:</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedSpecialistId("")}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                    !selectedSpecialistId
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-sm"
                      : "bg-black/50 text-slate-300 border-white/10 hover:border-amber-500/30"
                  }`}
                >
                  ⚡ أي متخصص متاح (أول كرسي خالي)
                </button>
                {specialists
                  .filter((s) => !selectedBranchId || s.branchId === selectedBranchId)
                  .map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpecialistId(s.id)}
                      className={`py-1.5 px-3 rounded-xl text-xs font-bold transition border flex items-center gap-1.5 cursor-pointer ${
                        selectedSpecialistId === s.id
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-sm"
                          : "bg-black/50 text-slate-300 border-white/10 hover:border-amber-500/30"
                      }`}
                    >
                      <span>{s.name}</span>
                      {s.chairNumber && (
                        <span className="text-[10px] opacity-75 font-mono">#{s.chairNumber}</span>
                      )}
                    </button>
                  ))}
              </div>
            </div>

            {/* Date Selector & Weekly Day Off Check */}
            <div className="space-y-2 text-xs">
              <label className="font-bold text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>تاريخ الموعد:</span>
              </label>

              {/* Quick Date Pills */}
              <div className="flex items-center gap-2">
                {[
                  { label: "اليوم 📅", val: new Date().toISOString().split("T")[0] },
                  {
                    label: "غداً ☀️",
                    val: new Date(Date.now() + 86400000).toISOString().split("T")[0],
                  },
                  {
                    label: "بعد غد 💈",
                    val: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
                  },
                ].map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDate(d.val)}
                    className={`py-1 px-2.5 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                      selectedDate === d.val
                        ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                        : "bg-black/40 text-slate-300 border-white/10 hover:border-amber-500/30"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono font-bold focus:border-amber-400"
              />

              {/* Day off Warning Alert */}
              {checkIsDayOff(selectedDate) && (
                <div className="p-3.5 rounded-2xl bg-rose-500/15 border-2 border-rose-500/40 text-rose-200 text-xs space-y-1 animate-pulse">
                  <div className="flex items-center gap-2 font-black text-rose-300">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>
                      عطلة الصالون الأسبوعية ({settings?.weeklyDayOff === "MONDAY" ? "يوم الإثنين" : settings?.weeklyDayOff}) 💈
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    {settings?.dayOffMessage ||
                      "عفواً، صالون صدام في عطلة أسبوعية يوم الإثنين - نتشرف بحجز موعدكم طوال باقي أيام الأسبوع ✂️"}
                  </p>
                  <p className="text-[10px] text-amber-300 font-bold">
                    💡 يرجى اختيار تاريخ آخر (مثل غداً أو بعد غد) لإتمام وتأكيد الحجز.
                  </p>
                </div>
              )}
            </div>

            {/* Time Slot Selector */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>اختر وقت الحضور المناسب لك:</span>
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 max-h-32 overflow-y-auto p-2 rounded-xl bg-black/40 border border-white/10">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-1 px-1.5 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-105"
                          : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Services Summary */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300 font-bold border-b border-white/10 pb-1.5">
                <span>الخدمات المحددة ({selectedServices.length}):</span>
                <span className="font-mono text-amber-400">
                  {totalDuration} دقيقة تقريباً
                </span>
              </div>
              <div className="max-h-24 overflow-y-auto space-y-1">
                {selectedServices.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="truncate max-w-[200px]">{s.nameAr}</span>
                    <span className="font-mono text-amber-300 font-bold">{s.price} ج.م</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-1.5 font-black text-sm">
                <span className="text-white">المبلغ الإجمالي المستحق:</span>
                <span className="font-mono text-amber-400 text-base">{totalAmount} ج.م</span>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1 text-xs">
              <label className="text-slate-300 font-bold block">ملاحظات أو طلبات خاصة (اختياري):</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="أي ملاحظة تود إبلاغ الصالون بها مسبقاً..."
                className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:border-amber-400 placeholder:text-slate-600"
              />
            </div>

            {/* Customer Status Banner */}
            {customer ? (
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  الحجز مسجل باسم: <strong className="text-white">{customer.name}</strong>
                </span>
                <span className="font-mono text-emerald-400 font-bold">{customer.phone}</span>
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  عند الضغط على تأكيد، سيُطلب منك إدخال بريدك/هاتفك لاستلام كود التفعيل وحفظ الموعد في حسابك الدائم.
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="flex-1 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs transition cursor-pointer"
              >
                تعديل الخدمات
              </button>
              <button
                type="button"
                onClick={() => executeBooking()}
                disabled={submittingBooking || checkIsDayOff(selectedDate)}
                className="flex-2 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1.5 shadow-xl shadow-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {submittingBooking ? (
                  <span>جارٍ تسجيل الحجز الملكي...</span>
                ) : checkIsDayOff(selectedDate) ? (
                  <span>عفواً، الصالون مغلق في هذا اليوم ✂️</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>تأكيد حجز الموعد الآن 👑</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
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
              <h3 className="text-lg font-black text-white">تسجيل وتأكيد حساب عميل صدام</h3>
              <p className="text-xs text-amber-200/70">
                يصلك كود التفعيل مباشرة عبر رسالة بريد إلكتروني على Gmail
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
                    البريد الإلكتروني (Gmail لإرسال كود التفعيل):
                  </label>
                  <input
                    type="email"
                    required
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    placeholder="your-name@gmail.com"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono focus:outline-none focus:border-amber-400 text-left"
                  />
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  <Mail className="w-4 h-4" />
                  <span>{authLoading ? "جارٍ إرسال كود الجي ميل..." : "إرسال كود التفعيل على Gmail 📩"}</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1.5 text-xs text-amber-200">
                  <p className="font-bold">{authSuccessMsg}</p>
                  <p className="text-[11px] text-slate-400">
                    أرسلنا الكود إلى: <strong className="text-white font-mono">{regForm.email}</strong>
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">أدخل كود الـ OTP (6 أرقام):</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="••••••"
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
          6. SIGNATURE GRAND ORCA FOOTER
         ───────────────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t-2 border-amber-500/30 bg-[#050508] text-slate-300 font-sans">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-base font-black text-amber-400">صالون حلاقة صدام VIP</h4>
                <p className="text-[10px] text-amber-200/60 font-mono tracking-widest uppercase">
                  SADDAM BARBER SHOP
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              الوجهة الأولى للرجل العصري الباحث عن الأناقة الملكية والتميز. نقدم أحدث صيحات قص الشعر العالمية وتحديد اللحية
              وحمامات البخار والبروتين بأعلى معايير النظافة والتعقيم الطبي.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Phone className="w-4 h-4" />
              <span>الهاتف والواتساب الموحد: {settings?.hotline || "01121537537"}</span>
            </div>
          </div>

          {/* Column 2: Branches & Working Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-black text-white border-b border-amber-500/20 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>فروعنا في القاهرة</span>
            </h4>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1">
              <strong className="text-amber-300 block font-black">📍 فرع مدينة نصر (VIP):</strong>
              <p className="text-slate-400">28 شارع مصطفى حمام، متفرع من عباس العقاد، أمام أبو العز السوري</p>
              <p className="font-mono text-amber-300 font-bold">هاتف وواتساب: 01121537537</p>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1">
              <strong className="text-amber-300 block font-black">📍 فرع حدائق القبة:</strong>
              <p className="text-slate-400">87 شارع مصر والسودان، حدائق القبة، القاهرة</p>
              <p className="font-mono text-amber-300 font-bold">هاتف وواتساب: 01121537537</p>
            </div>

            <p className="text-[11px] text-amber-200/80 pt-1">
              ⏰ مواعيد العمل: يومياً من 12:00 ظهراً حتى 02:00 بعد منتصف الليل
            </p>
          </div>

          {/* Column 3: Quick Links & Apps */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-black text-white border-b border-amber-500/20 pb-2 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-amber-400" />
              <span>بوابات المنظومة السحابية</span>
            </h4>

            <ul className="space-y-2">
              <li>
                <Link href="/login" className="hover:text-amber-400 transition flex items-center gap-1.5 font-bold">
                  <span>🔒 بوابة دخول طاقم العمل والإدارة</span>
                </Link>
              </li>
              <li>
                <Link href="/chair" className="hover:text-amber-400 transition flex items-center gap-1.5 font-bold">
                  <span>💺 شاشة المتخصص على الكرسي (Live Chair)</span>
                </Link>
              </li>
              <li>
                <Link href="/pos" className="hover:text-amber-400 transition flex items-center gap-1.5 font-bold">
                  <span>💰 نقطة بيع الكاشير ومستحضرات التجميل (POS)</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowQrModal(true)}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 font-bold text-right"
                >
                  <span>🪪 استعراض وطباعة كارت الـ 2 كيو آر كود</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Orca Tech Signature Bottom Bar */}
        <div className="border-t border-amber-500/20 bg-black/60 py-5 px-4 sm:px-8 text-center space-y-2">
          <p className="text-xs text-slate-400 font-bold">
            جميع الحقوق محفوظة © {new Date().getFullYear()} لـ <span className="text-amber-400">صالون حلاقة صدام VIP</span>
          </p>

          <p className="text-[11px] text-amber-300/90 font-medium">
            تصميم وتطوير المنظومة الذكية:{" "}
            <strong className="text-white font-black">م / حمزة عباس</strong> — شركة{" "}
            <strong className="text-amber-400 font-black">أوركا للحلول البرمجية والذكاء الاصطناعي (Orca Tech) 🐬</strong>
          </p>

          <p className="text-[10px] text-slate-500 font-mono">
            خدمة الدعم الفني المباشر وتطوير الأنظمة: 01018671000
          </p>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          7. LUXURY CARD 2 QR MODAL
         ───────────────────────────────────────────────────────────── */}
      <CardQRModal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        hadayekPhone={settings?.hadayekPhone || "01121537537"}
        nasrCityPhone={settings?.nasrCityPhone || "01121537537"}
        hotline={settings?.hotline || "01121537537"}
      />

      {/* ─────────────────────────────────────────────────────────────
          8. IN-APP DIRECT LIVE CHAT WIDGET
         ───────────────────────────────────────────────────────────── */}
      <CustomerChatWidget
        customer={customer}
        branches={branches}
        selectedBranchId={selectedBranchId}
        hasActiveSelection={selectedServices.length > 0}
      />

      {/* ─────────────────────────────────────────────────────────────
          9. CUSTOM LUXURY CUSTOMER LOGOUT MODAL (NO WINDOWS ALERTS!)
         ───────────────────────────────────────────────────────────── */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans animate-fade-in"
          dir="rtl"
        >
          <div className="relative w-full max-w-sm bg-gradient-to-b from-[#161622] via-[#12121a] to-[#0e0e14] border-2 border-amber-500/50 rounded-3xl p-6 shadow-2xl space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto text-2xl shadow-lg">
              🚪
            </div>
            <div>
              <h3 className="text-base font-black text-white">تسجيل الخروج من الحساب</h3>
              <p className="text-xs text-slate-400 mt-1">
                هل أنت متأكد من رغبتك في تسجيل الخروج من حساب ({customer?.name})؟
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={executeCustomerLogout}
                className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition shadow-lg shadow-rose-600/30 cursor-pointer"
              >
                نعم، تسجيل الخروج
              </button>
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs transition border border-white/10 cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          10. LUXURY VIP FLOATING TOAST NOTIFICATION (NO WINDOWS ALERTS!)
         ───────────────────────────────────────────────────────────── */}
      {pageToast && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto animate-fade-in font-sans"
          dir="rtl"
        >
          <div
            className={`py-3 px-5 rounded-2xl shadow-2xl border backdrop-blur-xl flex items-center gap-3 text-xs font-black ${
              pageToast.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/60 text-emerald-200 shadow-emerald-950/50"
                : pageToast.type === "error"
                ? "bg-rose-950/90 border-rose-500/60 text-rose-200 shadow-rose-950/50"
                : "bg-amber-950/90 border-amber-500/60 text-amber-200 shadow-amber-950/50"
            }`}
          >
            <span className="text-base">
              {pageToast.type === "success" ? "✅" : pageToast.type === "error" ? "⚠️" : "💈"}
            </span>
            <span className="flex-1 leading-relaxed">{pageToast.message}</span>
            <button
              onClick={() => setPageToast(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
