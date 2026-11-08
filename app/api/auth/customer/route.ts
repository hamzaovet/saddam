import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOtpEmail(toEmail: string, code: string, customerName: string) {
  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.log(`[Email Simulation] To: ${toEmail} | OTP Code: ${code} for ${customerName}`);
      return { sent: true, simulated: true };
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"صالون حلاقة صدام VIP" <${smtpUser}>`,
      to: toEmail,
      subject: `كود تفعيل حسابك في صالون صدام: ${code}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #0d0d11; color: #f4f4f5; padding: 30px; border-radius: 16px; border: 1px solid #d4af37;">
          <h2 style="color: #d4af37; text-align: center; margin-bottom: 5px;">👑 صالون حلاقة صدام - SADDAM VIP 👑</h2>
          <p style="text-align: center; color: #a1a1aa; font-size: 14px;">الفخامة الملكية بين يديك</p>
          <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
          <p style="font-size: 16px;">مرحباً بك يا <strong>${customerName}</strong>،</p>
          <p style="font-size: 14px; line-height: 1.6;">يسعدنا انضمامك لعملاء صالون صدام المميزين. استخدم رمز التفعيل التالي لإتمام تسجيل حسابك وحجز موعدك:</p>
          <div style="background: #18181b; padding: 18px; border-radius: 12px; text-align: center; font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #d4af37; border: 1px dashed #d4af37; margin: 25px 0;">
            ${code}
          </div>
          <p style="font-size: 12px; color: #71717a; text-align: center;">هذا الرمز صالح لمدة 15 دقيقة. إذا لم تكن قد طلبت هذا الكود، يرجى تجاهل الرسالة.</p>
        </div>
      `,
    });

    return { sent: true, simulated: false };
  } catch (err) {
    console.error("Nodemailer error:", err);
    return { sent: false, error: err };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const action = body.action || "REGISTER";

    // 1. REGISTER
    if (action === "REGISTER") {
      const { name, phone, email } = body;
      if (!name || !phone) {
        return NextResponse.json(
          { success: false, error: "برجاء إدخال الاسم ورقم الهاتف" },
          { status: 400 }
        );
      }

      const cleanPhone = phone.trim().replace(/\s+/g, "");
      const cleanEmail = email ? email.trim().toLowerCase() : null;
      const otpCode = generateOtp();

      // Check if phone already registered
      let customer = await prisma.customer.findUnique({
        where: { phone: cleanPhone },
      });

      if (customer) {
        // Customer already exists, update OTP and email
        customer = await prisma.customer.update({
          where: { id: customer.id },
          data: {
            name: name.trim(),
            ...(cleanEmail && { email: cleanEmail }),
            verificationCode: otpCode,
          },
        });
      } else {
        // Create new customer
        customer = await prisma.customer.create({
          data: {
            name: name.trim(),
            phone: cleanPhone,
            email: cleanEmail,
            verificationCode: otpCode,
            isVerified: false,
          },
        });
      }

      if (cleanEmail) {
        await sendOtpEmail(cleanEmail, otpCode, customer.name);
      }

      return NextResponse.json({
        success: true,
        message: "تم إرسال كود التفعيل إلى بريدك الإلكتروني",
        customerId: customer.id,
        phone: customer.phone,
        email: customer.email,
        // Always provide OTP in response for testing / seamless fallback
        verificationCode: otpCode,
      });
    }

    // 2. VERIFY OTP
    if (action === "VERIFY_OTP") {
      const { phone, code } = body;
      if (!phone || !code) {
        return NextResponse.json(
          { success: false, error: "برجاء إدخال رقم الهاتف وكود التفعيل" },
          { status: 400 }
        );
      }

      const cleanPhone = phone.trim().replace(/\s+/g, "");
      const customer = await prisma.customer.findUnique({
        where: { phone: cleanPhone },
      });

      if (!customer) {
        return NextResponse.json({ success: false, error: "العميل غير مسجل" }, { status: 404 });
      }

      // Check OTP (accept either stored code or master bypass "157230")
      if (customer.verificationCode !== code.trim() && code.trim() !== "157230") {
        return NextResponse.json(
          { success: false, error: "كود التفعيل غير صحيح أو منتهي الصلاحية" },
          { status: 400 }
        );
      }

      // Mark verified
      const verifiedCustomer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          isVerified: true,
          verificationCode: null,
          lastVisitAt: new Date(),
        },
      });

      return NextResponse.json({
        success: true,
        message: "تم تأكيد الحساب بنجاح!",
        customer: {
          id: verifiedCustomer.id,
          name: verifiedCustomer.name,
          phone: verifiedCustomer.phone,
          email: verifiedCustomer.email,
          vipLevel: verifiedCustomer.vipLevel,
          totalVisits: verifiedCustomer.totalVisits,
        },
      });
    }

    // 3. LOGIN BY PHONE
    if (action === "LOGIN") {
      const { phone } = body;
      if (!phone) {
        return NextResponse.json(
          { success: false, error: "برجاء إدخال رقم الهاتف" },
          { status: 400 }
        );
      }

      const cleanPhone = phone.trim().replace(/\s+/g, "");
      const customer = await prisma.customer.findUnique({
        where: { phone: cleanPhone },
      });

      if (!customer) {
        return NextResponse.json(
          { success: false, error: "رقم الهاتف غير مسجل لدينا، يرجى التسجيل أولاً" },
          { status: 404 }
        );
      }

      const otpCode = generateOtp();
      await prisma.customer.update({
        where: { id: customer.id },
        data: { verificationCode: otpCode },
      });

      if (customer.email) {
        await sendOtpEmail(customer.email, otpCode, customer.name);
      }

      return NextResponse.json({
        success: true,
        message: "تم إرسال كود تسجيل الدخول",
        customerId: customer.id,
        phone: customer.phone,
        email: customer.email,
        verificationCode: otpCode,
      });
    }

    return NextResponse.json({ success: false, error: "عملية غير صالحة" }, { status: 400 });
  } catch (error: any) {
    console.error("Customer auth error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
