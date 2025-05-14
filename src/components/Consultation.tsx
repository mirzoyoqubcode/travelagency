"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { MessageOutlined } from "@ant-design/icons";

export default function Consultation() {
  const t = useTranslations("Consultation");

  return (
    <section className="py-20">
      <div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
        <MessageOutlined className="text-bg-[#FA7436] text-5xl mb-4" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">{t("description")}</p>
        <a
          href={t("telegramLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#FA7436] text-white text-lg font-medium rounded-full hover:bg-[#FA7436] transition"
        >
          <MessageOutlined className="mr-2 text-xl" />
          {t("button")}
        </a>
      </div>
    </section>
  );
}
