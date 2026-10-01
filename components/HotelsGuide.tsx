'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HOTELS_DATA, HotelItem } from '@/data/altinkum-data';
import { Hotel, Star, MapPin, Check, ExternalLink, Shield, MessageSquare, Eye, X } from 'lucide-react';
import { trackOutboundClick, trackEvent } from '@/lib/analytics';

export default function HotelsGuide() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Ultra Luxury' | 'Beachfront' | 'Marina & Boutique' | 'Family Resort'>('All');
  const [activeHotelModal, setActiveHotelModal] = useState<HotelItem | null>(null);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState<number>(0);

  const filteredHotels = HOTELS_DATA.filter((hotel) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Ultra Luxury') return hotel.category === 'Ultra Luxury';
    if (selectedCategory === 'Beachfront') return hotel.category === 'Beachfront';
    if (selectedCategory === 'Marina & Boutique') return hotel.category === 'Marina & Boutique';
    if (selectedCategory === 'Family Resort') return hotel.category === 'Family Resort';
    return true;
  });

  const handleHotelWebsiteClick = (hotelName: string, url: string) => {
    trackOutboundClick('hotel', hotelName, url);
  };

  const handleHotelMapsClick = (hotelName: string, url: string) => {
    trackOutboundClick('hotel', `${hotelName} (Google Maps)`, url);
  };

  const handleWhatsAppInquiry = (hotelName: string) => {
    trackEvent('reachout_whatsapp_hotel', {
      hotel_name: hotelName,
      source: 'hotels_guide_section'
    });
    const encoded = encodeURIComponent(`Hello, I would like hotel recommendations, transfers, or booking info for ${hotelName} in Didim (via GoToAltinkum.com)`);
    window.open(`https://wa.me/905374909095?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenModal = (hotel: HotelItem) => {
    setActiveHotelModal(hotel);
    setActiveModalImageIdx(0);
  };

  return (
    <section id="hotels" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Hotel className="w-4 h-4 text-amber-600" />
            <span>Luxury & Beachfront Accommodations</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Top Luxury Resorts, Marina &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600">
              Beachfront Hotels
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base md:text-lg">
            From the newly opened ultra-luxury sanctuaries of <strong>Anda Barut Collection</strong> and <strong>Akra Didim</strong>, to superyacht marina suites and 5-star all-inclusive beachfront resorts.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {[
              { key: 'All', label: '🏨 All Hotels (6)' },
              { key: 'Ultra Luxury', label: '💎 Ultra Luxury' },
              { key: 'Marina & Boutique', label: '🛥️ Marina & Boutique' },
              { key: 'Beachfront', label: '🏖️ Beachfront' },
              { key: 'Family Resort', label: '👨‍👩‍👧 Family Resort' },
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => setSelectedCategory(btn.key as any)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold transition-all ${
                  selectedCategory === btn.key
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredHotels.map((hotel) => (
            <article
              key={hotel.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={hotel.image}
                  alt={`${hotel.name} in Didim Türkiye`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2">
                  <span className="bg-sky-600/90 text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg backdrop-blur-md">
                    {hotel.badge}
                  </span>
                  <span className="bg-amber-500 text-white text-[11px] sm:text-xs font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow">
                    {hotel.priceRange}
                  </span>
                </div>

                {/* Stars and Title on image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] sm:text-xs text-slate-300 font-semibold ml-1">{hotel.rating}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-md">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1.5 sm:mb-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium truncate">{hotel.location}</span>
                  </div>

                  <p className="text-xs text-amber-600 font-semibold italic mb-2">
                    "{hotel.tagline}"
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                    {hotel.description}
                  </p>

                  {/* Highlights with check */}
                  <div className="space-y-1.5 mb-3 sm:mb-4">
                    {hotel.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-slate-100">
                    {hotel.features.slice(0, 3).map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 sm:px-2.5 py-0.5 rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    <a
                      href={hotel.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleHotelWebsiteClick(hotel.name, hotel.websiteUrl)}
                      className="py-2.5 px-2.5 sm:px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs text-center shadow-xs flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Official Website</span>
                      <ExternalLink className="w-3 h-3 opacity-75" />
                    </a>

                    <button
                      onClick={() => handleOpenModal(hotel)}
                      className="py-2.5 px-2.5 sm:px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>Details & Photos</span>
                    </button>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(hotel.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                    <span>Inquire / Transfer Booking (WhatsApp)</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Hotel Detail Modal */}
      {activeHotelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveHotelModal(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm sm:text-lg transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-sky-100 text-sky-800 text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 pr-6">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
              <span>{activeHotelModal.badge}</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1">
              {activeHotelModal.name}
            </h3>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-500 mb-3 sm:mb-4">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{activeHotelModal.location}</span>
              <span>•</span>
              <div className="flex items-center gap-1 text-amber-600 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{activeHotelModal.rating} ({activeHotelModal.reviewsCount})</span>
              </div>
            </div>

            {/* Modal Image Gallery */}
            <div className="relative h-52 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3 bg-slate-900 shadow-md">
              <Image
                src={activeHotelModal.galleryImages?.[activeModalImageIdx] || activeHotelModal.image}
                alt={`${activeHotelModal.name} view in Didim`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>

            {activeHotelModal.galleryImages && activeHotelModal.galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {activeHotelModal.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModalImageIdx(idx)}
                    className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeModalImageIdx === idx
                        ? 'border-sky-500 ring-2 ring-sky-300 scale-[1.02]'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Hotel photo ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </button>
                ))}
              </div>
            )}

            <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              {activeHotelModal.description}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="bg-sky-50/70 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-sky-100">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-sky-900 tracking-wider mb-2">
                  Key Amenities & Highlights:
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {activeHotelModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase text-slate-600 tracking-wider mb-2">
                  Hotel Features:
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {activeHotelModal.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] sm:text-xs bg-slate-100 text-slate-800 font-semibold px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
              <a
                href={activeHotelModal.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleHotelWebsiteClick(activeHotelModal.name, activeHotelModal.websiteUrl)}
                className="w-full sm:w-1/2 py-2.5 sm:py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-center text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href={activeHotelModal.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleHotelMapsClick(activeHotelModal.name, activeHotelModal.googleMapsUrl)}
                className="w-full sm:w-1/2 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-center text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
