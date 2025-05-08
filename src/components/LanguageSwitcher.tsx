// components/LangSwitcher.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { GlobalOutlined, CheckOutlined, DownOutlined } from "@ant-design/icons";

const LANGS = [
  { code: "uz", label: "O‘zbek" },
  { code: "ru", label: "Рус" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // build path minus existing locale
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((seg) => !LANGS.some((l) => l.code === seg));
  const queryString = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";

  const selectLang = (code: string) => {
    setOpen(false);
    router.replace(`/${code}/${segments.join("/")}${queryString}`);
  };

  const currentLabel = LANGS.find((l) => l.code === locale)?.label || locale;

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center bg-[#FEFCFB] border border-[#222222] text-[#222222] px-4 py-2 rounded-md focus:outline-none focus:border-[#FA7436]"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <GlobalOutlined className="mr-2 text-[#FA7436]" />
        <span className="flex-1 text-sm">{currentLabel}</span>
        <DownOutlined className="ml-2 text-[#222222]" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-[#222222] rounded-md shadow-lg z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => selectLang(l.code)}
              className={`w-full flex items-center px-4 py-2 text-sm ${
                l.code === locale
                  ? "bg-[#FA7436] text-white"
                  : "text-[#222222] hover:bg-[#F7F8FC]"
              }`}
            >
              {l.code === locale && (
                <CheckOutlined className="mr-2" style={{ color: "#fff" }} />
              )}
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
