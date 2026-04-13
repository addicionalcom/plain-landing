"use client";
import { useState, useEffect } from "react";
import { Check, X, ArrowRight, MessageCircle, Calendar, Users, Zap, ChevronDown, Star, TrendingUp, FolderOpen, Shield, Sparkles, Brain, Import, BarChart2, ImageIcon, PenLine, Clock, Play, Pause } from "lucide-react";
import translations, { Lang, LANGS } from "../i18n/translations";

const D = "https://dashboard.plainsocial.app";

export default function LandingPage({ initialLang = "es" }: { initialLang?: Lang }) {
  const [annual, setAnnual] = useState(true);
  const [faq, setFaq] = useState<number | null>(null);
  const [tip, setTip] = useState<{label:string; desc:string; x:number; y:number}|null>(null);
  const [demoStep, setDemoStep] = useState(0);
  const [demoPlaying, setDemoPlaying] = useState(true);
  const [lang, setLang] = useState<Lang>(initialLang);
  const p = { s: annual ? 8 : 10, m: annual ? 33 : 40, a: annual ? 166 : 200 };

  interface ApiPlan { id: string; name: string; description: string; price: number; yearlyPrice: number | null; color: string; features: string; limits: string; isActive: boolean; showOnLanding: boolean; sortOrder: number; generatedFeatures?: string[]; }
  const [apiPlans, setApiPlans] = useState<ApiPlan[] | null>(null);

  useEffect(() => {
    fetch("https://dashboard.plainsocial.app/api/plans", { cache: "no-store" })
      .then(r => r.json())
      .then((data: ApiPlan[]) => {
        const filtered = data.filter(pl => pl.showOnLanding).sort((a, b) => a.sortOrder - b.sortOrder);
        setApiPlans(filtered);
      })
      .catch(() => setApiPlans(null));
  }, []);

  const handleLang = (l: Lang) => {
    if (typeof window !== "undefined") {
      window.location.href = l === "en" ? "/en" : "/";
    }
  };

  useEffect(() => {
    if (!demoPlaying) return;
    const timer = setInterval(() => setDemoStep(s => (s + 1) % 4), 3000);
    return () => clearInterval(timer);
  }, [demoPlaying]);

  const t = translations[lang];

  // Visual constants (no translation needed)
  const FEATURE_ICONS = [
    { icon: Zap, grad: ["#fce7f3","#f43f5e"] as [string,string] },
    { icon: Calendar, grad: ["#ede9fe","#a855f7"] as [string,string] },
    { icon: Users, grad: ["#ecfdf5","#059669"] as [string,string] },
  ];
  const SMALL_CARD_ICONS = [
    { icon: FolderOpen, c: "#ea580c", bg: "#fff7ed" },
    { icon: TrendingUp, c: "#2563eb", bg: "#eff6ff" },
    { icon: Shield, c: "#059669", bg: "#ecfdf5" },
  ];
  const AI_STEP_ICONS = [
    { icon: FolderOpen, color: "#f43f5e", bg: "#fff1f2" },
    { icon: Brain, color: "#a855f7", bg: "#faf5ff" },
    { icon: PenLine, color: "#6366f1", bg: "#eef2ff" },
    { icon: Clock, color: "#06b6d4", bg: "#ecfeff" },
  ];
  const MIGRATION_ICONS = [
    { icon: BarChart2, color: "#f43f5e", bg: "#fff1f2" },
    { icon: Calendar, color: "#a855f7", bg: "#faf5ff" },
    { icon: Users, color: "#06b6d4", bg: "#ecfeff" },
  ];
  const HIOW_COLORS = ["#f43f5e","#a855f7","#06b6d4","#059669"];
  const FLOW_ICONS = ["📁","🤖","📅","✅"];
  const STORAGE_CONFIGS = [
    { color: "#0061ff", active: true },
    { color: "#34a853", active: true },
    { color: "#0078d4", active: false },
  ];
  const DAY_NAMES = lang === "es" ? ["L","M","X","J","V","S","D"] : ["M","T","W","T","F","S","S"];

  const NET_ICONS = [
    { label:"Instagram", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { label:"Facebook", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { label:"TikTok", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
    { label:"LinkedIn", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label:"YouTube", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
    { label:"Pinterest", el:<svg viewBox="0 0 24 24" style={{width:16,height:16,fill:"#444"}}><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
    { label:"X", el:<svg viewBox="0 0 24 24" style={{width:14,height:14,fill:"#444"}}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
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
            {[["#features",t.nav.features],["#comparativa",t.nav.comparison],["#precios",t.nav.pricing],["#faq",t.nav.faq]].map(([h,l])=>(
              <a key={h} href={h} style={{ textDecoration: "none", color: "inherit" }}>{l}</a>
            ))}
          </div>
          <div className="nav-actions" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* Language switcher */}
            <div style={{ display: "flex", gap: 2, background: "#f5f5f5", borderRadius: 8, padding: 2 }}>
              {LANGS.map(({ code, label }) => (
                <button key={code} onClick={() => handleLang(code)}
                  style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
                    background: lang === code ? "white" : "transparent",
                    color: lang === code ? "#0a0a0a" : "#999",
                    boxShadow: lang === code ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                    transition: "all 0.15s" }}>
                  {label}
                </button>
              ))}
            </div>
            <a href={`${D}/login`} className="nav-login" style={{ fontSize: 14, fontWeight: 500, color: "#555", textDecoration: "none" }}>{t.nav.login}</a>
            <a href={`${D}/register`} className="grad-btn nav-cta" style={{ fontSize: 14, fontWeight: 600, padding: "9px 20px", borderRadius: 10, textDecoration: "none", display: "inline-block" }}>
              {t.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ paddingTop: 140, paddingBottom: 100, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 100, left: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(244,63,94,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 80, right: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          <div className="badge anim-up" style={{ marginBottom: 28 }}>
            <Sparkles size={13} style={{ color: "#a855f7" }} />
            {t.hero.badge}
          </div>

          <h1 className="anim-up-1 hero-title" style={{ fontSize: "clamp(40px, 5.5vw, 76px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 24, maxWidth: 960, margin: "0 auto 24px" }}>
            {t.hero.h1a}<br />
            <span className="grad-text">{t.hero.h1b}</span>
          </h1>

          <p className="anim-up-2" style={{ fontSize: 20, color: "#555", maxWidth: 620, margin: "0 auto 16px", lineHeight: 1.6 }}>
            {t.hero.p}
          </p>

          {/* Flow pills */}
          <div className="anim-up-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap", marginBottom: 36 }}>
            {t.hero.flowPills.flatMap((label, i) => {
              const items = [(
                <span key={`pill-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "white", border: "1px solid #e8e8e8", borderRadius: 100, padding: "5px 12px", fontSize: 13, fontWeight: 600, color: "#333", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <span>{FLOW_ICONS[i]}</span>{label}
                </span>
              )];
              if (i < t.hero.flowPills.length - 1) {
                items.push(<span key={`arrow-${i}`} style={{ color: "#ccc", fontWeight: 300, fontSize: 18 }}>→</span>);
              }
              return items;
            })}
          </div>

          <div className="anim-up-3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 16, fontWeight: 700, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              {t.hero.ctaPrimary} <ArrowRight size={18} />
            </a>
            <a href="#features" style={{ fontSize: 16, fontWeight: 600, padding: "14px 28px", borderRadius: 12, textDecoration: "none", border: "1px solid #e5e7eb", color: "#333", display: "inline-block", background: "white" }}>
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p style={{ marginTop: 14, fontSize: 13, color: "#767676" }}>{t.hero.footnote}</p>

          {/* Hero card mockup */}
          <div aria-hidden="true" className="float hero-card" style={{ marginTop: 60, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)" }}>
              <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 18px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#aaa", fontWeight: 500 }}>dashboard.plainsocial.app — Automatizaciones</span>
              </div>
              <div className="hero-card-grid" style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {/* Trigger panel */}
                <div style={{ gridColumn: "span 2", background: "#fafafa", borderRadius: 16, padding: 20, border: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "0.8px" }}>{t.hero.automationActive}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#fce7f3,#f3e8ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <MessageCircle size={14} style={{ color: "#a855f7" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{t.hero.commentReceived}</div>
                        <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 10, padding: "8px 12px", fontSize: 13, fontWeight: 500 }}>&quot;INFO&quot; 🙌</div>
                      </div>
                    </div>
                    <div style={{ paddingLeft: 42, display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>{t.hero.dmSent}</div>
                      <div style={{ background: "linear-gradient(135deg,rgba(244,63,94,0.06),rgba(168,85,247,0.06))", border: "1px solid rgba(168,85,247,0.15)", borderRadius: 10, padding: "8px 12px", fontSize: 12, color: "#6d28d9" }}>
                        {t.hero.dmMessage}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb" }}>
                    <span>{t.hero.ruleLabel}</span>
                    <span style={{ color: "#22c55e", fontWeight: 600 }}>{t.hero.dmsToday}</span>
                  </div>
                </div>
                {/* Stats */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    [t.hero.statClients,"12",t.hero.statClientsUp,"#22c55e"],
                    [t.hero.statScheduled,"48",t.hero.statScheduledSub,"#aaa"],
                    [t.hero.statDMs,"1.284",t.hero.statDMsSub,"#22c55e"],
                  ].map(([l,v,s,c])=>(
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
        <p style={{ fontSize: 12, fontWeight: 600, color: "#ccc", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>{t.logos.title}</p>
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
              {t.problem.h2}
            </h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 560, margin: "0 auto" }}>
              {t.problem.p}
            </p>
          </div>
          <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Without */}
            <div className="card" style={{ padding: 32, background: "#fff8f8", borderColor: "#ffe4e6" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X size={16} style={{ color: "#ef4444" }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17 }}>{t.problem.withoutTitle}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Metricool Starter","€29/mes",t.problem.metricoolDesc],
                  ["ManyChat","€25–65/mes*",t.problem.manychatDesc],
                ].map(([name,price,d])=>(
                  <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", border: "1px solid #fee2e2", borderRadius: 12, padding: "12px 16px" }}>
                    <div><div style={{ fontWeight: 700, fontSize: 13 }}>{name}</div><div style={{ fontSize: 12, color: "#767676" }}>{d}</div></div>
                    <div style={{ fontWeight: 800, color: "#ef4444", fontSize: 14 }}>{price}</div>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", border: "1px solid #fee2e2", borderRadius: 12, padding: "12px 16px", opacity: 0.6 }}>
                  <div><div style={{ fontWeight: 700, fontSize: 13, color: "#ef4444" }}>{t.problem.noAI}</div><div style={{ fontSize: 12, color: "#767676" }}>{t.problem.noAIDesc}</div></div>
                  <X size={16} style={{ color: "#ef4444" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fef2f2", border: "2px solid #fca5a5", borderRadius: 12, padding: "12px 16px" }}>
                  <span style={{ fontWeight: 800, fontSize: 15 }}>{t.problem.totalLabel}</span>
                  <span style={{ fontWeight: 900, color: "#ef4444", fontSize: 20 }}>€54–94/mes</span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#767676", marginTop: 10 }}>{t.problem.totalNote}</p>
            </div>
            {/* With */}
            <div className="card" style={{ padding: 32, background: "linear-gradient(135deg,rgba(244,63,94,0.03),rgba(168,85,247,0.05),rgba(6,182,212,0.03))", borderColor: "rgba(168,85,247,0.15)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#fce7f3,#ede9fe)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={16} style={{ color: "#a855f7" }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17 }}>{t.problem.withTitle}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {t.problem.withItems.map(f=>(
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 12, padding: "12px 16px" }}>
                    <Check size={15} style={{ color: "#a855f7", flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: 13 }}>{f}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", borderRadius: 12, padding: "12px 16px" }}>
                  <span style={{ fontWeight: 800, color: "white", fontSize: 15 }}>{t.problem.allFromLabel}</span>
                  <span style={{ fontWeight: 900, color: "white", fontSize: 20 }}>€10/mes</span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#767676", marginTop: 10 }}>{t.problem.guarantee}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section-pad" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>{t.features.h2}</h2>
            <p style={{ fontSize: 18, color: "#666" }}>{t.features.p}</p>
          </div>
          <div className="features-main-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 16 }}>
            {t.features.cards.map((card, ci) => {
              const { icon: Icon, grad } = FEATURE_ICONS[ci];
              return (
                <div key={card.title} className="card" style={{ padding: 28, background: "white" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: grad[0], display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={22} style={{ color: grad[1] }} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.4px", marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 20 }}>{card.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {card.items.map(item=>(
                      <li key={item.label}
                        onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:item.label,desc:item.tip,x:r.left+r.width/2,y:r.top-8}); }}
                        onMouseLeave={()=>setTip(null)}
                        style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#444", cursor: "help", borderRadius: 6, padding: "2px 4px", transition: "background 0.1s" }}
                        onMouseOver={e=>{ (e.currentTarget as HTMLElement).style.background="#f9f5ff"; }}
                        onMouseOut={e=>{ (e.currentTarget as HTMLElement).style.background="transparent"; }}>
                        <Check size={13} style={{ color: grad[1], flexShrink: 0 }} />{item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="features-sub-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {t.features.smallCards.map((sc, si) => {
              const { icon: Icon, c, bg } = SMALL_CARD_ICONS[si];
              return (
                <div key={sc.t} className="card" style={{ padding: 20, display: "flex", gap: 14, background: "white", cursor: "help" }}
                  onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:sc.t,desc:sc.tip,x:r.left+r.width/2,y:r.top-8}); }}
                  onMouseLeave={()=>setTip(null)}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} style={{ color: c }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{sc.t}</div>
                    <div style={{ fontSize: 12, color: "#767676" }}>{sc.d}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AI CONTENT ── */}
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: "100%", background: "white" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 20 }}>
              <Brain size={13} style={{ color: "#a855f7" }} />
              {t.ai.badge}
            </div>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 16 }}>
              {t.ai.h2a}<br />
              <span className="grad-text">{t.ai.h2b}</span>
            </h2>
            <p style={{ fontSize: 20, color: "#666", maxWidth: 680, margin: "0 auto" }}>
              {t.ai.p}
            </p>
          </div>

          {/* Flow visual */}
          <div className="ai-flow-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, maxWidth: 1100, margin: "0 auto 60px" }}>
            {t.ai.steps.map((step, si) => {
              const { icon: Icon, color, bg } = AI_STEP_ICONS[si];
              const stepNum = String(si + 1).padStart(2, "0");
              return (
                <div key={stepNum} className="card" style={{ padding: 28, background: "white", position: "relative" }}>
                  <div style={{ position: "absolute", top: 20, right: 20, fontWeight: 900, fontSize: 13, color: "#f0f0f0", letterSpacing: "-0.5px" }}>{stepNum}</div>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8, letterSpacing: "-0.3px" }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Demo card */}
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="card" style={{ padding: 0, overflow: "hidden", background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 10, fontSize: 12, color: "#767676", fontWeight: 500 }}>{t.ai.demoWindowLabel}</span>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,rgba(168,85,247,0.1),rgba(6,182,212,0.1))", border: "1px solid rgba(168,85,247,0.2)", borderRadius: 20, padding: "4px 12px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: 11, color: "#a855f7", fontWeight: 600 }}>{t.ai.demoProcessing}</span>
                </div>
              </div>
              <div className="ai-demo-grid" style={{ padding: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 }}>{t.ai.demoFolderLabel}</div>
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
                  <div style={{ marginTop: 12, fontSize: 12, color: "#767676" }}>{t.ai.demoPiecesSelected}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{t.ai.demoCopyLabel}</div>
                    <div style={{ fontSize: 10, color: "#999", marginBottom: 6 }}>{t.ai.demoCopyTone}</div>
                    <p style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>
                      ✨ Empieza la semana con energía en Delio 🍽️<br />
                      Nuevos platos de temporada que ya están esperándote.<br />
                      Reserva tu mesa y descubre el sabor de marzo.<br />
                      <span style={{ color: "#a855f7" }}>#Delio #RestauranteBarcelona #GastronomíaLocal</span>
                    </p>
                  </div>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f0", borderRadius: 14, padding: 16 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>{t.ai.demoCalLabel}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[["Lun 3 Mar","18:30","Post principal","✓"],["Mié 5 Mar","12:00","Story animada","✓"],["Vie 7 Mar","19:00","Reel receta","✓"]].map(([d,h,ct,s])=>(
                        <div key={d} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 }}>
                          <span style={{ color: "#767676" }}>{d} · {h}</span>
                          <span style={{ fontWeight: 600, color: "#444" }}>{ct}</span>
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
              {t.demo.badge}
            </div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>
              {t.demo.h2a}<br />
              <span className="grad-text">{t.demo.h2b}</span>
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto" }}>
              {t.demo.p}
            </p>
          </div>

          {/* Step tabs */}
          <div className="demo-tabs" style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {t.demo.steps.map(({ n, label }, i) => (
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
            <button onClick={() => setDemoPlaying(dp => !dp)}
              style={{ padding: "8px 14px", borderRadius: 100, border: "1px solid #e8e8e8", background: "white", cursor: "pointer", color: "#767676", display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
              {demoPlaying ? <Pause size={12} /> : <Play size={12} />}
              {demoPlaying ? t.demo.pause : t.demo.auto}
            </button>
          </div>

          {/* Demo screen */}
          <div style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            <div style={{ background: "#fafafa", borderBottom: "1px solid #f0f0f0", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "#767676", fontWeight: 500 }}>{t.demo.windowLabel}</span>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{ width: i === demoStep ? 24 : 8, height: 6, borderRadius: 100, transition: "all 0.4s",
                    background: i === demoStep ? "linear-gradient(90deg,#f43f5e,#a855f7)" : i < demoStep ? "#a855f7" : "#e8e8e8" }} />
                ))}
              </div>
            </div>

            {/* Step 0 */}
            {demoStep === 0 && (
              <div className="demo-step-grid" style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, minHeight: 320 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>{t.demo.storageTitle}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {t.demo.storageItems.map((s, si) => {
                      const cfg = STORAGE_CONFIGS[si];
                      return (
                        <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12, border: `1px solid ${cfg.active ? "rgba(168,85,247,0.15)" : "#f0f0f0"}`, background: cfg.active ? "rgba(168,85,247,0.03)" : "#fafafa" }}>
                          <div style={{ width: 36, height: 36, borderRadius: 10, background: cfg.active ? cfg.color : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <FolderOpen size={16} style={{ color: cfg.active ? "white" : "#ccc" }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 700 }}>{s.name}</div>
                            <div style={{ fontSize: 11, color: cfg.active ? "#a855f7" : "#bbb" }}>{s.sub}</div>
                          </div>
                          {cfg.active && <Check size={14} style={{ color: "#22c55e" }} />}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>{t.demo.selectedFolder}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                    {["IMG_001.jpg","VID_002.mp4","IMG_003.jpg","IMG_004.jpg","VID_005.mp4","IMG_006.jpg"].map((f,i) => (
                      <div key={f} style={{ aspectRatio:"1", borderRadius: 10, background: f.includes("VID") ? "#faf5ff" : "#f9fafb", border: "1px solid #f0f0f0", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                        {f.includes("VID") ? <div style={{ fontSize: 18 }}>🎬</div> : <ImageIcon size={18} style={{ color: "#d1d5db" }} />}
                        <span style={{ fontSize: 9, color: "#767676", fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 12, color: "#767676" }}>{t.demo.filesReady}</div>
                </div>
              </div>
            )}

            {/* Step 1 */}
            {demoStep === 1 && (
              <div style={{ padding: 32, minHeight: 320 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>{t.demo.aiAnalyzing}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12, marginBottom: 24 }}>
                  {[
                    { f:"IMG_001.jpg", score:9.4, sel:true, reason:"Alta luminosidad, producto bien centrado" },
                    { f:"VID_002.mp4", score:6.1, sel:false, reason:"Movimiento borroso en los primeros segundos" },
                    { f:"IMG_003.jpg", score:8.8, sel:true, reason:"Colores vibrantes, fondo limpio" },
                    { f:"IMG_004.jpg", score:5.9, sel:false, reason:"Sobreexpuesto, poco contraste" },
                    { f:"VID_005.mp4", score:9.1, sel:true, reason:"Reel dinámico, ritmo perfecto para Instagram" },
                    { f:"IMG_006.jpg", score:7.2, sel:false, reason:"Encuadre correcto pero poco diferencial" },
                  ].map((item,i) => (
                    <div key={i} title={item.reason}
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
                  <span style={{ fontSize:13, color:"#666" }} dangerouslySetInnerHTML={{ __html: t.demo.aiSummary }} />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {demoStep === 2 && (
              <div className="demo-step-grid" style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, minHeight: 320 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>{t.demo.selectedPiece}</div>
                  <div style={{ aspectRatio:"4/3", borderRadius:14, background:"linear-gradient(135deg,#fce7f3,#ede9fe)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
                    <ImageIcon size={40} style={{ color:"#c084fc" }} />
                  </div>
                  <div style={{ fontSize:11, color:"#767676" }}>IMG_001.jpg · Score 9.4 · Feed post</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>{t.demo.copyLabel}</div>
                  <div style={{ background:"#fafafa", border:"1px solid #f0f0f0", borderRadius:14, padding:18, marginBottom:12 }}>
                    <div style={{ fontSize:11, fontWeight:700, color:"#a855f7", marginBottom:10, textTransform:"uppercase", letterSpacing:"0.6px" }}>{t.demo.tones[1]} · Español</div>
                    <p style={{ fontSize:13, color:"#333", lineHeight:1.7 }}>
                      🍽️ Abril empieza con sabor en <strong>Delio</strong>.<br />
                      Nuevos platos de temporada que ya están esperándote en nuestra terraza.<br />
                      ¿Te apuntas esta semana? 👇<br />
                      <span style={{ color:"#a855f7" }}>#Delio #Barcelona #Gastronomía #RestauranteBarcelona #PlatosDeTemporada</span>
                    </p>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    {t.demo.tones.map((tone,i)=>(
                      <button key={tone} style={{ padding:"5px 12px", borderRadius:100, fontSize:11, fontWeight:700, cursor:"pointer",
                        background: i===1 ? "linear-gradient(135deg,#f43f5e,#a855f7)" : "white",
                        color: i===1 ? "white" : "#767676",
                        boxShadow: i===1 ? "0 2px 8px rgba(168,85,247,0.3)" : "none",
                        border: i!==1 ? "1px solid #e8e8e8" : "none" }}>{tone}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {demoStep === 3 && (
              <div style={{ padding: 32, minHeight: 320 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#767676", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>{t.demo.calLabel}</div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:8, marginBottom:16 }}>
                  {DAY_NAMES.map(d=>(
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
                  <span style={{ fontSize:13, color:"#666" }} dangerouslySetInnerHTML={{ __html: t.demo.calSummary }} />
                </div>
              </div>
            )}
          </div>

          <p style={{ textAlign:"center", fontSize:13, color:"#767676", marginTop:20 }}>
            {t.demo.hoverHint}
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
                {t.migration.badge}
              </div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 16 }}>
                {t.migration.h2a}<br />
                <span className="grad-text">{t.migration.h2b}</span>
              </h2>
              <p style={{ fontSize: 17, color: "#666", lineHeight: 1.7, marginBottom: 28 }}>
                {t.migration.p}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {t.migration.items.map((item, mi) => {
                  const { icon: Icon, color, bg } = MIGRATION_ICONS[mi];
                  return (
                    <div key={item.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 38, height: 38, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{item.t}</div>
                        <div style={{ fontSize: 13, color: "#767676" }}>{item.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 15, fontWeight: 700, padding: "13px 24px", borderRadius: 12, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                {t.migration.cta} <ArrowRight size={17} />
              </a>
            </div>
            {/* Visual */}
            <div className="card" style={{ padding: 28, background: "white" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#767676", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>{t.migration.cardTitle}</span>
                <span style={{ background: "linear-gradient(135deg,#f43f5e,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 800 }}>{t.migration.cardOneClick}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {t.migration.cardItems.map(({ item, count }, i) => {
                  const done = i < 3;
                  return (
                    <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 12, background: done ? "#f0fdf4" : "linear-gradient(135deg,rgba(244,63,94,0.04),rgba(168,85,247,0.06))", border: `1px solid ${done ? "#bbf7d0" : "rgba(168,85,247,0.15)"}` }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{item}</span>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#767676" }}>{count}</span>
                        <span style={{ fontWeight: 800, fontSize: 16, color: done ? "#22c55e" : "#a855f7" }}>{done ? "✓" : "★"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 20, padding: "14px", background: "#0a0a0a", borderRadius: 14, textAlign: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{t.migration.cardDone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>{t.howItWorks.h2}</h2>
            <p style={{ fontSize: 18, color: "#666" }}>{t.howItWorks.p}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {t.howItWorks.steps.map(([n,title,desc], si) => {
              const c = HIOW_COLORS[si];
              return (
                <div key={n} className="card" style={{ padding: 24, display: "flex", gap: 20, alignItems: "flex-start", background: "white" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg,${c}22,${c}44)`, border: `1px solid ${c}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: 18, color: c }}>{n}</span>
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section id="comparativa" className="section-pad" style={{ padding: "100px 32px", background: "#0a0a0a", color: "white", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>{t.comparison.h2}</h2>
            <p style={{ fontSize: 18, color: "#666" }}>{t.comparison.p}</p>
          </div>
          <div className="comparison-wrap" style={{ overflowX: "auto" }}>
            <table className="comparison-table" style={{ width: "100%", maxWidth: 960, margin: "0 auto", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 20px", color: "#444", fontWeight: 600, fontSize: 13, width: "32%" }}>{t.comparison.functionCol}</th>
                  <th style={{ padding: "12px 20px", textAlign: "center" }}>
                    <span style={{ background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", padding: "6px 16px", borderRadius: 8, fontWeight: 800, fontSize: 13 }}>Plain</span>
                  </th>
                  {["Metricool","ManyChat","Metricool\n+ ManyChat"].map(n=>(
                    <th key={n} style={{ padding: "12px 20px", textAlign: "center", color: "#555", fontWeight: 600, fontSize: 13, whiteSpace: "pre-line" }}>{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row,i)=>(
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", ...(i===t.comparison.rows.length-1 ? { background: "rgba(168,85,247,0.05)" } : {}) }}>
                    <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: i===t.comparison.rows.length-1 ? 700 : 500, color: i===t.comparison.rows.length-1 ? "white" : "#ccc" }}>{row[0]}</td>
                    {row.slice(1).map((v,j)=>(
                      <td key={j} style={{ padding: "14px 20px", textAlign: "center" }}>
                        {v===true ? <Check size={18} style={{ color: "#a855f7", margin: "0 auto" }} />
                        : v===false ? <X size={18} style={{ color: "#333", margin: "0 auto" }} />
                        : <span style={{ fontSize: 13, fontWeight: 700, color: j===0 ? "#c084fc" : j===3 ? "#ef4444" : "#555" }}>{v as string}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", fontSize: 11, color: "#444", marginTop: 20 }}>
            {t.comparison.footnote}
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>{t.testimonials.h2}</h2>
        </div>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {t.testimonials.items.map(item=>(
            <div key={item.a} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_,i)=><Star key={i} size={15} style={{ color: "#fbbf24", fill: "#fbbf24" }} />)}
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>&quot;{item.q}&quot;</p>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{item.a}</div>
              <div style={{ fontSize: 12, color: "#767676" }}>{item.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="precios" className="section-pad" style={{ padding: "100px 32px", background: "#fafafa", maxWidth: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,rgba(244,63,94,0.08),rgba(168,85,247,0.08))", border: "1px solid rgba(168,85,247,0.25)", borderRadius: 100, padding: "7px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 14 }}>🔒</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#a855f7" }}>{t.pricing.badge}</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 12 }}>{t.pricing.h2}</h2>
            <p style={{ fontSize: 18, color: "#666", maxWidth: 540, margin: "0 auto 8px" }}>
              {t.pricing.p}
            </p>
            <p style={{ fontSize: 14, color: "#a855f7", fontWeight: 600, marginBottom: 28 }}>
              {t.pricing.guarantee}
            </p>
            {/* Toggle */}
            <div style={{ display: "inline-flex", background: "white", border: "1px solid #e5e7eb", borderRadius: 12, padding: 4, gap: 4 }}>
              {([[t.pricing.toggleMonthly,false],[t.pricing.toggleAnnual,true]] as [string,boolean][]).map(([l,v])=>(
                <button key={String(v)} onClick={()=>setAnnual(v)} style={{ padding: "8px 20px", borderRadius: 9, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.15s", background: annual===v ? "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)" : "transparent", color: annual===v ? "white" : "#666" }}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Networks row */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontSize: 13, color: "#767676", marginBottom: 10, fontWeight: 500 }}>{t.pricing.networksLabel}</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, flexWrap: "nowrap", justifyContent: "center" }}>
              {NET_ICONS.map(({ label, el }) => (
                <span key={label} title={label} style={{ display:"flex", transform:"scale(1.3)" }}>{el}</span>
              ))}
            </div>
          </div>

          {(() => {
            if (apiPlans && apiPlans.length > 0) {
              const plans = apiPlans;
              const cols = plans.length;
              return (
                <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 20, maxWidth: Math.min(340 * cols, 1400), margin: "0 auto" }}>
                  {plans.map((plan, idx) => {
                    const hi = idx === Math.floor(plans.length / 2);
                    const displayPrice = annual && plan.yearlyPrice != null
                      ? Math.round(plan.yearlyPrice / 12)
                      : plan.price;
                    const savingPct = annual && plan.yearlyPrice != null && plan.price > 0
                      ? Math.round((1 - plan.yearlyPrice / (plan.price * 12)) * 100)
                      : null;
                    let parsedFeatures: string[] = [];
                    try { parsedFeatures = JSON.parse(plan.features); } catch { parsedFeatures = []; }
                    const displayFeatures = (plan.generatedFeatures ?? parsedFeatures).slice(0, 8);
                    return (
                      <div key={plan.id} style={{ borderRadius: 20, padding: 32, position: "relative", background: hi ? "#f5f5f5" : "white", border: hi ? "2px solid #e0e0e0" : "1px solid #e8e8e8", boxShadow: hi ? "0 8px 32px rgba(0,0,0,0.08)" : "none" }}>
                        {hi && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#f43f5e,#a855f7)", color: "white", fontSize: 11, fontWeight: 800, padding: "5px 16px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap" }}>{t.pricing.popular}</div>}
                        <div style={{ marginBottom: 20 }}>
                          <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{plan.name}</h3>
                          <p style={{ fontSize: 13, color: "#767676" }}>{plan.description}</p>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                          <span style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-2px" }}>{displayPrice}€</span>
                          <span style={{ fontSize: 15, color: "#767676" }}>{t.pricing.perMonth}</span>
                          {annual && savingPct != null && <div style={{ fontSize: 12, color: "#22c55e", marginTop: 3 }}>{t.pricing.billedAnnually} ({savingPct}% off)</div>}
                          {annual && savingPct == null && <div style={{ fontSize: 12, color: "#22c55e", marginTop: 3 }}>{t.pricing.billedAnnually}</div>}
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.pricing.networksPerClient}</p>
                          <div style={{ display: "flex", gap: 12, flexWrap: "nowrap", alignItems: "center" }}>
                            {NET_ICONS.map(n=>(
                              <span key={n.label} title={n.label} style={{ display:"flex", flexShrink: 0 }}>
                                {n.el}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a href={`${D}/subscribe?plan=${plan.id}`} style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 12, textDecoration: "none", marginBottom: 24, ...(hi ? { background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", color: "white" } : { background: "#0a0a0a", color: "white" }) }}>
                          {t.pricing.ctaBtn}
                        </a>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                          {displayFeatures.map(feat => (
                            <li key={feat} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "#555", borderRadius: 6, padding: "2px 0" }}>
                              <Check size={14} style={{ color: "#2563eb", flexShrink: 0 }} />{feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            }
            // Fallback to hardcoded plans while loading or on error
            return (
              <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
                {t.pricing.plans.map((plan, idx) => {
                  const price = [p.s, p.m, p.a][idx];
                  const hi = idx === 1;
                  return (
                    <div key={plan.name} style={{ borderRadius: 20, padding: 32, position: "relative", background: hi ? "#f5f5f5" : "white", border: hi ? "2px solid #e0e0e0" : "1px solid #e8e8e8", boxShadow: hi ? "0 8px 32px rgba(0,0,0,0.08)" : "none" }}>
                      {hi && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#f43f5e,#a855f7)", color: "white", fontSize: 11, fontWeight: 800, padding: "5px 16px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap" }}>{t.pricing.popular}</div>}
                      <div style={{ marginBottom: 20 }}>
                        <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{plan.name}</h3>
                        <p style={{ fontSize: 13, color: "#767676" }}>{plan.desc}</p>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <span style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-2px" }}>{price}€</span>
                        <span style={{ fontSize: 15, color: "#767676" }}>{t.pricing.perMonth}</span>
                        {annual && <div style={{ fontSize: 12, color: "#22c55e", marginTop: 3 }}>{t.pricing.billedAnnually}</div>}
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.pricing.networksPerClient}</p>
                        <div style={{ display: "flex", gap: 12, flexWrap: "nowrap", alignItems: "center" }}>
                          {NET_ICONS.map(n=>(
                            <span key={n.label} title={n.label} style={{ display:"flex", flexShrink: 0 }}>
                              {n.el}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href={`${D}/register`} style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 12, textDecoration: "none", marginBottom: 24, ...(hi ? { background: "linear-gradient(135deg,#f43f5e,#a855f7,#06b6d4)", color: "white" } : { background: "#0a0a0a", color: "white" }) }}>
                        {t.pricing.ctaBtn}
                      </a>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                        {plan.items.map(item=>(
                          <li key={item.label}
                            onMouseEnter={e=>{ const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); setTip({label:item.label,desc:item.tip,x:r.left+r.width/2,y:r.top-8}); }}
                            onMouseLeave={()=>setTip(null)}
                            style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "#555", cursor: "help", borderRadius: 6, padding: "2px 0" }}>
                            <Check size={14} style={{ color: "#2563eb", flexShrink: 0 }} />{item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* vs callout */}
          <div style={{ textAlign: "center", marginTop: 32, padding: "18px 24px", background: "white", border: "1px solid #e8e8e8", borderRadius: 16, maxWidth: 600, margin: "32px auto 0" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a", marginBottom: 4 }}>
              {t.pricing.vsCallout}
            </p>
            <p style={{ fontSize: 13, color: "#767676" }} dangerouslySetInnerHTML={{ __html: t.pricing.vsCalloutDesc.replace(/<red>(.*?)<\/red>/g,'<strong style="color:#ef4444">$1</strong>').replace(/<blue>(.*?)<\/blue>/g,'<strong style="color:#2563eb">$1</strong>') }} />
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#767676", marginTop: 16 }}>{t.pricing.footnote}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-pad" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 48, textAlign: "center" }}>{t.faq.h2}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.faq.items.map(([q,a],i)=>(
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
            {t.cta.badge}
          </div>
          <h2 style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 900, letterSpacing: "-2px", marginBottom: 16 }}>
            {t.cta.h2}
          </h2>
          <p style={{ fontSize: 20, color: "#666", maxWidth: 500, margin: "0 auto 36px" }}>
            {t.cta.p}
          </p>
          <a href={`${D}/register`} className="grad-btn" style={{ fontSize: 18, fontWeight: 700, padding: "16px 36px", borderRadius: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            {t.cta.btn} <ArrowRight size={20} />
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: "#767676" }}>{t.cta.footnote}</p>
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
            <p style={{ fontSize: 13, color: "#767676", lineHeight: 1.7, maxWidth: 280 }}>{t.footer.tagline}</p>
          </div>
          {t.footer.cols.map(col=>(
            <div key={col.t}>
              <h4 style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px", color: "#767676", marginBottom: 16 }}>{col.t}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map((item)=>{
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
          {t.footer.made}
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
