import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  // Base metadata — overridden by page-level exports (app/page.tsx, app/en/page.tsx, etc.)
  metadataBase: new URL("https://plainsocial.app"),
  authors: [{ name: "Plain" }],
  creator: "Plain",
  publisher: "Plain",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Plain",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Plataforma de gestión de redes sociales para agencias de marketing.",
              url: "https://plainsocial.app",
              offers: [
                { "@type": "Offer", name: "Negocio", price: "10", priceCurrency: "EUR" },
                { "@type": "Offer", name: "Community", price: "40", priceCurrency: "EUR" },
                { "@type": "Offer", name: "Agencia", price: "200", priceCurrency: "EUR" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
