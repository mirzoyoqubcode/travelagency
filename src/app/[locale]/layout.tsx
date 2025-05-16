// app/[locale]/layout.tsx
import type { Metadata } from "next";
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
  title: "Mir Star Travel Agency — Unforgettable Adventures",
  description:
    "Book personalized global tours at great prices with Mir Star Travel Agency.",
  // point search engines at your canonical URL
  alternates: {
    canonical: baseUrl,
  },
  // allow indexing + following
  robots: {
    index: true,
    follow: true,
  },
  // simple Open Graph so shares look nice
  openGraph: {
    title: "Mir Star Travel Agency — Unforgettable Adventures",
    description:
      "Book personalized global tours at great prices with Mir Star Travel Agency.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mir Star Travel Agency",
      },
    ],
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
