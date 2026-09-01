"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, ShieldAlert, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Story() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".scroll-card");
    if (scrollSectionRef.current) {
      ScrollTrigger.create({
        trigger: scrollSectionRef.current,
        start: "top top",
        end: "+=80%",
        pin: true,
      });

      cards.forEach((card: any, i: number) => {
        if (i === 0) return;
        gsap.from(card, {
          y: () => window.innerHeight,
          ease: "none",
          scrollTrigger: {
            trigger: scrollSectionRef.current,
            start: () => `top+=${(i - 1) * 40}% top`,
            end: () => `top+=${i * 80}% top`,
            scrub: true,
          }
        });
      });
    }
  }, { scope: scrollSectionRef });

  return (
    <section ref={scrollSectionRef} className="w-full h-[100dvh] bg-zinc-50 relative overflow-hidden border-b-hairline border-t-hairline">

      {/* ─── CARD 1: The Worry (Chaos) ─── */}
      <div className="scroll-card absolute inset-0 w-full h-full bg-zinc-50 flex items-center justify-center p-6 border-b-hairline overflow-y-auto z-10">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center py-24 my-auto">
          <div>
            <h2 className="display-lg font-bold mb-6 tracking-tight leading-none text-zinc-300">
              The <span className="text-zinc-900">Worry</span>
            </h2>
            <p className="text-xl text-zinc-600 font-medium">
              You are traveling thousands of miles for a deeply spiritual journey. You shouldn't have to stress about visa applications, hotel distances, or finding safe transportation.
            </p>
          </div>
          <div className="w-full flex flex-col gap-6 py-4 px-4 md:px-0">
            {/* Mockup 1 */}
            <div className="w-[95%] md:w-[85%] self-start bg-white border border-zinc-200 overflow-hidden z-10 p-6 flex flex-col gap-4 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 text-[var(--muted)] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-lg">Hotel is too far</p>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed">Walking 4km every day in the heat drains the energy you need for prayer.</p>
                </div>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="w-[95%] md:w-[85%] self-end bg-white border border-zinc-200 overflow-hidden z-20 p-6 flex flex-col gap-4 relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 text-[var(--muted)] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-lg">Hidden Costs</p>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed">Suddenly paying extra for food, laundry, and local ziyarat transport.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CARD 2: The Devotion (Solution) ─── */}
      {/* Black shadow removed, border-t-hairline added */}
      <div className="scroll-card absolute inset-0 w-full h-full bg-[var(--background)] flex items-center justify-center p-6 border-t-hairline overflow-y-auto z-20">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center py-24 my-auto">

          <div className="order-2 md:order-1 bg-zinc-50 p-8 md:p-12 border border-zinc-200 flex flex-col justify-center">
            <Heart className="w-12 h-12 mb-8 text-[var(--green)]" />

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[var(--background)] border border-zinc-200 p-4">
                <Check className="w-6 h-6 text-[var(--green)]" />
                <p className="font-medium text-lg text-[var(--foreground)]">Flights & Visas Handled</p>
              </div>
              <div className="flex items-center gap-4 bg-[var(--background)] border border-zinc-200 p-4">
                <Check className="w-6 h-6 text-[var(--green)]" />
                <p className="font-medium text-lg text-[var(--foreground)]">Hotels near the Haram</p>
              </div>
              <div className="flex items-center gap-4 bg-[var(--background)] border border-zinc-200 p-4">
                <Check className="w-6 h-6 text-[var(--green)]" />
                <p className="font-medium text-lg text-[var(--foreground)]">Food & Laundry Included</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="display-lg font-bold mb-6 tracking-tight leading-none text-[var(--border)]">
              The <span className="text-[var(--green)]">Devotion</span>
            </h2>
            <p className="text-xl text-[var(--muted)] font-medium">
              We manage the entire logistical chain. From the moment you leave Patna until you return, you can dedicate 100% of your energy to prayer.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
