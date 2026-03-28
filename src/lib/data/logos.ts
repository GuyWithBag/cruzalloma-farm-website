import type { Logo } from "../types/logo";

import cruzallomaLogo from "@/assets/images/logos/cruzalloma-logo.png";
import cocoaPhilLogo from "@/assets/Marquee-logos/cocoa-phil.png";
import dtiLogo from "@/assets/Marquee-logos/dti.png";
import cidamiLogo from "@/assets/Marquee-logos/cidami.png";
import daLogo from "@/assets/Marquee-logos/da.png";
import negosyoLogo from "@/assets/Marquee-logos/go-negosyo.png";

export const logos: { [key: string]: Logo } = {
  cruzalloma: {
    icon: cruzallomaLogo,
    href: undefined,
    alt: "Cruzalloma Farm logo",
  },
  cocoaPhil: {
    icon: cocoaPhilLogo,
    href: undefined,
    alt: "CocoaPhil logo",
  },
  dti: {
    icon: dtiLogo,
    href: undefined,
    alt: "DTI logo",
  },
  cidami: {
    icon: cidamiLogo,
    href: undefined,
    alt: "CIDAMI logo",
  },
  da: {
    icon: daLogo,
    href: undefined,
    alt: "DA logo",
  },
  negosyo: {
    icon: negosyoLogo,
    href: undefined,
    alt: "Go Negosyo logo",
  },
};

export const partnerLogos: Logo[] = [
  logos.cidami,
  logos.da,
  logos.negosyo,
  logos.cocoaPhil,
  logos.dti,
];
