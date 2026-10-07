'use client';

import React, { useState, useMemo } from 'react';
import { 
  Plane, 
  Search, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Luggage, 
  Clock, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  Filter, 
  Compass, 
  Building, 
  Tag,
  AlertCircle
} from 'lucide-react';
import { 
  AIRLINE_CARRIERS_DATA, 
  FLIGHT_ROUTES_DATABASE, 
  SKYSCANNER_META, 
  FlightRouteIdea,
  AirlineCarrier 
} from '@/data/altinkum-data';
import { trackOutboundClick } from '@/lib/analytics';

export default function FlightSearchAndGuide() {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<'all' | 'BJV' | 'ADB'>('all');
  const [selectedAirline, setSelectedAirline] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');

  // Filter routes based on user selections
  const filteredRoutes = useMemo(() => {
    return FLIGHT_ROUTES_DATABASE.filter((route) => {
      // Origin filter
      if (selectedOrigin !== 'all') {
        if (selectedOrigin === 'uk') {
          if (!route.originCountry.toLowerCase().includes('united kingdom')) return false;
        } else if (selectedOrigin === 'germany') {
          if (!route.originCountry.toLowerCase().includes('germany')) return false;
        } else if (selectedOrigin === 'london') {
          if (!route.originCity.toLowerCase().includes('london')) return false;
        } else if (selectedOrigin === 'manchester') {
          if (!route.originCity.toLowerCase().includes('manchester')) return false;
        } else if (selectedOrigin === 'birmingham') {
          if (!route.originCity.toLowerCase().includes('birmingham')) return false;
        } else if (selectedOrigin === 'bristol') {
          if (!route.originCity.toLowerCase().includes('bristol')) return false;
        } else if (selectedOrigin === 'scotland') {
          if (!route.originCountry.toLowerCase().includes('scotland') && !route.originCity.toLowerCase().includes('edinburgh') && !route.originCity.toLowerCase().includes('glasgow')) return false;
        }
      }

      // Destination filter
      if (selectedDestination !== 'all' && route.destinationCode !== selectedDestination) {
        return false;
      }

      // Airline filter
      if (selectedAirline !== 'all' && route.airlineId !== selectedAirline) {
        return false;
      }

      return true;
    });
  }, [selectedOrigin, selectedDestination, selectedAirline, selectedSeason]);

  // Construct dynamic Skyscanner link based on user selection
  const dynamicSkyscannerUrl = useMemo(() => {
    if (selectedDestination === 'BJV') return SKYSCANNER_META.bjvSearchUrl;
    if (selectedDestination === 'ADB') return SKYSCANNER_META.adbSearchUrl;
    return SKYSCANNER_META.mainUrl;
  }, [selectedDestination]);

  const originOptions = [
    { id: 'all', label: 'All Departures (UK & EU)' },
    { id: 'london', label: 'London (LGW, LTN, STN, LHR)' },
    { id: 'manchester', label: 'Manchester (MAN)' },
    { id: 'birmingham', label: 'Birmingham (BHX)' },
    { id: 'bristol', label: 'Bristol / South West (BRS)' },
    { id: 'scotland', label: 'Scotland (Edinburgh / Glasgow)' },
    { id: 'uk', label: 'All UK Airports' },
    { id: 'germany', label: 'Germany (FRA, MUC, DUS, BER)' },
  ];

  return (
    <section id="flights" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-sky-900/60">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-sky-400/30">
            <Plane className="w-3.5 h-3.5 text-sky-400" />
            <span>Flight Search & Aegean Gateway Guide</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight">
            Flights to Altınkum & Didim
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed">
            Find direct flight routes to <strong className="text-white">Milas-Bodrum (BJV)</strong> and <strong className="text-white">Izmir (ADB)</strong>. Explore route ideas, compare airlines, and click directly through to Skyscanner and official carriers for live prices.
          </p>
        </div>

        {/* Informational Guidance Alert Notice */}
        <div className="bg-sky-950/70 border border-sky-800/80 rounded-2xl p-3.5 sm:p-4 mb-6 sm:mb-8 flex items-start gap-3 text-xs sm:text-sm text-slate-300 backdrop-blur-sm shadow-md">
          <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Informational Route & Idea Finder:</strong> GoToAltinkum provides flight route ideas, seasonal schedules, and direct verified links to <strong className="text-amber-300">Skyscanner</strong> and official airlines (<strong className="text-cyan-300">EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor</strong>). We do not take bookings or sell tickets directly — click any carrier below to view live pricing and book securely on their official portal.
          </div>
        </div>

        {/* Skyscanner Meta-Search Hero Banner */}
        <div className="bg-gradient-to-r from-sky-800 via-sky-700 to-cyan-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 mb-8 sm:mb-10 shadow-xl border border-sky-400/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-white text-sky-900 font-black text-xs sm:text-sm px-2.5 py-0.5 rounded-md tracking-wider">
                SKYSCANNER
              </span>
              <span className="text-xs bg-sky-900/60 text-sky-200 border border-sky-300/30 px-2 py-0.5 rounded-full font-semibold">
                Live Price Comparison
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
              Compare All 6 Airlines in One Single Search
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Want to see real-time seat availability, live prices for your exact calendar dates, and compare EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, and Condor side by side? Search directly on Skyscanner.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://www.skyscanner.net/transport/flights/uk/bjv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick('flight_search', 'Skyscanner BJV Banner', 'https://www.skyscanner.net/transport/flights/uk/bjv')}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-amber-400/20"
            >
              <Plane className="w-4 h-4 text-slate-950" />
              <span>Search Bodrum (BJV) on Skyscanner</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.skyscanner.net/transport/flights/uk/adb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick('flight_search', 'Skyscanner ADB Banner', 'https://www.skyscanner.net/transport/flights/uk/adb')}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 active:scale-98 text-white font-bold text-xs sm:text-sm transition-all border border-white/20"
            >
              <span>Search Izmir (ADB)</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
            </a>
          </div>
        </div>

        {/* Interactive Flight Search / Filter Bar (Skyscanner Style) */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-sky-400" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Filter Flight Route Ideas
              </span>
            </div>
            <span className="text-xs text-slate-400">
              Showing <strong className="text-amber-300 font-bold">{filteredRoutes.length}</strong> matching route ideas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* 1. Origin Filter */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Flying From</span>
              </label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:border-sky-500 transition-colors"
              >
                {originOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Destination Filter */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>Gateway Airport</span>
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value as 'all' | 'BJV' | 'ADB')}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:border-sky-500 transition-colors"
              >
                <option value="all">All Gateways (BJV + ADB)</option>
                <option value="BJV">Milas-Bodrum (BJV) — 85 km (60 min drive)</option>
                <option value="ADB">Izmir Adnan Menderes (ADB) — 140 km (90 min drive)</option>
              </select>
            </div>

            {/* 3. Airline Filter */}
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
                <Plane className="w-3 h-3 text-amber-400" />
                <span>Airline Carrier</span>
              </label>
              <select
                value={selectedAirline}
                onChange={(e) => setSelectedAirline(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:border-sky-500 transition-colors"
              >
                <option value="all">All Major Airlines (6 Carriers)</option>
                <option value="easyjet">EasyJet</option>
                <option value="jet2">Jet2.com</option>
                <option value="tui">TUI Airways</option>
                <option value="sunexpress">SunExpress</option>
                <option value="turkishairlines">Turkish Airlines</option>
                <option value="condor">Condor</option>
              </select>
            </div>

            {/* 4. Action / Reset */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedOrigin('all');
                  setSelectedDestination('all');
                  setSelectedAirline('all');
                }}
                className="w-full bg-slate-800 hover:bg-slate-700 active:scale-98 text-slate-300 hover:text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Route Idea Cards Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Direct Flight Route Ideas</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Click carrier buttons to check live prices & book
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredRoutes.map((route) => {
              const carrier = AIRLINE_CARRIERS_DATA.find(c => c.id === route.airlineId);
              return (
                <div
                  key={route.id}
                  className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-lg group"
                >
                  <div>
                    {/* Header: Airline Badge & Destination Code */}
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-800">
                      <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md border ${carrier?.badgeBg || 'bg-slate-800 text-slate-300'}`}>
                        {route.airlineName}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono font-bold bg-slate-900 text-sky-300 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-amber-400" />
                        <span>{route.destinationCode} ({route.destinationCode === 'BJV' ? 'Bodrum' : 'Izmir'})</span>
                      </span>
                    </div>

                    {/* Route Line */}
                    <div className="mb-3">
                      <div className="text-xs text-slate-400 font-medium">Route Path</div>
                      <div className="text-base sm:text-lg font-black text-white mt-0.5 flex items-center gap-1.5">
                        <span>{route.originCity}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="text-cyan-300">{route.destinationAirport}</span>
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80 text-xs mb-3.5">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span>Flight Time</span>
                        </div>
                        <div className="text-white font-bold mt-0.5">{route.flightDuration}</div>
                      </div>

                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-emerald-400" />
                          <span>Schedule</span>
                        </div>
                        <div className="text-slate-200 font-semibold mt-0.5 truncate" title={route.frequency}>
                          {route.frequency}
                        </div>
                      </div>
                    </div>

                    {/* Price Idea Estimate Pill */}
                    <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-2 sm:p-2.5 mb-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-amber-300 text-[11px] font-bold flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          <span>Indicative Fare Idea</span>
                        </span>
                        <span className="text-[10px] text-amber-200/70">Off-peak / Peak</span>
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5">
                        {route.priceIdeaLow} <span className="text-slate-500">to</span> {route.priceIdeaPeak}
                      </div>
                    </div>

                    {/* Highlights Bullets */}
                    <ul className="space-y-1 text-xs text-slate-300 mb-4">
                      {route.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions: Official Airline Link + Skyscanner */}
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <a
                      href={route.airlineSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOutboundClick('flight_search', `${route.airlineName} Route Card`, route.airlineSearchUrl)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 active:scale-98 text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <span>Check Live Fares on {route.airlineName}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={route.skyscannerSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOutboundClick('flight_search', `Skyscanner Route Card ${route.originCode}-${route.destinationCode}`, route.skyscannerSearchUrl)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-98 text-sky-300 hover:text-white text-[11px] font-semibold transition-all border border-slate-800"
                    >
                      <span>Compare on Skyscanner</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Major Airlines Directory Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Major Airlines Flying to Didim & Altınkum Gateways
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Direct links to the 6 primary scheduled & charter carriers operating flights to Milas-Bodrum (BJV) and Izmir (ADB).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {AIRLINE_CARRIERS_DATA.map((airline) => (
              <div
                key={airline.id}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg border ${airline.badgeBg}`}>
                      {airline.shortName}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {airline.country}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {airline.name}
                  </h4>
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {airline.tagline}
                  </p>

                  <div className="space-y-2 text-xs text-slate-400 mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div>
                      <strong className="text-slate-300 block mb-0.5 text-[11px] uppercase tracking-wider">Airports Served:</strong>
                      <span className="text-white font-medium">
                        {airline.airportsServed.includes('BJV') && 'Milas-Bodrum (BJV) '}
                        {airline.airportsServed.includes('BJV') && airline.airportsServed.includes('ADB') && '• '}
                        {airline.airportsServed.includes('ADB') && 'Izmir Adnan Menderes (ADB)'}
                      </span>
                    </div>

                    <div>
                      <strong className="text-slate-300 block mb-0.5 text-[11px] uppercase tracking-wider">Baggage Overview:</strong>
                      <span className="text-slate-300">{airline.baggagePolicy}</span>
                    </div>

                    <div>
                      <strong className="text-slate-300 block mb-0.5 text-[11px] uppercase tracking-wider">Best For:</strong>
                      <span className="text-cyan-300">{airline.bestFor}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={airline.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundClick('flight_search', `Airline Directory ${airline.name}`, airline.websiteUrl)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-98 text-white text-xs font-bold transition-all border border-white/15"
                >
                  <span>Visit {airline.name} Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-amber-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Airport Gateway Comparison: Bodrum (BJV) vs Izmir (ADB) */}
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-800 shadow-2xl mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Airport Gateway Comparison</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white">
                Milas-Bodrum (BJV) vs. Izmir (ADB)
              </h3>
            </div>
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full self-start md:self-auto">
              Choose your best arrival gateway
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bodrum (BJV) */}
            <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 font-black text-sm flex items-center justify-center border border-emerald-500/30">
                    BJV
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Milas-Bodrum Airport</h4>
                    <span className="text-[11px] text-emerald-400 font-semibold">Closest Airport to Altınkum</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  85 KM
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div><strong>Drive Time:</strong> Approx. 55–65 minutes via smooth D525 highway.</div>
                </div>
                <div className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div><strong>Airlines:</strong> EasyJet, Jet2, TUI, SunExpress, Turkish Airlines, Condor (peak summer charters).</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div><strong>Transfer Options:</strong> Private VIP Mercedes Vito transfer (~£45-£65 per vehicle), pre-booked shared shuttle, or taxi.</div>
                </div>
              </div>
            </div>

            {/* Izmir (ADB) */}
            <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-sky-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 font-black text-sm flex items-center justify-center border border-sky-500/30">
                    ADB
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">Izmir Adnan Menderes</h4>
                    <span className="text-[11px] text-sky-400 font-semibold">Major Aegean Year-Round Hub</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                  140 KM
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div><strong>Drive Time:</strong> Approx. 85–95 minutes via O-31 toll motorway & D525.</div>
                </div>
                <div className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div><strong>Airlines:</strong> SunExpress, Turkish Airlines, EasyJet, Pegasus, Condor (massive year-round network).</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div><strong>Transfer Options:</strong> Direct HAVAŞ airport coach bus to Didim Bus Terminal, private VIP transfer, or car rental.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Calendar & Booking Tips */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-sky-900/60 shadow-xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Insider Flight Booking Tips</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
            How to Get the Best Flight Deals to Altınkum
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800">
              <strong className="text-amber-300 block mb-1.5">1. Check Both BJV and ADB:</strong>
              <span>Sometimes flights into Izmir (ADB) are 30% to 50% cheaper than Bodrum (BJV), even with the slightly longer transfer time.</span>
            </div>

            <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800">
              <strong className="text-cyan-300 block mb-1.5">2. Book 2–4 Months Ahead:</strong>
              <span>Peak summer flights (July & August) sell out fast on Jet2, EasyJet, and TUI. Booking in January/February secures the best seat choices.</span>
            </div>

            <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800">
              <strong className="text-emerald-300 block mb-1.5">3. Consider May & September:</strong>
              <span>The Aegean Sea is warm, sunshine is plentiful (28°C–31°C), and return airfares drop by as much as £100–£200 compared to school holidays.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
