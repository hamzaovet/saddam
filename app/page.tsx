"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardQRModal from "@/components/CardQRModal";
import CustomerChatWidget from "@/components/CustomerChatWidget";
import { PushOptInButton } from "@/components/PwaBootAndPushButton";
import { computeBookingTiming } from "@/lib/booking-time";
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
  MessageSquare,
  Plus,
  Trash2,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function HomePage() {
  // Global State
  const [settings, setSettings] = useState<any>(null);
  const [branches, setBranches] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected Booking Details & Branch Gateway
  const [selectedBranchId, setSelectedBranchId] = useState<string>("");
  const [showBranchGateway, setShowBranchGateway] = useState<boolean>(true);
  const [switchingBranch, setSwitchingBranch] = useState<boolean>(false);
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
  const [authMode, setAuthMode] = useState<"REGISTER" | "LOGIN">("REGISTER");
  const [authStep, setAuthStep] = useState<"INPUT" | "OTP">("INPUT");
  const [authContextMsg, setAuthContextMsg] = useState("");
  const [regForm, setRegForm] = useState({ name: "", phone: "", email: "" });
  const [otpCode, setOtpCode] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authSuccessMsg, setAuthSuccessMsg] = useState("");
  const [showCustomerMenu, setShowCustomerMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Royal Client Workspace State
  const [showRoyalPortal, setShowRoyalPortal] = useState(false);
  const [royalPortalTab, setRoyalPortalTab] = useState<"BUILDER" | "MY_BOOKINGS" | "NOTIFICATIONS">("BUILDER");
  const [myBookings, setMyBookings] = useState<any[]>([]);
  const [refreshingBookings, setRefreshingBookings] = useState(false);
  const [portalCatalogCategory, setPortalCatalogCategory] = useState<string>("ALL");

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
    setMyBookings([]);
    setShowRoyalPortal(false);
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

  // Customer Royal Reminder Audio Chime with Chrome Autoplay Support
  const playCustomerReminderChime = () => {
    try {
      const audioEl = document.getElementById("saddamReminderAudio") as HTMLAudioElement;
      if (audioEl) {
        audioEl.currentTime = 0;
        const p = audioEl.play();
        if (p !== undefined) {
          p.catch(() => {
            tryNewAudio();
          });
        }
      } else {
        tryNewAudio();
      }
    } catch {
      tryWebAudio();
    }
  };

  const tryNewAudio = () => {
    try {
      const a = new Audio("/notification.wav");
      a.volume = 0.9;
      const p = a.play();
      if (p !== undefined) {
        p.catch(() => tryWebAudio());
      }
    } catch {
      tryWebAudio();
    }
  };

  const tryWebAudio = () => {
    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;
      [[659.25, 0], [880, 0.25], [1108.73, 0.45], [1318.51, 0.65]].forEach(([freq, delay]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.4, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.5);
      });
    } catch {}
  };

  // Unlock audio on first user touch/click anywhere on the page
  useEffect(() => {
    const unlock = () => {
      try {
        const audioEl = document.getElementById("saddamReminderAudio") as HTMLAudioElement;
        if (audioEl) {
          audioEl.play().then(() => {
            audioEl.pause();
            audioEl.currentTime = 0;
          }).catch(() => {});
        }
      } catch {}
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

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

  // 15-Minute Reminder Polling & Live Bookings Sync
  const refreshMyBookings = async (custId?: string) => {
    const idToUse = custId || customer?.id;
    if (!idToUse) return;
    try {
      setRefreshingBookings(true);
      const [resBk] = await Promise.all([
        fetch(`/api/bookings?customerId=${idToUse}`, { cache: "no-store" }),
        fetch(`/api/bookings/watchdog?branchId=${selectedBranchId || "ALL"}`, { cache: "no-store" }).catch(() => null),
      ]);
      const data = await resBk.json();
      if (data.success && Array.isArray(data.bookings)) {
        setMyBookings(data.bookings);
        const reminderLead = settings?.reminderMinutesBefore || 15;
        const activeList = data.bookings.filter(
          (b: any) => b.status === "PENDING" || b.status === "CONFIRMED"
        );
        for (const b of activeList) {
          const ackKey = `saddam_ack_reminder_${b.id}`;
          if (sessionStorage.getItem(ackKey)) continue;
          const timing = computeBookingTiming(b.bookingDate, b.timeSlot, reminderLead);
          if (timing.isUpcoming15Min) {
            setActiveAppointmentReminder({ ...b, diffMinutes: timing.diffMinutes ?? 0 });
            const remindedKey = `saddam_reminded_${b.id}`;
            if (!sessionStorage.getItem(remindedKey)) {
              sessionStorage.setItem(remindedKey, "1");
              playCustomerReminderChime();
            }
            break;
          }
        }
      }
    } catch {
    } finally {
      setRefreshingBookings(false);
    }
  };

  useEffect(() => {
    if (!customer?.id) return;

    refreshMyBookings(customer.id);
    const interval = setInterval(() => refreshMyBookings(customer.id), 45000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer?.id, settings?.reminderMinutesBefore, selectedBranchId]);

  // Acknowledge & Respond to 15-Minute Reminder
  const handleAcknowledgeReminder = async (
    actionType: "ON_THE_WAY" | "ARRIVED" | "DELAYED_5" | "DELAYED_15" | "DISMISS"
  ) => {
    if (!activeAppointmentReminder) return;
    const targetBooking = activeAppointmentReminder;
    const bId = targetBooking.id;
    const ackKey = `saddam_ack_reminder_${bId}`;
    sessionStorage.setItem(ackKey, actionType);
    setActiveAppointmentReminder(null);

    let messageText = "";
    let toastMsg = "";

    if (actionType === "ON_THE_WAY") {
      messageText = `🚗 إشعار موعد (حجز #${targetBooking.bookingNumber}): العميل (${customer?.name || "VIP"}) يؤكد أنه في الطريق إلى صالون صدام الآن.`;
      toastMsg = "تسلم يا فندم! تم إبلاغ الصالون بأنك في الطريق 🚗 نتشرف بزيارتك!";
    } else if (actionType === "ARRIVED") {
      messageText = `💈 إشعار موعد (حجز #${targetBooking.bookingNumber}): العميل (${customer?.name || "VIP"}) وصل بالفعل ومتواجد داخل الصالون.`;
      toastMsg = "ألف مرحب بيك في صالون صدام! تم إبلاغ الكابتن والكاشير بوجودك 👑";
    } else if (actionType === "DELAYED_5") {
      messageText = `⏳ إشعار موعد (حجز #${targetBooking.bookingNumber}): العميل (${customer?.name || "VIP"}) يعتذر عن تأخير بسيط حوالي 5 إلى 10 دقائق.`;
      toastMsg = "تم إبلاغ الصالون بتأخرك البسيط ⏳ بانتظارك بأرقى ترحيب!";
    } else if (actionType === "DELAYED_15") {
      messageText = `⏱️ إشعار موعد (حجز #${targetBooking.bookingNumber}): العميل (${customer?.name || "VIP"}) يبلغ بتأخير حوالي 15 دقيقة ويرجو تجهيز دوره.`;
      toastMsg = "تم إبلاغ الصالون بتأخرك 15 دقيقة ⏱️ لا تقلق، دورك محفوظ!";
    }

    if (toastMsg) {
      showToast("success", toastMsg);
    }

    if (messageText && (customer?.phone || targetBooking.customerPhone)) {
      try {
        await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sender: "CUSTOMER",
            senderName: customer?.name || targetBooking.customerName || "عميل VIP",
            customerPhone: customer?.phone || targetBooking.customerPhone,
            customerId: customer?.id || targetBooking.customerId,
            branchId: targetBooking.branchId,
            message: messageText,
          }),
        });
      } catch (err) {
        console.error("Failed to notify salon chat:", err);
      }
    }
  };

  // Fetch branch-specific services & offers
  const loadBranchCatalog = async (branchId: string) => {
    try {
      const q = branchId ? `?branchId=${encodeURIComponent(branchId)}` : "";
      const qOffers = branchId
        ? `?activeOnly=true&branchId=${encodeURIComponent(branchId)}`
        : "?activeOnly=true";
      const [resS, resO] = await Promise.all([
        fetch(`/api/services${q}`, { cache: "no-store" }),
        fetch(`/api/offers${qOffers}`, { cache: "no-store" }),
      ]);
      const [dataS, dataO] = await Promise.all([resS.json(), resO.json()]);
      if (dataS.success && dataS.services) setServices(dataS.services);
      if (dataO.success && dataO.offers) setOffers(dataO.offers);
    } catch (e) {
      console.error("Failed to load branch catalog:", e);
    }
  };

  // Enter or Switch Branch from the Royal Gateway
  const handleEnterBranch = async (branch: any) => {
    if (!branch?.id) return;
    const isChanging = Boolean(selectedBranchId && selectedBranchId !== branch.id);
    setSwitchingBranch(true);
    setSelectedBranchId(branch.id);
    try {
      sessionStorage.setItem("saddam_client_branch_id", branch.id);
    } catch {}

    if (isChanging) {
      setSelectedServices([]);
      setSelectedSpecialistId("");
    }

    await loadBranchCatalog(branch.id);
    setSwitchingBranch(false);
    setShowBranchGateway(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast(
      "success",
      `أهلاً بك في ${branch.name} — يتم الآن عرض الأسعار والعروض والكباتن الخاصة بالفرع 📍👑`
    );
  };

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
        let rememberedBranchId = "";
        try {
          const urlBranch = new URLSearchParams(window.location.search).get("branch");
          rememberedBranchId = urlBranch || sessionStorage.getItem("saddam_client_branch_id") || "";
        } catch {}

        const [resSet, resB, resS, resSpec, resO] = await Promise.all([
          fetch("/api/settings", { cache: "no-store" }),
          fetch("/api/branches", { cache: "no-store" }),
          fetch(
            rememberedBranchId
              ? `/api/services?branchId=${encodeURIComponent(rememberedBranchId)}`
              : "/api/services",
            { cache: "no-store" }
          ),
          fetch("/api/specialists", { cache: "no-store" }),
          fetch(
            rememberedBranchId
              ? `/api/offers?activeOnly=true&branchId=${encodeURIComponent(rememberedBranchId)}`
              : "/api/offers?activeOnly=true",
            { cache: "no-store" }
          ),
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
          const matchedRemembered = dataB.branches.find(
            (b: any) =>
              b.id === rememberedBranchId ||
              b.code?.toLowerCase() === rememberedBranchId.toLowerCase()
          );
          if (matchedRemembered) {
            setSelectedBranchId(matchedRemembered.id);
            setShowBranchGateway(false);
          } else {
            setShowBranchGateway(true);
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

  // Quick Select an Offer / Package (Auth-First -> Royal Client Portal)
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

    if (!customer) {
      setAuthContextMsg(`تم اختيار "${offer.titleAr}" 👑 سجل دخولك أو أنشئ حسابك لفتح صفحتك الملكية وإتمام الحجز`);
      setAuthStep("INPUT");
      setShowAuthModal(true);
      return;
    }

    setRoyalPortalTab("BUILDER");
    setShowRoyalPortal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter Services by Branch & Category
  const filteredServices = services.filter((s) => {
    const branchMatch = !selectedBranchId || !s.branchId || s.branchId === selectedBranchId;
    if (!branchMatch) return false;
    if (activeCategory === "ALL") return true;
    return s.category === activeCategory;
  });

  // Calculate Totals
  const totalAmount = selectedServices.reduce((sum, s) => sum + Number(s.price || 0), 0);
  const totalDuration = selectedServices.reduce(
    (sum, s) => sum + Number(s.durationMinutes || 30),
    0
  );

  // Toggle Service Selection (Auth-First when not logged in)
  const toggleService = (srv: any) => {
    if (!customer) {
      setSelectedServices((prev) => {
        const exists = prev.some((item) => item.id === srv.id);
        return exists ? prev : [...prev, srv];
      });
      setAuthContextMsg(`اخترت "${srv.nameAr}" ✂️ سجل دخولك أو أنشئ حسابك لفتح صفحتك الملكية وتعديل خدماتك أو إتمام الحجز`);
      setAuthStep("INPUT");
      setShowAuthModal(true);
      return;
    }

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

  // Quick Login for Returning Customer by Phone (sends OTP to saved Gmail)
  const handleQuickPhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.phone.trim()) {
      setAuthError("برجاء إدخال رقم الموبايل المسجل");
      return;
    }
    try {
      setAuthLoading(true);
      setAuthError("");
      const res = await fetch("/api/auth/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "LOGIN",
          phone: regForm.phone.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setRegForm((prev) => ({ ...prev, email: data.email || prev.email }));
        setAuthSuccessMsg(data.message || "تم إرسال كود الدخول لبريدك الإلكتروني المسجل");
        setAuthStep("OTP");
      } else {
        setAuthError(data.error || "رقم الهاتف غير مسجل — يمكنك اختيار حساب جديد");
      }
    } catch {
      setAuthError("تعذر الاتصال بالخادم");
    } finally {
      setAuthLoading(false);
    }
  };

  // Verify OTP -> Open Royal Client Portal
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
        setAuthContextMsg("");
        setOtpCode("");
        setRoyalPortalTab(selectedServices.length > 0 ? "BUILDER" : "MY_BOOKINGS");
        setShowRoyalPortal(true);
        await refreshMyBookings(data.customer.id);
        showToast("success", `أهلاً بك يا ${data.customer.name} في صفحتك الملكية 👑`);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        setRoyalPortalTab("MY_BOOKINGS");
        await refreshMyBookings(custId);
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

            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => handleAcknowledgeReminder("ON_THE_WAY")}
                className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] transition shadow-md flex items-center gap-1 cursor-pointer active:scale-95"
              >
                <span>أنا في الطريق 🚗</span>
              </button>
              <button
                type="button"
                onClick={() => handleAcknowledgeReminder("ARRIVED")}
                className="py-1.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] transition shadow-md flex items-center gap-1 cursor-pointer active:scale-95"
              >
                <span>موجود بالصالون 💈</span>
              </button>
              <button
                type="button"
                onClick={() => handleAcknowledgeReminder("DELAYED_5")}
                className="py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-amber-200 border border-amber-500/30 font-bold text-[11px] transition flex items-center gap-1 cursor-pointer"
              >
                <span>سأتأخر 5-10 د ⏳</span>
              </button>
              <button
                type="button"
                onClick={() => handleAcknowledgeReminder("DELAYED_15")}
                className="py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10 font-bold text-[11px] transition flex items-center gap-1 cursor-pointer"
              >
                <span>سأتأخر ربع ساعة ⏱️</span>
              </button>
              <button
                type="button"
                onClick={() => handleAcknowledgeReminder("DISMISS")}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
                title="إغلاق التنبيه"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Audio Element for Browser Autoplay Compliance */}
      <audio id="saddamReminderAudio" src="/notification.wav" preload="auto" className="hidden" />

      {/* ─────────────────────────────────────────────────────────────
          1. LUXURY TOP NAVIGATION BAR (RESPONSIVE & AIRY ON MOBILE)
         ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#0c0c12]/95 backdrop-blur-md border-b border-amber-500/25 px-3 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between shadow-2xl">
        {/* Brand Logo & Active Branch Pill */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
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

          {selectedBranch && (
            <button
              type="button"
              onClick={() => setShowBranchGateway(true)}
              className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-xs font-black text-amber-200 transition cursor-pointer shrink-0"
              title="اضغط لتغيير الفرع"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="max-w-[140px] truncate">{selectedBranch.name}</span>
              <span className="text-[10px] py-0.5 px-1.5 rounded-md bg-amber-500 text-slate-950 font-black">
                تغيير
              </span>
            </button>
          )}
        </div>

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

          {/* Customer Profile / Royal Portal / Login */}
          {customer ? (
            <div className="relative shrink-0 flex items-center gap-1.5">
              <div className="flex items-center gap-1 sm:gap-1.5 py-1 px-2 sm:px-3 rounded-xl bg-gradient-to-l from-amber-500/20 to-black/80 border border-amber-400/50 text-xs shadow-md">
                <button
                  type="button"
                  onClick={() => {
                    setShowCustomerMenu(false);
                    setRoyalPortalTab(selectedServices.length > 0 ? "BUILDER" : "MY_BOOKINGS");
                    setShowRoyalPortal(true);
                    refreshMyBookings(customer.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 hover:opacity-85 transition cursor-pointer"
                  title="دخول صفحتي الملكية والحجوزات والتنبيهات"
                >
                  <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-black text-amber-300 hidden sm:inline">صفحتي الملكية:</span>
                  <span className="font-bold text-white max-w-[75px] sm:max-w-[110px] truncate">{customer.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-mono font-black">
                    {myBookings.length > 0 ? `${myBookings.length} 👑` : "VIP"}
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
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthContextMsg("");
                setAuthStep("INPUT");
                setShowAuthModal(true);
              }}
              className="py-1.5 px-3 sm:py-2 sm:px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 shrink-0" />
              <span>دخول / صفحتي الملكية</span>
            </button>
          )}
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          1.5 ROYAL CLIENT PORTAL WORKSPACE (WHEN LOGGED IN & OPENED)
         ───────────────────────────────────────────────────────────── */}
      {showRoyalPortal && customer && (
        <section className="max-w-5xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 animate-fade-in">
          {/* Top Portal Header Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-l from-[#181826] via-[#12121b] to-[#1a150b] border-2 border-amber-500/45 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="py-0.5 px-2.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px]">
                  👑 الصفحة الملكية الخاصة بك
                </span>
                <span className="text-[11px] font-bold text-emerald-400">
                  📍 {selectedBranch?.name || "اختر الفرع"}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                مرحباً بك يا {customer.name} ✨
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                📱 {customer.phone} {customer.email ? `• ✉️ ${customer.email}` : ""}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <PushOptInButton
                role="CUSTOMER"
                branchId={selectedBranchId || null}
                customerPhone={customer.phone}
                userName={customer.name}
                compact
                showTestButton
              />
              <button
                type="button"
                onClick={() => setShowRoyalPortal(false)}
                className="py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-black text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 text-amber-400" />
                <span>العودة للصفحة الرئيسية وتصفح الخدمات والعروض</span>
              </button>
            </div>
          </div>

          {confirmedBooking && (
            <div className="p-4 rounded-3xl bg-gradient-to-l from-emerald-500/20 to-[#12121b] border-2 border-emerald-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
              <div className="space-y-1">
                <span className="text-xs font-black text-emerald-300">
                  ✅ تم استلام طلب الحجز رقم #{confirmedBooking.bookingNumber} بنجاح!
                </span>
                <p className="text-xs text-slate-200">
                  📍 {confirmedBooking.branch?.name} • ⏰ {confirmedBooking.bookingDate} — {confirmedBooking.timeSlot} • 💰 {confirmedBooking.totalAmount} ج.م
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <PushOptInButton
                  role="CUSTOMER"
                  branchId={confirmedBooking.branchId}
                  customerPhone={customer?.phone}
                  userName={customer?.name}
                  compact
                  showTestButton
                />
                <button
                  type="button"
                  onClick={() => setConfirmedBooking(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Portal Sub-Tabs */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setRoyalPortalTab("BUILDER")}
              className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm transition border flex items-center justify-center gap-1.5 cursor-pointer ${
                royalPortalTab === "BUILDER"
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-[#12121b] text-slate-300 border-white/10 hover:border-amber-500/30"
              }`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>تجهيز وحجز الموعد ({selectedServices.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setRoyalPortalTab("MY_BOOKINGS");
                refreshMyBookings(customer.id);
              }}
              className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm transition border flex items-center justify-center gap-1.5 cursor-pointer ${
                royalPortalTab === "MY_BOOKINGS"
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-[#12121b] text-slate-300 border-white/10 hover:border-amber-500/30"
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>حجوزاتي والتنبيهات ({myBookings.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setRoyalPortalTab("NOTIFICATIONS")}
              className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm transition border flex items-center justify-center gap-1.5 cursor-pointer ${
                royalPortalTab === "NOTIFICATIONS"
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-[#12121b] text-slate-300 border-white/10 hover:border-amber-500/30"
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>الشات وإشعارات الهاتف</span>
            </button>
          </div>

          {/* PORTAL TAB 1: BOOKING BUILDER (EDIT / ADD / PICK SPECIALIST / COMPLETE OR CHAT) */}
          {royalPortalTab === "BUILDER" && (
            <div className="space-y-6">
              {/* Branch Lock & Switch */}
              <div className="p-4 rounded-2xl bg-[#101018] border border-amber-500/30 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 block">الفرع المختار للحجز:</span>
                  <strong className="text-sm font-black text-amber-300">
                    📍 {selectedBranch?.name || "لم يتم تحديد فرع"} — {selectedBranch?.address || ""}
                  </strong>
                </div>
                <button
                  type="button"
                  onClick={() => setShowBranchGateway(true)}
                  className="py-1.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 font-black text-xs cursor-pointer"
                >
                  تغيير الفرع 🔄
                </button>
              </div>

              {/* Selected Services & Offers Cart */}
              <div className="p-5 rounded-3xl bg-[#11111a] border border-amber-500/35 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base font-black text-white">
                    ✂️ خدماتك وعروضك المختارة حالياً ({selectedServices.length})
                  </h3>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-400">المدة المقدرة: <strong className="text-white font-mono">{totalDuration} د</strong></span>
                    <span className="text-slate-400">الإجمالي: <strong className="text-amber-400 font-mono text-base font-black">{totalAmount} ج.م</strong></span>
                  </div>
                </div>

                {selectedServices.length === 0 ? (
                  <div className="p-6 rounded-2xl bg-black/40 border border-dashed border-white/15 text-center text-xs text-slate-400">
                    لم تختر أي خدمة بعد — أضف خدمات أو عروض ملكية من القائمة بالأسفل 👇
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {selectedServices.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 py-2 px-3 rounded-2xl bg-amber-500/15 border border-amber-400/50 text-xs"
                      >
                        <span className="font-black text-white">{item.nameAr}</span>
                        <span className="font-mono text-amber-300 font-bold">{item.price}ج</span>
                        <button
                          type="button"
                          onClick={() => setSelectedServices((prev) => prev.filter((s) => s.id !== item.id))}
                          className="p-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 cursor-pointer"
                          title="حذف الخدمة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add / Edit Other Services or Offers Inline */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                      <Plus className="w-4 h-4" /> تعديل أو إضافة خدمات وعروض أخرى:
                    </span>
                    <div className="flex items-center gap-1 overflow-x-auto pb-1">
                      {[
                        { id: "ALL", label: "الكل" },
                        { id: "OFFERS", label: "العروض الملكية 👑" },
                        { id: "HAIR", label: "شعر ✂️" },
                        { id: "BEARD", label: "دقن 🧔" },
                        { id: "VIP_PACKAGES", label: "بكجات VIP" },
                        { id: "SKIN_CARE", label: "بشرة 🔥" },
                        { id: "KIDS", label: "أطفال" },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setPortalCatalogCategory(cat.id)}
                          className={`py-1 px-2.5 rounded-lg text-[10px] font-black whitespace-nowrap border cursor-pointer ${
                            portalCatalogCategory === cat.id
                              ? "bg-amber-500 text-slate-950 border-amber-400"
                              : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1">
                    {(portalCatalogCategory === "ALL" || portalCatalogCategory === "OFFERS") &&
                      filteredOffers.map((off) => {
                        const offId = `offer-${off.id}`;
                        const isPicked = selectedServices.some((s) => s.id === offId);
                        return (
                          <button
                            key={offId}
                            type="button"
                            onClick={() => {
                              setSelectedServices((prev) =>
                                isPicked
                                  ? prev.filter((s) => s.id !== offId)
                                  : [
                                      ...prev,
                                      {
                                        id: offId,
                                        nameAr: `${off.titleAr} (${off.badge || "عرض خاص"})`,
                                        price: off.price,
                                        durationMinutes: 60,
                                        image: off.image,
                                      },
                                    ]
                              );
                            }}
                            className={`p-2.5 rounded-xl border text-right text-xs transition cursor-pointer ${
                              isPicked
                                ? "bg-amber-500/20 border-amber-400 text-white font-black"
                                : "bg-amber-500/5 hover:bg-amber-500/15 border-amber-500/25 text-amber-100"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="leading-snug line-clamp-2">👑 {off.titleAr}</span>
                              <span className="font-mono text-amber-400 shrink-0">{off.price}ج</span>
                            </div>
                          </button>
                        );
                      })}

                    {services
                      .filter(
                        (s) =>
                          (!selectedBranchId || !s.branchId || s.branchId === selectedBranchId) &&
                          (portalCatalogCategory === "ALL" || s.category === portalCatalogCategory)
                      )
                      .map((srv) => {
                        const isPicked = selectedServices.some((s) => s.id === srv.id);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-xl border text-right text-xs transition cursor-pointer ${
                              isPicked
                                ? "bg-amber-500/20 border-amber-400 text-white font-black"
                                : "bg-black/40 hover:bg-white/5 border-white/10 text-slate-300"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="leading-snug line-clamp-2">{srv.nameAr}</span>
                              <span className="font-mono text-amber-400 shrink-0">{srv.price}ج</span>
                            </div>
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Step 2 Inside Portal: Specialist / First Available Chair */}
              <div className="p-5 rounded-3xl bg-[#11111a] border border-white/10 space-y-3">
                <h3 className="text-sm font-black text-white">✂️ اختيار المتخصص أو أول كرسي يفضى</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialistId("")}
                    className={`py-2 px-3.5 rounded-2xl text-xs font-black border transition cursor-pointer ${
                      !selectedSpecialistId
                        ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg"
                        : "bg-black/40 text-slate-300 border-white/10 hover:border-amber-500/30"
                    }`}
                  >
                    ⚡ أول كرسي يفضى بالفرع
                  </button>
                  {filteredSpecialists.map((spec) => (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => setSelectedSpecialistId(spec.id)}
                      className={`py-2 px-3.5 rounded-2xl text-xs font-bold border transition flex items-center gap-2 cursor-pointer ${
                        selectedSpecialistId === spec.id
                          ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                          : "bg-black/40 text-slate-300 border-white/10 hover:border-amber-500/30"
                      }`}
                    >
                      <span>{spec.name}</span>
                      <span className="text-[10px] opacity-80">
                        ({spec.status === "AVAILABLE" ? "متاح 🟢" : spec.status === "WITH_CLIENT" ? "مشغول 💺" : "كرسي #" + spec.chairNumber})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 Inside Portal: Date + Time + Confirm / Chat */}
              <div className="p-5 rounded-3xl bg-[#11111a] border border-white/10 space-y-4">
                <h3 className="text-sm font-black text-white">📅 تحديد الموعد والملاحظات</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">التاريخ:</label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full py-2.5 px-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-xs font-bold text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">ملاحظات خاصة (اختياري):</label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="مثال: قصة مخصصة أو حجز عريس..."
                      className="w-full py-2.5 px-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-xs font-bold text-white"
                    />
                  </div>
                </div>

                {checkIsDayOff(selectedDate) && (
                  <div className="p-3 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs font-bold">
                    ⚠️ {settings?.dayOffMessage || "عطلة الصالون الأسبوعية"}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">اختر الساعة:</label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 max-h-40 overflow-y-auto p-1">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-2 rounded-xl font-mono text-[11px] font-bold border transition cursor-pointer ${
                          selectedTimeSlot === slot
                            ? "bg-amber-500 text-slate-950 border-amber-400 font-black"
                            : "bg-black/50 text-slate-300 border-white/10 hover:border-amber-500/30"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    disabled={submittingBooking || selectedServices.length === 0 || checkIsDayOff(selectedDate)}
                    onClick={() => executeBooking(customer.id)}
                    className="py-3.5 px-5 rounded-2xl bg-gradient-to-l from-amber-500 to-yellow-400 hover:opacity-95 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{submittingBooking ? "جاري تأكيد الحجز..." : `تأكيد الحجز الملكي الآن (${totalAmount} ج.م)`}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("saddam-open-chat"))}
                    className="py-3.5 px-5 rounded-2xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/40 text-purple-200 font-black text-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>محادثة وشات مباشر مع الصالون 💬</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PORTAL TAB 2: MY BOOKINGS, COORDINATOR UPDATES & 15-MIN/LATE ALERTS */}
          {royalPortalTab === "MY_BOOKINGS" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-white">📅 سجل حجوزاتك وحالتها اللحظية</h3>
                <button
                  type="button"
                  onClick={() => refreshMyBookings(customer.id)}
                  disabled={refreshingBookings}
                  className="py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-amber-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${refreshingBookings ? "animate-spin" : ""}`} />
                  <span>تحديث الآن</span>
                </button>
              </div>

              {myBookings.length === 0 ? (
                <div className="p-8 rounded-3xl bg-[#11111a] border border-white/10 text-center space-y-3">
                  <p className="text-sm font-bold text-slate-300">لا توجد حجوزات مسجلة حتى الآن</p>
                  <button
                    type="button"
                    onClick={() => setRoyalPortalTab("BUILDER")}
                    className="py-2.5 px-5 rounded-2xl bg-amber-500 text-slate-950 font-black text-xs cursor-pointer"
                  >
                    ابدأ حجز موعدك الأول الآن ✂️
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {myBookings.map((bk) => {
                    const timing = computeBookingTiming(
                      bk.bookingDate,
                      bk.timeSlot,
                      settings?.reminderMinutesBefore || 15
                    );
                    let bkServices: any[] = [];
                    try {
                      bkServices = JSON.parse(bk.serviceIds || "[]");
                    } catch {
                      bkServices = [];
                    }
                    const isActiveWait = bk.status === "PENDING" || bk.status === "CONFIRMED";

                    return (
                      <div
                        key={bk.id}
                        className={`p-4 sm:p-5 rounded-3xl border space-y-3 ${
                          isActiveWait && timing.isUpcoming15Min
                            ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-500/10"
                            : isActiveWait && timing.isPastDue5Min
                              ? "bg-rose-500/10 border-rose-500/45"
                              : "bg-[#11111a] border-white/10"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-black text-amber-400 text-sm">
                              #{bk.bookingNumber}
                            </span>
                            <span
                              className={`py-0.5 px-2.5 rounded-full text-[10px] font-black border ${
                                bk.status === "PENDING"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : bk.status === "CONFIRMED"
                                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                                    : bk.status === "WAITING_LOUNGE"
                                      ? "bg-sky-500/20 text-sky-300 border-sky-500/40"
                                      : bk.status === "IN_CHAIR"
                                        ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                                        : bk.status === "COMPLETED"
                                          ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                                          : "bg-white/10 text-slate-400 border-white/10"
                              }`}
                            >
                              {bk.status === "PENDING" && "بانتظار تأكيد المنسق 🔔"}
                              {bk.status === "CONFIRMED" && "مؤكد ومجدول ✅"}
                              {bk.status === "WAITING_LOUNGE" && "بصالة الانتظار الملكية ⚡"}
                              {bk.status === "IN_CHAIR" && "جاري الخدمة على الكرسي 💈"}
                              {bk.status === "COMPLETED" && "مكتمل 🏆"}
                              {bk.status === "CANCELLED" && "ملغي ❌"}
                            </span>
                          </div>
                          <strong className="font-mono text-emerald-400 font-black text-sm">
                            {bk.totalAmount} ج.م
                          </strong>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                          <div>📍 <strong>{bk.branch?.name || "الفرع"}</strong></div>
                          <div>⏰ <strong className="font-mono text-white">{bk.bookingDate} • {bk.timeSlot}</strong></div>
                          <div>✂️ <strong className="text-amber-300">{bk.specialist?.name || "⚡ أول كرسي يفضى"}</strong></div>
                        </div>

                        {bkServices.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {bkServices.map((s: any, idx: number) => (
                              <span key={idx} className="py-1 px-2.5 rounded-xl bg-black/50 border border-white/10 text-[11px] text-slate-200">
                                {s.nameAr || s.titleAr} ({s.price}ج)
                              </span>
                            ))}
                          </div>
                        )}

                        {bk.notes && (
                          <div className="p-2.5 rounded-2xl bg-black/50 border border-amber-500/20 text-[11px] text-amber-200">
                            📝 تحديث المنسق / الملاحظات: {bk.notes}
                          </div>
                        )}

                        {isActiveWait && timing.isUpcoming15Min && (
                          <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                            <span className="font-black text-amber-200">
                              ⏰ {timing.diffMinutes && timing.diffMinutes > 0 ? `متبقي ${timing.diffMinutes} دقيقة على موعدك!` : "حان موعدك الآن!"}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveAppointmentReminder({ ...bk, diffMinutes: timing.diffMinutes ?? 0 });
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="py-1.5 px-3 rounded-xl bg-amber-500 text-slate-950 font-black text-[11px] cursor-pointer"
                            >
                              تأكيد وصولي / أنا في الطريق 🚗
                            </button>
                          </div>
                        )}

                        {isActiveWait && timing.isPastDue5Min && (
                          <div className="p-3 rounded-2xl bg-rose-500/15 border border-rose-500/40 flex flex-wrap items-center justify-between gap-2 text-xs">
                            <span className="font-bold text-rose-200">
                              ⏳ {timing.isPastDay ? "موعد من يوم سابق لم يكتمل" : "تأخرت أكثر من 5 دقائق عن الموعد — يمكنك طلب الترحيل لأول كرسي يفضى ⚡"}
                            </span>
                            {!timing.isPastDay && (
                              <button
                                type="button"
                                onClick={async () => {
                                  await fetch("/api/bookings", {
                                    method: "PATCH",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ id: bk.id, action: "LATE_FIRST_AVAILABLE" }),
                                  });
                                  showToast("success", "⚡ تم ترحيل دورك لأول كرسي يفضى وإبلاغ المنسق!");
                                  await refreshMyBookings(customer.id);
                                }}
                                className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] cursor-pointer"
                              >
                                وصلت متأخر ← احجز لي أول كرسي يفضى ⚡
                              </button>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-2 pt-1 border-t border-white/5">
                          <button
                            type="button"
                            onClick={() => window.dispatchEvent(new CustomEvent("saddam-open-chat"))}
                            className="py-1.5 px-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 font-bold text-[11px] cursor-pointer"
                          >
                            💬 شات بخصوص الحجز
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* PORTAL TAB 3: BACKGROUND PUSH NOTIFICATIONS & CHAT */}
          {royalPortalTab === "NOTIFICATIONS" && (
            <div className="p-6 rounded-3xl bg-[#11111a] border border-amber-500/30 space-y-5">
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <Bell className="w-5 h-5 text-amber-400" />
                  <span>تنبيهات الخلفية حتى والتطبيق مقفول 📲</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  فعّل الإشعارات ليصلك تنبيه تلقائي على تليفونك أو جهازك قبل موعدك بـ 15 دقيقة، وعند تأكيد الحجز من المنسق، وعند وصول أي رسالة جديدة في الشات — حتى لو المتصفح مقفول تماماً!
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10">
                <PushOptInButton
                  role="CUSTOMER"
                  branchId={selectedBranchId || null}
                  customerPhone={customer.phone}
                  userName={customer.name}
                  showTestButton
                />
              </div>
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("saddam-open-chat"))}
                  className="py-3 px-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>فتح الشات المباشر مع منسق الصالون 💬</span>
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {!(showRoyalPortal && customer) && (
        <>

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

          {/* Active Branch Showcase Card & Quick Switch */}
          <div className="pt-3 max-w-2xl mx-auto">
            {selectedBranch ? (
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-500/15 via-[#161624] to-amber-500/15 border-2 border-amber-400/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 py-0.5 px-2 rounded-full">
                        الفرع النشط حالياً 🟢
                      </span>
                      <span className="text-[10px] font-bold text-amber-300">
                        الأسعار والعروض خاصة بهذا الفرع
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5 truncate">
                      {selectedBranch.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 truncate">{selectedBranch.address}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowBranchGateway(true)}
                  className="w-full sm:w-auto py-2.5 px-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 shrink-0 cursor-pointer active:scale-95"
                >
                  <span>تبديل لفرع آخر 🔄</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowBranchGateway(true)}
                className="py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition shadow-xl cursor-pointer"
              >
                اختر الفرع أولاً 📍
              </button>
            )}
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
                  باكدجات وعروض {selectedBranch?.name || "صدام"} الحصرية (VIP Packages)
                </h3>
                <p className="text-xs text-slate-400">
                  عروض وخصومات فورية مخصصة لـ{" "}
                  <strong className="text-amber-300">{selectedBranch?.name || "الفرع المختار"}</strong> 💈
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

            <div className="p-3 rounded-2xl bg-black/50 border border-amber-500/25 flex flex-col items-center gap-2">
              <span className="text-[11px] font-bold text-amber-300">
                📲 فعّل الإشعارات ليصلك تنبيه الـ 15 دقيقة وتحديثات المنسق حتى والتطبيق مقفول:
              </span>
              <PushOptInButton
                role="CUSTOMER"
                branchId={confirmedBooking.branchId}
                customerPhone={customer?.phone}
                userName={customer?.name}
                showTestButton
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {customer && (
                <button
                  type="button"
                  onClick={() => {
                    setConfirmedBooking(null);
                    setRoyalPortalTab("MY_BOOKINGS");
                    setShowRoyalPortal(true);
                  }}
                  className="py-2.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-xs transition cursor-pointer"
                >
                  متابعة حجوزاتي في صفحتي الملكية 📅
                </button>
              )}
              <button
                onClick={() => setConfirmedBooking(null)}
                className="py-2.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer"
              >
                حجز موعد إضافي ➕
              </button>
            </div>
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
                <h3 className="text-lg font-black text-white">
                  اختر الخدمات والأسعار ({selectedBranch?.name || "الفرع"})
                </h3>
                <p className="text-xs text-slate-400">
                  الأسعار المعروضة مخصصة لـ{" "}
                  <strong className="text-amber-300">{selectedBranch?.name || "الفرع المختار"}</strong> • شاهد صور كل خدمة ومدتها بالدقائق
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

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {customer && (
                <button
                  type="button"
                  onClick={() => {
                    setRoyalPortalTab("BUILDER");
                    setShowRoyalPortal(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex-1 sm:flex-initial py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-500/40 text-amber-300 font-black text-xs transition cursor-pointer"
                >
                  صفحتي الملكية والتعديل 👑
                </button>
              )}
              <button
                onClick={() => setShowBookingModal(true)}
                disabled={submittingBooking}
                className="flex-1 sm:flex-initial py-3 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>متابعة وتأكيد موعد الحجز الملكي 📅👑</span>
              </button>
            </div>
          </div>
        </aside>
      )}
        </>
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

            {/* Locked Active Branch Summary (Matches Selected Prices & Offers) */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>الفرع المؤكد للحجز:</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowBookingModal(false);
                    setShowBranchGateway(true);
                  }}
                  className="text-[11px] text-amber-400 hover:underline font-black cursor-pointer"
                >
                  تغيير الفرع 🔄
                </button>
              </div>
              {selectedBranch && (
                <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/50 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-black text-amber-300 text-xs">{selectedBranch.name}</div>
                    <div className="text-[10px] text-slate-300">{selectedBranch.address}</div>
                  </div>
                  <span className="py-1 px-2.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] shrink-0">
                    محدد ✓
                  </span>
                </div>
              )}
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
              <h3 className="text-lg font-black text-white">دخول / تسجيل حساب عميل صدام</h3>
              <p className="text-xs text-amber-200/70">
                بعد الدخول تنتقل مباشرة لصفحتك الملكية لمراجعة خدماتك وإتمام الحجز أو الشات
              </p>
            </div>

            {authContextMsg && (
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/50 text-amber-200 text-xs font-bold leading-relaxed">
                {authContextMsg}
              </div>
            )}

            {authError && (
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {authStep === "INPUT" && (
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-black/50 border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("REGISTER");
                    setAuthError("");
                  }}
                  className={`py-2 px-3 rounded-xl font-black transition cursor-pointer ${
                    authMode === "REGISTER" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  حساب جديد / بالبيانات
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("LOGIN");
                    setAuthError("");
                  }}
                  className={`py-2 px-3 rounded-xl font-black transition cursor-pointer ${
                    authMode === "LOGIN" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  مسجل بالفعل (بالموبايل)
                </button>
              </div>
            )}

            {authStep === "INPUT" && authMode === "LOGIN" ? (
              <form onSubmit={handleQuickPhoneLogin} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">رقم الهاتف المسجل:</label>
                  <input
                    type="tel"
                    required
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    placeholder="010XXXXXXXX"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400 text-left"
                  />
                </div>
                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{authLoading ? "جارٍ إرسال كود الدخول..." : "إرسال كود الدخول على بريدك المسجل 📩"}</span>
                </button>
              </form>
            ) : authStep === "INPUT" ? (
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
          10. ROYAL BRANCH SELECTION GATEWAY (FIRST-OPEN WOW EXPERIENCE)
         ───────────────────────────────────────────────────────────── */}
      {showBranchGateway && (
        <div
          className="fixed inset-0 z-[110] overflow-y-auto bg-[#050508] text-slate-100 flex flex-col font-sans animate-fade-in"
          dir="rtl"
        >
          {/* Ambient Cinema Backdrop & Gold Spotlights */}
          <div
            className="fixed inset-0 bg-cover bg-center opacity-15 scale-105 pointer-events-none filter blur-[2px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&auto=format&fit=crop&q=80')",
            }}
          />
          <div className="fixed -top-32 right-1/4 w-[520px] h-[520px] rounded-full bg-amber-500/12 blur-[140px] pointer-events-none" />
          <div className="fixed -bottom-32 left-1/4 w-[460px] h-[460px] rounded-full bg-amber-600/10 blur-[140px] pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-b from-[#050508]/90 via-[#08080e]/85 to-[#050508]/98 pointer-events-none" />

          {/* Gateway Top Bar */}
          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-amber-500/10 border border-amber-400/35 text-amber-300 text-[11px] font-black">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>SADDAM ROYAL LOUNGE • SELECT BRANCH</span>
            </div>

            <div className="flex items-center gap-2">
              {selectedBranchId && (
                <button
                  type="button"
                  onClick={() => setShowBranchGateway(false)}
                  className="py-1.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-black text-white transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>العودة للفرع الحالي</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <Link
                href="/login"
                className="py-1.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-black transition flex items-center gap-1"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>الطاقم 🔒</span>
              </Link>
            </div>
          </div>

          {/* Center Gateway Content */}
          <div className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center justify-center space-y-8">
            {/* Crown Logo & Grand Headline */}
            <div className="text-center space-y-4 max-w-2xl">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-amber-500/40 via-amber-200/20 to-amber-600/40 blur-md animate-gold-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-amber-400 bg-black p-1 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.jpg"
                    alt="صالون حلاقة صدام VIP"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest uppercase text-amber-400">
                  👑 أهلاً بك في صالون حلاقة صدام VIP
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  اختر فرعك أولاً لبدء{" "}
                  <span className="gold-gradient-text">تجربة صدام الملكية</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
                  كل فرع يتميز بقائمة أسعاره، عروضه الخاصة، وطاقم الكباتن التابع له — اختر الفرع الأقرب لك للدخول واستعراض الأسعار والحجز الفوري
                </p>
              </div>
            </div>

            {/* Monumental Branch Cards */}
            {loading && branches.length === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {[0, 1].map((idx) => (
                  <div
                    key={idx}
                    className="h-96 rounded-3xl bg-[#101018] border border-amber-500/20 animate-pulse p-6 flex flex-col justify-end space-y-3"
                  >
                    <div className="h-6 w-1/2 bg-white/10 rounded-xl" />
                    <div className="h-4 w-3/4 bg-white/5 rounded-xl" />
                    <div className="h-12 w-full bg-amber-500/20 rounded-2xl" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {branches
                  .filter((b) => b.isActive !== false)
                  .map((b, idx) => {
                    const isNasr =
                      b.code?.includes("NASR") || b.name?.includes("نصر");
                    const isCurrent = selectedBranchId === b.id;
                    const branchSpecs = Array.isArray(b.specialists) ? b.specialists : [];
                    const freeChairs = branchSpecs.filter(
                      (sp: any) => sp.status === "AVAILABLE"
                    ).length;
                    const coverImg = isNasr
                      ? "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1000&auto=format&fit=crop&q=85"
                      : "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1000&auto=format&fit=crop&q=85";

                    return (
                      <div
                        key={b.id}
                        onClick={() => handleEnterBranch(b)}
                        className={`group relative rounded-[28px] overflow-hidden border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between bg-gradient-to-b from-[#151521] via-[#101019] to-[#0a0a10] shadow-2xl hover:-translate-y-1.5 ${
                          isCurrent
                            ? "border-amber-400 ring-2 ring-amber-400/50 shadow-amber-500/25"
                            : "border-amber-500/35 hover:border-amber-400 hover:shadow-amber-500/20"
                        }`}
                      >
                        {/* Top Visual Showcase */}
                        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={coverImg}
                            alt={b.name}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-95 transition duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#12121b] via-[#0c0c14]/45 to-black/30" />

                          {/* Top Corner Badges */}
                          <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
                            <span
                              className={`py-1 px-3 rounded-full text-[11px] font-black shadow-lg backdrop-blur-md border ${
                                isNasr
                                  ? "bg-amber-500 text-slate-950 border-amber-300"
                                  : "bg-black/75 text-amber-300 border-amber-400/50"
                              }`}
                            >
                              {isNasr
                                ? "👑 VIP FLAGSHIP • عباس العقاد"
                                : idx === 0
                                ? "💈 ORIGINAL ROYAL • الفرع الرئيسي"
                                : "💈 SADDAM LUXURY BRANCH"}
                            </span>

                            {isCurrent && (
                              <span className="py-1 px-2.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] shadow-md">
                                الفرع المختار ✓
                              </span>
                            )}
                          </div>

                          {/* Live Branch Availability Pill */}
                          <div className="absolute bottom-4 right-4 left-4 flex flex-wrap items-end justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-mono font-bold text-amber-300/90 uppercase tracking-wider block">
                                {b.code || (isNasr ? "NASR CITY VIP" : "HADAYEK EL-KOBBA")}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition drop-shadow-lg">
                                {b.name}
                              </h3>
                            </div>

                            <span
                              className={`py-1 px-3 rounded-full text-[11px] font-black border backdrop-blur-md ${
                                freeChairs > 0
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/50"
                                  : "bg-amber-500/20 text-amber-200 border-amber-400/40"
                              }`}
                            >
                              {freeChairs > 0
                                ? `🟢 ${freeChairs} كرسي متاح الآن`
                                : `✂️ ${branchSpecs.length} كباتن محترفين`}
                            </span>
                          </div>
                        </div>

                        {/* Branch Details & CTA */}
                        <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-2.5 text-xs">
                            <div className="flex items-start gap-2 text-slate-200">
                              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span className="font-bold leading-relaxed">{b.address}</span>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                              <span className="flex items-center gap-1.5 font-mono font-bold text-amber-300">
                                <Phone className="w-3.5 h-3.5 text-amber-400" />
                                {b.phone}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-amber-400" />
                                يومياً 12 ظ - 02 ص
                              </span>
                            </div>

                            {/* Branch Specialties Strip */}
                            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-black">
                              <span className="py-1 px-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200">
                                💎 أسعار وخدمات خاصة بالفرع
                              </span>
                              <span className="py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                                👑 عروض وحجز فوري
                              </span>
                              {b.googleMapsUrl && (
                                <a
                                  href={b.googleMapsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="py-1 px-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 flex items-center gap-1 transition"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>الموقع GPS</span>
                                </a>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            disabled={switchingBranch}
                            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 group-hover:from-amber-400 group-hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 cursor-pointer"
                          >
                            <span>الدخول واستعراض أسعار وحجز {b.name}</span>
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            <p className="text-[11px] text-slate-500 font-bold text-center">
              يمكنك تبديل الفرع في أي وقت من أعلى الصفحة لمقارنة الأسعار والعروض بين الفرعين 🔄
            </p>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          11. LUXURY VIP FLOATING TOAST NOTIFICATION (NO WINDOWS ALERTS!)
         ───────────────────────────────────────────────────────────── */}
      {pageToast && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] max-w-md w-[92%] sm:w-auto animate-fade-in font-sans"
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
