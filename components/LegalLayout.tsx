'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Cookie, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowLeft, 
  Settings2,
  Calendar,
  Building2,
  Scale
} from 'lucide-react';
import { openCookiePreferencesModal } from '@/components/CookieConsentBanner';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  currentSlug: 'privacy' | 'terms' | 'cookies' | 'acceptable-use' | 'legal';
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  currentSlug,
  children,
}: LegalLayoutProps) {
  const LAST_UPDATED_DATE = 'October 7, 2026';

  const legalNav = [
    { label: 'Privacy Policy', href: '/privacy', slug: 'privacy', icon: Lock },
    { label: 'Terms of Service', href: '/terms', slug: 'terms', icon: FileText },
    { label: 'Cookie Policy', href: '/cookies', slug: 'cookies', icon: Cookie },
    { label: 'Acceptable Use', href: '/acceptable-use', slug: 'acceptable-use', icon: ShieldCheck },
    { label: 'Legal Center Overview', href: '/legal', slug: 'legal', icon: Scale },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-12 sm:py-16 border-b border-sky-900/60 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Back Link */}
            <div className="mb-4">
              <Link 
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white transition-colors bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/15"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to GoToAltinkum Home</span>
              </Link>
            </div>

            {/* Date & Compliance Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: {LAST_UPDATED_DATE}</span>
              </span>
              <span className="text-[11px] font-semibold bg-sky-500/20 text-sky-200 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                International Law & Regulatory Compliance
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight">
              {title}
            </h1>
            <p className="mt-3 text-slate-300 text-xs sm:text-base max-w-3xl leading-relaxed">
              {subtitle}
            </p>

            {/* Core Legal Transparency Card */}
            <div className="mt-6 bg-slate-900/80 border border-amber-500/30 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-200 backdrop-blur-md shadow-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed">
                  <strong className="text-amber-300 font-bold block text-sm">
                    Important Notice: Informational Directory & Referral Disclaimer
                  </strong>
                  <p>
                    <strong>GoToAltinkum.com</strong> is strictly an independent informational travel guide and local advertising directory. <strong>We do not sell airline tickets, boat trips, day tours, transportation, or accommodation directly.</strong> We do not take bookings or process customer payments. We refer visitors to third-party providers and may receive referral or advertising fees. All prices and schedules are guide estimates only — users must contact or visit the official service providers directly for live rates and bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation Tabs for Legal Documents */}
            <div className="mt-8 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2">
              {legalNav.map((item) => {
                const Icon = item.icon;
                const isActive = item.slug === currentSlug;
                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-sky-400 shadow-md ring-2 ring-sky-400/30'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-700'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Document Content Body */}
        <section className="py-10 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-xl space-y-8 prose prose-slate max-w-none">
              {children}

              {/* Interactive Cookie Preferences Button */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-amber-500" />
                    <span>Manage Your Cookie & Privacy Settings</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    You can change your consent preferences for analytics and marketing tracking anytime.
                  </p>
                </div>
                <button
                  onClick={openCookiePreferencesModal}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-98 transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Cookie Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
