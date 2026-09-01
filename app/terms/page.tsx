import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Al Yusuf Hajj & Umrah Tour & Travels",
  description:
    "Official Terms and Conditions for booking Hajj and Umrah packages with Al Yusuf Tour & Travels Company, Patna, Bihar.",
};

export default function TermsPage() {
  return (
    <main className="min-h-svh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="pt-36 pb-16 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[var(--muted)] mb-4">
            LEGAL AGREEMENT · REVISED 2026
          </div>
          <h1 className="display-lg font-bold tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-3xl">
            Please read these terms carefully before booking any Hajj or Umrah package with Al Yusuf Tour &amp; Travels Company, Patna. By placing a deposit or confirming your booking, you agree to comply with the following policy terms.
          </p>
        </div>
      </section>

      {/* Terms Body Content */}
      <section className="py-16 border-b-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-12 text-sm leading-relaxed text-[var(--muted)] font-light">
          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              1. Scope of Agreement &amp; Operator Status
            </h2>
            <p>
              Al Yusuf Tour &amp; Travels Company (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;) operates as a registered travel provider based in Federal Colony, Isapur, Phulwari Sharif, Patna, Bihar. We facilitate Umrah visas, flight bookings, accommodation reservations in Makkah and Madinah, ground transportation, and pilgrimage services in the Kingdom of Saudi Arabia (&quot;KSA&quot;).
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              2. Booking, Payments &amp; Pricing
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Advance Deposit:</strong> A non-refundable initial advance payment is required at the time of booking confirmation to block seats and initiate visa approval.
              </li>
              <li>
                <strong>Full Payment Schedule:</strong> The remaining balance must be settled at least 15 days prior to the scheduled departure date.
              </li>
              <li>
                <strong>Currency &amp; Taxes:</strong> All rates are quoted in Indian Rupees (INR ₹). Prices are based on current foreign exchange rates, Saudi government fees, and hotel tariffs. Any steep devaluation or increase in Saudi tax laws prior to departure may require a tariff adjustment.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              3. Cancellation &amp; Refund Policy
            </h2>
            <p>
              Cancellations must be communicated to our Patna headquarters in writing or via registered email/WhatsApp.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Visa Fees:</strong> Once an Umrah/Hajj visa has been issued by the Ministry of Hajj &amp; Umrah, visa processing fees are 100% non-refundable.
              </li>
              <li>
                <strong>Flight Tickets:</strong> Flight cancellations or date amendments are subject to the specific cancellation policy of the issuing airline (e.g. Saudi Arabian Airlines, IndiGo, Air India).
              </li>
              <li>
                <strong>Hotel Accommodations:</strong> Hotel room cancellations within 21 days of travel are subject to strict hotel retention charges as enforced by Saudi hospitality providers.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              4. Passport &amp; Document Requirements
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Pilgrims must possess an Indian passport valid for at least <strong>6 months</strong> beyond the date of intended return.
              </li>
              <li>
                Pilgrims are responsible for submitting genuine, clear passport scans, passport-sized photographs with white backgrounds, and required health/vaccination certificates.
              </li>
              <li>
                The Company is not liable for visa rejections or travel bans imposed due to incorrect document submission or regulatory blocks by government authorities.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              5. Hotel Proximity &amp; Flight Schedules
            </h2>
            <p>
              Hotel proximity descriptions (e.g., 1200 meters from Haram) represent walking distances or regular shuttle route estimates. Flight schedules, gate numbers, and departure times are determined entirely by the operating airlines and aviation authorities.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              6. Code of Conduct &amp; Local Laws
            </h2>
            <p>
              While in the Kingdom of Saudi Arabia, all pilgrims must strictly abide by local Saudi laws, religious customs, and group instructions given by our tour leaders. The Company reserves the right to terminate services for any individual displaying disruptive or unlawful behavior.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              7. Jurisdiction &amp; Dispute Resolution
            </h2>
            <p>
              Any legal claims, disputes, or proceedings arising out of or in connection with bookings made with Al Yusuf Tour &amp; Travels Company shall be subject to the exclusive jurisdiction of the competent courts in <strong>Patna, Bihar, India</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
