import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegistrar } from "@/components/PwaBootAndPushButton";

export const metadata: Metadata = {
  title: "صالون حلاقة صدام VIP | Saddam Barber Shop",
  description: "صالون حلاقة صدام - الفخامة والأناقة وتجربة الحلاقة الملكية بفروع حدائق القبة ومدينة نصر",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0e] text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        <PwaRegistrar />
        {children}
      </body>
    </html>
  );
}
