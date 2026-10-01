'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DAY_TRIPS_DATA, DayTripItem, ALTINKUM_QUICK_FACTS } from '@/data/altinkum-data';
import { Compass, Ship, Anchor, Sparkles, Mountain, Clock, Check, ArrowUpRight, Phone, MessageSquare, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
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
    <section id="day-trips" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Ship className="w-4 h-4 text-cyan-600" />
            <span>Excursions & Sea Adventures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Unforgettable Day Trips &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-amber-500">
              Aegean Adventures
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Discover verified local tour operators, daily 5-bay boat cruises, certified scuba dive centers, and historic excursions. Reach out directly or explore verified local providers below.
          </p>
        </div>

        {/* 2x2 Grid of Top Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DAY_TRIPS_DATA.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[220px]">
                {/* Image */}
                <div className="sm:col-span-5 relative min-h-[200px] sm:min-h-full bg-slate-900">
                  <Image
                    src={item.image}
                    alt={`${item.title} in Didim Altınkum`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
                  <div className="absolute top-4 left-4 bg-slate-900/85 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-sky-600 font-semibold mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-2">
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
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Local Service Providers & Reachout Footer */}
              <div className="bg-slate-50/90 p-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Verified Local Providers:</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Click to view on map/web</span>
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
                      className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-xs text-slate-800 transition-all flex items-center justify-between group/op shadow-sm"
                    >
                      <div className="truncate pr-2">
                        <strong className="block font-semibold text-slate-900 group-hover/op:text-sky-700 truncate">
                          {operator.name}
                        </strong>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-slate-400" />
                          <span>{operator.location}</span>
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/op:text-sky-600 shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Direct Reach Out WhatsApp CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleWhatsAppReachOut(item.title, item.directInquiryQuery)}
                    className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire / Book via WhatsApp</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveModalTrip(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-lg transition-colors z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
              {activeModalTrip.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              {activeModalTrip.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>{activeModalTrip.duration}</span>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={activeModalTrip.image}
                alt={activeModalTrip.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalTrip.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100">
                <h4 className="text-xs font-bold uppercase text-sky-900 tracking-wider mb-2">
                  Key Excursion Highlights:
                </h4>
                <div className="space-y-2">
                  {activeModalTrip.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-600 tracking-wider mb-3">
                  Verified Local Service Providers:
                </h4>
                <div className="space-y-2">
                  {activeModalTrip.localOperators.map((op, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
                    >
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 block">{op.name}</strong>
                        <span className="text-xs text-slate-500">{op.location} • {op.type}</span>
                      </div>
                      <a
                        href={op.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleOperatorClick(op.name, op.website, activeModalTrip.title)}
                        className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                      >
                        <span>Visit Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  handleWhatsAppReachOut(activeModalTrip.title, activeModalTrip.directInquiryQuery);
                  setActiveModalTrip(null);
                }}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Booking Help</span>
              </button>

              <button
                onClick={() => setActiveModalTrip(null)}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-center text-sm"
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
