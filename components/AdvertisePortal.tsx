'use client';

import React, { useState } from 'react';
import { AD_PACKAGES } from '@/data/altinkum-data';
import { Sparkles, Mail, Check, Copy, CheckCheck, Send, Building2, Utensils, Anchor, Car, HeartPulse, Home } from 'lucide-react';

export default function AdvertisePortal() {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState('gold-showcase');
  const [businessName, setBusinessName] = useState('');
  const [businessCategory, setBusinessCategory] = useState('Hotel & Villa');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'info@gotoaltinkum.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[GoToAltinkum Advertising Inquiry] ${businessName || 'Local Business'} - ${businessCategory}`);
    const body = encodeURIComponent(
      `Hello GoToAltinkum Team,\n\nI would like to inquire about advertising on GoToAltinkum.com.\n\nBusiness Name: ${businessName || 'N/A'}\nCategory: ${businessCategory}\nContact Person: ${contactName || 'N/A'}\nPhone/WhatsApp: ${phone || 'N/A'}\nSelected Package: ${selectedTier}\n\nAdditional Details / Inquiry:\n${message || 'Please send us your media kit and pricing options for the upcoming season.'}\n\nThank you!`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const businessCategories = [
    { label: 'Hotels & Villas', icon: Building2 },
    { label: 'Restaurants & Beach Clubs', icon: Utensils },
    { label: 'Boat Tours & Water Sports', icon: Anchor },
    { label: 'Airport Transfers & Car Rental', icon: Car },
    { label: 'Dental & Health Tourism', icon: HeartPulse },
    { label: 'Real Estate & Property', icon: Home },
  ];

  return (
    <section id="advertise" className="py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Commercial & Business Advertising Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Grow Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
              GoToAltinkum.com
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Connect directly with over 500,000+ British, European, and Turkish tourists planning their holidays in Altınkum and Didim.
          </p>

          {/* Email Highlight Box */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
            <span className="text-xs sm:text-sm text-slate-200 font-medium">Official Commercial Contact:</span>
            <a
              href={`mailto:${emailAddress}`}
              className="text-amber-300 font-black text-sm sm:text-base hover:text-white transition-colors underline decoration-amber-400/60 underline-offset-4"
            >
              {emailAddress}
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all border border-amber-400/30"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Business Category Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {businessCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-200 block leading-tight">
                  {cat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pricing & Advertising Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {AD_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-sky-900/90 to-slate-900/90 border-2 border-amber-400 shadow-2xl shadow-amber-500/20 scale-105 z-10'
                  : 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular for Local Businesses
                </div>
              )}

              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 text-xl font-bold text-slate-200">
                    {pkg.priceTag}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Targeted for: {pkg.targetAudience}
                  </p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={generateMailtoLink()}
                onClick={() => setSelectedTier(pkg.id)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30 hover:scale-[1.02]'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Inquire About {pkg.name}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Direct Inquiry Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/15 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-white">
              Instant Business Advertising Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Fill out your business details below to generate a pre-formatted email to <strong className="text-amber-300 font-semibold">{emailAddress}</strong>.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = generateMailtoLink();
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Aegean Breeze Hotel / Sunset Fish Bar"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business Category *
                </label>
                <select
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="Hotels & Holiday Villas">Hotels & Holiday Villas</option>
                  <option value="Restaurants & Beach Clubs">Restaurants & Beach Clubs</option>
                  <option value="Boat Tours & Water Sports">Boat Tours & Water Sports</option>
                  <option value="Airport Transfers & Car Rentals">Airport Transfers & Car Rentals</option>
                  <option value="Real Estate & Property Management">Real Estate & Property Management</option>
                  <option value="Health, Dental & Wellness Clinics">Health, Dental & Wellness Clinics</option>
                  <option value="Other Local Business">Other Local Business</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. John Smith / Mehmet Yılmaz"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +90 532 ... or +44 7..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Message / Specific Advertising Goals
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your promotions, seasonal offers, or banner placement preferences..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-xs text-slate-400">
                Direct inquiries handled within 24 hours by our Didim advertising team.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-black rounded-xl text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry via Email (info@gotoaltinkum.com)</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
