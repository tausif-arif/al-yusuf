"use client";

import { useEffect, useRef } from "react";
import { Plane, Building, Utensils, Bus, Shirt, Users, Droplets, Car, FileCheck } from "lucide-react";

export function Inclusions() {
  return (
    <section
      id="inclusions"
      className="relative flex flex-col bg-[var(--background)] border-b-hairline overflow-hidden pt-28"
    >
      <div className="px-5 md:px-10 max-w-7xl mx-auto w-full">
        {/* Section label */}
        <div className="label-mono text-[var(--muted)] mb-8">
          04 — INCLUSIONS · EVERY ITEM COVERED
        </div>

        {/* Headline + body side by side on desktop */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="display-md font-semibold leading-[0.95] tracking-tight max-w-xl">
            <span className="block">Nothing extra.</span>
            <span className="block font-light italic text-[var(--muted)]">
              Everything included.
            </span>
          </h2>
          <p className="max-w-sm text-base text-[var(--muted)] font-light leading-relaxed">
            ₹87,000/- is not a starting price. It is the final number. Every
            service listed below is part of the economy package.
          </p>
        </div>
      </div>

      {/* Architectural Bento Grid */}
      <div className="w-full bg-[var(--background)] py-10">
        <div className="px-5 md:px-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
            
            {/* Large card 1: Travel */}
            <div className="col-span-1 md:col-span-2 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-10 md:p-16 flex flex-col min-h-[320px] group">
              <div className="flex items-center gap-4 text-[var(--green)] mb-auto">
                <Plane strokeWidth={1.5} className="w-8 h-8" />
                <FileCheck strokeWidth={1.5} className="w-8 h-8 opacity-50" />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--foreground)] tracking-tight">
                Flights & Visa
              </h3>
              <p className="text-lg text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-500">
                Guaranteed premium return tickets and complete Umrah visa processing handled entirely by our experts.
              </p>
            </div>

            {/* Large card 2: Hotels */}
            <div className="col-span-1 md:col-span-2 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-10 md:p-16 flex flex-col min-h-[320px] group">
              <div className="flex items-center gap-4 text-[var(--green)] mb-auto">
                <Building strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[var(--foreground)] tracking-tight">
                Sacred Sanctuaries
              </h3>
              <p className="text-lg text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-500">
                Premium accommodation at Al Asala Al Bakiya (1200m from Haram) and Al Hijaz Al Masi (900m from Nabawi).
              </p>
            </div>

            {/* Standard card: Meals */}
            <div className="col-span-1 md:col-span-1 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col min-h-[240px] group">
              <Utensils strokeWidth={1.5} className="w-6 h-6 text-[var(--green)] mb-8" />
              <div className="mt-auto">
                <h4 className="text-xl font-medium text-[var(--foreground)] mb-2">Three Meals Daily</h4>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  Fresh Indian cuisine served throughout your entire stay.
                </p>
              </div>
            </div>
            
            {/* Standard card: Transport */}
            <div className="col-span-1 md:col-span-1 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col min-h-[240px] group">
              <Bus strokeWidth={1.5} className="w-6 h-6 text-[var(--green)] mb-8" />
              <div className="mt-auto">
                <h4 className="text-xl font-medium text-[var(--foreground)] mb-2">AC Transport</h4>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  Comfortable intercity travel between Jeddah, Makkah, and Madinah.
                </p>
              </div>
            </div>

            {/* Standard card: Laundry */}
            <div className="col-span-1 md:col-span-1 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col min-h-[240px] group">
              <Shirt strokeWidth={1.5} className="w-6 h-6 text-[var(--green)] mb-8" />
              <div className="mt-auto">
                <h4 className="text-xl font-medium text-[var(--foreground)] mb-2">Laundry Service</h4>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  Professional laundry service covering your complete stay.
                </p>
              </div>
            </div>

            {/* Standard card: Escort */}
            <div className="col-span-1 md:col-span-1 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col min-h-[240px] group">
              <Users strokeWidth={1.5} className="w-6 h-6 text-[var(--green)] mb-8" />
              <div className="mt-auto">
                <h4 className="text-xl font-medium text-[var(--foreground)] mb-2">Group Escort</h4>
                <p className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                  Dedicated Al Yusuf team guidance through every spiritual ritual.
                </p>
              </div>
            </div>

            {/* Medium card: Transfers */}
            <div className="col-span-1 md:col-span-2 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
              <div className="flex items-center gap-6">
                <Car strokeWidth={1.5} className="w-8 h-8 text-[var(--green)] shrink-0" />
                <div>
                  <h4 className="text-2xl font-medium text-[var(--foreground)] mb-1">Airport Transfers</h4>
                  <p className="text-base text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                    All arrival and departure legs perfectly coordinated.
                  </p>
                </div>
              </div>
            </div>

            {/* Medium card: Zam Zam */}
            <div className="col-span-1 md:col-span-2 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-500 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
              <div className="flex items-center gap-6">
                <Droplets strokeWidth={1.5} className="w-8 h-8 text-[var(--green)] shrink-0" />
                <div>
                  <h4 className="text-2xl font-medium text-[var(--foreground)] mb-1">5L Zam Zam Water</h4>
                  <p className="text-base text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                    A sealed bottle of sacred water provided for your return home.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom callout */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pb-20 pt-20">
        <div className="grid md:grid-cols-2 bg-[var(--border)] border border-[var(--border)]" style={{ gap: "1px" }}>
          <div className="bg-[var(--green)] text-[var(--background)] p-8">
            <div className="label-mono text-[var(--background)]/70 mb-4">TOTAL PRICE</div>
            <div className="font-sans font-semibold text-5xl tracking-tight">
              ₹87,000/-
            </div>
            <div className="label-mono text-[var(--background)]/70 mt-3">ALL-INCLUSIVE · NO HIDDEN CHARGES</div>
          </div>
          <div className="bg-[var(--card)] p-8 flex flex-col justify-between">
            <div className="label-mono text-[var(--muted)] mb-4">SEATS ARE LIMITED</div>
            <p className="text-[var(--muted)] font-light leading-relaxed text-base mb-6">
              Each departure date has a fixed group size. Contact our Patna office
              immediately to reserve your seat before it fills.
            </p>
            <a
              href="tel:8210040715"
              className="inline-block border-hairline px-6 py-3 label-mono text-[var(--foreground)]
                         transition-colors duration-300 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--green-text)]"
            >
              CALL +91 8210040715
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
