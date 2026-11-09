import type { NextConfig } from "next";

// Docker builds set STANDALONE=1. Vercel builds do not, so preview output stays
// the default `.next` directory that Vercel deploys today.
const standalone = process.env.STANDALONE === "1";

const nextConfig: NextConfig = {
  ...(standalone
    ? {
        output: "standalone" as const,
        // Caddy terminates TLS and forwards to this process. These hosts may
        // call the contact Server Action in addition to the request Host.
        experimental: {
          serverActions: {
            allowedOrigins: ["gwan.dev", "www.gwan.dev"],
          },
        },
      }
    : {}),
};

export default nextConfig;
