// components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { StarFilled } from "@ant-design/icons";

/* ──────────────── Types ──────────────── */
interface Review {
  id: number;
  text: string;
  author: string;
  avatar: string;
  rating: number;
}

/* ──────────────── Mock data ──────────────── */
const reviews: Review[] = [
  {
    id: 1,
    text: "Wow, what a fun vacation with Ocielien – guided by professional people.",
    author: "Benjamin Robert",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing experience in a new place, thank you Ocielien!",
    author: "Annette Block",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    id: 3,
    text: "I was hesitant at first, but the friendly guides changed my mind completely.",
    author: "Kathryn Murphy",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "New story in my life – really amazing and very affordable.",
    author: "Guy Hawkins",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
  },
];

const ACCENT = "#FA7436";

/* ──────────────── Section ──────────────── */
export default function TestimonialsSection() {
  // simple state for mobile carousel dot indicator
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222]">
            Contact us to review&nbsp;
            <span style={{ color: ACCENT }}>your experience</span>&nbsp;with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#666]">
            Give us feedback and let us know what experiences you had while on
            vacation with us.
          </p>
        </header>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {reviews.map((r, i) => (
            <TestimonialCard key={r.id} r={r} index={i} />
          ))}
        </div>

        {/* ---------- MOBILE HORIZONTAL SCROLL ---------- */}
        <div
          className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-1"
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(
              el.scrollLeft / (el.scrollWidth / reviews.length)
            );
            setActiveIdx(idx);
          }}
        >
          {reviews.map((r, i) => (
            <TestimonialCard key={r.id} r={r} index={i} mobile />
          ))}
        </div>

        {/* mobile dots */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${
                i === activeIdx ? "bg-[" + ACCENT + "]" : "bg-gray-300"
              }`}
              style={{ backgroundColor: i === activeIdx ? ACCENT : undefined }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Card ────────────────────── */
function TestimonialCard({
  r,
  index,
  mobile = false,
}: {
  r: Review;
  index: number;
  mobile?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex shrink-0 flex-col rounded-xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.05)] ${
        mobile ? "snap-start w-80 p-8" : "p-10"
      }`}
      style={{ minHeight: 240 }}
    >
      {/* Testimonial text */}
      <p className="text-[15px] leading-relaxed text-[#444] mb-8">{r.text}</p>

      {/* Author block */}
      <div className="flex items-start gap-4 mt-auto">
        <Image
          src={r.avatar}
          alt={r.author}
          width={56}
          height={56}
          unoptimized
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[#222] mb-1">{r.author}</p>
          <StarRow n={r.rating} />
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────── Stars ────────────────────── */
function StarRow({ n }: { n: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarFilled
          key={i}
          style={{ color: i < n ? ACCENT : "#d1d5db", marginRight: 2 }} // gray-300 fallback
        />
      ))}
    </div>
  );
}
