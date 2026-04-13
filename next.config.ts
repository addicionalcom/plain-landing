import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/terminos",      destination: "/es/terms",           permanent: true },
      { source: "/privacidad",    destination: "/es/privacy",         permanent: true },
      { source: "/cookies",       destination: "/es/cookie-policy",   permanent: true },
      { source: "/uso-aceptable", destination: "/es/acceptable-use",  permanent: true },
    ];
  },
};

export default nextConfig;
