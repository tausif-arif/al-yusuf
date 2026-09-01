"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, FileCheck, PlaneTakeoff, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Consultation",
    sub: "Select Your Departure",
    content:
      "Browse our 7 departure windows (Sep – Dec 2026). Visit our Patna office, submit passport copies, and pay the deposit to lock your seat.",
    icon: Phone,
  },
  {
    num: "02",
    title: "Visa & Flights",
    sub: "Full Admin Handling",
    content:
      "We process the complete Umrah visa. Once approved, confirmed return tickets on premium airlines and full travel documents are issued.",
    icon: FileCheck,
  },
  {
    num: "03",
    title: "Group Departure",
    sub: "Guided Airport Transfers",
    content:
      "Gather on departure day. Our team assists through check-in. On arrival, luxury coaches take you directly to your Makkah hotel.",
    icon: PlaneTakeoff,
  },
  {
    num: "04",
    title: "The Pilgrimage",
    sub: "Complete Peace of Mind",
    content:
      "Perform Umrah rituals with group guidance. Enjoy 3 fresh meals daily, laundry, Ziyarat, and receive sealed Zam Zam water on return.",
    icon: HeartHandshake,
  },
];

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title reveal
      const lines = containerRef.current?.querySelectorAll<HTMLElement>(".reveal-line");
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

      // 2. The glowing timeline scrub
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          }
        });
      }

      // 3. Cards slide in and dots glow
      const cards = gsap.utils.toArray<HTMLElement>(".step-card");
      cards.forEach((card) => {
        const dot = card.querySelector(".step-dot");
        const content = card.querySelector(".card-content");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 60%", // Triggers when the top of the card is at 60% of viewport
            toggleActions: "play none none reverse", // play down, reverse up
          }
        });
        
        tl.to(dot, { 
            backgroundColor: "var(--green)", 
            scale: 1.3, 
            duration: 0.4, 
            ease: "back.out(1.7)" 
          })
          .fromTo(content, 
            { x: 40, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
            "-=0.2"
          );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="min-h-svh flex flex-col justify-center
                 pt-28 pb-32 px-5 md:px-10
                 bg-[var(--background)] border-b-hairline overflow-hidden"
    >
      {/* Section label */}
      <div className="label-mono text-[var(--muted)] mb-8 max-w-5xl mx-auto w-full">
        <span className="reveal-line block overflow-hidden">
          <span className="block">05 — PROCESS · HOW YOUR JOURNEY UNFOLDS</span>
        </span>
      </div>

      {/* Headline */}
      <div className="mb-14 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-5xl mx-auto w-full">
        <h2 className="display-md font-semibold leading-[0.95] tracking-tight">
          <span className="reveal-line block overflow-hidden pb-1">
            <span className="block">From Patna</span>
          </span>
          <span className="reveal-line block overflow-hidden pb-1">
            <span className="block">to the Holy Cities.</span>
          </span>
          <span className="reveal-line block overflow-hidden pb-1">
            <span className="block font-light italic text-[var(--muted)]">
              Step by step.
            </span>
          </span>
        </h2>
        <p className="max-w-xs text-base text-[var(--muted)] font-light leading-relaxed">
          Every milestone — from first contact to return home — is managed by Al Yusuf.
          You focus on the pilgrimage. We handle everything else.
        </p>
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="timeline-container relative w-full max-w-4xl mx-auto">
        
        {/* Track Line (Gray) */}
        <div className="absolute left-[11px] md:left-[15px] top-4 bottom-0 w-[2px] bg-[var(--border)]" />
        
        {/* Fill Line (Green scrub) */}
        <div ref={lineRef} className="absolute left-[11px] md:left-[15px] top-4 w-[2px] h-0 bg-[var(--green)] shadow-[0_0_8px_var(--green)] z-10" />

        <div className="flex flex-col gap-12 md:gap-24 relative z-20">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card flex items-start gap-8 md:gap-16">
              
              {/* Animated Dot Indicator */}
              <div className="relative flex flex-col items-center shrink-0 mt-6">
                <div className="step-dot w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--background)] border-4 border-[var(--border)] relative z-20 transition-colors duration-300" />
              </div>
              
              {/* Animated Card Content */}
              <div className="card-content flex-1 bg-[var(--background)] border border-[var(--border)] p-8 md:p-12 hover:border-[var(--green)] transition-colors duration-500 relative group">
                 {/* Large Background Watermark */}
                 <div className="absolute top-4 right-6 text-[100px] md:text-[140px] font-bold text-[var(--foreground)] opacity-[0.02] leading-none pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-500">
                   {step.num}
                 </div>
                 
                 <div className="relative z-10">
                    <step.icon className="w-8 h-8 text-[var(--green)] mb-6" strokeWidth={1.5} />
                    <span className="font-mono text-xs font-bold text-[var(--muted)] tracking-widest uppercase mb-4 block">
                      PHASE {step.num} <span className="text-[var(--border)] mx-2">/</span> <span className="text-[var(--green)]">{step.sub}</span>
                    </span>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl leading-tight text-[var(--foreground)] mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-lg">
                      {step.content}
                    </p>
                 </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
