import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uz", "ru", "en"] as const,
  defaultLocale: "uz",
});

// Re‑export the union type if you want strict typing elsewhere
export type AppLocale = (typeof routing.locales)[number];
