'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cookie, 
  Settings2, 
  Check, 
  X, 
  Info, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean; // Google Analytics
  marketing: boolean; // Referral links & affiliate partners
  timestamp: string;
}

const COOKIE_STORAGE_KEY = 'gotoaltinkum_cookie_consent_v1';

export function openCookiePreferencesModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  }
}

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
    timestamp: '',
  });

  useEffect(() => {
    // Check if consent was already given
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      } else {
        // Delay slightly for smooth page entrance
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setShowBanner(true);
    }

    // Listen to custom event to reopen preferences modal from Footer / Legal pages
    const handleOpenModal = () => {
      setShowModal(true);
      setShowBanner(false);
    };

    window.addEventListener('open-cookie-preferences', handleOpenModal);
    return () => window.removeEventListener('open-cookie-preferences', handleOpenModal);
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
      setPreferences(prefs);
      setShowBanner(false);
      setShowModal(false);

      // Update Google Analytics consent mode if gtag exists
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          ad_user_data: prefs.marketing ? 'granted' : 'denied',
          ad_personalization: prefs.marketing ? 'granted' : 'denied',
        });
      }
    } catch (e) {
      console.warn('Unable to persist cookie consent:', e);
    }
  };

  const handleAcceptAll = () => {
    applyConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleRejectNonEssential = () => {
    applyConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    applyConsent({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <>
      {/* Floating Bottom Consent Banner */}
      {showBanner && !showModal && (
        <aside 
          aria-label="Cookie consent banner"
          className="fixed bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-6 max-w-4xl mx-auto z-50 bg-slate-950/95 backdrop-blur-xl border border-sky-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-2xl shadow-sky-950/80 animate-slideUp"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Cookie className="w-4 h-4" />
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Cookie & Privacy Choices on GoToAltinkum
                </h3>
                <span className="text-[10px] font-bold bg-sky-950 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                  GDPR & KVKK Compliant
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We use strictly necessary cookies to ensure portal security and functionality. With your consent, we also use analytics and partner referral tracking to measure site traffic and support our free guide. We do not sell personal data.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-cyan-300 pt-0.5">
                <Link href="/cookies" className="underline hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link href="/privacy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="underline hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Customize</span>
              </button>

              <button
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
              >
                Reject Non-Essential
              </button>

              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Detailed Granular Preferences Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 text-white shadow-2xl space-y-5">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="cookie-preferences-title" className="text-lg sm:text-xl font-bold text-white">
                    Cookie & Consent Preferences
                  </h2>
                  <p className="text-xs text-slate-400">
                    Manage your privacy settings for GoToAltinkum.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We respect your right to privacy. You can choose which types of cookies and local storage tokens to allow. Essential cookies cannot be turned off as they are required for security and core navigation.
            </p>

            {/* Granular Toggles */}
            <div className="space-y-3">
              {/* Category 1: Strictly Necessary */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">1. Strictly Necessary Cookies</span>
                    <span className="text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded-full">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Essential for site navigation, telemetry health checks, theme settings, and preventing fraudulent requests. These cookies do not store personally identifiable information.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="w-5 h-5 rounded text-sky-500 focus:ring-0 cursor-not-allowed opacity-60"
                  />
                </div>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">2. Performance & Analytics</span>
                    <span className="text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-500/30 px-2 py-0.2 rounded-full">
                      Google Analytics 4
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Allows us to count visitors, discover which beach guides are most read, and optimize site loading speed. All IP addresses are anonymized.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                  </label>
                </div>
              </div>

              {/* Category 3: Commercial & Partner Referrals */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">3. Partner Referrals & Advertising</span>
                    <span className="text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-500/30 px-2 py-0.2 rounded-full">
                      Outbound Referrals
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enables tracking when you click through to verified airline portals (Skyscanner, EasyJet, Jet2), hotels, or local tour operators so we can attribute referrals.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                You can revisit and update these settings anytime via the footer link.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md active:scale-98"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
