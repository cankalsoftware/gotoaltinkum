'use client';

import React, { useState } from 'react';
import { NEWS_AND_EVENTS_DATA, NewsEventItem } from '@/data/altinkum-data';
import { Newspaper, Calendar, Sparkles, Tag, Clock, ArrowRight, Bell, CheckCircle2 } from 'lucide-react';

export default function NewsAndEvents() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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
    <section id="news-events" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Newspaper className="w-4 h-4 text-cyan-600" />
              <span>Didim & Altınkum Live Dispatch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Local News, Festivals & Events
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
              Stay up to date with seasonal cultural festivals, municipal beach improvements, yacht regattas, and weekly farmer markets.
            </p>
          </div>

          {/* Category Switcher */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Festival', 'Culture', 'Nightlife', 'Local News', 'Guide'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">
                    <Tag className="w-3 h-3 text-sky-600" />
                    <span>{news.category}</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{news.date}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-3">
                  {news.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {news.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{news.readTime}</span>
                </span>
                <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-md">
                  {news.badge}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Tourist Newsletter Box */}
        <div className="bg-gradient-to-br from-sky-900 via-cyan-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>GoToAltinkum Tourist Bulletins</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Get Seasonal Didim News & Event Schedules
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              Subscribe for weekly updates on Didim VegFest schedules, boat cruise parties, weather advisories, and exclusive hotel discounts.
            </p>

            {emailSubscribed ? (
              <div className="p-4 bg-emerald-500/20 border border-emerald-400/40 rounded-2xl flex items-center gap-3 text-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">
                  Thank you! You are subscribed to GoToAltinkum travel alerts.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Enter your email (e.g. tourist@example.com)"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-md"
                >
                  Join Updates
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
