// components/Header.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { PhoneOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
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

const Header: React.FC = () => {
  const t = useTranslations("nav");
  const locale = useLocale()!;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hash, setHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Rebuild the full current path + query + hash
  const queryString = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const currentPath = `${pathname}${queryString}${hash}`;

  // Sync hash changes
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((open) => !open);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header className="fixed  inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-3xl font-extrabold tracking-tight text-[#222222]">
            MirStar
          </span>
          <span className="text-3xl font-extrabold tracking-tight text-[#FA7436]">
            Travel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 gap-4">
          {NAV_ITEMS.map(({ key, href }) => {
            const isActive =
              currentPath === href || currentPath.startsWith(href + "/");
            return (
              <Link
                key={key}
                href={href}
                className="relative group px-1 py-2 font-medium text-[#222222] hover:text-[#FA7436] transition-colors"
              >
                {t(key)}
                {/* thick animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] bg-[#FA7436]
                    transition-[width] duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <LangSwitcher locale={locale} />

          {/* Mobile toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-full bg-white hover:bg-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-[#FA7436]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <CloseOutlined className="text-2xl text-[#222222]" />
            ) : (
              <MenuOutlined className="text-2xl text-[#222222]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closeMobile}
          >
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <nav className="mt-4 flex-1 flex flex-col space-y-4">
                {NAV_ITEMS.map(({ key, href }) => {
                  const isActive =
                    currentPath === href || currentPath.startsWith(href + "/");
                  return (
                    <Link
                      key={key}
                      href={href}
                      onClick={closeMobile}
                      className={`
                        block rounded-lg px-4 py-3 font-medium transition
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
              <div className="pt-4 border-t border-gray-200">
                <LangSwitcher locale={locale} />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Header);
