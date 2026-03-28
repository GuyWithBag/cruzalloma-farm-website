import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils/utils";

import backgroundSvg from "@/assets/svgs/FeaturesSection/background.svg";

import twoPplPic from "@/assets/images/FeaturesSection/2PPLPic.webp";
import digDigDig from "@/assets/images/FeaturesSection/DigDigDig.webp";
import girlGroupPower from "@/assets/images/FeaturesSection/GirlGroupPower.webp";
import greenHeart from "@/assets/images/FeaturesSection/GreenHeart.webp";
import groupPhoto from "@/assets/images/FeaturesSection/GroupPhoto.webp";

import mobileTwoPplPic from "@/assets/images/FeaturesSection/mobile-2PPLPicture.webp";
import mobileDigDigDig from "@/assets/images/FeaturesSection/mobile-DigDigDig.webp";
import mobileGirlGroupPower from "@/assets/images/FeaturesSection/mobile-GirlGroupPower.webp";
import mobileGreenHeart from "@/assets/images/FeaturesSection/mobile-GreenHeart.webp";
import mobileGroupPhoto from "@/assets/images/FeaturesSection/mobile-GroupPhoto.webp";

interface FeatureLinkProps {
  to: string;
  label: string;
  size?: "xs" | "sm" | "md";
}

function FeatureLink({ to, label, size = "md" }: FeatureLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-0.5 text-text-primary underline decoration-text-primary underline-offset-2 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary",
        size === "md" && "text-[18px]",
        size === "sm" && "text-[10px]",
        size === "xs" && "text-[8px]",
      )}
    >
      <span
        className={cn(
          "leading-[1.5]",
          size === "xs" ? "font-sans font-semibold" : "font-display font-bold",
        )}
      >
        {label}
      </span>
      <Icon
        icon="material-symbols:chevron-right"
        className={cn(
          size === "md" && "h-6 w-6",
          size === "sm" && "h-3 w-3",
          size === "xs" && "h-[9px] w-[9px]",
        )}
        aria-hidden="true"
      />
    </Link>
  );
}

interface CircleImageProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
  noBorder?: boolean;
}

function CircleImage({
  src,
  alt,
  size,
  className,
  noBorder = false,
}: CircleImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-full bg-moss-green",
        !noBorder && "border-4 border-moss-green",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

interface ResponsiveScaleBoxProps {
  designWidth: number | string;
  minScale?: number;
  maxScale?: number;
  className?: string;
  children: React.ReactNode;
}

function ResponsiveScaleBox({
  designWidth,
  minScale = 0.75,
  maxScale = 1.1,
  className,
  children,
}: ResponsiveScaleBoxProps) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [innerWidth, setInnerWidth] = useState<number>(
    typeof designWidth === "number" ? designWidth : 0,
  );

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let rafId = 0;
    const clamp = (value: number) =>
      Math.min(maxScale, Math.max(minScale, value));

    const update = () => {
      rafId = 0;
      const availableWidth = outer.clientWidth;
      if (!availableWidth) return;

      let baseDesignWidth: number;
      if (
        typeof designWidth === "string" &&
        designWidth.trim().endsWith("vw")
      ) {
        const pct = parseFloat(designWidth as string);
        const vw =
          typeof window !== "undefined" ? window.innerWidth : availableWidth;
        baseDesignWidth = ((isNaN(pct) ? 100 : pct) / 100) * vw;
      } else {
        baseDesignWidth =
          typeof designWidth === "number" ? designWidth : availableWidth;
      }

      const nextInnerWidth = Math.min(baseDesignWidth, availableWidth);
      const nextScale = clamp(availableWidth / nextInnerWidth);
      setInnerWidth(nextInnerWidth);
      setScale(nextScale);
      setHeight(inner.scrollHeight * nextScale);
    };

    const schedule = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    schedule();

    if (typeof ResizeObserver === "undefined") {
      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
      };
    }

    const ro = new ResizeObserver(schedule);
    ro.observe(outer);
    ro.observe(inner);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [designWidth, minScale, maxScale]);

  return (
    <div
      ref={outerRef}
      className={cn("w-full overflow-visible", className)}
      style={height ? { height } : undefined}
    >
      <div className="flex w-full justify-center overflow-visible">
        <div
          ref={innerRef}
          className="flex-none will-change-transform"
          style={{
            transform: `scale(${scale})`,
            width: innerWidth,
            transformOrigin: "top center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const collageInnerRef = useRef<HTMLDivElement | null>(null);
  const collageRafRef = useRef<number | null>(null);
  const [collageActiveCard, setCollageActiveCard] = useState<string | null>(
    null,
  );
  const collageActiveCardRef = useRef<string | null>(null);

  function handleCollageMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const inner = collageInnerRef.current;
    if (!inner) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const translateX = x * 18;
    const translateY = y * 14;
    const rotateY = x * 6;
    const rotateX = -y * 6;

    if (collageRafRef.current) {
      window.cancelAnimationFrame(collageRafRef.current);
    }
    collageRafRef.current = window.requestAnimationFrame(() => {
      inner.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // The collage is absolutely positioned and can overlap the cards.
    // When the cursor is over the collage, the cards won't receive :hover.
    // Proxy that hover by detecting which card is underneath the cursor.
    if (typeof document !== "undefined") {
      const overlay = e.currentTarget as HTMLDivElement;
      const prevPointerEvents = overlay.style.pointerEvents;
      overlay.style.pointerEvents = "none";
      const underneath = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;
      overlay.style.pointerEvents = prevPointerEvents;

      const cardEl = underneath?.closest?.(
        "[data-feature-card]",
      ) as HTMLElement | null;
      const next = cardEl?.getAttribute("data-feature-card") ?? null;
      if (collageActiveCardRef.current !== next) {
        collageActiveCardRef.current = next;
        setCollageActiveCard(next);
      }
    }
  }

  function handleCollageMouseLeave() {
    const inner = collageInnerRef.current;
    if (!inner) return;
    inner.style.transform = "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";
    collageActiveCardRef.current = null;
    setCollageActiveCard(null);
  }

  return (
    <section
      aria-labelledby="features-heading"
      className="relative w-full overflow-hidden bg-moss-green"
    >
      <h2 id="features-heading" className="sr-only">
        An Integrated Agricultural Approach
      </h2>
      <img
        src={backgroundSvg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      {/* Desktop */}
      <div className="relative hidden w-full min-[1024px]:block">
        <ResponsiveScaleBox designWidth="100vw" minScale={0.7} maxScale={1.1}>
          <div className="w-full pt-16">
            <header className="relative flex h-[200px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-pale-orange/80" />
              <div className="absolute inset-x-0 top-0 h-[5px] bg-text-primary" />
              <div className="absolute inset-x-0 bottom-0 h-[5px] bg-text-primary" />

              <div className="relative mx-auto flex h-full w-full max-w-[1312px] flex-col items-center justify-center gap-1 text-center text-text-primary">
                <p className="font-display text-[clamp(18px,1.5vw,21px)] font-semibold leading-[1.5] underline decoration-text-primary underline-offset-2">
                  Our Mission
                </p>
                <p className="font-display text-[clamp(48px,4.7vw,68px)] font-bold leading-[1.3]">
                  An Integrated Agricultural Approach
                </p>
                <p className="font-display text-[clamp(18px,1.67vw,24px)] font-normal leading-[1.5]">
                  Food • Education • Healing • Hope
                </p>
              </div>
            </header>

            <div className="relative w-full py-12 flex justify-center">
              <div className="relative flex items-start gap-[250px] py-12">
                {/* Left column */}
                <div className="flex flex-col gap-[196px] pt-[80px]">
                  {/* Agriculture */}
                  <article
                    data-feature-card="agriculture"
                    className={cn(
                      "relative isolate h-[352px] w-[548px] overflow-hidden rounded-xl bg-transparent px-8 pb-8 pt-7 text-text-primary shadow-sm transition-shadow transition-transform duration-300 ease-in-out hover:shadow-md hover:-translate-y-[-2px] transform-gpu will-change-transform before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-pale-orange/80 before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[#FFEBCC]/80 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100",
                      collageActiveCard === "agriculture" &&
                        "shadow-md -translate-y-[-2px] before:opacity-0 after:opacity-100",
                    )}
                  >
                    <div className="relative z-10 flex w-[326px] flex-col gap-[17px]">
                      <Icon
                        icon="bi:leaf"
                        className="h-[47px] w-[47px] text-text-primary transform-gpu scale-x-[-1]"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-[clamp(22px,1.94vw,28px)] font-bold leading-[1.3]">
                            Sustainable Agriculture at Its Best
                          </h3>
                          <p className="font-sans text-base font-normal leading-[1.56]">
                            We practice and teach eco-friendly farming
                            techniques that protect the environment and yield
                            high-quality, organic produce.
                          </p>
                        </div>
                        <FeatureLink to="/farm" label="Our Methods" />
                      </div>
                    </div>
                  </article>

                  {/* Tourism */}
                  <article
                    data-feature-card="tourism"
                    className={cn(
                      "relative isolate h-[318px] w-[548px] overflow-hidden rounded-xl bg-transparent p-8 text-text-primary shadow-sm transition-shadow transition-transform duration-300 ease-in-out hover:shadow-md hover:-translate-y-[-2px] transform-gpu will-change-transform before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-pale-orange/80 before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[#FFEBCC]/80 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100",
                      collageActiveCard === "tourism" &&
                        "shadow-md -translate-y-[-2px] before:opacity-0 after:opacity-100",
                    )}
                  >
                    <div className="relative z-10 flex w-[304px] flex-col gap-[14px]">
                      <Icon
                        icon="gis:poi-map-o"
                        className="h-[48px] w-[48px] text-text-primary"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-[clamp(22px,1.94vw,28px)] font-bold leading-[1.3]">
                            Agri-Tourism Experiences
                          </h3>
                          <p className="font-sans text-base font-normal leading-[1.56]">
                            Join our online community to support our mission and
                            receive exclusive content and updates from anywhere
                            in the world.
                          </p>
                        </div>
                        <FeatureLink to="/visit" label="Plan Your Visit" />
                      </div>
                    </div>
                  </article>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-[200px] w-[512px] h-[974px] pt-[32px]">
                  {/* Communities */}
                  <article
                    data-feature-card="communities"
                    className={cn(
                      "relative isolate h-[424px] w-[512px] overflow-hidden rounded-xl bg-transparent p-8 text-text-primary shadow-sm transition-shadow transition-transform duration-300 ease-in-out hover:shadow-md hover:-translate-y-[-2px] transform-gpu will-change-transform before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-pale-orange/80 before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[#FFEBCC]/80 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100",
                      collageActiveCard === "communities" &&
                        "shadow-md -translate-y-[-2px] before:opacity-0 after:opacity-100",
                    )}
                  >
                    <div className="relative z-10 ml-auto flex flex-col items-end gap-2">
                      <div className="flex w-[293px] flex-col gap-2">
                        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-3xl">
                          <Icon
                            icon="lineicons:hand-taking-leaf-1"
                            className="h-60 w-60 text-text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="font-display text-[clamp(22px,1.94vw,28px)] font-bold leading-[1.3]">
                          Empowering Communities Through Agriculture
                        </h3>
                        <p className="font-sans text-base font-normal leading-[1.56]">
                          We believe in growing more than just crops; we grow
                          opportunities. Our programs provide local farmers and
                          their families with the hands-on training and
                          sustainable livelihood skills needed to build a
                          prosperous, independent future.
                        </p>
                        <FeatureLink to="/join" label="Join Us" />
                      </div>
                    </div>
                  </article>

                  {/* Supporter Program */}
                  <article
                    data-feature-card="supporter"
                    className={cn(
                      "relative isolate w-[512px] overflow-hidden rounded-xl bg-transparent pb-8 pl-[70px] pr-8 pt-[5px] text-text-primary shadow-sm transition-shadow transition-transform duration-300 ease-in-out hover:shadow-md hover:-translate-y-[-2px] transform-gpu will-change-transform before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-pale-orange/80 before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-0 after:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[#FFEBCC]/80 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100",
                      collageActiveCard === "supporter" &&
                        "shadow-md -translate-y-[-2px] before:opacity-0 after:opacity-100",
                    )}
                  >
                    <div className="relative z-10 flex w-[256px] flex-col gap-2 pt-[17px]">
                      <Icon
                        icon="mdi:hand-heart"
                        className="h-[48px] w-[48px] text-text-primary"
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-[clamp(22px,1.94vw,28px)] font-bold leading-[1.3]">
                        Digital Supporter Program
                      </h3>
                      <p className="font-sans text-base font-normal leading-[1.56]">
                        Visit our living farm for unique educational tours and
                        workshops designed for schools, families, and curious
                        travelers.
                      </p>
                      <FeatureLink to="/join" label="Support Our Mission" />
                    </div>
                    <div className="absolute left-[350px] top-[120px] z-10">
                      <CircleImage
                        src={greenHeart}
                        alt="Green heart icon"
                        size={120}
                        className="transform-gpu will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1.6,.36,1)] hover:scale-[1.12] hover:-translate-y-[6px] motion-reduce:transition-none"
                        noBorder
                      />
                    </div>
                  </article>
                </div>

                {/* Collage */}
                <div
                  className="absolute left-1/2 top-1/2 h-[834px] w-[600px] -translate-x-1/2 -translate-y-[calc(50%+34px)]"
                  style={{ perspective: "900px" }}
                  aria-hidden="true"
                  onMouseMove={handleCollageMouseMove}
                  onMouseLeave={handleCollageMouseLeave}
                >
                  <div
                    ref={collageInnerRef}
                    className="relative h-full w-full transition-transform duration-200 ease-out will-change-transform"
                  >
                    <div className="absolute left-[5px] top-[28px] z-50 ">
                      <CircleImage
                        src={twoPplPic}
                        alt="Two people working together on the farm"
                        size={394}
                        className="transform-gpu will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1.6,.36,1)] hover:scale-[1.12] hover:-translate-y-[6px] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="absolute left-[157px] top-[238px] z-40">
                      <CircleImage
                        src={girlGroupPower}
                        alt="Group of women at Cruzalloma Farm"
                        size={428}
                        className="transform-gpu will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1.6,.36,1)] hover:scale-[1.12] hover:-translate-y-[6px] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="absolute left-[315px] top-0 z-30">
                      <CircleImage
                        src={digDigDig}
                        alt="Farmers working in the field"
                        size={285}
                        className="transform-gpu will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1.6,.36,1)] hover:scale-[1.12] hover:-translate-y-[6px] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="absolute left-0 top-[546px] z-20">
                      <CircleImage
                        src={groupPhoto}
                        alt="Community group photo at Cruzalloma Farm"
                        size={288}
                        className="transform-gpu will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1.6,.36,1)] hover:scale-[1.12] hover:-translate-y-[6px] motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveScaleBox>
      </div>

      {/* Mobile */}
      <div className="relative w-full min-[1024px]:hidden">
        <ResponsiveScaleBox designWidth="100vw" minScale={0.85} maxScale={1.2}>
          <div className="flex w-full flex-col items-center gap-[2.222px] py-[14.222px]">
            {/* Header */}
            <header className="relative flex items-center justify-center h-[44.444px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-light-grayish-orange/80" />
              <div className="absolute inset-x-0 top-0 h-px bg-text-primary" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-text-primary" />
              <div className="relative flex h-[40px] flex-col items-center justify-center text-center text-text-primary">
                <p className="font-sans text-[6px] font-semibold leading-[1.5] underline decoration-text-primary underline-offset-1">
                  Our Mission
                </p>
                <p className="font-display text-base font-bold leading-normal">
                  An Integrated Agricultural Approach
                </p>
                <p className="font-display text-[6.5px] font-normal leading-normal">
                  We focus on four key areas to cultivate knowledge and grow our
                  community.
                </p>
              </div>
            </header>

            {/* Section Body */}
            <div className="flex flex-col items-center gap-[15.21px] py-[18.027px]">
              {/* Agriculture + Tourism group */}
              <div className="flex flex-col items-center gap-[15.21px] pt-[10.14px]">
                {/* Agriculture */}
                <article className="relative flex w-[238px] flex-col items-end rounded-[4.507px] bg-pale-orange/80 pb-[12.018px] pl-[12.018px] pr-[40px] pt-[10.516px] text-text-primary shadow-sm">
                  <div className="flex w-[122.431px] flex-col gap-[6.384px]">
                    <Icon
                      icon="bi:leaf"
                      className="h-[16px] w-[16px] transform-gpu scale-x-[-1]"
                      aria-hidden="true"
                    />
                    <div className="flex w-[156px] flex-col gap-[6.009px]">
                      <div className="flex w-[156px] flex-col gap-[3.004px]">
                        <h3 className="w-[90px] font-display text-[10.5px] font-bold leading-normal text-text-primary">
                          Sustainable Agriculture at Its Best
                        </h3>
                        <p className="w-[153px] font-sans text-[7.009px] leading-[1.5] text-text-primary/90">
                          We practice and teach eco-friendly farming techniques
                          that protect the environment and yield high-quality,
                          organic produce.
                        </p>
                      </div>
                      <FeatureLink to="/farm" label="Our Methods" size="xs" />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute left-[-28px] top-[15.05px]"
                    aria-hidden="true"
                  >
                    <CircleImage
                      src={mobileTwoPplPic}
                      alt="Two people working together"
                      size={99}
                      noBorder
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute left-[169px] top-[-18.95px]"
                    aria-hidden="true"
                  >
                    <CircleImage
                      src={mobileGroupPhoto}
                      alt="Group photo"
                      size={83}
                      noBorder
                    />
                  </div>
                </article>

                {/* Tourism */}
                <article className="relative w-[238px] rounded-[4.507px] bg-pale-orange/80 p-[12.018px] text-text-primary shadow-sm">
                  <div className="flex w-[114.169px] flex-col gap-[5.258px]">
                    <Icon
                      icon="gis:poi-map-o"
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-[6.009px]">
                      <div className="flex w-[140px] flex-col gap-[3.004px]">
                        <h3 className="font-display text-[10.5px] font-bold leading-normal text-text-primary">
                          Agri-Tourism Experiences
                        </h3>
                        <p className="font-sans text-[7.009px] leading-[1.5] text-text-primary/90">
                          Join our online community to support our mission and
                          receive exclusive content and updates from anywhere in
                          the world.
                        </p>
                      </div>
                      <FeatureLink
                        to="/visit"
                        label="Plan Your Visit"
                        size="xs"
                      />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute left-[163px] top-[6.24px]"
                    aria-hidden="true"
                  >
                    <CircleImage
                      src={mobileDigDigDig}
                      alt="Farmers digging"
                      size={103}
                      noBorder
                    />
                  </div>
                </article>
              </div>

              {/* Communities + Supporter group */}
              <div className="flex w-full flex-col items-center gap-[15.21px]">
                {/* Communities */}
                <article className="relative flex w-full flex-col items-end rounded-[4.507px] bg-pale-orange/80 py-[12.018px] pl-[12.018px] pr-[6px] text-text-primary shadow-sm">
                  <div className="flex w-[161px] flex-col gap-[3.004px] px-[12px]">
                    <Icon
                      icon="lineicons:hand-taking-leaf-1"
                      className="h-[22px] w-[22px]"
                      aria-hidden="true"
                    />
                    <h3 className="w-[144px] font-display text-[10.5px] font-bold leading-normal text-text-primary">
                      Empowering Communities Through Agriculture
                    </h3>
                    <p className="w-[149px] font-sans text-[7.009px] leading-[1.5] text-text-primary/90">
                      We practice and teach eco-friendly farming techniques that
                      protect the environment and yield high-quality, organic
                      produce.
                    </p>
                    <FeatureLink to="/join" label="Join Us" size="xs" />
                  </div>

                  <div
                    className="pointer-events-none absolute left-[-30px] top-[5.69px]"
                    aria-hidden="true"
                  >
                    <CircleImage
                      src={mobileGirlGroupPower}
                      alt="Group of women farmers"
                      size={105}
                      noBorder
                    />
                  </div>
                </article>

                {/* Supporter Program */}
                <article className="relative w-[238px] rounded-[4.507px] bg-pale-orange/80 p-[12.018px] text-text-primary shadow-sm">
                  <div className="flex w-[142px] flex-col">
                    <Icon
                      icon="mdi:hand-heart"
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                    <div className="flex w-[142px] flex-col gap-[3.004px] pt-[6.384px]">
                      <h3 className="font-display text-[10.5px] font-bold leading-normal text-text-primary">
                        Digital Supporter Program
                      </h3>
                      <p className="font-sans text-[7.009px] leading-[1.5] text-text-primary/90">
                        Visit our living farm for unique educational tours and
                        workshops designed for schools, families, and curious
                        travelers.
                      </p>
                      <FeatureLink
                        to="/join"
                        label="Support Our Mission"
                        size="xs"
                      />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute left-[163px] top-[6.24px]"
                    aria-hidden="true"
                  >
                    <CircleImage
                      src={mobileGreenHeart}
                      alt="Green heart icon"
                      size={103}
                      noBorder
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </ResponsiveScaleBox>
      </div>
    </section>
  );
}
