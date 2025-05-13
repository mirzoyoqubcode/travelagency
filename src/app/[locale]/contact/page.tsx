// components/ContactUs.tsx
"use client";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const ACCENT = "#FA7436";

export default function page() {
  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-2">
        {/* ───────────── Left column – info ───────────── */}
        <div className="space-y-8">
          <header className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222]">
              Contact <span style={{ color: ACCENT }}>Mira Travel Agency</span>
            </h2>
            <p className="max-w-md text-[#555]">
              Have a question about a tour, pricing, or anything else? We’d love
              to hear from you. Send us a message and we’ll respond within
              24&nbsp;hours.
            </p>
          </header>

          <ul className="space-y-6 text-[#444] text-sm">
            <li className="flex items-start gap-3">
              <EnvironmentOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>
                1234 Explorer Ave,
                <br />
                Tashkent&nbsp;100012, Uzbekistan
              </span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>+998&nbsp;71&nbsp;123&nbsp;45&nbsp;67</span>
            </li>
            <li className="flex items-start gap-3">
              <MailOutlined style={{ color: ACCENT, fontSize: 20 }} />
              <span>hello@miratravel.uz</span>
            </li>
          </ul>
        </div>

        {/* ───────────── Right column – form ───────────── */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 bg-white p-10 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#222]">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#222]"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#222]"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Tell us what you need…"
              className="rounded-md border border-gray-200 bg-[#F9F4F2] py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: ACCENT }}
            className="inline-block w-full rounded-md py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
