import React from 'react';
import Link from 'next/link';
import { Waves, Mail, MapPin, Sun, Sparkles, Phone, ShieldCheck, Lock, FileText, Cookie, Scale } from 'lucide-react';
import { openCookiePreferencesModal } from '@/components/CookieConsentBanner';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-amber-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                GoTo<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400">Altinkum</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              The premier tourist portal and digital authority for Altınkum & Didim, Aydın, Türkiye. Guiding international travelers to Blue Flag beaches, ancient Didyma, and authentic Aegean hospitality.
            </p>

            <div className="pt-1.5 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Altınkum, Didim 09270, Aydın, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/905374909095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white font-semibold truncate"
                >
                  WhatsApp: 0537 490 90 95
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@gotoaltinkum.com" className="text-amber-300 hover:text-white font-semibold truncate">
                  info@gotoaltinkum.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Beaches & Bays */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 sm:mb-4">
              Beaches & Bays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Altınkum Main Beach (1. Koy)</Link></li>
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Second Beach (2. Koy)</Link></li>
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Third Beach & Watersports</Link></li>
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Cennet Koyu (Paradise Bay)</Link></li>
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Akbük Lagoon</Link></li>
              <li><Link href="/#beaches" className="hover:text-white transition-colors">Tavşanburnu Nature Park</Link></li>
            </ul>
          </div>

          {/* History & Excursions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 sm:mb-4">
              History & Travel
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link href="/#history" className="hover:text-white transition-colors">Temple of Apollo (Didyma)</Link></li>
              <li><Link href="/#history" className="hover:text-white transition-colors">Medusa Stone Relief</Link></li>
              <li><Link href="/#history" className="hover:text-white transition-colors">Ancient Miletus Theater</Link></li>
              <li><Link href="/#flights" className="text-sky-300 font-semibold hover:text-white transition-colors">Flights & Airlines Guide</Link></li>
              <li><Link href="/#day-trips" className="hover:text-white transition-colors">Daily 5-Bay Boat Trips</Link></li>
              <li><Link href="/#travel-guide" className="hover:text-white transition-colors">Airport Transfers (BJV/ADB)</Link></li>
            </ul>
          </div>

          {/* Commercial & Advertising */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 sm:mb-4">
              Business & Directory
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/#advertise" className="text-amber-300 font-bold hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Advertise With Us</span>
                </Link>
              </li>
              <li><a href="mailto:info@gotoaltinkum.com" className="hover:text-white transition-colors">Partner Media Kit</a></li>
              <li><Link href="/#news-events" className="hover:text-white transition-colors">Didim VegFest News</Link></li>
              <li><Link href="/#hotels" className="hover:text-white transition-colors">Hotels & Resorts</Link></li>
              <li><Link href="/#dining" className="hover:text-white transition-colors">Aegean Dining Guide</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Traveler FAQ</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance (Mandatory Disclosures) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 sm:mb-4 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              <span>Legal & Policies</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5"><Lock className="w-3 h-3 text-sky-400" /><span>Privacy Policy</span></Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1.5"><FileText className="w-3 h-3 text-amber-400" /><span>Terms of Service</span></Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors flex items-center gap-1.5"><Cookie className="w-3 h-3 text-emerald-400" /><span>Cookie Policy</span></Link></li>
              <li><Link href="/acceptable-use" className="hover:text-white transition-colors flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-purple-400" /><span>Acceptable Use</span></Link></li>
              <li><Link href="/legal" className="text-cyan-300 hover:text-white font-semibold transition-colors">Legal Center Hub ➔</Link></li>
              <li className="pt-1.5">
                <button
                  onClick={openCookiePreferencesModal}
                  className="text-amber-300 hover:text-amber-200 text-xs font-bold underline decoration-amber-400/50 underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  <span>Cookie Preferences ⚙️</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Directory & Referral Legal Disclaimer Banner */}
        <div className="py-4 my-4 bg-slate-900/60 rounded-xl px-4 border border-slate-800 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Directory & Referral Disclaimer:</strong> GoToAltinkum.com is an independent tourism directory, information guide, and commercial advertising medium. <strong>We do not sell tickets, operate tours, book accommodations, or handle payments for travel services.</strong> Apart from advertising and promoting local businesses, we have no other business operations. Outbound links may contain referral or affiliate partnerships. All prices, schedules, and live telemetry are guide estimates only — verify directly with official providers.
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GoToAltinkum.com. All rights reserved. Last updated: October 7, 2026.</p>
          
          {/* Web Developer Backlink */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white/5 px-3 sm:px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
            <span>Web Development by</span>
            <a
              href="https://www.cankalsoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white font-bold transition-colors underline decoration-amber-400/50 underline-offset-2"
            >
              Cankal Software
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-slate-500">
            <Link href="/legal" className="hover:text-slate-300">Compliance Desk</Link>
            <span>•</span>
            <a href="mailto:info@gotoaltinkum.com" className="hover:text-slate-300">info@gotoaltinkum.com</a>
            <span>•</span>
            <span>Didim, Aydın, Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

