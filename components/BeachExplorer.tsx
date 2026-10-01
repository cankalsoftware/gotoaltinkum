'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BEACHES_DATA, BeachItem } from '@/data/altinkum-data';
import { Waves, Shield, Check, MapPin, ExternalLink, Sparkles, Sun, Info, Camera, Eye } from 'lucide-react';

export default function BeachExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Family' | 'Chill' | 'Nature' | 'Watersports'>('All');
  const [activeBeachModal, setActiveBeachModal] = useState<BeachItem | null>(null);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState<number>(0);
  const [cardSelectedImageIdx, setCardSelectedImageIdx] = useState<Record<string, number>>({});

  const filteredBeaches = BEACHES_DATA.filter((beach) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Family') return beach.id.includes('main-beach') || beach.id.includes('akbuk');
    if (selectedCategory === 'Chill') return beach.id.includes('second-beach') || beach.id.includes('akbuk');
    if (selectedCategory === 'Nature') return beach.id.includes('cennet') || beach.id.includes('tavsanburnu');
    if (selectedCategory === 'Watersports') return beach.id.includes('third-beach') || beach.id.includes('main-beach');
    return true;
  });

  const handleOpenModal = (beach: BeachItem) => {
    setActiveBeachModal(beach);
    setActiveModalImageIdx(cardSelectedImageIdx[beach.id] || 0);
  };

  return (
    <section id="beaches" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Waves className="w-4 h-4 text-amber-600" />
            <span>Aegean Coastline & Bays</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The World-Renowned <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-sky-600">Golden Beaches</span> of Altınkum
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore crystal turquoise waters, golden sand crescents, and lush green pine coves. Linked directly with live Google Maps photos and satellite directions.
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
          {filteredBeaches.map((beach) => {
            const currentImgIdx = cardSelectedImageIdx[beach.id] || 0;
            const currentImage = beach.galleryImages?.[currentImgIdx] || beach.image;

            return (
              <article
                key={beach.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={currentImage}
                    alt={`${beach.name} scenic blue sea and green nature view in Altınkum Didim`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    {beach.blueFlag ? (
                      <div className="bg-sky-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-md">
                        <Shield className="w-3.5 h-3.5 text-white" />
                        <span>Blue Flag Certified</span>
                      </div>
                    ) : (
                      <div />
                    )}

                    <span className="bg-emerald-700/80 text-emerald-100 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border border-emerald-500/30 flex items-center gap-1">
                      <span>🌊 Nature View</span>
                    </span>
                  </div>

                  {/* Photo Switcher Dots / Thumbnails on Card */}
                  {beach.galleryImages && beach.galleryImages.length > 1 && (
                    <div className="absolute bottom-16 right-4 flex items-center gap-1.5 z-10 bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded-full">
                      {beach.galleryImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          aria-label={`View angle ${idx + 1}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardSelectedImageIdx((prev) => ({ ...prev, [beach.id]: idx }));
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentImgIdx === idx
                              ? 'bg-amber-400 w-5'
                              : 'bg-white/60 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Turkish name and title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-amber-300 font-semibold tracking-wide uppercase drop-shadow flex items-center gap-1.5">
                      <span>{beach.turkishName}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-emerald-300">{beach.colorTheme}</span>
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
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleOpenModal(beach)}
                        className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 py-1"
                      >
                        <Info className="w-4 h-4" />
                        <span>Visitor Guide & Gallery</span>
                      </button>

                      <a
                        href={beach.googleMapsPhotosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-2.5 py-1.5 rounded-lg border border-amber-200 transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5 text-amber-600" />
                        <span>Google Maps Photos</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    </div>

                    <a
                      href={beach.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold bg-slate-900 hover:bg-sky-600 text-white px-3 py-2.5 rounded-xl transition-colors shadow-sm mt-1"
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Get Directions in Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Beach Detail Modal */}
      {activeBeachModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveBeachModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg transition-colors z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                <Shield className="w-3.5 h-3.5 text-sky-600" />
                <span>Blue Flag Beach Guide</span>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <span>🌊 {activeBeachModal.colorTheme}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
              {activeBeachModal.name}
            </h3>
            <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-4">
              {activeBeachModal.turkishName}
            </p>

            {/* Main Modal Image */}
            <div className="relative h-72 rounded-2xl overflow-hidden mb-3 bg-slate-900 shadow-md">
              <Image
                src={activeBeachModal.galleryImages?.[activeModalImageIdx] || activeBeachModal.image}
                alt={`${activeBeachModal.name} view in Didim`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10">
                🌿 Pure Blue & Green Aegean Nature • Photo {activeModalImageIdx + 1} of {activeBeachModal.galleryImages?.length || 1}
              </div>
            </div>

            {/* Modal Thumbnail Gallery Switcher */}
            {activeBeachModal.galleryImages && activeBeachModal.galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                {activeBeachModal.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModalImageIdx(idx)}
                    className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeModalImageIdx === idx
                        ? 'border-sky-500 ring-2 ring-sky-300 scale-[1.02]'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Angle ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </button>
                ))}
              </div>
            )}

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {activeBeachModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                    Sand Texture:
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                    {activeBeachModal.sandType}
                  </p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                    Water Conditions:
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                    {activeBeachModal.waterDepth}
                  </p>
                </div>
              </div>

              <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100">
                <h4 className="text-xs font-bold uppercase text-sky-800 tracking-wider mb-1">
                  Ideal For:
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
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright & Direct Web Links notice */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-amber-900 mb-6 flex items-start gap-2.5">
              <Camera className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Google Maps Live Photo Stream:</strong>
                <span>
                  Explore hundreds of authentic tourist captures, underwater footage, and 360° panoramas directly via Google Maps place links below.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <a
                href={activeBeachModal.googleMapsPhotosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Camera className="w-4 h-4" />
                <span>View Google Maps Photos</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <a
                href={activeBeachModal.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

