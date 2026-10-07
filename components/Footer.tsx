'use client';

import React from 'react';
import { Waves, Mail, MapPin, Sun, Sparkles, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-amber-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                GoTo<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-400">Altinkum</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier tourist portal and digital authority for Altınkum & Didim, Aydın, Türkiye. Guiding international travelers to Blue Flag beaches, the ancient Temple of Apollo Oracle, and authentic Aegean hospitality.
            </p>

            <div className="pt-1.5 sm:pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-start sm:items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                <span>Altınkum, Didim 09270, Aydın Province, Türkiye</span>
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
              <div className="flex items-center gap-2 text-slate-400">
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Geo: Lat 37.3620° N, Lon 27.2764° E</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Beaches & Sightseeing */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 sm:mb-4">
              Beaches & Bays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#beaches" className="hover:text-white transition-colors">Altınkum Main Beach (1. Koy)</a></li>
              <li><a href="#beaches" className="hover:text-white transition-colors">Second Beach (2. Koy)</a></li>
              <li><a href="#beaches" className="hover:text-white transition-colors">Third Beach & Watersports</a></li>
              <li><a href="#beaches" className="hover:text-white transition-colors">Cennet Koyu (Paradise Bay)</a></li>
              <li><a href="#beaches" className="hover:text-white transition-colors">Akbük Lagoon</a></li>
              <li><a href="#beaches" className="hover:text-white transition-colors">Tavşanburnu Nature Park</a></li>
            </ul>
          </div>

          {/* History & Excursions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 sm:mb-4">
              History & Day Trips
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#history" className="hover:text-white transition-colors">Temple of Apollo (Didyma)</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">Medusa Stone Relief</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">Ancient Miletus Theater</a></li>
              <li><a href="#history" className="hover:text-white transition-colors">Priene Acropolis</a></li>
              <li><a href="#day-trips" className="hover:text-white transition-colors">Daily 5-Bay Boat Trips</a></li>
              <li><a href="#hotels" className="text-amber-300 font-semibold hover:text-white transition-colors">Anda Barut & Akra Hotels</a></li>
              <li><a href="#day-trips" className="hover:text-white transition-colors">Lake Bafa & Latmos</a></li>
            </ul>
          </div>

          {/* Commercial & Advertising */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 sm:mb-4">
              Business & Partners
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#advertise" className="text-amber-300 font-bold hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Advertise With Us</span>
                </a>
              </li>
              <li><a href="mailto:info@gotoaltinkum.com" className="hover:text-white transition-colors">Partner Media Kit</a></li>
              <li><a href="#news-events" className="hover:text-white transition-colors">Didim VegFest News</a></li>
              <li><a href="#flights" className="text-sky-300 font-semibold hover:text-white transition-colors">Flights & Airlines (Skyscanner/Jet2)</a></li>
              <li><a href="#travel-guide" className="hover:text-white transition-colors">Airport Transfers (BJV/ADB)</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Traveler FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GoToAltinkum.com. All rights reserved. Made for Didim & Altınkum visitors.</p>
          
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
            <a href="#advertise" className="hover:text-slate-300">Commercial Inquiries</a>
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
