import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy · Plain",
  description: "Política de cookies de Plain Social. Qué cookies usamos y cómo gestionarlas.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.svg" alt="Plain" style={{ height: 22 }} />
        </a>
        <a href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← Volver</a>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 96px" }}>
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Última actualización: 13 de abril de 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Política de cookies</h1>

        <Section>
          Esta Política explica qué son las cookies, qué cookies utiliza <strong>Plain Social</strong> (operado por <strong>Addicional Marketing, S.L.</strong>), con qué finalidad y cómo puedes gestionarlas. Es aplicable tanto a <strong>plainsocial.app</strong> (landing page) como a <strong>dashboard.plainsocial.app</strong> (la plataforma).
        </Section>

        <H2>¿Qué son las cookies?</H2>
        <Section>
          Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo cuando lo visitas. Sirven para que el sitio recuerde tus preferencias, mantenga tu sesión activa y recopile información técnica para mejorar el servicio. Existen cookies de sesión (se eliminan al cerrar el navegador) y cookies persistentes (permanecen durante un período determinado).
        </Section>

        <H2>Cookies que utilizamos</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Cookies estrictamente necesarias</h3>
        <Section>
          Son imprescindibles para el funcionamiento del Servicio. Sin ellas, no podrías iniciar sesión ni navegar por la plataforma. No requieren tu consentimiento según la Directiva ePrivacy.
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Nombre</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Finalidad</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>Duración</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["next-auth.session-token", "Mantiene la sesión autenticada del usuario", "Sesión / 30 días"],
                ["next-auth.csrf-token", "Protección contra ataques CSRF", "Sesión"],
                ["next-auth.callback-url", "Redirección tras autenticación OAuth", "Sesión"],
                ["__Secure-next-auth.*", "Variantes seguras (HTTPS) de las anteriores", "Sesión / 30 días"],
              ].map(([n, f, d]) => (
                <tr key={n} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontFamily: "monospace", fontSize: 12 }}>{n}</td>
                  <td style={{ padding: "10px 12px" }}>{f}</td>
                  <td style={{ padding: "10px 0 10px 12px", color: "#767676" }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Cookies de preferencias</h3>
        <Section>
          Recuerdan tus ajustes personales dentro del Servicio (idioma, preferencias de interfaz, etc.) para mejorar tu experiencia.
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Nombre</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Finalidad</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>Duración</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["plain_lang", "Guarda el idioma seleccionado en la landing", "1 año"],
              ].map(([n, f, d]) => (
                <tr key={n} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontFamily: "monospace", fontSize: 12 }}>{n}</td>
                  <td style={{ padding: "10px 12px" }}>{f}</td>
                  <td style={{ padding: "10px 0 10px 12px", color: "#767676" }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Cookies de análisis (opcionales)</h3>
        <Section>
          Actualmente <strong>Plain Social no utiliza cookies de analítica de terceros</strong> (Google Analytics, Mixpanel, etc.). Si en el futuro se implementaran, se solicitaría tu consentimiento previo y se actualizaría esta política.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Cookies de publicidad</h3>
        <Section>
          <strong>Plain Social no utiliza cookies publicitarias ni de seguimiento entre sitios.</strong> No compartimos datos de navegación con redes publicitarias.
        </Section>

        <H2>Cookies de terceros</H2>
        <Section>
          Al conectar cuentas de redes sociales (Meta, LinkedIn, TikTok, X/Twitter, etc.) mediante OAuth, los servicios de esas plataformas pueden establecer sus propias cookies durante el proceso de autenticación. Estas cookies están sujetas a las políticas de privacidad de cada plataforma, fuera del control de Plain.
        </Section>
        <Section>
          El procesamiento de pagos a través de <strong>Stripe</strong> puede establecer cookies propias durante el flujo de checkout. Consulta la política de cookies de Stripe para más información.
        </Section>

        <H2>Cómo gestionar las cookies</H2>
        <Section>
          Puedes controlar y eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que bloquear las cookies estrictamente necesarias impedirá el funcionamiento correcto del Servicio (no podrás iniciar sesión).
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><a href="https://support.google.com/chrome/answer/95647" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <H2>Base jurídica</H2>
        <Section>
          El uso de cookies estrictamente necesarias se ampara en el interés legítimo y la necesidad contractual (art. 6.1.b y 6.1.f RGPD). El uso de cookies de preferencias y analítica (si aplica en el futuro) requiere tu consentimiento previo conforme a la Directiva 2002/58/CE (ePrivacy) y la LOPDGDD.
        </Section>

        <H2>Cambios en esta Política</H2>
        <Section>
          Si modificamos el uso de cookies, actualizaremos esta página e informaremos a los usuarios mediante aviso en el Servicio o por correo electrónico cuando sea pertinente.
        </Section>

        <H2>Contacto</H2>
        <Section>
          Para cualquier consulta sobre el uso de cookies: <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a> · Addicional Marketing, S.L., Sabadell, Barcelona, España.
        </Section>
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
        <a href="/privacy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de privacidad</a>
        <a href="/terms" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Términos de servicio</a>
        <a href="/cookie-policy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de cookies</a>
        <a href="/acceptable-use" style={{ color: "#ccc", textDecoration: "none" }}>Uso aceptable</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>© 2026 Addicional Marketing, S.L. · Made in Sabadell</p>
    </footer>
  );
}
