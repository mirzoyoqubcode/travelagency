import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const baseUrl = "https://mirstartravel.uz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  alternates: {
    canonical: baseUrl,
    languages: {
      "uz-UZ": `${baseUrl}/uz`,
      "ru-RU": `${baseUrl}/ru`,
      "en-US": `${baseUrl}/en`,
    },
  },
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mir Star Sayohat Agentligi",
      },
    ],
  },

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mir Star Travel Agency",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
            }),
          }}
        />
      </head>
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
