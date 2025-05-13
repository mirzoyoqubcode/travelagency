// components/HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useTranslations } from "next-intl";

const images = [
  "https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Dubai-UAE-1244x700.jpg",
  "https://www.besthouseturkey.com/wp-content/uploads/2023/10/istanbul.jpg",
  "https://sondoongcave.info/wp-content/uploads/2022/03/vhl.png",
  "https://d32ex7notsszg6.cloudfront.net/img/content/37415_Antalya%20in%20Turkey.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/v1517482046/AdvNation/ANN_DES70/ann_bottom_Bali_ORIeFz.jpg",
  "https://www.onthegotours.com/repository/Montenegro-846921716883743.jpg",
  "https://www.gokite.travel/wp-content/uploads/2024/07/Discovering-the-Beauty-of-Baku-Top-Attractions-in-Azerbaijans-Capital.webp",
  "https://aniq.uz/photos/news/td5TsdEfw41tK3i.png",
  "https://trvlland.com/wp-content/uploads/2022/09/uzbekistan_tashkent-3-1024x663.jpg",
];

export default function HeroSection() {
  const t = useTranslations("heroSection");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`
            absolute inset-0 object-cover w-full h-full
            transition-opacity duration-1000 ease-in-out
            ${i === idx ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main content */}
      <div className="relative z-10 flex container px-6 md:px-0 h-full">
        {/* Left: Motto */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            {t("hero.title")}
            <br />
            <span className="text-[#FA7436]">{t("hero.highlight")}</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Right: Company Info */}
        <div className="w-1/2 flex items-center justify-center px-8 lg:px-16">
          <div className="bg-black/60 backdrop-blur-lg rounded-xl p-8 text-gray-100 max-w-sm space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              {t("company.name")}
            </h2>

            <div className="flex items-center gap-3">
              <EnvironmentOutlined className="text-xl text-[#FA7436]" />
              <span>{t("company.address")}</span>
            </div>

            <div className="flex items-center gap-3">
              <PhoneOutlined className="text-xl text-[#FA7436]" />
              <a
                href={`tel:${t("company.phone")}`}
                className="hover:text-white transition"
              >
                {t("company.phone")}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MailOutlined className="text-xl text-[#FA7436]" />
              <a
                href={`mailto:${t("company.email")}`}
                className="hover:text-white transition"
              >
                {t("company.email")}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-600">
              {[FacebookFilled, TwitterOutlined, InstagramOutlined].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-white hover:text-[#FA7436] transition"
                  >
                    <Icon className="text-2xl" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
