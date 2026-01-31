import { Icon } from "@iconify/react";
import desktopBackground from "@/assets/images/BenefitsSection/Background.png";

export default function BenefitsSection() {
   return (
      <section
         aria-labelledby="benefits-title"
         className="relative w-full min-h-[1180px] overflow-hidden text-white md:min-h-[852px]"
         data-name="BenefitsSection"
         data-node-id="837:10222"
      >
         {/* Background image layer */}
         <div
            className="absolute inset-0"
            data-name="Background"
            data-node-id="837:10223"
         >
            <img
               alt=""
               className="absolute left-0 top-0 hidden h-full w-full max-w-none max-h-none object-cover md:block"
               src={desktopBackground}
            />
            <img
               alt=""
               className="absolute left-1/2 top-1/2 block h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover md:hidden"
               src={desktopBackground}
            />
         </div>

         {/* Main content wrapper */}
         <div className="relative mx-auto flex w-full max-w-[1448px] flex-col items-center justify-center gap-[39px] px-[18px] pb-[120px] pt-[104px] md:flex-row md:px-[77px] md:py-[76px]">
            {/* Left column: eyebrow, heading, description, actions */}
            <div
               className="flex w-full max-w-[403px] flex-col items-start gap-[20px] overflow-hidden md:gap-[20px]"
               data-name="LeftContainer"
               data-node-id="837:10224"
            >
               <div
                  className="flex items-center justify-center pl-[6px]"
                  data-name="Eyebrow"
                  data-node-id="1019:8013"
               >
                  <p className="font-display text-[8px] font-semibold leading-[1.5] md:text-[21px]">
                     The Impact
                  </p>
               </div>
               <h2
                  id="benefits-title"
                  className="font-display text-[20px] font-bold leading-[1.4] md:text-[68px] md:leading-[1.3]"
                  data-node-id="837:10226"
               >
                  Cultivating More Than Just Crops
               </h2>
               <p
                  className="font-sans text-[14px] leading-[1.5] md:text-[20px]"
                  data-node-id="837:10227"
               >
                  At CRUZALLOMA, we believe that sustainable agriculture is the
                  root of community prosperity. Our programs are designed to
                  empower local farmers, foster future leaders, and create
                  lasting economic growth for families across Mindanao.
               </p>
               <div
                  className="flex items-center gap-[16.272px] md:gap-[24px]"
                  data-name="Actions"
                  data-node-id="837:10228"
               >
                  <button
                     type="button"
                     className="border border-white px-[16px] py-[8px] text-[10px] font-semibold leading-[1.5] font-sans md:px-[24px] md:py-[12px] md:text-[16px] md:font-normal"
                     data-name="LeftButton"
                     data-node-id="1101:9407"
                  >
                     Get Involved
                  </button>
                  <button
                     type="button"
                     className="flex items-center gap-[5.424px] text-[10px] font-semibold leading-[1.5] underline font-sans md:gap-[8px] md:text-[16px] md:font-normal md:no-underline"
                     data-name="RightLink"
                     data-node-id="1101:9453"
                  >
                     Learn More
                     <Icon
                        icon="ph:arrow-right"
                        className="h-[16.272px] w-[16.272px] md:h-[23.617px] md:w-[24.692px]"
                     />
                  </button>
               </div>
            </div>

            {/* Right column: benefit cards */}
            <div
               className="flex w-full max-w-[852px] flex-col items-start gap-[24px] md:gap-[64px]"
               data-name="BenefitItems"
               data-node-id="837:10231"
            >
               {/* Top row benefits */}
               <div
                  className="flex w-full flex-col gap-[24px] md:flex-row md:gap-[48px]"
                  data-name="TopRow"
                  data-node-id="837:10232"
               >
                  <article
                     className="flex flex-col items-start gap-[9.805px] md:gap-[24px] md:p-[15px]"
                     data-name="Benefit Item / Farmer Income"
                     data-node-id="1101:9275"
                  >
                     <Icon
                        icon="fa6-solid:handshake"
                        className="h-[19.611px] w-[19.611px] md:h-[48px] md:w-[48px]"
                     />
                     <h3 className="text-[16px] font-bold leading-[1.3] md:text-[28px]">
                        Increased Farmer Income
                     </h3>
                     <p className="font-sans text-[14px] leading-[1.5] md:text-[20px] md:leading-[127.975%]">
                        Providing access to modern techniques and new markets to
                        ensure our local farmers earn a sustainable living
                        wage.
                     </p>
                  </article>

                  <article
                     className="flex flex-col items-start gap-[9.805px] md:gap-[24px] md:p-[15px]"
                     data-name="Benefit Item / Local Produce"
                     data-node-id="1101:9359"
                  >
                     <Icon
                        icon="ri:seedling-fill"
                        className="h-[19.611px] w-[19.611px] md:h-[48px] md:w-[48px]"
                     />
                     <h3 className="text-[16px] font-bold leading-[1.3] md:text-[28px]">
                        Access to Fresh, Local Produce
                     </h3>
                     <p className="font-sans text-[14px] leading-[1.5] md:text-[20px] md:leading-[127.975%]">
                        Supplying our community and local businesses with
                        high-quality, organic produce that is healthy and
                        sustainably grown.
                     </p>
                  </article>
               </div>

               {/* Bottom row benefits */}
               <div
                  className="flex w-full flex-col gap-[19.611px] md:flex-row md:gap-[48px]"
                  data-name="BottomRow"
                  data-node-id="837:10241"
               >
                  <article
                     className="flex flex-col items-start gap-[9.805px] md:gap-[24px] md:p-[15px]"
                     data-name="Benefit Item / Youth Education"
                     data-node-id="1101:9365"
                  >
                     <Icon
                        icon="mdi:graduation-cap"
                        className="h-[19.611px] w-[19.611px] md:h-[48px] md:w-[48px]"
                     />
                     <h3 className="text-[16px] font-bold leading-[1.3] md:text-[28px]">
                        Youth Education &amp; Internships
                     </h3>
                     <p className="font-sans text-[14px] leading-[1.5] md:text-[20px] md:leading-[127.975%]">
                        Inspiring the next generation through hands-on school
                        tours and providing invaluable real-world university
                        internships.
                     </p>
                  </article>

                  <article
                     className="flex flex-col items-start gap-[9.805px] md:gap-[24px] md:p-[15px]"
                     data-name="Benefit Item / Partnerships"
                     data-node-id="1101:9371"
                  >
                     <Icon
                        icon="mdi:people-add"
                        className="h-[19.611px] w-[19.611px] md:h-[48px] md:w-[48px]"
                     />
                     <h3 className="text-[16px] font-bold leading-[1.3] md:text-[28px]">
                        Stronger Regional Partnerships
                     </h3>
                     <p className="font-sans text-[14px] leading-[1.5] md:text-[20px] md:leading-[127.975%]">
                        Building a powerful network with LGUs, NGOs, and
                        academic institutions to drive regional growth and
                        environmental stewardship.
                     </p>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
}