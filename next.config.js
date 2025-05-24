/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "blog.thebundled.ai",
        pathname: "/wp-content/uploads/**",
      },
    ],
    unoptimized: true,
  },
  // Add logging for debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Ensure API routes are properly handled
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
