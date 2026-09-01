"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navigation, Utensils, Users, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function BentoFeatures() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bentoCards = gsap.utils.toArray(".bento-card");
    bentoCards.forEach((card: any) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, { scope: container });

  return (
    <section ref={container} id="features" className="py-32 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="display-lg font-bold mb-6 tracking-tight leading-[0.95] text-[var(--foreground)]">
            Everything you need.
          </h2>
          <p className="text-xl text-[var(--muted)] font-medium">
            Our Economy package is engineered to provide comfort without the premium price tag. No hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 (Spans 2 columns) */}
          <div className="bento-card md:col-span-2 p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <Navigation className="w-10 h-10 text-[var(--green)] mb-6" />
              <h3 className="font-bold text-3xl mb-4 text-[var(--foreground)]">Zero Commute Stress.</h3>
              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-lg">
                In Makkah, you stay at Al Hijaz Al Masi, just 1200m from the Haram. In Madinah, Al Asala Al Bakiya is only 900m away. You won't waste energy on long buses.
              </p>
            </div>
            <div className="mt-12 inline-flex items-center gap-4 px-6 py-4 bg-zinc-50 border border-zinc-200 self-start">
              <div className="relative w-12 h-6 bg-[var(--green)] rounded-full">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-6" />
              </div>
              <span className="font-bold text-sm text-[var(--foreground)] uppercase tracking-widest">Walkable</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bento-card p-10 lg:p-14">
            <Utensils className="w-10 h-10 text-[var(--green)] mb-6" />
            <h3 className="font-bold text-3xl mb-4 text-[var(--foreground)]">Meals Included.</h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              Three hearty, traditional Indian meals served daily. Breakfast, lunch, and dinner are entirely covered.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bento-card p-10 lg:p-14">
            <CheckCircle2 className="w-10 h-10 text-[var(--green)] mb-6" />
            <h3 className="font-bold text-3xl mb-4 text-[var(--foreground)]">No Hidden Fees.</h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
              ₹87,000 covers everything from Visa stamping to local Ziyarat transport and Zam Zam water.
            </p>
            <div className="border border-[var(--border)] bg-zinc-50 p-6 font-mono text-sm space-y-2">
              <div className="text-[var(--green)] font-medium">✓ Visa Processing</div>
              <div className="text-[var(--green)] font-medium">✓ Premium Flights</div>
              <div className="text-[var(--green)] font-medium">✓ Laundry Service</div>
            </div>
          </div>

          {/* Feature 4 (Spans 2 columns) */}
          <div className="bento-card md:col-span-2 p-10 lg:p-14 flex flex-col justify-between bg-white border border-zinc-200">
             <div>
              <Users className="w-10 h-10 text-[var(--green)] mb-6" />
              <h3 className="font-bold text-3xl mb-4 text-[var(--foreground)]">Guided by Scholars.</h3>
              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-lg">
                Our experienced team from Patna travels with you. We handle the paperwork, border controls, and check-ins, so you are never left alone in a foreign country.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
