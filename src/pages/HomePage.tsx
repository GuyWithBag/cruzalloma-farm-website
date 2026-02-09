import BenefitsSection from "@/components/sections/BenefitsSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export default function HomePage() {
   return (
      <main>
         <HeroSection />
         <BenefitsSection />
         <HowItWorksSection />
      </main>
   );
}
