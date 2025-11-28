import { useState, useCallback } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants/navbarItems";

// Import separated components
import NavLogo from "@/components/features/navbar/nav-logo";
import DesktopNav from "@/components/features/navbar/desktop-nav";
import MobileNav from "@/components/features/navbar/mobile-nav";

export default function Navbar() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

   const toggleMenu = useCallback(() => setIsMobileMenuOpen((v) => !v), []);
   const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

   const toggleDropdown = useCallback((label: string) => {
      setOpenDropdown((prev) => (prev === label ? null : label));
   }, []);

   return (
      <header className="fixed inset-x-0 top-0 z-50 bg-olive-green-300 shadow-[0_4px_5px_0_rgba(0,0,0,0.5)]">
         <div className="flex h-18 items-center justify-between px-5 md:px-18">
            <NavLogo />

            {/* Desktop View */}
            <DesktopNav
               items={NAV_ITEMS}
               openDropdown={openDropdown}
               setOpenDropdown={setOpenDropdown}
            />

            {/* CTA Button */}
            <div className="hidden md:block">
               <Button asChild size="lg">
                  <a href="/join">Join Us</a>
               </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
               onClick={toggleMenu}
               className="md:hidden p-2 text-black hover:text-gray-900 transition-colors"
               aria-label="Toggle menu"
            >
               <Icon
                  icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
                  className="h-6 w-6"
               />
            </button>
         </div>

         {/* Mobile View */}
         <MobileNav
            items={NAV_ITEMS}
            isOpen={isMobileMenuOpen}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeMenu={closeMenu}
         />
      </header>
   );
}
