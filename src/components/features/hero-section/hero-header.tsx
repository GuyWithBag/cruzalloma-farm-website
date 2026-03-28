import { Button } from '@/components/ui/button';

const HeroHeader = () => {
  return (
    <div className="max-w-2xl text-white">
      {/* Title */}
      <h1 className="text-heading-3 md:text-display-1 font-display font-black leading-[1.1] uppercase mb-3 sm:mb-6">
        CULTIVATE <br /> & THRIVE
      </h1>
      
      {/* Subtitle */}
      <p className="text-[0.625rem] sm:text-xl lg:text-heading-4 font-display font-semibold mb-3 md:mb-5 lg:mb-9 md:max-w-115">
        Your Partner In Building A Sustainable Agricultural Future For Mindanao.
      </p>

      {/* Primary CTA */}
      <Button 
        variant="default" 
        size="lg" 
        className="
          text-[0.5rem] font-display font-bold 
          px-2.5 py-1.5 sm:px-4 md:px-5 sm:py-3 
          cursor-pointer leading-none
          hover:brightness-105
        "
      >
        EXPLORE OUR FARM
      </Button>
    </div>
  );
};

export default HeroHeader;