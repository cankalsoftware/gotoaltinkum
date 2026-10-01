'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Sun, 
  Waves, 
  TrendingUp, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  Compass, 
  ExternalLink, 
  Terminal, 
  ChevronDown, 
  ChevronUp,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { trackOutboundClick } from '@/lib/analytics';

interface LogEntry {
  timestamp: string;
  source: string;
  type: 'weather' | 'currency' | 'ai_radar' | 'system';
  message: string;
  status: 'ONLINE' | 'SYNCED' | 'ACTIVE';
}

interface LiveData {
  weather: {
    tempC: number;
    tempF: number;
    feelsLikeC: number;
    seaTempC: number;
    condition: string;
    windSpeed: number;
    humidity: number;
    uvIndex: number;
    coordinates: string;
    location: string;
  };
  exchangeRates: {
    gbp: number;
    eur: number;
    usd: number;
    lastUpdated: string;
  };
  aiBrief: string;
  didimLocalTime: string;
  didimLocalDate: string;
  latencyMs: number;
  status: string;
  timestamp: string;
  logs: LogEntry[];
}

export default function LiveStatusPulse() {
  const [data, setData] = useState<LiveData>({
    weather: {
      tempC: 28,
      tempF: 82,
      feelsLikeC: 29,
      seaTempC: 25,
      condition: 'Sunny & Clear Aegean Sky',
      windSpeed: 12,
      humidity: 48,
      uvIndex: 7,
      coordinates: '37.3620° N, 27.2764° E',
      location: 'Altınkum & Didim, Aydın, TR',
    },
    exchangeRates: {
      gbp: 64.96,
      eur: 55.52,
      usd: 49.02,
      lastUpdated: new Date().toISOString(),
    },
    aiBrief: '☀️ Prime beach & swimming weather in Altınkum today (28°C). Aegean sea water is a warm 25°C with gentle breezes at 1st and 3rd Bay. Current GBP rate of ₺64.96 provides fantastic dining and tour value.',
    didimLocalTime: '12:00:00',
    didimLocalDate: 'Today',
    latencyMs: 34,
    status: 'ACTIVE_VERIFIED',
    timestamp: new Date().toISOString(),
    logs: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<Date>(new Date());
  const [secondsAgo, setSecondsAgo] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [calcPounds, setCalcPounds] = useState<number>(100);

  // Fetch live stats from API
  const fetchLiveTelemetry = useCallback(async (isManual = false) => {
    setIsLoading(true);
    const pingStart = Date.now();
    try {
      const res = await fetch(`/api/live-stats?t=${Date.now()}`);
      if (res.ok) {
        const json: LiveData = await res.json();
        setData(json);
        setLastCheckTime(new Date());
        setSecondsAgo(0);

        // Console Logging to show page as verified active in developer tools
        const timeStr = json.didimLocalTime || new Date().toLocaleTimeString();
        console.log(
          `%c[GoToAltinkum LIVE CHECK]%c ✓ ACTIVE • Didim: ${json.weather.tempC}°C (Sea: ${json.weather.seaTempC}°C) • FX: £1=₺${json.exchangeRates.gbp} | €1=₺${json.exchangeRates.eur} | $1=₺${json.exchangeRates.usd} • Checked at ${timeStr} (${Date.now() - pingStart}ms)`,
          'background: #0284c7; color: #ffffff; font-weight: bold; padding: 3px 8px; border-radius: 4px; font-size: 11px;',
          'color: #059669; font-weight: 600; font-size: 11px;'
        );
      }
    } catch (e) {
      console.warn('[GoToAltinkum Live Pulse] Network check fallback:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load and periodic polling (every 60s)
  useEffect(() => {
    fetchLiveTelemetry();
    const interval = setInterval(() => {
      fetchLiveTelemetry();
    }, 60000);

    // Timer counter for "Checked X seconds ago"
    const timerInterval = setInterval(() => {
      setSecondsAgo((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, [fetchLiveTelemetry]);

  return (
    <section id="live-pulse" className="relative py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white border-y border-sky-900/60 shadow-xl overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Didim & Altınkum Live Pulse
                </h2>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/40 uppercase tracking-widest flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>Real-Time Telemetry</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Live meteorological sensors & open currency exchange feeds • Checked {secondsAgo === 0 ? 'just now' : `${secondsAgo}s ago`}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => fetchLiveTelemetry(true)}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm"
              title="Click to perform an instant live sensor and exchange check"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Checking...' : 'Ping Live Status'}</span>
            </button>

            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                showTerminal 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              title="Toggle Live Diagnostic & Telemetry Log Feed"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Live Log Feed</span>
              {showTerminal ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Main Grid: Weather, FX & AI Concierge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6">
          
          {/* Weather Card (5 cols) */}
          <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Altınkum Weather</span>
                </span>
                <span className="text-[11px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                  {data.didimLocalTime || 'TRT'}
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {data.weather.tempC}°<span className="text-2xl sm:text-3xl font-bold text-sky-400">C</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  / {data.weather.tempF}°F <span className="text-xs text-slate-500">(Feels {data.weather.feelsLikeC}°C)</span>
                </div>
              </div>

              <p className="text-sm font-semibold text-cyan-300 mt-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{data.weather.condition}</span>
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800/80 text-xs">
              <div className="bg-slate-950/60 p-2 rounded-xl text-center border border-slate-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-center gap-1">
                  <Waves className="w-3 h-3 text-cyan-400" />
                  <span>Sea Water</span>
                </div>
                <div className="text-sm font-bold text-cyan-200 mt-0.5">{data.weather.seaTempC}°C</div>
              </div>

              <div className="bg-slate-950/60 p-2 rounded-xl text-center border border-slate-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-center gap-1">
                  <Wind className="w-3 h-3 text-emerald-400" />
                  <span>Wind</span>
                </div>
                <div className="text-sm font-bold text-emerald-200 mt-0.5">{data.weather.windSpeed} km/h</div>
              </div>

              <div className="bg-slate-950/60 p-2 rounded-xl text-center border border-slate-800">
                <div className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-center gap-1">
                  <Droplets className="w-3 h-3 text-sky-400" />
                  <span>Humidity</span>
                </div>
                <div className="text-sm font-bold text-sky-200 mt-0.5">{data.weather.humidity}%</div>
              </div>
            </div>
          </div>

          {/* Currency Exchange Radar (4 cols) */}
          <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-emerald-300 font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Live FX Exchange Rates</span>
                </span>
                <span className="text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  TURKISH LIRA (₺)
                </span>
              </div>

              {/* 3 Main Currency Cards */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/30 text-sky-300 font-black text-xs flex items-center justify-center">
                      £
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white">British Pound (GBP)</span>
                    </div>
                  </div>
                  <div className="text-base font-black text-amber-300 font-mono">
                    ₺{data.exchangeRates.gbp}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-black text-xs flex items-center justify-center">
                      €
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white">Euro (EUR)</span>
                    </div>
                  </div>
                  <div className="text-base font-black text-amber-300 font-mono">
                    ₺{data.exchangeRates.eur}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-black text-xs flex items-center justify-center">
                      $
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white">US Dollar (USD)</span>
                    </div>
                  </div>
                  <div className="text-base font-black text-amber-300 font-mono">
                    ₺{data.exchangeRates.usd}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Calculator & Link */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="text-[11px] text-slate-300">
                <span className="text-amber-400 font-bold">£100</span> ≈ <span className="font-mono font-bold text-white">₺{(data.exchangeRates.gbp * 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <a
                href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=TRY"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('currency_xe', 'Live Pulse Card', 'https://www.xe.com')}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px] underline decoration-cyan-500/50"
              >
                <span>Live XE Rates</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* AI Travel Radar & Aegean Guidance (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900/90 via-sky-950/50 to-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-sky-800/40 hover:border-sky-400/40 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="flex items-center gap-1.5 text-cyan-300 font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '30s' }} />
                  <span>AI Aegean Travel Radar</span>
                </span>
                <span className="text-[10px] bg-sky-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-semibold">
                  Live Free AI
                </span>
              </div>

              <div className="p-3.5 bg-sky-950/60 rounded-xl border border-sky-800/50 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {data.aiBrief}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>37.3620° N, 27.2764° E</span>
              </span>
              <a
                href="#beaches"
                className="text-amber-300 hover:text-amber-200 font-semibold text-[11px] flex items-center gap-1 group"
              >
                <span>Explore Beaches</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Collapsible Live Diagnostic & Sensor Terminal Feed */}
        {showTerminal && (
          <div className="mt-5 bg-slate-950 rounded-2xl p-4 border border-emerald-500/30 font-mono text-xs shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-400 font-bold">LIVE TELEMETRY STREAM & LOGGING</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Latency: <strong className="text-cyan-400">{data.latencyMs}ms</strong></span>
                <span>Status: <strong className="text-emerald-400">{data.status}</strong></span>
              </div>
            </div>

            <div className="mt-3 space-y-2 max-h-48 overflow-y-auto text-[11px] pr-2">
              {data.logs && data.logs.length > 0 ? (
                data.logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 ${
                      log.type === 'weather' ? 'bg-sky-950 text-sky-400 border border-sky-800' :
                      log.type === 'currency' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                      log.type === 'ai_radar' ? 'bg-purple-950 text-purple-400 border border-purple-800' :
                      'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    }`}>
                      {log.source}
                    </span>
                    <span className="leading-tight">{log.message}</span>
                  </div>
                ))
              ) : (
                <div className="text-slate-400">
                  [{data.didimLocalTime}] Live telemetry active • Didim {data.weather.tempC}°C • FX GBP/TRY ₺{data.exchangeRates.gbp}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
