"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "./CookieBanner";

const GA_ID = "G-Y7PD3CHR2Q";

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (hasAnalyticsConsent()) setEnabled(true);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ choice: "all" | "necessary" }>).detail;
      if (detail?.choice === "all") setEnabled(true);
    };
    window.addEventListener("plain:consent-changed", onChange);
    return () => window.removeEventListener("plain:consent-changed", onChange);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
