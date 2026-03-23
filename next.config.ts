import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://kokuhaku-line-ai.vercel.app/:path*",
        permanent: true, // 301リダイレクト
      },
    ];
  },
};

export default nextConfig;
