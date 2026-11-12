"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  User,
  KeyRound,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Scissors,
  CheckCircle2,
} from "lucide-react";

export default function StaffLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("برجاء إدخال اسم المستخدم وكلمة المرور");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim().toLowerCase(),
          password: password.trim(),
          pin: pin.trim(),
        }),
      });

      const data = await res.json();
      if (data.success && data.user) {
        localStorage.setItem("saddam_staff_user", JSON.stringify(data.user));

        // Route based on role
        if (
          data.user.role === "owner" ||
          data.user.role === "general_manager" ||
          data.user.role === "manager"
        ) {
          router.push("/admin");
        } else if (data.user.role === "coordinator") {
          router.push("/coordinator");
        } else if (data.user.role === "cashier") {
          router.push("/pos");
        } else if (data.user.role === "specialist") {
          router.push("/chair");
        } else {
          router.push("/admin");
        }
      } else {
        setError(data.error || "بيانات الدخول غير صحيحة");
      }
    } catch {
      setError("تعذر الاتصال بالخادم، يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0e] text-slate-100 flex flex-col items-center justify-center p-4 font-sans selection:bg-amber-500 selection:text-black"
      dir="rtl"
    >
      {/* Background Gold Ambient Glow */}
      <div className="absolute w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-md bg-[#12121a]/95 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Logo and Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 bg-black mx-auto shadow-lg shadow-amber-500/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-amber-400">
              دخول طاقم العمل والإدارة
            </h1>
            <p className="text-xs text-amber-200/60 font-mono font-bold uppercase tracking-wider">
              SADDAM BARBER SHOP • STAFF PORTAL
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>اسم المستخدم:</span>
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="مثال: maestro أو coordinator-qobba أو cashier-qobba"
              className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>كلمة المرور:</span>
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••••"
              className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>رمز الـ PIN السري:</span>
            </label>
            <input
              type="password"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••"
              className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-center text-xs text-amber-400 font-mono font-black focus:outline-none focus:border-amber-400 tracking-widest"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{loading ? "جارٍ التحقق..." : "تسجيل الدخول للمنظومة 🔒"}</span>
          </button>
        </form>

        {/* Back to Homepage */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-amber-400 transition inline-flex items-center gap-1 font-bold"
          >
            <span>العودة لصفحة الحجز الرئيسية</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
