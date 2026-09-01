import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Al Yusuf Hajj & Umrah Tour & Travels",
  description:
    "Privacy policy regarding customer data collection, security, and usage for Hajj & Umrah travel services by Al Yusuf Tour & Travels Patna.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-svh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="pt-36 pb-16 border-b-hairline bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[var(--muted)] mb-4">
            DATA PROTECTION · PRIVACY POLICY
          </div>
          <h1 className="display-lg font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-[var(--muted)] font-light leading-relaxed max-w-3xl">
            At Al Yusuf Tour &amp; Travels Company, we prioritize the confidentiality and protection of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data during your Hajj and Umrah package bookings.
          </p>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 border-b-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-12 text-sm leading-relaxed text-[var(--muted)] font-light">
          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              1. Information We Collect
            </h2>
            <p>
              To process your Umrah visa applications, flight bookings, and hotel stays, we collect personal details including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name, Date of Birth, Gender, and Nationality.</li>
              <li>Passport Copy (Passport number, issue/expiry dates, photograph).</li>
              <li>Contact Details (Phone number, WhatsApp number, email address, home address in Bihar/India).</li>
              <li>Emergency contact information and health/vaccination records.</li>
              <li>Payment details (bank transfer receipts, cheque copies, or deposit slips).</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal information is processed strictly for travel logistics, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Submitting electronic visa applications via the Kingdom of Saudi Arabia Ministry of Hajj &amp; Umrah portal (Nusuk / Nusuk Umrah).</li>
              <li>Issuing international airline tickets (e.g. Saudi Arabian Airlines, IndiGo).</li>
              <li>Reserving hotel accommodations in Makkah and Madinah.</li>
              <li>Sending itinerary details, departure notices, and travel updates via SMS or WhatsApp.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              3. Data Sharing &amp; Disclosure
            </h2>
            <p>
              We <strong>do not sell, trade, or rent</strong> your personal data to any third-party marketing companies. Data is shared exclusively with official service providers required to execute your pilgrimage:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ministry of Hajj &amp; Umrah, KSA, and Saudi immigration authorities.</li>
              <li>Partner airlines and accredited Saudi ground transport agencies.</li>
              <li>Contracted hotel partners in Makkah and Madinah.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              4. Data Security Standards
            </h2>
            <p>
              We implement administrative, technical, and physical safeguards to protect physical passport copies and digital records from unauthorized access, loss, or disclosure. Access to customer records is restricted strictly to authorized staff at our Patna headquarters.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[var(--foreground)] font-sans">
              5. Your Rights &amp; Contact Information
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal records once your travel and visa compliance obligations are completed.
            </p>
            <p className="mt-2">
              For any privacy concerns, please contact our Patna office:
              <br />
              <strong>Al Yusuf Tour &amp; Travels Company</strong>
              <br />
              Federal Colony, Isapur, Phulwari Sharif, Patna, Bihar
              <br />
              Phone: +91 82100 40715 / +91 95345 62650
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
