import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/my_portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
