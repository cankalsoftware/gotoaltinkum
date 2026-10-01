'use client';

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Bus, 
  ShoppingBag, 
  Ship, 
  Compass, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink, 
  AlertCircle,
  Calendar,
  Wallet,
  Wifi,
  Zap,
  Droplets,
  Heart,
  ChevronRight,
  Info
} from 'lucide-react';
import { 
  EMERGENCY_SERVICES, 
  DOLMUS_ROUTES, 
  WEEKLY_BAZAARS, 
  FERRY_CONNECTIONS, 
  CURATED_ITINERARIES, 
  PRACTICAL_TRAVEL_TIPS 
} from '@/data/altinkum-data';
import { trackOutboundClick } from '@/lib/analytics';

export default function VisitorEssentialsHub() {
  const [activeTab, setActiveTab] = useState<'itineraries' | 'emergency' | 'dolmus' | 'bazaars' | 'ferry' | 'tips'>('itineraries');
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>('3-day-explorer');

  const selectedItinerary = CURATED_ITINERARIES.find(it => it.id === selectedItineraryId) || CURATED_ITINERARIES[1];

  const tabs = [
    { id: 'itineraries', label: 'Curated Itineraries', icon: Compass, badge: '1, 3 & 7 Days' },
    { id: 'emergency', label: 'Emergency & Medical', icon: ShieldAlert, badge: '24/7 Hotlines' },
    { id: 'dolmus', label: 'Dolmuş Minibuses', icon: Bus, badge: 'Routes & Fares' },
    { id: 'bazaars', label: 'Weekly Bazaars', icon: ShoppingBag, badge: 'Markets' },
    { id: 'ferry', label: 'Greek Island Ferries', icon: Ship, badge: 'Kos & Samos' },
    { id: 'tips', label: 'Traveler Toolkit', icon: Info, badge: 'Money & SIMs' },
  ] as const;

  return (
    <section id="visitor-hub" className="py-16 bg-gradient-to-b from-slate-50 via-white to-sky-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Official Altınkum & Didim Visitor Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need To Know Before & During Your Trip
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Essential emergency contacts, local dolmuş bus networks, weekly farmer markets, Greek island ferries, curated itineraries, and practical local advice.
          </p>
        </div>

        {/* Tab Navigation Navigation Bar - 100% Visible Grid on All Screen Sizes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 max-w-6xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center text-center p-3 sm:py-3.5 sm:px-2 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-sky-600 via-sky-700 to-cyan-700 text-white shadow-lg shadow-sky-700/30 border-sky-400 ring-2 ring-sky-400/40 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border-slate-200 shadow-xs hover:border-sky-300'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-sky-600'}`} />
                  <span className="text-xs sm:text-sm font-bold tracking-tight">{tab.label}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="mt-8">
          
          {/* 1. CURATED ITINERARIES */}
          {activeTab === 'itineraries' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Itinerary Selector Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CURATED_ITINERARIES.map((it) => {
                  const isSelected = it.id === selectedItinerary.id;
                  return (
                    <button
                      key={it.id}
                      onClick={() => setSelectedItineraryId(it.id)}
                      className={`text-left p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-sky-950 text-white border-sky-500 shadow-xl ring-2 ring-sky-400/40'
                          : 'bg-white text-slate-900 border-slate-200 hover:border-sky-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-amber-400 text-slate-950' : 'bg-sky-100 text-sky-800'
                        }`}>
                          {it.badge}
                        </span>
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                          {it.duration}
                        </span>
                      </div>
                      <h3 className="font-bold text-base leading-snug">{it.title}</h3>
                      <p className={`text-xs mt-2 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                        {it.summary}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Itinerary Breakdown */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                        Ideal for: {selectedItinerary.targetAudience}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                        {selectedItinerary.title}
                      </h3>
                    </div>
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                      Full Day-by-Day Guide
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{selectedItinerary.summary}</p>
                </div>

                <div className="space-y-6">
                  {selectedItinerary.days.map((day) => (
                    <div key={day.dayNumber} className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-7 h-7 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                          {day.dayNumber}
                        </span>
                        <h4 className="font-bold text-slate-900 text-base">{day.theme}</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                          <span className="font-bold text-sky-700 flex items-center gap-1 mb-1">
                            <span>🌅 Morning</span>
                          </span>
                          <p className="text-slate-600 leading-relaxed">{day.morning}</p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                          <span className="font-bold text-amber-700 flex items-center gap-1 mb-1">
                            <span>☀️ Afternoon</span>
                          </span>
                          <p className="text-slate-600 leading-relaxed">{day.afternoon}</p>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                          <span className="font-bold text-indigo-700 flex items-center gap-1 mb-1">
                            <span>🌙 Evening</span>
                          </span>
                          <p className="text-slate-600 leading-relaxed">{day.evening}</p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/80 px-3 py-2 rounded-lg border border-amber-200/50">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong>Local Pro Tip:</strong> {day.proTip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. EMERGENCY SERVICES */}
          {activeTab === 'emergency' && (
            <div className="animate-fadeIn space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center gap-3 text-rose-900 text-xs sm:text-sm mb-4">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>
                  <strong>National Emergency Hotline:</strong> Dial <strong className="underline font-bold text-base">112</strong> from any mobile phone for free English-speaking unified emergency dispatch (Ambulance, Police, Gendarmerie, Fire).
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {EMERGENCY_SERVICES.map((srv, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          srv.category === 'Hospital' ? 'bg-red-100 text-red-800' :
                          srv.category === 'Police' ? 'bg-blue-100 text-blue-800' :
                          srv.category === 'Rescue' ? 'bg-amber-100 text-amber-800' :
                          'bg-emerald-100 text-emerald-800'
                        }`}>
                          {srv.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{srv.hours}</span>
                        </span>
                      </div>
                      
                      <h3 className="font-black text-slate-900 text-base">{srv.name}</h3>
                      <p className="text-xs text-slate-500 font-medium">{srv.turkishName}</p>
                      
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1 truncate max-w-[60%]">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{srv.address}</span>
                      </span>
                      <a
                        href={`tel:${srv.phone.replace(/[^0-9+]/g, '')}`}
                        onClick={() => trackOutboundClick('emergency_call', srv.name, `tel:${srv.phone}`)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
                      >
                        <Phone className="w-3 h-3 text-amber-300" />
                        <span>{srv.phone.split('/')[0].trim()}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. DOLMUŞ MINIBUS ROUTES */}
          {activeTab === 'dolmus' && (
            <div className="animate-fadeIn space-y-4">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 flex items-center gap-3 text-sky-900 text-xs sm:text-sm">
                <Info className="w-5 h-5 text-sky-600 shrink-0" />
                <span>
                  <strong>How to use Dolmuş in Didim:</strong> Wave your hand to stop any minibus along the route. Pay the driver in cash upon boarding. Minibuses depart frequently and connect every beach and ancient ruin.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOLMUS_ROUTES.map((route, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-sky-600 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-xs">
                        {route.routeNumber}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {route.priceEstimate}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5 flex-wrap">
                      <span>{route.from}</span>
                      <span className="text-sky-500 font-bold">➔</span>
                      <span>{route.to}</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Frequency</span>
                        <strong className="text-slate-800">{route.frequency}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Operating Hours</span>
                        <strong className="text-slate-800">{route.operatingHours}</strong>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Key Route Stops:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {route.keyStops.map((stop, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60 font-medium">
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. WEEKLY BAZAARS */}
          {activeTab === 'bazaars' && (
            <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-5">
              {WEEKLY_BAZAARS.map((bazaar, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                        {bazaar.day}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{bazaar.timing}</span>
                      </span>
                    </div>

                    <h3 className="font-black text-slate-900 text-lg mt-1">{bazaar.name}</h3>
                    <p className="text-xs text-sky-700 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{bazaar.location}</span>
                    </p>

                    <div className="mt-3 p-3 bg-amber-50/60 rounded-xl border border-amber-200/50 text-xs text-amber-950 font-medium">
                      <strong>Best For:</strong> {bazaar.bestFor}
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      {bazaar.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-xl">
                    💡 <strong>Tip:</strong> {bazaar.tips}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 5. GREEK ISLAND FERRIES */}
          {activeTab === 'ferry' && (
            <div className="animate-fadeIn space-y-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 flex items-center gap-3 text-cyan-950 text-xs sm:text-sm">
                <Ship className="w-5 h-5 text-cyan-700 shrink-0" />
                <span>
                  <strong>Greek Island Day Trips:</strong> Didim is located directly across from the Greek Dodecanese islands. Fast passenger catamarans operate throughout summer from D-Marin Didim International Port.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FERRY_CONNECTIONS.map((ferry, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-cyan-100 text-cyan-900 font-bold text-xs px-2.5 py-0.5 rounded-full uppercase">
                          {ferry.country}
                        </span>
                        <span className="text-xs font-bold text-slate-600 font-mono">
                          ⏱ {ferry.duration}
                        </span>
                      </div>

                      <h3 className="font-black text-slate-900 text-xl">{ferry.destination}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Departure: <strong>{ferry.departurePort}</strong>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                        {ferry.highlight}
                      </p>

                      <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span><strong>Schedule:</strong> {ferry.frequency}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Visa/Passport:</strong> {ferry.visaRequirements}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Operator: {ferry.operator}</span>
                      <a
                        href="https://wa.me/905374909095?text=Hello%20GoToAltinkum,%20I%20would%20like%20information%20about%20Greek%20Island%20ferries%20from%20Didim."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackOutboundClick('ferry_inquiry', ferry.destination, 'https://wa.me/905374909095')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <Phone className="w-3 h-3 text-emerald-200" />
                        <span>Inquire Ferry Tickets</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. PRACTICAL TRAVELER TIPS */}
          {activeTab === 'tips' && (
            <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRACTICAL_TRAVEL_TIPS.map((tip, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700 mb-3 shadow-xs">
                      {tip.iconType === 'wallet' && <Wallet className="w-5 h-5" />}
                      {tip.iconType === 'wifi' && <Wifi className="w-5 h-5" />}
                      {tip.iconType === 'zap' && <Zap className="w-5 h-5" />}
                      {tip.iconType === 'droplet' && <Droplets className="w-5 h-5" />}
                      {tip.iconType === 'heart' && <Heart className="w-5 h-5" />}
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 block">
                      {tip.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mt-0.5 mb-2">
                      {tip.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tip.advice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
