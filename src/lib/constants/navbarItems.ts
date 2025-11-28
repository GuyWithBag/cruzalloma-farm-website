import type { NavbarItem } from "@/lib/types/navbarItem";

export const NAV_ITEMS: NavbarItem[] = [
   {
      label: "Our Farm",
      href: "#farm",
      icon: "ph:plant-fill", // Icon for top item
   },
   {
      label: "Shop",
      href: "#shop",
      icon: "mdi:basket-outline",
   },
   {
      label: "Learn With Us",
      href: "#learn",
      icon: "ph:book-open-text",
   },
   {
      label: "Visit Us",
      href: "#visit",
      icon: "mdi:map-marker-outline",
   },
   {
      label: "Explore More",
      href: "#explore",
      icon: "mdi:plus-box-outline", // Icon for the dropdown trigger
      dropdown: [
         {
            label: "Our Partners",
            href: "#partners",
            icon: "mdi:handshake-outline",
         },
         { label: "Blog", href: "#blog", icon: "fluent:news-20-regular" },
         { label: "Our Impact", href: "#impact", icon: "ph:plant" },
      ],
   },
];
