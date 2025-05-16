// components/PaymentMethods.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PaymentMethods() {
  const t = useTranslations("payment");

  return (
    <section className="container py-16 bg-gray-50">
      {/* Section header */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
        {t("title")}
      </h2>
      <p className="text-center text-gray-500 mb-10">{t("subtitle")}</p>

      <div className="flex items-center justify-center">
        {/* ───────────── Click Card ───────────── */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden min-w-md">
          <div className="h-1 bg-gradient-to-r from-green-500 to-green-300" />
          <div className="p-6 flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {t("click.title")}
            </h3>
            <Image
              src="/click-qr.jpg"
              alt={t("click.alt")}
              width={180}
              height={180}
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">{t("click.instructions")}</p>
            <div className="flex items-center w-full mb-4">
              <span className="flex-grow border-t border-gray-200" />
              <span className="px-3 text-gray-400">{t("or")}</span>
              <span className="flex-grow border-t border-gray-200" />
            </div>
            <Link
              href={t("click.link")}
              className="inline-block bg-green-600 text-white font-medium py-2 px-6 rounded-md hover:bg-green-700 transition"
            >
              {t("click.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
