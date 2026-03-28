import HeroBackground from '@/components/features/hero-section/hero-background';
import HeroHeader from '@/components/features/hero-section/hero-header';
import FeaturedCrops from '@/components/features/hero-section/featured-crop';

const HeroSection = () => {
  return (
    <section className="relative w-full h-160 md:h-290 overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full h-full flex flex-row items-start justify-between px-[6%] md:px-[6%] pt-26 md:pt-30 gap-4 md:gap-8">
        <HeroHeader />
        <FeaturedCrops />
      </div>
    </section>
  );
};

export default HeroSection;