"use client";
import { useState } from "react";
import { Check, X, ArrowRight, MessageCircle, Calendar, Users, Zap, ChevronDown, Star, TrendingUp, FolderOpen, Shield } from "lucide-react";

const DASHBOARD_URL = "https://dashboard.plainsocial.app";

export default function Home() {
  const [billingAnnual, setBillingAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const prices = { starter: billingAnnual ? 24 : 29, pro: billingAnnual ? 66 : 79, agency: billingAnnual ? 124 : 149 };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto px-8 flex items-center justify-between h-16" style={{ maxWidth: "1900px" }}>
          <a href="/" className="text-xl font-black tracking-tight text-gray-900">plain<span className="text-indigo-600">·</span></a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Funciones</a>
            <a href="#comparativa" className="hover:text-gray-900 transition-colors">Comparativa</a>
            <a href="#precios" className="hover:text-gray-900 transition-colors">Precios</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`${DASHBOARD_URL}/login`} className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Iniciar sesión</a>
            <a href={`${DASHBOARD_URL}/register`} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Prueba gratis 14 días</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 overflow-hidden relative" style={{ background: "linear-gradient(160deg, #0f0f1a 0%, #111827 60%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(ellipse 70% 40% at 50% 10%, #6366f1, transparent)" }} />
        <div className="mx-auto px-8 relative" style={{ maxWidth: "1900px" }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-indigo-500/25 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8" style={{ background: "rgba(99,102,241,0.08)" }}>
              <Zap size={14} /><span>La herramienta de Instagram para agencias en España y LATAM</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
              Deja de pagar dos herramientas<br />
              <span style={{ background: "linear-gradient(135deg,#818cf8,#a78bfa,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                para hacer el trabajo de una.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
              Plain combina la programación de contenido en Instagram con respuestas automáticas por DM cuando alguien comenta una palabra clave — todo en un panel para agencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${DASHBOARD_URL}/register`} className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-xl" style={{ background: "#6366f1" }}>
                Empieza gratis — sin tarjeta <ArrowRight size={20} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-lg border transition-all" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                Ver cómo funciona
              </a>
            </div>
            <p className="text-sm mt-4" style={{ color: "#4b5563" }}>14 días gratis · Sin tarjeta de crédito · Cancela cuando quieras</p>
          </div>

          {/* Dashboard mock */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="rounded-2xl border overflow-hidden shadow-2xl" style={{ background: "rgba(30,32,48,0.7)", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "rgba(15,15,25,0.8)", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444", opacity: 0.7 }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#eab308", opacity: 0.7 }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e", opacity: 0.7 }} />
                <span className="ml-3 text-xs" style={{ color: "#4b5563" }}>dashboard.plainsocial.app</span>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 rounded-xl p-5 border" style={{ background: "rgba(15,15,25,0.6)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse 2s infinite" }} />
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#6b7280" }}>Automatización activa</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(99,102,241,0.15)" }}>
                        <MessageCircle size={14} style={{ color: "#818cf8" }} />
                      </div>
                      <div>
                        <div className="text-xs mb-1" style={{ color: "#6b7280" }}>Usuario comentó en tu publicación</div>
                        <div className="rounded-lg px-3 py-2 text-sm text-white inline-block" style={{ background: "rgba(255,255,255,0.08)" }}>"INFO" 🙌</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pl-11">
                      <div>
                        <div className="text-xs mb-1 text-green-400">Plain envió DM automáticamente ✓</div>
                        <div className="rounded-lg px-3 py-2 text-sm border" style={{ background: "rgba(99,102,241,0.12)", borderColor: "rgba(99,102,241,0.2)", color: "#c7d2fe" }}>
                          ¡Hola! Gracias por tu interés 😊 Te enviamos toda la información. Haz clic para ver el catálogo →
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: "rgba(255,255,255,0.05)", color: "#4b5563" }}>
                    <span>Regla: Palabra clave &quot;INFO&quot; → DM automático</span>
                    <span className="text-green-400">127 DMs enviados hoy</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[["Clientes gestionados","12","↑ 3 este mes","green"],["Posts programados","48","próximos 30 días","gray"],["DMs automáticos","1.284","este mes","green"]].map(([label,val,sub,color])=>(
                    <div key={label} className="rounded-xl p-4 border" style={{ background: "rgba(15,15,25,0.6)", borderColor: "rgba(255,255,255,0.06)" }}>
                      <div className="text-xs mb-1" style={{ color: "#6b7280" }}>{label}</div>
                      <div className="text-2xl font-bold text-white">{val}</div>
                      <div className={`text-xs mt-1 ${color==="green"?"text-green-400":"text-gray-500"}`}>{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS BAR */}
      <section className="py-10 border-y" style={{ background: "#f9fafb", borderColor: "#f3f4f6" }}>
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <p className="text-center text-xs font-semibold mb-5 uppercase tracking-wider" style={{ color: "#9ca3af" }}>Integra con las herramientas que ya usas</p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-50">
            {["Instagram","Facebook","Dropbox","Google Drive","OneDrive","Canva"].map(n=>(
              <span key={n} className="text-gray-500 font-semibold text-sm">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">El problema que todas las agencias tienen</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">Cada mes pagas por dos herramientas que hacen a medias lo que Plain hace completo.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl p-8 border-2" style={{ background: "rgba(254,242,242,0.4)", borderColor: "#fee2e2" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#fee2e2" }}>
                    <X size={18} style={{ color: "#ef4444" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Sin Plain: dos facturas, doble trabajo</h3>
                </div>
                <div className="space-y-3">
                  {[["Metricool / Later / Buffer","~€20–45/mes","Para programar contenido"],["ManyChat","~€25–65/mes*","Para automatizar DMs"]].map(([tool,price,desc])=>(
                    <div key={tool} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border" style={{ borderColor: "#fee2e2" }}>
                      <div><div className="font-semibold text-sm text-gray-800">{tool}</div><div className="text-xs text-gray-500">{desc}</div></div>
                      <div className="font-bold text-red-500 text-sm">{price}</div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-xl px-4 py-3 border-2 mt-2" style={{ background: "#fef2f2", borderColor: "#fca5a5" }}>
                    <div className="font-bold text-gray-900">Total mensual</div>
                    <div className="font-black text-red-600 text-xl">€45–110/mes</div>
                  </div>
                </div>
                <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>*ManyChat cobra por contactos — el precio sube sin avisar</p>
              </div>

              <div className="rounded-2xl p-8 border-2" style={{ background: "rgba(238,242,255,0.4)", borderColor: "#e0e7ff" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#e0e7ff" }}>
                    <Check size={18} style={{ color: "#6366f1" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Con Plain: todo en uno, precio fijo</h3>
                </div>
                <div className="space-y-3">
                  {["Programación de contenido","Automatización comentario → DM","Gestión multi-cliente","Dropbox / Drive integrado"].map(f=>(
                    <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border" style={{ borderColor: "#e0e7ff" }}>
                      <Check size={16} style={{ color: "#6366f1", flexShrink: 0 }} />
                      <span className="text-sm font-medium text-gray-800">{f}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between rounded-xl px-4 py-3 mt-2" style={{ background: "#6366f1" }}>
                    <div className="font-bold text-white">Todo incluido desde</div>
                    <div className="font-black text-white text-xl">€24/mes</div>
                  </div>
                </div>
                <p className="text-xs mt-3" style={{ color: "#a5b4fc" }}>Precio fijo, sin sorpresas, sin contar contactos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24" style={{ background: "#f9fafb" }}>
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Todo lo que necesita tu agencia</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tres pilares. Un solo panel. Sin cambiar de pestaña.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, color: "#6366f1", bg: "#eef2ff", title: "Convierte comentarios en leads", desc: 'Define palabras clave — "INFO", "PRECIO", "RESERVA" — y Plain envía un DM personalizado al instante a cada usuario que las escriba. Automatización real, sin bots.', features: ["Múltiples palabras clave por regla","Mensajes con variantes aleatorias","Respuesta pública en comentario","Incluir enlaces y CTAs"] },
              { icon: Calendar, color: "#7c3aed", bg: "#f5f3ff", title: "Publica sin esfuerzo", desc: "Conecta Dropbox o Google Drive y programa posts, Reels y Stories directamente desde las carpetas de tus clientes. Tus clientes suben el contenido; Plain lo publica.", features: ["Programación visual con calendario","Importar desde Dropbox y Drive","Posts, Reels y Stories","Publicación automática verificada"] },
              { icon: Users, color: "#059669", bg: "#ecfdf5", title: "Gestiona todos tus clientes", desc: "Un panel. Todos tus clientes. Sin cambiar de cuenta, sin múltiples suscripciones. Diseñado para agencias que gestionan 5, 10 o 50 cuentas.", features: ["Panel multi-cliente unificado","Branding personalizado por cliente","Acceso por equipo con roles","Sin límite de cuentas conectadas"] },
            ].map(({ icon: Icon, color, bg, title, desc, features })=>(
              <div key={title} className="bg-white rounded-2xl p-8 border shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "#f3f4f6" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: bg }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">{desc}</p>
                <ul className="space-y-2">
                  {features.map(f=>(
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={14} style={{ color, flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: FolderOpen, color: "#ea580c", bg: "#fff7ed", title: "Almacenamiento conectado", desc: "Dropbox, Google Drive, OneDrive y más. Tus activos siempre a mano." },
              { icon: TrendingUp, color: "#2563eb", bg: "#eff6ff", title: "Métricas en tiempo real", desc: "Visualiza el rendimiento de cada cliente desde un solo panel." },
              { icon: Shield, color: "#0d9488", bg: "#f0fdfa", title: "Seguro y conforme al RGPD", desc: "Datos almacenados en Europa. Cumplimiento total con la normativa de Meta." },
            ].map(({ icon: Icon, color, bg, title, desc })=>(
              <div key={title} className="bg-white rounded-xl p-6 border flex gap-4" style={{ borderColor: "#f3f4f6" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{title}</h4>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">En marcha en menos de 10 minutos</h2>
            <p className="text-xl text-gray-500">Sin curva de aprendizaje. Sin código. Sin consultores.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              ["01","Conecta Instagram de tu cliente","OAuth en 2 clics. Plain obtiene los permisos necesarios y conecta la cuenta de Instagram Business."],
              ["02","Define tus palabras clave","Crea una regla: \"cuando alguien comente INFO, envía este DM\". Puedes crear tantas reglas como necesites."],
              ["03","Programa el contenido del mes","Importa los assets desde Dropbox o Drive, asigna fecha y hora, y Plain publica solo."],
              ["04","Los leads llegan solos","Cada comentario con palabra clave activa el DM automáticamente, 24/7, sin que muevas un dedo."],
            ].map(([n,title,desc])=>(
              <div key={n} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl text-white font-black text-lg flex items-center justify-center flex-shrink-0" style={{ background: "#6366f1" }}>{n}</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparativa" className="py-24" style={{ background: "#030712" }}>
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Plain vs. las alternativas</h2>
            <p className="text-xl" style={{ color: "#6b7280" }}>Por qué las agencias eligen Plain sobre pagar dos herramientas por separado.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 font-medium w-1/4" style={{ color: "#6b7280" }}>Función</th>
                  <th className="py-4 px-6 text-center">
                    <div className="rounded-xl py-2 px-4 inline-block" style={{ background: "#6366f1" }}>
                      <span className="font-black text-white">Plain</span>
                    </div>
                  </th>
                  {["Metricool","ManyChat","Hootsuite"].map(n=>(
                    <th key={n} className="py-4 px-6 text-center font-medium" style={{ color: "#6b7280" }}>{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  ["Programar publicaciones Instagram", true, true, false, true],
                  ["Automatización comentario → DM", true, false, true, false],
                  ["Gestión multi-cliente para agencias", true, "Parcial", false, "Parcial"],
                  ["Dropbox / Google Drive integrado", true, false, false, false],
                  ["Precio fijo (sin contar contactos)", true, true, false, false],
                  ["Soporte en español", true, true, false, false],
                  ["Todo en un solo panel", true, false, false, false],
                  ["Precio para agencias (10 clientes)", "€124/mes", "€88/mes*", "€450/mes**", "€990/mes"],
                ].map((row,i)=>(
                  <tr key={i} className="transition-colors" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td className="py-4 px-6 text-sm font-medium" style={{ color: "#d1d5db" }}>{row[0]}</td>
                    {row.slice(1).map((val,j)=>(
                      <td key={j} className="py-4 px-6 text-center">
                        {val===true ? <Check size={20} className="mx-auto" style={{ color: "#818cf8" }} />
                        : val===false ? <X size={20} className="mx-auto" style={{ color: "#374151" }} />
                        : <span className={`text-sm font-semibold ${j===0?"text-indigo-300":"text-gray-400"}`}>{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "#374151" }}>
            *Metricool Advanced 25 marcas. **ManyChat Pro estimado para 10.000 contactos activos. Precios orientativos.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Lo que dicen las agencias</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { q:"Llevábamos años pagando Metricool y ManyChat por separado. Con Plain cancelamos los dos y ahorramos más de €60 al mes. Y lo mejor: todo está en el mismo sitio.", a:"María G.", role:"Directora creativa, agencia de Barcelona" },
              { q:"La automatización de comentarios nos genera leads mientras dormimos. Un cliente nuestro consiguió 340 DMs en un solo día después de un post viral.", a:"Jordi P.", role:"Social Media Manager, Madrid" },
              { q:"Gestionar 15 clientes antes era un caos de pestañas. Ahora entro a Plain y lo tengo todo. La integración con Dropbox nos cambió el flujo de trabajo completamente.", a:"Ana M.", role:"Fundadora de agencia digital, México DF" },
            ].map(t=>(
              <div key={t.a} className="rounded-2xl p-8 border" style={{ background: "#f9fafb", borderColor: "#f3f4f6" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_,i)=><Star key={i} size={16} style={{ color: "#facc15", fill: "#facc15" }} />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">&quot;{t.q}&quot;</p>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.a}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="py-24" style={{ background: "#f9fafb" }}>
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Precio fijo. Sin sorpresas.</h2>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">A diferencia de ManyChat, no cobramos por contactos. Pagas lo mismo cada mes, uses lo que uses.</p>
            <div className="inline-flex items-center gap-1 border rounded-xl p-1" style={{ background: "white", borderColor: "#e5e7eb" }}>
              <button onClick={()=>setBillingAnnual(false)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!billingAnnual?"text-white":"text-gray-500"}`} style={!billingAnnual?{background:"#6366f1"}:{}}>Mensual</button>
              <button onClick={()=>setBillingAnnual(true)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${billingAnnual?"text-white":"text-gray-500"}`} style={billingAnnual?{background:"#6366f1"}:{}}>
                Anual <span className={`text-xs px-1.5 py-0.5 rounded-full ${billingAnnual?"bg-white/20 text-white":"bg-green-100 text-green-700"}`}>−17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name:"Starter", desc:"Para freelancers y agencias que empiezan", price:prices.starter, cta:"Empezar gratis", highlight:false,
                features:["Hasta 3 clientes / cuentas","Programación de contenido","5 automatizaciones activas","Integración Dropbox / Drive","Soporte por email"] },
              { name:"Pro", desc:"Para agencias en crecimiento", price:prices.pro, cta:"Empezar gratis", highlight:true,
                features:["Hasta 10 clientes / cuentas","Automatizaciones ilimitadas","Programación ilimitada","Todos los almacenamientos","Analytics por cliente","Soporte prioritario"] },
              { name:"Agency", desc:"Para agencias que gestionan muchos clientes", price:prices.agency, cta:"Empezar gratis", highlight:false,
                features:["Clientes ilimitados","Automatizaciones ilimitadas","Usuarios ilimitados","White-label (próximamente)","API acceso (próximamente)","Onboarding dedicado","Soporte 24/7"] },
            ].map(plan=>(
              <div key={plan.name} className={`rounded-2xl p-8 relative ${plan.highlight?"shadow-2xl":"border shadow-sm"}`} style={plan.highlight?{background:"#6366f1"}:{background:"white", borderColor:"#e5e7eb"}}>
                {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wide" style={{ background:"#facc15", color:"#713f12" }}>Más popular</div>}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${plan.highlight?"text-white":"text-gray-900"}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.highlight?"text-indigo-200":"text-gray-500"}`}>{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className={`text-5xl font-black ${plan.highlight?"text-white":"text-gray-900"}`}>€{plan.price}</span>
                  <span className={plan.highlight?"text-indigo-300":"text-gray-400"}>/mes</span>
                  {billingAnnual && <div className={`text-sm mt-1 ${plan.highlight?"text-indigo-200":"text-green-600"}`}>Facturado anualmente</div>}
                </div>
                <a href={`${DASHBOARD_URL}/register`} className={`block text-center font-bold py-3 rounded-xl mb-8 transition-colors ${plan.highlight?"bg-white text-indigo-600 hover:bg-indigo-50":"text-white hover:opacity-90"}`} style={!plan.highlight?{background:"#111827"}:{}}>
                  {plan.cta}
                </a>
                <ul className="space-y-3">
                  {plan.features.map(f=>(
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight?"text-indigo-100":"text-gray-600"}`}>
                      <Check size={15} style={{ color: plan.highlight?"white":"#6366f1", flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">Todos los planes incluyen 14 días de prueba gratuita · Sin tarjeta de crédito · Cancela en cualquier momento</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {[
                ["¿Necesito tener una cuenta de Instagram Business?","Sí, la automatización de comentarios y DMs requiere una cuenta de Instagram Business o Creator conectada a una Página de Facebook. La configuración tarda menos de 5 minutos."],
                ["¿Plain reemplaza completamente a ManyChat?","Para las funciones de comentario→DM que usan la mayoría de agencias, sí. Plain cubre las automatizaciones de Instagram por palabras clave con un modelo más simple y a precio fijo."],
                ["¿Cuántos DMs puedo enviar por día?","Plain usa la API oficial de Instagram y sigue los límites de Meta. Para cuentas Business activas, los límites son muy amplios y raramente suponen una restricción práctica."],
                ["¿Puedo migrar mis automatizaciones de ManyChat a Plain?","Plain no importa directamente desde ManyChat, pero recrear las reglas es sencillo: defines la palabra clave, escribes el mensaje del DM y activas la regla. La mayoría de agencias lo hacen en menos de 30 minutos."],
                ["¿Qué pasa si cancelo? ¿Pierdo mis datos?","No. Al cancelar, tus datos se conservan durante 30 días y puedes exportarlos en cualquier momento."],
                ["¿Funciona también con publicaciones de Facebook?","Actualmente Plain está optimizado para Instagram. El soporte para Facebook Page posts está en el roadmap para próximos meses."],
              ].map(([q,a],i)=>(
                <div key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: "#f3f4f6" }}>
                  <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900 text-sm">{q}</span>
                    <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq===i?"rotate-180":""}`} />
                  </button>
                  {openFaq===i && (
                    <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t pt-4" style={{ borderColor: "#f9fafb" }}>{a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24" style={{ background: "#6366f1" }}>
        <div className="mx-auto px-8 text-center" style={{ maxWidth: "1900px" }}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">¿Listo para unificar tu stack?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#c7d2fe" }}>
            Empieza hoy y comprueba por qué las agencias en España y LATAM están migrando a Plain.
          </p>
          <a href={`${DASHBOARD_URL}/register`} className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-xl" style={{ background: "white", color: "#6366f1" }}>
            Prueba Plain gratis 14 días <ArrowRight size={20} />
          </a>
          <p className="text-sm mt-4" style={{ color: "#a5b4fc" }}>Sin tarjeta de crédito · Configuración en 10 minutos · Cancela cuando quieras</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16" style={{ background: "#030712", color: "#6b7280" }}>
        <div className="mx-auto px-8" style={{ maxWidth: "1900px" }}>
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-2xl font-black text-white mb-3">plain<span style={{ color: "#6366f1" }}>·</span></div>
              <p className="text-sm leading-relaxed">La herramienta de gestión de redes sociales para agencias de marketing en España y LATAM.</p>
            </div>
            {[
              { title:"Producto", links:["Funciones","Precios","Comparativa","Changelog"] },
              { title:"Empresa", links:["Sobre Plain","Blog","Contacto","Partners"] },
            ].map(col=>(
              <div key={col.title}>
                <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">{col.title}</h4>
                <ul className="space-y-2 text-sm">{col.links.map(l=><li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}</ul>
              </div>
            ))}
            <div>
              <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.addicional.com/politica-de-privacidad/" className="hover:text-white transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos de uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ borderColor: "#111827" }}>
            <p>© {new Date().getFullYear()} Plain · Addicional Marketing, S.L. · Sabadell, España</p>
            <p>Hecho con ❤️ para agencias que trabajan en serio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
