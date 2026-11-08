"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, User, MapPin, Clock, Check, CheckCheck } from "lucide-react";

interface CustomerChatWidgetProps {
  customer?: any;
  branches?: any[];
  selectedBranchId?: string;
}

export default function CustomerChatWidget({
  customer,
  branches = [],
  selectedBranchId,
}: CustomerChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [targetBranchId, setTargetBranchId] = useState<string>("");
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize guest info from localStorage
  useEffect(() => {
    try {
      const savedName = localStorage.getItem("saddam_chat_name") || "";
      const savedPhone = localStorage.getItem("saddam_chat_phone") || "";
      if (savedName) setGuestName(savedName);
      if (savedPhone) setGuestPhone(savedPhone);
    } catch {}
  }, []);

  const activePhone = customer?.phone || guestPhone;
  const activeName = customer?.name || guestName || "عميل VIP";

  // Polling messages
  useEffect(() => {
    if (!activePhone) return;

    let isMounted = true;
    const fetchChat = async () => {
      try {
        const res = await fetch(`/api/chat?customerPhone=${encodeURIComponent(activePhone)}`);
        const data = await res.json();
        if (data.success && isMounted) {
          setMessages(data.messages || []);
          if (!isOpen) {
            const unread = (data.messages || []).filter(
              (m: any) => m.sender === "SALON" && !m.isRead
            ).length;
            setUnreadCount(unread);
          } else {
            setUnreadCount(0);
          }
        }
      } catch {}
    };

    fetchChat();
    const interval = setInterval(fetchChat, 3000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [activePhone, isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || newMessage).trim();
    if (!text) return;

    if (!activePhone) {
      alert("يرجى إدخال اسمك ورقم هاتفك أولاً لبدء المحادثة المباشرة مع الصالون");
      return;
    }

    try {
      setSending(true);
      // Save guest info
      if (!customer) {
        localStorage.setItem("saddam_chat_name", guestName);
        localStorage.setItem("saddam_chat_phone", guestPhone);
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "CUSTOMER",
          senderName: activeName,
          message: text,
          customerPhone: activePhone,
          customerId: customer?.id || null,
          branchId: targetBranchId || selectedBranchId || null,
        }),
      });

      const data = await res.json();
      if (data.success && data.chatMessage) {
        setMessages((prev) => [...prev, data.chatMessage]);
        setNewMessage("");
      }
    } catch {
      alert("تعذر إرسال الرسالة، يرجى المحاولة مرة أخرى");
    } finally {
      setSending(false);
    }
  };

  const quickChips = [
    "سؤال عن عروض العريس الملكية 👑",
    "تأكيد موعد الحجز ومكاني في الدور 📅",
    "عنوان الفرع وأقرب علامة مميزة 📍",
    "مواعيد العمل المتاحة اليوم ⏰",
  ];

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setUnreadCount(0);
          }}
          className="fixed bottom-5 left-5 z-50 py-3 px-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition flex items-center gap-2 border-2 border-amber-300"
          dir="rtl"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-600 text-white font-mono text-[10px] font-bold flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </div>
          <span>محادثة مباشرة مع الصالون 💬</span>
        </button>
      )}

      {/* Chat Drawer / Popup Modal */}
      {isOpen && (
        <div
          className="fixed bottom-5 left-5 z-50 w-full max-w-sm sm:max-w-md h-[560px] max-h-[85vh] bg-[#101018] border-2 border-amber-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100 font-sans animate-fade-in"
          dir="rtl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#181824] via-[#12121c] to-[#181824] p-3.5 border-b border-amber-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl overflow-hidden border border-amber-400 shadow-md bg-black shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-black text-xs sm:text-sm text-amber-400">
                    خدمة عملاء صالون صدام
                  </h4>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  متصلون لخدمتك فوراً (حدائق القبة & مدينة نصر)
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Guest Info Form (if not logged in and no phone saved) */}
          {!customer && !guestPhone && (
            <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 space-y-2 text-xs">
              <p className="font-bold text-amber-300">
                برجاء إدخال بياناتك للتواصل المباشر مع إدارة الصالون:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="اسمك الكريم"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="py-1.5 px-2.5 rounded-xl bg-black/60 border border-amber-500/30 text-white text-xs focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف / الواتساب"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="py-1.5 px-2.5 rounded-xl bg-black/60 border border-amber-500/30 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}

          {/* Quick Action Chips */}
          <div className="p-2 border-b border-white/5 flex gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="py-1 px-2.5 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-400/40 text-[10px] text-slate-300 hover:text-amber-300 whitespace-nowrap transition"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0a0f]">
            {/* Welcome Message */}
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">
                👑
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-[#161622] border border-amber-500/30 p-3 text-xs text-slate-200 space-y-1 shadow-md">
                <p className="font-bold text-amber-400 text-[11px]">صالون حلاقة صدام VIP</p>
                <p className="leading-relaxed">
                  أهلاً بك يا فندم! سعداء بخدمتك في صالون صدام. يمكنك الاستفسار عن باكدجات العرسان
                  ومواعيد الحجز أو طلب أي تعديل وسيقوم الفريق بالرد فوراً.
                </p>
                <span className="text-[9px] text-slate-500 block font-mono text-left">الآن</span>
              </div>
            </div>

            {/* Message List */}
            {messages.map((m) => {
              const isMe = m.sender === "CUSTOMER";
              return (
                <div
                  key={m.id}
                  className={`flex gap-2 ${isMe ? "justify-end" : "justify-start"}`}
                >
                  {!isMe && (
                    <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">
                      👑
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-xs space-y-1 shadow-md ${
                      isMe
                        ? "bg-amber-500 text-slate-950 rounded-tl-none font-medium"
                        : "bg-[#181826] border border-amber-500/30 text-slate-200 rounded-tr-none"
                    }`}
                  >
                    {!isMe && (
                      <p className="font-black text-amber-400 text-[10px]">{m.senderName}</p>
                    )}
                    <p className="leading-relaxed whitespace-pre-wrap">{m.message}</p>
                    <div className="flex items-center justify-between gap-2 pt-0.5 text-[9px] opacity-70 font-mono">
                      <span>
                        {new Date(m.createdAt).toLocaleTimeString("ar-EG", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {isMe && <CheckCheck className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#12121a] border-t border-amber-500/30 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="اكتب استفسارك أو رسالتك للصالون..."
              className="flex-1 py-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={sending || !newMessage.trim()}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1.5 disabled:opacity-40 shadow-lg shadow-amber-500/20"
            >
              <Send className="w-3.5 h-3.5 rotate-180" />
              <span>إرسال</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
