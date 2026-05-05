"use client";

import { useState, FormEvent } from "react";
import type { Lang } from "../i18n/translations";
import translations from "../i18n/translations";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error" | "invalid";

export default function SignupForm({
  lang,
  variant = "section",
}: {
  lang: Lang;
  variant?: "section" | "hero";
}) {
  const t = translations[lang].signup;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), lang, source: variant }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setEmail("");
      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
          "event",
          "signup_submit",
          { source: variant, lang }
        );
      }
    } catch {
      setStatus("error");
    }
  };

  const isHero = variant === "hero";
  const privacyHref = lang === "es" ? "/es/privacy" : "/privacy";

  if (status === "success") {
    return (
      <div
        role="status"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: isHero ? "10px 18px" : "14px 22px",
          borderRadius: 12,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          color: "#166534",
          fontSize: isHero ? 14 : 15,
          fontWeight: 600,
        }}
      >
        {t.success}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        width: "100%",
        maxWidth: isHero ? 460 : 540,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={e => { setEmail(e.target.value); if (status === "invalid" || status === "error") setStatus("idle"); }}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          disabled={status === "loading"}
          style={{
            flex: "1 1 220px",
            minWidth: 0,
            padding: isHero ? "12px 16px" : "14px 18px",
            fontSize: isHero ? 15 : 16,
            borderRadius: 12,
            border: "1px solid #e0e0e0",
            background: "#fff",
            color: "#111",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="grad-btn"
          style={{
            padding: isHero ? "12px 22px" : "14px 28px",
            fontSize: isHero ? 15 : 16,
            fontWeight: 700,
            borderRadius: 12,
            border: "none",
            cursor: status === "loading" ? "wait" : "pointer",
            fontFamily: "inherit",
            opacity: status === "loading" ? 0.7 : 1,
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? t.buttonLoading : t.button}
        </button>
      </div>

      {(status === "invalid" || status === "error") && (
        <p style={{ margin: 0, fontSize: 13, color: "#dc2626", fontWeight: 600 }}>
          {status === "invalid" ? t.invalid : t.error}
        </p>
      )}

      <p style={{ margin: "4px 0 0", fontSize: 12, color: "#888", lineHeight: 1.5, textAlign: "center" }}>
        {t.consent}{" "}
        <a href={privacyHref} style={{ color: "#666", textDecoration: "underline" }}>
          {t.consentLink}
        </a>
        .
      </p>
    </form>
  );
}
