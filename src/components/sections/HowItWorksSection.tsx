import { Icon } from "@iconify/react";

// Import SVG assets
import TopLeftBgElement from "@/assets/svgs/HowItWorksSection/top left bg element.svg";
import BottomRightBigBgElement from "@/assets/svgs/HowItWorksSection/bottom right big bg element.svg";
import WavyLine from "@/assets/svgs/HowItWorksSection/Rectangle 76.svg";
import TreePhoto from "@/assets/svgs/HowItWorksSection/TreePhoto.svg";
import LecturePhoto from "@/assets/svgs/HowItWorksSection/LecturePhoto.svg";
import CacaoPhoto from "@/assets/svgs/HowItWorksSection/CacaoPhoto.svg";
import ProductsShowcase from "@/assets/svgs/HowItWorksSection/ProductsShowcase.svg";
import LeafIcon from "@/assets/svgs/HowItWorksSection/pepicons-pencil_leaf.svg";
import HeartOutlineIcon from "@/assets/svgs/HowItWorksSection/HeartIcon.svg";
import HeartFilledIcon from "@/assets/svgs/HowItWorksSection/BrownHeartIcon.svg";
import PinIcon from "@/assets/svgs/HowItWorksSection/PinIcon.svg";
import LeafOnHandIcon from "@/assets/svgs/HowItWorksSection/LeafonHandIcon.svg";
import PlantIcon from "@/assets/svgs/HowItWorksSection/PlantIcon.svg";

export default function HowItWorksSection() {
  return (
    <section className="relative bg-bg-primary overflow-hidden w-full">
      {/* Background Elements */}
      {/* Top Left Background Element */}
      <div className="absolute -left-[36px] md:-left-[164px] -top-[54px] md:-top-[241px] w-[198px] md:w-[891px] h-[246px] md:h-[1105px] -rotate-90 -scale-y-100 pointer-events-none">
        <img
          src={TopLeftBgElement}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Bottom Right Big Background Element (Desktop only) */}
      <div className="hidden md:block absolute -left-[67px] -top-[648px] w-[3280px] h-[2680px] rotate-[-1.85deg] pointer-events-none">
        <img
          src={BottomRightBigBgElement}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Second Background Element (Mobile only) */}
      <div className="md:hidden absolute left-[148px] top-[473px] w-[206px] h-[256px] rotate-90 -scale-y-100 pointer-events-none">
        <img
          src={TopLeftBgElement}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Mobile Background Element */}
      <div className="md:hidden absolute -left-[15px] -top-[144px] w-[729px] h-[596px] rotate-[-1.85deg] pointer-events-none">
        <img
          src={BottomRightBigBgElement}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center gap-6 md:gap-[42px] pt-[18px] md:pt-[80px] pb-[28px] md:pb-[128px] px-[9px] md:px-[40px]">
        {/* Header */}
        <div className="relative flex flex-col items-center justify-center gap-[2px] md:gap-[10px] w-full max-w-[320px] md:max-w-[1440px] h-[46px] md:h-[207px] bg-light-moss-green/80 border-t border-b border-green-stroke-line md:border-t-[5px] md:border-b-[5px] text-center text-text-primary">
          {/* Overline */}
          <p className="font-sans md:font-display font-semibold text-[6px] md:text-[21px] leading-[1.5] underline">
            Our Process
          </p>
          {/* Main Heading */}
          <h2 className="font-sans md:font-display font-bold text-[16px] md:text-[68px] leading-normal md:leading-[1.3]">
            How We Cultivate Knowledge
          </h2>
          {/* Subheading */}
          <p className="font-sans font-normal text-[6.5px] md:text-[24px] leading-normal md:leading-[1.5]">
            A transparent look at our farm-to-community approach, from planting
            to harvesting.
          </p>
        </div>

        {/* Content Section */}
        <div className="relative w-full max-w-[1329px] px-[16px] md:px-[15px] pt-[19px] md:pt-[46px] md:pb-[46px]">
          {/* Wavy Line (Desktop only) */}
          <div className="hidden md:block absolute left-[335px] top-0 w-[658px] h-[1176px] pointer-events-none">
            <img
              src={WavyLine}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Process Cards Container */}
          <div className="relative flex flex-col gap-9 md:gap-[31px] md:pt-[73px] w-full">
            {/* Top Row */}
            <div className="flex flex-col gap-9 md:gap-8 items-center">
              {/* Card 1 - Strategic Agricultural Planning */}
              <div className="relative flex items-center gap-[7px] md:gap-8 w-full flex-row pr-[13px] md:pr-0">
                {/* Image */}
                <div className="relative shrink-0 size-[62px] md:size-[280px]">
                  <img
                    src={TreePhoto}
                    alt="Tree plantation representing strategic agricultural planning"
                    className="w-full h-full object-contain"
                  />
                  {/* Leaf Icon */}
                  <img
                    src={LeafIcon}
                    alt=""
                    className="absolute -top-3 md:-top-5 right-0 md:right-[-14px] size-[9px] md:size-[40px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 md:gap-4 flex-1 items-start text-left md:w-[432px]">
                  <h3 className="font-display font-bold text-[12px] md:text-[28px] leading-none md:leading-[1.3] text-text-primary">
                    Strategic Agricultural Planning
                  </h3>
                  <p className="font-sans font-normal text-[10px] md:text-[20px] leading-[1.5] text-text-primary text-justify md:text-left">
                    Our process begins with careful planning. We select the best
                    organic seeds and use sustainable, eco-friendly land
                    preparation techniques to ensure a healthy foundation for
                    every crop.
                  </p>
                  <a
                    href="/our-farm"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold text-[10px] md:text-[18px] leading-[1.5] md:leading-normal text-text-primary underline"
                  >
                    <span className="font-sans md:font-display">
                      See How We Grow
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      className="size-[5px] md:size-[24px] text-text-primary"
                    />
                  </a>
                </div>
              </div>

              {/* Card 2 - Innovative Cultivation & Training */}
              <div className="relative flex items-center gap-[10.7px] md:gap-12 w-full flex-row-reverse pl-[17px] md:pl-0 md:justify-end">
                {/* Image */}
                <div className="relative shrink-0 size-[62px] md:size-[280px]">
                  <img
                    src={LecturePhoto}
                    alt="Training session representing cultivation and education"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-4 flex-1 items-end text-right">
                  <h3 className="font-display font-bold text-[12px] md:text-[28px] leading-none md:leading-[1.3] text-text-primary w-full">
                    Innovative Cultivation & Training
                  </h3>
                  <p className="font-sans font-normal text-[10px] md:text-[20px] leading-[1.5] text-text-primary text-justify md:text-right w-full">
                    As our crops grow, our farm becomes a living classroom. We
                    implement modern cultivation methods while providing
                    hands-on training for our student interns and local farmer
                    partners.
                  </p>
                  <a
                    href="/learn-with-us"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold text-[10px] md:text-[18px] leading-[1.5] md:leading-normal text-text-primary underline"
                  >
                    <span className="font-sans md:font-display">
                      Learn More
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      className="size-[5px] md:size-[24px] text-text-primary"
                    />
                  </a>
                </div>

                {/* Heart Outline Icon */}
                <img
                  src={HeartOutlineIcon}
                  alt=""
                  className="absolute top-1 md:-top-[24px] left-[225px] md:left-auto md:right-[42px] size-[7px] md:size-[30px]"
                />
                {/* Heart Filled Icon */}
                <img
                  src={HeartFilledIcon}
                  alt=""
                  className="absolute bottom-[-10px] md:bottom-[-18px] left-[275px] md:left-auto md:right-0 size-[7px] md:size-[30px]"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col gap-9 md:gap-[78px] items-center md:mt-0">
              {/* Card 3 - Sustainable Harvesting Practicing */}
              <div className="relative flex items-center gap-[6px] md:gap-7 w-full flex-row pr-6 md:pr-0">
                {/* Image */}
                <div className="relative shrink-0 size-[56px] md:size-[252px] md:w-[252px] md:h-[251px]">
                  <img
                    src={CacaoPhoto}
                    alt="Cacao harvest representing sustainable harvesting"
                    className="w-full h-full object-contain"
                  />
                  {/* Pin Icon */}
                  <img
                    src={PinIcon}
                    alt=""
                    className="absolute -top-2 md:-top-4 left-[35px] md:left-[182px] size-[7px] md:size-[30px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-4 flex-1 items-start text-left">
                  <h3 className="font-display font-bold text-[12px] md:text-[28px] leading-none md:leading-[1.3] text-text-primary">
                    Sustainable Harvesting Practicing
                  </h3>
                  <p className="font-sans font-normal text-[10px] md:text-[20px] leading-[1.5] text-text-primary text-justify md:text-left w-full">
                    We harvest our produce at the peak of freshness, using
                    techniques that respect the land and guarantee the highest
                    quality. This is where our commitment to excellence truly
                    shines.
                  </p>
                  <a
                    href="/shop"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold text-[10px] md:text-[18px] leading-[1.5] md:leading-normal text-text-primary underline"
                  >
                    <span className="font-sans md:font-display">
                      Shop The Harvest
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      className="size-[5px] md:size-[24px] text-text-primary"
                    />
                  </a>
                </div>
              </div>

              {/* Card 4 - Community-Focused Distribution */}
              <div className="relative flex items-center gap-[10px] md:gap-[13px] w-full flex-row-reverse pl-3 md:pl-0 md:justify-end">
                {/* Image */}
                <div className="relative shrink-0 size-[62px] md:size-[280px]">
                  <img
                    src={ProductsShowcase}
                    alt="Products showcase representing community distribution"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-4 flex-1 items-end text-right">
                  <h3 className="font-display font-bold text-[12px] md:text-[28px] leading-none md:leading-[1.3] text-text-primary w-full">
                    Community-Focused Distribution
                  </h3>
                  <p className="font-sans font-normal text-[10px] md:text-[20px] leading-[1.5] text-text-primary text-justify md:text-right w-full">
                    Our harvest directly serves and strengthens the community.
                    We supply local businesses, sell to customers through our
                    shop, and ensure our partners share in the harvest.
                  </p>
                  <a
                    href="/our-partners"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold text-[10px] md:text-[18px] leading-[1.5] md:leading-normal text-text-primary underline"
                  >
                    <span className="font-sans md:font-display">
                      Become a Partner
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      className="size-[5px] md:size-[24px] text-text-primary"
                    />
                  </a>
                </div>

                {/* Leaf on Hand Icon */}
                <img
                  src={LeafOnHandIcon}
                  alt=""
                  className="absolute top-2 md:-top-[22px] left-[226px] md:left-auto md:right-[249px] size-[7px] md:size-[30px]"
                />
                {/* Plant Icon */}
                <img
                  src={PlantIcon}
                  alt=""
                  className="absolute bottom-[-10px] md:bottom-[-2px] left-[276px] md:left-auto md:right-0 size-[5px] md:size-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
