"use client";

import { useEffect } from "react";
import type { Lang } from "../i18n/translations";
import translations from "../i18n/translations";
import SignupForm from "./SignupForm";

export default function SignupModal({
  lang,
  open,
  onClose,
}: {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}) {
  const t = translations[lang].signup;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.h2}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,15,20,0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 20,
          maxWidth: 560,
          width: "100%",
          padding: "40px 32px 32px",
          position: "relative",
          boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          fontFamily: "var(--font-geist, system-ui, sans-serif)",
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            borderRadius: 8,
            border: "none",
            background: "#f5f5f5",
            color: "#666",
            fontSize: 18,
            lineHeight: 1,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          ×
        </button>

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div className="badge" style={{ marginBottom: 16, display: "inline-flex" }}>
            ✨ {t.badge}
          </div>
          <h2 style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 800, letterSpacing: "-0.5px", margin: "0 0 10px", lineHeight: 1.2 }}>
            {t.h2}
          </h2>
          <p style={{ fontSize: 15, color: "#555", margin: 0, lineHeight: 1.5 }}>
            {t.p}
          </p>
        </div>

        <SignupForm lang={lang} variant="section" />
      </div>
    </div>
  );
}
