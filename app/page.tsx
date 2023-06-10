import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Comments from "@/components/Comments";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroductionSection />
      <Benefits />
      <HowItWorks />
      <Comments />
      <CTA />
      <Pricing />
      <FAQ />
    </main>
  );
}
