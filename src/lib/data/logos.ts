import type { Logo } from "../types/logo";

import cruzallomaLogo from '../../assets/images/logos/cruzalloma-logo.png'
import cidamLogo from '../../assets/images/logos/cidam.png'
import cocoaPhilLogo from '../../assets/images/logos/cocoa_phil.png'
import daLogo from '../../assets/images/logos/da.png'
import dtiLogo from '../../assets/images/logos/dti.svg'
import goNegosyoLogo from '../../assets/images/logos/go_negosyo.png'

export const cruzalloma: Logo = {
    icon: cruzallomaLogo,
    href: undefined,
    alt: 'Cruzalloma Farm logo',
};

export const partnerLogos: Logo[] = [
    {
        icon: cocoaPhilLogo,
        href: undefined,
        alt: 'Cocoa Phil logo',
    },
    {
        icon: dtiLogo,
        href: undefined,
        alt: 'DTI logo',
    },
    {
        icon: cidamLogo,
        href: undefined,
        alt: 'CIDAM logo',
    },
    {
        icon: daLogo,
        href: undefined,
        alt: 'Department of Agriculture logo',
    },
    {
        icon: goNegosyoLogo,
        href: undefined,
        alt: 'Go Negosyo logo',
    },
];
