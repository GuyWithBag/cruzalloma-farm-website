import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";
import MarqueeSection from "@/components/sections/MarqueeSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
