// components/ServicesSection.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  RocketOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Link } from "@/i18n/navigation";

const ACCENT = "#FA7436";

export default function ServicesSection() {
  const t = useTranslations("Services");

  const services: { icon: React.ReactNode; key: string }[] = [
    { icon: <RocketOutlined />, key: "flight" },
    { icon: <HomeOutlined />, key: "accommodation" },
    { icon: <EnvironmentOutlined />, key: "tour" },
    { icon: <CreditCardOutlined />, key: "payment" },
  ];

  return (
    <section id="services" className="bg-[#F9F4F2] py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222] mb-4">
          {t("title")}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-[#555]">{t("subtitle")}</p>
        <Link href="https://www.booking.com/">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map(({ icon, key }) => (
              <div
                key={key}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:shadow-lg transition"
              >
                <span
                  className="flex items-center justify-center w-16 h-16 rounded-full text-2xl"
                  style={{ backgroundColor: ACCENT + "22", color: ACCENT }}
                >
                  {icon}
                </span>
                <h3 className="text-lg font-semibold text-[#222]">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {t(`${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
