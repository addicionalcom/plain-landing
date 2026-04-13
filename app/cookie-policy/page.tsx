import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy · Plain",
  description: "Cookie policy for Plain Social. What cookies we use and how to manage them.",
  robots: { index: false, follow: false },
};

export default function CookiePolicyPage() {
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
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Cookie Policy</h1>

        <Section>
          This Policy explains what cookies are, which cookies <strong>Plain Social</strong> (operated by <strong>Addicional Marketing, S.L.</strong>) uses, for what purposes, and how you can manage them. It applies to both <strong>plainsocial.app</strong> (the landing page) and <strong>dashboard.plainsocial.app</strong> (the platform).
        </Section>

        <H2>What are cookies?</H2>
        <Section>
          Cookies are small text files that a website stores on your device when you visit it. They allow the site to remember your preferences, keep your session active, and collect technical information to improve the service. There are session cookies (deleted when you close the browser) and persistent cookies (retained for a set period).
        </Section>

        <H2>Cookies we use</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Strictly necessary cookies</h3>
        <Section>
          These are essential for the Service to function. Without them you would not be able to log in or navigate the platform. They do not require your consent under the ePrivacy Directive.
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Name</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Purpose</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["next-auth.session-token", "Maintains the authenticated user session", "Session / 30 days"],
                ["next-auth.csrf-token", "Protection against CSRF attacks", "Session"],
                ["next-auth.callback-url", "Redirect after OAuth authentication", "Session"],
                ["__Secure-next-auth.*", "Secure (HTTPS) variants of the above", "Session / 30 days"],
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

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Preference cookies</h3>
        <Section>
          These remember your personal settings within the Service (language, interface preferences, etc.) to improve your experience.
        </Section>
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#444" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px 8px 0", fontWeight: 700, color: "#111" }}>Name</th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#111" }}>Purpose</th>
                <th style={{ textAlign: "left", padding: "8px 0 8px 12px", fontWeight: 700, color: "#111" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["plain_lang", "Stores the language selected on the landing page", "1 year"],
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

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Analytics cookies (optional)</h3>
        <Section>
          <strong>Plain Social does not currently use third-party analytics cookies</strong> (Google Analytics, Mixpanel, etc.). If they are implemented in the future, your prior consent will be requested and this policy will be updated.
        </Section>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>Advertising cookies</h3>
        <Section>
          <strong>Plain Social does not use advertising or cross-site tracking cookies.</strong> We do not share browsing data with advertising networks.
        </Section>

        <H2>Third-party cookies</H2>
        <Section>
          When you connect social media accounts (Meta, LinkedIn, TikTok, X/Twitter, etc.) via OAuth, those platforms' services may set their own cookies during the authentication process. These cookies are subject to each platform's privacy policy and are outside Plain's control.
        </Section>
        <Section>
          Payment processing via <strong>Stripe</strong> may set its own cookies during the checkout flow. Please consult Stripe's cookie policy for more information.
        </Section>

        <H2>How to manage cookies</H2>
        <Section>
          You can control and delete cookies from your browser settings. Please note that blocking strictly necessary cookies will prevent the Service from functioning correctly (you will be unable to log in).
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li><a href="https://support.google.com/chrome/answer/95647" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <H2>Legal basis</H2>
        <Section>
          The use of strictly necessary cookies is based on legitimate interests and contractual necessity (Art. 6(1)(b) and 6(1)(f) GDPR). The use of preference and analytics cookies (if applicable in the future) requires your prior consent under Directive 2002/58/EC (ePrivacy) and the LOPDGDD.
        </Section>

        <H2>Changes to this Policy</H2>
        <Section>
          If we change our use of cookies, we will update this page and inform users via a notice on the Service or by email where appropriate.
        </Section>

        <H2>Contact</H2>
        <Section>
          For any queries about the use of cookies: <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a> · Addicional Marketing, S.L., Sabadell, Barcelona, Spain.
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
