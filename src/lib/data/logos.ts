import type { Logo } from "../types/logo";

import cocoaPhilLogo from "@/assets/Marquee-logos/CocoaPhil.png";
import dtiLogo from "@/assets/Marquee-logos/DTI.png";
import cidamiLogo from "@/assets/Marquee-logos/CIDAMI.png";
import daLogo from "@/assets/Marquee-logos/DA.png";
import negosyoLogo from "@/assets/Marquee-logos/Go Negosyo.png";

export const logos: { [key: string]: Logo } = {
    cocoaPhil: {
        icon: cocoaPhilLogo,
        href: undefined,
        alt: 'CocoaPhil logo',
    },
    dti: {
        icon: dtiLogo,
        href: undefined,
        alt: 'DTI logo',
    },
    cidami: {
        icon: cidamiLogo,
        href: undefined,
        alt: 'CIDAMI logo',
    },
    da: {
        icon: daLogo,
        href: undefined,
        alt: 'DA logo',
    },
    negosyo: {
        icon: negosyoLogo,
        href: undefined,
        alt: 'Go Negosyo logo',
    },
};
