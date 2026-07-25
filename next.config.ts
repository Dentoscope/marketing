import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = isGithubActions && process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
  allowedDevOrigins: ['192.168.1.2']
};


export default nextConfig;
