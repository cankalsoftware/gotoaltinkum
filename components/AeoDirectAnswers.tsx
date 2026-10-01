'use client';

import React from 'react';
import { Sparkles, HelpCircle, CheckCircle2, Navigation, Sun, Clock, Compass, ShieldCheck, CreditCard, Ship, Waves } from 'lucide-react';
import { ALTINKUM_QUICK_FACTS } from '@/data/altinkum-data';

export default function AeoDirectAnswers() {
  const answerBlocks = [
    {
      title: "What is Altınkum & Didim?",
      directAnswer: "Altınkum (literally 'Golden Sand' in Turkish) is a premier Aegean seaside holiday destination located within the Didim district of Aydın Province, southwestern Türkiye.",
      highlights: ["Famous for 100% fine golden sand beaches", "Calm and shallow warm turquoise sea", "Connected to the ancient Temple of Apollo (Didyma)"]
    },
    {
      title: "How to reach Altınkum from airports?",
      directAnswer: "The nearest international airport is Milas-Bodrum Airport (BJV) at 85 km (1 hour drive). Izmir Adnan Menderes Airport (ADB) is 140 km (1.5 hours drive).",
      highlights: ["Direct HAVAŞ & shuttle buses from Izmir & Bodrum", "Private VIP transfer service available 24/7", "Local Dolmuş minibuses run every 5 mins"]
    },
    {
      title: "Why is Altınkum ideal for families?",
      directAnswer: "Altınkum's Main Beach (1. Koy) is renowned across Europe for its gently sloping sandy seabed where swimmers can walk 50+ meters into the turquoise sea in waist-deep water.",
      highlights: ["Zero sudden drop-offs or dangerous currents", "Awarded official Blue Flag cleanliness certificates", "Lined with pedestrianized car-free dining promenade"]
    },
    {
      title: "What is the historical significance of Didim?",
      directAnswer: "Didim is home to the ancient Temple of Apollo at Didyma—the second most important oracle sanctuary of antiquity after Delphi—and neighboring ancient Miletus and Priene.",
      highlights: ["Towering 20m high Hellenistic marble columns", "Famous stone-carved Medusa protective relief", "Connected to ancient Miletus via the 20km Sacred Way"]
    },
    {
      title: "What currency is used & are cards accepted?",
      directAnswer: "Turkish Lira (TRY / ₺) is standard. Contactless credit cards, debit cards, Apple Pay, and Google Pay are universally accepted in 95% of restaurants, beach clubs, and hotels.",
      highlights: ["Contactless payments supported everywhere", "Pay in TRY at card machines for best rates", "Keep ₺200 cash for dolmuş minibuses and bazaars"]
    },
    {
      title: "Can you take a ferry to Greek Islands?",
      directAnswer: "Yes! High-speed passenger catamarans operate from D-Marin Didim International Port directly to Kos Island (Greece) in 45 minutes with Fast-Track Greek Visa-on-Arrival.",
      highlights: ["Daily morning departures in summer (May-Oct)", "Direct day trips to Kos Old Town & Hippocrates Tree", "Valid passport with 6 months validity required"]
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>AEO & Traveler Key Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Essential Facts & Instant Answers for Travelers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Verified local insights summarized for visitors, trip planners, and search engines.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 text-xs text-slate-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Geo Coordinates: 37.3620° N, 27.2764° E (Aydın, TR)</span>
          </div>
        </div>

        {/* 6 Fast Answer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {answerBlocks.map((block, idx) => (
            <article
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/80 transition-all flex flex-col justify-between"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-bold text-base mb-2">
                  <HelpCircle className="w-4 h-4 text-sky-500 shrink-0" />
                  <h3 itemProp="name">{block.title}</h3>
                </div>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-sky-50/50 p-3 rounded-xl border border-sky-100 mb-3">
                    {block.directAnswer}
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                {block.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

