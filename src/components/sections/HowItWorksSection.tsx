import { Icon } from "@iconify/react";
import SectionHeader from "../dev-ui/SectionHeader";

// Import SVG assets
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
import HowItWorksStroke from "@/assets/svgs/HowItWorksSection/Rectangle 84 background.svg";

// Background image
import HowItWorksBackground from "@/assets/images/HowItWorksSection/Background-HowItWorks.webp";

export default function HowItWorksSection() {
  return (
    <section
      className="relative bg-bg-primary overflow-hidden w-full border-[6px] md:border-[10px] border-solid border-transparent"
      style={{
        borderImageSource: `url(${HowItWorksStroke})`,
        borderImageSlice: 1,
        borderImageRepeat: "round",
      }}
    >
      {/* Background Image */}
      <img
        src={HowItWorksBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Content Container*/}
      <div className="relative flex flex-col items-center gap-6 md:gap-[42px] pt-[18px] md:pt-[80px] pb-[28px] md:pb-[128px]">
        {/* Header */}
        <div className="relative flex flex-col items-center justify-center gap-[2px] md:gap-[1vw] w-full max-w-[100%] md:h-[180px] h-[55px] bg-light-moss-green/80 border-t border-b border-green-stroke-line md:border-t-[5px] md:border-b-[5px] text-center text-text-primary">
          <SectionHeader
            eyebrow="Our Process"
            heading="How We Cultivate Knowledge"
            subHeading="A transparent look at our farm-to-community approach, from planting to harvesting."
            className="text-center"
          />
        </div>

        {/* Content Section */}
        <div className="relative w-full px-[16px] md:px-[15px] pt-[19px] md:pt-[46px] md:pb-[46px]">
          {/* Wavy Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-[50px] md:top-[100px] md:w-[42vw] md:h-[75vw] md:max-w-[658px] md:max-h-[1176px] transform -translate-x-1/2 pointer-events-none">
            <img
              src={WavyLine}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Process Cards Container */}
          <div className="relative flex flex-col gap-9 md:gap-4 md:pt-[73px] mx-auto">
            {/* Top Row */}
            <div className="flex flex-col gap-9 md:gap-4 items-center">
              {/* Card 1 - Strategic Agricultural Planning */}
              <div className="relative flex items-center gap-[7px] md:gap-[2vw] w-full flex-row pr-[15px] md:pr-0 md:mr-auto md:max-w-[50vw]">
                {/* Image */}
                <div className="relative shrink-0 size-[100px] md:w-[18vw] md:h-[18vw] md:max-w-[280px] md:max-h-[280px]">
                  <img
                    src={TreePhoto}
                    alt="Tree plantation representing strategic agricultural planning"
                    className="w-full h-full object-contain"
                  />
                  {/* Leaf Icon */}
                  <img
                    src={LeafIcon}
                    alt=""
                    className="absolute top-[-10%] right-[20%] md:top-[8%] md:right-[8%] w-[15%] h-[15%] md:w-[30%] md:h-[30%] max-w-[40px] max-h-[40px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 md:gap-[1vw] flex-1 items-start text-left">
                  <h3
                    className="font-display font-bold text-[12px] leading-none md:leading-[1.3] text-text-primary"
                    style={{ fontSize: "clamp(12px, 1.8vw, 28px)" }}
                  >
                    Strategic Agricultural Planning
                  </h3>
                  <p
                    className="font-sans font-normal text-[10px] leading-[1.5] text-text-primary text-justify md:text-left"
                    style={{ fontSize: "clamp(10px, 1.3vw, 20px)" }}
                  >
                    Our process begins with careful planning. We select the best
                    organic seeds and use sustainable, eco-friendly land
                    preparation techniques to ensure a healthy foundation for
                    every crop.
                  </p>
                  <a
                    href="/our-farm"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold leading-[1.5] md:leading-normal text-text-primary underline transition-opacity duration-300 ease-in-out hover:opacity-70"
                    style={{ fontSize: "clamp(10px,1.3vw,18px)" }}
                  >
                    <span className="font-sans md:font-display">
                      See How We Grow
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      style={{ fontSize: "clamp(6px,1.6vw,24px)" }}
                    />
                  </a>
                </div>
              </div>

              {/* Card 2 - Innovative Cultivation & Training */}
              <div className="relative flex items-center gap-[10.7px] md:gap-[2vw] w-full flex-row-reverse pl-3 md:pl-0 md:justify-end md:ml-auto md:max-w-[50vw]">
                {/* Image */}
                <div className="relative shrink-0 size-[100px] md:w-[18vw] md:h-[18vw] md:max-w-[280px] md:max-h-[280px]">
                  <img
                    src={LecturePhoto}
                    alt="Training session representing cultivation and education"
                    className="w-full h-full object-contain"
                  />

                  {/* Heart Outline Icon (anchored to image) */}
                  <img
                    src={HeartOutlineIcon}
                    alt=""
                    className="absolute left-[0%] top-[15%] -translate-x-1/2 -translate-y-1/2 w-[12%] h-[12%] md:w-[30%] md:h-[30%] max-w-[30px] max-h-[30px]"
                  />

                  {/* Heart Filled Icon (anchored to image) */}
                  <img
                    src={HeartFilledIcon}
                    alt=""
                    className="absolute left-[85%] top-[72%] w-[12%] h-[12%] md:w-[30%] md:h-[30%] max-w-[30px] max-h-[30px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-[1vw] flex-1 items-end text-right">
                  <h3
                    className="font-display font-bold text-[12px] leading-none md:leading-[1.3] text-text-primary w-full"
                    style={{ fontSize: "clamp(12px, 1.8vw, 28px)" }}
                  >
                    Innovative Cultivation & Training
                  </h3>
                  <p
                    className="font-sans font-normal text-[10px] leading-[1.5] text-text-primary text-justify md:text-right w-full"
                    style={{ fontSize: "clamp(10px, 1.3vw, 20px)" }}
                  >
                    As our crops grow, our farm becomes a living classroom. We
                    implement modern cultivation methods while providing
                    hands-on training for our student interns and local farmer
                    partners.
                  </p>
                  <a
                    href="/learn-with-us"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold leading-[1.5] md:leading-normal text-text-primary underline transition-opacity duration-300 ease-in-out hover:opacity-70"
                    style={{ fontSize: "clamp(10px,1.3vw,18px)" }}
                  >
                    <span className="font-sans md:font-display">
                      Learn More
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      style={{ fontSize: "clamp(6px,1.6vw,24px)" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col gap-9 md:gap-4 items-center">
              {/* Card 3 - Sustainable Harvesting Practicing */}
              <div className="relative flex items-center gap-[7px] md:gap-[2vw] w-full flex-row pr-[13px] md:pr-0 md:mr-auto md:max-w-[50vw]">
                {/* Image */}
                <div className="relative shrink-0 size-[100px] md:w-[16vw] md:h-[16vw] md:max-w-[252px] md:max-h-[252px]">
                  <img
                    src={CacaoPhoto}
                    alt="Cacao harvest representing sustainable harvesting"
                    className="w-full h-full object-contain"
                  />
                  {/* Pin Icon */}
                  <img
                    src={PinIcon}
                    alt=""
                    className="absolute top-[-6%] md:top-[-6%] left-[72%] md:left-[72%] w-[15%] h-[15%] md:w-[30%] md:h-[30%] max-w-[35px] max-h-[35px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-[1vw] flex-1 items-start text-left">
                  <h3
                    className="font-display font-bold text-[12px] leading-none md:leading-[1.3] text-text-primary"
                    style={{ fontSize: "clamp(12px, 1.8vw, 28px)" }}
                  >
                    Sustainable Harvesting Practicing
                  </h3>
                  <p
                    className="font-sans font-normal text-[10px] leading-[1.5] text-text-primary text-justify md:text-left w-full"
                    style={{ fontSize: "clamp(10px, 1.3vw, 20px)" }}
                  >
                    We harvest our produce at the peak of freshness, using
                    techniques that respect the land and guarantee the highest
                    quality. This is where our commitment to excellence truly
                    shines.
                  </p>
                  <a
                    href="/shop"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold leading-[1.5] md:leading-normal text-text-primary underline transition-opacity duration-300 ease-in-out hover:opacity-70"
                    style={{ fontSize: "clamp(10px,1.3vw,18px)" }}
                  >
                    <span className="font-sans md:font-display">
                      Shop The Harvest
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      style={{ fontSize: "clamp(6px,1.6vw,24px)" }}
                    />
                  </a>
                </div>
              </div>

              {/* Card 4 - Community-Focused Distribution */}
              <div className="relative flex items-center gap-[10px] md:gap-[2vw] w-full flex-row-reverse pl-3 md:pl-0 md:justify-end md:ml-auto md:max-w-[50vw]">
                {/* Image */}
                <div className="relative shrink-0 size-[100px] md:w-[18vw] md:h-[18vw] md:max-w-[280px] md:max-h-[280px]">
                  <img
                    src={ProductsShowcase}
                    alt="Products showcase representing community distribution"
                    className="w-full h-full object-contain"
                  />

                  {/* Leaf on Hand Icon (anchored to image) */}
                  <img
                    src={LeafOnHandIcon}
                    alt=""
                    className="absolute left-[11%] top-[-8%] w-[15%] h-[15%] md:w-[40%] md:h-[40%] max-w-[45px] max-h-[45px]"
                  />

                  {/* Plant Icon (anchored to image) */}
                  <img
                    src={PlantIcon}
                    alt=""
                    className="absolute left-[86%] top-[81%] w-[12%] h-[12%] md:w-[30%] md:h-[30%] max-w-[24px] max-h-[24px]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[3.5px] md:gap-[1vw] flex-1 items-end text-right">
                  <h3
                    className="font-display font-bold text-[12px] leading-none md:leading-[1.3] text-text-primary w-full"
                    style={{ fontSize: "clamp(12px, 1.8vw, 28px)" }}
                  >
                    Community-Focused Distribution
                  </h3>
                  <p
                    className="font-sans font-normal text-[10px] leading-[1.5] text-text-primary text-justify md:text-right w-full"
                    style={{ fontSize: "clamp(10px, 1.3vw, 20px)" }}
                  >
                    Our harvest directly serves and strengthens the community.
                    We supply local businesses, sell to customers through our
                    shop, and ensure our partners share in the harvest.
                  </p>
                  <a
                    href="/our-partners"
                    className="flex items-center gap-0 font-sans font-semibold md:font-bold leading-[1.5] md:leading-normal text-text-primary underline transition-opacity duration-300 ease-in-out hover:opacity-70"
                    style={{ fontSize: "clamp(10px,1.3vw,18px)" }}
                  >
                    <span className="font-sans md:font-display">
                      Become a Partner
                    </span>
                    <Icon
                      icon="mdi:chevron-right"
                      style={{ fontSize: "clamp(6px,1.6vw,24px)" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
