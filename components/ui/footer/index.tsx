"use client";

import { useRef } from "react";
import Link from "next/link";
import { HighlightsGrid } from "@/components/sections/highlights-grid";
import { MapPin, Phone, ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const updateMask = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maskStr = `radial-gradient(220px circle at ${x}px ${y}px, black 0%, transparent 100%)`;

    spotlightRef.current.style.webkitMaskImage = maskStr;
    spotlightRef.current.style.maskImage = maskStr;
    spotlightRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Umrah Packages", href: "/#packages" },
    { label: "Package Inclusions", href: "/#inclusions" },
    { label: "Booking Process", href: "/#process" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact & Office", href: "/#contact" },
  ];

  return (
    <footer className="bg-[var(--background)] flex flex-col relative overflow-hidden">
      <HighlightsGrid />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-4 flex flex-col justify-between gap-8">
          <div>
            <Link href="/" className="flex flex-col no-underline group mb-5">
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-2xl leading-none text-[var(--foreground)] tracking-tight">Al Yusuf</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
                </span>
              </div>
              <span className="label-mono text-[var(--muted)] text-xs mt-1.5 group-hover:text-[var(--green)] transition-colors">
                Hajj &amp; Umrah Tour &amp; Travels
              </span>
            </Link>
            <p className="text-sm text-[var(--muted)] font-light leading-relaxed max-w-sm">
              A covenant of trust carried since 2010 — guiding souls toward the Sacred House with honesty, devotion, and care that feels like family.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
            <ShieldCheck className="w-4 h-4 text-[var(--green)]" />
            <span className="uppercase tracking-wider text-[11px] font-medium">Govt. Registered Hajj &amp; Umrah Operator</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
            <h4 className="label-mono text-[var(--foreground)] font-bold tracking-widest uppercase text-xs">Navigation</h4>
          </div>
          <ul className="flex flex-col gap-3.5 text-sm font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group flex items-center justify-between text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-all duration-200 py-0.5">
                  <span className="transition-transform group-hover:translate-x-1.5">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--green)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
            <h4 className="label-mono text-[var(--foreground)] font-bold tracking-widest uppercase text-xs">Legal &amp; Policies</h4>
          </div>
          <ul className="flex flex-col gap-3.5 text-sm font-sans">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group flex items-center justify-between text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-all duration-200 py-0.5">
                  <span className="transition-transform group-hover:translate-x-1.5">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--green)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col gap-5 hover:border-[var(--green)] transition-colors duration-300">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[var(--green)]" />
              <span className="label-mono font-bold text-xs tracking-wider uppercase text-[var(--foreground)]">Patna Office</span>
            </div>
            <div className="text-xs text-[var(--muted)] font-light leading-relaxed">
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">Federal Colony, Isapur</p>
              <p>Phulwari Sharif, Patna, Bihar — India</p>
            </div>
            <div className="border-t border-[var(--border)] pt-4 flex flex-col gap-2.5">
              {[{ tel: "8210040715", label: "+91 82100 40715" }, { tel: "9534562650", label: "+91 95345 62650" }].map(({ tel, label }) => (
                <a key={tel} href={`tel:${tel}`} className="group flex items-center justify-between font-mono text-sm font-semibold text-[var(--foreground)] hover:text-[var(--green)] transition-colors">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[var(--green)]" />
                    <span>{label}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Tagline Strip */}
      <div className="w-full flex justify-center py-6 bg-[var(--background)] z-10 pointer-events-none">
        <span
          className="font-mono tracking-[0.4em] uppercase text-[var(--muted)] opacity-90"
          style={{ fontSize: "clamp(9px, 1vw, 13px)" }}
        >
          Born of{" "}
          <span className="text-[var(--green)] font-semibold">
            belief
          </span>{" "}
          · Carried by{" "}
          <span className="text-[var(--green)] font-semibold">
            trust
          </span>
        </span>
      </div>

      {/* Watermark Section */}
      <div
        className="relative w-full h-[140px] sm:h-[200px] overflow-hidden bg-[var(--background)] cursor-crosshair select-none flex items-center justify-center z-40"
        onMouseEnter={updateMask}
        onMouseMove={updateMask}
        onMouseLeave={handleMouseLeave}
      >
        {/* Base Layer */}
        <div className="relative w-full flex items-center justify-center pointer-events-none z-10">
          <span
            className="font-serif font-bold tracking-[0.02em] uppercase leading-none text-zinc-100/40"
            style={{ fontSize: "clamp(60px, 15vw, 220px)" }}
          >
            AL YUSUF
          </span>
        </div>

        {/* Hover Layer */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none opacity-0 transition-opacity duration-200 z-20"
        >
          <span
            className="font-serif font-bold tracking-[0.02em] uppercase leading-none text-[var(--green)]"
            style={{
              fontSize: "clamp(60px, 15vw, 220px)",
              WebkitTextStroke: "1px rgba(24,82,51,0.4)",
            }}
          >
            AL YUSUF
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[var(--background)] relative z-30 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-6 py-7">
          <div className="label-mono text-[var(--muted)] text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Al Yusuf Hajj &amp; Umrah Tour &amp; Travels · All Rights Reserved
          </div>
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", d: <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
              { label: "Facebook", d: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
              { label: "Twitter", d: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
              { label: "YouTube", d: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0-.46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
            ].map(({ label, d }) => (
              <a key={label} href="#" aria-label={label} className="w-8 h-8 rounded-full flex items-center justify-center border border-transparent hover:border-[var(--border)] hover:bg-[var(--card)] text-[var(--muted)] hover:text-[var(--green)] transition-all duration-200">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
