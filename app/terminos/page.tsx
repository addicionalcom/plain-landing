import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio · Plain",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.svg" alt="Plain" style={{ height: 22 }} />
        </a>
        <a href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← Volver</a>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 96px" }}>
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Última actualización: 25 marzo 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 40, letterSpacing: "-0.02em" }}>Términos de servicio</h1>

        <Section>
          Estos Términos de servicio rigen su uso del sitio web situado en <strong>https://www.plainsocial.app/</strong> y cualquier servicio relacionado y prestado por Addicional Marketing, S.L.
        </Section>
        <Section>
          Al acceder a https://www.plainsocial.app/, acepta acatar estos Términos de servicio y cumplir todas las leyes y normas de aplicación. Si no acepta estos Términos de servicio, tiene prohibido usar o acceder a este sitio web o usar cualquier otro servicio prestado por Addicional Marketing, S.L.
        </Section>
        <Section>
          Nos reservamos el derecho de revisar y modificar cualquiera de estos Términos de servicio a nuestra entera discreción. Cualquier cambio realizado entrará en vigor inmediatamente en la fecha de publicación.
        </Section>

        <H2>Limitaciones de uso</H2>
        <Section>Al utilizar este sitio web, usted garantiza que no:</Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Modificará, copiará, preparará trabajos derivados de, descompilará ni realizará ingeniería inversa de ningún material o software contenido en este sitio web.</li>
          <li>Eliminará los derechos de autor ni otras anotaciones de propiedad de ningún material o software de este sitio web.</li>
          <li>Transferirá los materiales a otra persona ni «reflejará» los materiales en ningún otro servidor.</li>
          <li>Utilizará intencionada o negligentemente este sitio web de una manera que abuse de, o interrumpa nuestras redes o servicios.</li>
          <li>Utilizará este sitio web para transmitir ni publicar ningún material de naturaleza acosadora, indecente, obscena, fraudulenta o ilegal.</li>
          <li>Utilizará este sitio web en contravención de ninguna ley o norma aplicable.</li>
          <li>Utilizará este sitio web en combinación con el envío de publicidad no autorizada o spam.</li>
          <li>Recolectará, recopilará ni recabará datos de usuario sin el consentimiento del usuario.</li>
          <li>Utilizará este sitio web de una forma que pueda vulnerar la privacidad, los derechos de propiedad intelectual u otros derechos de terceros.</li>
        </ul>

        <H2>Propiedad intelectual</H2>
        <Section>
          Addicional Marketing, S.L. es el dueño de la propiedad intelectual o la licencia de los materiales contenidos en este sitio web, que están protegidos por las leyes de derechos de autor y marcas registradas aplicables. Concedemos permiso a nuestros usuarios para descargar una copia de los materiales para su uso temporal, personal y no comercial. Esto constituye la concesión de una licencia, no una transferencia de título.
        </Section>

        <H2>Contenido generado por los usuarios</H2>
        <Section>
          Usted conserva sus derechos de propiedad intelectual sobre el contenido que nos envía para su publicación en nuestro sitio web. Cuando utiliza nuestros servicios para publicar, cargar, compartir o transmitir contenido cubierto por derechos de propiedad intelectual, nos concede una licencia mundial no exclusiva, libre de derechos de autor, transferible y sublicenciable para usar, distribuir y modificar su contenido de una manera que sea consecuente con sus preferencias de privacidad y nuestra Política de privacidad.
        </Section>

        <H2>Responsabilidad</H2>
        <Section>
          Nuestro sitio web y los materiales de nuestro sitio web se proporcionan «tal cual». En la medida en que lo permita la ley, Addicional Marketing, S.L. no ofrece garantías, expresas o implícitas, y renuncia a todas las demás garantías, incluidas las garantías o condiciones de comerciabilidad implícitas, adecuación a un propósito específico o no infracción de la propiedad intelectual.
        </Section>
        <Section>
          Ni Addicional Marketing, S.L. ni sus proveedores serán responsables en ningún caso de pérdida consecuencial alguna sufrida o incurrida por usted o cualquier tercero como resultado del uso o la imposibilidad de usar este sitio web.
        </Section>

        <H2>Exactitud de los materiales</H2>
        <Section>
          Los materiales que aparecen en nuestro sitio web no son exhaustivos y se ofrecen exclusivamente a efectos de información general. Addicional Marketing, S.L. no garantiza ni hace ninguna declaración con respecto a la exactitud, los resultados probables o la fiabilidad del uso de los materiales de este sitio web.
        </Section>

        <H2>Derecho a rescindir</H2>
        <Section>
          Podemos suspender o rescindir su derecho a usar nuestro sitio web y rescindir estos Términos de servicio inmediatamente por cualquier incumplimiento de estos términos después de notificárselo por escrito.
        </Section>

        <H2>Legislación aplicable</H2>
        <Section>
          Estos Términos de servicio se rigen por e interpretan de conformidad con las leyes de Barcelona. Usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de ese estado o ubicación.
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
        <a href="/terminos" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Términos de servicio</a>
        <a href="/cookies" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Política de cookies</a>
        <a href="/uso-aceptable" style={{ color: "#ccc", textDecoration: "none" }}>Uso aceptable</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>Made in Sabadell</p>
    </footer>
  );
}
