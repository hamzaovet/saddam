"use client";

import React, { useState, useEffect } from "react";
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
    | "inventory"
    | "bookings"
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
  const [products, setProducts] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [ledgers, setLedgers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Service Modal (Create/Edit)
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [serviceForm, setServiceForm] = useState({
    nameAr: "",
    category: "HAIR",
    price: 150,
    durationMinutes: 30,
    description: "",
  });

  // Product Modal (Create/Edit)
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productForm, setProductForm] = useState({
    nameAr: "",
    category: "STYLING",
    price: 180,
    costPrice: 100,
    stockQty: 50,
    branchId: "",
  });

  // Branch Modal
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [branchForm, setBranchForm] = useState({
    name: "",
    code: "",
    address: "",
    phone: "",
    whatsapp: "",
  });

  // User Modal
  const [showUserModal, setShowUserModal] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    password: "",
    pin: "157230",
    role: "cashier",
    branchId: "",
    phone: "",
  });

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

  // Load All Admin Data
  const loadAllData = async () => {
    try {
      setLoading(true);
      const [
        resSet,
        resB,
        resSpec,
        resS,
        resP,
        resBk,
        resCust,
        resU,
        resT,
        resL,
      ] = await Promise.all([
        fetch("/api/settings"),
        fetch("/api/branches"),
        fetch(`/api/specialists?activeOnly=false`),
        fetch("/api/services?activeOnly=false"),
        fetch("/api/products"),
        fetch("/api/bookings"),
        fetch("/api/customers"),
        fetch("/api/users"),
        fetch("/api/tickets"),
        fetch("/api/ledgers"),
      ]);

      const [
        dataSet,
        dataB,
        dataSpec,
        dataS,
        dataP,
        dataBk,
        dataCust,
        dataU,
        dataT,
        dataL,
      ] = await Promise.all([
        resSet.json(),
        resB.json(),
        resSpec.json(),
        resS.json(),
        resP.json(),
        resBk.json(),
        resCust.json(),
        resU.json(),
        resT.json(),
        resL.json(),
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
      if (dataP.success && dataP.products) setProducts(dataP.products);
      if (dataBk.success && dataBk.bookings) setBookings(dataBk.bookings);
      if (dataCust.success && dataCust.customers) setCustomers(dataCust.customers);
      if (dataU.success && dataU.users) setUsers(dataU.users);
      if (dataT.success && dataT.tickets) setTickets(dataT.tickets);
      if (dataL.success && dataL.ledgers) setLedgers(dataL.ledgers);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadAllData();
    }
  }, [currentUser]);

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

  // Toggle User Active Status
  const handleToggleUserActive = async (userId: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userId,
          isActive: !currentStatus,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, isActive: !currentStatus } : u))
        );
      } else {
        alert(data.error || "فشل تغيير حالة المستخدم");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Save / Update Specialist
  const handleSaveSpecialist = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = "/api/specialists";
      const method = editingSpecialist ? "PATCH" : "POST";
      const bodyPayload = editingSpecialist
        ? { id: editingSpecialist.id, ...specForm }
        : specForm;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();
      if (data.success) {
        alert("تم حفظ بيانات المتخصص بنجاح!");
        setShowSpecialistModal(false);
        setEditingSpecialist(null);
        loadAllData();
      } else {
        alert(data.error || "فشل حفظ المتخصص");
      }
    } catch {
      alert("حدث خطأ أثناء الحفظ");
    }
  };

  // Record Specialist Payout / Advance
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
          amount: payoutAmount,
          notes: payoutNotes,
          recordedBy: currentUser?.name || "المالك (Maestro)",
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("تم تسجيل الحركة المالية بنجاح وتحديث رصيد المتخصص!");
        setShowPayoutModal(false);
        setPayoutSpecialist(null);
        setPayoutNotes("");
        loadAllData();
      } else {
        alert(data.error || "فشل تسجيل الحركة");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Save / Update Service
  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingService ? "PATCH" : "POST";
      const bodyPayload = editingService
        ? { id: editingService.id, ...serviceForm }
        : serviceForm;

      const res = await fetch("/api/services", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();
      if (data.success) {
        setShowServiceModal(false);
        setEditingService(null);
        loadAllData();
      } else {
        alert(data.error || "فشل حفظ الخدمة");
      }
    } catch {
      alert("تعذر حفظ الخدمة");
    }
  };

  // Delete Service
  const handleDeleteService = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذه الخدمة نهائياً من القائمة؟")) return;
    try {
      const res = await fetch(`/api/services?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        loadAllData();
      }
    } catch {}
  };

  // Save Product
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingProduct ? "PATCH" : "POST";
      const bodyPayload = editingProduct
        ? { id: editingProduct.id, ...productForm }
        : productForm;

      const res = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();
      if (data.success) {
        setShowProductModal(false);
        setEditingProduct(null);
        loadAllData();
      }
    } catch {}
  };

  // Save Branch
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
        setShowBranchModal(false);
        setBranchForm({ name: "", code: "", address: "", phone: "", whatsapp: "" });
        loadAllData();
      }
    } catch {}
  };

  // Save User
  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userForm),
      });
      const data = await res.json();
      if (data.success) {
        setShowUserModal(false);
        setUserForm({
          name: "",
          username: "",
          password: "",
          pin: "157230",
          role: "cashier",
          branchId: "",
          phone: "",
        });
        loadAllData();
      } else {
        alert(data.error || "فشل إضافة المستخدم");
      }
    } catch {}
  };

  const handleLogout = () => {
    localStorage.removeItem("saddam_staff_user");
    router.push("/login");
  };

  // Compute Overall KPI Metrics
  const filteredTickets = tickets.filter(
    (t) => selectedBranchId === "ALL" || t.branchId === selectedBranchId
  );
  const totalRevenue = filteredTickets
    .filter((t) => t.status === "COMPLETED")
    .reduce((sum, t) => sum + (t.finalAmount || 0), 0);
  const totalServicesRev = filteredTickets
    .filter((t) => t.status === "COMPLETED")
    .reduce((sum, t) => sum + (t.servicesTotal || 0), 0);
  const totalRetailRev = filteredTickets
    .filter((t) => t.status === "COMPLETED")
    .reduce((sum, t) => sum + (t.retailTotal || 0), 0);
  const totalClientsServed = filteredTickets.filter((t) => t.status === "COMPLETED").length;

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP ADMIN HEADER
         ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#0f0f15]/95 backdrop-blur-md border-b border-amber-500/25 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-amber-400">
                لوحة إدارة صالون صدام الملكي
              </h2>
              <span className="py-0.5 px-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black">
                {currentUser?.role === "owner" ? "المالك (Maestro) 👑" : "المدير العام"}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-bold">
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
          2. NAVIGATION TABS
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#0e0e14] border-b border-amber-500/20 px-4 sm:px-8 py-2 overflow-x-auto text-xs">
        <div className="flex items-center gap-1.5 min-w-max">
          {[
            { id: "overview", label: "نظرة عامة وإحصاءات 📊", icon: LayoutDashboard },
            { id: "specialists", label: "المتخصصين والأجور والعمولات ✂️", icon: Scissors },
            { id: "services", label: "الخدمات والأسعار 💈", icon: Award },
            { id: "inventory", label: "بضاعة التجميل والمخزن 🛍️", icon: ShoppingBag },
            { id: "bookings", label: "الحجوزات والمواعيد 📅", icon: Calendar },
            { id: "customers", label: "قاعدة العملاء والدعاية 👥", icon: Users },
            { id: "users", label: "طاقم العمل والصلاحيات 🔒", icon: ShieldCheck },
            { id: "branches", label: "الفروع والتوسعات 📍", icon: MapPin },
            { id: "settings", label: "إعدادات المنظومة ⚙️", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 font-bold ${
                  isCurrent
                    ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
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
          3. MAIN TAB CONTENT AREA
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* ========================================================
            TAB 1: OVERVIEW & SALES KPIS
           ======================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">إجمالي الإيرادات</span>
                <strong className="text-2xl font-mono text-amber-400 font-black">
                  {totalRevenue} ج.م
                </strong>
                <span className="text-[10px] text-emerald-400 font-bold block">
                  مبيعات خدمات وبضاعة تجميل
                </span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-white/10 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">إيراد خدمات الحلاقة</span>
                <strong className="text-2xl font-mono text-white font-black">
                  {totalServicesRev} ج.م
                </strong>
                <span className="text-[10px] text-slate-400 font-bold block">
                  شعر، دقن، بخار، بروتين
                </span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-white/10 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">مبيعات مستحضرات التجميل</span>
                <strong className="text-2xl font-mono text-white font-black">
                  {totalRetailRev} ج.م
                </strong>
                <span className="text-[10px] text-slate-400 font-bold block">
                  كريمات، شمع، عطور، سيروم
                </span>
              </div>

              <div className="p-4 rounded-3xl bg-[#14141e] border border-white/10 space-y-2">
                <span className="text-xs text-slate-400 font-bold block">العملاء المخدومين</span>
                <strong className="text-2xl font-mono text-amber-400 font-black">
                  {totalClientsServed}
                </strong>
                <span className="text-[10px] text-slate-400 font-bold block">
                  تذكرة منتهية ومحصلة
                </span>
              </div>
            </div>

            {/* Live Chairs Quick Monitor */}
            <div className="p-5 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-4">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Scissors className="w-4 h-4 text-amber-400" />
                <span>حالة كراسي الحلاقة الآن في الفروع</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {specialists.map((s) => (
                  <div
                    key={s.id}
                    className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1.5 text-center"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-400/40 mx-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.photo || "/logo.jpg"} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <h5 className="font-black text-xs text-white truncate">{s.name}</h5>
                    <p className="text-[10px] text-slate-400">كرسي #{s.chairNumber} • {s.branchName}</p>
                    <span
                      className={`inline-block py-0.5 px-2 rounded-full text-[9px] font-black ${
                        s.status === "WITH_CLIENT"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      }`}
                    >
                      {s.status === "WITH_CLIENT" ? "على الكرسي 💺" : "متاح 🟢"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: SPECIALISTS, COMPENSATION & PERFORMANCE LEDGER
           ======================================================== */}
        {activeTab === "specialists" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-amber-400" />
                  <span>جدول حسابات وأجور وتقييم أداء المتخصصين</span>
                </h3>
                <p className="text-xs text-slate-400">
                  حسابات دقيقة: نظام الحساب (راتب، عمولة، سلف) + (كام، خد كام، وباقيله كام) + متوسط وقت العميل ⏱️
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingSpecialist(null);
                  setShowSpecialistModal(true);
                }}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة متخصص / حلاق جديد ✂️</span>
              </button>
            </div>

            {/* Specialists Table */}
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#14141e]">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-slate-400 font-bold">
                    <th className="p-3.5">المتخصص والكرسي</th>
                    <th className="p-3.5">نظام الحساب</th>
                    <th className="p-3.5">إجمالي الاستحقاق</th>
                    <th className="p-3.5">المدفوع / السلف</th>
                    <th className="p-3.5">المتبقي له</th>
                    <th className="p-3.5">تقييم الأداء</th>
                    <th className="p-3.5 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {specialists.map((spec) => (
                    <tr key={spec.id} className="hover:bg-white/5 transition">
                      {/* Name & Photo */}
                      <td className="p-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 bg-black shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={spec.photo || "/logo.jpg"} alt={spec.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <strong className="text-white block font-black">{spec.name}</strong>
                            <span className="text-[10px] text-amber-300 font-mono">
                              كرسي #{spec.chairNumber} • {spec.branchName}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Pay Type */}
                      <td className="p-3.5 font-bold">
                        <span className="py-1 px-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] block w-fit">
                          {spec.payType === "DAILY" && `يومي (${spec.baseSalary} ج)`}
                          {spec.payType === "WEEKLY" && `أسبوعي (${spec.baseSalary} ج)`}
                          {spec.payType === "MONTHLY" && `شهري (${spec.baseSalary} ج)`}
                          {spec.payType === "COMMISSION_ONLY" && `عمولة فقط (${spec.commissionRate}%)`}
                          {spec.payType === "SALARY_PLUS_COMMISSION" && `راتب + عمولة (${spec.commissionRate}%)`}
                        </span>
                      </td>

                      {/* Total Earned */}
                      <td className="p-3.5 font-mono font-bold text-white">
                        {spec.financials?.totalEarned || 0} ج.م
                        <span className="block text-[10px] text-slate-400">
                          (عمولات: {spec.financials?.commissionEarned || 0} ج)
                        </span>
                      </td>

                      {/* Paid / Withdrawn */}
                      <td className="p-3.5 font-mono font-bold text-rose-400">
                        {spec.financials?.totalPaidOrWithdrawn || 0} ج.م
                      </td>

                      {/* Remaining Balance (باقيله كام) */}
                      <td className="p-3.5 font-mono font-black text-amber-400 text-sm">
                        {spec.financials?.remainingBalance || 0} ج.م
                      </td>

                      {/* Performance KPIs */}
                      <td className="p-3.5 text-[11px] space-y-0.5">
                        <div className="flex items-center gap-1 text-slate-300">
                          <span>زبائن:</span>
                          <strong className="text-white font-mono">{spec.totalClientsServed}</strong>
                        </div>
                        <div className="flex items-center gap-1 text-slate-300">
                          <span>متوسط الوقت:</span>
                          <strong className="text-amber-300 font-mono">{spec.avgDurationMinutes} دقيقة</strong>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-3.5 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              setPayoutSpecialist(spec);
                              setPayoutType("ADVANCE_WITHDRAWAL");
                              setShowPayoutModal(true);
                            }}
                            className="py-1 px-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-bold transition"
                            title="تسجيل سلفة"
                          >
                            سلفة 💸
                          </button>

                          <button
                            onClick={() => {
                              setPayoutSpecialist(spec);
                              setPayoutType("SALARY_PAYOUT");
                              setShowPayoutModal(true);
                            }}
                            className="py-1 px-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold transition"
                            title="صرف راتب أو دفعة"
                          >
                            صرف 💰
                          </button>
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
            TAB 3: DYNAMIC SERVICES CATALOG
           ======================================================== */}
        {activeTab === "services" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">الخدمات التجميلية والحلاقة</h3>
                <p className="text-xs text-slate-400">
                  قائمة خدمات الصالون ديناميكية وقابلة للتعديل وتحديث الأسعار فورياً 💈
                </p>
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
                  });
                  setShowServiceModal(true);
                }}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة خدمة جديدة ➕</span>
              </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {services.map((srv) => (
                <div
                  key={srv.id}
                  className="p-4 rounded-3xl bg-[#14141e] border border-white/10 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="py-0.5 px-2 rounded-lg bg-white/5 text-[10px] font-bold text-amber-300">
                        {srv.category}
                      </span>
                      <span className="font-mono text-base font-black text-amber-400">
                        {srv.price} ج.م
                      </span>
                    </div>

                    <h4 className="font-black text-sm text-white pt-1">{srv.nameAr}</h4>
                    {srv.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">{srv.description}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-2 text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{srv.durationMinutes} دقيقة</span>
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setEditingService(srv);
                          setServiceForm({
                            nameAr: srv.nameAr,
                            category: srv.category,
                            price: srv.price,
                            durationMinutes: srv.durationMinutes,
                            description: srv.description || "",
                          });
                          setShowServiceModal(true);
                        }}
                        className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                        title="تعديل"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDeleteService(srv.id)}
                        className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition"
                        title="حذف"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: RETAIL BEAUTY PRODUCTS & INVENTORY
           ======================================================== */}
        {activeTab === "inventory" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">بضاعة التجميل ومستحضرات العناية</h3>
                <p className="text-xs text-slate-400">
                  مخزون الصالون من كريمات، شمع، عطور، وزيوت لحية مع تنبيهات النواقص 🛍️
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingProduct(null);
                  setProductForm({
                    nameAr: "",
                    category: "STYLING",
                    price: 180,
                    costPrice: 100,
                    stockQty: 50,
                    branchId: "",
                  });
                  setShowProductModal(true);
                }}
                className="py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة صنف تجميل جديد 🧴</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-3xl bg-[#14141e] border border-white/10 space-y-3 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="py-0.5 px-2 rounded-lg bg-white/5 text-[10px] font-bold text-amber-300">
                      {prod.category}
                    </span>
                    <span
                      className={`text-[10px] font-black py-0.5 px-2 rounded-full ${
                        prod.stockQty <= (prod.minStockAlert || 10)
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      }`}
                    >
                      متبقي: {prod.stockQty} قطعة
                    </span>
                  </div>

                  <div>
                    <h4 className="font-black text-sm text-white">{prod.nameAr}</h4>
                    <div className="flex items-center gap-2 pt-1 font-mono text-xs">
                      <span className="text-amber-400 font-bold">سعر البيع: {prod.price} ج</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">التكلفة: {prod.costPrice} ج</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: BOOKINGS & APPOINTMENTS
           ======================================================== */}
        {activeTab === "bookings" && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-base font-black text-white">جدول الحجوزات والمواعيد المؤكدة</h3>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#14141e]">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-slate-400 font-bold">
                    <th className="p-3.5">رقم الحجز</th>
                    <th className="p-3.5">العميل</th>
                    <th className="p-3.5">الفرع</th>
                    <th className="p-3.5">المتخصص</th>
                    <th className="p-3.5">التاريخ والوقت</th>
                    <th className="p-3.5">الإجمالي</th>
                    <th className="p-3.5">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((bk) => (
                    <tr key={bk.id} className="hover:bg-white/5 transition">
                      <td className="p-3.5 font-mono font-black text-amber-400">#{bk.bookingNumber}</td>
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
                        <span className="py-0.5 px-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-black">
                          {bk.status}
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
            TAB 6: CUSTOMERS CRM & MARKETING
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
            TAB 7: USERS & RBAC ACCESS CONTROL
           ======================================================== */}
        {activeTab === "users" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">طاقم العمل والمستخدمين والصلاحيات</h3>
                <p className="text-xs text-slate-400">
                  إدارة حسابات المديرين، الكاشير، المتخصصين والعمال مع إمكانية التعطيل الفوري 🔒
                </p>
              </div>

              <button
                onClick={() => setShowUserModal(true)}
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
                    <th className="p-3.5">الحالة</th>
                    <th className="p-3.5 text-center">التحكم والتعطيل</th>
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
                        {u.username !== "maestro" && (
                          <button
                            onClick={() => handleToggleUserActive(u.id, u.isActive)}
                            className={`py-1 px-3 rounded-xl text-[11px] font-bold transition border ${
                              u.isActive
                                ? "bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border-rose-500/30"
                                : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                            }`}
                          >
                            {u.isActive ? "تعطيل الحساب 🚫" : "إعادة تفعيل 🟢"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 8: MULTI-BRANCH SYSTEM
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
                  <p className="text-xs font-mono text-slate-400">الهاتف: {b.phone}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 9: SYSTEM SETTINGS
           ======================================================== */}
        {activeTab === "settings" && (
          <div className="max-w-xl mx-auto p-6 rounded-3xl bg-[#14141e] border border-amber-500/30 space-y-4 animate-fade-in">
            <h3 className="text-base font-black text-amber-400">إعدادات المنظومة العامة</h3>
            <div className="text-xs text-slate-300 space-y-2">
              <p>اسم الصالون: {settings?.salonNameAr}</p>
              <p>الخط الساخن: {settings?.hotline}</p>
              <p>فرع حدائق القبة: {settings?.hadayekPhone}</p>
              <p>فرع مدينة نصر: {settings?.nasrCityPhone}</p>
              <p>ساعات العمل: من {settings?.defaultOpenHour} حتى {settings?.defaultCloseHour}</p>
            </div>
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          MODALS
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
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                />
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

      {/* 2. PAYOUT / ADVANCE MODAL */}
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

      {/* 3. SERVICE MODAL */}
      {showServiceModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans" dir="rtl">
          <div className="relative w-full max-w-sm bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white">إضافة / تعديل خدمة تجميل</h3>
              <button onClick={() => setShowServiceModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">اسم الخدمة:</label>
                <input
                  type="text"
                  required
                  value={serviceForm.nameAr}
                  onChange={(e) => setServiceForm({ ...serviceForm, nameAr: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
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
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">المدة (بالدقائق):</label>
                  <input
                    type="number"
                    min={5}
                    value={serviceForm.durationMinutes}
                    onChange={(e) => setServiceForm({ ...serviceForm, durationMinutes: Number(e.target.value) })}
                    className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">القسم:</label>
                <select
                  value={serviceForm.category}
                  onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white"
                >
                  <option value="HAIR">شعر</option>
                  <option value="BEARD">دقن</option>
                  <option value="VIP_PACKAGES">بكجات VIP</option>
                  <option value="SKIN_CARE">عناية بالبشرة</option>
                  <option value="COLOR_KERATIN">فرد وصبغة وبروتين</option>
                  <option value="KIDS">أطفال</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition"
              >
                حفظ الخدمة 💈
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 4. CARD 2 QR MODAL */}
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
