import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie Policy for GoToAltinkum.com. Comprehensive disclosure on cookie usage, Google Analytics, affiliate referral tracking, and user consent management under ePrivacy and GDPR.',
  alternates: {
    canonical: 'https://gotoaltinkum.com/cookies',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How GoToAltinkum uses cookies, local storage, and tracking technologies to ensure website performance, analyze audience traffic, and attribute referral links."
      currentSlug="cookies"
    >
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
          <p><strong>Effective Date:</strong> October 7, 2026</p>
          <p><strong>Last Updated:</strong> October 7, 2026</p>
          <p><strong>Applicable Regulations:</strong> EU ePrivacy Directive (2002/58/EC), EU GDPR, UK GDPR, Turkish Law No. 6698 (KVKK)</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are downloaded to your computer, tablet, or mobile device when you visit a website. Cookies allow the website to recognize your device, store your preferences, maintain secure sessions, and collect anonymous analytics to improve the user experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. How GoToAltinkum Uses Cookies & Local Storage</h2>
          <p>
            We use cookies and browser <code>localStorage</code> strictly for legitimate purposes related to operating our visitor guide, diagnosing telemetry performance, measuring traffic, and tracking outbound commercial referrals. We do not sell your browsing data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Categories of Cookies We Use</h2>

          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2 bg-slate-50">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">A. Strictly Necessary Cookies (Essential)</h3>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                Always Active
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              These cookies and tokens are required for core website operation, security, server load balancing, and remembering your cookie consent choice. They cannot be disabled in our systems.
            </p>
            <div className="text-xs font-mono text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200">
              Key Token: <code>gotoaltinkum_cookie_consent_v1</code> (Stores your cookie preferences locally on your device).
            </div>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2 bg-slate-50">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">B. Performance & Analytics Cookies</h3>
              <span className="text-xs font-bold bg-sky-100 text-sky-800 px-2.5 py-0.5 rounded-full">
                Consent Required
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              We use <strong>Google Analytics 4 (GA4)</strong> to aggregate anonymous statistical data regarding visitor numbers, page views, popular beach articles, and page loading speed. All IP addresses are masked and anonymized.
            </p>
            <div className="text-xs font-mono text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200">
              Key Cookies: <code>_ga</code>, <code>_ga_YJXVC4Q4X8</code> (Google Analytics session and visitor measurement).
            </div>
          </div>

          <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2 bg-slate-50">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">C. Commercial Referral & Outbound Attribution Cookies</h3>
              <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                Consent Required
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              GoToAltinkum features outbound links to Skyscanner, EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor, booking portals, and local tour operators. When you click an outbound link, an attribution parameter or referral cookie may be set by the destination partner to record that you arrived from GoToAltinkum.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Managing & Withdrawing Your Consent</h2>
          <p>
            You have total control over your cookie settings on GoToAltinkum:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>On-Site Consent Manager:</strong> You can open our <strong>Cookie Preferences Modal</strong> at any time using the button at the bottom of this page or in the website footer to enable or disable Analytics and Marketing cookies.
            </li>
            <li>
              <strong>Browser Controls:</strong> Most web browsers (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge) allow you to refuse or delete cookies through browser settings. Please note that disabling essential cookies may impact site performance.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Updates to This Cookie Policy</h2>
          <p>
            We may periodically update this Cookie Policy to reflect changes in legal standards or our operational practices. Any modifications will be posted on this page with the updated &quot;Last Updated&quot; date.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
