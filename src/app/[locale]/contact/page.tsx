// app/[locale]/contact/page.tsx
"use client";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aloqa – Mir Star Sayohat Agentligi",
  description:
    "Biz bilan bog‘laning: manzil, telefon raqam va elektron pochta.",
};

const ACCENT = "#FA7436";

export default function ContactPage() {
  const t = useTranslations("contactUs");

  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2">
        {/* Left column – info */}
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#222]">
              {t.rich("title", {
                accent: (chunks) => (
                  <span style={{ color: ACCENT }}>{chunks}</span>
                ),
              })}
            </h1>
            <p className="max-w-md text-[#555]">{t("description")}</p>
          </header>

          <ul className="space-y-6 text-[#444] text-sm">
            <li className="flex items-start gap-3">
              <EnvironmentOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>{t("address")}</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>{t("phone")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MailOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>{t("email")}</span>
            </li>
          </ul>
        </div>

        {/* Right column – form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 bg-white p-10 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#222]">
                {t("labelName")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("placeholderName")}
                className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#222]"
              >
                {t("labelEmail")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("placeholderEmail")}
                className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#222]"
            >
              {t("labelMessage")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={t("placeholderMessage")}
              className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: ACCENT }}
            className="inline-block w-full rounded-md py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </section>
  );
}
