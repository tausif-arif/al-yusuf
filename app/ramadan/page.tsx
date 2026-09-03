"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Calendar, Phone } from "lucide-react";

export default function RamadanPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col selection:bg-[var(--green)] selection:text-white">
      <Header />

      <section className="flex-1 w-full pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-12 flex flex-col items-center relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--green)]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-200/50 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-200 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
              <Calendar className="w-4 h-4 text-[var(--green)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-600">
                Upcoming 2027 Season
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8"
          >
            Ramadan 2027 Umrah Packages <br />
            <span className="text-zinc-400 font-medium text-4xl md:text-5xl">A Journey Built on Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-16"
          >
            Your faith deserves a journey built on unwavering trust and dedication. We are currently finalizing our Ramadan 2027 packages to ensure your Umrah is peaceful, seamless, and deeply rewarding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-left space-y-2">
              <h3 className="text-2xl font-bold text-zinc-900">Be the First to Know</h3>
              <p className="text-zinc-500">Reach out to secure your place with a partner you can trust.</p>
            </div>

            <a
              href="https://wa.me/918210040715?text=Hello,%20I'd%20like%20to%20get%20more%20information%20about%20the%20upcoming%20Ramadan%202027%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-3 bg-[var(--green)] hover:bg-[var(--green-light)] text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Inquire Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
