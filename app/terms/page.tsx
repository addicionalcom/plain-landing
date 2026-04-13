import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · Plain",
  description: "Terms and conditions governing access to and use of Plain Social, the social media management platform for agencies.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
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
        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>Terms of Service</h1>
        <Section>
          These Terms of Service ("Terms") govern access to and use of <strong>Plain Social</strong> ("the Service"), a social media management platform for marketing and communications agencies, operated by <strong>Addicional Marketing, S.L.</strong> ("Plain", "we", "us"), with registered address in Sabadell, Barcelona, Spain, and contact address <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>
        <Section>
          By registering for or using the Service, you agree to be bound by these Terms, our <a href="/privacy" style={{ color: "#111" }}>Privacy Policy</a>, and our <a href="/acceptable-use" style={{ color: "#111" }}>Acceptable Use Policy</a>. If you are contracting the Service on behalf of a company or organisation, you represent that you have authority to bind that entity. If you disagree, do not use the Service.
        </Section>

        <H2>1. Description of the Service</H2>
        <Section>
          Plain Social is a SaaS (Software as a Service) platform that enables agencies and marketing professionals to manage their clients' social media presence: plan and publish content, analyse metrics, manage comments and direct messages, generate performance reports, and use AI-assisted features. The Service is delivered via <strong>dashboard.plainsocial.app</strong>.
        </Section>

        <H2>2. Eligibility and registration</H2>
        <Section>
          To use the Service you must be at least 18 years old and have legal capacity to enter into contracts. When creating an account you provide truthful, up-to-date information. You are responsible for maintaining the confidentiality of your credentials and for all actions taken under your account. Notify us immediately of any unauthorised access at <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>3. Plans and payments</H2>
        <Section>
          Plain Social is offered through monthly or annual subscription plans. Current pricing is published at <strong>plainsocial.app/#pricing</strong>. Payments are processed by <strong>Stripe</strong>, a third-party payment service provider. Plain does not store credit card data.
        </Section>
        <Section>
          Subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date. Cancellations take effect at the end of the current billing period; no pro-rated refunds are issued for unused portions of a period, except as required by law or agreed in writing. Plain reserves the right to modify pricing with at least 30 days' notice communicated by email.
        </Section>

        <H2>4. Use of the Service and user responsibilities</H2>
        <Section>
          You are solely responsible for the content you publish or schedule through the Service on third-party social networks (Meta, LinkedIn, TikTok, X/Twitter, etc.), and for complying with each platform's terms of use. Plain acts as a technical tool and does not review or approve published content.
        </Section>
        <Section>
          As an agency managing end-client accounts, you are responsible for obtaining all necessary authorisations from your clients to connect their social media accounts to Plain, process their data, and publish content on their behalf. You must inform your clients about the use of Plain and ensure they comply with these Terms and our <a href="/acceptable-use" style={{ color: "#111" }}>Acceptable Use Policy</a>.
        </Section>

        <H2>5. Artificial Intelligence</H2>
        <Section>
          Some features of the Service use artificial intelligence models provided by <strong>Anthropic</strong> to assist in content generation and improvement. AI-generated content is provided as a suggestion; review, final approval, and publication are the user's sole responsibility. Plain does not warrant the accuracy, suitability, or freedom from bias of AI-generated content.
        </Section>

        <H2>6. Intellectual property</H2>
        <Section>
          <strong>Your content.</strong> You retain all intellectual property rights over the content you input into the Service. You grant us a limited, non-exclusive, revocable licence to store and process it solely for the purpose of providing the Service.
        </Section>
        <Section>
          <strong>Our Service.</strong> Plain Social, including its software, design, brand, documentation, and aggregated analytics data, is owned by Addicional Marketing, S.L. and is protected by intellectual and industrial property law. You acquire no rights over the Service beyond those expressly granted in these Terms.
        </Section>

        <H2>7. Privacy and data protection</H2>
        <Section>
          The processing of personal data is governed by our <a href="/privacy" style={{ color: "#111" }}>Privacy Policy</a>. To the extent that you process personal data of your end clients through the Service, you will act as data controller and Plain as data processor within the meaning of Regulation (EU) 2016/679 (GDPR). The terms of this processing arrangement are set out in the Data Processing Agreement available on request at <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a>.
        </Section>

        <H2>8. Availability and maintenance</H2>
        <Section>
          We strive to maintain Service availability above 99.5% per month. However, we do not guarantee uninterrupted availability. We may carry out scheduled maintenance, preferably during low-demand hours, with advance notice where possible. We are not liable for interruptions caused by third parties (social media platforms, infrastructure providers, etc.).
        </Section>

        <H2>9. Limitation of liability</H2>
        <Section>
          To the maximum extent permitted by applicable law, Plain shall not be liable for indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or reputation). Plain's total aggregate liability to you for any claim shall not exceed the amounts paid for the Service in the 12 months preceding the event giving rise to the claim.
        </Section>
        <Section>
          Plain does not warrant any particular business outcomes from use of the Service, nor the behaviour of third-party social media platforms, which may modify their APIs or policies at any time.
        </Section>

        <H2>10. Suspension and termination</H2>
        <Section>
          We may suspend or terminate your access to the Service, with or without notice, if you breach these Terms, the Acceptable Use Policy, or any applicable law. Upon termination, we will delete your data as set out in our Privacy Policy, unless we are required to retain it by law.
        </Section>
        <Section>
          You may cancel your subscription at any time from your account settings. Cancellation does not entitle you to a refund for the current billing period except as provided by applicable consumer law.
        </Section>

        <H2>11. Changes to the Terms</H2>
        <Section>
          We may modify these Terms at any time. We will notify you of material changes by email at least 30 days in advance. Continued use of the Service after the changes take effect constitutes acceptance. If you do not accept the new terms, you may cancel your subscription before the effective date.
        </Section>

        <H2>12. Governing law and dispute resolution</H2>
        <Section>
          These Terms are governed by Spanish law and, where applicable, by European Union law. The parties submit to the jurisdiction of the Courts and Tribunals of Barcelona, waiving any other jurisdiction to which they may be entitled, without prejudice to the rights that consumer regulations grant to users who qualify as consumers.
        </Section>
        <Section>
          For users in the European Union: you may access the European Commission's online dispute resolution platform at <a href="https://ec.europa.eu/consumers/odr" style={{ color: "#111" }} target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
        </Section>

        <H2>13. Contact</H2>
        <Section>
          For any questions about these Terms, write to us at <a href="mailto:privacy@plainsocial.app" style={{ color: "#111" }}>privacy@plainsocial.app</a> or <strong>Addicional Marketing, S.L., Sabadell, Barcelona, Spain</strong>.
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
