import { partnerLogos } from "@/lib/data/logos";
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <section
      aria-label="Recognized by and in partnership with"
      className="w-full overflow-hidden bg-[#8fbd61]  relative "
      data-name="MarqueeSection"
    >
      <img
        src="https://texturelabs.org/wp-content/uploads/Texturelabs_CMYKPaperPatternS.jpg"
        className="w-full h-full bg-repeat absolute opacity-20"
      />
      <div className="flex flex-col items-center gap-1  md:gap-2 py-4 md:py-6 z-10 relative">
        {/* Label */}
        <p className="shrink-0 font-sans text-[8px] font-semibold uppercase leading-tight text-white md:text-[11px]">
          Recognized by in partnership with
        </p>

        {/* Scrolling track */}
        <Marquee autoFill className="">
          {partnerLogos.map((logo, i) => (
            <div className="mx-10 md:mx-16">
              <img className="h-20 " src={logo.icon} alt={logo.alt} key={i} />
            </div>
          ))}
        </Marquee>
      </div>
      {/*<img
        src="https://texturelabs.org/wp-content/uploads/Texturelabs_CMYKPaperPatternS.jpg"
        className="w-full h-full bg-repeat absolute "
      />*/}
    </section>
  );
}
