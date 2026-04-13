import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/terminos",      destination: "/terms",           permanent: true },
      { source: "/privacidad",    destination: "/privacy",         permanent: true },
      { source: "/cookies",       destination: "/cookie-policy",   permanent: true },
      { source: "/uso-aceptable", destination: "/acceptable-use",  permanent: true },
    ];
  },
};

export default nextConfig;
