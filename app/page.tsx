import type { Metadata } from "next";
import LandingPage from "./components/LandingPage";

export const metadata: Metadata = {
  title: "Plain · Gestión de Redes Sociales para Agencias",
  description:
    "Plain automatiza tus respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar. La herramienta de social media diseñada para agencias de marketing.",
  keywords:
    "gestión redes sociales agencias, automatización instagram, respuestas automáticas instagram, programar publicaciones instagram, herramienta social media agencias, automatizar DM instagram, gestión multi-cliente redes sociales",
  metadataBase: new URL("https://plainsocial.app"),
  alternates: {
    canonical: "/",
    languages: { "en": "/en", "es": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://plainsocial.app",
    title: "Plain · Gestión de Redes Sociales para Agencias",
    description:
      "Automatiza respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar.",
    siteName: "Plain",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Plain - Gestión de Redes Sociales para Agencias" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plain · Gestión de Redes Sociales para Agencias",
    description: "Automatiza respuestas en Instagram, programa contenido y gestiona todos tus clientes desde un solo lugar.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <LandingPage initialLang="es" />;
}
