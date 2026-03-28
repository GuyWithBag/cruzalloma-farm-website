import React from "react";
import Hero from "@/assets/images/cta-section/hero.webp";
import Wallpaper from "@/assets/images/cta-section/wallpaper.webp";

const CTASection: React.FC = () => {
  // SVG Pattern for the background to match the leaf design
  // Encoded as a data URI for portability

  return (
    <div className="w-full min-h-screen grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2  font-sans">
      {/* SECTION 1: Image
        - Desktop: Left side (Order 1)
        - Mobile: Bottom side (Order 2)
      */}
      <div className="relative order-last md:order-first ">
        <img
          src={Hero}
          alt="Nature landscape with trees and plants"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* SECTION 2: Text Content
        - Desktop: Right side (Order 2)
        - Mobile: Top side (Order 1)
      */}
      <div
        className=" bg-[#2e402a] text-white order-first md:order-last flex flex-col justify-center py-6 relative "
        style={{
          backgroundImage: `url("${Wallpaper}")`,
          backgroundSize: "1000px 1000px",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Decorative Top/Bottom Borders (Optional to match specific aesthetic if needed) */}
        {/*<div className="absolute top-0 left-0 w-full h-2 bg-[#44573f] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#44573f] opacity-50"></div>*/}

        <div className="px-6 md:px-16 lg:px-24 flex py-12 justify-center border-t-4 border-b-4 border-green-stroke-line bg-transparent-moss-600/61 ">
          <div className="max-w-xl mx-auto md:mx-0 z-10 ">
            <h1 className="text-heading-2 font-bold leading-tight mb-6">
              Ready to Make a Difference?
            </h1>

            <p className="text-body-medium text-gray-200 mb-10 leading-relaxed">
              Whether you're a student, a farmer, a potential partner, or a
              passionate supporter, there's a place for you in the CRUZALLOMA
              story. Become a part of our mission today.
            </p>

            <div className="flex flex-row gap-4">
              {/* Primary Button */}
              <button className="flex-1 md:flex-none bg-[#23331f] hover:bg-[#647439]/53  text-white border border-[#5c7055] py-3 px-6 md:px-8 rounded transition-colors duration-200 text-center font-medium text-button-small">
                Get Involved
              </button>

              {/* Secondary Button */}
              <button className="flex-1 md:flex-none bg-transparent hover:bg-white/10 text-white border border-[#5c7055] py-3 px-6 md:px-8 rounded transition-colors duration-200 text-center font-medium text-button-small">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
