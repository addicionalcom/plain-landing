import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies · Plain",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.svg" alt="Plain" style={{ height: 22 }} />
        </a>
        <a href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← Volver</a>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 96px" }}>
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Fecha efectiva: 25 marzo 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 40, letterSpacing: "-0.02em" }}>Política de cookies</h1>

        <Section>
          Utilizamos cookies para ayudar a mejorar su experiencia en nuestro sitio web en <strong>https://www.plainsocial.app/</strong> y en sus subdominios. Esta política de cookies forma parte de la política de privacidad de Addicional Marketing, S.L. Regula el uso de cookies entre su dispositivo y nuestro sitio.
        </Section>
        <Section>
          También proporcionamos información básica sobre los servicios de terceros que podríamos utilizar, quienes también podrían usar cookies como parte de su servicio. Esta política no cubre sus cookies.
        </Section>
        <Section>
          Si no desea aceptar cookies de nuestra parte, debe instruir a su navegador para que rechace las cookies de https://www.plainsocial.app/. En tal caso, es posible que no podamos proporcionarle algunos de los contenidos y servicios que desea.
        </Section>

        <H2>¿Qué es una cookie?</H2>
        <Section>
          Una cookie es un pequeño fragmento de datos que un sitio web almacena en tu dispositivo cuando lo visitas. Generalmente contiene información sobre el propio sitio web, un identificador único que permite al sitio reconocer tu navegador web cuando regresas, datos adicionales que sirven al propósito de la cookie y la duración de la cookie.
        </Section>
        <Section>
          Las cookies se utilizan para habilitar ciertas funciones (por ejemplo, iniciar sesión), rastrear el uso del sitio (por ejemplo, análisis), almacenar tus configuraciones de usuario (por ejemplo, zona horaria, preferencias de notificación) y personalizar tu contenido (por ejemplo, publicidad, idioma).
        </Section>
        <Section>
          Las cookies establecidas por el sitio web que estás visitando generalmente se conocen como cookies de primera parte. Por lo general, solo rastrean tu actividad en ese sitio en particular.
        </Section>
        <Section>
          Las cookies establecidas por otros sitios y empresas (es decir, terceros) se llaman cookies de terceros. Pueden usarse para rastrearte en otros sitios web que utilizan el mismo servicio de terceros.
        </Section>

        <H2>¿Cómo puedes controlar el uso de cookies en nuestro sitio web?</H2>
        <Section>
          Tienes el derecho de decidir si aceptas o rechazas las cookies en nuestro sitio web. Puedes gestionar tus preferencias de cookies en nuestro Administrador de Consentimiento de Cookies. El Administrador de Consentimiento de Cookies te permite seleccionar qué categorías de cookies aceptas o rechazas. Las cookies esenciales no pueden ser rechazadas ya que son estrictamente necesarias para proporcionarte los servicios en nuestro sitio web.
        </Section>
        <Section>
          También podrías ser capaz de establecer o modificar tus preferencias de cookies gestionando la configuración de tu navegador web. Si eliges rechazar o deshabilitar las cookies, aún podrás usar el sitio web, aunque algunas de las funcionalidades podrían no estar disponibles para ti.
        </Section>

        <H2>¿Con qué frecuencia actualizaremos esta Política de Cookies?</H2>
        <Section>
          Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cualquier cambio en las cookies y tecnologías relacionadas que utilizamos, o por otras razones operativas, legales o regulatorias.
        </Section>
        <Section>
          Cada vez que utilices nuestro sitio web, se aplicará la versión actual de la Política de Cookies. Cuando utilices nuestro sitio web, debes verificar la fecha de esta Política de Cookies (que aparece en la parte superior de este documento) y revisar cualquier cambio desde la última versión.
        </Section>

        <H2>¿Dónde puedes obtener más información?</H2>
        <Section>
          Para cualquier pregunta o inquietud con respecto a nuestra Política de Cookies, puedes contactarnos:
        </Section>
        <div style={{ background: "#f8f8f8", borderRadius: 12, padding: "20px 24px", marginTop: 8 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
            <strong>Eloi Coll</strong><br />
            <a href="mailto:dpo@addicional.com" style={{ color: "#a855f7", textDecoration: "none" }}>dpo@addicional.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 40, marginBottom: 12, letterSpacing: "-0.01em" }}>{children}</h2>;
}

function Section({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 16 }}>{children}</p>;
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f0f0f0", padding: "32px", textAlign: "center" }}>
      <p style={{ fontSize: 12, color: "#ccc", margin: 0 }}>
        <a href="/terminos" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Términos de servicio</a>
        <a href="/cookies" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de cookies</a>
        <a href="/uso-aceptable" style={{ color: "#ccc", textDecoration: "none" }}>Uso aceptable</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>Made in Sabadell</p>
    </footer>
  );
}
