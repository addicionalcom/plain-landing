import type { Metadata } from "next";
import SupportForm from "./SupportForm";

export const metadata: Metadata = {
  title: "Ayuda y soporte · Plain",
  description:
    "Centro de ayuda de Plain Social: cómo conectar tus redes, programar contenido, automatizar mensajes, generar informes y gestionar tu cuenta. ¿Necesitas ayuda? Escríbenos.",
  alternates: { canonical: "/support" },
};

const APP_URL = "https://dashboard.plainsocial.app";

export default function SupportPage() {
  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.svg" alt="Plain" style={{ height: 22 }} />
        </a>
        <a href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← Volver</a>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: 820, margin: "0 auto", padding: "72px 32px 32px", textAlign: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }} className="grad-text">
          Centro de ayuda
        </span>
        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
          ¿En qué podemos ayudarte?
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#666", maxWidth: 600, margin: "0 auto" }}>
          Aprende a sacarle todo el partido a Plain: desde conectar tus redes hasta
          automatizar mensajes y generar informes para tus clientes. ¿No encuentras lo
          que buscas? <a href="#contacto" style={{ color: "#111", fontWeight: 500 }}>Escríbenos abajo</a>.
        </p>
      </header>

      {/* Contenido de ayuda */}
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "24px 32px 64px" }}>

        <Category title="Primeros pasos" emoji="🚀">
          <Topic q="Crear tu cuenta e iniciar sesión">
            Entra en <A href={`${APP_URL}/login`}>dashboard.plainsocial.app</A> y regístrate con tu
            email o con Google. Si tu agencia ya tiene una cuenta, pídele a un administrador que te
            invite (ver <em>Equipo y permisos</em>).
          </Topic>
          <Topic q="Configurar tu agencia (logo, nombre y color de marca)">
            Ve a <b>Cuenta → Agencia</b> y añade el nombre de tu agencia, tu logotipo y tu color
            corporativo. Estos datos personalizan los informes y los enlaces que compartes con tus
            clientes (white-label).
          </Topic>
          <Topic q="Añadir tu primera marca / cliente">
            Desde <b>Clientes → Nuevo cliente</b>, crea una ficha para cada marca que gestiones.
            Cada cliente tiene sus propias redes, contenido, analíticas e informes, todo separado.
          </Topic>
          <Topic q="Conectar redes sociales">
            Dentro de un cliente, ve a <b>Conexiones</b> y pulsa <b>Conectar</b> en Instagram,
            Facebook, LinkedIn o TikTok. Se abrirá la ventana oficial de cada red para autorizar el
            acceso. Necesitas ser administrador de la página/cuenta que conectes.
          </Topic>
        </Category>

        <Category title="Publicaciones y calendario" emoji="🗓️">
          <Topic q="Crear y programar una publicación">
            En <b>Publicaciones → Nueva</b>, escribe el texto, sube las imágenes o vídeos, elige las
            redes de destino y la fecha/hora. Pulsa <b>Programar</b> y Plain la publicará
            automáticamente en el momento elegido.
          </Topic>
          <Topic q="Ver el calendario de contenido">
            La vista <b>Calendario</b> muestra todo el contenido programado y publicado de un
            vistazo. Arrastra una publicación para cambiarle la fecha.
          </Topic>
          <Topic q="Vista previa por red">
            Cada red tiene su propia previsualización (feed de Instagram, post de LinkedIn, etc.)
            para que veas exactamente cómo quedará antes de publicar.
          </Topic>
          <Topic q="Aprobación de clientes">
            Puedes compartir un enlace con tu cliente para que revise y apruebe las publicaciones
            antes de que salgan, sin necesidad de que tenga cuenta en Plain.
          </Topic>
        </Category>

        <Category title="Conversaciones y automatizaciones" emoji="💬">
          <Topic q="Bandeja de mensajes y comentarios">
            En <b>Conversaciones</b> tienes todos los mensajes directos y comentarios de tus redes
            en una sola bandeja, para responder sin saltar de app en app.
          </Topic>
          <Topic q="Crear una automatización de DM">
            En <b>Automatizaciones → Nueva regla</b>, define un disparador (por ejemplo, un comentario
            con una palabra clave) y la respuesta automática que enviará Plain por mensaje directo.
            Ideal para sorteos, lead magnets y respuestas frecuentes.
          </Topic>
        </Category>

        <Category title="Analíticas e informes" emoji="📊">
          <Topic q="Ver las analíticas de un cliente">
            Cada cliente tiene una sección de <b>Analítica</b> con la evolución de seguidores,
            alcance, interacciones y mejores publicaciones, directamente desde las APIs de cada red.
          </Topic>
          <Topic q="Generar y enviar un informe">
            En <b>Informes</b>, elige el periodo y genera un informe profesional con la marca de tu
            agencia. Puedes verlo online, descargarlo en PDF o enviarlo por email al cliente. También
            puedes programar el envío automático cada mes.
          </Topic>
          <Topic q="Analítica en tiempo real">
            Desde el informe puedes abrir un enlace de analítica en vivo para compartir con el
            cliente, siempre actualizada.
          </Topic>
        </Category>

        <Category title="Sorteos" emoji="🎉">
          <Topic q="Crear un sorteo en Instagram o Facebook">
            En <b>Sorteos → Nuevo</b>, elige la publicación, define las condiciones (comentar,
            seguir, dar like) y Plain recopila los participantes automáticamente.
          </Topic>
          <Topic q="Elegir un ganador">
            Cuando termine el sorteo, pulsa <b>Elegir ganador</b> para un sorteo aleatorio y
            transparente entre los participantes válidos.
          </Topic>
        </Category>

        <Category title="Medios y almacenamiento" emoji="🖼️">
          <Topic q="Subir archivos y conectar Dropbox">
            Sube imágenes y vídeos directamente, u organízalos conectando tu <b>Dropbox</b> desde la
            sección de medios del cliente para reutilizar contenido sin volver a subirlo.
          </Topic>
        </Category>

        <Category title="Equipo y permisos" emoji="👥">
          <Topic q="Invitar a miembros de tu equipo">
            Un administrador puede invitar usuarios desde el panel de administración. Cada usuario
            recibe un email para crear su contraseña.
          </Topic>
          <Topic q="Roles">
            Los <b>administradores</b> gestionan la cuenta, los planes y el equipo; los
            <b> editores</b> crean y programan contenido. Asigna el rol según las necesidades de cada
            persona.
          </Topic>
        </Category>

        <Category title="Cuenta y facturación" emoji="💳">
          <Topic q="Planes y suscripción">
            Consulta y contrata tu plan en <A href="https://plainsocial.app/#precios">la página de
            precios</A>. El pago es seguro a través de Stripe, con renovación mensual o anual.
          </Topic>
          <Topic q="Facturas">
            Recibirás cada factura por email automáticamente. Todas llevan los datos fiscales de tu
            empresa y puedes descargarlas en PDF.
          </Topic>
          <Topic q="Cambiar o cancelar tu plan">
            Para cambiar de plan, mejorar o cancelar, escríbenos a <A href="mailto:help@plainsocial.app">help@plainsocial.app</A>
            {" "}y lo gestionamos contigo. Si cancelas, mantienes el acceso hasta el final del periodo pagado.
          </Topic>
        </Category>

        <Category title="Problemas frecuentes" emoji="🛠️">
          <Topic q="Una red social aparece desconectada">
            Por seguridad, las redes piden volver a autorizar el acceso cada cierto tiempo. Ve a
            <b> Conexiones</b> y pulsa <b>Reconectar</b> en la red afectada.
          </Topic>
          <Topic q="Una publicación no se ha publicado">
            Comprueba que la red sigue conectada y que la cuenta tiene permisos de publicación. Si el
            problema continúa, escríbenos con el nombre del cliente y la fecha de la publicación.
          </Topic>
          <Topic q="No puedo iniciar sesión">
            Usa <b>¿Olvidaste tu contraseña?</b> en la pantalla de acceso. Si tienes la verificación
            en dos pasos (2FA) activada, necesitarás el código de tu app de autenticación.
          </Topic>
        </Category>

        {/* Contacto */}
        <section id="contacto" style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid #f0f0f0" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>
              ¿Sigues necesitando ayuda?
            </h2>
            <p style={{ fontSize: 16, color: "#666", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              Escríbenos y nuestro equipo te responderá lo antes posible (normalmente en menos de
              24&nbsp;horas laborables) a tu email.
            </p>
          </div>
          <SupportForm />
          <p style={{ textAlign: "center", fontSize: 13, color: "#999", marginTop: 20 }}>
            O escríbenos directamente a{" "}
            <A href="mailto:help@plainsocial.app">help@plainsocial.app</A>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Category({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 22 }}>{emoji}</span> {title}
      </h2>
      <div style={{ border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden" }}>
        {children}
      </div>
    </section>
  );
}

function Topic({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details style={{ borderBottom: "1px solid #f5f5f5" }}>
      <summary style={{ cursor: "pointer", listStyle: "none", padding: "16px 20px", fontSize: 15, fontWeight: 600, color: "#111", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        {q}
        <span style={{ color: "#bbb", fontSize: 18, fontWeight: 400 }}>+</span>
      </summary>
      <p style={{ padding: "0 20px 18px", fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>
        {children}
      </p>
    </details>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      style={{ color: "#111", textDecoration: "underline", textUnderlineOffset: 2 }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f0f0f0", padding: "32px", textAlign: "center" }}>
      <p style={{ fontSize: 12, color: "#ccc", margin: 0 }}>
        <a href="/privacy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Privacy Policy</a>
        <a href="/terms" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Terms of Service</a>
        <a href="/cookie-policy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Cookie Policy</a>
        <a href="/acceptable-use" style={{ color: "#ccc", textDecoration: "none" }}>Acceptable Use</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>© 2026 Addicional Marketing, S.L. · Made in Sabadell</p>
    </footer>
  );
}
