"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Plane, CheckCircle2, Star, Heart, ShieldCheck, MessageCircle, Phone } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Fast, Clean Hero Text Reveal
    const lines = gsap.utils.toArray(".hero-line");
    tl.from(lines, {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
    }, 0.1);

    tl.from(".hero-sub", {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, 0.3);

    // 2. Mockup slides in subtly
    tl.from(".mockup-wrapper", {
      y: 40,
      opacity: 0,
      duration: 0.6,
    }, 0.2);

    // 3. Dynamic Mockup Assembly (Floating elements pop fast)
    tl.from(".float-intro", {
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out(1.2)"
    }, 0.5);

    // 4. Parallax Floating Elements in Hero
    gsap.to(".float-fast", {
      y: -120,
      ease: "none",
      scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: 0.5 }
    });
    gsap.to(".float-slow", {
      y: -60,
      ease: "none",
      scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: 1 }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative pt-40 pb-32 min-h-svh flex items-center overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* ─── LEFT: Typography Focused ─── */}
          <div className="lg:col-span-7 z-20">
            <div className="flex items-center gap-2 mb-4 border border-zinc-200 bg-zinc-50 px-3 py-1.5 w-fit font-mono text-xs font-bold uppercase tracking-widest text-[var(--foreground)]">
              <Star className="w-3.5 h-3.5 text-[var(--green)]" />
              From Departure to Haram, We&apos;ve Got You Covered.
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[var(--foreground)] tracking-tighter leading-none overflow-hidden">
              <div className="hero-line">Cleanse</div>
              <div className="hero-line"><span className="text-zinc-400">your</span> soul.</div>
              <div className="hero-line">We manage</div>
              <div className="hero-line">the <span className="text-[var(--green)]">logistics.</span></div>
            </h1>

            <div className="max-w-lg">
              <p className="hero-sub-text text-xl lg:text-2xl text-[var(--muted)] leading-relaxed mb-6 opacity-0" style={{ animation: "fadeIn 0.6s ease 0.3s forwards" }}>
                A blessed journey built on complete trust. We take care of everything, so you can focus entirely on your prayers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0" style={{ animation: "fadeIn 0.6s ease 0.4s forwards" }}>
                <a
                  href="tel:8210040715"
                  className="bg-[var(--green)] hover:bg-[var(--green-light)] text-white font-bold px-8 h-14 text-base w-full sm:w-auto transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Reserve Your Seat
                </a>
                <div className="flex items-center gap-2 px-4 text-sm font-semibold text-zinc-500 whitespace-nowrap">
                  <CheckCircle2 className="w-5 h-5 text-[var(--green)]" />
                  <span>₹87,000 All-Inclusive</span>
                </div>
              </div>

              {/* Dignified Urgency / FOMO */}
              <div className="mt-5 flex items-center gap-3 opacity-0" style={{ animation: "fadeIn 0.6s ease 0.5s forwards" }}>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>
                <span className="text-sm font-medium text-zinc-500">
                  Limited seats left for Sep–Dec. We keep our groups small to serve you better.
                </span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Dynamic UI Assembly ─── */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] mt-16 lg:mt-0">

            {/* Center Piece (The "Mockup" replacement) */}
            <div className="mockup-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 float-slow z-10 w-[90%] max-w-[400px]">
              <div className="bg-white p-2 border border-zinc-200 shadow-xl relative">
                {/* Image taking up space like a polaroid/card */}
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  <img
                    src="/hero-kaaba.jpg"
                    alt="The Holy Kaaba"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                  />
                  {/* Subtle inner shadow/gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />

                  {/* Overlay text in the card */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-1">Destination</p>
                    <p className="text-3xl font-bold">Makkah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 1 (Top Left) */}
            <div className="float-intro absolute top-4 lg:top-12 left-0 lg:-left-12 p-3 lg:p-4 bg-white border border-zinc-200/60 shadow-xl float-fast z-20">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[var(--green)]" fill="currentColor" />
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--muted)] tracking-widest uppercase mb-0.5">Our Promise</div>
                  <div className="text-sm font-bold text-[var(--foreground)]">Complete Trust</div>
                </div>
              </div>
            </div>

            {/* Floating Element 2 (Bottom Right) */}
            <div className="float-intro absolute bottom-12 lg:bottom-24 right-0 lg:-right-8 p-3 lg:p-4 bg-black text-white shadow-xl float-fast z-20">
              <div className="flex gap-3 items-center">
                <ShieldCheck className="w-5 h-5 text-[var(--green)]" />
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest uppercase mb-0.5">Peace of Mind</div>
                  <div className="text-sm font-bold text-white">Pure Devotion</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Global CSS for fade ins */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}