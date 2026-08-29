import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Industrial photography is the heaviest asset on the site: serve modern
    // formats where the browser supports them.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1200, 1440, 1920, 2560],
  },
  poweredByHeader: false,
};

export default nextConfig;
