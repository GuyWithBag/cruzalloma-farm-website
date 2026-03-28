import { partnerLogos } from "@/lib/data/logos";

export default function MarqueeSection() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section
      aria-label="Recognized by and in partnership with"
      className="w-full overflow-hidden bg-[#8fbd61] py-4 md:py-6"
      data-name="MarqueeSection"
    >
      <div className="flex items-center gap-4 px-4 md:gap-8 md:px-8">
        {/* Label */}
        <p className="shrink-0 font-sans text-[8px] font-semibold uppercase leading-tight text-white md:text-[11px]">
          Recognized by
          <br />
          &amp; in partnership
          <br />
          with
        </p>

        {/* Divider */}
        <div className="h-10 w-px shrink-0 bg-white/50 md:h-14" />

        {/* Scrolling track */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex w-max items-center gap-8 md:gap-14"
            style={{ animation: "marquee 18s linear infinite" }}
          >
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.icon}
                alt={logo.alt}
                className="h-8 w-auto object-contain md:h-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
