'use client';

import React from 'react';
import { Plane, Bus, Sun, ShieldAlert, CreditCard, Thermometer, PhoneCall, Compass, CheckCircle2 } from 'lucide-react';

export default function TravelGuideAndTransport() {
  const climateData = [
    { month: 'May', air: '25°C / 77°F', sea: '21°C', sun: '11 hrs/day', status: 'Warm & Quiet' },
    { month: 'Jun', air: '30°C / 86°F', sea: '24°C', sun: '13 hrs/day', status: 'Sunny & Ideal' },
    { month: 'Jul', air: '35°C / 95°F', sea: '26°C', sun: '14 hrs/day', status: 'Peak Beach Season' },
    { month: 'Aug', air: '36°C / 97°F', sea: '27°C', sun: '13 hrs/day', status: 'Vibrant & Warm' },
    { month: 'Sep', air: '31°C / 88°F', sea: '25°C', sun: '11 hrs/day', status: 'Golden Sweet Spot' },
    { month: 'Oct', air: '26°C / 79°F', sea: '23°C', sun: '9 hrs/day', status: 'Mild & Pleasant' },
  ];

  return (
    <section id="travel-guide" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Essential Travel & Transport Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How to Reach & Navigate Didim
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Everything you need to know about airport transfers, local Dolmuş minibuses, seasonal weather, and emergency contacts.
          </p>
        </div>

        {/* 3 Pillars: Airports, Dolmuş, Practical Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Airport Transfers */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-6 shadow-md shadow-sky-600/20">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Airport Transfers
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Two modern international airports serve Didim & Altınkum with frequent direct UK and European flights:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-sm text-slate-900">Milas-Bodrum (BJV)</strong>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Closest</span>
                  </div>
                  <p className="text-xs text-slate-600">85 km away (approx. 60 mins drive). Private VIP transfers, taxis, or shared shuttles.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-sm text-slate-900">Izmir Adnan Menderes (ADB)</strong>
                    <span className="text-xs bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">Major Hub</span>
                  </div>
                  <p className="text-xs text-slate-600">140 km away (approx. 90 mins drive). Direct HAVAŞ airport shuttle bus departs to Didim terminal.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              💡 Tip: Pre-booked private transfers take you directly to your hotel door.
            </div>
          </div>

          {/* Local Dolmuş & Getting Around */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 shadow-md shadow-amber-500/20">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Local Dolmuş Minibuses
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                The friendly local minibus (<em>Dolmuş</em>) network is the easiest and most economical way to move around:
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Altınkum ⇄ Didim Town Center:</strong> Runs every 5 minutes along the main boulevard.
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Altınkum ⇄ Temple of Apollo:</strong> Regular direct service dropping off right at the temple gate.
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Altınkum ⇄ Akbük & D-Marin:</strong> Minibuses departing every 15–20 minutes.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              💵 Fares: Inexpensive cash or contactless card payment accepted on board.
            </div>
          </div>

          {/* Practical Tips & Emergency */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/20">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Practical Info & Safety
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Useful local details for smooth holiday planning in Türkiye:
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-0.5">Currency & Cards:</strong>
                  <span>Turkish Lira (TRY). British Pounds (£) and Euros (€) widely accepted; Visa & Mastercard everywhere.</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-0.5">Emergency Number:</strong>
                  <span className="font-bold text-rose-600">Dial 112</span> for Ambulance, Police (Polis), and Gendarmerie.
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-0.5">Health & Tourism Care:</strong>
                  <span>Didim State Hospital & English-speaking private clinics with travel insurance coverage.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
              🔌 Power: European Type C/F 230V plugs.
            </div>
          </div>
        </div>

        {/* Climate & Season Table */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sun className="w-4 h-4" />
                <span>300+ Days of Aegean Sunshine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Monthly Climate & Sea Temperatures in Didim
              </h3>
            </div>
            <span className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-slate-300 font-medium">
              Therapeutic Low Humidity Zone
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4">Month</th>
                  <th className="py-3 px-4">Average Air Temp</th>
                  <th className="py-3 px-4">Sea Temp</th>
                  <th className="py-3 px-4">Sunshine</th>
                  <th className="py-3 px-4">Vibe & Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {climateData.map((row) => (
                  <tr key={row.month} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.month}</td>
                    <td className="py-3.5 px-4 text-amber-300 font-semibold">{row.air}</td>
                    <td className="py-3.5 px-4 text-cyan-300 font-semibold">{row.sea}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.sun}</td>
                    <td className="py-3.5 px-4 text-slate-200">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
