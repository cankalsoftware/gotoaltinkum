'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DAY_TRIPS_DATA, DayTripItem } from '@/data/altinkum-data';
import { Ship, Clock, Check, MessageSquare, ExternalLink, ShieldCheck, MapPin, X } from 'lucide-react';
import { trackOutboundClick, trackEvent } from '@/lib/analytics';

export default function DayTripsAndActivities() {
  const [activeModalTrip, setActiveModalTrip] = useState<DayTripItem | null>(null);

  const handleOperatorClick = (operatorName: string, url: string, tripTitle: string) => {
    trackOutboundClick('day_trip', `${operatorName} (${tripTitle})`, url);
  };

  const handleWhatsAppReachOut = (tripTitle: string, query: string) => {
    trackEvent('reachout_whatsapp_daytrip', {
      trip_title: tripTitle,
      source: 'day_trips_section'
    });
    const encoded = encodeURIComponent(`${query} (via GoToAltinkum.com)`);
    window.open(`https://wa.me/905374909095?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="day-trips" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Ship className="w-4 h-4 text-cyan-600" />
            <span>Excursions & Sea Adventures</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Unforgettable Day Trips &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-amber-500">
              Aegean Adventures
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base md:text-lg">
            Discover verified local tour operators, daily 5-bay boat cruises, certified scuba dive centers, and historic excursions. Reach out directly or explore verified local providers below.
          </p>
        </div>

        {/* 2x2 Grid of Top Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {DAY_TRIPS_DATA.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[220px]">
                {/* Image */}
                <div className="sm:col-span-5 relative min-h-[180px] xs:min-h-[200px] sm:min-h-full bg-slate-900">
                  <Image
                    src={item.image}
                    alt={`${item.title} in Didim Altınkum`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-900/85 text-white text-[10px] font-bold px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md border border-white/10">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="sm:col-span-7 p-4 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-sky-600 font-semibold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local Service Providers & Reachout Footer */}
              <div className="bg-slate-50/90 p-4 sm:p-5 border-t border-slate-100 space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Verified Providers:</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Click to view</span>
                </div>

                {/* Local Providers Link List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.localOperators.map((operator, opIdx) => (
                    <a
                      key={opIdx}
                      href={operator.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOperatorClick(operator.name, operator.website, item.title)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-xs text-slate-800 transition-all flex items-center justify-between group/op shadow-2xs"
                    >
                      <div className="truncate pr-1.5">
                        <strong className="block font-semibold text-slate-900 group-hover/op:text-sky-700 truncate text-[11px] sm:text-xs">
                          {operator.name}
                        </strong>
                        <span className="text-[10px] text-slate-500 flex items-center gap-0.5 truncate">
                          <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                          <span className="truncate">{operator.location}</span>
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/op:text-sky-600 shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Direct Reach Out WhatsApp CTA */}
                <div className="pt-1.5 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleWhatsAppReachOut(item.title, item.directInquiryQuery)}
                    className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire / Book (WhatsApp)</span>
                  </button>

                  <button
                    onClick={() => setActiveModalTrip(item)}
                    className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs text-center transition-colors"
                  >
                    <span>Full Excursion Details</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Day Trip Detail Modal */}
      {activeModalTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveModalTrip(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm sm:text-lg transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-100 text-cyan-800 text-[10px] sm:text-xs font-bold mb-2 sm:mb-3">
              {activeModalTrip.badge}
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1">
              {activeModalTrip.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4 sm:mb-6">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>{activeModalTrip.duration}</span>
            </div>

            <div className="relative h-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-slate-900 shadow-md">
              <Image
                src={activeModalTrip.image}
                alt={activeModalTrip.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>

            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              {activeModalTrip.description}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="bg-sky-50/70 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-sky-100">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-sky-900 tracking-wider mb-2">
                  Key Excursion Highlights:
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {activeModalTrip.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-slate-600 tracking-wider mb-2.5 sm:mb-3">
                  Verified Local Service Providers:
                </h4>
                <div className="space-y-2">
                  {activeModalTrip.localOperators.map((op, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <strong className="text-xs sm:text-sm text-slate-900 block truncate">{op.name}</strong>
                        <span className="text-[11px] sm:text-xs text-slate-500 truncate block">{op.location} • {op.type}</span>
                      </div>
                      <a
                        href={op.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleOperatorClick(op.name, op.website, activeModalTrip.title)}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1 shadow-2xs shrink-0"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  handleWhatsAppReachOut(activeModalTrip.title, activeModalTrip.directInquiryQuery);
                  setActiveModalTrip(null);
                }}
                className="w-full sm:w-1/2 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Help</span>
              </button>

              <button
                onClick={() => setActiveModalTrip(null)}
                className="w-full sm:w-1/2 py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-center text-xs sm:text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
