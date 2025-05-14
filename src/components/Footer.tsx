// components/Footer.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const [isPdfModalVisible, setPdfModalVisible] = useState(false);

  return (
    <footer className="bg-[#F9F4F2] text-[#555] text-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* upper flex */}
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MirStar Travel Logo"
              width={120}
              height={50}
            />
          </Link>

          {/* contact info */}
          <div>
            <h4 className="mb-4 font-semibold text-[#222]">{t("contact")}</h4>
            <p className="mb-2">{t("phone")}</p>
            <p className="mb-2">{t("email")}</p>
            <p className="max-w-xs text-[#777]">{t("address")}</p>
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
        visible={isPdfModalVisible}
        onCancel={() => setPdfModalVisible(false)}
        footer={null}
        width={800}
        bodyStyle={{ padding: 0, height: "80vh" }}
        destroyOnClose
      >
        <iframe
          src="/GUVOHNOMA.pdf"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Privacy Policy"
        />
      </Modal>
    </footer>
  );
}
