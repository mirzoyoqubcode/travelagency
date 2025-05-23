// components/Footer.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const [isPdfModalVisible, setPdfModalVisible] = useState(false);

  return (
    <footer className="bg-[#F9F4F2] text-[#555] text-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-0 py-12">
        {/* upper flex */}
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MirStar Travel Logo"
              width={200}
              height={50}
            />
          </Link>

          {/* contact info */}
          <div>
            <h4 className="mb-4 font-semibold text-[#222]">{t("contact")}</h4>
            <p className="mb-2">{t("phone")}</p>
            <p className="mb-2">{t("email")}</p>
            <Link
              href={
                "https://maps.windows.com/?form=WNAMSH&collection=point.41.305464_69.279627_Point"
              }
            >
              <p className="max-w-xs text-[#777]">{t("address")}</p>
            </Link>
          </div>
        </div>

        <hr className="my-10 border-t border-[#EBE4E1]" />

        {/* bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <p>{t("copyright", { year })}</p>
          <div className="flex space-x-6">
            <Link href="/">{t("tos")}</Link>

            {/* privacy opens modal */}
            <a
              onClick={() => setPdfModalVisible(true)}
              className="hover:text-black transition cursor-pointer"
            >
              {t("privacy")}
            </a>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <Modal
        title={t("privacy")}
        open={isPdfModalVisible}
        onCancel={() => setPdfModalVisible(false)}
        footer={null}
        width="100%"
        style={{ top: 0, padding: 0 }}
        bodyStyle={{ padding: 0, height: "calc(100vh - 39px)" }} // 55px for title bar
        destroyOnClose
      >
        <iframe
          src="/GUVOHNOMA.pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          title="Privacy Policy"
        />
      </Modal>
    </footer>
  );
}
