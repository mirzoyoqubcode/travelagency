// data/tours.ts

export type TourTab = "special" | "popular" | "recommended" | "best" | "inner";

export interface Tour {
  id: string;
  title: string;
  country: string;
  duration: string;
  includes: string[]; // items included in the package
  rating: number; // 0–5, one decimal
  img: string; // path under /public/images/tours/
  tab: TourTab;
}

// List of items included in every tour package
const inclusions: string[] = [
  "Hotel accommodation",
  "Flight",
  "Breakfast (at the hotel)",
  "Transfer",
  "Insurance",
];

// Your 9 countries
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

// Build 10 tours per country for the main tabs
const mainTours: Tour[] = countries.flatMap((country) =>
  Array.from({ length: 10 }, (_, i) => {
    const idx = i + 1;
    const slug = country.toLowerCase().replace(/\s+/g, "-"); // e.g. "dubai"
    const id = `${slug}-${idx}`; // e.g. "dubai-1"
    const tabs: TourTab[] = ["special", "popular", "recommended", "best"];

    return {
      id,
      country,
      title: `${country} Discover ${idx}`,
      duration: `${3 + (i % 5)} days • ${2 + (i % 3)} people`,
      includes: inclusions,
      rating: +(4 + Math.random() * 1).toFixed(1),
      tab: tabs[(i + countries.indexOf(country)) % tabs.length],
      img: `/images/tours/${id}.jpg`, // Next.js Image will serve this
    };
  })
);

// Inner tourism: 12 top regional destinations
const innerDestinations = [
  "Tashkent",
  "Samarkand",
  "Bukhara",
  "Khiva",
  "Shahrisabz",
  "Fergana",
  "Nukus",
  "Termez",
  "Chimgan",
  "Charvak",
  "Margilan",
  "Urgench",
];

const innerTours: Tour[] = innerDestinations.map((region, i) => {
  const idx = i + 1;
  const id = `inner-${idx}`;
  return {
    id,
    country: region,
    title: `${region} Heritage Tour`,
    duration: "3 days • 2 people",
    includes: inclusions,
    rating: +(4 + Math.random() * 1).toFixed(1),
    tab: "inner",
    img: `/images/tours/${id}.jpg`, // ensure these files exist under /public/images/tours/
  };
});

// Export all tours
export const tours: Tour[] = [...mainTours, ...innerTours];
