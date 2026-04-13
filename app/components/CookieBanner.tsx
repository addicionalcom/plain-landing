"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "plain_cookie_consent";
const STORAGE_VERSION = "1"; // bump to re-ask after policy changes

type ConsentValue = "all" | "necessary" | null;

function getStoredConsent(): ConsentValue {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v: string; choice: ConsentValue };
    if (parsed.v !== STORAGE_VERSION) return null; // version changed → re-ask
    return parsed.choice;
  } catch {
    return null;
  }
}

function storeConsent(choice: "all" | "necessary") {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: STORAGE_VERSION, choice }));
  } catch { /* ignore */ }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    storeConsent("all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    storeConsent("necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop blur on mobile */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          zIndex: 9998,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
        onClick={acceptNecessary}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Preferencias de cookies"
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(680px, calc(100vw - 32px))",
          background: "#fff",
          border: "1px solid #e8e8e8",
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          zIndex: 9999,
          fontFamily: "var(--font-geist, system-ui, sans-serif)",
          overflow: "hidden",
        }}
      >
        {/* Main content */}
        <div style={{ padding: "24px 28px 20px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>🍪</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111", letterSpacing: "-0.01em" }}>
                Usamos cookies
              </span>
            </div>
          </div>

          <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.65, margin: "0 0 6px" }}>
            Usamos cookies <strong style={{ color: "#111" }}>estrictamente necesarias</strong> para que la plataforma funcione
            (sesión, autenticación). No usamos cookies de publicidad ni de seguimiento entre sitios.
            Si aceptas todas, podremos usar cookies de análisis anónimo para mejorar el producto.
          </p>

          {/* Expandable details */}
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: 12.5,
              color: "#888",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginBottom: expanded ? 14 : 0,
            }}
          >
            <span style={{ display: "inline-block", transform: expanded ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}>▶</span>
            {expanded ? "Ocultar detalles" : "Ver detalles"}
          </button>

          {expanded && (
            <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "14px 16px", marginBottom: 6 }}>
              <CookieRow
                name="Necesarias"
                desc="Sesión y autenticación (next-auth). Sin ellas no puedes iniciar sesión."
                always
              />
              <CookieRow
                name="Preferencias"
                desc="Recuerdan tu idioma y ajustes de interfaz."
                always
              />
              <CookieRow
                name="Análisis"
                desc="Métricas de uso anónimas para mejorar el producto. Solo si aceptas todas."
                always={false}
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div
          style={{
            padding: "0 28px 22px",
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="/cookie-policy"
            style={{ fontSize: 12.5, color: "#aaa", textDecoration: "none", flexShrink: 0 }}
          >
            Política de cookies ↗
          </a>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              onClick={acceptNecessary}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "1px solid #e0e0e0",
                background: "#fff",
                fontSize: 13,
                fontWeight: 600,
                color: "#444",
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              Solo necesarias
            </button>
            <button
              onClick={accept}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                border: "none",
                background: "#0a0a0a",
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function CookieRow({
  name,
  desc,
  always,
}: {
  name: string;
  desc: string;
  always: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 16,
        padding: "8px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>{desc}</div>
      </div>
      <div style={{ flexShrink: 0, marginTop: 2 }}>
        {always ? (
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#22c55e",
              background: "#f0fdf4",
              padding: "3px 8px",
              borderRadius: 20,
              border: "1px solid #bbf7d0",
            }}
          >
            Siempre activas
          </span>
        ) : (
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#888",
              background: "#f5f5f5",
              padding: "3px 8px",
              borderRadius: 20,
              border: "1px solid #e8e8e8",
            }}
          >
            Opcionales
          </span>
        )}
      </div>
    </div>
  );
}

/** Helper: call this anywhere to check if analytics consent was given */
export function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { v: string; choice: ConsentValue };
    return parsed.v === STORAGE_VERSION && parsed.choice === "all";
  } catch {
    return false;
  }
}

/** Helper: call this to reset consent (e.g. from cookie policy page) */
export function resetConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch { /* ignore */ }
}
