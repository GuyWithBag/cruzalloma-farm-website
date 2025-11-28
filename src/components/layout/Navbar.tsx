import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
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

   // --- NEW: Auto-close on resize ---
   useEffect(() => {
      const handleResize = () => {
         // 768px matches Tailwind's 'md' breakpoint
         if (window.innerWidth >= 768) {
            setIsMobileMenuOpen(false);
            setOpenDropdown(null); // Optional: also close any open sub-menus
         }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   // --------------------------------

   return (
      <header className="fixed inset-x-0 top-0 z-50 bg-olive-green-300 shadow-[0_4px_5px_0_rgba(0,0,0,0.5)]">
         <div className="flex h-18 items-center justify-between pl-5 pr-3 sm:pl-7 sm:pr-5 md:px-19">
            <NavLogo />

            <DesktopNav
               items={NAV_ITEMS}
               openDropdown={openDropdown}
               setOpenDropdown={setOpenDropdown}
            />

            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
               <Button asChild size="lg" className="font-display">
                  <Link to={"/join"}>Join Us</Link>
               </Button>
            </div>

            <button
               onClick={toggleMenu}
               className="min-[1024px]:hidden p-2 ml-0.5 sm:ml-3 text-black hover:text-gray-900 transition-colors outline-none"
               aria-label="Toggle menu"
            >
               <Icon
                  icon={
                     isMobileMenuOpen ? "mingcute:close-line" : "tabler:menu-2"
                  }
                  className="h-10 w-10 text-primary"
               />
            </button>
         </div>

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
