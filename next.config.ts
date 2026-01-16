import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   turbo: false,
  // },
};

export default nextConfig;
