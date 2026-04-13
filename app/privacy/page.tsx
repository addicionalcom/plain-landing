import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Plain",
  description: "Privacy and data protection policy for Plain Social. How we collect, use, and protect your information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: "var(--font-geist, system-ui, sans-serif)", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.svg" alt="Plain" style={{ height: 22 }} />
        </a>
        <a href="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← Back</a>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 96px" }}>
        <p style={{ fontSize: 13, color: "#aaa", marginBottom: 8 }}>Last updated: April 13, 2026</p>
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Privacy Policy</h1>

        <Section>
          <strong>Addicional Marketing, S.L.</strong> ("Plain", "we", "us"), with registered address in Sabadell, Barcelona, Spain, and privacy contact <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>, is the data controller for personal data collected through <strong>plainsocial.app</strong> and the <strong>Plain Social</strong> platform ("the Service").
        </Section>
        <Section>
          This Policy explains what data we collect, how we use it, with whom we share it, how long we retain it, and what rights you have. If you have any questions, write to <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>1. Data we collect</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.1 Account and profile data</h3>
        <Section>
          When you register we collect your name, email address, agency name, and optionally a logo and brand colour. If you sign up via an OAuth provider (Google, etc.) we receive the basic profile data you share with that provider.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.2 Service usage data</h3>
        <Section>
          We log how you interact with the Service: actions performed, content created and scheduled, access dates and times, and technical performance data. We also store the OAuth access tokens for social media accounts you connect to the Service (Meta, LinkedIn, TikTok, X/Twitter, etc.) in order to publish content and retrieve metrics on your behalf.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.3 End-client data of the agency</h3>
        <Section>
          If, as an agency, you input your clients' data into the Service (name, brand colour, associated accounts, social media data, etc.), you are the data controller for that data and Plain acts as data processor. We commit to processing that data solely on your instructions and in accordance with the Data Processing Agreement (available at <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>).
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.4 Payment data</h3>
        <Section>
          Payments are processed by <strong>Stripe</strong>. Plain does not store full card numbers or banking details; we only retain the Stripe customer and subscription identifier, invoice history, and billing email.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>1.5 Technical and browsing data</h3>
        <Section>
          We automatically collect IP address, browser type and version, operating system, pages visited, session duration, and error diagnostic data. We use strictly necessary cookies for the operation of the Service; see our <a href="/cookie-policy" style={{ color: "#111" }}>Cookie Policy</a> for details.
        </Section>

        <H2>2. Purposes and legal basis for processing</H2>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><strong>Service provision</strong> — legal basis: performance of a contract (Art. 6(1)(b) GDPR).</li>
          <li><strong>Account management and billing</strong> — legal basis: performance of a contract and compliance with a legal obligation (Art. 6(1)(b) and 6(1)(c) GDPR).</li>
          <li><strong>Service communications</strong> (account notifications, technical alerts, terms updates) — legal basis: legitimate interests (Art. 6(1)(f) GDPR).</li>
          <li><strong>Marketing communications</strong> (product news and improvements) — legal basis: consent (Art. 6(1)(a) GDPR). You may withdraw consent at any time via the unsubscribe link in any email.</li>
          <li><strong>Service improvement and usage analytics</strong> — legal basis: legitimate interests.</li>
          <li><strong>Compliance with legal obligations</strong> — legal basis: legal obligation (Art. 6(1)(c) GDPR).</li>
          <li><strong>Artificial intelligence features</strong> — Text you input into AI features is sent to <strong>Anthropic</strong> for processing. Legal basis: performance of a contract. Anthropic does not use this data to train its models by default.</li>
        </ul>

        <H2>3. Recipients and sub-processors</H2>
        <Section>
          We share data only with the providers necessary to deliver the Service ("sub-processors"). All are subject to confidentiality and data protection agreements:
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Provider</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Purpose</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>Country</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Vercel", "Service hosting and execution", "USA (SCCs)"],
                ["Cloudflare R2", "File storage (images, logos)", "USA (SCCs)"],
                ["Anthropic", "Artificial intelligence features", "USA (SCCs)"],
                ["Stripe", "Payment processing", "USA (SCCs)"],
                ["Meta, LinkedIn, TikTok, X/Twitter…", "Social media APIs (publishing, metrics)", "Various (own policies)"],
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
          We do not sell personal data to third parties. We do not share data with advertisers.
        </Section>

        <H2>4. International transfers</H2>
        <Section>
          Some of our sub-processors are located outside the European Economic Area (primarily in the United States). Transfers to these providers are covered by the <strong>Standard Contractual Clauses</strong> adopted by the European Commission (Implementing Decision (EU) 2021/914), which ensure a level of protection equivalent to that required by the GDPR.
        </Section>

        <H2>5. Data retention</H2>
        <Section>
          We retain your data for as long as you maintain an active account with the Service. After account cancellation, we delete or anonymise data within a maximum of 90 days, except where we are required to retain it to comply with legal obligations (e.g. tax records for the period required under Spanish law). Encrypted backups may be retained for up to 30 additional days before permanent deletion.
        </Section>

        <H2>6. Your rights</H2>
        <Section>
          Under the GDPR and Organic Law 3/2018 (LOPDGDD), you have the following rights over your personal data:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><strong>Access:</strong> find out what data we process about you.</li>
          <li><strong>Rectification:</strong> correct inaccurate or incomplete data.</li>
          <li><strong>Erasure ("right to be forgotten"):</strong> request deletion of your data when it is no longer necessary.</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests.</li>
          <li><strong>Restriction:</strong> request that we temporarily suspend processing.</li>
          <li><strong>Portability:</strong> receive your data in a structured format and transfer it to another controller.</li>
          <li><strong>Withdrawal of consent:</strong> at any time, without retroactive effect.</li>
        </ul>
        <Section>
          To exercise any of these rights, write to <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>. We will respond within a maximum of 30 days (extendable to 90 days in complex cases). You may also lodge a complaint with the <strong>Spanish Data Protection Agency</strong> (<a href="https://www.aepd.es" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">aepd.es</a>).
        </Section>

        <H2>7. Additional rights for California residents (CCPA/CPRA)</H2>
        <Section>
          If you reside in California (USA), you have the right to: (i) know the categories of personal information we collect and share; (ii) request deletion of your personal information; (iii) correct inaccurate information; (iv) opt out of the sale or sharing of your information (Plain does not sell or share personal data). We will not discriminate against you for exercising these rights. To do so, contact <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>8. Rights for Brazil residents (LGPD)</H2>
        <Section>
          If you reside in Brazil, the General Data Protection Law (Lei nº 13.709/2018) grants you rights similar to those under the GDPR: access, correction, deletion, portability, information about data sharing, and revocation of consent. You may exercise them at <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>9. Minors</H2>
        <Section>
          Plain Social is a professional service intended for businesses and agencies. We do not knowingly collect data from individuals under 18 years of age. If you become aware that a minor has provided data without consent, please contact us so we can delete it.
        </Section>

        <H2>10. Security</H2>
        <Section>
          We apply appropriate technical and organisational measures to protect your data: encryption in transit (TLS), encryption at rest for sensitive data, role-based access control, periodic security audits, and incident response plans. In the event of a security breach that poses a risk to your rights, we will notify you in accordance with the applicable legal time frames.
        </Section>

        <H2>11. Cookies</H2>
        <Section>
          We use strictly necessary cookies for the operation of the Service. See our <a href="/cookie-policy" style={{ color: "#111" }}>Cookie Policy</a> for detailed information on the types of cookies used and how to manage them.
        </Section>

        <H2>12. Changes to this Policy</H2>
        <Section>
          We may update this Policy periodically. We will notify you of relevant changes by email. The "last updated" date at the top of this page always reflects the current version.
        </Section>

        <H2>13. Contact and Data Protection Officer</H2>
        <Section>
          For any privacy queries or to exercise your rights:<br />
          <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a><br />
          Addicional Marketing, S.L. · Sabadell, Barcelona, Spain
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
        <a href="/privacy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Privacy Policy</a>
        <a href="/terms" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Terms of Service</a>
        <a href="/cookie-policy" style={{ color: "#ccc", textDecoration: "none", marginRight: 16 }}>Cookie Policy</a>
        <a href="/acceptable-use" style={{ color: "#ccc", textDecoration: "none" }}>Acceptable Use</a>
      </p>
      <p style={{ fontSize: 11, color: "#ddd", marginTop: 8 }}>© 2026 Addicional Marketing, S.L. · Made in Sabadell</p>
    </footer>
  );
}
