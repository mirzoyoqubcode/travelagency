// components/LangSwitcher.tsx
"use client";

import React, { useTransition } from "react";
import { Select, Skeleton } from "antd";
import { CheckOutlined, GlobalOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

const LANGS = [
  { code: "uz", label: "O‘zbek" },
  { code: "ru", label: "Рус" },
  { code: "en", label: "English" },
];

export default function LangSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    const segments = pathname
      .split("/")
      .filter(Boolean)
      .filter((seg) => !LANGS.some((l) => l.code === seg));
    const nextPath = "/" + [newLocale, ...segments].join("/");
    startTransition(() => router.replace(nextPath));
  };

  if (isPending) {
    return (
      <Skeleton.Input
        active
        style={{
          width: 140,
          height: 40,
          borderRadius: 8,
          backgroundColor: "#E5E5E5", // skeleton token
        }}
      />
    );
  }

  return (
    <Select
      value={locale}
      onChange={handleChange}
      size="middle"
      optionLabelProp="label"
      style={{
        width: 100,
        height: 40,
        backgroundColor: "#FEFCFB", // background token
        border: "1px solid #E5E5E5", // icon-token as border
        borderRadius: 8,
        color: "#222222", // primary text
      }}
      suffixIcon={
        <GlobalOutlined
          style={{ color: "#FA7436", fontSize: 18 }} // primary orange
        />
      }
    >
      {LANGS.map(({ code, label }) => (
        <Select.Option key={code} value={code} label={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <GlobalOutlined
                style={{
                  marginRight: 8,
                  color: locale === code ? "#FA7436" : "#999999", // icon colors
                }}
              />
              <span
                style={{
                  color: locale === code ? "#222222" : "#444444", // text colors
                  fontWeight: 500,
                }}
              >
                {label}
              </span>
            </div>
            {locale === code && (
              <CheckOutlined
                style={{ color: "#FA7436", fontSize: 16 }} // primary orange
              />
            )}
          </div>
        </Select.Option>
      ))}
    </Select>
  );
}
