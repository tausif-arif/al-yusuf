import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generates the 'out' folder for static hosting
  images: {
    unoptimized: true, // Required for static HTML exports when using next/image
  },
  
  // If you are using Server Actions and testing on mobile (local IP),
  // Next.js 14+ uses this official configuration instead of allowedDevOrigins:
  experimental: {
    serverActions: {
      allowedOrigins: [
        "192.168.29.234:3000",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
