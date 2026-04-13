import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy · Plain",
  description: "Acceptable use policy for Plain Social. What uses are permitted and what is prohibited.",
  robots: { index: false, follow: false },
};

export default function AcceptableUsePage() {
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
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Acceptable Use Policy</h1>

        <Section>
          This Acceptable Use Policy ("AUP") forms part of the <a href="/terms" style={{ color: "#111" }}>Terms of Service</a> of <strong>Plain Social</strong>, operated by <strong>Addicional Marketing, S.L.</strong> ("Plain"). It sets out which uses of the Service are permitted and which are prohibited, with the aim of ensuring a safe, professional, and legally compliant environment for all agencies and users.
        </Section>
        <Section>
          By using the Service, you agree to comply with this AUP. Violations may result in immediate suspension or cancellation of your account, without prejudice to any legal action that may follow.
        </Section>

        <H2>1. Permitted use</H2>
        <Section>
          Plain Social is designed exclusively for professional use by marketing and communications agencies and industry professionals. Permitted uses include:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Planning, scheduling, and publishing content on clients' social media accounts with their express authorisation.</li>
          <li>Analysing performance metrics for your own or clients' social accounts with their authorisation.</li>
          <li>Managing comments and direct messages on behalf of clients who have expressly delegated that management.</li>
          <li>Generating performance reports for clients.</li>
          <li>Using AI features to assist in content creation, always under human supervision.</li>
          <li>Collaborating with team members within the same agency.</li>
        </ul>

        <H2>2. Responsibility for client accounts</H2>
        <Section>
          If you use Plain Social to manage third-party accounts (your clients), you are solely responsible for:
        </Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Obtaining explicit authorisation from each client to connect their accounts and manage their social media presence.</li>
          <li>Ensuring that published content complies with each platform's terms of service (Meta, LinkedIn, TikTok, X/Twitter, etc.).</li>
          <li>Informing your clients that Plain acts as a sub-processor of their data.</li>
          <li>Removing access to client accounts as soon as the professional relationship ends.</li>
        </ul>

        <H2>3. Prohibited activities</H2>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.1 Manipulation and spam on social media</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Publishing unsolicited mass content ("spam") or repetitive messages for artificial engagement purposes.</li>
          <li>Using Plain to buy, sell, or simulate followers, likes, comments, or any engagement metric.</li>
          <li>Automating interactions in a manner that violates social media platforms' usage policies.</li>
          <li>Creating or managing fake accounts or impersonation profiles.</li>
          <li>Coordinating harassment campaigns, manipulation of public opinion, or disinformation.</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.2 Prohibited content</h3>
        <Section>
          It is prohibited to use Plain Social to publish, schedule, or distribute content that:</Section>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Is illegal in any applicable jurisdiction.</li>
          <li>Incites hatred, violence, or discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics.</li>
          <li>Contains child sexual abuse material or material that exploits or harms minors.</li>
          <li>Defames, harasses, or threatens natural or legal persons.</li>
          <li>Infringes intellectual property rights (copyright, trademarks, etc.) without proper authorisation.</li>
          <li>Contains misleading, fraudulent, or deceptive information designed to mislead consumers.</li>
          <li>Promotes illegal activities (fraud, money laundering, sale of illegal substances, etc.).</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.3 Misuse of the platform</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Attempting to access other users' data or accounts without authorisation.</li>
          <li>Reverse engineering, decompiling, or attempting to extract the Service's source code.</li>
          <li>Introducing viruses, malware, malicious scripts, or any harmful code.</li>
          <li>Conducting denial-of-service attacks (DoS/DDoS) or any action that degrades the Service's availability.</li>
          <li>Using the Service to extract data in bulk ("scraping") without express authorisation.</li>
          <li>Circumventing security measures, usage limits, or access restrictions.</li>
          <li>Sharing login credentials with persons outside your organisation.</li>
          <li>Attempting to obtain the Service without payment or through fraudulent means.</li>
        </ul>

        <h3 style={{ fontSize: 16, fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#111" }}>3.4 Misuse of artificial intelligence</h3>
        <ul style={{ paddingLeft: 24, color: "#444", fontSize: 15, lineHeight: 2 }}>
          <li>Using AI features to generate misleading content, disinformation, or deepfakes.</li>
          <li>Inputting sensitive personal data of third parties into AI features without a legal basis.</li>
          <li>Attempting to manipulate AI models to produce harmful, illegal, or AUP-violating outputs.</li>
          <li>Publishing AI-generated content without prior human review where there is a risk of harm.</li>
        </ul>

        <H2>4. Compliance with platform policies</H2>
        <Section>
          Use of Plain Social must at all times comply with the policies, terms, and guidelines of the integrated social media platforms (Meta Business, LinkedIn Marketing Solutions, TikTok for Business, X API, etc.). Plain is not responsible for consequences arising from the user's non-compliance with those policies, including suspension of accounts on those platforms.
        </Section>

        <H2>5. Fair use of resources</H2>
        <Section>
          The Service is provided with usage limits according to the contracted plan (number of posts, connected accounts, users, etc.). Excessive use that affects the Service's performance for other users may be limited or billed additionally, following prior notice. The use of automated scripts to interact with the Service's API or interface beyond what is set out in the official documentation is not permitted.
        </Section>

        <H2>6. Reporting violations</H2>
        <Section>
          If you detect use of the Service that violates this AUP, please report it to <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>. We will investigate all reports diligently and take appropriate action.
        </Section>

        <H2>7. Consequences of non-compliance</H2>
        <Section>
          In the event of a breach of this AUP, Plain reserves the right to: (i) issue a warning; (ii) temporarily suspend access to the Service; (iii) permanently cancel the account; (iv) report the breach to the relevant authorities where legally required. Consequences will be applied proportionally to the severity of the breach, although we reserve the right to cancel an account immediately in the event of serious violations.
        </Section>

        <H2>8. Modifications</H2>
        <Section>
          We may update this AUP to reflect changes in the Service, integrated platforms, or applicable regulations. Material changes will be communicated with at least 15 days' notice by email. Continued use of the Service constitutes acceptance of the current version.
        </Section>

        <H2>9. Contact</H2>
        <Section>
          For queries about this Policy or to report violations: <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a> · Addicional Marketing, S.L., Sabadell, Barcelona, Spain.
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
