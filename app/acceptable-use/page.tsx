import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description:
    'Acceptable Use Policy for GoToAltinkum.com. Standards and rules for website visitors, commercial advertisers, and partners regarding lawful conduct and platform integrity.',
  alternates: {
    canonical: 'https://gotoaltinkum.com/acceptable-use',
  },
};

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      subtitle="Rules, security standards, and behavioral guidelines governing the lawful use of GoToAltinkum.com by visitors, advertisers, and commercial partners."
      currentSlug="acceptable-use"
    >
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
          <p><strong>Effective Date:</strong> October 7, 2026</p>
          <p><strong>Last Updated:</strong> October 7, 2026</p>
          <p><strong>Enforcement Authority:</strong> GoToAltinkum.com Compliance & Security Desk</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Purpose & Scope</h2>
          <p>
            This Acceptable Use Policy (&quot;AUP&quot;) outlines the mandatory rules of conduct for anyone accessing, using, or advertising on <strong>GoToAltinkum.com</strong>. This policy ensures the integrity, security, accuracy, and reliability of our independent tourism directory and advertising portal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. Prohibited Conduct for Visitors</h2>
          <p>You agree not to engage in any of the following prohibited activities:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Automated Data Scraping & Harvesting:</strong> Using bots, spiders, scrapers, or automated tools to extract articles, weather telemetry, FX exchange feeds, or business directory listings without express written permission.
            </li>
            <li>
              <strong>System Disruption & Cyber Attacks:</strong> Attempting to launch Denial of Service (DoS/DDoS) attacks, flood our inquiry endpoints, probe vulnerabilities, or inject malicious code, viruses, or trojans.
            </li>
            <li>
              <strong>Form Abuse & Spam:</strong> Submitting false, spam, phishing, or abusive inquiries through our commercial advertising generator, contact forms, or WhatsApp channels.
            </li>
            <li>
              <strong>Impersonation & Fraud:</strong> Misrepresenting your identity, falsely claiming affiliation with GoToAltinkum, the Didim Municipality, or local tourism associations.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Commercial Advertiser & Partner Standards</h2>
          <p>
            Local businesses contracting advertising or directory packages (hotels, boat tours, transfer companies, restaurants, dental clinics, real estate agencies) must adhere to rigorous standards:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Truth in Advertising:</strong> All promotional descriptions, pricing representations, and photographs must be accurate, genuine, and not misleading.
            </li>
            <li>
              <strong>Licensing & Legal Compliance:</strong> Operators offering commercial boat trips, private airport transfers, diving, or medical tourism must hold all required official operating licenses, insurance policies, and permits issued by relevant Turkish ministries and authorities (e.g., TÜRSAB, Maritime Chamber of Commerce, Ministry of Health).
            </li>
            <li>
              <strong>No Prohibited Goods or Services:</strong> Advertising illegal substances, counterfeit goods, discriminatory practices, or fraudulent financial schemes is strictly prohibited.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Intellectual Property Respect</h2>
          <p>
            Users and advertisers may not upload, publish, or link to content that infringes upon the copyrights, trademarks, privacy, or proprietary rights of third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Monitoring, Enforcement & Sanctions</h2>
          <p>
            We reserve the right, at our sole discretion, to investigate suspected violations of this policy and take any of the following enforcement actions:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Immediate temporary or permanent blocking of offending IP addresses;</li>
            <li>Immediate suspension or permanent removal of commercial directory listings without refund;</li>
            <li>Reporting unlawful activity or fraud to the Turkish National Police (Polis), Gendarmerie, and international cybercrime authorities;</li>
            <li>Initiation of civil or criminal legal proceedings in the courts of Aydın and Didim, Türkiye.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">6. Reporting Violations</h2>
          <p>
            If you encounter any content, advertiser, or listing on GoToAltinkum that violates this Acceptable Use Policy, please report it promptly to our compliance team at <a href="mailto:info@gotoaltinkum.com" className="text-sky-600 underline font-semibold">info@gotoaltinkum.com</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
