"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HighlightsGrid } from "@/components/sections/highlights-grid";
import { Plane, MapPin, IndianRupee, Calendar, Utensils, Phone, Star } from "lucide-react";

import { Footer } from "@/components/ui/footer";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
        ".contact-body",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: ".contact-body", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="flex flex-col">
      {/* Contact section */}
      <section ref={sectionRef} className="min-h-svh flex flex-col justify-center pt-28 pb-20 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col">
          {/* Section label */}
          <div className="label-mono text-[var(--muted)] mb-8">
            <span className="reveal-line">
              <span>06 — CONTACT · PATNA HEADQUARTERS</span>
            </span>
          </div>

          {/* Headline */}
          <div className="mb-14 md:mb-20 max-w-3xl">
            <h2 className="display-lg font-semibold leading-[0.95] tracking-tight">
              <span className="reveal-line block">
                <span>Start your journey.</span>
              </span>
              <span className="reveal-line block">
                <span className="font-light italic text-[var(--muted)]">
                  Speak directly with us.
                </span>
              </span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-xl">
              Visit our Patna office or call our team directly to reserve your seat
              for the upcoming 2026 departures. Seats fill fast.
            </p>
          </div>

          <div className="border-t-hairline mb-0" />

          {/* Contact grid — 2 cols */}
          <div
            className="contact-body grid md:grid-cols-2 bg-[var(--border)]"
            style={{ gap: "1px" }}
          >
            {/* Office details */}
            <div className="bg-[var(--card)] p-8 md:p-12 flex flex-col gap-8">
              <div>
                <div className="label-mono text-[var(--muted)] mb-4">OFFICE LOCATION</div>
                <div className="font-sans font-semibold text-2xl leading-tight text-[var(--foreground)]">
                  Federal Colony, Isapur
                </div>
                <div className="text-[var(--muted)] font-light mt-2">
                  Phulwari Sharif, Patna, Bihar — India
                </div>
              </div>

              <div className="border-t-hairline pt-8">
                <div className="label-mono text-[var(--muted)] mb-5">DIRECT PHONE LINES</div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:8210040715"
                    className="font-mono text-2xl font-medium text-[var(--foreground)]
                               border-b-hairline pb-3
                               transition-colors hover:text-[var(--accent)]"
                  >
                    +91 82100 40715
                  </a>
                  <a
                    href="tel:9534562650"
                    className="font-mono text-2xl font-medium text-[var(--foreground)]
                               transition-colors hover:text-[var(--accent)]"
                  >
                    +91 95345 62650
                  </a>
                </div>
              </div>

              <div className="border-t-hairline pt-6">
                <div className="flex items-center gap-3">
                  <span className="section-active-dot" aria-hidden="true" />
                  <span className="label-mono text-[var(--muted)]">
                    MON – SAT · 10:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Premium CTA (Redirects to WhatsApp) */}
            <div className="bg-[var(--background)] p-8 md:p-12 flex flex-col items-start justify-center">
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--foreground)] tracking-tight leading-[1.1]">
                Begin your<br />sacred journey.
              </h3>
              
              <p className="text-[var(--muted)] font-light text-lg leading-relaxed mb-12 max-w-sm">
                Step away from the worldly rush and embark on a path of spiritual renewal. We meticulously handle every detail, so you can focus entirely on seeking forgiveness and peace.
              </p>

              <a
                href="https://wa.me/918210040715"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border-b border-[var(--foreground)] pb-2 text-[var(--foreground)] font-mono font-medium text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
              >
                RESERVE YOUR SEAT
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Site Footer */}
      <Footer />
    </div>
  );
}


