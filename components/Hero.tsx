'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Sparkles, Sun, Waves, ArrowRight, Anchor, Landmark } from 'lucide-react';

interface HeroProps {
  onSearch?: (term: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const quickChips = [
    { label: '🏖️ Main Beach', target: '#beaches' },
    { label: '🏛️ Temple of Apollo', target: '#history' },
    { label: '⛵ Boat Tours', target: '#day-trips' },
    { label: '🦐 Seafood Prom', target: '#dining' },
    { label: '🌱 VegFest', target: '#news-events' },
    { label: '✈️ Transfers', target: '#travel-guide' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const el = document.getElementById(searchTerm.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        document.getElementById('beaches')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-sky-950/40" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-900/30 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-[11px] sm:text-sm font-semibold mb-5 sm:mb-6 shadow-lg max-w-full">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span>Official Travel & Tourism Portal for Didim</span>
          <span className="bg-amber-400 text-slate-950 text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-black uppercase">2026 Guide</span>
        </div>

        {/* Main H1 Heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.12] sm:leading-[1.1] drop-shadow-md break-words">
          Where Ancient Legends Walk &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300">
            Golden Sands
          </span>{' '}
          Kiss The Aegean
        </h1>

        {/* Subtitle with deep context */}
        <p className="mt-4 sm:mt-6 text-xs xs:text-sm sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow px-1">
          Explore world-renowned <strong className="text-amber-300 font-semibold">Altınkum Blue Flag beaches</strong>, the colossal <strong className="text-cyan-300 font-semibold">Temple of Apollo Oracle</strong> in Didyma, vibrant Aegean seafood taverns, and local news from Aydın, Türkiye.
        </p>

        {/* Interactive Search Bar */}
        <div className="mt-6 sm:mt-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 sm:p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40"
          >
            <div className="flex items-center gap-2 px-3 py-2 w-full text-slate-800">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search beaches, Apollo temple, boat trips..."
                className="w-full bg-transparent focus:outline-none text-xs sm:text-base placeholder-slate-400 font-medium text-slate-900"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 hover:from-sky-700 hover:to-cyan-800 active:scale-98 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </form>

          {/* Quick Search Chips */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-xs text-slate-300 font-medium mr-0.5">Popular:</span>
            {quickChips.map((chip) => (
              <a
                key={chip.label}
                href={chip.target}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm border border-white/20 text-white transition-all hover:scale-105"
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>

        {/* Key Feature Stats Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-amber-300 mb-1">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Beaches</span>
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">11+ Blue Flags</div>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 line-clamp-2">Ultra-fine golden sands & shallow sea</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-cyan-300 mb-1">
              <Landmark className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Oracle</span>
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">2,500+ Yrs</div>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 line-clamp-2">Temple of Apollo & Medusa Relief</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-emerald-300 mb-1">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Sunshine</span>
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">300+ Days</div>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 line-clamp-2">Therapeutic Aegean microclimate</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left transition-all hover:bg-white/15">
            <div className="flex items-center gap-1.5 text-rose-300 mb-1">
              <Anchor className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Marina</span>
            </div>
            <div className="text-lg xs:text-xl sm:text-2xl font-black text-white">580 Berths</div>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 line-clamp-2">World-class luxury yacht harbor</p>
          </div>
        </div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 text-slate-50"
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
