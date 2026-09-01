import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Disclaimer | Al Yusuf Hajj & Umrah Tour & Travels",
  description:
    "Legal and operational disclaimers regarding pricing, flight schedules, hotel distances, and Saudi government regulations for Al Yusuf Tour & Travels Patna.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-svh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="pt-36 pb-16 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[var(--muted)] mb-4">
            LEGAL NOTICE · OPERATIONAL DISCLAIMER
          </div>
          <h1 className="display-lg font-bold tracking-tight mb-4">
            Disclaimer
          </h1>
          <p className="text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-3xl">
            This disclaimer applies to all package details, pricing, schedules, and information provided on the Al Yusuf Tour &amp; Travels website and printed brochures.
          </p>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 border-b-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-12 text-sm leading-relaxed text-[var(--muted)] font-light">
          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              1. General Information &amp; Pricing Notice
            </h2>
            <p>
              All information provided on this website—including package prices (e.g. ₹87,000/- Economy Package), departure months (e.g. Sep–Dec 2026), hotel names, and flight itineraries—is published in good faith for general guidance.
            </p>
            <p>
              Package tariffs and dates are subject to change based on flight availability, Saudi currency (SAR/INR) exchange rate fluctuations, fuel surcharges, and Saudi Ministry of Hajj &amp; Umrah policy updates. Final prices are confirmed upon visa issuance and booking confirmation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              2. Airline Schedules &amp; Delay Disclaimer
            </h2>
            <p>
              Flight operations, baggage allowances, seating assignments, gate changes, and departure/arrival times are under the sole operational control of the respective airlines (e.g. Saudi Arabian Airlines, IndiGo, Air India) and aviation authorities.
            </p>
            <p>
              Al Yusuf Tour &amp; Travels Company is not liable for flight delays, reschedules, air traffic control hold-ups, or missed connections caused by airlines, adverse weather, or technical issues, though our field representatives will assist pilgrims to the best of their ability.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              3. Saudi Government Regulations &amp; Visa Issuance
            </h2>
            <p>
              The issuance, refusal, or delay of Umrah/Hajj visas is governed entirely by the Ministry of Foreign Affairs and Ministry of Hajj &amp; Umrah of the Kingdom of Saudi Arabia. Al Yusuf Tour &amp; Travels acts solely as a facilitating agent and cannot guarantee visa approval or entry permission if rejected by Saudi immigration.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              4. Hotel Proximity &amp; Amenities
            </h2>
            <p>
              Stated hotel distances (e.g. 1200 meters from Haram, 900 meters from Nabawi) are approximate walking or shuttle distances measured to the outer courtyards of the Holy Mosques. Hotel star ratings and room layouts reflect local Saudi tourism classification standards.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              5. Physical Fitness &amp; Medical Responsibility
            </h2>
            <p>
              Performing Hajj and Umrah requires significant walking and physical exertion. Pilgrims are responsible for evaluating their personal health and fitness prior to travel. Elderly pilgrims or individuals requiring wheelchair assistance or medical support must inform our Patna headquarters prior to booking so suitable arrangements can be organized.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              6. Direct Verification &amp; Assistance
            </h2>
            <p>
              For any clarification regarding package details, booking terms, or official updates, please speak directly with our Patna office:
              <br />
              <strong>Al Yusuf Tour &amp; Travels Company</strong>
              <br />
              Federal Colony, Isapur, Phulwari Sharif, Patna, Bihar
              <br />
              Phone lines: <strong>+91 82100 40715</strong> / <strong>+91 95345 62650</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
