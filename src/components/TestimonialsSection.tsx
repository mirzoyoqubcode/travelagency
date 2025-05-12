// components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import { StarFilled, CommentOutlined } from "@ant-design/icons";

interface Review {
  id: number;
  text: string;
  author: string;
  avatar: string;
  rating: number;
}

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

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-[#FFF6F2] to-[#F7F8FC] py-24">
      {/* dashed plane-trail under headline */}
      <div className="mx-auto max-w-screen-md">
        <svg
          viewBox="0 0 800 40"
          className="mx-auto mb-4 h-4 w-full text-[#FA7436]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="4 8"
        >
          <path d="M0 20 Q200 0 400 20T800 20" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#222]">
          Share&nbsp;
          <span className="text-[#FA7436]">your journey</span>&nbsp;with others
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[#666]">
          We’d love to hear how your trip went – your words inspire future
          travellers.
        </p>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className="mt-20 hidden gap-8 lg:grid lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.id} r={r} />
          ))}
        </div>

        {/* ---------- MOBILE SCROLL-SNAP ---------- */}
        <div className="mt-20 flex gap-6 overflow-x-auto snap-x snap-mandatory lg:hidden scroll-smooth">
          {reviews.map((r) => (
            <Card key={r.id} r={r} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Card ────────────────────── */
function Card({ r, mobile = false }: { r: Review; mobile?: boolean }) {
  return (
    <article
      className={`
        group flex shrink-0 flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg
        transition-transform duration-300 hover:scale-105 hover:shadow-2xl
        before:block before:h-1 before:w-12 before:rounded-r-full before:bg-[#FA7436]
        ${mobile ? "snap-start w-80" : ""}
      `}
    >
      <div className="flex items-center gap-2 text-[#FA7436] font-semibold">
        <CommentOutlined />
        Review
      </div>

      <p className="min-h-[96px] text-sm leading-relaxed text-[#444]">
        {r.text}
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={r.avatar}
          alt={r.author}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-[#222]">{r.author}</p>
          <Stars n={r.rating} />
        </div>
      </div>
    </article>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarFilled
          key={i}
          className={i < n ? "text-[#FFBF00]" : "text-[#E5E5E5]"}
        />
      ))}
    </div>
  );
}
