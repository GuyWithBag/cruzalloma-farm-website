import type { NavbarItem } from "@/lib/types/navbarItem";

export const NAV_ITEMS: NavbarItem[] = [
   { label: "Our Farm", href: "#farm" },
   { label: "Shop", href: "#shop" },
   { label: "Learn With Us", href: "#learn" },
   { label: "Visit Us", href: "#visit" },
   {
      label: "Explore More",
      href: "#explore",
      dropdown: [
         { label: "Our Partners", href: "#partners" },
         { label: "Blog", href: "#blog" },
         { label: "Our Impact", href: "#impact" },
      ],
   },
];
