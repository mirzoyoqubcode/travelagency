// next.config.ts

import createNextIntlPlugin from "next-intl/plugin";

// (1) if you want strong typing:
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ regular Next.js options
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
      "picsum.photos",
      "source.unsplash.com",
    ],
  }, // ← example for external images
};

const withNextIntl = createNextIntlPlugin({
  // ✅ your i18n options here
  // defaultLocale: "en",
  // locales: ["en", "ru", "uz"],
});

export default withNextIntl(nextConfig);
