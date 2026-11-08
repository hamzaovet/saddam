"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Scissors,
  Printer,
  CheckCircle2,
  Clock,
  User,
  ShoppingBag,
  DollarSign,
  Plus,
  Trash2,
  RefreshCw,
  LogOut,
  CreditCard,
  Banknote,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Search,
  Tag,
  AlertCircle,
  Users,
} from "lucide-react";

export default function CashierPosPage() {
  const router = useRouter();

  // Auth State
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedBranchId, setSelectedBranchId] = useState<string>("");
  const [branches, setBranches] = useState<any[]>([]);

  // Tickets & Products & Specialists
  const [tickets, setTickets] = useState<any[]>([]);
  const [retailProducts, setRetailProducts] = useState<any[]>([]);
  const [specialists, setSpecialists] = useState<any[]>([]);
  const [showShiftModal, setShowShiftModal] = useState<boolean>(false);
  const [showAdmitModal, setShowAdmitModal] = useState<boolean>(false);
  const [admitCustomerName, setAdmitCustomerName] = useState<string>("");
  const [admitCustomerPhone, setAdmitCustomerPhone] = useState<string>("");
  const [admitSpecialistId, setAdmitSpecialistId] = useState<string>("");
  const [admittingClient, setAdmittingClient] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  // Active Ticket Selected for Checkout
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  // Settlement Inputs
  const [paymentMethod, setPaymentMethod] = useState<string>("CASH");
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [settlingTicket, setSettlingTicket] = useState<boolean>(false);

  // Completed / Printed Receipt Order
  const [lastPrintedTicket, setLastPrintedTicket] = useState<any>(null);

  // Sound ref for new ticket alert
  const audioCtxRef = useRef<AudioContext | null>(null);

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
        user.role !== "cashier" &&
        user.role !== "manager" &&
        user.role !== "general_manager" &&
        user.role !== "owner"
      ) {
        router.push("/login");
        return;
      }
      setCurrentUser(user);
      if (user.branchId) setSelectedBranchId(user.branchId);
    } catch {
      router.push("/login");
    }
  }, [router]);

  // Load Data
  const fetchPosData = async () => {
    try {
      const [resB, resT, resP, resSpec] = await Promise.all([
        fetch("/api/branches", { cache: "no-store" }),
        fetch(`/api/tickets?branchId=${selectedBranchId || "ALL"}&activeOnly=true`, { cache: "no-store" }),
        fetch(`/api/products?branchId=${selectedBranchId || "ALL"}`, { cache: "no-store" }),
        fetch(`/api/specialists?branchId=${selectedBranchId || "ALL"}`, { cache: "no-store" }),
      ]);

      const [dataB, dataT, dataP, dataSpec] = await Promise.all([
        resB.json(),
        resT.json(),
        resP.json(),
        resSpec.json(),
      ]);

      if (dataB.success && dataB.branches) {
        setBranches(dataB.branches);
        if (!selectedBranchId && dataB.branches.length > 0) {
          setSelectedBranchId(dataB.branches[0].id);
        }
      }

      if (dataT.success && dataT.tickets) {
        setTickets(dataT.tickets);
        // If a ticket is currently selected, keep it updated
        if (selectedTicket) {
          const fresh = dataT.tickets.find((t: any) => t.id === selectedTicket.id);
          if (fresh) setSelectedTicket(fresh);
        }
      }

      if (dataP.success && dataP.products) {
        setRetailProducts(dataP.products);
      }

      if (dataSpec.success && dataSpec.specialists) {
        setSpecialists(dataSpec.specialists);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickShiftStatus = async (specId: string, status: string, reason: string) => {
    try {
      const res = await fetch("/api/specialists", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: specId,
          status,
          statusReason: reason,
        }),
      });
      const data = await res.json();
      if (data.success) {
        await fetchPosData();
      } else {
        alert(data.error || "فشل تحديث الوردية");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    }
  };

  // Admit customer to chair by Cashier
  const handleAdmitCustomerToChair = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!admitCustomerName.trim() || !admitSpecialistId) {
      alert("يرجى إدخال اسم العميل واختيار المتخصص");
      return;
    }

    try {
      setAdmittingClient(true);
      const chosenSpec = specialists.find((s) => s.id === admitSpecialistId);
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          specialistId: admitSpecialistId,
          branchId: chosenSpec?.branchId || (selectedBranchId !== "ALL" ? selectedBranchId : branches[0]?.id),
          customerName: admitCustomerName.trim(),
          customerPhone: admitCustomerPhone.trim() || null,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setShowAdmitModal(false);
        setAdmitCustomerName("");
        setAdmitCustomerPhone("");
        await fetchPosData();
      } else {
        alert(data.error || "فشل إجلاس العميل");
      }
    } catch {
      alert("تعذر الاتصال بالخادم");
    } finally {
      setAdmittingClient(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchPosData();
      const interval = setInterval(fetchPosData, 4000);
      return () => clearInterval(interval);
    }
  }, [currentUser, selectedBranchId]);

  // Select Ticket for Checkout
  const handleSelectTicket = (t: any) => {
    setSelectedTicket(t);
    setDiscountAmount(0);
    setTipAmount(0);
    setPaymentMethod("CASH");
  };

  // Add Retail Product to Active Ticket
  const handleAddRetailProduct = async (prod: any) => {
    if (!selectedTicket) return;
    try {
      const res = await fetch("/api/tickets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicket.id,
          action: "ADD_RETAIL",
          productId: prod.id,
          nameAr: prod.nameAr,
          price: prod.price,
          qty: 1,
        }),
      });

      const data = await res.json();
      if (data.success && data.ticket) {
        setSelectedTicket(data.ticket);
        fetchPosData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Settle & Print Receipt
  const handleSettleAndPrint = async () => {
    if (!selectedTicket) return;

    try {
      setSettlingTicket(true);
      const res = await fetch("/api/tickets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicket.id,
          action: "SETTLE_CASHIER",
          paymentMethod,
          discount: discountAmount,
          tipAmount,
          cashierName: currentUser?.name || "كاشير صالون صدام",
        }),
      });

      const data = await res.json();
      if (data.success && data.ticket) {
        setLastPrintedTicket(data.ticket);
        setSelectedTicket(null);
        fetchPosData();

        // Trigger thermal print
        setTimeout(() => {
          window.print();
        }, 300);
      } else {
        alert(data.error || "فشل تحصيل التذكرة");
      }
    } catch {
      alert("تعذر تسجيل التحصيل");
    } finally {
      setSettlingTicket(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("saddam_staff_user");
    router.push("/login");
  };

  // Parse active ticket services and retail items
  let parsedServices: any[] = [];
  try {
    parsedServices =
      typeof selectedTicket?.services === "string"
        ? JSON.parse(selectedTicket.services)
        : selectedTicket?.services || [];
  } catch {
    parsedServices = [];
  }

  let parsedRetail: any[] = [];
  try {
    parsedRetail =
      typeof selectedTicket?.retailItems === "string"
        ? JSON.parse(selectedTicket.retailItems)
        : selectedTicket?.retailItems || [];
  } catch {
    parsedRetail = [];
  }

  // Calculate live checkout total
  const rawTotal = (selectedTicket?.servicesTotal || 0) + (selectedTicket?.retailTotal || 0);
  const calculatedFinal = Math.max(0, rawTotal - Number(discountAmount || 0) + Number(tipAmount || 0));

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* ─────────────────────────────────────────────────────────────
          1. POS HEADER
         ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#0f0f15]/95 backdrop-blur-md border-b border-amber-500/25 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-lg no-print">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-amber-400">
                كاشير صالون صدام (نقطة البيع POS)
              </h2>
              <span className="py-0.5 px-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black">
                نشط 🟢
              </span>
            </div>
            <p className="text-xs text-slate-400 font-bold">
              الكاشير: {currentUser?.name}
            </p>
          </div>
        </div>

        {/* Branch Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentUser?.role === "owner" || currentUser?.role === "general_manager" ? (
            <select
              value={selectedBranchId}
              onChange={(e) => setSelectedBranchId(e.target.value)}
              className="py-1.5 px-3 rounded-xl bg-[#181822] border border-amber-500/30 text-xs font-bold text-amber-300 focus:outline-none"
            >
              <option value="ALL">جميع الفروع</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          ) : (
            <span className="text-xs font-bold text-amber-300/80 bg-white/5 py-1 px-3 rounded-xl border border-white/5">
              {currentUser?.branchName || "الفرع الحالي"}
            </span>
          )}

          <button
            onClick={() => {
              setAdmitCustomerName("");
              setAdmitCustomerPhone("");
              setAdmitSpecialistId(specialists[0]?.id || "");
              setShowAdmitModal(true);
            }}
            className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>إجلاس زبون بالكرسي 💺</span>
          </button>

          <button
            onClick={() => setShowShiftModal(true)}
            className="py-1.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
          >
            <Users className="w-3.5 h-3.5" />
            <span>ورديات وحضور المختصين 💈</span>
          </button>

          <button
            onClick={fetchPosData}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition"
            title="تحديث"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <Link
            href="/admin"
            className="py-1.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold transition hidden sm:inline"
          >
            لوحة الإدارة ⚙️
          </Link>

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
          2. POS MAIN WORKSPACE (SPLIT: CHAIRS BOARD / CHECKOUT PANEL)
         ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 no-print">
        {/* LEFT / MAIN COLUMN: ACTIVE CHAIRS & TICKETS (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Chairs & Finished Tickets */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Scissors className="w-4 h-4 text-amber-400" />
                <span>كراسي الحلاقة والتذاكر اللحظية ({tickets.length})</span>
              </h3>
              <span className="text-[11px] text-amber-300 font-bold">
                تحديث تلقائي كل 4 ثوانٍ ⚡
              </span>
            </div>

            {tickets.length === 0 ? (
              <div className="p-8 rounded-3xl bg-[#14141c] border border-white/10 text-center space-y-2">
                <div className="text-2xl">💈</div>
                <p className="text-xs text-slate-400 font-bold">
                  لا توجد كراسي مشغولة أو تذاكر بانتظار الحساب حالياً
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tickets.map((t) => {
                  const isSelected = selectedTicket?.id === t.id;
                  const isReadyForCashier = t.status === "READY_FOR_CASHIER";

                  let servCount = 0;
                  try {
                    const s = typeof t.services === "string" ? JSON.parse(t.services) : t.services;
                    servCount = s.length;
                  } catch {}

                  return (
                    <div
                      key={t.id}
                      onClick={() => handleSelectTicket(t)}
                      className={`cursor-pointer p-4 rounded-2xl border transition space-y-3 flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 shadow-lg shadow-amber-500/10"
                          : isReadyForCashier
                          ? "bg-gradient-to-b from-[#181822] to-[#121218] border-emerald-500/50 hover:border-emerald-400 ring-1 ring-emerald-500/30"
                          : "bg-[#14141c] hover:bg-[#181824] border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-amber-400 font-black">
                          #{t.ticketNumber}
                        </span>
                        <span
                          className={`py-0.5 px-2 rounded-full text-[10px] font-black ${
                            isReadyForCashier
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse"
                              : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                          }`}
                        >
                          {isReadyForCashier ? "جاهز للحساب 💰" : "على الكرسي ✂️"}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-black text-sm text-white">{t.customerName}</h4>
                        <p className="text-xs text-slate-400">
                          المتخصص: <strong className="text-amber-300">{t.specialist?.name}</strong>{" "}
                          (ك #{t.chairNumber})
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 pt-2 text-xs">
                        <span className="text-slate-400">{servCount} خدمات مسجلة</span>
                        <span className="font-mono text-base font-black text-amber-400">
                          {t.finalAmount} ج.م
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Retail Beauty Products Catalog (Add to Cart) */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>بضاعة التجميل والعناية (إضافة للفاتورة بضغطة زر):</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {retailProducts.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleAddRetailProduct(prod)}
                  disabled={!selectedTicket || prod.stockQty <= 0}
                  className="p-3 rounded-2xl bg-[#14141c] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400 transition text-right space-y-1 group disabled:opacity-40"
                  title={!selectedTicket ? "اختر تذكرة عميل أولاً لإضافة المنتج" : ""}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400">
                      متبقي: {prod.stockQty}
                    </span>
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold group-hover:bg-amber-500 group-hover:text-black transition">
                      +
                    </span>
                  </div>
                  <h5 className="font-black text-xs text-white truncate">{prod.nameAr}</h5>
                  <span className="font-mono text-xs text-amber-400 font-black block">
                    {prod.price} ج.م
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIVE CHECKOUT PANEL (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-3xl bg-[#14141e] border-2 border-amber-500/40 shadow-2xl space-y-5 sticky top-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Banknote className="w-4 h-4 text-amber-400" />
                <span>لوحة الحساب والفاتورة</span>
              </h3>
              {selectedTicket && (
                <span className="font-mono text-xs text-amber-400 font-black">
                  #{selectedTicket.ticketNumber}
                </span>
              )}
            </div>

            {!selectedTicket ? (
              <div className="py-16 text-center space-y-2 text-slate-500">
                <div className="text-3xl">👈</div>
                <p className="text-xs font-bold">
                  اضغط على أي كرسي أو تذكرة من اليسار لإتمام الحساب وطباعة الإيصال
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Client & Specialist Summary */}
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">العميل:</span>
                    <strong className="text-white font-bold">{selectedTicket.customerName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">المتخصص:</span>
                    <span className="text-amber-300 font-bold">
                      {selectedTicket.specialist?.name} (كرسي #{selectedTicket.chairNumber})
                    </span>
                  </div>
                </div>

                {/* Items Breakdown */}
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  <span className="text-[11px] font-bold text-slate-400 block">
                    محتويات الفاتورة:
                  </span>

                  {parsedServices.map((srv, idx) => (
                    <div key={idx} className="flex justify-between text-slate-300 border-b border-white/5 pb-1">
                      <span>✂️ {srv.nameAr}</span>
                      <span className="font-mono font-bold text-amber-400">{srv.price} ج</span>
                    </div>
                  ))}

                  {parsedRetail.map((ret, idx) => (
                    <div key={`ret-${idx}`} className="flex justify-between text-slate-300 border-b border-white/5 pb-1">
                      <span>🛍️ {ret.nameAr} × {ret.qty}</span>
                      <span className="font-mono font-bold text-amber-400">{ret.total} ج</span>
                    </div>
                  ))}
                </div>

                {/* Discount & Tip Inputs */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">خصم (ج.م):</label>
                    <input
                      type="number"
                      min={0}
                      value={discountAmount}
                      onChange={(e) => setDiscountAmount(Number(e.target.value) || 0)}
                      className="w-full py-1.5 px-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono font-bold text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400">إكرامية / Tip (ج.م):</label>
                    <input
                      type="number"
                      min={0}
                      value={tipAmount}
                      onChange={(e) => setTipAmount(Number(e.target.value) || 0)}
                      className="w-full py-1.5 px-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono font-bold text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400">طريقة الدفع:</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: "CASH", label: "كاش 💵" },
                      { id: "CARD", label: "فيزا / ماستر 💳" },
                      { id: "INSTAPAY", label: "انستاباي 📱" },
                      { id: "VODAFONE_CASH", label: "فودافون كاش 🔴" },
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold transition ${
                          paymentMethod === pm.id
                            ? "bg-amber-500 text-slate-950 font-black"
                            : "bg-black/40 text-slate-400 hover:text-white border border-white/5"
                        }`}
                      >
                        {pm.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Final Total Display */}
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <span className="text-sm font-black text-white">المبلغ الصافي المطلوب:</span>
                  <strong className="text-2xl font-mono font-black text-amber-400">
                    {calculatedFinal} ج.م
                  </strong>
                </div>

                {/* Big Print & Settle Button */}
                <button
                  onClick={handleSettleAndPrint}
                  disabled={settlingTicket}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 disabled:opacity-50"
                >
                  <Printer className="w-5 h-5" />
                  <span>
                    {settlingTicket ? "جارٍ التحصيل..." : `تحصيل ${calculatedFinal} ج.م وطباعة الإيصال 🖨️`}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          CASHIER SPECIALISTS SHIFT ATTENDANCE DRAWER / MODAL
         ───────────────────────────────────────────────────────────── */}
      {showShiftModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans no-print" dir="rtl">
          <div className="relative w-full max-w-2xl bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">إدارة ورديات وحضور المختصين اليوم</h3>
                  <p className="text-xs text-slate-400">تفعيل حضور المختص لبدء استقبال الحجوزات أو تعطيله عند المغادرة/الإجازة 💈</p>
                </div>
              </div>
              <button
                onClick={() => setShowShiftModal(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
              {specialists.map((spec) => (
                <div key={spec.id} className="p-4 rounded-2xl bg-[#181824] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-500/40 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-400 bg-black shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={spec.photo || "/logo.jpg"} alt={spec.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-sm text-white">{spec.name}</h4>
                        <span className="text-[10px] text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          كرسي #{spec.chairNumber}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{spec.title}</p>
                      {spec.statusReason && (
                        <p className="text-[10px] text-amber-300/80 pt-0.5">
                          📌 {spec.statusReason}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Shift Status Selector Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleQuickShiftStatus(spec.id, "AVAILABLE", "حاضر وبدأ الوردية")}
                      className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition border ${
                        spec.status === "AVAILABLE"
                          ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-black"
                          : "bg-white/5 hover:bg-emerald-500/20 text-emerald-300 border-white/5"
                      }`}
                    >
                      بدأ الوردية 🟢
                    </button>
                    <button
                      onClick={() => handleQuickShiftStatus(spec.id, "WITH_CLIENT", "على الكرسي مع عميل")}
                      className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition border ${
                        spec.status === "WITH_CLIENT"
                          ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black"
                          : "bg-white/5 hover:bg-amber-500/20 text-amber-300 border-white/5"
                      }`}
                    >
                      على الكرسي 💺
                    </button>
                    <button
                      onClick={() => handleQuickShiftStatus(spec.id, "BREAK", "استراحة قصيرة")}
                      className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition border ${
                        spec.status === "BREAK"
                          ? "bg-sky-500 text-slate-950 border-sky-400 shadow-md font-black"
                          : "bg-white/5 hover:bg-sky-500/20 text-sky-300 border-white/5"
                      }`}
                    >
                      استراحة ☕
                    </button>
                    <button
                      onClick={() => handleQuickShiftStatus(spec.id, "OFF_DUTY", "انتهت الوردية ومشي")}
                      className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition border ${
                        spec.status === "OFF_DUTY"
                          ? "bg-slate-700 text-white border-slate-600 shadow-md font-black"
                          : "bg-white/5 hover:bg-slate-700 text-slate-300 border-white/5"
                      }`}
                    >
                      مشي / انتهى اليوم 🏠
                    </button>
                    <button
                      onClick={() => handleQuickShiftStatus(spec.id, "DAY_OFF", "إجازة رسمية")}
                      className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition border ${
                        spec.status === "DAY_OFF"
                          ? "bg-purple-600 text-white border-purple-500 shadow-md font-black"
                          : "bg-white/5 hover:bg-purple-600/30 text-purple-300 border-white/5"
                      }`}
                    >
                      إجازة 🏖️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowShiftModal(false)}
                className="py-2 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition"
              >
                إغلاق النافذة ✓
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          CASHIER ADMIT WALK-IN CUSTOMER TO CHAIR MODAL
         ───────────────────────────────────────────────────────────── */}
      {showAdmitModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-sans no-print" dir="rtl">
          <div className="relative w-full max-w-md bg-[#12121a] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">إجلاس زبون جديد على كرسي الحلاقة 💺</h3>
                  <p className="text-[11px] text-slate-400">توجيه العميل إلى كرسي متخصص محدد لبدء التذكرة آلياً</p>
                </div>
              </div>
              <button
                onClick={() => setShowAdmitModal(false)}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAdmitCustomerToChair} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">اسم العميل:</label>
                <input
                  type="text"
                  required
                  value={admitCustomerName}
                  onChange={(e) => setAdmitCustomerName(e.target.value)}
                  placeholder="مثال: محمد مصطفى"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">رقم هاتف العميل (اختياري للـ CRM والواتساب):</label>
                <input
                  type="text"
                  value={admitCustomerPhone}
                  onChange={(e) => setAdmitCustomerPhone(e.target.value)}
                  placeholder="010XXXXXXXX"
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">المتخصص والكرسي الموجه إليه:</label>
                <select
                  required
                  value={admitSpecialistId}
                  onChange={(e) => setAdmitSpecialistId(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-white font-bold"
                >
                  <option value="">-- اختر المتخصص --</option>
                  {specialists.map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.name} • كرسي #{spec.chairNumber} ({spec.status === "AVAILABLE" ? "متاح 🟢" : spec.status === "WITH_CLIENT" ? "مشغول 💺" : spec.status})
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                ⚡ بمجرد التوجيه، ستظهر التذكرة فوراً على شاشة المتخصص على الكرسي لتسجيل الخدمات والعروض وإنهائها للكاشير.
              </div>

              <button
                type="submit"
                disabled={admittingClient}
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                {admittingClient ? "جاري التوجيه..." : "توجيه الزبون للكرسي وبدء الحلاقة 🚀"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. THERMAL RECEIPT PRINT TEMPLATE (80MM)
         ───────────────────────────────────────────────────────────── */}
      {lastPrintedTicket && (
        <div id="thermal-receipt" className="hidden print:block text-black font-sans" dir="rtl">
          <div className="text-center space-y-1 border-b-2 border-black pb-2 mb-2">
            <h2 className="text-lg font-black tracking-wider">صالون حلاقة صدام VIP</h2>
            <p className="text-[11px] font-mono font-bold">SADDAM BARBER SHOP</p>
            <p className="text-[10px]">
              {lastPrintedTicket.branch?.name || "فرع حدائق القبة"}
            </p>
            <p className="text-[10px] font-mono">
              تاريخ: {new Date().toLocaleDateString("ar-EG")} • {new Date().toLocaleTimeString("ar-EG")}
            </p>
            <p className="text-[11px] font-black font-mono">
              إيصال رقم: #{lastPrintedTicket.ticketNumber}
            </p>
          </div>

          <div className="text-[11px] space-y-1 border-b border-black pb-2 mb-2">
            <div className="flex justify-between">
              <span>العميل:</span>
              <strong>{lastPrintedTicket.customerName}</strong>
            </div>
            <div className="flex justify-between">
              <span>المتخصص:</span>
              <strong>{lastPrintedTicket.specialist?.name} (ك #{lastPrintedTicket.chairNumber})</strong>
            </div>
            <div className="flex justify-between">
              <span>طريقة الدفع:</span>
              <strong>{lastPrintedTicket.paymentMethod}</strong>
            </div>
          </div>

          {/* Items */}
          <div className="text-[11px] space-y-1 border-b border-black pb-2 mb-2">
            <p className="font-black">تفاصيل الحساب:</p>
            {(() => {
              let s: any[] = [];
              try {
                s = typeof lastPrintedTicket.services === "string" ? JSON.parse(lastPrintedTicket.services) : lastPrintedTicket.services || [];
              } catch {}
              return s.map((it: any, idx: number) => (
                <div key={idx} className="flex justify-between">
                  <span>{it.nameAr}</span>
                  <span className="font-mono font-bold">{it.price} ج</span>
                </div>
              ));
            })()}

            {(() => {
              let r: any[] = [];
              try {
                r = typeof lastPrintedTicket.retailItems === "string" ? JSON.parse(lastPrintedTicket.retailItems) : lastPrintedTicket.retailItems || [];
              } catch {}
              return r.map((it: any, idx: number) => (
                <div key={`pr-${idx}`} className="flex justify-between">
                  <span>{it.nameAr} (×{it.qty})</span>
                  <span className="font-mono font-bold">{it.total} ج</span>
                </div>
              ));
            })()}
          </div>

          <div className="text-[12px] space-y-1 font-black border-b-2 border-black pb-2 mb-2">
            <div className="flex justify-between text-sm">
              <span>المبلغ الإجمالي المدفوع:</span>
              <span className="font-mono text-base">{lastPrintedTicket.finalAmount} ج.م</span>
            </div>
          </div>

          <div className="text-center text-[10px] space-y-1 pt-1">
            <p className="font-bold">شكراً لزيارتكم صالون صدام الملكي 👑</p>
            <p className="font-mono">الخط الساخن: 19888</p>
          </div>
        </div>
      )}
    </div>
  );
}
