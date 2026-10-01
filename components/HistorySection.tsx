'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HISTORY_DATA } from '@/data/altinkum-data';
import { Landmark, Sparkles, CheckCircle, Clock, MapPin, BookOpen } from 'lucide-react';

export default function HistorySection() {
  const [selectedSiteId, setSelectedSiteId] = useState(HISTORY_DATA[0].id);
  const activeSite = HISTORY_DATA.find((s) => s.id === selectedSiteId) || HISTORY_DATA[0];

  return (
    <section id="history" className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-4 h-4 text-amber-400" />
            <span>2,500 Years of Oracle Heritage</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white">
            Where Ancient Gods Walked: The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              Oracle of Didyma
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-base md:text-lg">
            Discover the monumental Temple of Apollo, the legendary Medusa head, and neighboring Miletus—the intellectual cradle of Western philosophy and mathematics.
          </p>
        </div>

        {/* Site Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          {HISTORY_DATA.map((site) => (
            <button
              key={site.id}
              onClick={() => setSelectedSiteId(site.id)}
              className={`px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                selectedSiteId === site.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 scale-105 border border-amber-400/50'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
              }`}
            >
              <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{site.name}</span>
            </button>
          ))}
        </div>

        {/* Active Site Spotlight */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[240px] xs:min-h-[280px] sm:min-h-[350px] lg:min-h-[500px]">
              <Image
                src={activeSite.image}
                alt={activeSite.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="inline-block bg-amber-500 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider mb-1.5 sm:mb-2 shadow">
                  {activeSite.era}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                  <span>Distance: {activeSite.distanceFromAltinkum}</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-4 sm:p-7 lg:p-10 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3">
                  {activeSite.name}
                </h3>
                <p className="text-amber-200 font-semibold text-xs sm:text-base mb-4 sm:mb-6 leading-snug">
                  {activeSite.summary}
                </p>

                <div className="space-y-3 sm:space-y-4 text-slate-300 text-xs sm:text-base leading-relaxed">
                  <p>{activeSite.deepDive}</p>
                </div>
              </div>

              {/* Special Highlight Box */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-100 flex items-start gap-2.5 sm:gap-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                    Archaeological Highlight
                  </strong>
                  <p className="text-xs sm:text-sm">{activeSite.highlightFact}</p>
                </div>
              </div>

              {/* Visiting Tips */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>Insider Travel Tips:</span>
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {activeSite.visitingTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Dolmuş CTA */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                  <span>Open Daily 08:30 – 19:00</span>
                </span>
                <span className="text-amber-300 font-semibold">Dolmuş: "Didim Merkez - Apollon Mabedi"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
