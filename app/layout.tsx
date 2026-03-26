import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  // TODO: canviar a index:true quan la landing estigui llesta per publicar
  robots: {
    index: false,
    follow: false,
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
        {/* Cookie consent — must be first script */}
        <script type="text/javascript" src="https://gettermscmp.com/cookie-consent/embed/c4ea85ee-201f-4d52-ada0-4884c52001ff/es?auto=true" />
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
                { "@type": "Offer", name: "Starter", price: "29", priceCurrency: "EUR" },
                { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR" },
                { "@type": "Offer", name: "Agency", price: "149", priceCurrency: "EUR" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
