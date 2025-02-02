import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "files.bikeindex.org",
        pathname: "/uploads/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
