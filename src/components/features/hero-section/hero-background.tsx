import farmImg from '@/assets/images/HeroSection/hero-bg.svg';  
import greenWave from '@/assets/images/HeroSection/green-wave.svg';

const HeroBackground = () => {
  // Centralized height logic for the overlay + wave unit
  const wrapperHeights = "h-[45.5%] md:h-[43.5%] lg:h-[47%] xl:h-[49%]";

  return (
    <div className="absolute inset-0 w-screen h-full -z-10 left-1/2 -translate-x-1/2 overflow-hidden">
      <img 
        src={farmImg} 
        alt="Farm Background" 
        className="block w-screen h-full object-cover object-bottom"
        loading="eager"
      />

      <div className={`
        absolute top-0 left-0 w-full ${wrapperHeights}
        flex flex-col pointer-events-none 
        transition-transform duration-1000 ease-out 
        animate-in fade-in slide-in-from-bottom-10
      `}>
        
        <div className="w-full bg-[#2C4028]/39 flex-1" />
        <img 
          src={greenWave} 
          alt="" 
          aria-hidden="true"
          className="w-full h-auto block" 
        />
      </div>
    </div>
  );
};

export default HeroBackground;