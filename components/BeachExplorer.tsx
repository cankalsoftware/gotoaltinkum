'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BEACHES_DATA, BeachItem } from '@/data/altinkum-data';
import { Waves, Shield, Check, MapPin, ExternalLink, Sparkles, Sun, Info } from 'lucide-react';

export default function BeachExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Family' | 'Chill' | 'Nature' | 'Watersports'>('All');
  const [activeBeachModal, setActiveBeachModal] = useState<BeachItem | null>(null);

  const filteredBeaches = BEACHES_DATA.filter((beach) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Family') return beach.id.includes('main-beach') || beach.id.includes('akbuk');
    if (selectedCategory === 'Chill') return beach.id.includes('second-beach') || beach.id.includes('akbuk');
    if (selectedCategory === 'Nature') return beach.id.includes('cennet') || beach.id.includes('tavsanburnu');
    if (selectedCategory === 'Watersports') return beach.id.includes('third-beach') || beach.id.includes('main-beach');
    return true;
  });

  return (
    <section id="beaches" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Waves className="w-4 h-4 text-amber-600" />
            <span>Aegean Coastline Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The World-Renowned <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600">Golden Beaches</span> of Altınkum
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From the bustling shallow turquoise waters of the 1st Bay to hidden pine-framed coves and tranquil Akbük lagoons.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'All', label: '🏖️ All Beaches (6)' },
              { key: 'Family', label: '👨‍👩‍👧 Best for Families & Kids' },
              { key: 'Chill', label: '🍹 Chill & Beach Clubs' },
              { key: 'Nature', label: '🌲 Pine Bays & Secluded' },
              { key: 'Watersports', label: '🏄 Diving & Water Sports' },
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => setSelectedCategory(btn.key as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === btn.key
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Beaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBeaches.map((beach) => (
            <article
              key={beach.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={beach.image}
                  alt={`${beach.name} in Altınkum Didim Turkey`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Blue Flag Badge */}
                {beach.blueFlag && (
                  <div className="absolute top-4 left-4 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-md">
                    <Shield className="w-3.5 h-3.5 text-white" />
                    <span>Blue Flag Certified</span>
                  </div>
                )}

                {/* Turkish name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-amber-300 font-semibold tracking-wide uppercase drop-shadow">
                    {beach.turkishName}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
                    {beach.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {beach.description}
                </p>

                {/* Key specs */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-sky-50/70 p-3 rounded-2xl border border-sky-100">
                  <div>
                    <span className="text-slate-400 font-medium block">Sand Quality</span>
                    <strong className="text-slate-800">{beach.sandType}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Water Depth</span>
                    <strong className="text-slate-800">{beach.waterDepth}</strong>
                  </div>
                </div>

                {/* Facilities Badges */}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Highlights & Amenities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {beach.facilities.slice(0, 4).map((facility, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{facility}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveBeachModal(beach)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Visitor Guide</span>
                  </button>

                  <a
                    href={beach.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-slate-900 hover:bg-sky-600 text-white px-3 py-2 rounded-xl transition-colors shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Beach Detail Modal */}
      {activeBeachModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveBeachModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg transition-colors"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-3">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              <span>Blue Flag Beach Guide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
              {activeBeachModal.name}
            </h3>
            <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-4">
              {activeBeachModal.turkishName}
            </p>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={activeBeachModal.image}
                alt={activeBeachModal.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {activeBeachModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                  Best For:
                </h4>
                <p className="text-sm font-semibold text-slate-800">
                  {activeBeachModal.bestFor}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">
                  All Available Facilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBeachModal.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-sky-50/50 p-2 rounded-xl">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <a
                href={activeBeachModal.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              <button
                onClick={() => setActiveBeachModal(null)}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-center text-sm"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
