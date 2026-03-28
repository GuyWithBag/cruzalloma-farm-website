// Filename: featured-crops.tsx
import LeftCircle from '@/assets/images/HeroSection/left-circle.svg';
import MiddleCircle from '@/assets/images/HeroSection/middle-circle.svg';
import RightCircle from '@/assets/images/HeroSection/right-circle.svg';

const CROPS = [
  {
    id: 'coffee',
    src: LeftCircle,
    alt: 'Coffee',
    containerClass: 'size-8 md:size-16 lg:size-25 shadow-xl',
  },
  {
    id: 'cacao',
    src: MiddleCircle,
    alt: 'Cacao',
    containerClass: 'size-16 md:size-36 lg:size-46 shadow-2xl mb-3',
  },
  {
    id: 'citrus',
    src: RightCircle,
    alt: 'Citrus',
    containerClass: 'size-8 md:size-16 lg:size-25 shadow-xl',
  },
];

const FeaturedCrops = () => {
  return (
    <div className="relative flex items-center gap-4 md:gap-8 lg:gap-18 mt-3">
      {CROPS.map((crop) => (
        <div 
          key={crop.id} 
          className={`${crop.containerClass} rounded-full overflow-hidden`}
        >
          <img 
            src={crop.src} 
            alt={crop.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedCrops;