import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Cookie, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Scale,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Center & Compliance Hub',
  description:
    'Legal Center and Regulatory Compliance Hub for GoToAltinkum.com. Access our Privacy Policy, Terms of Service, Cookie Policy, Acceptable Use, and affiliate referral disclosures.',
  alternates: {
    canonical: 'https://gotoaltinkum.com/legal',
  },
};

export default function LegalCenterPage() {
  const policies = [
    {
      title: 'Privacy Policy',
      href: '/privacy',
      icon: Lock,
      color: 'from-sky-500 to-cyan-500',
      description:
        'Explains how personal data, analytics telemetry, and inquiry metadata are collected, handled, and protected in compliance with EU GDPR, UK GDPR, and Turkish KVKK.',
      badge: 'Data Protection & GDPR',
    },
    {
      title: 'Terms of Service',
      href: '/terms',
      icon: FileText,
      color: 'from-amber-500 to-yellow-500',
      description:
        'The binding legal contract governing website usage, non-ticketing directory disclosures, referral commissions, limitation of liability, and jurisdiction under Turkish law.',
      badge: 'User Agreement & Disclaimers',
    },
    {
      title: 'Cookie Policy',
      href: '/cookies',
      icon: Cookie,
      color: 'from-emerald-500 to-teal-500',
      description:
        'Detailed breakdown of essential cookies, Google Analytics 4 tracking, commercial referral attribution, and your statutory rights to manage consent.',
      badge: 'ePrivacy & Tracking Choices',
    },
    {
      title: 'Acceptable Use Policy',
      href: '/acceptable-use',
      icon: ShieldCheck,
      color: 'from-purple-500 to-indigo-500',
      description:
        'Mandatory standards of conduct for website visitors and commercial advertisers regarding lawful behavior, truth in advertising, and platform integrity.',
      badge: 'Platform Rules & Standards',
    },
  ];

  return (
    <LegalLayout
      title="Legal Center & Regulatory Hub"
      subtitle="Complete transparent overview of GoToAltinkum's legal terms, privacy protections, commercial disclosures, and international regulatory compliance."
      currentSlug="legal"
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Welcome to the GoToAltinkum Legal Center</h2>
          <p>
            At <strong>GoToAltinkum.com</strong>, we believe in 100% transparency with our visitors, advertisers, and community partners. As an independent travel guide and local advertising directory for Didim and Altınkum, Türkiye, we operate in full compliance with international standards of consumer protection, electronic commerce, and data privacy.
          </p>
        </section>

        {/* 4 Policy Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 not-prose">
          {policies.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className="bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${p.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold bg-white text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-700">
                  <span>Read Full Document</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </section>

        {/* Core Operational Principles */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Key Legal Principles at a Glance</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 flex items-start gap-3 text-xs sm:text-sm text-sky-950">
              <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong>1. Informational Directory & Guide Only:</strong> We are a digital portal providing tourism articles, beach information, historical facts, and commercial directory listings. We do not sell tickets, book accommodation, operate flights, or process payments.
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>2. Commercial Advertising & Referrals:</strong> Apart from publishing commercial business advertising and promoting local businesses, we have no other commercial operations. Outbound links to airlines or booking platforms may generate affiliate or advertising revenue.
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>3. Indicative Pricing & User Verification:</strong> All pricing estimates, flight times, currency conversions, and schedules are guides. Users must verify real-time availability and prices directly with the official service providers.
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 flex items-start gap-3 text-xs sm:text-sm text-purple-950">
              <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong>4. Strict Privacy & GDPR/KVKK Compliance:</strong> We never sell personal data. You retain full control over your cookie and analytics consent preferences.
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Legal Inquiries & Data Protection Contact</h2>
          <p>
            For any legal inquiries, copyright notices, GDPR/KVKK data requests, or advertising compliance verification, please contact our compliance desk:
          </p>
          <div className="p-4 bg-slate-900 text-white rounded-xl text-xs sm:text-sm space-y-1">
            <p><strong>GoToAltinkum Compliance & Legal Department</strong></p>
            <p><strong>Email:</strong> <a href="mailto:info@gotoaltinkum.com" className="text-amber-300 underline">info@gotoaltinkum.com</a></p>
            <p><strong>WhatsApp / Phone:</strong> +90 537 490 90 95 (0537 490 90 95)</p>
            <p><strong>Location:</strong> Altınkum, Didim 09270, Aydın Province, Türkiye</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
