"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CardQRModal from "@/components/CardQRModal";
import {
  LayoutDashboard,
  Scissors,
  Users,
  ShoppingBag,
  Calendar,
  Settings,
  DollarSign,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Plus,
  Edit,
  Trash2,
  RefreshCw,
  LogOut,
  MapPin,
  Clock,
  UserCheck,
  UserX,
  Lock,
  Unlock,
  AlertTriangle,
  QrCode,
  ExternalLink,
  Search,
  CheckCircle2,
  X,
  CreditCard,
  Banknote,
  Smartphone,
  Phone,
  Mail,
  Award,
  Bell,
  BellRing,
  Volume2,
  VolumeX,
  MessageSquare,
  Send,
  CheckCheck,
  Check,
  Tag,
  Eye,
  Upload,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  // Auth & Permissions
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedBranchId, setSelectedBranchId] = useState<string>("ALL");

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "specialists"
    | "services"
    | "offers"
    | "inventory"
    | "bookings"
    | "chat"
    | "customers"
    | "users"
    | "branches"
    | "settings"
  >("overview");

  // Data States
  const [settings, setSettings] = useState<any>(null);
  const [branches, setBranches] = useState<any[]>([]);
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [ledgers, setLedgers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Audio Alarm State for Bookings
  const [alarmBooking, setAlarmBooking] = useState<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const alarmIntervalRef = useRef<any>(null);
  const lastAcknowledgedBookingId = useRef<string | null>(null);

  // Modals States
  const [showQrModal, setShowQrModal] = useState(false);

  // Specialist Modal (Create/Edit)
  const [showSpecialistModal, setShowSpecialistModal] = useState(false);
  const [editingSpecialist, setEditingSpecialist] = useState<any>(null);
  const [specForm, setSpecForm] = useState({
    name: "",
    phone: "",
    title: "خبير حلاقة وتصفيف",
    branchId: "",
    chairNumber: 1,
    payType: "SALARY_PLUS_COMMISSION",
    baseSalary: 6000,
    commissionRate: 20,
    photo: "",
    username: "",
    password: "",
  });

  // Payout / Advance Modal
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutSpecialist, setPayoutSpecialist] = useState<any>(null);
  const [payoutType, setPayoutType] = useState<string>("ADVANCE_WITHDRAWAL");
  const [payoutAmount, setPayoutAmount] = useState<number>(500);
  const [payoutNotes, setPayoutNotes] = useState<string>("");

  // Shift Attendance Status Modal
  const [showShiftStatusModal, setShowShiftStatusModal] = useState(false);
  const [statusTargetSpecialist, setStatusTargetSpecialist] = useState<any>(null);
  const [newShiftStatus, setNewShiftStatus] = useState<string>("AVAILABLE");
  const [shiftStatusReason, setShiftStatusReason] = useState<string>("");
  const [uploadingImage, setUploadingImage] = useState(false);

  // Service Modal (Create/Edit)
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [serviceForm, setServiceForm] = useState({
    nameAr: "",
    category: "HAIR",
    price: 150,
    durationMinutes: 30,
    description: "",
    image: "",
    sortOrder: 0,
    isActive: true,
  });

  // Offer Modal (Create/Edit)
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState<any>(null);
  const [offerForm, setOfferForm] = useState({
    titleAr: "",
    badge: "خصم 46% 🔥",
    price: 1000,
    oldPrice: 1350,
    discountPercent: 26,
    image: "/offers/offer-vip-1000.jpg",
    description: "",
    features: "قص شعر وتدريج عالمي\nتحديد دقن بالموس والبخار\nسشوار وتصفيف احترافي",
    branchId: "",
    isActive: true,
    sortOrder: 1,
  });

  // Product & Raw Materials Modal (Create/Edit)
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productForm, setProductForm] = useState({
    nameAr: "",
    category: "STYLING",
    price: 180,
    costPrice: 100,
    stockQty: 50,
    minStockAlert: 10,
    image: "",
    barcode: "",
    branchId: "",
    isActive: true,
  });
  const [productTypeFilter, setProductTypeFilter] = useState<"ALL" | "RETAIL" | "SUPPLIES">("ALL");
  const [productCategoryFilter, setProductCategoryFilter] = useState<string>("ALL");
  const [productSearch, setProductSearch] = useState("");

  // VIP Admin Toast Notification (No Native Windows Alerts!)
  const [adminToast, setAdminToast] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const showToast = (type: "success" | "error" | "info", message: string) => {
    setAdminToast({ type, message });
    setTimeout(() => {
      setAdminToast((prev) => (prev?.message === message ? null : prev));
    }, 4500);
  };

  // Branch Modal
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [branchForm, setBranchForm] = useState({
    name: "",
    code: "",
    address: "",
    phone: "01121537537",
    whatsapp: "01121537537",
  });

  // User Modal (Create & Full Edit)
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    password: "",
    pin: "157230",
    role: "cashier",
    branchId: "",
    phone: "",
    isActive: true,
  });

  // Chat Tab State
  const [chatConversations, setChatConversations] = useState<any[]>([]);
  const [activeChatCustomer, setActiveChatCustomer] = useState<any>(null);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatReplyText, setChatReplyText] = useState("");
  const [chatSending, setChatSending] = useState(false);
  const [unreadChatTotal, setUnreadChatTotal] = useState(0);

  // Bookings Filter
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>("ALL");

  // Check Auth
  useEffect(() => {
    try {
      const saved = localStorage.getItem("saddam_staff_user");
      if (!saved) {
        router.push("/login");
        return;
      }
      const user = JSON.parse(saved);
      if (
        user.role !== "owner" &&
        user.role !== "general_manager" &&
        user.role !== "manager"
      ) {
        router.push("/login");
        return;
      }
      setCurrentUser(user);
      if (user.branchId && user.role === "manager") {
        setSelectedBranchId(user.branchId);
      }
    } catch {
      router.push("/login");
    }
  }, [router]);

  // Audio Alarm Logic (Web Audio API Synthesizer - Royal Chime)
  const startAlarmSound = () => {
    try {
      if (alarmIntervalRef.current) clearInterval(alarmIntervalRef.current);
      const playBeep = () => {
        try {
          if (!audioCtxRef.current) {
            const AC = window.AudioContext || (window as any).webkitAudioContext;
            if (AC) audioCtxRef.current = new AC();
          }
          const ctx = audioCtxRef.current;
          if (!ctx) return;
          if (ctx.state === "suspended") ctx.resume();

          const now = ctx.currentTime;
          // Three royal harmonic chime tones
          [[880, 0], [1174.66, 0.2], [1760, 0.4]].forEach(([freq, delay]) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.5, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + delay);
            osc.stop(now + delay + 0.35);
          });
        } catch {}
      };

      playBeep();
      alarmIntervalRef.current = setInterval(playBeep, 2500);
    } catch {}
  };

  const isBookingMuted = (bookingId: string) => {
    try {
      const saved = JSON.parse(localStorage.getItem("saddam_muted_bookings") || "[]");
      return saved.includes(bookingId);
    } catch {
      return false;
    }
  };

  const stopAlarmSound = (bookingIdToMute?: string) => {
    const id = bookingIdToMute || alarmBooking?.id;
    if (id) {
      try {
        const saved = JSON.parse(localStorage.getItem("saddam_muted_bookings") || "[]");
        if (!saved.includes(id)) {
          saved.push(id);
          localStorage.setItem("saddam_muted_bookings", JSON.stringify(saved.slice(-50)));
        }
      } catch {}
      lastAcknowledgedBookingId.current = id;
    }
    if (alarmIntervalRef.current) {
      clearInterval(alarmIntervalRef.current);
      alarmIntervalRef.current = null;
    }
    setAlarmBooking(null);
  };

  // Load All Admin Data
  const loadAllData = async () => {
    try {
      setLoading(true);
      const [
        resSet,
        resB,
        resSpec,
        resS,
        resO,
        resP,
        resBk,
        resCust,
        resU,
        resT,
        resL,
        resChat,
      ] = await Promise.all([
        fetch("/api/settings"),
        fetch("/api/branches"),
        fetch(`/api/specialists?activeOnly=false`),
        fetch("/api/services?activeOnly=false"),
        fetch("/api/offers?activeOnly=false"),
        fetch("/api/products"),
        fetch("/api/bookings"),
        fetch("/api/customers"),
        fetch("/api/users"),
        fetch("/api/tickets"),
        fetch("/api/ledgers"),
        fetch("/api/chat?limit=50"),
      ]);

      const [
        dataSet,
        dataB,
        dataSpec,
        dataS,
        dataO,
        dataP,
        dataBk,
        dataCust,
        dataU,
        dataT,
        dataL,
        dataChat,
      ] = await Promise.all([
        resSet.json(),
        resB.json(),
        resSpec.json(),
        resS.json(),
        resO.json(),
        resP.json(),
        resBk.json(),
        resCust.json(),
        resU.json(),
        resT.json(),
        resL.json(),
        resChat.json(),
      ]);

      if (dataSet.success && dataSet.settings) setSettings(dataSet.settings);
      if (dataB.success && dataB.branches) {
        setBranches(dataB.branches);
        if (dataB.branches.length > 0 && !specForm.branchId) {
          setSpecForm((prev) => ({ ...prev, branchId: dataB.branches[0].id }));
        }
      }
      if (dataSpec.success && dataSpec.specialists) setSpecialists(dataSpec.specialists);
      if (dataS.success && dataS.services) setServices(dataS.services);
      if (dataO.success && dataO.offers) setOffers(dataO.offers);
      if (dataP.success && dataP.products) setProducts(dataP.products);
      if (dataCust.success && dataCust.customers) setCustomers(dataCust.customers);
      if (dataU.success && dataU.users) setUsers(dataU.users);
      if (dataT.success && dataT.tickets) setTickets(dataT.tickets);
      if (dataL.success && dataL.ledgers) setLedgers(dataL.ledgers);

      // Bookings & Audio Alarm Check
      if (dataBk.success && dataBk.bookings) {
        setBookings(dataBk.bookings);
        const pendingBookings = dataBk.bookings.filter(
          (b: any) =>
            b.status === "PENDING" &&
            (selectedBranchId === "ALL" || b.branchId === selectedBranchId)
        );
        const newest = pendingBookings[0];
        if (
          newest &&
          newest.id !== lastAcknowledgedBookingId.current &&
          !isBookingMuted(newest.id) &&
          !alarmBooking
        ) {
          setAlarmBooking(newest);
          startAlarmSound();
        }
      }

      // Chat Data
      if (dataChat.success) {
        setChatConversations(dataChat.conversations || []);
        const totalUnread = (dataChat.conversations || []).reduce(
          (sum: number, c: any) => sum + (c.unreadCount || 0),
          0
        );
        setUnreadChatTotal(totalUnread);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadAllData();
      const interval = setInterval(loadAllData, 4000);
      return () => clearInterval(interval);
    }
  }, [currentUser, selectedBranchId]);

  // Master Kill Switch Toggle
  const handleToggleKillSwitch = async () => {
    if (currentUser?.role !== "owner") {
      alert("عفواً، خاصية تعطيل النظام بالكامل مخصصة للمالك فقط (Maestro)");
      return;
    }

    const currentLocked = settings?.systemLocked || false;
    const confirmMsg = currentLocked
      ? "هل تريد إلغاء قفل النظام وإعادة تفعيله لجميع المستخدمين؟"
      : "⚠️ تحذير أمني: هل تريد قفل النظام بالكامل وتعطيل دخول جميع الموظفين مؤقتاً؟";

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemLocked: !currentLocked,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
        alert(
          data.settings.systemLocked
            ? "تم قفل النظام بالكامل بنجاح 🔒"
            : "تم فتح النظام وإلغاء القفل بنجاح 🔓"
        );
      }
    } catch {
      alert("فشل تحديث حالة القفل");
    }
  };

  // Booking Actions
  const handleUpdateBookingStatus = async (bookingId: string, newStatus: string) => {
    try {
      if (alarmBooking?.id === bookingId) {
        stopAlarmSound(bookingId);
      }
      const res = await fetch("/api/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookingId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) =>
          prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleConfirmAlarmBooking = (bookingId: string) => {
    handleUpdateBookingStatus(bookingId, "CONFIRMED");
    stopAlarmSound(bookingId);
  };

  // Open Chat from Booking
  const handleOpenChatFromBooking = (bk: any) => {
    setActiveTab("chat");
    const conv = {
      key: bk.customer?.phone || bk.customer?.id,
      customerId: bk.customerId,
      customerPhone: bk.customer?.phone,
      customerName: bk.customer?.name,
    };
    handleSelectCustomerChat(conv);
  };

  // Toggle User Active Status
  const handleToggleUserActive = async (userId: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, isActive: !currentStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, isActive: !currentStatus } : u))
        );
      } else {
        alert(data.error || "فشل تعديل حالة الحساب");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Open Edit User Modal
  const handleOpenEditUser = (u: any) => {
    setEditingUser(u);
    setUserForm({
      name: u.name,
      username: u.username,
      password: "",
      pin: u.pin || "157230",
      role: u.role,
      branchId: u.branchId || "",
      phone: u.phone || "",
      isActive: u.isActive !== undefined ? u.isActive : true,
    });
    setShowUserModal(true);
  };

  // Open Create User Modal
  const handleOpenCreateUser = () => {
    setEditingUser(null);
    setUserForm({
      name: "",
      username: "",
      password: "",
      pin: "157230",
      role: "cashier",
      branchId: branches[0]?.id || "",
      phone: "",
      isActive: true,
    });
    setShowUserModal(true);
  };

  // Save or Update User
  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const payload: any = {
          id: editingUser.id,
          name: userForm.name,
          username: userForm.username,
          phone: userForm.phone,
          role: userForm.role,
          branchId: userForm.branchId || null,
          pin: userForm.pin,
          isActive: userForm.isActive,
        };
        if (userForm.password.trim()) {
          payload.password = userForm.password.trim();
        }

        const res = await fetch("/api/users", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          const branchObj = branches.find((b) => b.id === userForm.branchId);
          setUsers((prev) =>
            prev.map((u) =>
              u.id === editingUser.id
                ? {
                    ...u,
                    ...data.user,
                    branchName: branchObj?.name || "إشراف عام على كل الفروع",
                  }
                : u
            )
          );
          setShowUserModal(false);
          setEditingUser(null);
          alert("تم حفظ وتحديث بيانات المستخدم بنجاح! ✅");
        } else {
          alert(data.error || "فشل تعديل المستخدم");
        }
      } else {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userForm),
        });
        const data = await res.json();
        if (data.success) {
          await loadAllData();
          setShowUserModal(false);
          alert("تم إضافة المستخدم بنجاح! ✅");
        } else {
          alert(data.error || "فشل إضافة المستخدم");
        }
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Offers Actions
  const handleOpenCreateOffer = () => {
    setEditingOffer(null);
    setOfferForm({
      titleAr: "",
      badge: "خصم 46% 🔥",
      price: 1000,
      oldPrice: 1350,
      discountPercent: 26,
      image: "/offers/offer-vip-1000.jpg",
      description: "",
      features: "قص شعر وتدريج عالمي\nتحديد دقن بالموس والبخار\nسشوار وتصفيف احترافي",
      branchId: "",
      isActive: true,
      sortOrder: (offers.length || 0) + 1,
    });
    setShowOfferModal(true);
  };

  const handleOpenEditOffer = (offer: any) => {
    setEditingOffer(offer);
    let featuresStr = "";
    try {
      const parsed = JSON.parse(offer.features || "[]");
      featuresStr = Array.isArray(parsed) ? parsed.join("\n") : "";
    } catch {
      featuresStr = offer.features || "";
    }

    setOfferForm({
      titleAr: offer.titleAr,
      badge: offer.badge || "",
      price: offer.price,
      oldPrice: offer.oldPrice || "",
      discountPercent: offer.discountPercent || "",
      image: offer.image || "/offers/offer-vip-1000.jpg",
      description: offer.description || "",
      features: featuresStr,
      branchId: offer.branchId || "",
      isActive: offer.isActive,
      sortOrder: offer.sortOrder || 1,
    });
    setShowOfferModal(true);
  };

  const handleSaveOffer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const featuresArr = offerForm.features
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean);

      const payload = {
        titleAr: offerForm.titleAr,
        badge: offerForm.badge,
        price: Number(offerForm.price),
        oldPrice: offerForm.oldPrice ? Number(offerForm.oldPrice) : null,
        discountPercent: offerForm.discountPercent ? Number(offerForm.discountPercent) : null,
        image: offerForm.image,
        description: offerForm.description,
        features: featuresArr,
        branchId: offerForm.branchId || null,
        isActive: offerForm.isActive,
        sortOrder: Number(offerForm.sortOrder),
      };

      if (editingOffer) {
        const res = await fetch("/api/offers", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingOffer.id, ...payload }),
        });
        const data = await res.json();
        if (data.success) {
          setOffers((prev) =>
            prev.map((o) => (o.id === editingOffer.id ? { ...o, ...data.offer } : o))
          );
          setShowOfferModal(false);
          setEditingOffer(null);
          alert("تم تعديل العرض الملكي بنجاح! 👑");
        } else {
          alert(data.error || "فشل تعديل العرض");
        }
      } else {
        const res = await fetch("/api/offers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          setOffers((prev) => [...prev, data.offer]);
          setShowOfferModal(false);
          alert("تم إضافة العرض الملكي الجديد بنجاح! 👑");
        } else {
          alert(data.error || "فشل إضافة العرض");
        }
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleDeleteOffer = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا العرض الملكي نهائياً؟")) return;
    try {
      const res = await fetch(`/api/offers?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setOffers((prev) => prev.filter((o) => o.id !== id));
      } else {
        alert(data.error || "فشل الحذف");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleToggleOfferActive = async (offer: any) => {
    try {
      const res = await fetch("/api/offers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: offer.id, isActive: !offer.isActive }),
      });
      const data = await res.json();
      if (data.success) {
        setOffers((prev) =>
          prev.map((o) => (o.id === offer.id ? { ...o, isActive: !offer.isActive } : o))
        );
      }
    } catch {}
  };

  // Chat Tab Actions
  const handleSelectCustomerChat = async (conv: any) => {
    setActiveChatCustomer(conv);
    try {
      const res = await fetch(
        `/api/chat?customerPhone=${encodeURIComponent(
          conv.customerPhone || ""
        )}&customerId=${encodeURIComponent(conv.customerId || "")}`
      );
      const data = await res.json();
      if (data.success) {
        setChatMessages(data.messages || []);
        // Mark read
        await fetch("/api/chat", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customerPhone: conv.customerPhone,
            customerId: conv.customerId,
          }),
        });
        setChatConversations((prev) =>
          prev.map((c) => (c.key === conv.key ? { ...c, unreadCount: 0 } : c))
        );
      }
    } catch {}
  };

  const handleSendAdminReply = async (textToSend?: string) => {
    const text = (textToSend || chatReplyText).trim();
    if (!text || !activeChatCustomer) return;
    try {
      setChatSending(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "SALON",
          senderName: `${currentUser?.name || "إدارة صالون صدام"} 👑`,
          message: text,
          customerPhone: activeChatCustomer.customerPhone,
          customerId: activeChatCustomer.customerId,
          customerName: activeChatCustomer.customerName,
          branchId: selectedBranchId !== "ALL" ? selectedBranchId : null,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setChatMessages((prev) => [...prev, data.chatMessage]);
        setChatReplyText("");
      }
    } catch {
      alert("فشل إرسال الرد");
    } finally {
      setChatSending(false);
    }
  };

  // Specialist Actions
  const handleSaveSpecialist = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/specialists";
      const method = editingSpecialist ? "PATCH" : "POST";
      const body = editingSpecialist
        ? { id: editingSpecialist.id, ...specForm }
        : specForm;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        await loadAllData();
        setShowSpecialistModal(false);
        setEditingSpecialist(null);
      } else {
        alert(data.error || "فشل حفظ بيانات المتخصص");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleDeleteSpecialist = async (id: string, name: string) => {
    if (!confirm(`هل أنت متأكد من حذف المتخصص "${name}" نهائياً من السيستم؟`)) return;
    try {
      const res = await fetch(`/api/specialists?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
      } else {
        alert(data.error || "فشل حذف المتخصص");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleOpenShiftModal = (spec: any) => {
    setStatusTargetSpecialist(spec);
    setNewShiftStatus(spec.status || "AVAILABLE");
    setShiftStatusReason(spec.statusReason || "");
    setShowShiftStatusModal(true);
  };

  const handleSaveShiftStatus = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!statusTargetSpecialist) return;
    try {
      const res = await fetch("/api/specialists", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: statusTargetSpecialist.id,
          status: newShiftStatus,
          statusReason: shiftStatusReason.trim() || null,
        }),
      });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
        setShowShiftStatusModal(false);
        setStatusTargetSpecialist(null);
      } else {
        alert(data.error || "فشل تحديث حالة الوردية");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleQuickSetStatus = async (spec: any, status: string, reason: string) => {
    try {
      const res = await fetch("/api/specialists", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: spec.id,
          status,
          statusReason: reason,
        }),
      });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
      }
    } catch {}
  };

  const handleRecordPayout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payoutSpecialist) return;

    try {
      const res = await fetch("/api/ledgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          specialistId: payoutSpecialist.id,
          branchId: payoutSpecialist.branchId,
          type: payoutType,
          amount: Number(payoutAmount),
          notes: payoutNotes,
          recordedBy: currentUser?.name || "المالك (Maestro)",
        }),
      });

      const data = await res.json();
      if (data.success) {
        await loadAllData();
        setShowPayoutModal(false);
        alert("تم تسجيل المعاملة المالية في سجل المتخصص بنجاح! 💵");
      } else {
        alert(data.error || "فشل تسجيل الحركة المالية");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Service Actions
  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/services";
      const method = editingService ? "PATCH" : "POST";
      const body = editingService ? { id: editingService.id, ...serviceForm } : serviceForm;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        await loadAllData();
        setShowServiceModal(false);
        setEditingService(null);
      } else {
        alert(data.error || "فشل حفظ الخدمة");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Upload image to ImgBB and return URL
  const handleUploadFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onSuccess: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.url) {
        onSuccess(data.url);
      } else {
        alert(data.error || "فشل رفع الصورة على ImgBB");
      }
    } catch {
      alert("تعذر الاتصال بخادم رفع الصور");
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  };

  const handleOpenEditService = (srv: any) => {
    setEditingService(srv);
    setServiceForm({
      nameAr: srv.nameAr || "",
      category: srv.category || "HAIR",
      price: srv.price || 150,
      durationMinutes: srv.durationMinutes || 30,
      description: srv.description || "",
      image: srv.image || "",
      sortOrder: srv.sortOrder || 0,
      isActive: srv.isActive !== false,
    });
    setShowServiceModal(true);
  };

  const handleDeleteService = async (id: string, name: string) => {
    if (!confirm(`هل أنت متأكد من حذف الخدمة "${name}" نهائياً من السيستم؟`)) return;
    try {
      const res = await fetch(`/api/services?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
      } else {
        alert(data.error || "فشل حذف الخدمة");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleToggleServiceActive = async (srv: any) => {
    try {
      const res = await fetch("/api/services", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: srv.id, isActive: !srv.isActive }),
      });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
      }
    } catch {}
  };

  // ─────────────────────────────────────────────────────────────
  // Product & Raw Materials Handlers (CRUD & Live ImgBB)
  // ─────────────────────────────────────────────────────────────
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      nameAr: "",
      category: "STYLING",
      price: 180,
      costPrice: 100,
      stockQty: 50,
      minStockAlert: 10,
      image: "",
      barcode: "",
      branchId: selectedBranchId !== "ALL" ? selectedBranchId : "",
      isActive: true,
    });
    setShowProductModal(true);
  };

  const handleOpenEditProduct = (prod: any) => {
    setEditingProduct(prod);
    setProductForm({
      nameAr: prod.nameAr || "",
      category: prod.category || "STYLING",
      price: prod.price || 0,
      costPrice: prod.costPrice || 0,
      stockQty: prod.stockQty !== undefined ? prod.stockQty : 50,
      minStockAlert: prod.minStockAlert !== undefined ? prod.minStockAlert : 10,
      image: prod.image || "",
      barcode: prod.barcode || "",
      branchId: prod.branchId || "",
      isActive: prod.isActive !== false,
    });
    setShowProductModal(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.nameAr.trim()) {
      showToast("error", "اسم المنتج أو الخامة مطلوب");
      return;
    }

    try {
      const isEditing = Boolean(editingProduct);
      const url = "/api/products";
      const method = isEditing ? "PATCH" : "POST";
      const payload = isEditing ? { id: editingProduct.id, ...productForm } : productForm;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        showToast(
          "success",
          isEditing ? "تم تحديث بيانات المنتج / الخامة بنجاح ✅" : "تمت إضافة المنتج / الخامة بنجاح إلى المخزن 🛍️"
        );
        setShowProductModal(false);
        setEditingProduct(null);
        await loadAllData();
      } else {
        showToast("error", data.error || "فشل حفظ المنتج");
      }
    } catch {
      showToast("error", "تعذر الاتصال بالخادم");
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (!confirm(`هل أنت متأكد من حذف الصنف "${name}" نهائياً من المخزن؟`)) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showToast("success", `تم حذف الصنف "${name}" بنجاح 🗑️`);
        await loadAllData();
      } else {
        showToast("error", data.error || "فشل حذف الصنف");
      }
    } catch {
      showToast("error", "تعذر الاتصال بالخادم");
    }
  };

  const handleAdjustStock = async (prod: any, diff: number) => {
    const newQty = Math.max(0, (prod.stockQty || 0) + diff);
    try {
      const res = await fetch("/api/products", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: prod.id, stockQty: newQty }),
      });
      const data = await res.json();
      if (data.success) {
        setProducts((prev) =>
          prev.map((p) => (p.id === prod.id ? { ...p, stockQty: newQty } : p))
        );
        showToast("info", `تم تحديث رصيد (${prod.nameAr}) إلى ${newQty} عبوة`);
      }
    } catch {
      showToast("error", "فشل تحديث المخزون");
    }
  };

  // Branch Actions
  const handleSaveBranch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/branches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(branchForm),
      });
      const data = await res.json();
      if (data.success) {
        await loadAllData();
        setShowBranchModal(false);
        setBranchForm({
          name: "",
          code: "",
          address: "",
          phone: "01121537537",
          whatsapp: "01121537537",
        });
      } else {
        alert(data.error || "فشل إضافة الفرع");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("saddam_staff_user");
    router.push("/login");
  };

  // Filter Bookings by Tab / Status / Branch
  const filteredBookings = bookings.filter((bk) => {
    const matchBranch = selectedBranchId === "ALL" || bk.branchId === selectedBranchId;
    const matchStatus =
      bookingFilterStatus === "ALL" || bk.status === bookingFilterStatus;
    return matchBranch && matchStatus;
  });

  // Calculate Metrics
  const totalRevenue = tickets
    .filter((t) => selectedBranchId === "ALL" || t.branchId === selectedBranchId)
    .reduce((sum, t) => sum + (t.finalAmount || 0), 0);

  const totalClientsServed = tickets.filter(
    (t) => selectedBranchId === "ALL" || t.branchId === selectedBranchId
  ).length;

  const totalRetailSales = tickets
    .filter((t) => selectedBranchId === "ALL" || t.branchId === selectedBranchId)
    .reduce((sum, t) => sum + (t.retailTotal || 0), 0);

  return (
    <div className="min-h-screen bg-[#07070b] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black" dir="rtl">
      {/* ─────────────────────────────────────────────────────────────
          1. AUDIO ALARM BANNER (NEW PENDING BOOKINGS)
         ───────────────────────────────────────────────────────────── */}
      {alarmBooking && (
        <div className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 animate-pulse shadow-2xl z-50 border-b-2 border-amber-300">
          <div className="flex items-center gap-2.5 font-black text-xs sm:text-sm">
            <BellRing className="w-5 h-5 animate-bounce text-amber-200 shrink-0" />
            <span>
              🔔 جرس تنبيه عاجل: حجز موعد جديد بانتظار التأكيد! رقم #{alarmBooking.bookingNumber} للعميل (
              {alarmBooking.customer?.name || "عميل VIP"}) بمبلغ {alarmBooking.totalAmount} ج.م (
              {alarmBooking.branch?.name})
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleConfirmAlarmBooking(alarmBooking.id)}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition shadow-lg flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>عرض وتأكيد الموعد ✅</span>
            </button>
            <button
              onClick={() => stopAlarmSound(alarmBooking.id)}
              className="px-3.5 py-2 rounded-xl bg-black/60 hover:bg-black/80 text-white border border-white/20 font-bold text-xs transition flex items-center gap-1"
            >
              <VolumeX className="w-4 h-4 text-amber-300" />
              <span>كتم التنبيه 🔇</span>
            </button>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. TOP HEADER
         ───────────────────────────────────────────────────────────── */}
      <header className="bg-[#0f0f16] border-b border-amber-500/30 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-amber-400 shadow-md bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-black text-amber-400">
                لوحة إدارة صالون صدام VIP
              </h2>
              <span className="py-0.5 px-2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black border border-amber-500/40">
                {currentUser?.role === "owner" ? "المالك (Maestro) 👑" : currentUser?.role}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-bold">
              مرحباً بك، أ / {currentUser?.name}
            </p>
          </div>
        </div>

        {/* Top Controls: Branch Switch, Kill Switch, POS link, QR, Logout */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Branch Filter Switcher */}
          <select
            value={selectedBranchId}
            onChange={(e) => setSelectedBranchId(e.target.value)}
            className="py-1.5 px-3 rounded-xl bg-[#181822] border border-amber-500/30 text-xs font-bold text-amber-300 focus:outline-none"
          >
            <option value="ALL">إجمالي كل الفروع</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          {/* Master Kill Switch Toggle Button (Maestro Power) */}
          {currentUser?.role === "owner" && (
            <button
              onClick={handleToggleKillSwitch}
              className={`py-1.5 px-3 rounded-xl text-xs font-black transition flex items-center gap-1.5 border ${
                settings?.systemLocked
                  ? "bg-rose-600 text-white border-rose-400 animate-pulse"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
              }`}
              title="التحكم الأمني في قفل النظام بالكامل"
            >
              {settings?.systemLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>النظام مغلق 🔒</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>النظام مفعّل 🔓</span>
                </>
              )}
            </button>
          )}

          {/* POS Shortcut */}
          <Link
            href="/pos"
            className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition hidden sm:inline"
          >
            نقطة البيع POS 💰
          </Link>

          {/* Card 2 QR */}
          <button
            onClick={() => setShowQrModal(true)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-amber-300 transition"
            title="كارت الـ 2 QR"
          >
            <QrCode className="w-4 h-4" />
          </button>

          <button
            onClick={loadAllData}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition"
            title="تحديث البيانات"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition text-xs font-bold"
            title="خروج"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          3. NAVIGATION TABS (RESPONSIVE & CLEAN MULTI-ROW WRAP)
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#0e0e14] border-b border-amber-500/20 px-3 sm:px-6 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5 max-w-7xl mx-auto">
          {[
            { id: "overview", label: "نظرة عامة 📊", icon: LayoutDashboard },
            { id: "bookings", label: `الحجوزات 📅 ${bookings.filter(b => b.status === "PENDING").length > 0 ? `(${bookings.filter(b => b.status === "PENDING").length})` : ""}`, icon: Calendar },
            { id: "offers", label: "العروض الملكية 👑", icon: Sparkles },
            { id: "chat", label: `شات العملاء 💬 ${unreadChatTotal > 0 ? `(${unreadChatTotal})` : ""}`, icon: MessageSquare },
            { id: "specialists", label: "المتخصصين والورديات ✂️", icon: Scissors },
            { id: "services", label: "الخدمات والأسعار 💈", icon: Award },
            { id: "inventory", label: "المخزن والتجميل 🛍️", icon: ShoppingBag },
            { id: "customers", label: "قاعدة العملاء 👥", icon: Users },
            { id: "users", label: "الصلاحيات والمستخدمين 🔒", icon: ShieldCheck },
            { id: "branches", label: "الفروع 📍", icon: MapPin },
            { id: "settings", label: "الإعدادات ⚙️", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1.5 px-3 rounded-xl transition flex items-center gap-1.5 text-xs font-bold ${
                  isCurrent
                    ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/25 ring-1 ring-amber-400"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. MAIN CONTENT AREA
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* ========================================================
            TAB 1: OVERVIEW & SALES KPIS
           ======================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">إجمالي الإيرادات</span>
                <p className="text-2xl font-black text-amber-400 font-mono">
                  {totalRevenue.toLocaleString()} ج.م
                </p>
                <span className="text-[10px] text-emerald-400 font-bold">شامل الخدمات والمبيعات</span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">العملاء المخدومين</span>
                <p className="text-2xl font-black text-white font-mono">{totalClientsServed}</p>
                <span className="text-[10px] text-amber-300 font-bold">تذاكر حلاقة مكتملة</span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">مبيعات مستحضرات التجميل</span>
                <p className="text-2xl font-black text-emerald-400 font-mono">
                  {totalRetailSales.toLocaleString()} ج.م
                </p>
                <span className="text-[10px] text-slate-400 font-bold">منتجات العناية بالكرسي والكاشير</span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">الحجوزات القادمة</span>
                <p className="text-2xl font-black text-amber-300 font-mono">{bookings.length}</p>
                <span className="text-[10px] text-rose-400 font-bold">
                  {bookings.filter((b) => b.status === "PENDING").length} بانتظار التأكيد
                </span>
              </div>
            </div>

            {/* Quick Links & Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-3xl bg-[#12121a] border border-white/5 space-y-3">
                <h4 className="font-black text-sm text-amber-400">📍 فروع صدام المفعّلة:</h4>
                <div className="space-y-2 text-xs">
                  {branches.map((b) => (
                    <div key={b.id} className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <strong className="text-white block">{b.name}</strong>
                      <p className="text-slate-400 text-[11px]">{b.address}</p>
                      <p className="font-mono text-amber-300 text-[11px]">هاتف: {b.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-[#12121a] border border-white/5 space-y-3">
                <h4 className="font-black text-sm text-amber-400">👑 العروض الملكية النشطة:</h4>
                <p className="text-xs text-slate-300 font-bold">
                  يوجد حالياً <strong className="text-amber-300 font-mono">{offers.length}</strong> عروض وباكدجات
                  مفعّلة على صفحة الحجز، بما فيها باكدجات العرسان والاسترخاء بخصومات تصل إلى 46%.
                </p>
                <button
                  onClick={() => setActiveTab("offers")}
                  className="py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition"
                >
                  إدارة العروض والباكدجات 👑
                </button>
              </div>

              <div className="p-5 rounded-3xl bg-[#12121a] border border-white/5 space-y-3">
                <h4 className="font-black text-sm text-amber-400">💬 الشات المباشر مع العملاء:</h4>
                <p className="text-xs text-slate-300">
                  تواصل فوري ولحظي مع الزبائن للرد على استفسارات المواعيد، عروض العرسان وتعديل الحجوزات.
                </p>
                <button
                  onClick={() => setActiveTab("chat")}
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>فتح نافذة المحادثات 💬</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: BOOKINGS & APPOINTMENTS (WITH DIRECT ACTIONS & CONFIRMATION)
           ======================================================== */}
        {activeTab === "bookings" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">جدول الحجوزات والمواعيد</h3>
                <p className="text-xs text-slate-400">
                  تأكيد مواعيد الحجز الجديدة، بدء الجلسة على الكرسي، أو التواصل المباشر مع العميل 📅
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                {["ALL", "PENDING", "CONFIRMED", "IN_CHAIR", "COMPLETED", "CANCELLED"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setBookingFilterStatus(st)}
                    className={`py-1.5 px-3 rounded-xl font-bold transition whitespace-nowrap ${
                      bookingFilterStatus === st
                        ? "bg-amber-500 text-slate-950 font-black"
                        : "bg-white/5 hover:bg-white/10 text-slate-400"
                    }`}
                  >
                    {st === "ALL" && "الكل"}
                    {st === "PENDING" && "بانتظار التأكيد 🔔"}
                    {st === "CONFIRMED" && "مؤكد ✅"}
                    {st === "IN_CHAIR" && "على الكرسي 💺"}
                    {st === "COMPLETED" && "مكتمل 🏆"}
                    {st === "CANCELLED" && "ملغي ❌"}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#14141e]">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-slate-400 font-bold">
                    <th className="p-3.5">رقم الحجز</th>
                    <th className="p-3.5">العميل</th>
                    <th className="p-3.5">الفرع</th>
                    <th className="p-3.5">المتخصص</th>
                    <th className="p-3.5">التاريخ والوقت</th>
                    <th className="p-3.5">المبلغ</th>
                    <th className="p-3.5">الحالة</th>
                    <th className="p-3.5 text-center">الإجراءات والتحكم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredBookings.map((bk) => (
                    <tr key={bk.id} className="hover:bg-white/5 transition">
                      <td className="p-3.5 font-mono font-black text-amber-400">
                        #{bk.bookingNumber}
                      </td>
                      <td className="p-3.5 font-bold text-white">
                        {bk.customer?.name}
                        <span className="block text-[10px] text-slate-400 font-mono">
                          {bk.customer?.phone}
                        </span>
                      </td>
                      <td className="p-3.5">{bk.branch?.name}</td>
                      <td className="p-3.5 text-amber-300 font-bold">
                        {bk.specialist?.name || "أي متخصص متاح"}
                      </td>
                      <td className="p-3.5 font-mono">
                        {bk.bookingDate} • {bk.timeSlot}
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">{bk.totalAmount} ج</td>
                      <td className="p-3.5">
                        <span
                          className={`py-0.5 px-2.5 rounded-full text-[10px] font-black border ${
                            bk.status === "PENDING"
                              ? "bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse"
                              : bk.status === "CONFIRMED"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : bk.status === "IN_CHAIR"
                              ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                              : bk.status === "COMPLETED"
                              ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                              : "bg-slate-500/20 text-slate-400 border-slate-500/40"
                          }`}
                        >
                          {bk.status === "PENDING" && "بانتظار التأكيد 🔔"}
                          {bk.status === "CONFIRMED" && "مؤكد ✅"}
                          {bk.status === "IN_CHAIR" && "على الكرسي 💺"}
                          {bk.status === "COMPLETED" && "مكتمل 🏆"}
                          {bk.status === "CANCELLED" && "ملغي ❌"}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap">
                          {bk.status === "PENDING" && (
                            <button
                              onClick={() => handleUpdateBookingStatus(bk.id, "CONFIRMED")}
                              className="py-1 px-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[10px] transition flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              <span>تأكيد الموعد ✅</span>
                            </button>
                          )}

                          {bk.status === "CONFIRMED" && (
                            <button
                              onClick={() => handleUpdateBookingStatus(bk.id, "IN_CHAIR")}
                              className="py-1 px-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] transition flex items-center gap-1"
                            >
                              <Scissors className="w-3 h-3" />
                              <span>بدء بالكرسي 💺</span>
                            </button>
                          )}

                          {bk.status === "IN_CHAIR" && (
                            <button
                              onClick={() => handleUpdateBookingStatus(bk.id, "COMPLETED")}
                              className="py-1 px-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-black text-[10px] transition"
                            >
                              اكتمل 🏆
                            </button>
                          )}

                          <button
                            onClick={() => handleOpenChatFromBooking(bk)}
                            className="py-1 px-2 rounded-lg bg-white/5 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 text-[10px] font-bold transition flex items-center gap-1"
                            title="محادثة العميل"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>شات 💬</span>
                          </button>

                          {bk.status !== "CANCELLED" && bk.status !== "COMPLETED" && (
                            <button
                              onClick={() => handleUpdateBookingStatus(bk.id, "CANCELLED")}
                              className="py-1 px-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-[10px] font-bold transition"
                              title="إلغاء الموعد"
                            >
                              إلغاء ❌
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: ROYAL OFFERS & PACKAGES (DYNAMIC FLYERS MANAGEMENT)
           ======================================================== */}
        {activeTab === "offers" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">
                  العروض والباكدجات الملكية الحصرية (VIP Offers)
                </h3>
                <p className="text-xs text-slate-400">
                  إدارة العروض المعلنة على صفحة الحجز، التحكم في الفروع المتاحة، والخصومات والأسعار 👑
                </p>
              </div>

              <button
                onClick={handleOpenCreateOffer}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة عرض جديد 👑</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {offers.map((offer) => {
                let featuresList: string[] = [];
                try {
                  featuresList = JSON.parse(offer.features || "[]");
                } catch {
                  featuresList = [];
                }

                return (
                  <div
                    key={offer.id}
                    className="rounded-3xl bg-[#14141e] border-2 border-amber-500/30 overflow-hidden flex flex-col shadow-xl group hover:border-amber-400 transition"
                  >
                    {/* Flyer Banner Preview */}
                    <div className="relative h-48 w-full bg-black overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={offer.image || "/offers/offer-vip-1000.jpg"}
                        alt={offer.titleAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {offer.badge && (
                        <span className="absolute top-3 right-3 py-1 px-3 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] shadow-lg">
                          {offer.badge}
                        </span>
                      )}

                      <span
                        className={`absolute top-3 left-3 py-1 px-2.5 rounded-full text-[10px] font-black ${
                          offer.isActive
                            ? "bg-emerald-500/90 text-slate-950"
                            : "bg-rose-500/90 text-white"
                        }`}
                      >
                        {offer.isActive ? "نشط ومتاح 🟢" : "معطل 🔴"}
                      </span>

                      <div className="absolute bottom-3 right-3 left-3 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-amber-300 block">
                            {offer.branch?.name || "متاح في جميع الفروع 📍"}
                          </span>
                          <h4 className="font-black text-sm text-white drop-shadow-md">
                            {offer.titleAr}
                          </h4>
                        </div>
                        <div className="text-left font-mono">
                          {offer.oldPrice && (
                            <span className="text-xs text-rose-400 line-through block">
                              {offer.oldPrice} ج
                            </span>
                          )}
                          <span className="text-base font-black text-amber-400">
                            {offer.price} ج.م
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features & Description */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      {offer.description && (
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {offer.description}
                        </p>
                      )}

                      {featuresList.length > 0 && (
                        <ul className="space-y-1 text-[11px] text-slate-300 border-t border-white/5 pt-2">
                          {featuresList.slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-amber-400 font-bold">✓</span>
                              <span className="truncate">{f}</span>
                            </li>
                          ))}
                          {featuresList.length > 4 && (
                            <li className="text-[10px] text-amber-400 font-bold">
                              + {featuresList.length - 4} مميزات ملكية أخرى...
                            </li>
                          )}
                        </ul>
                      )}

                      {/* Control Buttons */}
                      <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                        <button
                          onClick={() => handleToggleOfferActive(offer)}
                          className={`py-1.5 px-3 rounded-xl text-[11px] font-bold transition border ${
                            offer.isActive
                              ? "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20"
                              : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20"
                          }`}
                        >
                          {offer.isActive ? "تعطيل 🚫" : "تفعيل 🟢"}
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditOffer(offer)}
                            className="p-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition text-xs font-bold flex items-center gap-1"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>تعديل</span>
                          </button>

                          <button
                            onClick={() => handleDeleteOffer(offer.id)}
                            className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: IN-APP LIVE CHAT WITH CUSTOMERS
           ======================================================== */}
        {activeTab === "chat" && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h3 className="text-base font-black text-white">
                الشات المباشر وتواصل العملاء اللحظي 💬
              </h3>
              <p className="text-xs text-slate-400">
                متابعة استفسارات الزبائن، تأكيد المواعيد، وتنسيق باكدجات العرسان لحظة بلحظة 📱
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] rounded-3xl border border-amber-500/30 overflow-hidden bg-[#12121a]">
              {/* Left Column: Conversations List */}
              <div className="border-l border-white/10 flex flex-col overflow-hidden bg-[#0e0e14]">
                <div className="p-3.5 border-b border-white/10 bg-black/40">
                  <span className="text-xs font-black text-amber-400">المحادثات النشطة</span>
                </div>

                <div className="flex-1 overflow-y-auto divide-y divide-white/5">
                  {chatConversations.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-500">
                      لا توجد محادثات واردة حتى الآن
                    </div>
                  ) : (
                    chatConversations.map((conv) => {
                      const isSelected = activeChatCustomer?.key === conv.key;
                      return (
                        <div
                          key={conv.key}
                          onClick={() => handleSelectCustomerChat(conv)}
                          className={`p-3.5 cursor-pointer transition flex items-start justify-between gap-2 ${
                            isSelected
                              ? "bg-amber-500/15 border-r-4 border-amber-400"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h5 className="font-black text-xs text-white truncate">
                                {conv.customerName || "عميل VIP"}
                              </h5>
                              {conv.unreadCount > 0 && (
                                <span className="w-4 h-4 rounded-full bg-rose-600 text-white font-mono text-[9px] font-bold flex items-center justify-center animate-pulse">
                                  {conv.unreadCount}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-amber-300 font-mono font-bold">
                              {conv.customerPhone || "بدون هاتف"}
                            </p>
                            <p className="text-[11px] text-slate-400 truncate max-w-[180px]">
                              {conv.lastMessage}
                            </p>
                          </div>
                          <span className="text-[9px] text-slate-500 font-mono shrink-0">
                            {new Date(conv.lastTime).toLocaleTimeString("ar-EG", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Active Conversation */}
              <div className="md:col-span-2 flex flex-col h-full bg-[#101018]">
                {activeChatCustomer ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-3.5 border-b border-amber-500/30 bg-black/40 flex items-center justify-between">
                      <div>
                        <h4 className="font-black text-sm text-amber-400">
                          {activeChatCustomer.customerName || "عميل VIP"}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-mono">
                          {activeChatCustomer.customerPhone}
                        </p>
                      </div>

                      {/* Quick Reply Chips */}
                      <div className="hidden sm:flex items-center gap-1.5 text-[10px]">
                        <button
                          onClick={() =>
                            handleSendAdminReply(
                              "أهلاً بك يا فندم! تم تأكيد موعدك ونحن بانتظارك في الصالون لتقديم أرقى تجربة ملكية 👑"
                            )
                          }
                          className="py-1 px-2.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition"
                        >
                          تأكيد الموعد ✅
                        </button>
                        <button
                          onClick={() =>
                            handleSendAdminReply(
                              "فرع مدينة نصر: 28 شارع مصطفى حمام، متفرع من عباس العقاد، أمام أبو العز السوري مباشرة 📍"
                            )
                          }
                          className="py-1 px-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
                        >
                          عنوان مدينة نصر 📍
                        </button>
                      </div>
                    </div>

                    {/* Chat Messages Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0a0f]">
                      {chatMessages.map((m) => {
                        const isSalon = m.sender === "SALON";
                        return (
                          <div
                            key={m.id}
                            className={`flex gap-2 ${isSalon ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[75%] rounded-2xl p-3 text-xs space-y-1 shadow-md ${
                                isSalon
                                  ? "bg-amber-500 text-slate-950 font-bold rounded-tl-none"
                                  : "bg-[#181826] border border-amber-500/30 text-slate-200 rounded-tr-none"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2 text-[10px]">
                                <span className={isSalon ? "text-slate-900 font-black" : "text-amber-400 font-bold"}>
                                  {m.senderName}
                                </span>
                                <span className="opacity-70 font-mono text-[9px]">
                                  {new Date(m.createdAt).toLocaleTimeString("ar-EG", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <p className="leading-relaxed whitespace-pre-wrap">{m.message}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Chat Input */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendAdminReply();
                      }}
                      className="p-3 bg-[#12121a] border-t border-amber-500/30 flex items-center gap-2"
                    >
                      <input
                        type="text"
                        value={chatReplyText}
                        onChange={(e) => setChatReplyText(e.target.value)}
                        placeholder="اكتب رد الصالون المباشر للعميل..."
                        className="flex-1 py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                      <button
                        type="submit"
                        disabled={chatSending || !chatReplyText.trim()}
                        className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 disabled:opacity-40"
                      >
                        <Send className="w-3.5 h-3.5 rotate-180" />
                        <span>إرسال</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-2 text-slate-500">
                    <MessageSquare className="w-12 h-12 text-slate-700" />
                    <p className="text-sm font-bold text-slate-400">
                      اختر محادثة من القائمة للرد على العميل
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: SPECIALISTS & PAYROLL
           ======================================================== */}
        {activeTab === "specialists" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">طاقم المتخصصين والحلاقين وكراسي العمل</h3>
                <p className="text-xs text-slate-400">
                  إدارة المتخصصين، حساب الأجور، السلف، ونسب العمولات على الخدمات ✂️
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingSpecialist(null);
                  setSpecForm({
                    name: "",
                    phone: "",
                    title: "خبير حلاقة وتصفيف",
                    branchId: branches[0]?.id || "",
                    chairNumber: 1,
                    payType: "SALARY_PLUS_COMMISSION",
                    baseSalary: 6000,
                    commissionRate: 20,
                    photo: "",
                    username: "",
                    password: "",
                  });
                  setShowSpecialistModal(true);
                }}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة متخصص جديد ✂️</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialists.map((spec) => (
                <div key={spec.id} className="p-5 rounded-3xl bg-[#14141e] border-2 border-amber-500/30 space-y-4 shadow-xl flex flex-col justify-between hover:border-amber-400 transition">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={spec.photo || "/logo.jpg"} alt={spec.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-sm text-white truncate">{spec.name}</h4>
                        <p className="text-[11px] text-slate-400 truncate">{spec.title}</p>
                        <span className="text-[10px] text-amber-300 font-bold block pt-0.5">
                          {spec.branch?.name} • كرسي {spec.chairNumber}
                        </span>
                      </div>
                    </div>

                    {/* Shift Attendance Status & Reasons */}
                    <div className="p-3 rounded-2xl bg-black/60 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-bold">حالة الوردية والحضور:</span>
                        <span className={`text-[10px] font-black py-0.5 px-2.5 rounded-full border ${
                          spec.status === "AVAILABLE"
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            : spec.status === "WITH_CLIENT"
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                            : spec.status === "BREAK"
                            ? "bg-sky-500/20 text-sky-300 border-sky-500/40"
                            : spec.status === "OFF_DUTY"
                            ? "bg-slate-700/80 text-slate-300 border-slate-600"
                            : spec.status === "DAY_OFF"
                            ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
                            : "bg-rose-500/20 text-rose-300 border-rose-500/40"
                        }`}>
                          {spec.status === "AVAILABLE" && "حاضر وبدأ الوردية 🟢"}
                          {spec.status === "WITH_CLIENT" && "على الكرسي مع عميل 💺"}
                          {spec.status === "BREAK" && "استراحة مؤقتة ☕"}
                          {spec.status === "OFF_DUTY" && "انتهت الوردية ومشي 🏠"}
                          {spec.status === "DAY_OFF" && "إجازة رسمية 🏖️"}
                          {spec.status === "ABSENT" && "غائب / معطل 🔴"}
                        </span>
                      </div>

                      {spec.statusReason && (
                        <p className="text-[10px] text-amber-300/90 bg-amber-500/5 px-2.5 py-1 rounded-xl border border-amber-500/15">
                          📌 السبب: {spec.statusReason}
                        </p>
                      )}

                      {/* Quick Shift Controls */}
                      <div className="flex items-center gap-1 pt-1 border-t border-white/5">
                        <button
                          type="button"
                          onClick={() => handleQuickSetStatus(spec, "AVAILABLE", "حاضر وبدأ الوردية")}
                          className={`flex-1 py-1 px-1 rounded-lg text-[10px] font-bold transition border ${
                            spec.status === "AVAILABLE"
                              ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                              : "bg-white/5 hover:bg-emerald-500/20 text-emerald-300 border-white/5"
                          }`}
                          title="تفعيل وحضور - بدأ الوردية"
                        >
                          بدأ 🟢
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSetStatus(spec, "WITH_CLIENT", "على الكرسي مع عميل")}
                          className={`flex-1 py-1 px-1 rounded-lg text-[10px] font-bold transition border ${
                            spec.status === "WITH_CLIENT"
                              ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                              : "bg-white/5 hover:bg-amber-500/20 text-amber-300 border-white/5"
                          }`}
                          title="على الكرسي حالياً"
                        >
                          كرسي 💺
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickSetStatus(spec, "BREAK", "استراحة راحة")}
                          className={`flex-1 py-1 px-1 rounded-lg text-[10px] font-bold transition border ${
                            spec.status === "BREAK"
                              ? "bg-sky-500 text-slate-950 border-sky-400 shadow-sm"
                              : "bg-white/5 hover:bg-sky-500/20 text-sky-300 border-white/5"
                          }`}
                          title="استراحة مؤقتة"
                        >
                          استراحة ☕
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenShiftModal(spec)}
                          className="py-1 px-2 rounded-lg text-[10px] font-bold bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10"
                          title="تحديد سبب التعطيل أو إجازة أو نهاية الوردية"
                        >
                          تعطيل/إجازة ⚙️
                        </button>
                      </div>
                    </div>

                    {/* Payroll Breakdown */}
                    <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">نظام الأجر:</span>
                        <span className="font-bold text-amber-300">{spec.payType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">الراتب الأساسي:</span>
                        <span className="font-mono text-white">{spec.baseSalary} ج.م</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">نسبة العمولة:</span>
                        <span className="font-mono text-amber-400 font-bold">{spec.commissionRate}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Payout, Edit, Delete */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <button
                      onClick={() => {
                        setPayoutSpecialist(spec);
                        setPayoutAmount(500);
                        setShowPayoutModal(true);
                      }}
                      className="flex-1 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs transition"
                    >
                      صرف سلفة / أجر 💵
                    </button>
                    <button
                      onClick={() => {
                        setEditingSpecialist(spec);
                        setSpecForm({
                          name: spec.name,
                          phone: spec.phone || "",
                          title: spec.title,
                          branchId: spec.branchId,
                          chairNumber: spec.chairNumber,
                          payType: spec.payType,
                          baseSalary: spec.baseSalary,
                          commissionRate: spec.commissionRate,
                          photo: spec.photo || "",
                          username: "",
                          password: "",
                        });
                        setShowSpecialistModal(true);
                      }}
                      className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition"
                      title="تعديل بيانات المتخصص"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSpecialist(spec.id, spec.name)}
                      className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition"
                      title="حذف المتخصص نهائياً"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: SERVICES CATALOG (FULLY DYNAMIC & EDITABLE)
           ======================================================== */}
        {activeTab === "services" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">قائمة الخدمات التجميلية وأسعار الحلاقة (ربط مباشر باللاندينج)</h3>
                <p className="text-xs text-slate-400">إضافة وتعديل وحذف الخدمات والأسعار وتفعيلها ديناميكياً على الصفحة الرئيسية 💈</p>
              </div>

              <button
                onClick={() => {
                  setEditingService(null);
                  setServiceForm({
                    nameAr: "",
                    category: "HAIR",
                    price: 150,
                    durationMinutes: 30,
                    description: "",
                    image: "",
                    sortOrder: 0,
                    isActive: true,
                  });
                  setShowServiceModal(true);
                }}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة خدمة جديدة 💈</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((srv) => (
                <div key={srv.id} className="rounded-3xl bg-[#14141e] border-2 border-amber-500/30 overflow-hidden flex flex-col justify-between shadow-xl hover:border-amber-400 transition group">
                  {/* Service Image Banner Preview */}
                  <div className="relative h-32 w-full bg-black overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        srv.image ||
                        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&auto=format&fit=crop&q=80"
                      }
                      alt={srv.nameAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14141e] via-black/30 to-transparent" />
                    
                    <span className="absolute top-2.5 right-2.5 py-0.5 px-2.5 rounded-xl bg-black/75 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/10">
                      {srv.category}
                    </span>
                    <span className="absolute top-2.5 left-2.5 py-0.5 px-2.5 rounded-xl text-[10px] font-bold bg-black/75 backdrop-blur-md text-slate-300 border border-white/10 font-mono">
                      {srv.durationMinutes || 30} دقيقة
                    </span>
                    <span className={`absolute bottom-2.5 right-2.5 py-0.5 px-2 rounded-full text-[10px] font-black ${
                      srv.isActive !== false ? "bg-emerald-500/90 text-slate-950" : "bg-rose-500/90 text-white"
                    }`}>
                      {srv.isActive !== false ? "نشط ومتاح 🟢" : "معطل 🔴"}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-black text-sm text-white group-hover:text-amber-300 transition">{srv.nameAr}</h4>
                        <span className="font-mono text-sm font-black text-amber-400">{srv.price} ج.م</span>
                      </div>
                      {srv.description && (
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">{srv.description}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3 mt-2">
                      <button
                        onClick={() => handleToggleServiceActive(srv)}
                        className={`py-1.5 px-3 rounded-xl text-[11px] font-bold transition border ${
                          srv.isActive !== false
                            ? "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20"
                            : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20"
                        }`}
                      >
                        {srv.isActive !== false ? "تعطيل 🚫" : "تفعيل 🟢"}
                      </button>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleOpenEditService(srv)}
                          className="py-1.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1 transition"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          <span>تعديل</span>
                        </button>
                        <button
                          onClick={() => handleDeleteService(srv.id, srv.nameAr)}
                          className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 transition"
                          title="حذف الخدمة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 7: PRODUCTS & SALON SUPPLIES (INVENTORY & RAW MATERIALS)
           ======================================================== */}
        {activeTab === "inventory" && (
          <div className="space-y-6 animate-fade-in">
            {/* Tab Header & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <span>بضاعة التجميل والمخزن والخامات التشغيلية 🛍️</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                    {products.length} صنف مسجل
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  إدارة شاملة لمنتجات البيع المباشر للزبائن وخامات ومستلزمات الحلاقة والتشغيل بالصالون 💈
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenAddProduct}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة منتج أو خامة جديدة ➕</span>
              </button>
            </div>

            {/* Filter Pills & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              {/* Type Switcher */}
              <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-2xl border border-white/10 flex-wrap">
                <button
                  type="button"
                  onClick={() => setProductTypeFilter("ALL")}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                    productTypeFilter === "ALL"
                      ? "bg-amber-500 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  الكل ({products.length})
                </button>
                <button
                  type="button"
                  onClick={() => setProductTypeFilter("RETAIL")}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    productTypeFilter === "RETAIL"
                      ? "bg-amber-500 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>🛍️ منتجات بيع للعملاء</span>
                  <span className="font-mono text-[10px]">
                    ({products.filter((p) => !["SUPPLIES", "COLOR_SUPPLIES", "PROTEIN_SUPPLIES", "ACCESSORIES"].includes(p.category)).length})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setProductTypeFilter("SUPPLIES")}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                    productTypeFilter === "SUPPLIES"
                      ? "bg-amber-500 text-slate-950 font-black shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>💈 خامات ومستلزمات تشغيل</span>
                  <span className="font-mono text-[10px]">
                    ({products.filter((p) => ["SUPPLIES", "COLOR_SUPPLIES", "PROTEIN_SUPPLIES", "ACCESSORIES"].includes(p.category)).length})
                  </span>
                </button>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  placeholder="بحث باسم المنتج، الباركود، الفئة..."
                  className="w-full py-2 pr-9 pl-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans"
                />
              </div>
            </div>

            {/* Products & Supplies Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((p) => {
                  const isSupply = ["SUPPLIES", "COLOR_SUPPLIES", "PROTEIN_SUPPLIES", "ACCESSORIES"].includes(p.category);
                  if (productTypeFilter === "RETAIL" && isSupply) return false;
                  if (productTypeFilter === "SUPPLIES" && !isSupply) return false;
                  if (productSearch.trim()) {
                    const q = productSearch.toLowerCase();
                    const matchName = p.nameAr?.toLowerCase().includes(q);
                    const matchCode = p.barcode?.toLowerCase().includes(q);
                    const matchCat = p.category?.toLowerCase().includes(q);
                    if (!matchName && !matchCode && !matchCat) return false;
                  }
                  return true;
                })
                .map((prod) => {
                  const isSupply = ["SUPPLIES", "COLOR_SUPPLIES", "PROTEIN_SUPPLIES", "ACCESSORIES"].includes(prod.category);
                  const isLowStock = (prod.stockQty || 0) <= (prod.minStockAlert || 5);
                  const isOutOfStock = (prod.stockQty || 0) <= 0;

                  return (
                    <div
                      key={prod.id}
                      className="rounded-3xl bg-[#14141e] border border-amber-500/25 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition group shadow-lg"
                    >
                      {/* Product Image & Badges */}
                      <div className="relative h-40 w-full bg-black overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            prod.image ||
                            (isSupply
                              ? "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&auto=format&fit=crop&q=80"
                              : "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=80")
                          }
                          alt={prod.nameAr}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14141e] via-transparent to-black/30" />

                        {/* Type & Category Badges */}
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black border backdrop-blur-md ${
                              isSupply
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/40"
                                : "bg-amber-500/20 text-amber-300 border-amber-400/40"
                            }`}
                          >
                            {isSupply ? "خامة تشغيل 💈" : "منتج زبون 🛍️"}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-black/70 text-[9px] font-bold text-slate-300 border border-white/10">
                            {prod.category}
                          </span>
                        </div>

                        {/* Branch badge */}
                        {prod.branch && (
                          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 text-[9px] font-bold text-amber-300 border border-amber-500/30">
                            📍 {prod.branch.name}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-black text-sm text-white group-hover:text-amber-300 transition leading-snug">
                            {prod.nameAr}
                          </h4>
                          {prod.barcode && (
                            <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
                              باركود: {prod.barcode}
                            </span>
                          )}
                        </div>

                        {/* Financials: Sell Price & Cost Price */}
                        <div className="p-2.5 rounded-2xl bg-black/50 border border-white/5 space-y-1.5 text-xs">
                          {!isSupply ? (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-slate-400">سعر البيع للزبون:</span>
                                <span className="font-mono font-black text-amber-400 text-sm">
                                  {prod.price} ج.م
                                </span>
                              </div>
                              <div className="flex justify-between items-center text-[11px] text-slate-400">
                                <span>التكلفة: {prod.costPrice || 0} ج.م</span>
                                <span className="text-emerald-400 font-bold">
                                  الربح: {Math.max(0, (prod.price || 0) - (prod.costPrice || 0))} ج.م
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400">سعر الشراء / التكلفة:</span>
                              <span className="font-mono font-black text-cyan-300 text-sm">
                                {prod.costPrice || 0} ج.م
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Stock Quantity & Quick Adjustment */}
                        <div className="space-y-1.5 pt-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[11px] text-slate-400">الرصيد بالمخزن:</span>
                            <span
                              className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg border ${
                                isOutOfStock
                                  ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                                  : isLowStock
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              }`}
                            >
                              {isOutOfStock ? "نفذ (0 عبوة)" : `${prod.stockQty} عبوة`}
                            </span>
                          </div>

                          {/* Quick Adjust Buttons */}
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleAdjustStock(prod, -1)}
                              className="flex-1 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-bold transition border border-white/5 cursor-pointer"
                              title="سحب عبوة (-1)"
                            >
                              -1
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAdjustStock(prod, 1)}
                              className="flex-1 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-300 text-xs font-mono font-bold transition border border-white/5 cursor-pointer"
                              title="إضافة عبوة (+1)"
                            >
                              +1
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAdjustStock(prod, 10)}
                              className="flex-1 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-mono font-bold transition border border-amber-500/20 cursor-pointer"
                              title="إضافة دستة (+10)"
                            >
                              +10
                            </button>
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => handleOpenEditProduct(prod)}
                            className="flex-1 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>تعديل الصنف ✏️</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(prod.id, prod.nameAr)}
                            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition cursor-pointer"
                            title="حذف الصنف من المخزن"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 8: CUSTOMERS CRM & MARKETING
           ======================================================== */}
        {activeTab === "customers" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-base font-black text-white">قاعدة بيانات العملاء والتسويق والدعاية</h3>
              <p className="text-xs text-slate-400">
                سجل متكامل ببيانات العملاء وأرقام هواتفهم وإجمالي زياراتهم لأغراض الدعاية ورسائل الواتساب 📱
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#14141e]">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-slate-400 font-bold">
                    <th className="p-3.5">اسم العميل</th>
                    <th className="p-3.5">رقم الهاتف</th>
                    <th className="p-3.5">البريد الإلكتروني</th>
                    <th className="p-3.5">عدد الزيارات</th>
                    <th className="p-3.5">إجمالي المنصرف</th>
                    <th className="p-3.5">تصنيف VIP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {customers.map((c) => (
                    <tr key={c.id} className="hover:bg-white/5 transition">
                      <td className="p-3.5 font-black text-white">{c.name}</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">{c.phone}</td>
                      <td className="p-3.5 font-mono text-slate-400">{c.email || "غير مسجل"}</td>
                      <td className="p-3.5 font-mono text-white font-bold">{c.totalVisits} زيارة</td>
                      <td className="p-3.5 font-mono text-amber-400 font-black">{c.totalSpent} ج.م</td>
                      <td className="p-3.5">
                        <span className="py-0.5 px-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black">
                          {c.vipLevel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 9: USERS & RBAC ACCESS CONTROL (FULL EDITING ADDED)
           ======================================================== */}
        {activeTab === "users" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">طاقم العمل والمستخدمين والصلاحيات</h3>
                <p className="text-xs text-slate-400">
                  إدارة وتعديل حسابات المديرين، الكاشير، المتخصصين والعمال مع إمكانية التعديل الشامل والتعطيل الفوري 🔒
                </p>
              </div>

              <button
                onClick={handleOpenCreateUser}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة مستخدم جديد 👤</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#14141e]">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-slate-400 font-bold">
                    <th className="p-3.5">المستخدم</th>
                    <th className="p-3.5">اسم الدخول</th>
                    <th className="p-3.5">الدور والصلاحية</th>
                    <th className="p-3.5">الفرع</th>
                    <th className="p-3.5">PIN السري</th>
                    <th className="p-3.5">الحالة</th>
                    <th className="p-3.5 text-center">التحكم والتعديل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-white/5 transition">
                      <td className="p-3.5 font-black text-white">{u.name}</td>
                      <td className="p-3.5 font-mono text-amber-300 font-bold">{u.username}</td>
                      <td className="p-3.5 font-bold">
                        <span className="py-0.5 px-2 rounded-lg bg-white/5 text-[10px] text-slate-300">
                          {u.role}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-400">{u.branchName}</td>
                      <td className="p-3.5 font-mono text-slate-400 font-bold">••••••</td>
                      <td className="p-3.5">
                        <span
                          className={`py-0.5 px-2 rounded-full text-[10px] font-black ${
                            u.isActive
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                              : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                          }`}
                        >
                          {u.isActive ? "نشط 🟢" : "معطل 🔴"}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditUser(u)}
                            className="py-1 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold transition flex items-center gap-1"
                          >
                            <Edit className="w-3 h-3" />
                            <span>تعديل ✏️</span>
                          </button>

                          {u.username !== "maestro" && (
                            <button
                              onClick={() => handleToggleUserActive(u.id, u.isActive)}
                              className={`py-1 px-2.5 rounded-xl text-[11px] font-bold transition border ${
                                u.isActive
                                  ? "bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border-rose-500/30"
                                  : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              }`}
                            >
                              {u.isActive ? "تعطيل 🚫" : "تفعيل 🟢"}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 10: MULTI-BRANCH SYSTEM
           ======================================================== */}
        {activeTab === "branches" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">فروع صالون صدام والتوسعات المستقبلية</h3>
                <p className="text-xs text-slate-400">
                  إمكانية إضافة عدد غير محدود من الفروع ديناميكياً مع تخصيص كراسيها وموظفيها 📍
                </p>
              </div>

              <button
                onClick={() => setShowBranchModal(true)}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة فرع جديد 📍</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map((b) => (
                <div key={b.id} className="p-5 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-base text-amber-400">{b.name}</h4>
                    <span className="font-mono text-xs font-bold text-slate-400">{b.code}</span>
                  </div>
                  <p className="text-xs text-slate-300">{b.address}</p>
                  <p className="text-xs font-mono text-amber-300 font-bold">الهاتف والواتساب: {b.phone}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 11: SYSTEM SETTINGS
           ======================================================== */}
        {activeTab === "settings" && (
          <div className="max-w-xl mx-auto p-6 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-4 animate-fade-in text-xs">
            <h3 className="text-base font-black text-amber-400">إعدادات المنظومة العامة</h3>
            <div className="space-y-2 text-slate-300">
              <p>اسم الصالون: <strong className="text-white">{settings?.salonNameAr}</strong></p>
              <p>الهاتف والواتساب الموحد: <strong className="text-amber-300 font-mono">{settings?.hadayekPhone || "01121537537"}</strong></p>
              <p>صفحة الفيسبوك الرسمية: <a href={settings?.facebookUrl || "https://www.facebook.com/SaddamSalon/"} target="_blank" rel="noreferrer" className="text-amber-400 underline">{settings?.facebookUrl || "https://www.facebook.com/SaddamSalon/"}</a></p>
              <p>مواعيد العمل: يومياً من {settings?.defaultOpenHour} حتى {settings?.defaultCloseHour}</p>
            </div>
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          5. MODALS
         ───────────────────────────────────────────────────────────── */}
      {/* 1. SPECIALIST MODAL */}
      {showSpecialistModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-md bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">إضافة / تعديل متخصص حلاقة</h3>
              <button onClick={() => setShowSpecialistModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveSpecialist} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">الاسم:</label>
                <input
                  type="text"
                  required
                  value={specForm.name}
                  onChange={(e) => setSpecForm({ ...specForm, name: e.target.value })}
                  placeholder="مثال: كابتن صدام"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">المسمى المهني والتخصص:</label>
                  <input
                    type="text"
                    value={specForm.title}
                    onChange={(e) => setSpecForm({ ...specForm, title: e.target.value })}
                    placeholder="كبير خبراء التصفيف والحلاقة"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">رقم الهاتف:</label>
                  <input
                    type="text"
                    value={specForm.phone}
                    onChange={(e) => setSpecForm({ ...specForm, phone: e.target.value })}
                    placeholder="010XXXXXXXX"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-2xl bg-black/40 border border-white/10">
                <label className="text-slate-300 font-bold block text-xs">
                  الصورة الشخصية للمتخصص (رفع فوري عبر ImgBB 📷):
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={specForm.photo || "/logo.jpg"}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="w-full py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{uploadingImage ? "جاري الرفع على ImgBB..." : "اختر صورة للمتخصص لرفعها 📷"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) =>
                          handleUploadFile(e, (url) => setSpecForm({ ...specForm, photo: url }))
                        }
                      />
                    </label>
                    <input
                      type="text"
                      value={specForm.photo}
                      onChange={(e) => setSpecForm({ ...specForm, photo: e.target.value })}
                      placeholder="رابط ImgBB المولد تلقائياً"
                      className="w-full py-1 px-2.5 rounded-lg bg-black/60 border border-white/10 text-white font-mono text-[10px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">الفرع:</label>
                  <select
                    value={specForm.branchId}
                    onChange={(e) => setSpecForm({ ...specForm, branchId: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">رقم الكرسي:</label>
                  <input
                    type="number"
                    min={1}
                    value={specForm.chairNumber}
                    onChange={(e) => setSpecForm({ ...specForm, chairNumber: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">نظام الحساب:</label>
                <select
                  value={specForm.payType}
                  onChange={(e) => setSpecForm({ ...specForm, payType: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                >
                  <option value="DAILY">راتب يومي</option>
                  <option value="WEEKLY">راتب أسبوعي</option>
                  <option value="MONTHLY">راتب شهري</option>
                  <option value="COMMISSION_ONLY">عمولة فقط (%)</option>
                  <option value="SALARY_PLUS_COMMISSION">راتب أساسي + عمولة (%)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">الراتب الأساسي (ج.م):</label>
                  <input
                    type="number"
                    min={0}
                    value={specForm.baseSalary}
                    onChange={(e) => setSpecForm({ ...specForm, baseSalary: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">نسبة العمولة (%):</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={specForm.commissionRate}
                    onChange={(e) => setSpecForm({ ...specForm, commissionRate: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition mt-2"
              >
                حفظ بيانات المتخصص 💾
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. USER MODAL (CREATE & FULL EDIT) */}
      {showUserModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-md bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">
                {editingUser ? `تعديل المستخدم (${editingUser.name})` : "إضافة مستخدم جديد للطاقم"}
              </h3>
              <button onClick={() => setShowUserModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">الاسم بالكامل:</label>
                <input
                  type="text"
                  required
                  value={userForm.name}
                  onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  placeholder="مثال: أحمد عبد الرحمن"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">اسم الدخول (Username):</label>
                  <input
                    type="text"
                    required
                    value={userForm.username}
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                    placeholder="cashier-nasr"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">رمز PIN السري (6 أرقام):</label>
                  <input
                    type="password"
                    maxLength={6}
                    value={userForm.pin}
                    onChange={(e) => setUserForm({ ...userForm, pin: e.target.value })}
                    placeholder="157230"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-center tracking-widest focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">
                  {editingUser ? "كلمة المرور (اتركها فارغة للاحتفاظ بالحالية):" : "كلمة المرور:"}
                </label>
                <input
                  type="password"
                  required={!editingUser}
                  value={userForm.password}
                  onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                  placeholder={editingUser ? "••••••••" : "كلمة المرور"}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">الدور والصلاحية:</label>
                  <select
                    value={userForm.role}
                    onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="owner">المالك (Maestro)</option>
                    <option value="general_manager">المدير العام</option>
                    <option value="manager">مدير فرع</option>
                    <option value="cashier">كاشير نقطة البيع POS</option>
                    <option value="specialist">متخصص حلاقة (كرسي)</option>
                    <option value="worker">عامل صالون وضيافة</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">الفرع التابع له:</label>
                  <select
                    value={userForm.branchId}
                    onChange={(e) => setUserForm({ ...userForm, branchId: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="">إشراف عام على كل الفروع</option>
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">رقم الهاتف:</label>
                <input
                  type="tel"
                  value={userForm.phone}
                  onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
                  placeholder="01121537537"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition mt-2 shadow-lg shadow-amber-500/20"
              >
                {editingUser ? "حفظ التعديلات على المستخدم 💾" : "إضافة المستخدم الآن 👤"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. OFFER MODAL (CREATE & FULL EDIT) */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-lg bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">
                {editingOffer ? `تعديل العرض الملكي (${editingOffer.titleAr})` : "إضافة عرض ملكي جديد 👑"}
              </h3>
              <button onClick={() => setShowOfferModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveOffer} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">عنوان العرض / الباكدج:</label>
                <input
                  type="text"
                  required
                  value={offerForm.titleAr}
                  onChange={(e) => setOfferForm({ ...offerForm, titleAr: e.target.value })}
                  placeholder="مثال: عرض العريس الملكي المتكامل"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">السعر الحالي (ج.م):</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={offerForm.price}
                    onChange={(e) => setOfferForm({ ...offerForm, price: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono font-bold text-amber-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">السعر الأصلي (ج.م):</label>
                  <input
                    type="number"
                    value={offerForm.oldPrice}
                    onChange={(e) => setOfferForm({ ...offerForm, oldPrice: e.target.value as any })}
                    placeholder="4000"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">الشارة الترويجية (Badge):</label>
                  <input
                    type="text"
                    value={offerForm.badge}
                    onChange={(e) => setOfferForm({ ...offerForm, badge: e.target.value })}
                    placeholder="خصم 46% 🔥"
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-2xl bg-black/40 border border-white/10">
                <label className="text-slate-300 font-bold block text-xs">
                  فلاير أو صورة العرض الإعلانية (رفع فوري عبر ImgBB 📷):
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={offerForm.image || "/offers/offer-vip-1000.jpg"}
                      alt="Flyer Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="w-full py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{uploadingImage ? "جاري الرفع على ImgBB..." : "اختر فلاير العرض لرفعه 📷"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) =>
                          handleUploadFile(e, (url) => setOfferForm({ ...offerForm, image: url }))
                        }
                      />
                    </label>
                    <input
                      type="text"
                      required
                      value={offerForm.image}
                      onChange={(e) => setOfferForm({ ...offerForm, image: e.target.value })}
                      placeholder="/offers/offer-vip-1000.jpg أو رابط ImgBB"
                      className="w-full py-1 px-2.5 rounded-lg bg-black/60 border border-white/10 text-white font-mono text-[10px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">الفرع المتاح به العرض:</label>
                  <select
                    value={offerForm.branchId}
                    onChange={(e) => setOfferForm({ ...offerForm, branchId: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  >
                    <option value="">متاح في جميع الفروع 📍</option>
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">ترتيب الظهور:</label>
                  <input
                    type="number"
                    min={1}
                    value={offerForm.sortOrder}
                    onChange={(e) => setOfferForm({ ...offerForm, sortOrder: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">وصف العرض المختصر:</label>
                <input
                  type="text"
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({ ...offerForm, description: e.target.value })}
                  placeholder="تجربة متكاملة تخليك في أفضل لوك قبل أهم يوم في حياتك"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">
                  المميزات والمراحل (اكتب كل ميزة في سطر منفصل):
                </label>
                <textarea
                  rows={4}
                  value={offerForm.features}
                  onChange={(e) => setOfferForm({ ...offerForm, features: e.target.value })}
                  placeholder="قص شعر وتدريج ملكي احترافي&#10;تحديد ورسم الذقن بالبخار&#10;تنظيف بشرة هيدروفيشيل 11 مرحلة&#10;مساج كامل للجسم"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition mt-2 shadow-lg shadow-amber-500/20"
              >
                {editingOffer ? "حفظ تعديلات العرض الملكي 👑" : "نشر العرض الملكي الآن 👑"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. PAYOUT / ADVANCE MODAL */}
      {showPayoutModal && payoutSpecialist && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-sm bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-sm font-black text-white">تسجيل حركة مالية</h3>
                <p className="text-[11px] text-amber-300 font-bold">{payoutSpecialist.name}</p>
              </div>
              <button onClick={() => setShowPayoutModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleRecordPayout} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">نوع الحركة:</label>
                <select
                  value={payoutType}
                  onChange={(e) => setPayoutType(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                >
                  <option value="ADVANCE_WITHDRAWAL">سلفة على الحساب 💸</option>
                  <option value="SALARY_PAYOUT">صرف راتب / أجر كامل 💰</option>
                  <option value="BONUS">مكافأة إضافية 🎁</option>
                  <option value="DEDUCTION">خصم 🔻</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">المبلغ (ج.م):</label>
                <input
                  type="number"
                  min={1}
                  required
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(Number(e.target.value))}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">ملاحظات أو بيان:</label>
                <input
                  type="text"
                  value={payoutNotes}
                  onChange={(e) => setPayoutNotes(e.target.value)}
                  placeholder="مثال: سلفة نقدية من الخزينة"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition"
              >
                تأكيد وتسجيل الحركة 💵
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SHIFT ATTENDANCE & REASON MODAL */}
      {showShiftStatusModal && statusTargetSpecialist && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-sm bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-sm font-black text-white">تحديد حالة الوردية والحضور</h3>
                <p className="text-[11px] text-amber-300 font-bold">{statusTargetSpecialist.name}</p>
              </div>
              <button onClick={() => setShowShiftStatusModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveShiftStatus} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">الحالة المطلوبة:</label>
                <select
                  value={newShiftStatus}
                  onChange={(e) => {
                    const val = e.target.value;
                    setNewShiftStatus(val);
                    if (val === "AVAILABLE" && !shiftStatusReason) setShiftStatusReason("حاضر وبدأ الوردية");
                    if (val === "OFF_DUTY" && !shiftStatusReason) setShiftStatusReason("انتهت الوردية وغادر الصالون");
                    if (val === "DAY_OFF" && !shiftStatusReason) setShiftStatusReason("إجازة رسمية / أسبوعية");
                    if (val === "BREAK" && !shiftStatusReason) setShiftStatusReason("استراحة قصيرة");
                    if (val === "ABSENT" && !shiftStatusReason) setShiftStatusReason("غائب بدون إذن");
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-bold"
                >
                  <option value="AVAILABLE">🟢 حاضر ومتاح وبدأ الوردية</option>
                  <option value="WITH_CLIENT">💺 على الكرسي مع عميل</option>
                  <option value="BREAK">☕ في استراحة مؤقتة</option>
                  <option value="OFF_DUTY">🏠 انتهت الوردية ومشي (تعطيل اليوم)</option>
                  <option value="DAY_OFF">🏖️ إجازة رسمية (تعطيل اليوم)</option>
                  <option value="ABSENT">🔴 غائب بدون إذن (تعطيل اليوم)</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">سبب التعطيل / الملاحظة (يظهر للعميل والإدارة):</label>
                <input
                  type="text"
                  value={shiftStatusReason}
                  onChange={(e) => setShiftStatusReason(e.target.value)}
                  placeholder="مثال: إجازة أسبوعية، راحة غداء، غادر بعد انتهاء الوردية"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {["بدأ الوردية الصباحية", "راحة غداء ☕", "انتهت الوردية ومشي 🏠", "إجازة أسبوعية 🏖️", "إجازة مرضية 🏥"].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setShiftStatusReason(chip)}
                      className="text-[10px] py-0.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition mt-2 shadow-lg shadow-amber-500/20"
              >
                تطبيق وتحديث حالة الوردية 💈
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 5. SERVICE MODAL */}
      {showServiceModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-md bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">
                {editingService ? `تعديل خدمة (${editingService.nameAr})` : "إضافة خدمة تجميل جديدة"}
              </h3>
              <button onClick={() => setShowServiceModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">اسم الخدمة (عربي):</label>
                <input
                  type="text"
                  required
                  value={serviceForm.nameAr}
                  onChange={(e) => setServiceForm({ ...serviceForm, nameAr: e.target.value })}
                  placeholder="مثال: حلاقة شعر ملكية كلاسيك"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">السعر (ج.م):</label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={serviceForm.price}
                    onChange={(e) => setServiceForm({ ...serviceForm, price: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono font-bold text-amber-400 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">المدة التقديرية (بالدقائق):</label>
                  <input
                    type="number"
                    min={5}
                    value={serviceForm.durationMinutes}
                    onChange={(e) => setServiceForm({ ...serviceForm, durationMinutes: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">القسم والتصنيف:</label>
                  <select
                    value={serviceForm.category}
                    onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  >
                    <option value="HAIR">شعر ✂️</option>
                    <option value="BEARD">دقن 🧔</option>
                    <option value="VIP_PACKAGES">بكجات VIP 👑</option>
                    <option value="SKIN_CARE">عناية بالبشرة 🔥</option>
                    <option value="COLOR_KERATIN">فرد وصبغة وبروتين 💆</option>
                    <option value="KIDS">أطفال 👶</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">حالة الخدمة:</label>
                  <select
                    value={serviceForm.isActive ? "true" : "false"}
                    onChange={(e) => setServiceForm({ ...serviceForm, isActive: e.target.value === "true" })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                  >
                    <option value="true">نشط ومتاح للحجز 🟢</option>
                    <option value="false">معطل ومخفي 🔴</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 p-3 rounded-2xl bg-black/40 border border-white/10">
                <label className="text-slate-300 font-bold block text-xs">
                  صورة الخدمة (رفع فوري عبر ImgBB 📷):
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        serviceForm.image ||
                        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&auto=format&fit=crop&q=80"
                      }
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="w-full py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{uploadingImage ? "جاري الرفع على ImgBB..." : "اختر صورة للخدمة لرفعها 📷"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) =>
                          handleUploadFile(e, (url) => setServiceForm({ ...serviceForm, image: url }))
                        }
                      />
                    </label>
                    <input
                      type="text"
                      value={serviceForm.image}
                      onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                      placeholder="رابط ImgBB أو مسار الصورة"
                      className="w-full py-1 px-2.5 rounded-lg bg-black/60 border border-white/10 text-white font-mono text-[10px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">وصف الخدمة:</label>
                <textarea
                  rows={2}
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  placeholder="تفاصيل الخدمة وما تقدمه للزبون..."
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition mt-2 shadow-lg shadow-amber-500/20"
              >
                {editingService ? "حفظ تعديلات الخدمة 💈" : "إضافة ونشر الخدمة 💈"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 6. BRANCH MODAL */}
      {showBranchModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-sm bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">إضافة فرع جديد لصالون صدام</h3>
              <button onClick={() => setShowBranchModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveBranch} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">اسم الفرع:</label>
                <input
                  type="text"
                  required
                  value={branchForm.name}
                  onChange={(e) => setBranchForm({ ...branchForm, name: e.target.value })}
                  placeholder="مثال: فرع المهندسين"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">كود الفرع:</label>
                <input
                  type="text"
                  required
                  value={branchForm.code}
                  onChange={(e) => setBranchForm({ ...branchForm, code: e.target.value })}
                  placeholder="BR-MOHANDESSIN"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">العنوان التفصيلي:</label>
                <input
                  type="text"
                  required
                  value={branchForm.address}
                  onChange={(e) => setBranchForm({ ...branchForm, address: e.target.value })}
                  placeholder="شارع جامعة الدول العربية"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">رقم الهاتف والواتساب:</label>
                <input
                  type="tel"
                  required
                  value={branchForm.phone}
                  onChange={(e) => setBranchForm({ ...branchForm, phone: e.target.value, whatsapp: e.target.value })}
                  placeholder="01121537537"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer"
              >
                حفظ وإضافة الفرع 📍
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. PRODUCT & RAW MATERIALS MODAL (CREATE / EDIT & LIVE IMGBB)
         ───────────────────────────────────────────────────────────── */}
      {showProductModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans"
          dir="rtl"
        >
          <div className="relative w-full max-w-lg bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <span>🛍️</span>
                <span>{editingProduct ? `تعديل الصنف (${editingProduct.nameAr})` : "إضافة منتج أو خامة جديدة للمخزن"}</span>
              </h3>
              <button
                onClick={() => {
                  setShowProductModal(false);
                  setEditingProduct(null);
                }}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3.5 text-xs">
              {/* Category with Optgroups */}
              <div>
                <label className="text-slate-300 font-bold block mb-1">نوع وتصنيف الصنف:</label>
                <select
                  value={productForm.category}
                  onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-bold"
                >
                  <optgroup label="🛍️ منتجات بيع للعملاء">
                    <option value="STYLING">تصفيف شعر وواكس ومات (STYLING)</option>
                    <option value="BEARD_CARE">عناية باللحية وزيوت وسيروم (BEARD_CARE)</option>
                    <option value="SKIN_CARE">عناية بالبشرة وماسكات وغسول (SKIN_CARE)</option>
                    <option value="PERFUMES">عطور رجالي صدام VIP أو دي بارفيوم (PERFUMES)</option>
                  </optgroup>
                  <optgroup label="💈 خامات ومستلزمات تشغيل الصالون">
                    <option value="SUPPLIES">خامات حلاقة وتشغيل (شفرات، قطن، فازلين، شمع)</option>
                    <option value="COLOR_SUPPLIES">خامات صبغات وتلوين وأكسجين (COLOR)</option>
                    <option value="PROTEIN_SUPPLIES">خامات بروتين ومعالجات وكيراتين (PROTEIN)</option>
                    <option value="ACCESSORIES">مناشف ومستلزمات تعقيم وأدوات صالون</option>
                  </optgroup>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="text-slate-300 font-bold block mb-1">اسم الصنف أو الخامة بالعربي:</label>
                <input
                  type="text"
                  required
                  value={productForm.nameAr}
                  onChange={(e) => setProductForm({ ...productForm, nameAr: e.target.value })}
                  placeholder="مثال: شمع شعر عنبر تثبيت 24 ساعة أو شفرات حلاقة دوركو تيتانيوم"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
              </div>

              {/* Branch */}
              <div>
                <label className="text-slate-300 font-bold block mb-1">الفرع المتاح به الصنف:</label>
                <select
                  value={productForm.branchId}
                  onChange={(e) => setProductForm({ ...productForm, branchId: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                >
                  <option value="">متاح بجميع الفروع (عام للمنظومة)</option>
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price & Cost */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    سعر البيع للزبون (ج.م):
                    <span className="text-[10px] text-amber-300 mr-1">(0 للخامات)</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">سعر الشراء / التكلفة (ج.م):</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={productForm.costPrice}
                    onChange={(e) => setProductForm({ ...productForm, costPrice: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              {/* Stock & Min Alert */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">الكمية المتاحة بالمخزن:</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={productForm.stockQty}
                    onChange={(e) => setProductForm({ ...productForm, stockQty: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">حد التنبيه عند نقص المخزون:</label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={productForm.minStockAlert}
                    onChange={(e) => setProductForm({ ...productForm, minStockAlert: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              {/* Barcode */}
              <div>
                <label className="text-slate-300 font-bold block mb-1">الباركود (اختياري):</label>
                <input
                  type="text"
                  value={productForm.barcode}
                  onChange={(e) => setProductForm({ ...productForm, barcode: e.target.value })}
                  placeholder="مثال: SUP-001 أو باركود العبوة"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                />
              </div>

              {/* ImgBB Direct Upload & Preview */}
              <div className="space-y-1.5 p-3 rounded-2xl bg-black/40 border border-white/10">
                <label className="text-slate-300 font-bold block text-xs">
                  صورة الصنف (رفع فوري ومباشر عبر ImgBB 📷):
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        productForm.image ||
                        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=80"
                      }
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="w-full py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                      <Upload className="w-4 h-4 text-amber-400" />
                      <span>{uploadingImage ? "جاري الرفع على ImgBB..." : "اختر صورة لرفعها من جهازك 📷"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) =>
                          handleUploadFile(e, (url: string) => {
                            setProductForm((prev) => ({ ...prev, image: url }));
                            showToast("success", "تم رفع صورة الصنف بنجاح عبر ImgBB 📸");
                          })
                        }
                      />
                    </label>
                    <input
                      type="url"
                      value={productForm.image}
                      onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                      placeholder="أو اكتب رابط الصورة هنا"
                      className="w-full py-1.5 px-3 rounded-xl bg-black/60 border border-white/10 text-white text-[11px] font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                {editingProduct ? "حفظ التعديلات على الصنف 💾" : "حفظ وإضافة الصنف للمخزن 🛍️"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. LUXURY VIP ADMIN TOAST NOTIFICATION (NO WINDOWS ALERTS!)
         ───────────────────────────────────────────────────────────── */}
      {adminToast && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto animate-fade-in font-sans"
          dir="rtl"
        >
          <div
            className={`py-3 px-5 rounded-2xl shadow-2xl border backdrop-blur-xl flex items-center gap-3 text-xs font-black ${
              adminToast.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/60 text-emerald-200 shadow-emerald-950/50"
                : adminToast.type === "error"
                ? "bg-rose-950/90 border-rose-500/60 text-rose-200 shadow-rose-950/50"
                : "bg-amber-950/90 border-amber-500/60 text-amber-200 shadow-amber-950/50"
            }`}
          >
            <span className="text-base">
              {adminToast.type === "success" ? "✅" : adminToast.type === "error" ? "⚠️" : "👑"}
            </span>
            <span className="flex-1 leading-relaxed">{adminToast.message}</span>
            <button
              onClick={() => setAdminToast(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 8. CARD 2 QR MODAL */}
      <CardQRModal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        hadayekPhone={settings?.hadayekPhone || "01121537537"}
        nasrCityPhone={settings?.nasrCityPhone || "01121537537"}
        hotline={settings?.hotline || "01121537537"}
      />
    </div>
  );
}
