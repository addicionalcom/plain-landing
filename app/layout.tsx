import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Plain · Gestión de Redes Sociales para Agencias",
  description:
    "Plain automatiza tus respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar. La herramienta de social media diseñada para agencias de marketing.",
  keywords:
    "gestión redes sociales agencias, automatización instagram, respuestas automáticas instagram, programar publicaciones instagram, herramienta social media agencias, automatizar DM instagram, gestión multi-cliente redes sociales",
  authors: [{ name: "Plain" }],
  creator: "Plain",
  publisher: "Plain",
  metadataBase: new URL("https://plainsocial.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://plainsocial.app",
    title: "Plain · Gestión de Redes Sociales para Agencias",
    description:
      "Automatiza respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar.",
    siteName: "Plain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plain - Gestión de Redes Sociales para Agencias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plain · Gestión de Redes Sociales para Agencias",
    description:
      "Automatiza respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
