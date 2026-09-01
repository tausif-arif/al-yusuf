import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ShieldCheck, HeartHandshake, MapPin, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Al Yusuf Hajj & Umrah Tour & Travels Patna",
  description:
    "Learn about Al Yusuf Tour & Travels Patna. Trusted Hajj & Umrah tour operator since 2010 offering all-inclusive economy and premium packages.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Honesty & Transparency",
      description:
        "No hidden charges or last-minute fee surprises. Everything promised in your itinerary is delivered with absolute clarity.",
      icon: ShieldCheck,
    },
    {
      title: "Pilgrim-First Guidance",
      description:
        "Experienced group leaders and scholars accompany pilgrims for ritual guidance, emergency support, and spiritual preparation.",
      icon: HeartHandshake,
    },
    {
      title: "Verified Proximity",
      description:
        "Carefully selected hotels within easy walking distance of Masjid al-Haram in Makkah and Al-Masjid an-Nabawi in Madinah.",
      icon: MapPin,
    },
    {
      title: "15+ Years Experience",
      description:
        "Serving over 10,000+ satisfied pilgrims from Patna, Bihar, and across India with seamless visa, flight, and transportation logistics.",
      icon: Award,
    },
  ];

  return (
    <main className="min-h-svh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <Header />

      {/* Hero Header Section */}
      <section className="pt-36 pb-16 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[var(--muted)] mb-4">
            ABOUT AL YUSUF · PATNA HEADQUARTERS
          </div>
          <h1 className="display-lg font-bold tracking-tight mb-6">
            Guiding Pilgrims with Honor, Trust &amp; Integrity Since 2010.
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] font-light leading-relaxed max-w-3xl">
            Al Yusuf Tour &amp; Travels Company is Patna&apos;s premier Hajj and Umrah service provider. We specialize in hassle-free, affordable, and spiritually fulfilling sacred journeys.
          </p>
        </div>
      </section>

      {/* Main Story & Mission */}
      <section className="py-20 border-b-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="label-mono text-[var(--muted)] mb-3">OUR LEGACY</div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 leading-tight">
              A Sacred Duty, Not Just a Business.
            </h2>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-4">
              Founded over 15 years ago in Patna, Bihar, Al Yusuf Tour &amp; Travels was created with a single vision: to allow every believer to perform Umrah and Hajj without financial strain or administrative anxiety.
            </p>
            <p className="text-[var(--muted)] font-light leading-relaxed">
              From managing Umrah visas and flight bookings to providing full Indian meal catering and air-conditioned local transfers in Saudi Arabia, our dedicated team manages every minute detail.
            </p>
          </div>

          <div className="bg-[var(--border)] p-[1px]">
            <div className="bg-[var(--card)] p-8 flex flex-col gap-6">
              <h3 className="label-mono text-[var(--foreground)] font-bold tracking-widest uppercase">
                Why Pilgrims Choose Al Yusuf
              </h3>
              <ul className="flex flex-col gap-4 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--green)] shrink-0 mt-0.5" />
                  <span><strong>Direct Patna Departures</strong> — Convenient itineraries tailored for pilgrims from Bihar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--green)] shrink-0 mt-0.5" />
                  <span><strong>Economy &amp; Premium Packages</strong> — All-inclusive options starting at ₹87,000/-.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--green)] shrink-0 mt-0.5" />
                  <span><strong>24/7 Ground Assistance</strong> — On-field representatives in both Makkah and Madinah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--green)] shrink-0 mt-0.5" />
                  <span><strong>Complimentary Zamzam &amp; Ziyarat</strong> — Guided visits to holy historical sites included.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[var(--muted)] mb-4">OUR GUIDING PRINCIPLES</div>
          <h2 className="display-md font-semibold tracking-tight mb-12">
            Built on Uncompromising Standards
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="border border-[var(--border)] p-8 flex flex-col gap-4 hover:border-[var(--green)] transition-colors">
                <val.icon className="w-8 h-8 text-[var(--green)]" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[var(--foreground)]">{val.title}</h3>
                <p className="text-sm text-[var(--muted)] font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Direct Contact Bar */}
      <section className="py-16 bg-[var(--card)] border-b-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="label-mono text-[var(--muted)] mb-2">VISIT US IN PATNA</div>
            <h3 className="text-2xl font-bold">Federal Colony, Isapur, Phulwari Sharif</h3>
            <p className="text-sm text-[var(--muted)] font-light mt-1">
              Patna, Bihar — 801505 | Direct Phone: +91 82100 40715 / +91 95345 62650
            </p>
          </div>
          <a
            href="https://wa.me/918210040715?text=Hello%20Al%20Yusuf%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20company."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--green)] px-8 py-4 text-sm font-bold text-white tracking-wide hover:bg-[var(--green-light)] transition-colors shrink-0"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
