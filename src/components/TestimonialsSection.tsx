// components/TestimonialsSection.tsx
"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StarFilled } from "@ant-design/icons";
import { useTranslations } from "next-intl";

interface Review {
  id: number;
  text: string;
  author: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsSection() {
  const t = useTranslations("testimonialsSection");
  // Pull in the array of reviews from our locale file
  const reviews = t.raw
    ? (t.raw("reviews") as Review[])
    : (t("reviews") as unknown as Review[]);

  // State for the mobile carousel indicator
  const [activeIdx, setActiveIdx] = useState(0);

  // onScroll handler to update activeIdx
  const onScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      // width of one card (including margin)
      const cardWidth = el.scrollWidth / reviews.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(idx);
    },
    [reviews.length]
  );

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222]">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#666]">
            {t("subheading")}
          </p>
        </header>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {reviews.map((r, i) => (
            <TestimonialCard key={r.id} r={r} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-1"
          onScroll={onScroll}
        >
          {reviews.map((r, i) => (
            <TestimonialCard key={r.id} r={r} index={i} mobile />
          ))}
        </div>

        {/* Mobile dots */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${
                i === activeIdx ? "bg-[#FA7436]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <p className="text-[15px] leading-relaxed text-[#444] mb-8">{r.text}</p>

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
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarFilled
                key={i}
                style={{
                  color: i < r.rating ? "#FA7436" : "#d1d5db",
                  marginRight: 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
