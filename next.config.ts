import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/marketing",
  assetPrefix: "/marketing",
};

export default nextConfig;
