"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Accommodations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal-line");
      lines?.forEach((line) => {
        const span = line.querySelector<HTMLElement>("span");
        if (!span) return;
        gsap.fromTo(
          span,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: line, start: "top 88%" },
          }
        );
      });

      gsap.fromTo(
        ".hotel-tile",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: { trigger: ".hotels-grid", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accommodations"
      ref={sectionRef}
      className="min-h-svh flex flex-col justify-center
                 pt-28 pb-20 px-5 md:px-10
                 bg-[var(--background)] border-b-hairline"
    >
      {/* Section label */}
      <div className="label-mono text-[var(--muted)] mb-8">
        <span className="reveal-line">
          <span>03 — ACCOMMODATIONS · VERIFIED HOLY CITY STAYS</span>
        </span>
      </div>

      {/* Headline */}
      <div className="mb-14 md:mb-20 max-w-3xl">
        <h2 className="display-lg font-semibold leading-[0.95] tracking-tight">
          <span className="reveal-line block">
            <span>Sanctuary in Makkah</span>
          </span>
          <span className="reveal-line block">
            <span className="font-light italic text-[var(--muted)]">
              & Madinah al-Munawwarah.
            </span>
          </span>
        </h2>
        <p className="mt-8 text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-2xl">
          Both hotels are carefully selected for proximity to the Holy Mosques,
          cleanliness, and continuous transport options. Distance matters. We chose well.
        </p>
      </div>

      <div className="border-t-hairline mb-0" />

      {/* Hotel tiles — gap-px, horizontal on desktop, stacked on mobile */}
      <div
        className="hotels-grid grid md:grid-cols-2 bg-[var(--border)]"
        style={{ gap: "1px" }}
      >
        {/* Makkah */}
        <div className="hotel-tile bg-[var(--card)] flex flex-col p-8 md:p-12">
          <div className="label-mono text-[var(--muted)] mb-8">MAKKAH AL-MUKARRAMAH</div>

          <div className="flex-1">
            <h3 className="font-sans font-semibold text-3xl md:text-4xl leading-tight mb-4">
              Al Asala Al Bakiya
            </h3>

            <div className="border-t-hairline my-6" />

            {/* Distance metric — big editorial number */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono font-light text-5xl md:text-7xl text-[var(--foreground)]">
                1200
              </span>
              <div>
                <div className="label-mono text-[var(--muted)]">METRES</div>
                <div className="label-mono text-[var(--muted)]">FROM HARAM</div>
              </div>
            </div>

            <p className="text-base text-[var(--muted)] font-light leading-relaxed">
              Round-the-clock continuous bus transport takes pilgrims directly to
              the Haram perimeter. Rest in clean, spacious rooms between Tawaf and prayers.
            </p>
          </div>

          <div className="border-t-hairline mt-10 pt-6">
            <div className="label-mono text-[var(--accent)]">
              24/7 CONTINUOUS SHUTTLE BUS — INCLUDED
            </div>
          </div>
        </div>

        {/* Madinah */}
        <div className="hotel-tile bg-[var(--card)] flex flex-col p-8 md:p-12">
          <div className="label-mono text-[var(--muted)] mb-8">MADINAH AL-MUNAWWARAH</div>

          <div className="flex-1">
            <h3 className="font-sans font-semibold text-3xl md:text-4xl leading-tight mb-4">
              Al Hijaz Al Masi
            </h3>

            <div className="border-t-hairline my-6" />

            {/* Distance metric */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono font-light text-5xl md:text-7xl text-[var(--foreground)]">
                900
              </span>
              <div>
                <div className="label-mono text-[var(--muted)]">METRES</div>
                <div className="label-mono text-[var(--muted)]">FROM NABAWI</div>
              </div>
            </div>

            <p className="text-base text-[var(--muted)] font-light leading-relaxed">
              A short, comfortable walking distance from Masjid an-Nabawi — the Prophet's Mosque.
              Experience peace and tranquility with easy access for all daily prayers.
            </p>
          </div>

          <div className="border-t-hairline mt-10 pt-6">
            <div className="label-mono text-[var(--accent)]">
              900M PEDESTRIAN WALKWAY — INCLUDED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
