// components/HeroSection.tsx
"use client";

import React from "react";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function HeroSection() {
  return (
    <section className="relative isolate w-full h-screen overflow-hidden bottom-10">
      {/* BG YouTube Embed (autoplay, loop, muted) */}
      <div className="absolute inset-0 -z-10">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/KTcxTUWnLIw?autoplay=1&mute=1&loop=1&playlist=KTcxTUWnLIw&controls=0&modestbranding=1&showinfo=0"
          title="Hero Background"
          allow="autoplay; fullscreen"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

      {/* HERO COPY */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 lg:px-8">
        <div className="relative flex max-w-4xl flex-col items-center text-center gap-6 lg:gap-8">
          {/* radial halo */}
          <div className="-z-10 pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-black/40 blur-[110px]" />
          </div>

          <h1 className="relative text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            It’s a Big World Out&nbsp;There,&nbsp;
            <span className="inline-block whitespace-nowrap text-[#FA7436]">
              Go&nbsp;Explore
            </span>
          </h1>

          <p className="max-w-md text-base lg:text-lg text-gray-200">
            Time-tracking software used by millions. A simple time tracker and
            timesheet app that lets you track work hours across projects.
          </p>
        </div>
      </div>

      {/* SOCIAL RAIL (≥ xl) */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 xl:flex">
        <span className="rotate-90 text-sm font-semibold tracking-widest text-[#FA7436]">
          FOLLOW&nbsp;US
        </span>
        <span className="h-10 w-px bg-[#FA7436]" />
        <div className="flex flex-col gap-4">
          {[FacebookFilled, TwitterOutlined, InstagramOutlined].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white/90 transition-colors hover:text-[#FA7436] focus:text-[#FA7436] focus:outline-none"
              >
                <Icon className="text-xl" />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
