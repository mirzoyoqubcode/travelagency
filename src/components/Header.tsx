// components/Header.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import LangSwitcher from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";

/** ----------------------------- Types ----------------------------- */
interface NavItem {
  key: string; // translation key
  href: string; // pathname or hash
}

/** ----------------------------- Component ----------------------------- */
const Header: React.FC = () => {
  /* ---- Next‑intl helpers ---- */
  const locale = useLocale();
  const t = useTranslations("nav");

  /* ---- Router helpers ---- */
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ---- State ---- */
  const [hash, setHash] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  /* ---- Compute nav list once per locale ---- */
  const NAV_ITEMS: NavItem[] = useMemo(
    () => [
      { key: "home", href: "/" },
      { key: "about", href: "/#about" },
      { key: "packages", href: "/#packages" },
      { key: "services", href: "/#services" },
      { key: "gallery", href: "/#gallery" },
      { key: "contact", href: `/${locale}/contact` },
    ],
    [locale]
  );

  /* ---- Build current URL (path + query + hash) ---- */
  const queryString = searchParams.toString() ? `?${searchParams}` : "";
  const currentPath = `${pathname}${queryString}${hash}`;

  /* ---- Keep local hash state in sync ---- */
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash(); // initial
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  /* ---- Handlers ---- */
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  /* Close mobile menu on route change */
  useEffect(() => {
    closeMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* ----------------------------- Render ----------------------------- */
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* ---------- Logo ---------- */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-3xl font-extrabold tracking-tight text-[#222]">
            MirStar
          </span>
          <span className="text-3xl font-extrabold tracking-tight text-[#FA7436]">
            Travel
          </span>
        </Link>

        {/* ---------- Desktop Nav ---------- */}
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
                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#FA7436] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ---------- Right controls ---------- */}
        <div className="flex items-center gap-4">
          <LangSwitcher locale={locale} />

          {/* Mobile toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden rounded-full p-2 bg-white shadow focus:outline-none focus:ring-2 focus:ring-[#FA7436] hover:bg-gray-100"
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

      {/* ---------- Mobile Nav ---------- */}
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
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mt-4 flex flex-col gap-3 flex-1">
                {NAV_ITEMS.map(({ key, href }) => {
                  const isActive =
                    currentPath === href || currentPath.startsWith(`${href}/`);
                  return (
                    <Link
                      key={key}
                      href={href}
                      onClick={closeMobile}
                      className={`rounded-lg px-4 py-3 font-medium transition-colors ${
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
    </header>
  );
};

export default React.memo(Header);
