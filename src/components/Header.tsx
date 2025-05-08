// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { PhoneOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LangSwitcher from "@/components/LanguageSwitcher";

interface NavItem {
  key: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/#about" },
  { key: "packages", href: "/#packages" },
  { key: "services", href: "/#services" },
  { key: "gallery", href: "/#gallery" },
  { key: "contact", href: "/#contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const queryString = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";

  useEffect(() => {
    setHash(window.location.hash || "");
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const currentAsPath = `${pathname}${queryString}${hash}`;

  return (
    <header className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md shadow-md z-30">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={128} height={34} priority />
          <span className="ml-3 text-2xl font-extrabold text-[#FA7436] tracking-tight">
            TRAVEL AGENTS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(({ key, href }) => {
            const isActive =
              currentAsPath === href || currentAsPath.startsWith(href + "/");
            return (
              <Link
                key={key}
                href={href}
                className={`
                  relative px-1 py-2 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-[#FA7436]"
                      : "text-[#222222] hover:text-[#FA7436]"
                  }
                `}
              >
                {t(key)}
                {/* underline effect */}
                <span
                  className={`
                    absolute inset-x-0 -bottom-1 h-0.5 bg-[#FA7436]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <LangSwitcher locale={locale!} />

          <div className="hidden sm:flex items-center space-x-2">
            <PhoneOutlined className="text-[#FA7436] text-lg" />
            <span className="text-[#222222] font-medium">+111 025 8211</span>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#FEFCFB] focus:outline-none focus:ring-2 focus:ring-[#FA7436]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <CloseOutlined className="text-[#222222] text-2xl" />
            ) : (
              <MenuOutlined className="text-[#222222] text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20">
          <aside
            className="absolute top-0 right-0 w-64 h-full bg-white p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile" className="flex flex-col space-y-4">
              {NAV_ITEMS.map(({ key, href }) => {
                const isActive =
                  currentAsPath === href ||
                  currentAsPath.startsWith(href + "/");
                return (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      px-2 py-2 text-base font-medium rounded-md transition-colors
                      ${
                        isActive
                          ? "bg-[#FEFCFB] text-[#FA7436]"
                          : "text-[#222222] hover:bg-[#F7F8FC]"
                      }
                    `}
                  >
                    {t(key)}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6">
              <LangSwitcher locale={locale!} />
            </div>

            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-[#FA7436] text-lg" />
                <span className="text-[#222222] font-medium">
                  +111 025 8211
                </span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
