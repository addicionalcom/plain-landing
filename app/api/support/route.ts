import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUPPORT_TO = "help@plainsocial.app";
// El remitente debe ser de un dominio verificado en Resend (plainsocial.app).
const SUPPORT_FROM = process.env.SUPPORT_FROM ?? "Plain Soporte <soporte@plainsocial.app>";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; category?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().toLowerCase().slice(0, 200);
  const category = (body.category ?? "").trim().slice(0, 100) || "Sin especificar";
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (!name || !message) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[support] RESEND_API_KEY no configurada");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const submittedAt = new Date().toISOString();
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#111;line-height:1.6">
      <h2 style="margin:0 0 16px">Nueva consulta de soporte</h2>
      <p><strong>Nombre:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
      <p><strong>Tema:</strong> ${esc(category)}</p>
      <p><strong>Fecha:</strong> ${submittedAt}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <p style="white-space:pre-wrap">${esc(message)}</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SUPPORT_FROM,
        to: [SUPPORT_TO],
        reply_to: email,
        subject: `[Soporte] ${category} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("[support] Resend error", res.status, txt);
      return NextResponse.json({ error: "No se pudo enviar el mensaje" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[support] fetch failed", err);
    return NextResponse.json({ error: "network_error" }, { status: 502 });
  }
}
