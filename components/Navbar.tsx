'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Waves, Sparkles, Menu, X, Mail, Phone, TrendingUp, ExternalLink } from 'lucide-react';
import { trackOutboundClick } from '@/lib/analytics';

interface NavbarProps {
  onOpenAdvertiseModal?: () => void;
}

export default function Navbar({ onOpenAdvertiseModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveStats, setLiveStats] = useState({
    tempC: 28,
    tempF: 82,
    seaTempC: 25,
    gbp: 64.96,
    eur: 55.52,
    usd: 49.02,
    isLive: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Fetch live weather & currency rates
    const fetchLiveStats = async () => {
      try {
        const res = await fetch('/api/live-stats');
        if (res.ok) {
          const data = await res.json();
          if (data.weather && data.exchangeRates) {
            setLiveStats({
              tempC: data.weather.tempC,
              tempF: data.weather.tempF,
              seaTempC: data.weather.seaTempC,
              gbp: data.exchangeRates.gbp,
              eur: data.exchangeRates.eur,
              usd: data.exchangeRates.usd,
              isLive: true,
            });
          }
        }
      } catch (e) {
        console.warn('Live stats fetch error:', e);
      }
    };

    fetchLiveStats();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Visitor Hub', shortLabel: 'Visitor Hub', href: '#visitor-hub' },
    { label: 'Beaches', shortLabel: 'Beaches', href: '#beaches' },
    { label: 'Apollo & History', shortLabel: 'History', href: '#history' },
    { label: 'News & Events', shortLabel: 'News', href: '#news-events' },
    { label: 'Aegean Dining', shortLabel: 'Dining', href: '#dining' },
    { label: 'Hotels & Resorts', shortLabel: 'Hotels', href: '#hotels' },
    { label: 'Day Trips', shortLabel: 'Day Trips', href: '#day-trips' },
    { label: 'Flights', shortLabel: 'Flights', href: '#flights' },
    { label: 'Travel Guide', shortLabel: 'Guide', href: '#travel-guide' },
    { label: 'FAQ', shortLabel: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white text-xs py-1.5 sm:py-2 px-2.5 sm:px-4 border-b border-sky-800/40 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-2 sm:gap-x-3">
          
          {/* Weather & Live Status */}
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-3">
            <a
              href="#live-pulse"
              className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-950/80 hover:bg-emerald-900/90 px-2 py-0.5 rounded-full border border-emerald-500/40 text-[10px] sm:text-[11px] transition-all hover:scale-105 shrink-0 whitespace-nowrap"
              title="Click to view full Live Weather, Exchange Radar & AI Telemetry Feed"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE PULSE</span>
            </a>

            <a
              href="#live-pulse"
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold text-[11px] sm:text-xs transition-colors shrink-0 whitespace-nowrap"
              title="View live Didim weather and sea conditions"
            >
              <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '25s' }} />
              <span>Didim: {liveStats.tempC}°C / {liveStats.tempF}°F</span>
            </a>

            <a
              href="#live-pulse"
              className="hidden md:inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 font-medium text-xs transition-colors shrink-0 whitespace-nowrap"
              title="View Aegean sea temperature"
            >
              <Waves className="w-3.5 h-3.5 text-cyan-300" />
              <span>Sea: {liveStats.seaTempC}°C</span>
            </a>

            {/* Exchange Rates Pill */}
            <div className="flex items-center flex-wrap gap-1 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/15 text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap">
              <a
                href="#live-pulse"
                className="text-amber-300 font-bold flex items-center gap-0.5 hover:text-amber-200 transition-colors"
                title="View live FX currency breakdown"
              >
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                <span>FX:</span>
              </a>
              <span className="text-white font-semibold">£1=₺{liveStats.gbp}</span>
              <span className="text-white/40 hidden xs:inline">•</span>
              <span className="text-white font-semibold hidden xs:inline">€1=₺{liveStats.eur}</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white font-semibold hidden sm:inline">$1=₺{liveStats.usd}</span>

              <a
                href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=TRY"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick('currency_xe', 'XE Live Rates Ticker', 'https://www.xe.com')}
                className="text-[9px] sm:text-[10px] font-bold text-cyan-300 hover:text-white underline decoration-cyan-400/60 ml-0.5 flex items-center gap-0.5"
                title="View live currency exchange rates on XE.com"
              >
                <span>XE↗</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 text-xs shrink-0 whitespace-nowrap">
            <a
              href="https://wa.me/905374909095?text=Hello%20GoToAltinkum,%20I%20would%20like%20to%20inquire%20about%20Didim%20and%20Altinkum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white font-semibold transition-colors bg-emerald-500/20 hover:bg-emerald-500/30 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-400/30 text-[10px] sm:text-xs shrink-0 whitespace-nowrap"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
              <span className="hidden md:inline">WhatsApp:</span>
              <span>0537 490 90 95</span>
            </a>
            
            <a
              href="mailto:info@gotoaltinkum.com?subject=Advertising Inquiry for GoToAltinkum.com"
              className="hidden lg:flex items-center gap-1 text-amber-300 hover:text-white font-semibold transition-colors bg-amber-500/20 hover:bg-amber-500/30 px-2.5 py-0.5 rounded-full border border-amber-400/30 text-xs shrink-0 whitespace-nowrap"
            >
              <Mail className="w-3 h-3" />
              <span>info@gotoaltinkum.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo - 100% Non-Truncating & Adaptable on All Screen Sizes */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 whitespace-nowrap no-underline">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-amber-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="shrink-0 flex flex-col justify-center">
              <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <span className="text-base sm:text-xl xl:text-2xl font-black tracking-tight text-slate-900 whitespace-nowrap">
                  GoTo<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-amber-500">Altinkum</span>
                </span>
                <span className="bg-amber-100 text-amber-800 text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider border border-amber-200 shrink-0 whitespace-nowrap">
                  Didim
                </span>
              </div>
              <p className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-500 tracking-wider uppercase font-semibold whitespace-nowrap">
                Official Visitor Guide & Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Compact, High-Density, Non-Scrolling */}
          <nav className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-1 flex-1 min-w-0 px-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] xl:text-xs 2xl:text-[13px] font-bold text-slate-700 hover:text-sky-600 px-1.5 xl:px-2.5 py-1.5 rounded-lg hover:bg-sky-50 transition-colors whitespace-nowrap shrink-0"
              >
                <span className="hidden xl:inline">{link.label}</span>
                <span className="xl:hidden">{link.shortLabel}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#advertise"
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm shadow-amber-500/30 hover:shadow-md transition-all hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
              <span className="hidden xl:inline">Advertise Business</span>
              <span className="xl:hidden">Advertise</span>
            </a>
          </div>

          {/* Mobile Hamburger Button (Accessible 44x44px touch target) */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn max-h-[calc(100vh-110px)] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-sky-600 py-3 px-3.5 rounded-xl hover:bg-sky-50 active:bg-sky-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-xs">➔</span>
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#advertise"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm shadow-md active:scale-98 transition-transform"
              >
                Advertise Your Business (info@gotoaltinkum.com)
              </a>

              <a
                href="https://wa.me/905374909095?text=Hello%20GoToAltinkum,%20I%20would%20like%20assistance%20with%20Didim."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Desk: 0537 490 90 95</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
