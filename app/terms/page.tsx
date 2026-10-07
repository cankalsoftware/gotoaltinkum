import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for GoToAltinkum.com. Legal agreement governing website use, informational directory disclaimers, advertising referrals, and limitation of liability.',
  alternates: {
    canonical: 'https://gotoaltinkum.com/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The legally binding terms and conditions governing your access to and use of the GoToAltinkum.com tourism directory and advertising portal."
      currentSlug="terms"
    >
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600">
          <p><strong>Effective Date:</strong> October 7, 2026</p>
          <p><strong>Last Updated:</strong> October 7, 2026</p>
          <p><strong>Platform Operator:</strong> GoToAltinkum.com Digital Authority & Directory (Didim, Aydın, Türkiye)</p>
          <p><strong>Jurisdiction:</strong> Didim & Aydın Courts, Republic of Türkiye</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using <strong>GoToAltinkum.com</strong> (&quot;the Website&quot;, &quot;the Portal&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service (&quot;Terms&quot;) and our <a href="/privacy" className="text-sky-600 underline">Privacy Policy</a>. If you do not agree with any part of these Terms, you must immediately cease use of the Website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. Description of Service & Fundamental Disclaimer</h2>
          <p>
            GoToAltinkum provides an informational tourist guide, beach catalog, historical reference, and commercial advertising directory for Altınkum, Didim, and the surrounding Aegean region in Türkiye.
          </p>
          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-rose-950 text-xs sm:text-sm space-y-2">
            <strong className="block text-rose-900 font-black uppercase tracking-wider text-sm">
              Critical Notice: No Direct Bookings or Ticket Sales
            </strong>
            <p>
              <strong>GoToAltinkum is strictly an informational directory and referral medium.</strong> We are not a travel agency, tour operator, airline, hotelier, or booking engine. <strong>We do not sell tickets, book accommodation, operate boat trips, provide transport, or process payments for any travel activities.</strong>
            </p>
            <p>
              When you click on links for flights, hotels, excursions, or dining, you are leaving GoToAltinkum and connecting directly with independent third-party companies. Any contract, booking, transaction, or dispute is strictly between you and that third-party provider.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Commercial Advertising & Referral Fee Disclosure</h2>
          <p>
            <strong>Apart from publishing commercial advertising and promoting local partner businesses, GoToAltinkum has no other commercial business operations.</strong>
          </p>
          <p>
            We may feature sponsored listings, banner promotions, or affiliate referral links (such as Skyscanner, EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor, or local operators). When you click a referral link or contact an advertiser through our portal, we may receive an advertising fee, commission, or referral fee. This does not increase the price you pay.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Accuracy of Information & Price Guidance Only</h2>
          <p>
            All information on GoToAltinkum — including but not limited to weather telemetry, sea temperatures, live exchange rate approximations (GBP, EUR, USD to TRY), flight schedules, indicative airfare brackets, dolmuş bus routes, boat tour pricing, and restaurant recommendations — is compiled in good faith and provided <strong>for informational and guidance purposes only</strong>.
          </p>
          <p>
            Prices, seasonal schedules, flight routes, and currency exchange rates fluctuate constantly. <strong>Users must verify all current prices, seat availability, baggage rules, visa requirements, and safety policies directly with the official third-party operators prior to making bookings or travel plans.</strong> We make no express or implied warranties regarding the completeness, accuracy, reliability, or timeliness of any content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, GoToAltinkum, its directors, developers, authors, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your access to, use of, or inability to access or use the Website;</li>
            <li>Any inaccuracies, errors, omissions, or outdated pricing/schedule information published on the Website;</li>
            <li>The performance, failure, cancellation, insolvency, personal injury, property loss, or breach of contract by any third-party airline, hotel, tour boat operator, restaurant, or advertiser listed on our directory;</li>
            <li>Any external website linked to from our portal;</li>
            <li>Weather conditions, sea state changes, or natural occurrences in Didim and the Aegean region.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">6. Intellectual Property & Copyright</h2>
          <p>
            All original text, editorial guides, graphical logos, custom code, layout design, and compilations on GoToAltinkum.com are the exclusive intellectual property of GoToAltinkum and protected under international copyright, trademark, and database protection laws. You may view and print content strictly for personal, non-commercial holiday planning. Reproduction, scraping, or redistribution without prior written permission is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">7. Advertiser Terms & Business Listings</h2>
          <p>
            Local businesses contracting advertising or directory packages (Verified Listing, Gold Showcase, Diamond Sponsor) agree that all submitted images, descriptions, phone numbers, and promotional claims are truthful, lawful, and do not infringe third-party rights. GoToAltinkum reserves the right to reject or remove listings that violate our <a href="/acceptable-use" className="text-sky-600 underline">Acceptable Use Policy</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">8. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms of Service and any dispute arising from your use of the Website shall be governed by and construed in accordance with the laws of the <strong>Republic of Türkiye</strong>. You agree that the courts and execution offices of <strong>Aydın and Didim, Türkiye</strong> shall have exclusive jurisdiction over any legal proceedings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">9. Modifications to Terms</h2>
          <p>
            We reserve the right to revise or update these Terms at any time without prior notice. Any modifications will take effect immediately upon being posted with the updated &quot;Last Updated&quot; date on this page. Your continued use of the Portal signifies your acceptance of any revisions.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
