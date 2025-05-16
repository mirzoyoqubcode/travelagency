// components/Header.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import LangSwitcher from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface NavItem {
  key: string; // translation key
  href: string; // full href, including locale
}

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // keep track of the hash so we can close on hash‐only navigation
  const [hash, setHash] = useState<string>("");
  // mobile menu open state
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((open) => !open), []);

  // update hash and auto‐close mobile menu on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      closeMobile();
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [closeMobile]);

  // also close on any full route change
  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  // the six nav items
  const NAV_ITEMS: NavItem[] = useMemo(
    () => [
      { key: "home", href: `/` },
      { key: "about", href: `/#about` },
      { key: "packages", href: `/#packages` },
      { key: "services", href: `/#services` },
      {
        key: "hotels",
        href: "https://www.booking.com/",
      },
      { key: "contact", href: `/contact` },
    ],
    []
  );

  // include any query string and hash to detect the active link
  const qs = searchParams.toString() ? `?${searchParams}` : "";
  const currentPath = `${pathname}${qs}${hash}`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-22 items-center justify-between px-4 xl:px-0">
          {/* Logo */}
          <Link href={`/`} className="flex items-center space-x-1">
            <Image src="/logo.png" alt="Logo" width={80} height={60} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {NAV_ITEMS.map(({ key, href }) => {
              const isActive =
                currentPath === href || currentPath.startsWith(`${href}/`);
              return (
                <Link
                  key={key}
                  href={href}
                  className="relative group px-1 py-2 font-medium text-[#222] transition-colors hover:text-[#FA7436]"
                >
                  {t(key)}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#FA7436] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <LangSwitcher locale={locale} />
            <button
              onClick={toggleMobile}
              className="md:hidden  p-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA7436] hover:bg-gray-100"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <CloseOutlined className="text-xl text-[#222]" />
              ) : (
                <MenuOutlined className="text-xl text-[#222]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
          >
            <motion.aside
              key="panel"
              className="absolute top-0 pt-25 right-0 z-50 h-full w-72 bg-white shadow-xl p-6 flex flex-col items-center justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <nav className="mt-4 flex flex-col gap-3 flex-1">
                {NAV_ITEMS.map(({ key, href }) => {
                  const isActive =
                    currentPath === href || currentPath.startsWith(`${href}/`);
                  return (
                    <Link
                      href={href}
                      key={key}
                      onClick={closeMobile}
                      className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                        isActive
                          ? "bg-[#FEF9F6] text-[#FA7436]"
                          : "text-[#222] hover:bg-[#F7F8FC]"
                      }`}
                    >
                      {t(key)}
                    </Link>
                  );
                })}
              </nav>
              <div className="border-t border-gray-200 pt-4">
                <LangSwitcher locale={locale} />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Header);
