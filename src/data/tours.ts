// data/tours.ts

export type TourTab = "special" | "popular" | "recommended" | "best";

export interface Tour {
  id: string;
  title: string;
  country: string;
  duration: string;
  price: number; // USD per package
  rating: number; // 0–5, one decimal
  img: string; // path under /public/images/tours/
  tab: TourTab;
}

// your 9 countries
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

// the four tabs
const tabs: TourTab[] = ["special", "popular", "recommended", "best"];

// build 10 tours per country,
// id & img path match so you just drop files in public/images/tours/
export const tours: Tour[] = countries.flatMap((country) =>
  Array.from({ length: 10 }, (_, i) => {
    const idx = i + 1;
    const slug = country.toLowerCase().replace(/\s+/g, "-"); // e.g. "dubai"
    const id = `${slug}-${idx}`; // e.g. "dubai-1"

    return {
      id,
      country,
      title: `${country} Discover ${idx}`,
      duration: `${3 + (i % 5)} days • ${2 + (i % 3)} people`,
      price: 150 + i * 40 + country.length * 3,
      rating: +(4 + Math.random() * 1).toFixed(1),
      tab: tabs[(i + countries.indexOf(country)) % tabs.length],
      // local image; Next.js Image will serve /public/images/tours/<id>.jpg
      img: `/images/tours/${id}.jpg`,
    };
  })
);
