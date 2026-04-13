import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy · Plain",
  description: "Política de uso aceptable de Plain Social. Qué usos están permitidos y cuáles están prohibidos.",
  robots: { index: true, follow: true },
};

export default function UsoAceptablePage() {
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
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Política de uso aceptable</h1>

        <Section>
          Esta Política de Uso Aceptable («PUA») forma parte de los <a href="/terms" style={{ color: "#111" }}>Términos de Servicio</a> de <strong>Plain Social</strong>, operado por <strong>Addicional Marketing, S.L.</strong> («Plain»). Establece qué usos del Servicio están permitidos y cuáles están prohibidos, con el objetivo de garantizar un entorno seguro, profesional y conforme a la ley para todas las agencias y usuarios.
        </Section>
        <Section>
          Al usar el Servicio, aceptas cumplir esta PUA. El incumplimiento puede resultar en la suspensión o cancelación inmediata de tu cuenta, sin perjuicio de las acciones legales que pudieran corresponder.
        </Section>

        <H2>1. Uso permitido</H2>
        <Section>
          Plain Social está diseñado exclusivamente para uso profesional por parte de agencias de marketing, comunicación y profesionales del sector. Los usos permitidos incluyen:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Planificar, programar y publicar contenido en redes sociales de clientes con su autorización expresa.</li>
          <li>Analizar métricas de rendimiento de cuentas sociales propias o de clientes con su autorización.</li>
          <li>Gestionar comentarios y mensajes directos en nombre de clientes que han delegado expresamente esa gestión.</li>
          <li>Generar informes de resultados para clientes.</li>
          <li>Usar las funciones de inteligencia artificial para asistencia en la creación de contenido, siempre bajo supervisión humana.</li>
          <li>Colaborar con compañeros de equipo dentro de la misma agencia.</li>
        </ul>

        <H2>2. Responsabilidad sobre las cuentas de clientes</H2>
        <Section>
          Si usas Plain Social para gestionar cuentas de terceros (tus clientes), eres el único responsable de:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Obtener autorización explícita de cada cliente para conectar sus cuentas y gestionar su presencia en redes sociales.</li>
          <li>Garantizar que el contenido publicado cumple los términos de servicio de cada plataforma (Meta, LinkedIn, TikTok, X/Twitter, etc.).</li>
          <li>Informar a tus clientes de que Plain actúa como subencargado del tratamiento de sus datos.</li>
          <li>Eliminar el acceso a las cuentas de clientes en cuanto finalice la relación profesional.</li>
        </ul>

        <H2>3. Actividades prohibidas</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.1 Manipulación y spam en redes sociales</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Publicar contenido masivo no solicitado («spam») o mensajes repetitivos con fines de engagement artificial.</li>
          <li>Utilizar Plain para comprar, vender o simular seguidores, likes, comentarios o cualquier métrica de interacción.</li>
          <li>Automatizar interacciones de forma que infrinja las políticas de uso de las plataformas de redes sociales.</li>
          <li>Crear o gestionar cuentas falsas o perfiles de suplantación de identidad.</li>
          <li>Coordinar campañas de acoso, manipulación de opinión pública o desinformación.</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.2 Contenido prohibido</h3>
        <Section>
          Está prohibido usar Plain Social para publicar, programar o distribuir contenido que:</Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Sea ilegal en cualquier jurisdicción aplicable.</li>
          <li>Incite al odio, la violencia o la discriminación por razón de raza, etnia, religión, género, orientación sexual, discapacidad u otras características protegidas.</li>
          <li>Contenga pornografía infantil o material que explote o dañe a menores.</li>
          <li>Difame, acose o amenace a personas físicas o jurídicas.</li>
          <li>Infrinja derechos de propiedad intelectual (derechos de autor, marcas registradas, etc.) sin la debida autorización.</li>
          <li>Contenga información engañosa, fraudulenta o diseñada para inducir a error a los consumidores.</li>
          <li>Promueva actividades ilegales (fraude, blanqueo de capitales, venta de sustancias ilegales, etc.).</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.3 Uso indebido de la plataforma</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Intentar acceder a datos de otros usuarios o cuentas sin autorización.</li>
          <li>Realizar ingeniería inversa, descompilar o intentar extraer el código fuente del Servicio.</li>
          <li>Introducir virus, malware, scripts maliciosos o cualquier código dañino.</li>
          <li>Realizar ataques de denegación de servicio (DoS/DDoS) o cualquier acción que degrade la disponibilidad del Servicio.</li>
          <li>Usar el Servicio para extraer datos de manera masiva («scraping») sin autorización expresa.</li>
          <li>Eludir medidas de seguridad, límites de uso o restricciones de acceso.</li>
          <li>Compartir credenciales de acceso con personas fuera de tu organización.</li>
          <li>Intentar obtener el Servicio sin pago o mediante métodos fraudulentos.</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.4 Uso indebido de la inteligencia artificial</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Usar las funciones de IA para generar contenido engañoso, desinformación o deepfakes.</li>
          <li>Introducir en las funciones de IA datos personales sensibles de terceros sin base jurídica.</li>
          <li>Intentar manipular los modelos de IA para obtener outputs dañinos, ilegales o que infrinjan esta PUA.</li>
          <li>Publicar contenido generado por IA sin revisión humana previa cuando exista riesgo de daño.</li>
        </ul>

        <H2>4. Cumplimiento de normativas de plataformas</H2>
        <Section>
          El uso de Plain Social debe ser en todo momento conforme a las políticas, términos y directrices de las plataformas de redes sociales integradas (Meta Business, LinkedIn Marketing Solutions, TikTok for Business, X API, etc.). Plain no es responsable de las consecuencias derivadas del incumplimiento de dichas políticas por parte del usuario, incluyendo la suspensión de cuentas en esas plataformas.
        </Section>

        <H2>5. Uso razonable de recursos</H2>
        <Section>
          El Servicio se ofrece con límites de uso según el plan contratado (número de publicaciones, cuentas conectadas, usuarios, etc.). El uso excesivo que afecte al rendimiento del Servicio para otros usuarios podrá ser limitado o facturado adicionalmente, previa comunicación. No está permitido el uso de scripts automatizados para interactuar con la API o la interfaz del Servicio más allá de lo establecido en la documentación oficial.
        </Section>

        <H2>6. Notificación de infracciones</H2>
        <Section>
          Si detectas un uso del Servicio que infrinja esta PUA, te pedimos que lo reportes a <a href="mailto:hola@addicional.com" style={{ color: "#111" }}>hola@addicional.com</a>. Investigaremos todas las notificaciones con diligencia y tomaremos las medidas adecuadas.
        </Section>

        <H2>7. Consecuencias del incumplimiento</H2>
        <Section>
          Ante el incumplimiento de esta PUA, Plain se reserva el derecho de: (i) emitir una advertencia; (ii) suspender temporalmente el acceso al Servicio; (iii) cancelar definitivamente la cuenta; (iv) reportar el incumplimiento a las autoridades competentes cuando sea legalmente requerido. Las consecuencias se aplicarán proporcionalmente a la gravedad del incumplimiento, aunque nos reservamos el derecho de cancelar una cuenta de forma inmediata ante infracciones graves.
        </Section>

        <H2>8. Modificaciones</H2>
        <Section>
          Podemos actualizar esta PUA para reflejar cambios en el Servicio, las plataformas integradas o la normativa aplicable. Los cambios sustanciales se comunicarán con al menos 15 días de antelación por correo electrónico. El uso continuado del Servicio implica la aceptación de la versión vigente.
        </Section>

        <H2>9. Contacto</H2>
        <Section>
          Para consultas sobre esta Política o para reportar infracciones: <a href="mailto:hola@addicional.com" style={{ color: "#111" }}>hola@addicional.com</a> · Addicional Marketing, S.L., Sabadell, Barcelona, España.
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
