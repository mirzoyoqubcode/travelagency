// app/[locale]/page.tsx
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import Consultation from "@/components/Consultation";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToursGrid from "@/components/Tour/ToursGrid";

export const metadata: Metadata = {
  title: "Mir Star Sayohat Agentligi — Bosh Sahifa",
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
    canonical: "https://mirstartravel.uz/",
  },
  openGraph: {
    title: "Mir Star Sayohat Agentligi",
    description:
      "Tanlangan global turlar, qulay narxlar va shaxsiylashtirilgan sayohat paketlari.",
    url: "https://mirstartravel.uz/",
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
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ToursGrid />
      <ServicesSection />
      <PopularDestinations />
      <TestimonialsSection />
      <Consultation />
    </div>
  );
}
