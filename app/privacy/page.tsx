import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for GoToAltinkum.com. Comprehensive compliance disclosure regarding personal data, cookies, analytics, and advertising referrals under GDPR, UK GDPR, and Turkish KVKK.',
  alternates: {
    canonical: 'https://gotoaltinkum.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How GoToAltinkum collects, uses, protects, and handles your personal information in compliance with international data protection laws (GDPR, UK GDPR, Turkish Law No. 6698 / KVKK)."
      currentSlug="privacy"
    >
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
          <p><strong>Effective Date:</strong> October 7, 2026</p>
          <p><strong>Last Updated:</strong> October 7, 2026</p>
          <p><strong>Data Controller:</strong> GoToAltinkum.com Digital Portal (Didim, Aydın, Türkiye)</p>
          <p><strong>Contact Email:</strong> <a href="mailto:info@gotoaltinkum.com" className="text-sky-600 underline">info@gotoaltinkum.com</a></p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Executive Overview & Scope of Service</h2>
          <p>
            Welcome to <strong>GoToAltinkum.com</strong> (&quot;GoToAltinkum&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We operate an independent digital tourism portal, visitor guide, and commercial advertising directory dedicated to Altınkum and Didim in Aydın Province, Türkiye.
          </p>
          <p>
            <strong>Core Business Model Disclosure:</strong> GoToAltinkum is strictly an informational directory and advertising medium. <strong>We do not sell tickets, book accommodation, operate tours, provide flights, or process financial transactions for any travel services.</strong> Apart from commercial advertising and promoting local businesses, we have no other business operations. When you explore flight routes, hotels, boat trips, or restaurants, you are referred directly to independent third-party operators (such as Skyscanner, EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor, or local Didim businesses).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. Legal Frameworks & Regulatory Compliance</h2>
          <p>
            We process personal data in strict conformity with applicable international privacy regulations:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>European Union General Data Protection Regulation (EU GDPR)</strong> (Regulation (EU) 2016/679);</li>
            <li><strong>United Kingdom General Data Protection Regulation (UK GDPR)</strong> and Data Protection Act 2018;</li>
            <li><strong>Turkish Personal Data Protection Law No. 6698 (KVKK)</strong>;</li>
            <li><strong>California Consumer Privacy Act (CCPA) / CPRA</strong> where applicable to US visitors.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Information We Collect</h2>
          <p>
            We adhere strictly to the principle of <em>data minimization</em>. We do not require visitors to register accounts or provide payment details. Information collected falls into the following categories:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Direct Inquiries (Voluntary Information):</strong> When you reach out via our email (<a href="mailto:info@gotoaltinkum.com" className="text-sky-600 underline">info@gotoaltinkum.com</a>), commercial advertising portal, or WhatsApp desk, you may provide your name, business name, email address, phone number, and message content.
            </li>
            <li>
              <strong>Automated Telemetry & Analytics Data:</strong> When browsing our site, Google Analytics 4 (GA4) logs anonymized technical data, including browser type, operating system, referring URL, time spent on pages, and approximate geographic location (city level). IP addresses are automatically truncated and anonymized.
            </li>
            <li>
              <strong>Cookie & Preference Records:</strong> We record your consent preferences (Necessary, Analytics, Marketing) locally on your device via <code>localStorage</code>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Legal Bases for Processing (GDPR Art. 6 / KVKK Art. 5)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consent (Art. 6(1)(a)):</strong> For non-essential performance analytics and marketing/referral cookies. You may withdraw your consent at any time using our Cookie Preferences manager.</li>
            <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> For maintaining website security, diagnosing server latency, preventing fraud, and managing business advertising inquiries.</li>
            <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> To satisfy statutory accounting and tax requirements in Türkiye for commercial advertising clients.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Affiliate Links, Referral Fees & Third-Party Websites</h2>
          <p>
            GoToAltinkum contains outbound links to airlines (EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor), search aggregators (Skyscanner), map services (Google Maps), currency monitors (XE), and local operators.
          </p>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm">
            <strong>Commercial Disclosure:</strong> Some outbound links on this portal are referral links. If you click on an outbound link and make a purchase on a third-party website, GoToAltinkum may receive a referral fee or commission at zero additional cost to you. We are not responsible for the privacy practices, content, terms, or data collection of external third-party sites.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">6. Data Retention & Security</h2>
          <p>
            We implement robust security measures, including SSL/TLS encryption (HTTPS), to safeguard your data in transit. Inquiry emails are retained only for the duration necessary to address your communication or maintain ongoing advertising partnerships, after which they are securely purged.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">7. Your Data Protection Rights</h2>
          <p>Under GDPR and KVKK, you possess the following statutory rights regarding your personal information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Right of Access:</strong> Request confirmation and copies of personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data.</li>
            <li><strong>Right to Restrict or Object to Processing:</strong> Limit how we process your information.</li>
            <li><strong>Right to Data Portability:</strong> Obtain your data in a structured, machine-readable format.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw cookie or marketing consent at any time without affecting the lawfulness of prior processing.</li>
          </ul>
          <p>
            To exercise any of these rights, please email our compliance desk at <a href="mailto:info@gotoaltinkum.com" className="text-sky-600 underline font-semibold">info@gotoaltinkum.com</a>. We respond to verified requests within thirty (30) days without fee.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">8. Contact Us & Supervisory Authorities</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to lodge a complaint, contact us directly at <a href="mailto:info@gotoaltinkum.com" className="text-sky-600 underline">info@gotoaltinkum.com</a>. You also have the right to lodge a complaint with your competent data protection authority (e.g., the Turkish Kişisel Verileri Koruma Kurumu - KVKK, the UK Information Commissioner&apos;s Office - ICO, or your local EU Data Protection Authority).
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
