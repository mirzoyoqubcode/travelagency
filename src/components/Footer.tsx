// components/Footer.tsx
"use client";

import {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ACCENT = "#FA7436";

export default function Footer() {
  return (
    <footer className="bg-[#F9F4F2] pt-20 pb-10 text-[#555] text-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* -------- Top row -------- */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-3xl font-extrabold tracking-tight text-[#222]">
                MirStar
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-[#FA7436]">
                Travel
              </span>
            </Link>
            <p className="max-w-sm leading-relaxed">
              We believe brand interaction is key in communication. Real
              innovations and a positive customer experience are the heart of
              our success.
            </p>
            <div className="flex items-center gap-4 text-lg">
              <Link
                href="#"
                style={{ color: ACCENT }}
                className="hover:opacity-80"
              >
                <TwitterOutlined />
              </Link>
              <Link
                href="#"
                style={{ color: ACCENT }}
                className="hover:opacity-80"
              >
                <InstagramOutlined />
              </Link>
              <Link
                href="#"
                style={{ color: ACCENT }}
                className="hover:opacity-80"
              >
                <YoutubeOutlined />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="mb-4 font-semibold text-[#222]">About us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-black transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#222]">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-black transition">
                  Core values
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Partner w/ us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#222]">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-black transition">
                  Support centre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* -------- Divider -------- */}
        <hr className="my-10 border-t border-[#EBE4E1]" />

        {/* -------- Bottom bar -------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <p>Mira Travel Agency © 2022 All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
