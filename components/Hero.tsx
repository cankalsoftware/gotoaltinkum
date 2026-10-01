'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin, Sparkles, Compass, Sun, ShieldCheck, Waves, ArrowRight, Anchor, Landmark, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onSearch?: (term: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const quickChips = [
    { label: '🏖️ Altınkum Main Beach', target: '#beaches' },
    { label: '🏛️ Temple of Apollo (Didyma)', target: '#history' },
    { label: '⛵ Daily Boat Tours', target: '#day-trips' },
    { label: '🦐 Sunset Seafood Promenade', target: '#dining' },
    { label: '🌱 Didim VegFest', target: '#news-events' },
    { label: '✈️ Airport Transfers', target: '#travel-guide' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const el = document.getElementById(searchTerm.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // scroll to beaches as default search action
        document.getElementById('beaches')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/altinkum-main-beach.jpg"
          alt="Altınkum Beach and turquoise Aegean Sea in Didim Turkey"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-10000 hover:scale-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-sky-950/40" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-900/30 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg animate-bounce-subtle">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>The Official Travel & Tourism Portal for Didim & Altınkum</span>
          <span className="bg-amber-400 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">2026 Guide</span>
        </div>

        {/* Main H1 Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] drop-shadow-md">
          Where Ancient Legends Walk &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300">
            Golden Sands
          </span>{' '}
          Kiss The Aegean
        </h1>

        {/* Subtitle with deep context */}
        <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow">
          Explore world-renowned <strong className="text-amber-300 font-semibold">Altınkum Blue Flag beaches</strong>, the colossal <strong className="text-cyan-300 font-semibold">Temple of Apollo Oracle</strong> in Didyma, vibrant Aegean seafood taverns, and local news from Aydın, Türkiye.
        </p>

        {/* Interactive Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40"
          >
            <div className="flex items-center gap-2 px-3 py-2 w-full text-slate-800">
              <Search className="w-5 h-5 text-sky-600 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search beaches, Apollo temple, boat trips, hotels..."
                className="w-full bg-transparent focus:outline-none text-sm sm:text-base placeholder-slate-400 font-medium text-slate-900"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 hover:from-sky-700 hover:to-cyan-800 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Search Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-slate-300 font-medium mr-1">Popular:</span>
            {quickChips.map((chip) => (
              <a
                key={chip.label}
                href={chip.target}
                className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all hover:scale-105"
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>

        {/* Key Feature Stats Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Waves className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Beaches</span>
            </div>
            <div className="text-2xl font-black text-white">11+ Blue Flags</div>
            <p className="text-xs text-slate-300 mt-0.5">Ultra-fine golden sands & shallow sea</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-2 text-cyan-300 mb-1">
              <Landmark className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Oracle Heritage</span>
            </div>
            <div className="text-2xl font-black text-white">2,500+ Yrs</div>
            <p className="text-xs text-slate-300 mt-0.5">Temple of Apollo & Medusa Relief</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-2 text-emerald-300 mb-1">
              <Sun className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Sunshine</span>
            </div>
            <div className="text-2xl font-black text-white">300+ Days</div>
            <p className="text-xs text-slate-300 mt-0.5">Therapeutic Aegean microclimate</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-2 text-rose-300 mb-1">
              <Anchor className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">D-Marin Marina</span>
            </div>
            <div className="text-2xl font-black text-white">580 Berths</div>
            <p className="text-xs text-slate-300 mt-0.5">World-class luxury yacht harbor</p>
          </div>
        </div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-16 text-slate-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
