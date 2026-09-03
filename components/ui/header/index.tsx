"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b-hairline
                 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 w-full flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="flex flex-col no-underline group"
        >
          <span className="font-sans font-semibold text-lg md:text-xl leading-none text-[var(--foreground)] tracking-tight">
            Al Yusuf
          </span>
          <span className="label-mono text-[var(--muted)] mt-1 group-hover:text-[var(--green)] transition-colors">
            Hajj & Umrah
          </span>
        </a>

        {/* Right Section (Nav & CTA) */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Navigation */}
          <div className="flex items-center">
            <a href="/ramadan" className="text-xs md:text-sm font-bold text-[var(--green)] underline underline-offset-4 animate-pulse transition-colors">
              Ramadan 2027
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918210040715?text=Hello,%20I'm%20interested%20in%20booking%20a%20package%20and%20would%20like%20some%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--green)] px-4 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-bold tracking-wide
                       text-white transition-all duration-300 ease-out
                       hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-[var(--green-light)] active:scale-95 active:translate-y-0 flex items-center gap-2"
          >
            <span className="hidden md:inline">Begin Sacred Journey</span>
            <span className="md:hidden">Inquire</span>
          </a>
        </div>
      </div>

      {/* GSAP / Framer Scroll Progress Line */}
      <motion.div
        className="h-[1px] bg-[var(--foreground)] transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}