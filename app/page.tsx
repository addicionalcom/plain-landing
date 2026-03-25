"use client";
import { useState } from "react";
import { Check, X, ArrowRight, MessageCircle, Calendar, Users, Zap, ChevronDown, Star, TrendingUp, FolderOpen, Shield, Sparkles, Brain, Import, BarChart2, ImageIcon, PenLine, Clock } from "lucide-react";

const D = "https://dashboard.plainsocial.app";

export default function Home() {
  const [annual, setAnnual] = useState(true);
  const [faq, setFaq] = useState<number | null>(null);
  const p = { s: annual ? 24 : 29, m: annual ? 66 : 79, a: annual ? 124 : 149 };

  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", color: "#0a0a0a", background: "#fff" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a href="/" style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.5px", textDecoration: "none", color: "#0a0a0a" }}>
            <img src="/logo.svg" alt="Plain" style={{ height: 28, display: "block" }} />
          </a>
          <div style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 500, color: "#555" }}>
            {[["#features","Funciones"],["#comparativa","Comparativa"],["#precios","Precios"],["#faq","FAQ"]].map(([h,l])=>(
              <a key={h} href={h} style={{ textDecoration: "none", color: "inherit" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href={`${D}/login`} style={{ fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" }}>Iniciar sesión</a>
            <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 14, fontWeight: 600, padding: "9px 20px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}>
              Prueba gratis 14 días
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 140, paddingBottom: 100, textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Bg blobs */}
        <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 100, left: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(244,63,94,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 80, right: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1900, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div className="badge anim-up" style={{ marginBottom: 28 }}>
            <Sparkles size={13} style={{ color: "#a855f7" }} />
            Programación · Automatización · Multi-cliente
          </div>

          <h1 className="anim-up-1" style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 24, maxWidth: 900, margin: "0 auto 24px" }}>
            Deja de pagar dos herramientas<br />
            <span className="grad-text">para hacer el trabajo de una.</span>
          </h1>

          <p className="anim-up-2" style={{ fontSize: 20, color: "#555", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.6 }}>
            Plain combina programación de Instagram con automatización comentario→DM en un solo panel para agencias.
          </p>

          <div className="anim-up-3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 16, fontWeight: 700, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Empieza gratis — sin tarjeta <ArrowRight size={18} />
            </a>
            <a href="#features" style={{ fontSize: 16, fontWeight: 600, padding: "14px 28px", borderRadius: 12, textDecoration: "none", border: "1px solid #e5e7eb", color: "#333", display: "inline-block", background: "white" }}>
              Ver cómo funciona
            </a>
          </div>
          <p style={{ marginTop: 14, fontSize: 13, color: "#aaa" }}>14 días gratis · Sin tarjeta · Cancela cuando quieras</p>

          {/* Hero card mockup */}
          <div className="float" style={{ marginTop: 60, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)" }}>
              {/* Window bar */}
              <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 18px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#aaa", fontWeight: 500 }}>dashboard.plainsocial.app — Automatizaciones</span>
              </div>
              {/* Content */}
              <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {/* Trigger panel */}
                <div style={{ gridColumn: "span 2", background: "#fafafa", borderRadius: 16, padding: 20, border: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "0.8px" }}>Automatización activa</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#fce7f3,#f3e8ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <MessageCircle size={14} style={{ color: "#a855f7" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>Comentario recibido</div>
                        <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 10, padding: "8px 12px", fontSize: 13, fontWeight: 500 }}>"INFO" 🙌</div>
                      </div>
                    </div>
                    <div style={{ paddingLeft: 42, display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>✓ DM enviado automáticamente</div>
                      <div style={{ background: "linear-gradient(135deg,rgba(244,63,94,0.06),rgba(168,85,247,0.06))", border: "1px solid rgba(168,85,247,0.15)", borderRadius: 10, padding: "8px 12px", fontSize: 12, color: "#6d28d9" }}>
                        ¡Hola! Te enviamos toda la info 😊 Aquí tienes el catálogo →
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb" }}>
                    <span>Regla: &quot;INFO&quot; → DM automático</span>
                    <span style={{ color: "#22c55e", fontWeight: 600 }}>127 DMs hoy</span>
                  </div>
                </div>
                {/* Stats */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[["Clientes","12","↑ 3 este mes","#22c55e"],["Programados","48","próx. 30 días","#aaa"],["DMs enviados","1.284","este mes","#22c55e"]].map(([l,v,s,c])=>(
                    <div key={l} style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 14, padding: 14 }}>
                      <div style={{ fontSize: 10, color: "#aaa", fontWeight: 500, marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>{v}</div>
                      <div style={{ fontSize: 10, color: c, fontWeight: 500, marginTop: 2 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <div className="sep" style={{ maxWidth: 1900, margin: "0 auto 0" }} />
      <section style={{ padding: "28px 32px", maxWidth: 1900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#ccc", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Integra con tus herramientas</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 32px" }}>
          {["Instagram","Facebook","Dropbox","Google Drive","OneDrive","Canva"].map(n=>(
            <span key={n} style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{n}</span>
          ))}
        </div>
      </section>
      <div className="sep" style={{ maxWidth: 1900, margin: "0 auto" }} />

      {/* ── PROBLEM ── */}
      <section style={{ padding: "100px 32px", maxWidth: 1900, margin: "0 auto" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>
              El problema que todas las agencias tienen
            </h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              Pagas dos suscripciones para hacer lo que Plain hace solo.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Without */}
            <div className="card" style={{ padding: 32, background: "#fff8f8", borderColor: "#ffe4e6" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X size={16} style={{ color: "#ef4444" }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17 }}>Sin Plain: dos facturas</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["Metricool / Later / Buffer","~€20–45/mes","Programar contenido"],["ManyChat","~€25–65/mes*","Automatizar DMs"]].map(([t,p,d])=>(
                  <div key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", border: "1px solid #fee2e2", borderRadius: 12, padding: "12px 16px" }}>
                    <div><div style={{ fontWeight: 700, fontSize: 13 }}>{t}</div><div style={{ fontSize: 12, color: "#999" }}>{d}</div></div>
                    <div style={{ fontWeight: 800, color: "#ef4444", fontSize: 14 }}>{p}</div>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fef2f2", border: "2px solid #fca5a5", borderRadius: 12, padding: "12px 16px" }}>
                  <span style={{ fontWeight: 800, fontSize: 15 }}>Total mensual</span>
                  <span style={{ fontWeight: 900, color: "#ef4444", fontSize: 20 }}>€45–110/mes</span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#ccc", marginTop: 10 }}>*ManyChat sube el precio sin avisar según contactos</p>
            </div>
            {/* With */}
            <div className="card" style={{ padding: 32, background: "linear-gradient(135deg,rgba(244,63,94,0.03),rgba(168,85,247,0.05),rgba(6,182,212,0.03))", borderColor: "rgba(168,85,247,0.15)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#fce7f3,#ede9fe)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={16} style={{ color: "#a855f7" }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17 }}>Con Plain: todo en uno</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Programación de contenido","Automatización comentario → DM","Gestión multi-cliente","Dropbox / Drive integrado"].map(f=>(
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 12, padding: "12px 16px" }}>
                    <Check size={15} style={{ color: "#a855f7", flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: 13 }}>{f}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", borderRadius: 12, padding: "12px 16px" }}>
                  <span style={{ fontWeight: 800, color: "white", fontSize: 15 }}>Todo incluido desde</span>
                  <span style={{ fontWeight: 900, color: "white", fontSize: 20 }}>€24/mes</span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#bbb", marginTop: 10 }}>Precio fijo — sin sorpresas, sin contar contactos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Todo lo que necesita tu agencia</h2>
            <p style={{ fontSize: 18, color: "#666" }}>Tres pilares. Un solo panel.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 16 }}>
            {[
              { icon: Zap, grad: ["#fce7f3","#f43f5e"], title: "Convierte comentarios en leads", desc: 'Define palabras clave — "INFO", "PRECIO", "RESERVA" — y Plain envía un DM personalizado al instante. Sin ManyChat. Sin coste por contacto.', items: ["Múltiples palabras clave","Mensajes con variantes","Respuesta pública + DM","Incluir enlaces y CTAs"] },
              { icon: Calendar, grad: ["#ede9fe","#a855f7"], title: "Publica sin esfuerzo", desc: "Conecta Dropbox o Google Drive y programa posts, Reels y Stories desde las carpetas de tus clientes. Ellos suben, Plain publica.", items: ["Calendario visual","Dropbox y Drive","Posts, Reels y Stories","Publicación automática"] },
              { icon: Users, grad: ["#ecfdf5","#059669"], title: "Gestiona todos tus clientes", desc: "Un panel. Todos tus clientes. Sin cambiar de cuenta. Para agencias con 5, 10 o 50 cuentas de Instagram.", items: ["Panel multi-cliente","Branding por cliente","Roles de equipo","Sin límite de cuentas"] },
            ].map(({ icon: Icon, grad, title, desc, items })=>(
              <div key={title} className="card" style={{ padding: 28, background: "white" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: grad[0], display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={22} style={{ color: grad[1] }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.4px", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 20 }}>{desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map(i=>(
                    <li key={i} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#444" }}>
                      <Check size={13} style={{ color: grad[1], flexShrink: 0 }} />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { icon: FolderOpen, c: "#ea580c", bg: "#fff7ed", t: "Almacenamiento conectado", d: "Dropbox, Drive, OneDrive. Tus activos siempre a mano." },
              { icon: TrendingUp, c: "#2563eb", bg: "#eff6ff", t: "Métricas en tiempo real", d: "Rendimiento de cada cliente en un solo panel." },
              { icon: Shield, c: "#059669", bg: "#ecfdf5", t: "Seguro y conforme RGPD", d: "Datos en Europa. Cumplimiento total con Meta." },
            ].map(({ icon: Icon, c, bg, t, d })=>(
              <div key={t} className="card" style={{ padding: 20, display: "flex", gap: 14, background: "white" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} style={{ color: c }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI CONTENT ── */}
      <section style={{ padding: "100px 32px", maxWidth: "100%", background: "white" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 20 }}>
              <Brain size={13} style={{ color: "#a855f7" }} />
              Exclusivo de Plain — no lo hace ninguna otra herramienta
            </div>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 16 }}>
              La IA que trabaja por ti.<br />
              <span className="grad-text">Indica la carpeta, ella hace el resto.</span>
            </h2>
            <p style={{ fontSize: 20, color: "#666", maxWidth: 640, margin: "0 auto" }}>
              Señala a Plain dónde están las fotos y vídeos de tu cliente. La IA analiza el contenido, selecciona las mejores piezas, escribe los copys y calendariza todo el mes automáticamente.
            </p>
          </div>

          {/* Flow visual */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1100, margin: "0 auto 60px" }}>
            {[
              { icon: FolderOpen, color: "#f43f5e", bg: "#fff1f2", step: "01", title: "Señalas la carpeta", desc: "Dropbox, Google Drive o cualquier almacenamiento conectado. Plain accede a todas las fotos y vídeos del cliente." },
              { icon: ImageIcon, color: "#a855f7", bg: "#faf5ff", step: "02", title: "La IA analiza el contenido", desc: "Evalúa cada pieza por calidad, relevancia y potencial de engagement. Selecciona las mejores automáticamente." },
              { icon: PenLine, color: "#6366f1", bg: "#eef2ff", step: "03", title: "Escribe los copys", desc: "Genera copies adaptados a la voz de la marca, con hashtags, emojis y CTAs optimizados para Instagram." },
              { icon: Clock, color: "#06b6d4", bg: "#ecfeff", step: "04", title: "Calendariza el mes", desc: "Programa todas las publicaciones en los mejores horarios para maximizar el alcance. Tú solo apruebas." },
            ].map(({ icon: Icon, color, bg, step, title, desc }) => (
              <div key={step} className="card" style={{ padding: 28, background: "white", position: "relative" }}>
                <div style={{ position: "absolute", top: 20, right: 20, fontWeight: 900, fontSize: 13, color: "#f0f0f0", letterSpacing: "-0.5px" }}>{step}</div>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8, letterSpacing: "-0.3px" }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Demo card */}
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="card" style={{ padding: 0, overflow: "hidden", background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              {/* Top bar */}
              <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 10, fontSize: 12, color: "#aaa", fontWeight: 500 }}>Plain IA — Generación automática de contenido</span>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,rgba(168,85,247,0.1),rgba(6,182,212,0.1))", border: "1px solid rgba(168,85,247,0.2)", borderRadius: 20, padding: "4px 12px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: 11, color: "#a855f7", fontWeight: 600 }}>IA procesando</span>
                </div>
              </div>
              <div style={{ padding: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Left: folder + selection */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Carpeta analizada: /Delio/Marzo 2026</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                    {[
                      { sel: true, score: "9.4" }, { sel: false, score: "6.1" }, { sel: true, score: "8.8" },
                      { sel: false, score: "5.9" }, { sel: true, score: "9.1" }, { sel: false, score: "7.2" },
                    ].map((item, i) => (
                      <div key={i} style={{ aspectRatio: "1", borderRadius: 10, background: item.sel ? "linear-gradient(135deg,#fce7f3,#ede9fe)" : "#f5f5f5", border: item.sel ? "2px solid #a855f7" : "2px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                        <ImageIcon size={18} style={{ color: item.sel ? "#a855f7" : "#ccc" }} />
                        <span style={{ fontSize: 10, fontWeight: 700, marginTop: 4, color: item.sel ? "#a855f7" : "#ccc" }}>{item.score}</span>
                        {item.sel && <div style={{ position: "absolute", top: 6, right: 6, width: 16, height: 16, borderRadius: "50%", background: "#a855f7", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={9} style={{ color: "white" }} /></div>}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 12, color: "#888" }}>3 de 6 piezas seleccionadas · Puntuación media: 9.1</div>
                </div>
                {/* Right: generated copy + calendar */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>Copy generado por IA</div>
                    <p style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>
                      ✨ Empieza la semana con energía en Delio 🍽️<br />
                      Nuevos platos de temporada que ya están esperándote.<br />
                      Reserva tu mesa y descubre el sabor de marzo.<br />
                      <span style={{ color: "#a855f7" }}>#Delio #RestauranteBarcelona #GastronomíaLocal</span>
                    </p>
                  </div>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>Calendarizado automáticamente</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[["Lun 3 Mar","18:30","Post principal","✓"],["Mié 5 Mar","12:00","Story animada","✓"],["Vie 7 Mar","19:00","Reel receta","✓"]].map(([d,h,t,s])=>(
                        <div key={d} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 }}>
                          <span style={{ color: "#888" }}>{d} · {h}</span>
                          <span style={{ fontWeight: 600, color: "#444" }}>{t}</span>
                          <span style={{ color: "#22c55e", fontWeight: 700 }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICOOL MIGRATION ── */}
      <section style={{ padding: "80px 32px", maxWidth: "100%", background: "linear-gradient(135deg,rgba(244,63,94,0.03),rgba(168,85,247,0.04),rgba(6,182,212,0.03))" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="badge" style={{ marginBottom: 20 }}>
                <Import size={13} style={{ color: "#f43f5e" }} />
                Para usuarios de Metricool
              </div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 16 }}>
                Migra de Metricool<br />
                <span className="grad-text">en un solo clic.</span>
              </h2>
              <p style={{ fontSize: 17, color: "#666", lineHeight: 1.7, marginBottom: 28 }}>
                Plain importa todo tu histórico de Metricool automáticamente. No pierdes nada, no empiezas de cero. En minutos tienes todo listo con la potencia extra de la IA y las automatizaciones.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: BarChart2, color: "#f43f5e", bg: "#fff1f2", t: "Analytics históricos", d: "Todo tu historial de métricas, seguidores y engagement." },
                  { icon: Calendar, color: "#a855f7", bg: "#faf5ff", t: "Publicaciones programadas", d: "Importamos el calendario de contenido pendiente." },
                  { icon: Users, color: "#06b6d4", bg: "#ecfeff", t: "Clientes y cuentas", d: "Todas tus marcas conectadas, migradas automáticamente." },
                ].map(({ icon: Icon, color, bg, t, d }) => (
                  <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{t}</div>
                      <div style={{ fontSize: 13, color: "#888" }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 15, fontWeight: 700, padding: "13px 24px", borderRadius: 12, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Migrar desde Metricool <ArrowRight size={17} />
              </a>
            </div>
            {/* Visual */}
            <div className="card" style={{ padding: 28, background: "white" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#888", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Importar desde Metricool</span>
                <span style={{ background: "linear-gradient(135deg,#f43f5e,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 800 }}>1 clic</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { item: "Analytics históricos", count: "18 meses", status: "✓", done: true },
                  { item: "Publicaciones programadas", count: "34 posts", status: "✓", done: true },
                  { item: "Cuentas conectadas", count: "8 clientes", status: "✓", done: true },
                  { item: "Automatizaciones IA", count: "nuevo", status: "★", done: false },
                  { item: "Respuestas automáticas DM", count: "nuevo", status: "★", done: false },
                ].map(({ item, count, status, done }) => (
                  <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 12, background: done ? "#f0fdf4" : "linear-gradient(135deg,rgba(244,63,94,0.04),rgba(168,85,247,0.06))", border: `1px solid ${done ? "#bbf7d0" : "rgba(168,85,247,0.15)"}` }}>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{item}</span>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "#888" }}>{count}</span>
                      <span style={{ fontWeight: 800, fontSize: 16, color: done ? "#22c55e" : "#a855f7" }}>{status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: "14px", background: "#0a0a0a", borderRadius: 14, textAlign: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>Migración completada en 2 min 34 seg ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "100px 32px", maxWidth: 1900, margin: "0 auto" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>En marcha en 10 minutos</h2>
            <p style={{ fontSize: 18, color: "#666" }}>Sin código. Sin consultores. Sin complicaciones.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              ["01","Conecta Instagram","OAuth en 2 clics. Plain conecta la cuenta de Instagram Business de tu cliente.","#f43f5e"],
              ["02","Define palabras clave","Crea una regla: cuando alguien comente INFO, envía este DM. Tantas reglas como necesites.","#a855f7"],
              ["03","Programa el contenido","Importa desde Dropbox o Drive, asigna fecha y Plain publica solo.","#06b6d4"],
              ["04","Los leads llegan solos","Cada comentario con keyword activa el DM, 24/7, sin que muevas un dedo.","#059669"],
            ].map(([n,t,d,c])=>(
              <div key={n} className="card" style={{ padding: 24, display: "flex", gap: 20, alignItems: "flex-start", background: "white" }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg,${c}22,${c}44)`, border: `1px solid ${c}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontWeight: 900, fontSize: 18, color: c }}>{n}</span>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{t}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section id="comparativa" style={{ padding: "100px 32px", background: "#0a0a0a", color: "white", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Plain vs. las alternativas</h2>
            <p style={{ fontSize: 18, color: "#666" }}>Por qué las agencias eligen Plain sobre pagar dos herramientas.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", maxWidth: 900, margin: "0 auto", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 20px", color: "#444", fontWeight: 600, fontSize: 13, width: "30%" }}>Función</th>
                  <th style={{ padding: "12px 20px", textAlign: "center" }}>
                    <span style={{ background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", padding: "6px 16px", borderRadius: 8, fontWeight: 800, fontSize: 13 }}>Plain</span>
                  </th>
                  {["Metricool","ManyChat","Hootsuite"].map(n=>(
                    <th key={n} style={{ padding: "12px 20px", textAlign: "center", color: "#555", fontWeight: 600, fontSize: 13 }}>{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Programar publicaciones Instagram", true, true, false, true],
                  ["IA selecciona contenido y escribe copys", true, false, false, false],
                  ["Calendarización automática con IA", true, false, false, false],
                  ["Automatización comentario → DM", true, false, true, false],
                  ["Migración desde Metricool (1 clic)", true, "—", false, false],
                  ["Gestión multi-cliente agencias", true, "Parcial", false, "Parcial"],
                  ["Dropbox / Google Drive integrado", true, false, false, false],
                  ["Precio fijo (sin contar contactos)", true, true, false, false],
                  ["Soporte en español", true, true, false, false],
                  ["Precio (agencia 10 clientes)", "€124/mes", "€88/mes*", "€450/mes**", "€990/mes"],
                ].map((row,i)=>(
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 500, color: "#ccc" }}>{row[0]}</td>
                    {row.slice(1).map((v,j)=>(
                      <td key={j} style={{ padding: "14px 20px", textAlign: "center" }}>
                        {v===true ? <Check size={18} style={{ color: "#a855f7", margin: "0 auto" }} />
                        : v===false ? <X size={18} style={{ color: "#333", margin: "0 auto" }} />
                        : <span style={{ fontSize: 13, fontWeight: 700, color: j===0 ? "#c084fc" : "#555" }}>{v}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", fontSize: 11, color: "#333", marginTop: 20 }}>
            *Metricool Advanced 25 marcas. **ManyChat Pro 10.000 contactos. Precios orientativos.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "100px 32px", maxWidth: 1900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Lo que dicen las agencias</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {[
            { q:"Llevábamos años pagando Metricool y ManyChat por separado. Con Plain cancelamos los dos y ahorramos más de €60 al mes.", a:"María G.", r:"Directora creativa, Barcelona" },
            { q:"La automatización de comentarios nos genera leads mientras dormimos. Un cliente consiguió 340 DMs en un solo día.", a:"Jordi P.", r:"Social Media Manager, Madrid" },
            { q:"Gestionar 15 clientes antes era un caos de pestañas. Ahora entro a Plain y lo tengo todo. La integración con Dropbox es clave.", a:"Ana M.", r:"Fundadora agencia digital, México DF" },
          ].map(t=>(
            <div key={t.a} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_,i)=><Star key={i} size={15} style={{ color: "#fbbf24", fill: "#fbbf24" }} />)}
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>&quot;{t.q}&quot;</p>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{t.a}</div>
              <div style={{ fontSize: 12, color: "#999" }}>{t.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Precio fijo. Sin sorpresas.</h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 500, margin: "0 auto 28px" }}>
              A diferencia de ManyChat, no cobramos por contactos. Mismo precio cada mes.
            </p>
            {/* Toggle */}
            <div style={{ display: "inline-flex", background: "white", border: "1px solid #e5e7eb", borderRadius: 12, padding: 4, gap: 4 }}>
              {[["Mensual",false],["Anual — 17% dto.",true]].map(([l,v])=>(
                <button key={String(v)} onClick={()=>setAnnual(v as boolean)} style={{ padding: "8px 20px", borderRadius: 9, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.15s", background: annual===(v as boolean) ? "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)" : "transparent", color: annual===(v as boolean) ? "white" : "#666" }}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
            {[
              { name:"Starter", desc:"Para freelancers y agencias pequeñas", price:p.s, hi:false,
                items:["Hasta 3 clientes","Programación de contenido","5 automatizaciones activas","Dropbox / Drive","Soporte por email"] },
              { name:"Pro", desc:"Para agencias en crecimiento", price:p.m, hi:true,
                items:["Hasta 10 clientes","Automatizaciones ilimitadas","Programación ilimitada","Todos los almacenamientos","Analytics por cliente","Soporte prioritario"] },
              { name:"Agency", desc:"Para agencias con muchos clientes", price:p.a, hi:false,
                items:["Clientes ilimitados","Automatizaciones ilimitadas","Usuarios ilimitados","White-label (próx.)","API (próx.)","Onboarding dedicado","Soporte 24/7"] },
            ].map(pl=>(
              <div key={pl.name} style={{ borderRadius: 20, padding: 32, position: "relative", ...(pl.hi ? { background: "linear-gradient(145deg,#0a0a0a,#1a0a2e)", color: "white", boxShadow: "0 24px 60px rgba(168,85,247,0.25)" } : { background: "white", border: "1px solid #e8e8e8" }) }}>
                {pl.hi && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#f43f5e,#a855f7)", color: "white", fontSize: 11, fontWeight: 800, padding: "5px 16px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap" }}>Más popular</div>}
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{pl.name}</h3>
                  <p style={{ fontSize: 13, color: pl.hi ? "#9ca3af" : "#888" }}>{pl.desc}</p>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-2px" }}>€{pl.price}</span>
                  <span style={{ fontSize: 15, color: pl.hi ? "#6b7280" : "#aaa" }}>/mes</span>
                  {annual && <div style={{ fontSize: 12, color: pl.hi ? "#a855f7" : "#22c55e", marginTop: 3 }}>Facturado anualmente</div>}
                </div>
                <a href={`${D}/register`} style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 12, textDecoration: "none", marginBottom: 24, ...(pl.hi ? { background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", color: "white" } : { background: "#0a0a0a", color: "white" }) }}>
                  Empezar gratis
                </a>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {pl.items.map(it=>(
                    <li key={it} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: pl.hi ? "#d1d5db" : "#555" }}>
                      <Check size={14} style={{ color: pl.hi ? "#a855f7" : "#a855f7", flexShrink: 0 }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#bbb", marginTop: 24 }}>14 días de prueba gratis · Sin tarjeta · Cancela cuando quieras</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "100px 32px", maxWidth: 1900, margin: "0 auto" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 48, textAlign: "center" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["¿Necesito cuenta de Instagram Business?","Sí. La automatización requiere Instagram Business o Creator conectada a una Página de Facebook. La configuración tarda menos de 5 minutos."],
              ["¿Plain reemplaza completamente a ManyChat?","Para las funciones de comentario→DM que usan la mayoría de agencias, sí. Modelo más simple, precio fijo, sin contar contactos."],
              ["¿Cuántos DMs puedo enviar por día?","Plain usa la API oficial de Instagram y respeta los límites de Meta. Para cuentas Business activas, los límites raramente son un problema práctico."],
              ["¿Puedo migrar mis reglas de ManyChat?","No importamos directamente, pero recrear las reglas es simple: keyword + mensaje + activar. La mayoría de agencias lo hacen en menos de 30 minutos."],
              ["¿Qué pasa si cancelo?","Tus datos se conservan 30 días y puedes exportarlos. No borramos nada automáticamente."],
              ["¿Funciona con Facebook?","Estamos optimizados para Instagram. El soporte para Facebook Pages está en el roadmap."],
            ].map(([q,a],i)=>(
              <div key={i} style={{ border: "1px solid #f0f0f0", borderRadius: 14, overflow: "hidden", background: "white" }}>
                <button onClick={()=>setFaq(faq===i?null:i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{q}</span>
                  <ChevronDown size={17} style={{ color: "#bbb", flexShrink: 0, transform: faq===i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {faq===i && (
                  <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#666", lineHeight: 1.7, borderTop: "1px solid #fafafa" }}>{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(244,63,94,0.04),rgba(168,85,247,0.06),rgba(6,182,212,0.04))", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="badge" style={{ marginBottom: 24 }}>
            <Sparkles size={13} style={{ color: "#a855f7" }} />
            Únete a las agencias que ya usan Plain
          </div>
          <h2 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 900, letterSpacing: "-2px", marginBottom: 16 }}>
            ¿Listo para unificar tu stack?
          </h2>
          <p style={{ fontSize: 20, color: "#666", maxWidth: 500, margin: "0 auto 36px" }}>
            Empieza hoy. Las agencias en España y LATAM están migrando a Plain.
          </p>
          <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 18, fontWeight: 700, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            Prueba Plain gratis 14 días <ArrowRight size={20} />
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: "#aaa" }}>Sin tarjeta de crédito · 10 minutos de configuración · Cancela cuando quieras</p>
        </div>
      </section>

      <div className="sep" />

      {/* ── FOOTER ── */}
      <footer style={{ padding: "60px 32px", maxWidth: 1900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.5px", marginBottom: 10 }}>
              <img src="/logo.svg" alt="Plain" style={{ height: 28, display: "block" }} />
            </div>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, maxWidth: 280 }}>La herramienta de gestión de redes sociales para agencias de marketing en España y LATAM.</p>
          </div>
          {[
            { t:"Producto", l:["Funciones","Precios","Comparativa","Changelog"] },
            { t:"Empresa", l:["Sobre Plain","Blog","Contacto","Partners"] },
            { t:"Legal", l:[{n:"Privacidad",h:"https://www.addicional.com/politica-de-privacidad/"},{n:"Términos",h:"#"},{n:"Cookies",h:"#"}] },
          ].map(col=>(
            <div key={col.t}>
              <h4 style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", color: "#aaa", marginBottom: 16 }}>{col.t}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map((item: string | {n:string,h:string})=>{
                  const label = typeof item === "string" ? item : item.n;
                  const href = typeof item === "string" ? "#" : item.h;
                  return <li key={label}><a href={href} style={{ fontSize: 14, color: "#888", textDecoration: "none" }}>{label}</a></li>;
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="sep" style={{ marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "#bbb" }}>
          <span>© {new Date().getFullYear()} Plain · Addicional Marketing, S.L. · Sabadell, España</span>
          <span>Hecho con ❤️ para agencias</span>
        </div>
      </footer>
    </div>
  );
}
