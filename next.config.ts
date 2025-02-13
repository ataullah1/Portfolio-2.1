import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable React Strict Mode for better development
  reactStrictMode: true,
};

export default nextConfig;
