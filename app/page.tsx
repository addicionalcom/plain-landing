"use client";
import { useState, useEffect } from "react";
import { Check, X, ArrowRight, MessageCircle, Calendar, Users, Zap, ChevronDown, Star, TrendingUp, FolderOpen, Shield, Sparkles, Brain, Import, BarChart2, ImageIcon, PenLine, Clock, Play, Pause } from "lucide-react";

const D = "https://dashboard.plainsocial.app";

export default function Home() {
  const [annual, setAnnual] = useState(true);
  const [faq, setFaq] = useState<number | null>(null);
  const [tip, setTip] = useState<{label:string; desc:string; x:number; y:number}|null>(null);
  const [demoStep, setDemoStep] = useState(0);
  const [demoPlaying, setDemoPlaying] = useState(true);
  const p = { s: annual ? 24 : 29, m: annual ? 66 : 79, a: annual ? 124 : 149 };

  useEffect(() => {
    if (!demoPlaying) return;
    const t = setInterval(() => setDemoStep(s => (s + 1) % 4), 3000);
    return () => clearInterval(t);
  }, [demoPlaying]);

  const TIPS: Record<string, string> = {
    // Pricing items
    "Hasta 3 clientes": "Gestiona hasta 3 marcas desde un panel centralizado. Cada cliente con sus propias redes y automatizaciones.",
    "Hasta 10 clientes": "Panel multi-cliente para hasta 10 marcas. Cambia entre clientes en un clic sin perder contexto.",
    "Clientes ilimitados": "Sin límite de clientes. Añade todas las agencias y marcas que necesites sin coste adicional.",
    "Programación de contenido": "Importa desde Dropbox o Drive, elige fecha y hora, y Plain publica solo. Admite imágenes, vídeos y carruseles.",
    "Programación ilimitada": "Posts ilimitados en todas las redes. Sin restricciones de volumen ni de calendario.",
    "5 automatizaciones activas": "Crea hasta 5 reglas activas: cuando alguien comente una keyword, Plain envía un DM automático al instante.",
    "Automatizaciones ilimitadas": "Reglas ilimitadas por cliente. Diferentes keywords, mensajes y horarios. 100% en automático.",
    "Analytics · últimos 12 meses": "Dashboard de métricas por cuenta: alcance, engagement, seguidores e impresiones. Histórico de hasta 12 meses.",
    "Analytics · histórico 12 meses": "Dashboard de métricas por cuenta: alcance, engagement, seguidores e impresiones. Histórico completo de 12 meses.",
    "Dropbox / Drive": "Conecta tu Dropbox o Google Drive y accede al contenido de tus clientes directamente desde Plain.",
    "Todos los almacenamientos": "Dropbox, Google Drive, OneDrive y almacenamiento local. Compatible con todos los flujos de trabajo.",
    "Soporte por email": "Soporte por email en horario de oficina con respuesta garantizada en menos de 24h.",
    "Soporte prioritario": "Acceso prioritario al equipo con respuesta en menos de 4 horas en días laborables.",
    "Soporte 24/7": "Soporte disponible 24h/7d vía chat y email. Para agencias que no pueden permitirse esperar.",
    "Usuarios ilimitados": "Añade todo tu equipo sin coste extra. Roles y permisos por usuario.",
    "White-label (próx.)": "Próximamente: personaliza Plain con tu marca, colores y dominio propio para venderlo a tus clientes.",
    "API (próx.)": "Próximamente: API REST para integrar Plain con tus herramientas, CRMs y flujos de trabajo personalizados.",
    "Onboarding dedicado": "Sesión 1:1 con nuestro equipo para configurar todo desde cero. Incluye migración de Metricool.",
    // Features section — automatización
    "Múltiples palabras clave": "Define tantas keywords como necesites: 'INFO', 'PRECIO', 'RESERVA', 'LINK'... cada una con su propio mensaje y flujo de respuesta.",
    "Mensajes con variantes": "Añade variantes al mismo mensaje para que Instagram no los detecte como spam. Plain los rota automáticamente.",
    "Respuesta pública + DM": "Además del DM privado, Plain puede dejar un comentario público en la publicación. Doble impacto con un solo clic.",
    "Incluir enlaces y CTAs": "Añade URLs, botones de llamada a la acción y emojis en tus mensajes automáticos. Lleva tráfico a donde quieras.",
    // Features section — programación
    "Calendario visual": "Vista mensual de todas las publicaciones programadas. Arrastra y suelta para reorganizar. Filtrable por cliente y red.",
    "Dropbox y Drive": "Conecta las carpetas de tus clientes directamente. Sin descargar ni subir archivos — Plain accede y publica desde ahí.",
    "Posts, Reels y Stories": "Programa cualquier formato de Instagram: feed, Reels cortos y largos, Stories con stickers y links.",
    "Publicación automática": "Cero intervención manual. Plain publica a la hora exacta programada, incluso cuando estás de vacaciones.",
    // Features section — multi-cliente
    "Panel multi-cliente": "Un solo login. Todos tus clientes en una barra lateral. Cambia de cuenta en menos de 2 segundos.",
    "Branding por cliente": "Cada cliente tiene su propio color, logo y configuración. La experiencia parece hecha a medida para cada marca.",
    "Roles de equipo": "Asigna permisos distintos a cada miembro: admin, editor o visualizador. Controla quién puede publicar o configurar automatizaciones.",
    "Sin límite de cuentas": "Desde el plan Pro, gestiona tantos clientes como quieras sin pagar más. Escala sin fricciones.",
    // Small feature cards
    "Almacenamiento conectado": "Dropbox, Google Drive y OneDrive integrados de forma nativa. Accede a los activos de tus clientes sin salir de Plain.",
    "Métricas en tiempo real": "Dashboard de rendimiento con alcance, impresiones, engagement y crecimiento de seguidores actualizado cada hora.",
    "Seguro y conforme RGPD": "Todos los datos se procesan en servidores europeos. Cumplimiento total con Meta, RGPD y la normativa española.",
  };

  const NET_ICONS = [
    { label:"Instagram", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#E1306C"}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { label:"Facebook", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#1877F2"}}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { label:"TikTok", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#000"}}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
    { label:"LinkedIn", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#0A66C2"}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label:"YouTube", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#FF0000"}}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
    { label:"Pinterest", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#E60023"}}><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
    { label:"X", el:<svg viewBox="0 0 24 24" style={{width:14,height:14,fill:"#000"}}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
  ];

  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", color: "#0a0a0a", background: "#fff" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #f0f0f0" }}>
        <div className="nav-inner" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          <a href="/" style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.5px", textDecoration: "none", color: "#0a0a0a" }}>
            <img src="/logo.svg" alt="Plain" style={{ height: 34, display: "block" }} />
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 500, color: "#555" }}>
            {[["#features","Funciones"],["#comparativa","Comparativa"],["#precios","Precios"],["#faq","FAQ"]].map(([h,l])=>(
              <a key={h} href={h} style={{ textDecoration: "none", color: "inherit" }}>{l}</a>
            ))}
          </div>
          <div className="nav-actions" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href={`${D}/login`} className="nav-login" style={{ fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" }}>Iniciar sesión</a>
            <a href={`${D}/register`} className="grad-btn nav-cta" style={{ fontSize: 14, fontWeight: 600, padding: "9px 20px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}>
              Prueba gratis 14 días
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ paddingTop: 140, paddingBottom: 100, textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Bg blobs */}
        <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 100, left: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(244,63,94,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 80, right: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div className="badge anim-up" style={{ marginBottom: 28 }}>
            <Sparkles size={13} style={{ color: "#a855f7" }} />
            Programación · Automatización · Multi-cliente
          </div>

          <h1 className="anim-up-1 hero-title" style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 24, maxWidth: 900, margin: "0 auto 24px" }}>
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
          <p style={{ marginTop: 14, fontSize: 13, color: "#767676" }}>14 días gratis · Sin tarjeta · Cancela cuando quieras</p>

          {/* Hero card mockup */}
          <div aria-hidden="true" className="float hero-card" style={{ marginTop: 60, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)" }}>
              {/* Window bar */}
              <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 18px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#aaa", fontWeight: 500 }}>dashboard.plainsocial.app — Automatizaciones</span>
              </div>
              {/* Content */}
              <div className="hero-card-grid" style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
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
      <div className="sep" style={{ maxWidth: 1400, margin: "0 auto 0" }} />
      <section className="logos-section" style={{ padding: "28px 32px", maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#ccc", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>Integra con tus herramientas</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 36px" }}>
          {[
            { name: "Instagram", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            { name: "Facebook", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            { name: "TikTok", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
            { name: "LinkedIn", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { name: "Dropbox", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M6 2L0 5.75l6 3.75 6-3.75zm12 0l-6 3.75 6 3.75 6-3.75zM0 11.25L6 15l6-3.75L6 7.5zm12 0L18 15l6-3.75-6-3.75zM6 16.25L12 20l6-3.75-6-3.75z"/></svg> },
            { name: "Google Drive", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"/></svg> },
            { name: "OneDrive", svg: <svg viewBox="0 0 24 24" style={{width:22,height:22,fill:"#ccc"}}><path d="M17.5 12.5a5 5 0 00-9.8-1.4A4 4 0 108 19h9.5a3.5 3.5 0 000-7h-.5z"/></svg> },
            { name: "YouTube", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
            { name: "Pinterest", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
            { name: "X / Twitter", svg: <svg viewBox="0 0 24 24" style={{width:18,height:18,fill:"#ccc"}}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
            { name: "Canva", svg: <svg viewBox="0 0 24 24" style={{width:20,height:20,fill:"#ccc"}}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.9 14.7c-.3.9-1.2 1.8-2.7 1.8-2.1 0-3.6-1.65-3.6-3.9s1.5-3.9 3.6-3.9c1.5 0 2.4.9 2.7 1.8.075.225-.075.45-.3.45h-.75c-.15 0-.3-.075-.375-.225-.225-.6-.75-.975-1.275-.975-1.2 0-1.95 1.05-1.95 2.85s.75 2.85 1.95 2.85c.525 0 1.05-.375 1.275-.975.075-.15.225-.225.375-.225h.75c.225 0 .375.225.3.45z"/></svg> },
          ].map(({ name, svg }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              {svg}
              <span style={{ fontSize: 13, fontWeight: 600, color: "#ccc" }}>{name}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="sep" style={{ maxWidth: 1400, margin: "0 auto" }} />

      {/* ── PROBLEM ── */}
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>
              El problema que todas las agencias tienen
            </h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              Pagas dos suscripciones para hacer lo que Plain hace solo.
            </p>
          </div>
          <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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
                    <div><div style={{ fontWeight: 700, fontSize: 13 }}>{t}</div><div style={{ fontSize: 12, color: "#767676" }}>{d}</div></div>
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
              <p style={{ fontSize: 11, color: "#767676", marginTop: 10 }}>Precio fijo — sin sorpresas, sin contar contactos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section-pad" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Todo lo que necesita tu agencia</h2>
            <p style={{ fontSize: 18, color: "#666" }}>Tres pilares. Un solo panel.</p>
          </div>
          <div className="features-main-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 16 }}>
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
                    <li key={i}
                      onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:i,desc:TIPS[i]??i,x:r.left+r.width/2,y:r.top-8}); }}
                      onMouseLeave={()=>setTip(null)}
                      style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#444", cursor: TIPS[i] ? "help" : "default", borderRadius: 6, padding: "2px 4px", transition: "background 0.1s" }}
                      onMouseOver={e=>{ if(TIPS[i])(e.currentTarget as HTMLElement).style.background="#f9f5ff"; }}
                      onMouseOut={e=>{ (e.currentTarget as HTMLElement).style.background="transparent"; }}>
                      <Check size={13} style={{ color: grad[1], flexShrink: 0 }} />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="features-sub-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { icon: FolderOpen, c: "#ea580c", bg: "#fff7ed", t: "Almacenamiento conectado", d: "Dropbox, Drive, OneDrive. Tus activos siempre a mano." },
              { icon: TrendingUp, c: "#2563eb", bg: "#eff6ff", t: "Métricas en tiempo real", d: "Rendimiento de cada cliente en un solo panel." },
              { icon: Shield, c: "#059669", bg: "#ecfdf5", t: "Seguro y conforme RGPD", d: "Datos en Europa. Cumplimiento total con Meta." },
            ].map(({ icon: Icon, c, bg, t, d })=>(
              <div key={t} className="card" style={{ padding: 20, display: "flex", gap: 14, background: "white", cursor: "help" }}
                onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:t,desc:TIPS[t]??d,x:r.left+r.width/2,y:r.top-8}); }}
                onMouseLeave={()=>setTip(null)}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} style={{ color: c }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 12, color: "#767676" }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI CONTENT ── */}
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: "100%", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
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
          <div className="ai-flow-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1100, margin: "0 auto 60px" }}>
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
                <span style={{ marginLeft: 10, fontSize: 12, color: "#767676", fontWeight: 500 }}>Plain IA — Generación automática de contenido</span>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,rgba(168,85,247,0.1),rgba(6,182,212,0.1))", border: "1px solid rgba(168,85,247,0.2)", borderRadius: 20, padding: "4px 12px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: 11, color: "#a855f7", fontWeight: 600 }}>IA procesando</span>
                </div>
              </div>
              <div className="ai-demo-grid" style={{ padding: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Left: folder + selection */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>Carpeta analizada: /Delio/Marzo 2026</div>
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
                  <div style={{ marginTop: 12, fontSize: 12, color: "#767676" }}>3 de 6 piezas seleccionadas · Puntuación media: 9.1</div>
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
                          <span style={{ color: "#767676" }}>{d} · {h}</span>
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

      {/* ── DEMO ANIMADA ── */}
      <section className="section-pad" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <Play size={12} style={{ color: "#a855f7" }} />
              Cómo funciona — en 4 pasos
            </div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>
              De la carpeta de Dropbox<br />
              <span className="grad-text">al post publicado. Solo.</span>
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              Conecta una carpeta, indica el cliente y Plain hace el resto — IA incluida.
            </p>
          </div>

          {/* Step tabs */}
          <div className="demo-tabs" style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {[
              { n: "01", label: "Conectas la carpeta" },
              { n: "02", label: "La IA selecciona" },
              { n: "03", label: "Escribe el copy" },
              { n: "04", label: "Calendariza" },
            ].map(({ n, label }, i) => (
              <button key={n} onClick={() => { setDemoStep(i); setDemoPlaying(false); }}
                style={{ padding: "8px 18px", borderRadius: 100, cursor: "pointer", fontSize: 13, fontWeight: 700, transition: "all 0.2s",
                  background: demoStep === i ? "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)" : "white",
                  color: demoStep === i ? "white" : "#888",
                  boxShadow: demoStep === i ? "0 4px 16px rgba(168,85,247,0.3)" : "0 1px 4px rgba(0,0,0,0.08)",
                  border: demoStep === i ? "none" : "1px solid #e8e8e8",
                }}>
                <span style={{ opacity: 0.7, marginRight: 6 }}>{n}</span>{label}
              </button>
            ))}
            <button onClick={() => setDemoPlaying(p => !p)}
              style={{ padding: "8px 14px", borderRadius: 100, border: "1px solid #e8e8e8", background: "white", cursor: "pointer", color: "#767676", display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
              {demoPlaying ? <Pause size={12} /> : <Play size={12} />}
              {demoPlaying ? "Pausa" : "Auto"}
            </button>
          </div>

          {/* Demo screen */}
          <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            {/* Window bar */}
            <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "#767676", fontWeight: 500 }}>Plain · Contenido automático</span>
              {/* Progress bar */}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{ width: i === demoStep ? 24 : 8, height: 6, borderRadius: 100, transition: "all 0.4s",
                    background: i === demoStep ? "linear-gradient(90deg,#f43f5e,#a855f7)" : i < demoStep ? "#a855f7" : "#e8e8e8" }} />
                ))}
              </div>
            </div>

            {/* Content — step 0: Conectar carpeta */}
            {demoStep === 0 && (
              <div className="demo-step-grid" style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, minHeight: 320 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Almacenamiento conectado</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { name: "Dropbox", sub: "Conectado · 3 carpetas", color: "#0061ff", active: true },
                      { name: "Google Drive", sub: "Conectado · 5 carpetas", color: "#34a853", active: true },
                      { name: "OneDrive", sub: "No conectado", color: "#0078d4", active: false },
                    ].map(s => (
                      <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12, border: `1px solid ${s.active ? "rgba(168,85,247,0.15)" : "#f0f0f0"}`, background: s.active ? "rgba(168,85,247,0.03)" : "#fafafa" }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: s.active ? s.color : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <FolderOpen size={16} style={{ color: s.active ? "white" : "#ccc" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: s.active ? "#a855f7" : "#bbb" }}>{s.sub}</div>
                        </div>
                        {s.active && <Check size={14} style={{ color: "#22c55e" }} />}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Carpeta seleccionada: /Delio/Abril 2026</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                    {["IMG_001.jpg","VID_002.mp4","IMG_003.jpg","IMG_004.jpg","VID_005.mp4","IMG_006.jpg"].map((f,i) => (
                      <div key={f} style={{ aspectRatio:"1", borderRadius: 10, background: f.includes("VID") ? "#faf5ff" : "#f9fafb", border: "1px solid #f0f0f0", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                        {f.includes("VID") ? <div style={{ fontSize: 18 }}>🎬</div> : <ImageIcon size={18} style={{ color: "#d1d5db" }} />}
                        <span style={{ fontSize: 9, color: "#767676", fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 12, color: "#767676" }}>6 archivos listos para analizar →</div>
                </div>
              </div>
            )}

            {/* Content — step 1: IA selecciona */}
            {demoStep === 1 && (
              <div style={{ padding: 32, minHeight: 320 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>IA analizando contenido · Delio / Abril 2026</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12, marginBottom: 24 }}>
                  {[
                    { f:"IMG_001.jpg", score:9.4, sel:true, reason:"Alta luminosidad, producto bien centrado" },
                    { f:"VID_002.mp4", score:6.1, sel:false, reason:"Movimiento borroso en los primeros segundos" },
                    { f:"IMG_003.jpg", score:8.8, sel:true, reason:"Colores vibrantes, fondo limpio" },
                    { f:"IMG_004.jpg", score:5.9, sel:false, reason:"Sobreexpuesto, poco contraste" },
                    { f:"VID_005.mp4", score:9.1, sel:true, reason:"Reel dinámico, ritmo perfecto para Instagram" },
                    { f:"IMG_006.jpg", score:7.2, sel:false, reason:"Encuadre correcto pero poco diferencial" },
                  ].map((item,i) => (
                    <div key={i}
                      title={item.reason}
                      style={{ aspectRatio:"1", borderRadius: 12, position:"relative", overflow:"hidden",
                        border: item.sel ? "2px solid #a855f7" : "2px solid #f0f0f0",
                        background: item.sel ? "linear-gradient(135deg,#faf5ff,#fce7f3)" : "#f9fafb",
                        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, cursor:"help" }}>
                      {item.f.includes("VID") ? <div style={{ fontSize:22 }}>🎬</div> : <ImageIcon size={20} style={{ color: item.sel ? "#a855f7" : "#d1d5db" }} />}
                      <div style={{ fontSize:11, fontWeight:800, color: item.sel ? "#a855f7" : "#bbb" }}>{item.score}</div>
                      {item.sel && <div style={{ position:"absolute", top:6, right:6, width:18, height:18, borderRadius:"50%", background:"#a855f7", display:"flex", alignItems:"center", justifyContent:"center" }}><Check size={10} style={{ color:"white" }} /></div>}
                      {!item.sel && <div style={{ position:"absolute", top:6, right:6, width:18, height:18, borderRadius:"50%", background:"#f3f4f6", display:"flex", alignItems:"center", justifyContent:"center" }}><X size={10} style={{ color:"#d1d5db" }} /></div>}
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 20px", borderRadius:12, background:"linear-gradient(135deg,rgba(168,85,247,0.06),rgba(6,182,212,0.06))", border:"1px solid rgba(168,85,247,0.12)" }}>
                  <div style={{ width:8, height:8, borderRadius:"50%", background:"#a855f7" }} />
                  <span style={{ fontSize:13, color:"#666" }}>IA seleccionó <strong style={{ color:"#a855f7" }}>3 de 6 piezas</strong> · Puntuación media: <strong>9.1 / 10</strong> · Estimación de alcance: <strong style={{ color:"#22c55e" }}>+34% vs media</strong></span>
                </div>
              </div>
            )}

            {/* Content — step 2: Escribe copy */}
            {demoStep === 2 && (
              <div className="demo-step-grid" style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, minHeight: 320 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Pieza seleccionada #1</div>
                  <div style={{ aspectRatio:"4/3", borderRadius:14, background:"linear-gradient(135deg,#fce7f3,#ede9fe)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
                    <ImageIcon size={40} style={{ color:"#c084fc" }} />
                  </div>
                  <div style={{ fontSize:11, color:"#767676" }}>IMG_001.jpg · Score 9.4 · Feed post</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>Copy generado por IA</div>
                  <div style={{ background:"#fafafa", border:"1px solid #f0f0f0", borderRadius:14, padding:18, marginBottom:12 }}>
                    <div style={{ fontSize:11, fontWeight:700, color:"#a855f7", marginBottom:10, textTransform:"uppercase", letterSpacing:"0.6px" }}>Tono · Cercano · Español</div>
                    <p style={{ fontSize:13, color:"#333", lineHeight:1.7 }}>
                      🍽️ Abril empieza con sabor en <strong>Delio</strong>.<br />
                      Nuevos platos de temporada que ya están esperándote en nuestra terraza.<br />
                      ¿Te apuntas esta semana? 👇<br />
                      <span style={{ color:"#a855f7" }}>#Delio #Barcelona #Gastronomía #RestauranteBarcelona #PlatosDeTemporada</span>
                    </p>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    {["Formal","Cercano","Humorístico"].map((t,i)=>(
                      <button key={t} style={{ padding:"5px 12px", borderRadius:100, fontSize:11, fontWeight:700, cursor:"pointer",
                        background: i===1 ? "linear-gradient(135deg,#f43f5e,#a855f7)" : "white",
                        color: i===1 ? "white" : "#767676",
                        boxShadow: i===1 ? "0 2px 8px rgba(168,85,247,0.3)" : "none",
                        border: i!==1 ? "1px solid #e8e8e8" : "none" }}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Content — step 3: Calendariza */}
            {demoStep === 3 && (
              <div style={{ padding: 32, minHeight: 320 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>Calendario de publicación — Abril 2026 · Delio</div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:8, marginBottom:16 }}>
                  {["L","M","X","J","V","S","D"].map(d=>(
                    <div key={d} style={{ textAlign:"center", fontSize:11, fontWeight:700, color:"#bbb", paddingBottom:4 }}>{d}</div>
                  ))}
                  {Array.from({length:30},(_,i)=>i+1).map(day=>{
                    const scheduled = [2,5,8,10,12,15,17,19,22,24,26,29].includes(day);
                    const isNew = [2,8,15].includes(day);
                    return (
                      <div key={day} style={{ aspectRatio:"1", borderRadius:8, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:600,
                        background: isNew ? "linear-gradient(135deg,#f43f5e,#a855f7)" : scheduled ? "rgba(168,85,247,0.08)" : "#f9fafb",
                        color: isNew ? "white" : scheduled ? "#a855f7" : "#ccc",
                        border: scheduled && !isNew ? "1px solid rgba(168,85,247,0.2)" : "1px solid transparent",
                        position:"relative" }}>
                        {day}
                        {isNew && <div style={{ position:"absolute", top:-4, right:-4, fontSize:8, background:"#22c55e", color:"white", borderRadius:100, padding:"1px 4px", fontWeight:800 }}>NEW</div>}
                      </div>
                    );
                  })}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:16, padding:"12px 18px", borderRadius:12, background:"rgba(34,197,94,0.06)", border:"1px solid rgba(34,197,94,0.15)" }}>
                  <Check size={16} style={{ color:"#22c55e", flexShrink:0 }} />
                  <span style={{ fontSize:13, color:"#666" }}>
                    <strong style={{ color:"#22c55e" }}>3 publicaciones calendarizadas</strong> automáticamente en los mejores horarios · Lun, Jue y Dom a las 18:30
                    · <strong>0 minutos de tu tiempo</strong>
                  </span>
                </div>
              </div>
            )}
          </div>

          <p style={{ textAlign:"center", fontSize:13, color:"#767676", marginTop:20 }}>
            Pasa el ratón sobre cada pieza para ver el análisis de la IA · Haz clic en los pasos para explorar
          </p>
        </div>
      </section>

      {/* ── METRICOOL MIGRATION ── */}
      <section className="section-pad" style={{ padding: "80px 32px", maxWidth: "100%", background: "linear-gradient(135deg,rgba(244,63,94,0.03),rgba(168,85,247,0.04),rgba(6,182,212,0.03))" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="metricool-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
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
                  { icon: BarChart2, color: "#f43f5e", bg: "#fff1f2", t: "Analytics · hasta 12 meses de histórico", d: "Importamos todas tus métricas: seguidores, alcance, engagement y publicaciones." },
                  { icon: Calendar, color: "#a855f7", bg: "#faf5ff", t: "Publicaciones programadas", d: "Importamos el calendario de contenido pendiente." },
                  { icon: Users, color: "#06b6d4", bg: "#ecfeff", t: "Clientes y cuentas", d: "Todas tus marcas conectadas, migradas automáticamente." },
                ].map(({ icon: Icon, color, bg, t, d }) => (
                  <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{t}</div>
                      <div style={{ fontSize: 13, color: "#767676" }}>{d}</div>
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
              <div style={{ fontSize: 13, fontWeight: 700, color: "#767676", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Importar desde Metricool</span>
                <span style={{ background: "linear-gradient(135deg,#f43f5e,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 800 }}>1 clic</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { item: "Analytics históricos (12 meses)", count: "importados", status: "✓", done: true },
                  { item: "Publicaciones programadas", count: "34 posts", status: "✓", done: true },
                  { item: "Cuentas conectadas", count: "8 clientes", status: "✓", done: true },
                  { item: "Automatizaciones IA", count: "nuevo", status: "★", done: false },
                  { item: "Respuestas automáticas DM", count: "nuevo", status: "★", done: false },
                ].map(({ item, count, status, done }) => (
                  <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 12, background: done ? "#f0fdf4" : "linear-gradient(135deg,rgba(244,63,94,0.04),rgba(168,85,247,0.06))", border: `1px solid ${done ? "#bbf7d0" : "rgba(168,85,247,0.15)"}` }}>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{item}</span>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "#767676" }}>{count}</span>
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
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
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
      <section id="comparativa" className="section-pad" style={{ padding: "100px 32px", background: "#0a0a0a", color: "white", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Plain vs. las alternativas</h2>
            <p style={{ fontSize: 18, color: "#666" }}>Por qué las agencias eligen Plain sobre pagar dos herramientas.</p>
          </div>
          <div className="comparison-wrap" style={{ overflowX: "auto" }}>
            <table className="comparison-table" style={{ width: "100%", maxWidth: 900, margin: "0 auto", borderCollapse: "collapse" }}>
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
                  ["Analytics · histórico 12 meses", true, true, false, false],
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
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>Lo que dicen las agencias</h2>
        </div>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
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
              <div style={{ fontSize: 12, color: "#767676" }}>{t.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" className="section-pad" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
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

          {/* Networks row */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontSize: 13, color: "#767676", marginBottom: 10, fontWeight: 500 }}>Todas las redes incluidas en cada plan · Cada cliente puede conectar todas simultáneamente</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {NET_ICONS.map(({ label, el }) => (
                <div key={label} title={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: "white", border: "1px solid #e8e8e8", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                  {/* scale up the icon for the header row */}
                  <span style={{ transform:"scale(1.25)", display:"flex" }}>{el}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
            {[
              { name:"Starter", desc:"Para freelancers y agencias pequeñas", price:p.s, hi:false,
                items:["Hasta 3 clientes","Programación de contenido","5 automatizaciones activas","Analytics · últimos 12 meses","Dropbox / Drive","Soporte por email"] },
              { name:"Pro", desc:"Para agencias en crecimiento", price:p.m, hi:true,
                items:["Hasta 10 clientes","Automatizaciones ilimitadas","Programación ilimitada","Analytics · histórico 12 meses","Todos los almacenamientos","Soporte prioritario"] },
              { name:"Agency", desc:"Para agencias con muchos clientes", price:p.a, hi:false,
                items:["Clientes ilimitados","Automatizaciones ilimitadas","Usuarios ilimitados","Analytics · histórico 12 meses","White-label (próx.)","API (próx.)","Onboarding dedicado","Soporte 24/7"] },
            ].map(pl=>(
              <div key={pl.name} style={{ borderRadius: 20, padding: 32, position: "relative", ...(pl.hi ? { background: "linear-gradient(145deg,#0a0a0a,#1a0a2e)", color: "white", boxShadow: "0 24px 60px rgba(168,85,247,0.25)" } : { background: "white", border: "1px solid #e8e8e8" }) }}>
                {pl.hi && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#f43f5e,#a855f7)", color: "white", fontSize: 11, fontWeight: 800, padding: "5px 16px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap" }}>Más popular</div>}
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{pl.name}</h3>
                  <p style={{ fontSize: 13, color: pl.hi ? "#9ca3af" : "#888" }}>{pl.desc}</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-2px" }}>€{pl.price}</span>
                  <span style={{ fontSize: 15, color: pl.hi ? "#6b7280" : "#767676" }}>/mes</span>
                  {annual && <div style={{ fontSize: 12, color: pl.hi ? "#a855f7" : "#22c55e", marginTop: 3 }}>Facturado anualmente</div>}
                </div>
                {/* All networks included */}
                <div style={{ marginBottom: 20, padding: "10px 14px", borderRadius: 10, background: pl.hi ? "rgba(168,85,247,0.12)" : "rgba(168,85,247,0.05)", border: `1px solid ${pl.hi ? "rgba(168,85,247,0.3)" : "rgba(168,85,247,0.12)"}` }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: pl.hi ? "#c084fc" : "#a855f7", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>Todas las redes por cliente</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {NET_ICONS.map(n=>(
                      <div key={n.label} title={n.label} style={{ display:"flex", alignItems:"center", justifyContent:"center", width:28, height:28, borderRadius:8, background: pl.hi ? "rgba(255,255,255,0.1)" : "white", border:`1px solid ${pl.hi ? "rgba(255,255,255,0.15)" : "#e8e8e8"}` }}>
                        {n.el}
                      </div>
                    ))}
                  </div>
                </div>
                <a href={`${D}/register`} style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 12, textDecoration: "none", marginBottom: 24, ...(pl.hi ? { background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", color: "white" } : { background: "#0a0a0a", color: "white" }) }}>
                  Empezar gratis
                </a>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {pl.items.map(it=>(
                    <li key={it}
                      onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:it,desc:TIPS[it]??it,x:r.left+r.width/2,y:r.top-8}); }}
                      onMouseLeave={()=>setTip(null)}
                      style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: pl.hi ? "#d1d5db" : "#555", cursor: TIPS[it] ? "help" : "default", borderRadius: 6, padding: "2px 0" }}>
                      <Check size={14} style={{ color: "#a855f7", flexShrink: 0 }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#767676", marginTop: 16 }}>Al conectar un nuevo cliente, Plain importa hasta 12 meses de datos históricos automáticamente.</p>
          <p style={{ textAlign: "center", fontSize: 13, color: "#767676", marginTop: 8 }}>14 días de prueba gratis · Sin tarjeta · Cancela cuando quieras</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
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
      <section className="section-pad" style={{ padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(244,63,94,0.04),rgba(168,85,247,0.06),rgba(6,182,212,0.04))", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
          <p style={{ marginTop: 14, fontSize: 13, color: "#767676" }}>Sin tarjeta de crédito · 10 minutos de configuración · Cancela cuando quieras</p>
        </div>
      </section>

      <div className="sep" />

      {/* ── FOOTER ── */}
      <footer className="section-pad" style={{ padding: "60px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.5px", marginBottom: 10 }}>
              <img src="/logo.svg" alt="Plain" style={{ height: 34, display: "block" }} />
            </div>
            <p style={{ fontSize: 13, color: "#767676", lineHeight: 1.7, maxWidth: 280 }}>La herramienta de gestión de redes sociales para agencias de marketing en España y LATAM.</p>
          </div>
          {[
            { t:"Producto", l:["Funciones","Precios","Comparativa","Changelog"] },
            { t:"Empresa", l:["Sobre Plain","Blog","Contacto","Partners"] },
            { t:"Legal", l:[{n:"Privacidad",h:"https://www.addicional.com/politica-de-privacidad/"},{n:"Términos",h:"/terminos"},{n:"Cookies",h:"/cookies"},{n:"Uso aceptable",h:"/uso-aceptable"}] },
          ].map(col=>(
            <div key={col.t}>
              <h4 style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", color: "#767676", marginBottom: 16 }}>{col.t}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map((item: string | {n:string,h:string})=>{
                  const label = typeof item === "string" ? item : item.n;
                  const href = typeof item === "string" ? "#" : item.h;
                  return <li key={label}><a href={href} style={{ fontSize: 14, color: "#767676", textDecoration: "none" }}>{label}</a></li>;
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="sep" style={{ marginBottom: 24 }} />
        <div style={{ textAlign: "center", fontSize: 12, color: "#ccc", letterSpacing: "0.3px" }}>
          Made in Sabadell
        </div>
      </footer>

      {/* ── TOOLTIP ── */}
      {tip && (
        <div className="tooltip-popup" style={{ position:"fixed", left: tip.x, top: tip.y, transform:"translate(-50%,-100%)", zIndex:9999, pointerEvents:"none", maxWidth:260 }}>
          <div style={{ background:"#0a0a0a", color:"white", borderRadius:10, padding:"10px 14px", boxShadow:"0 8px 32px rgba(0,0,0,0.2)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ fontSize:12, fontWeight:700, marginBottom:4, color:"#c084fc" }}>{tip.label}</p>
            <p style={{ fontSize:12, lineHeight:1.6, color:"#d1d5db" }}>{tip.desc}</p>
          </div>
          <div style={{ width:0, height:0, borderLeft:"6px solid transparent", borderRight:"6px solid transparent", borderTop:"6px solid #0a0a0a", margin:"0 auto" }} />
        </div>
      )}
    </div>
  );
}
