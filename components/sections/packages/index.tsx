"use client";

import { CalendarDays, PlaneTakeoff, PlaneLanding, IndianRupee, Quote } from "lucide-react";

const departures = [
  { duration: "20 DAYS", dep: "04 Sep 2026", arr: "23 Sep 2026", price: "87,000", airline: "Air India" },
  { duration: "17 DAYS", dep: "25 Sep 2026", arr: "11 Oct 2026", price: "87,000", airline: "Air India" },
  { duration: "20 DAYS", dep: "13 Oct 2026", arr: "01 Nov 2026", price: "87,000", airline: "IndiGo" },
  { duration: "20 DAYS", dep: "20 Oct 2026", arr: "08 Nov 2026", price: "87,000", airline: "IndiGo" },
  { duration: "20 DAYS", dep: "10 Nov 2026", arr: "29 Nov 2026", price: "87,000", airline: "IndiGo" },
  { duration: "20 DAYS", dep: "24 Nov 2026", arr: "12 Dec 2026", price: "87,000", airline: "IndiGo" },
  { duration: "17 DAYS", dep: "30 Nov 2026", arr: "15 Dec 2026", price: "87,000", airline: "IndiGo" },
];

export function Packages() {
  return (
    <section id="packages" className="relative flex flex-col bg-zinc-50 border-b-hairline py-28 overflow-hidden">
      <div className="px-5 md:px-10 max-w-7xl mx-auto w-full">
        {/* Section label */}
        <div className="label-mono text-[var(--muted)] mb-8">
          03 — UPCOMING DEPARTURES · ECONOMY PACKAGE
        </div>

        {/* Headline & Quote */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="display-md font-semibold leading-[0.95] tracking-tight mb-6">
              <span className="block text-zinc-900">A Journey of Faith.</span>
              <span className="block font-light italic text-[var(--muted)]">
                A Lifetime of Reward.
              </span>
            </h2>
            <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
              Transparent scheduling. No hidden fees. We believe in providing complete clarity before your spiritual journey begins.
            </p>
          </div>
          
          <div className="max-w-xs md:max-w-sm relative">
            <Quote className="absolute -top-4 -left-6 w-10 h-10 text-[var(--green)] opacity-20" />
            <p className="text-xl font-light italic text-zinc-700 leading-snug">
              "And whoever fears Allah, He will make for him a way out."
            </p>
            <p className="mt-3 text-sm font-bold text-zinc-500 uppercase tracking-widest">(Quran 65:2)</p>
          </div>
        </div>

        {/* Departure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
          {departures.map((item, index) => (
            <div key={index} className="bg-white hover:bg-zinc-50 transition-colors duration-300 p-8 flex flex-col group relative overflow-hidden">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--green)] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-8">
                <span className="bg-zinc-100 text-zinc-800 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                  {item.duration}
                </span>
                <span className="text-xs font-bold tracking-widest text-[var(--green)] uppercase">
                  {item.airline}
                </span>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-4">
                  <PlaneTakeoff className="w-5 h-5 text-[var(--muted)]" />
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-0.5">DEP (PATNA)</div>
                    <div className="text-base font-semibold text-zinc-900">{item.dep}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <PlaneLanding className="w-5 h-5 text-[var(--muted)]" />
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase mb-0.5">ARR (RETURN)</div>
                    <div className="text-base font-semibold text-zinc-900">{item.arr}</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[var(--green)] tracking-widest uppercase mb-1">TOTAL PRICE</div>
                  <div className="flex items-start">
                    <IndianRupee className="w-5 h-5 mt-1 mr-0.5 text-zinc-900" />
                    <span className="text-4xl font-bold tracking-tight text-zinc-900 leading-none">{item.price}/-</span>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Call to action card filling the 8th slot */}
          <div className="bg-[var(--green)] text-white p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Reserve?</h3>
            <p className="text-sm opacity-90 mb-8 max-w-xs">
              Contact our Patna office immediately to reserve your seat for any of these upcoming dates.
            </p>
            <a href="tel:8210040715" className="bg-white text-[var(--green)] font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-zinc-100 transition-colors w-full">
              CALL +91 8210040715
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
