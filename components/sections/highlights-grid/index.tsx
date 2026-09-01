"use client";

import { Plane, MapPin, IndianRupee, Calendar, Utensils, Phone, Star } from "lucide-react";

const items = [
  { text: "PATNA → JEDDAH → MAKKAH", icon: Plane },
  { text: "ECONOMY PACKAGE · ₹87,000", icon: IndianRupee },
  { text: "PREMIUM FLIGHTS", icon: Star },
  { text: "SEP–DEC 2026 DEPARTURES", icon: Calendar },
  { text: "1200M FROM HARAM", icon: MapPin },
  { text: "900M FROM NABAWI", icon: MapPin },
  { text: "MEALS & ZAM ZAM INCLUDED", icon: Utensils },
  { text: "CALL +91 8210040715", icon: Phone },
];

export function HighlightsGrid() {
  return (
    <div className="border-b-hairline bg-[var(--border)] p-[1px] relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 md:p-8 gap-4 bg-[var(--background)] hover:bg-[var(--card)] transition-colors">
            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--green)]" strokeWidth={1.5} />
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-[var(--foreground)] uppercase leading-relaxed">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
