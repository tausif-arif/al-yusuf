import { Header } from "@/components/ui/header";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { BentoFeatures } from "@/components/sections/bento-features";
import { Packages } from "@/components/sections/packages";
import { Inclusions } from "@/components/sections/inclusions";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-svh bg-[var(--background)]">
      <Header />
      <Hero />
      <Story />
      <BentoFeatures />
      {/* Keeping these for now, can be updated later if needed */}
      <Packages />
      <Inclusions />
      <Process />
      <Contact />
    </main>
  );
}
