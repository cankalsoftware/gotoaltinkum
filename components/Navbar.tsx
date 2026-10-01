'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Waves, MapPin, Sparkles, Menu, X, Mail, Phone, Calendar, Compass, Search } from 'lucide-react';

interface NavbarProps {
  onOpenAdvertiseModal?: () => void;
}

export default function Navbar({ onOpenAdvertiseModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beaches', href: '#beaches' },
    { label: 'Apollo & History', href: '#history' },
    { label: 'News & Events', href: '#news-events' },
    { label: 'Aegean Dining', href: '#dining' },
    { label: 'Hotels & Resorts', href: '#hotels' },
    { label: 'Day Trips', href: '#day-trips' },
    { label: 'Travel Guide', href: '#travel-guide' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-sky-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-sky-800/40 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '20s' }} />
              <span>Didim Live: 28°C / 82°F</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-sky-200">
              <Waves className="w-3.5 h-3.5 text-cyan-300" />
              <span>Aegean Sea: 25°C</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-300 font-medium">
              <Sparkles className="w-3 h-3" />
              <span>300+ Days of Sunshine</span>
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 text-xs">
            <a
              href="https://wa.me/905374909095?text=Hello%20GoToAltinkum,%20I%20would%20like%20to%20inquire%20about%20Didim%20and%20Altinkum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white font-semibold transition-colors bg-emerald-500/20 hover:bg-emerald-500/30 px-2.5 py-0.5 rounded-full border border-emerald-400/30"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: 0537 490 90 95</span>
            </a>
            <span className="text-sky-400 hidden sm:inline">|</span>
            <a
              href="mailto:info@gotoaltinkum.com?subject=Advertising Inquiry for GoToAltinkum.com"
              className="hidden sm:flex items-center gap-1 text-amber-300 hover:text-white font-semibold transition-colors bg-amber-500/20 hover:bg-amber-500/30 px-2.5 py-0.5 rounded-full border border-amber-400/30"
            >
              <Mail className="w-3 h-3" />
              <span>info@gotoaltinkum.com</span>
            </a>
            <span className="text-sky-400 hidden md:inline">|</span>
            <span className="hidden md:inline text-sky-200">Aydın, Türkiye 🇹🇷</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white/85 backdrop-blur-sm py-4 border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-amber-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  GoTo<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-amber-500">Altinkum</span>
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider border border-amber-200">
                  Didim
                </span>
              </div>
              <p className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
                Official Visitor Guide & Local Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 px-3 py-2 rounded-lg hover:bg-sky-50/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#advertise"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-sm shadow-amber-500/30 hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Advertise Business</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-slate-800 hover:text-sky-600 py-2.5 px-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#advertise"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm shadow-md"
              >
                Advertise Your Business (info@gotoaltinkum.com)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
