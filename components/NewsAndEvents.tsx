'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NEWS_AND_EVENTS_DATA, NewsEventItem } from '@/data/altinkum-data';
import {
  Newspaper,
  Calendar,
  Sparkles,
  Tag,
  Clock,
  ArrowRight,
  Bell,
  CheckCircle2,
  MapPin,
  X,
  Info,
  Phone,
} from 'lucide-react';

export default function NewsAndEvents() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedNewsModal, setSelectedNewsModal] = useState<NewsEventItem | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const filteredNews = NEWS_AND_EVENTS_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setEmailSubscribed(true);
      setSubscriberEmail('');
    }
  };

  return (
    <section id="news-events" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <Newspaper className="w-4 h-4 text-cyan-600" />
              <span>Didim & Altınkum Live Dispatch</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Local News, Festivals & Events
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base md:text-lg max-w-2xl">
              Discover seasonal cultural festivals, municipal beach improvements, night illuminations at Apollo, and weekly farmers' bazaars.
            </p>
          </div>

          {/* Category Switcher */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['All', 'Festival', 'Culture', 'Nightlife', 'Local News', 'Guide'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid with Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedNewsModal(news)}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md shadow-xs">
                      <Tag className="w-3 h-3 text-cyan-400" />
                      <span>{news.category}</span>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="text-[10px] sm:text-[11px] font-bold bg-amber-400 text-slate-950 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs">
                      {news.badge}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-400 mb-1.5 sm:mb-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="text-sky-600">{news.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-2 sm:mb-3">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                    {news.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="p-4 sm:p-6 pt-0">
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">By {news.author}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNewsModal(news);
                    }}
                    className="inline-flex items-center gap-1 font-bold text-sky-600 group-hover:text-sky-700 group-hover:translate-x-0.5 transition-all text-xs"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tourist Newsletter Box */}
        <div className="bg-gradient-to-br from-sky-900 via-cyan-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>GoToAltinkum Bulletins</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white mb-2">
              Get Seasonal Didim News & Event Schedules
            </h3>
            <p className="text-slate-300 text-xs sm:text-base mb-5 sm:mb-6">
              Subscribe for weekly updates on Didim VegFest schedules, boat cruise parties, weather advisories, and exclusive hotel discounts.
            </p>

            {emailSubscribed ? (
              <div className="p-3.5 sm:p-4 bg-emerald-500/20 border border-emerald-400/40 rounded-xl sm:rounded-2xl flex items-center gap-2.5 text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">
                  Thank you! You are subscribed to GoToAltinkum travel alerts.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <input
                  type="email"
                  required
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Enter your email (e.g. tourist@example.com)"
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm shrink-0 transition-all shadow-md active:scale-98"
                >
                  Join Updates
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Pop-up Full Story Modal */}
      {selectedNewsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedNewsModal(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedNewsModal(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center font-bold transition-all shadow-lg backdrop-blur-md"
              aria-label="Close article"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden bg-slate-100">
              <Image
                src={selectedNewsModal.image}
                alt={selectedNewsModal.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-1.5 sm:gap-2 pr-10">
                <span className="bg-sky-600 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-xs">
                  {selectedNewsModal.category}
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-xs">
                  {selectedNewsModal.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-amber-300 font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedNewsModal.date}</span>
                  <span>•</span>
                  <span>{selectedNewsModal.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-snug drop-shadow-md">
                  {selectedNewsModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              {/* Location & Schedule Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Venue / Location
                    </span>
                    <strong className="text-xs sm:text-sm text-slate-800 block">
                      {selectedNewsModal.location}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Schedule & Timing
                    </span>
                    <strong className="text-xs sm:text-sm text-slate-800 block">
                      {selectedNewsModal.eventSchedule}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Full Article Text */}
              <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
                {selectedNewsModal.fullArticle.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="bg-sky-50/70 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-sky-100">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-sky-900 tracking-wider mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600" />
                  <span>Key Highlights:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {selectedNewsModal.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visitor Tips */}
              <div className="bg-amber-50/70 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-amber-200/80">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-amber-900 tracking-wider mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                  <span>Visitor & Traveler Advice:</span>
                </h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                  {selectedNewsModal.visitorAdvice.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
                  <span>Author: <strong>{selectedNewsModal.author}</strong></span>
                  <span>•</span>
                  <span>GoToAltinkum</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/905374909095?text=Hello%20GoToAltinkum,%20I%20have%20a%20question%20about%20the%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp (0537 490 90 95)</span>
                  </a>

                  <button
                    onClick={() => setSelectedNewsModal(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
