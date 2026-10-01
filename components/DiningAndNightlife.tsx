'use client';

import React from 'react';
import Image from 'next/image';
import { DINING_HIGHLIGHTS } from '@/data/altinkum-data';
import { UtensilsCrossed, Wine, Sparkles, Flame, Check, MapPin, Moon } from 'lucide-react';

export default function DiningAndNightlife() {
  return (
    <section id="dining" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-4 h-4 text-rose-600" />
            <span>Aegean Gastronomy & Sunset Nightlife</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Seafood Taverns, Mezes &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600">
              Beachfront Vibe
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Savor the flavors of the Mediterranean: fresh catch of the day, organic cold-pressed Memecik olive oil dishes, and sunset cocktails right on the waves of Yalı Caddesi.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[450px]">
              <Image
                src="/images/aegean-dining.jpg"
                alt="Aegean dining table on Altınkum beach promenade with grilled fish and mezes at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Yalı Caddesi Beachfront
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 drop-shadow">
                  Candlelit Dining with Your Toes in the Sand
                </h3>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>The Aegean Gastronomy Experience</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
                  Didim's Renowned Olive Oil & Seafood Legacy
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Didim is situated in the heart of Turkey's ancient olive oil production belt. Local chefs prepare traditional cold mezes seasoned with extra virgin Memecik olive oil, sea samphire (<em>Deniz Börülcesi</em>), wild mountain greens (<em>Şevketi Bostan</em>), and freshly grilled sea bass caught that morning by local fishermen.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-xs text-amber-300 font-bold block mb-1">Must-Try Meze:</span>
                    <p className="text-xs text-slate-200">Girit Ezmesi (walnut feta spread), Fava, and Grilled Calamari.</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-xs text-cyan-300 font-bold block mb-1">Sunset Drink:</span>
                    <p className="text-xs text-slate-200">Traditional Turkish Raki or chilled Aegean rosé wine.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-6 h-6 text-amber-300" />
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Nightlife Hub</span>
                    <strong className="text-sm text-white">Yalı Caddesi Bars, Medusa Club, D-Marin Lounge</strong>
                  </div>
                </div>
                <span className="text-xs text-amber-300 font-semibold bg-amber-500/20 px-2.5 py-1 rounded-full">
                  Lively until 03:00 AM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dining Curated Spots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DINING_HIGHLIGHTS.map((spot) => (
            <div
              key={spot.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                    {spot.type}
                  </span>
                  <span className="text-xs font-black text-amber-600">
                    {spot.priceLevel}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  {spot.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{spot.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {spot.description}
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-0.5">Chef's Recommendation:</span>
                <span className="text-slate-600">{spot.recommendedDish}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
