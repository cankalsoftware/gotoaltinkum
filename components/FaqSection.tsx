'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/altinkum-data';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircleQuestion className="w-4 h-4 text-sky-600" />
            <span>Tourist & Search FAQ</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base md:text-lg">
            Answers to common questions about Altınkum beaches, the Temple of Apollo, travel distances, and local business partnerships.
          </p>

          {/* Categories */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {['All', 'General', 'Beaches', 'History', 'Transport', 'Advertising'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:border-sky-300 transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg leading-snug">{faq.question}</span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p className="font-semibold text-slate-800 bg-sky-50/60 p-2.5 sm:p-3.5 rounded-xl border border-sky-100 mb-2.5 sm:mb-3 text-xs sm:text-sm">
                      {faq.shortAnswer}
                    </p>
                    <p>{faq.fullAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
