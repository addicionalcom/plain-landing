import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Plain",
  description: "Política de privacidad y protección de datos de Plain Social. Cómo recogemos, usamos y protegemos tu información.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
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
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Política de privacidad</h1>

        <Section>
          <strong>Addicional Marketing, S.L.</strong> («Plain», «nosotros», «nos»), con domicilio en Sabadell, Barcelona, España, y contacto de privacidad <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>, es el responsable del tratamiento de los datos personales recogidos a través de <strong>plainsocial.app</strong> y de la plataforma <strong>Plain Social</strong> («el Servicio»).
        </Section>
        <Section>
          Esta Política explica qué datos recogemos, cómo los usamos, con quién los compartimos, cuánto tiempo los conservamos y qué derechos tienes. Si tienes preguntas, escribe a <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>1. Datos que recogemos</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.1 Datos de cuenta y perfil</h3>
        <Section>
          Al registrarte recogemos tu nombre, dirección de correo electrónico, nombre de tu agencia y, opcionalmente, logotipo y color de marca. Si te registras mediante un proveedor OAuth (Google, etc.) recibimos los datos básicos de perfil que compartes con ese proveedor.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.2 Datos de uso del Servicio</h3>
        <Section>
          Registramos cómo interactúas con el Servicio: acciones realizadas, contenido creado y programado, fechas y horas de acceso, y datos de rendimiento técnico. También almacenamos los tokens de acceso OAuth de las cuentas de redes sociales que conectas al Servicio (Meta, LinkedIn, TikTok, X/Twitter, etc.) para poder publicar y leer métricas en tu nombre.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.3 Datos de clientes finales de la agencia</h3>
        <Section>
          Si como agencia introduces en el Servicio datos de tus clientes (nombre, color de marca, cuentas asociadas, datos de redes sociales, etc.), tú eres el responsable del tratamiento de esos datos y Plain actúa como encargado del tratamiento. Nos comprometemos a tratar esos datos únicamente siguiendo tus instrucciones y conforme a lo pactado en el Acuerdo de Encargo de Tratamiento (disponible en <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>).
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.4 Datos de pago</h3>
        <Section>
          Los pagos se procesan a través de <strong>Stripe</strong>. Plain no almacena número de tarjeta ni datos bancarios completos; únicamente conservamos el identificador de cliente y suscripción de Stripe, el historial de facturas y el correo de facturación.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.5 Datos técnicos y de navegación</h3>
        <Section>
          Recogemos automáticamente dirección IP, tipo y versión de navegador, sistema operativo, páginas visitadas, tiempo de sesión y datos de diagnóstico de errores. Usamos cookies esenciales para el funcionamiento del Servicio; consulta nuestra <a href="/es/cookie-policy" style={{ color: "#111" }}>Política de Cookies</a> para más detalle.
        </Section>

        <H2>2. Finalidades y base jurídica del tratamiento</H2>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><strong>Prestación del Servicio</strong> — base jurídica: ejecución del contrato (art. 6.1.b RGPD).</li>
          <li><strong>Gestión de la cuenta y facturación</strong> — base jurídica: ejecución del contrato y cumplimiento de obligación legal (art. 6.1.b y 6.1.c RGPD).</li>
          <li><strong>Comunicaciones de servicio</strong> (notificaciones de cuenta, alertas técnicas, actualizaciones de términos) — base jurídica: interés legítimo (art. 6.1.f RGPD).</li>
          <li><strong>Comunicaciones de marketing</strong> (novedades, mejoras del producto) — base jurídica: consentimiento (art. 6.1.a RGPD). Puedes retirar el consentimiento en cualquier momento usando el enlace de baja en cualquier correo.</li>
          <li><strong>Mejora del Servicio y análisis de uso</strong> — base jurídica: interés legítimo.</li>
          <li><strong>Cumplimiento de obligaciones legales</strong> — base jurídica: obligación legal (art. 6.1.c RGPD).</li>
          <li><strong>Funciones de inteligencia artificial</strong> — Los textos que introduces en las funciones de IA se envían a <strong>Anthropic</strong> para su procesamiento. Base jurídica: ejecución del contrato. Anthropic no utiliza estos datos para entrenar sus modelos de forma predeterminada.</li>
        </ul>

        <H2>3. Destinatarios y subencargados</H2>
        <Section>
          Compartimos datos únicamente con los proveedores necesarios para prestar el Servicio («subencargados»). Todos están sujetos a acuerdos de confidencialidad y protección de datos:
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Proveedor</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Finalidad</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>País</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Vercel", "Alojamiento y ejecución del Servicio", "EE.UU. (SCCs)"],
                ["Cloudflare R2", "Almacenamiento de archivos (imágenes, logotipos)", "EE.UU. (SCCs)"],
                ["Anthropic", "Funciones de inteligencia artificial", "EE.UU. (SCCs)"],
                ["Stripe", "Procesamiento de pagos", "EE.UU. (SCCs)"],
                ["Meta, LinkedIn, TikTok, X/Twitter…", "APIs de redes sociales (publicación, métricas)", "Varios (sus propias políticas)"],
              ].map(([p, f, c]) => (
                <tr key={p} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontWeight: 500 }}>{p}</td>
                  <td style={{ padding: "10px 12px" }}>{f}</td>
                  <td style={{ padding: "10px 0 10px 12px", color: "#767676" }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Section>
          No vendemos datos personales a terceros. No compartimos datos con anunciantes.
        </Section>

        <H2>4. Transferencias internacionales</H2>
        <Section>
          Algunos de nuestros subencargados están ubicados fuera del Espacio Económico Europeo (principalmente en Estados Unidos). Las transferencias a estos proveedores se amparan en las <strong>Cláusulas Contractuales Tipo</strong> adoptadas por la Comisión Europea (Decisión de Ejecución (UE) 2021/914), que garantizan un nivel de protección equivalente al exigido por el RGPD.
        </Section>

        <H2>5. Conservación de datos</H2>
        <Section>
          Conservamos tus datos mientras mantengas una cuenta activa en el Servicio. Tras la cancelación de la cuenta, eliminamos o anonimizamos los datos en un plazo máximo de 90 días, excepto cuando debamos conservarlos para cumplir obligaciones legales (p. ej., datos fiscales durante el período exigido por la ley española). Los backups cifrados pueden conservarse hasta 30 días adicionales antes de su eliminación definitiva.
        </Section>

        <H2>6. Tus derechos</H2>
        <Section>
          De conformidad con el RGPD y la Ley Orgánica 3/2018 (LOPDGDD), tienes los siguientes derechos sobre tus datos personales:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><strong>Acceso:</strong> conocer qué datos tratamos sobre ti.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión («derecho al olvido»):</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
          <li><strong>Limitación:</strong> solicitar que suspendamos temporalmente el tratamiento.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y transferirlos a otro responsable.</li>
          <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin efecto retroactivo.</li>
        </ul>
        <Section>
          Para ejercer cualquiera de estos derechos, escribe a <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>. Responderemos en el plazo máximo de 30 días (ampliable a 90 días en casos complejos). También puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">aepd.es</a>).
        </Section>

        <H2>7. Derechos adicionales para residentes de California (CCPA/CPRA)</H2>
        <Section>
          Si resides en California (EE.UU.), tienes derecho a: (i) conocer las categorías de información personal que recogemos y compartimos; (ii) solicitar la eliminación de tu información personal; (iii) corregir información inexacta; (iv) optar por la no venta o intercambio de tu información (Plain no vende ni intercambia datos personales). No te discriminaremos por ejercer estos derechos. Para ejercerlos, contacta a <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>8. Derechos para residentes de Brasil (LGPD)</H2>
        <Section>
          Si resides en Brasil, la Ley General de Protección de Datos (Lei nº 13.709/2018) te otorga derechos similares a los del RGPD: acceso, corrección, eliminación, portabilidad, información sobre compartición de datos, y revocación del consentimiento. Puedes ejercerlos en <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>9. Menores</H2>
        <Section>
          Plain Social es un servicio profesional destinado a empresas y agencias. No recogemos intencionalmente datos de menores de 18 años. Si detectas que un menor ha proporcionado datos sin consentimiento, contacta con nosotros para proceder a su eliminación.
        </Section>

        <H2>10. Seguridad</H2>
        <Section>
          Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos: cifrado en tránsito (TLS), cifrado en reposo para datos sensibles, control de acceso basado en roles, auditorías de seguridad periódicas y planes de respuesta a incidentes. En caso de brecha de seguridad que suponga riesgo para tus derechos, te notificaremos conforme a los plazos legales.
        </Section>

        <H2>11. Cookies</H2>
        <Section>
          Usamos cookies estrictamente necesarias para el funcionamiento del Servicio. Consulta nuestra <a href="/es/cookie-policy" style={{ color: "#111" }}>Política de Cookies</a> para información detallada sobre los tipos de cookies utilizadas y cómo gestionarlas.
        </Section>

        <H2>12. Cambios en esta Política</H2>
        <Section>
          Podemos actualizar esta Política periódicamente. Te notificaremos los cambios relevantes por correo electrónico. La fecha de «última actualización» al inicio de esta página siempre refleja la versión vigente.
        </Section>

        <H2>13. Contacto y Delegado de Protección de Datos</H2>
        <Section>
          Para cualquier consulta sobre privacidad o ejercicio de derechos:<br />
          <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a><br />
          Addicional Marketing, S.L. · Sabadell, Barcelona, España
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
        <a href="/es/privacy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de privacidad</a>
        <a href="/es/terms" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Términos de servicio</a>
        <a href="/es/cookie-policy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de cookies</a>
        <a href="/es/acceptable-use" style={{ color: "#ccc", textDecoration: "none" }}>Uso aceptable</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>© 2026 Addicional Marketing, S.L. · Made in Sabadell</p>
    </footer>
  );
}
