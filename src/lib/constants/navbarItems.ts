import type { NavbarItem } from "@/lib/types/navbarItem";

export const NAV_ITEMS: NavbarItem[] = [
   { label: "Our Farm", href: "/farm", icon: "ph:plant-fill" },
   { label: "Shop", href: "/shop", icon: "mdi:basket-outline" },
   { label: "Learn With Us", href: "/learn", icon: "ph:book-open-text" },
   { label: "Visit Us", href: "/visit", icon: "mdi:map-marker-outline" },
   {
      label: "Explore More",
      href: "#", // Keeps this as # since it's just a dropdown trigger
      icon: "mdi:plus-box-outline",
      dropdown: [
         {
            label: "Our Partners",
            href: "/partners",
            icon: "mdi:handshake-outline",
         },
         { label: "Blog", href: "/blog", icon: "mdi:blog" },
         {
            label: "Our Impact",
            href: "/impact",
            icon: "game-icons:farmer",
            iconClassName: "w-[22px] h-[22px]",
         },
      ],
   },
];
