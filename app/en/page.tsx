import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Plain · Social Media Management for Agencies",
  description:
    "Plain automates Instagram replies, schedules content and manages all your clients from one place. The social media tool designed for marketing agencies.",
  keywords:
    "social media management agencies, instagram automation, automatic instagram replies, schedule instagram posts, social media tool agencies, automate instagram DMs, multi-client social media management",
  metadataBase: new URL("https://plainsocial.app"),
  alternates: {
    canonical: "/en",
    languages: { "en": "/en", "es": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://plainsocial.app/en",
    title: "Plain · Social Media Management for Agencies",
    description:
      "Automate Instagram replies, schedule content and manage all your clients from one place.",
    siteName: "Plain",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Plain - Social Media Management for Agencies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plain · Social Media Management for Agencies",
    description: "Automate Instagram replies, schedule content and manage all your clients from one place.",
    images: ["/og-image.png"],
  },
};

export default function HomeEN() {
  return <LandingPage initialLang="en" />;
}
