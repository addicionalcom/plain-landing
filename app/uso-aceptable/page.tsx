import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Uso Aceptable · Plain",
  robots: { index: false, follow: false },
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
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Última revisión: 25 marzo 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 40, letterSpacing: "-0.02em" }}>Política de uso aceptable</h1>

        <Section>
          Esta Política de uso aceptable cubre los productos, servicios y tecnologías proporcionados por <strong>Addicional Marketing, S.L.</strong> en virtud de cualquier acuerdo en curso. Está diseñada para protegernos a nosotros, a nuestros clientes y a la comunidad de Internet en general de actividades ilegales, irresponsables y poco éticas.
        </Section>
        <Section>
          Los clientes a los que se descubra participando en actividades prohibidas por esta política pueden ser responsables de la suspensión del servicio y la cancelación de la cuenta. En casos extremos, podemos estar obligados jurídicamente a denunciar a dichos clientes ante las autoridades pertinentes.
        </Section>

        <H2>Uso razonable</H2>
        <Section>
          Proporcionamos nuestra infraestructura dando por sentado que su uso será «el normal y habitual», según nuestro programa de ofertas. Si el uso que usted hace se considera excesivo, se le pueden cobrar tarifas adicionales o se le puede restringir la capacidad.
        </Section>
        <Section>
          Nos oponemos a todas las formas de maltrato, discriminación, vulneración de derechos y/o cualquier acto que dañe o perjudique a cualquier grupo, individuo o recurso. Esperamos que nuestros clientes y usuarios finales también usen nuestros productos con una intención similar.
        </Section>

        <H2>Responsabilidad del cliente</H2>
        <Section>
          Consideramos que nuestros clientes son responsables de sus propios actos, así como de los actos de cualquier persona que utilice nuestros productos con el permiso del cliente. Al aceptar nuestros productos, nuestros clientes acuerdan garantizar el cumplimiento de esta política en nombre de cualquier persona que utilice los productos en calidad de usuario final suyo.
        </Section>
        <Section>
          Si un cliente — o su usuario final — infringe nuestra política de uso aceptable, nos reservamos el derecho de rescindir cualquier producto asociado con la cuenta infractora o tomar cualquier medida correctiva que consideremos adecuada, sin previo aviso.
        </Section>

        <H2>Actividad prohibida</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Vulneración de derechos de autor y acceso no autorizado</h3>
        <Section>
          Nuestros productos no deben usarse para transmitir, distribuir o almacenar ningún material que infrinja ninguna ley aplicable. Esto incluye cualquier material protegido por derechos de autor, marca registrada, secreto comercial u otro derecho de propiedad intelectual utilizado sin la debida autorización, o cualquier material obsceno, difamatorio o que infrinja las leyes de control de exportaciones.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>SPAM y mensajes no autorizados</h3>
        <Section>
          Nuestros productos no deben usarse con el fin de enviar mensajes masivos o comerciales no solicitados («spam»). Tampoco deben utilizarse para gestionar listas de mensajería de suscripción no confirmada. Todas las listas de mensajería gestionadas en nuestros productos deben tener una «suscripción confirmada».
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Actividad poco ética, explotadora y maliciosa</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Nuestros productos no deben usarse para publicitar software diseñado para infringir esta política o facilitar el spam.</li>
          <li>No deben usarse para acceder a ninguna cuenta o recurso electrónico sin autorización («piratería informática»).</li>
          <li>No deben usarse para introducir virus o códigos maliciosos de forma intencionada.</li>
          <li>No deben utilizarse para participar en actividades diseñadas para acosar a otro grupo o individuo.</li>
          <li>Obtener (o intentar obtener) nuestros servicios con la intención de evitar el pago.</li>
          <li>El acceso no autorizado, alteración o destrucción de cualquier información sobre nuestros clientes o usuarios finales.</li>
          <li>Publicar o transmitir contenido que incite a la violencia, represente pornografía infantil o amenace la salud y seguridad de cualquier persona.</li>
          <li>Cualquier acto u omisión que infrinja las leyes y normas de protección al consumidor o la privacidad de una persona.</li>
        </ul>

        <H2>Uso no autorizado de la propiedad de Addicional Marketing, S.L.</H2>
        <Section>
          Prohibimos la suplantación de Addicional Marketing, S.L., la representación de una relación comercial significativa con Addicional Marketing, S.L. o la propiedad de cualquier pertenencia de Addicional Marketing, S.L. con el fin de obtener de forma fraudulenta servicios, clientela, patrocinios o la confianza de los usuarios.
        </Section>

        <H2>Acerca de esta política</H2>
        <Section>
          Esta política describe una lista no exclusiva de actividades e intenciones que consideramos inaceptables e incompatibles con nuestra marca. Nos reservamos el derecho de modificar esta política en cualquier momento mediante la publicación de la versión revisada en nuestro sitio web.
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
