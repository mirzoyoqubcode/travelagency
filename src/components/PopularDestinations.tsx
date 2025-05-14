"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Destination = {
  key: string;
  image: string;
  href: string;
};

const DESTINATIONS: Destination[] = [
  { key: "uae", image: "/images/dubai.jpg", href: "/destinations/uae" },
  {
    key: "turkey",
    image: "/images/istanbul.jpg",
    href: "/destinations/turkey",
  },
  {
    key: "thailand",
    image: "/images/thailand.jpg",
    href: "/destinations/thailand",
  },
  {
    key: "vietnam",
    image: "/images/vietnam.jpg",
    href: "/destinations/vietnam",
  },
  { key: "sharm", image: "/images/sharm.jpg", href: "/destinations/sharm" },
  {
    key: "georgia",
    image: "/images/georgia.jpg",
    href: "/destinations/georgia",
  },
];

export default function PopularDestinations() {
  const t = useTranslations("PopularDestinations");

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <p className="mt-2 text-gray-600">{t("subtitle")}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.key}
              href={dest.href}
              className="group relative block overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={dest.image}
                alt={t(`${dest.key}.name`)}
                width={400}
                height={250}
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent p-4">
                <h3 className="text-white text-xl font-semibold">
                  {t(`${dest.key}.name`)}
                </h3>
                <p className="text-gray-200 text-sm">{t(`${dest.key}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
