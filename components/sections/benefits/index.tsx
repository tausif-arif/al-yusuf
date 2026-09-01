"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Heart, ShieldCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Spiritual Comfort",
    description: "Focus entirely on your faith while we handle every logistical detail of your sacred journey with absolute precision.",
    color: "bg-emerald-50",
    textCol: "text-emerald-900"
  },
  {
    icon: ShieldCheck,
    title: "Unmatched Convenience",
    description: "From premium transportation to strategically located hotels just steps away from the Holy Mosques.",
    color: "bg-amber-50",
    textCol: "text-amber-900"
  },
  {
    icon: Clock,
    title: "Time-Tested Trust",
    description: "Decades of experience ensuring safe, reliable, and deeply fulfilling pilgrimage experiences for thousands.",
    color: "bg-stone-100",
    textCol: "text-stone-900"
  },
];

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split Title
      const title = new SplitType(".benefits-title", { types: "lines,words" });
      
      gsap.from(title.words, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".benefits-header",
          start: "top 80%",
        }
      });

      // Pin and Horizontal Scroll for cards (Mobile will just stack, Desktop horizontal)
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray(".b-card");
        
        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: "+=2000",
          }
        });
      });
      
      // Mobile staggered reveal
      mm.add("(max-width: 767px)", () => {
        gsap.from(".b-card", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:h-screen flex flex-col justify-center bg-stone-950 text-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="benefits-header mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="benefits-title text-4xl md:text-7xl font-light tracking-tight max-w-2xl">
            Why choose <br/>
            <span className="font-medium text-emerald-400">Al Yusuf?</span>
          </h2>
          <p className="text-stone-400 max-w-md text-lg md:text-xl font-light">
            We understand the profound significance of your pilgrimage. Our packages are designed to provide complete peace of mind.
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className={`b-card flex-shrink-0 w-full md:w-[450px] p-10 md:p-12 rounded-[2rem] ${benefit.color} ${benefit.textCol} flex flex-col justify-between`}
            >
              <div className="mb-12">
                <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
                  <benefit.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-medium mb-4">{benefit.title}</h3>
              </div>
              <p className="text-lg opacity-80 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
