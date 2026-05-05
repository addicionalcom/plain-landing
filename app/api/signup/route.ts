import { NextRequest, NextResponse } from "next/server";

const PREVENTA_LIST_ID = "901523189973";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string; lang?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const token = process.env.CLICKUP_API_TOKEN;
  if (!token) {
    console.error("[signup] CLICKUP_API_TOKEN not set");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const lang = body.lang === "en" ? "en" : "es";
  const source = body.source === "hero" ? "hero" : "section";
  const submittedAt = new Date().toISOString();

  try {
    const res = await fetch(
      `https://api.clickup.com/api/v2/list/${PREVENTA_LIST_ID}/task`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: email,
          markdown_description: `**Email:** ${email}\n**Idioma:** ${lang}\n**Origen:** ${source}\n**Fecha:** ${submittedAt}`,
          tags: [`lang:${lang}`, `src:${source}`],
        }),
      }
    );

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("[signup] ClickUp error", res.status, txt);
      return NextResponse.json({ error: "upstream_error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[signup] fetch failed", err);
    return NextResponse.json({ error: "network_error" }, { status: 502 });
  }
}
