import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio · Plain",
  description: "Términos y condiciones de uso del servicio Plain Social, la plataforma de gestión de redes sociales para agencias.",
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
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Última actualización: 13 de abril de 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Términos de servicio</h1>
        <Section>
          Estos Términos de Servicio («Términos») regulan el acceso y uso de <strong>Plain Social</strong> («el Servicio»), una plataforma de gestión de redes sociales para agencias de marketing y comunicación, operada por <strong>Addicional Marketing, S.L.</strong> («Plain», «nosotros», «nos»), con domicilio en Sabadell, Barcelona, España, y dirección de contacto <a href="mailto:hola@plainsocial.app" style={{ color: "#111" }}>hola@plainsocial.app</a>.
        </Section>
        <Section>
          Al registrarte o usar el Servicio, aceptas quedar vinculado por estos Términos y por nuestra <a href="/es/privacy" style={{ color: "#111" }}>Política de Privacidad</a> y <a href="/es/acceptable-use" style={{ color: "#111" }}>Política de Uso Aceptable</a>. Si contratas el Servicio en nombre de una empresa u organización, declaras tener autorización para obligar a dicha entidad. Si no estás de acuerdo, no uses el Servicio.
        </Section>

        <H2>1. Descripción del Servicio</H2>
        <Section>
          Plain Social es una plataforma SaaS (Software as a Service) que permite a agencias y profesionales del marketing gestionar la presencia en redes sociales de sus clientes: planificar y publicar contenido, analizar métricas, gestionar comentarios y mensajes directos, generar informes de resultados y utilizar funciones asistidas por inteligencia artificial. El Servicio se presta a través de <strong>dashboard.plainsocial.app</strong>.
        </Section>

        <H2>2. Elegibilidad y registro</H2>
        <Section>
          Para usar el Servicio debes tener al menos 18 años y capacidad legal para suscribir contratos. Al crear una cuenta proporcionas información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales y de todas las acciones realizadas bajo tu cuenta. Notifícanos de inmediato ante cualquier acceso no autorizado a <a href="mailto:hola@plainsocial.app" style={{ color: "#111" }}>hola@plainsocial.app</a>.
        </Section>

        <H2>3. Planes y pagos</H2>
        <Section>
          Plain Social se ofrece mediante planes de suscripción mensual o anual. Los precios vigentes están publicados en <strong>plainsocial.app/#precios</strong>. El pago se procesa a través de <strong>Stripe</strong>, un proveedor externo de servicios de pago. Plain no almacena datos de tarjeta de crédito.
        </Section>
        <Section>
          La suscripción se renueva automáticamente al final de cada período salvo que la canceles antes de la fecha de renovación. Las cancelaciones surten efecto al término del período de facturación en curso; no se realizan reembolsos prorrateados por el período no consumido, salvo obligación legal o acuerdo expreso por escrito. Plain se reserva el derecho de modificar precios con un preaviso mínimo de 30 días comunicado por correo electrónico.
        </Section>

        <H2>4. Uso del Servicio y responsabilidades del usuario</H2>
        <Section>
          Eres el único responsable del contenido que publiques o programes a través del Servicio en redes sociales de terceros (Meta, LinkedIn, TikTok, X/Twitter, etc.), así como del cumplimiento de los términos de uso de cada plataforma. Plain actúa como herramienta técnica y no revisa ni aprueba el contenido publicado.
        </Section>
        <Section>
          Como agencia que gestiona cuentas de clientes finales, eres responsable de obtener todas las autorizaciones necesarias de tus clientes para conectar sus cuentas de redes sociales a Plain, tratar sus datos y publicar contenido en su nombre. Debes informar a tus clientes sobre el uso de Plain y asegurarte de que cumplen con estos Términos y con nuestra <a href="/es/acceptable-use" style={{ color: "#111" }}>Política de Uso Aceptable</a>.
        </Section>

        <H2>5. Inteligencia Artificial</H2>
        <Section>
          Algunas funciones del Servicio utilizan modelos de inteligencia artificial proporcionados por <strong>Anthropic</strong> para asistir en la generación y mejora de contenido. El contenido generado por IA se facilita como sugerencia; su revisión, aprobación final y publicación son responsabilidad exclusiva del usuario. Plain no garantiza la exactitud, adecuación ni ausencia de sesgos del contenido generado por IA.
        </Section>

        <H2>6. Propiedad intelectual</H2>
        <Section>
          <strong>Tu contenido.</strong> Mantienes todos los derechos de propiedad intelectual sobre el contenido que introduces en el Servicio. Nos concedes una licencia limitada, no exclusiva y revocable para almacenarlo y procesarlo con el único fin de prestarte el Servicio.
        </Section>
        <Section>
          <strong>Nuestro Servicio.</strong> Plain Social, incluyendo su software, diseño, marca, documentación y datos analíticos agregados, es propiedad de Addicional Marketing, S.L. y está protegido por la legislación de propiedad intelectual e industrial. No adquieres ningún derecho sobre el Servicio más allá de los expresamente concedidos en estos Términos.
        </Section>

        <H2>7. Privacidad y protección de datos</H2>
        <Section>
          El tratamiento de datos personales se rige por nuestra <a href="/es/privacy" style={{ color: "#111" }}>Política de Privacidad</a>. En la medida en que trates datos personales de tus clientes finales a través del Servicio, actuarás como responsable del tratamiento y Plain como encargado del tratamiento en los términos del Reglamento (UE) 2016/679 (RGPD). Las condiciones de este encargo se desarrollan en el Acuerdo de Encargo de Tratamiento disponible previa solicitud a <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>8. Disponibilidad y mantenimiento</H2>
        <Section>
          Nos esforzamos por mantener una disponibilidad del Servicio superior al 99,5 % mensual. Sin embargo, no garantizamos disponibilidad ininterrumpida. Podemos realizar tareas de mantenimiento programado, preferentemente en horario de baja demanda, con aviso previo cuando sea posible. No somos responsables de interrupciones causadas por terceros (plataformas de redes sociales, proveedores de infraestructura, etc.).
        </Section>

        <H2>9. Limitación de responsabilidad</H2>
        <Section>
          En la máxima medida permitida por la ley aplicable, Plain no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos (incluyendo pérdida de beneficios, datos o reputación). La responsabilidad total acumulada de Plain frente a ti por cualquier reclamación no superará el importe pagado por el Servicio en los 12 meses anteriores al evento que dio origen a la reclamación.
        </Section>
        <Section>
          Plain no garantiza los resultados de negocio derivados del uso del Servicio ni el comportamiento de las plataformas de redes sociales de terceros, que pueden modificar sus APIs o políticas en cualquier momento.
        </Section>

        <H2>10. Suspensión y resolución</H2>
        <Section>
          Podemos suspender o cancelar tu acceso al Servicio, con o sin previo aviso, si incumples estos Términos, la Política de Uso Aceptable o cualquier ley aplicable. Tras la cancelación, eliminaremos tus datos según lo establecido en nuestra Política de Privacidad, salvo que debamos conservarlos por obligación legal.
        </Section>
        <Section>
          Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación no da derecho a reembolso del período en curso salvo en los casos previstos por la normativa de consumo aplicable.
        </Section>

        <H2>11. Cambios en los Términos</H2>
        <Section>
          Podemos modificar estos Términos en cualquier momento. Te notificaremos los cambios materiales por correo electrónico con al menos 30 días de antelación. El uso continuado del Servicio tras la entrada en vigor de los cambios implica su aceptación. Si no aceptas los nuevos términos, puedes cancelar tu suscripción antes de la fecha de entrada en vigor.
        </Section>

        <H2>12. Legislación aplicable y resolución de conflictos</H2>
        <Section>
          Estos Términos se rigen por la legislación española y, en lo que resulte aplicable, por el Derecho de la Unión Europea. Las partes se someten a la jurisdicción de los Juzgados y Tribunales de Barcelona, con renuncia a cualquier otro fuero que pudiera corresponderles, sin perjuicio de los derechos que la normativa de consumo reconoce a los usuarios que tengan la condición de consumidores.
        </Section>
        <Section>
          Para usuarios en la Unión Europea: puedes acceder a la plataforma de resolución de litigios en línea de la Comisión Europea en <a href="https://ec.europa.eu/consumers/odr" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
        </Section>

        <H2>13. Contacto</H2>
        <Section>
          Para cualquier consulta sobre estos Términos, escríbenos a <a href="mailto:hola@plainsocial.app" style={{ color: "#111" }}>hola@plainsocial.app</a> o a <strong>Addicional Marketing, S.L., Sabadell, Barcelona, España</strong>.
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
