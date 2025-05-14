// app/[locale]/layout.tsx
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const baseUrl = "https://mirstartravel.uz"; // ← Замените на ваш реальный домен

export const metadata: Metadata = {
  title: "Mir Star Sayohat Agentligi — Unutilmas Sarguzashtlar",
  description:
    "Mir Star Sayohat Agentligi: Tanlangan global turlar, qulay narxlar va shaxsiylashtirilgan xizmatlar bilan unutilmas sayohat reja qiling!",
  keywords: [
    "sayohat",
    "turlar",
    "ta’til",
    "sayyohlik agentligi",
    "bron qilish",
    "chegirmalar",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  } as Viewport,

  // Open Graph мета-теги для социальных сетей
  openGraph: {
    title: "Mir Star Sayohat Agentligi",
    description:
      "Tanlangan global turlar, qulay narxlar va shaxsiylashtirilgan sayohat paketlari.",
    url: baseUrl,
    siteName: "Mir Star Travel",
    type: "website",
    locale: "uz-UZ",
    images: [
      {
        url: `/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mir Star Sayohat Agentligi",
      },
    ],
  },

  // Управление индексацией
  robots: {
    index: true,
    follow: true,
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;
  const messages = await getMessages({ locale }).catch(() => ({}));

  return (
    <html lang={locale} className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
