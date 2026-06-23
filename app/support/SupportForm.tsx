"use client";

import { useState } from "react";

const CATEGORIES = [
  "Primeros pasos",
  "Publicaciones y calendario",
  "Conversaciones y automatizaciones",
  "Analíticas e informes",
  "Sorteos",
  "Cuenta y facturación",
  "Un problema técnico",
  "Otro",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #e5e5e5",
  borderRadius: 12,
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  background: "#fff",
  color: "#111",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#444",
  marginBottom: 6,
};

export default function SupportForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      category: String(data.get("category") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "No se pudo enviar");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
          border: "1px solid #e8f5e9",
          background: "#f6fdf7",
          borderRadius: 16,
          padding: "40px 32px",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>¡Mensaje enviado!</h3>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.6, margin: 0 }}>
          Gracias por escribirnos. Te responderemos por email lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={labelStyle} htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" required placeholder="Tu nombre" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="tu@email.com" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="category">¿Sobre qué necesitas ayuda?</label>
        <select id="category" name="category" required defaultValue="" style={inputStyle}>
          <option value="" disabled>Selecciona un tema…</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">Cuéntanos</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe tu duda o problema con el mayor detalle posible…"
          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
        />
      </div>

      {error && (
        <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>
          {error}. También puedes escribirnos a{" "}
          <a href="mailto:help@plainsocial.app" style={{ color: "#dc2626" }}>help@plainsocial.app</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="grad-btn"
        style={{
          borderRadius: 12,
          padding: "13px 20px",
          fontSize: 15,
          fontWeight: 600,
          cursor: status === "sending" ? "default" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
        }}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
