'use client';

import React from 'react';
import Image from 'next/image';
import { Compass, Ship, Anchor, Sparkles, Mountain, Clock, Check, ArrowUpRight } from 'lucide-react';

export default function DayTripsAndActivities() {
  const activities = [
    {
      title: "Daily Didim 5-Bays Wooden Gulet Cruise",
      badge: "Top Rated Activity",
      image: "/images/boat-trip.jpg",
      duration: "Full Day (10:00 - 17:00)",
      description: "Sail on a handcrafted wooden Turkish Gulet departing from Altınkum harbor. Anchor in crystal-clear turquoise bays (Paradise Bay, Aquarium Bay, Dalyanaki) with swimming, snorkeling, and a fresh grilled lunch served on deck.",
      highlights: ["5 secluded swimming stops", "Fresh lunch included (Fish/Chicken & Pasta)", "Snorkeling gear & sun loungers on deck"]
    },
    {
      title: "Aegean Scuba Diving & Snorkeling Expeditions",
      badge: "PADI Certified",
      image: "/images/d-marin-didim-marina.jpg",
      duration: "Half / Full Day",
      description: "Explore the vibrant underwater reefs of the Aegean. Featuring warm water, underwater caverns, and up to 30 meters of clear visibility, suitable for both beginners and certified divers.",
      highlights: ["Beginner Discovery Dives", "PADI & CMAS Certification courses", "Undersea photography & equipment provided"]
    },
    {
      title: "Ephesus & Sirince Village Day Trip",
      badge: "World Heritage",
      image: "/images/temple-apollo.jpg",
      duration: "Full Day Excursion (1.5 hrs drive)",
      description: "Visit the grand Greco-Roman city of Ephesus (Library of Celsus, Great Theater) and the sacred House of the Virgin Mary, followed by fruit wine tasting in the picturesque hillside village of Şirince.",
      highlights: ["UNESCO World Heritage Site", "Licensed English-speaking tour guide", "Comfortable air-conditioned coach transfer"]
    },
    {
      title: "Lake Bafa & Latmos Rock Art Expedition",
      badge: "Nature & Prehistory",
      image: "/images/boat-trip.jpg",
      duration: "Half Day (25 mins drive)",
      description: "Hike through mystical granite boulder landscapes overlooking ancient Lake Bafa. Discover 8,000-year-old Neolithic cave paintings, Byzantine island castles, and authentic village hospitality.",
      highlights: ["Rare birdwatching (pelicans, flamingos)", "Traditional Kapıkırı village breakfast", "Ancient Heraclea city ruins"]
    }
  ];

  return (
    <section id="day-trips" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Ship className="w-4 h-4 text-cyan-600" />
            <span>Excursions & Sea Adventures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Unforgettable Day Trips & Aegean Adventures
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you want to cruise pristine turquoise bays on a wooden boat or discover world wonder ruins within 90 minutes.
          </p>
        </div>

        {/* 2x2 Grid of Top Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              <div className="relative sm:w-2/5 min-h-[220px] sm:min-h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-sky-600 font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
