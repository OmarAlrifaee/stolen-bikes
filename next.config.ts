import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: process.env.IMAGE_HOSTNAME!,
        pathname: "/uploads/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
