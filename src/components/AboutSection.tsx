// components/AboutSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("aboutSection");

  return (
    <section id="about" className="bg-[#F7F8FC] py-12 md:py-20">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          {/* Left image */}
          <div className="mx-auto w-full max-w-md">
            <Image
              src="/about.png"
              alt={t("label")}
              width={700}
              height={500}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-[#FA7436]">
              {t("label")}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] leading-tight">
              {t("headline")}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#666666] whitespace-pre-line">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div>
                <p className="text-2xl font-extrabold text-[#FA7436]">
                  {t("stats.customers.value")}
                </p>
                <p className="text-sm text-[#666666]">
                  {t("stats.customers.label")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#FA7436]">
                  {t("stats.places.value")}
                </p>
                <p className="text-sm text-[#666666]">
                  {t("stats.places.label")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#FA7436]">
                  {t("stats.journeys.value")}
                </p>
                <p className="text-sm text-[#666666]">
                  {t("stats.journeys.label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
