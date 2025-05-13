/**
 *  data/tours.ts
 *  – static catalogue: 10 tours for each of your 9 countries
 */

export type TourTab = "special" | "popular" | "recommended" | "best";

export interface Tour {
  id: string;
  title: string;
  country: string;
  duration: string;
  price: number; // USD per package
  rating: number; // 0–5, one decimal
  img: string; // 800×533 seeded placeholder
  tab: TourTab;
}

// exactly your list:
const countries = [
  "Dubai",
  "Turkey",
  "Vietnam",
  "Antaliya",
  "Bali",
  "Chernogoriya",
  "Baku",
  "Gruziya",
  "Uzbekistan",
];

// cycle through these tabs
const tabs: TourTab[] = ["special", "popular", "recommended", "best"];

// build 10 random‐ish tours per country
export const tours: Tour[] = countries.flatMap((country) =>
  Array.from({ length: 10 }, (_, i) => {
    const idx = i + 1;
    return {
      id: `${country.toLowerCase().replace(/\s+/g, "-")}-${idx}`,
      country,
      title: `${country} Discover ${idx}`,
      duration: `${3 + (i % 5)} days • ${2 + (i % 3)} people`, // 3–7 days, 2–4 ppl
      price: 150 + i * 40 + country.length * 3, // varied price
      rating: +(4 + Math.random() * 1).toFixed(1), // 4.0–5.0
      tab: tabs[(i + countries.indexOf(country)) % tabs.length],
      img: `https://picsum.photos/seed/${country
        .toLowerCase()
        .replace(/\s+/g, "-")}-${idx}/800/533`,
    };
  })
);
