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

const bgImages = [
  "https://wallpapercat.com/w/full/0/6/9/274793-2560x1600-desktop-hd-dubai-background-image.jpg",
  "https://pixelz.cc/wp-content/uploads/2023/09/blue-mosque-istanbul-turkey-uhd-4k-wallpaper.jpg",
  "https://images2.alphacoders.com/878/878006.jpg",
  "https://images.pexels.com/photos/3732500/pexels-photo-3732500.jpeg?cs=srgb&dl=pexels-erik-karits-2093459-3732500.jpg&fm=jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/v1517482046/AdvNation/ANN_DES70/ann_bottom_Bali_ORIeFz.jpg",
  "https://www.onthegotours.com/repository/Montenegro-846921716883743.jpg",
  "https://w0.peakpx.com/wallpaper/903/970/HD-wallpaper-baku-azerbaijan-baku-azerbaijan-cities-former-soviet-states.jpg",
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c4/32/55.jpg",
  "https://i0.wp.com/www.goldenterratravel.com/wp-content/uploads/2022/01/tashkent.jpg?fit=985%2C635&ssl=1",
];

export default function HeroSection() {
  const t = useTranslations("heroSection");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % bgImages.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  // Build slides using the 'slides' namespace, not 'hero.slides'
  const slides = bgImages.map((src, i) => ({
    src,
    title: t(`slides.${i}.title`),
    highlight: t(`slides.${i}.highlight`),
    subtitle: t(`slides.${i}.subtitle`),
  }));

  const { title, highlight, subtitle } = slides[idx];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Background */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.title}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Foreground Content */}
      <div className="relative z-10 h-full container mx-auto flex flex-col-reverse md:flex-row items-center px-4 xl:px-0">
        {/* Text Block */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {title}
            <br />
            <span className="text-[#FA7436]">{highlight}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0">
            {subtitle}
          </p>
        </div>

        {/* Company Info Card */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="bg-black/60 backdrop-blur-lg rounded-xl p-6 sm:p-8 text-gray-100 max-w-md w-full space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              {t("company.name")}
            </h2>

            <div className="flex items-center gap-2">
              <EnvironmentOutlined className="text-lg sm:text-xl text-[#FA7436]" />
              <span className="text-sm sm:text-base">
                {t("company.address")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <PhoneOutlined className="text-lg sm:text-xl text-[#FA7436]" />
              <a
                href={`tel:${t("company.phone")}`}
                className="text-sm sm:text-base hover:text-white transition"
              >
                {t("company.phone")}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MailOutlined className="text-lg sm:text-xl text-[#FA7436]" />
              <a
                href={`mailto:${t("company.email")}`}
                className="text-sm sm:text-base hover:text-white transition"
              >
                {t("company.email")}
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 border-t border-gray-600">
              {[FacebookFilled, TwitterOutlined, InstagramOutlined].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-white hover:text-[#FA7436] transition text-xl sm:text-2xl"
                  >
                    <Icon />
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
