import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";
import type { NavbarItem } from "@/lib/types/navbarItem";

interface MobileNavProps {
   items: NavbarItem[];
   isOpen: boolean;
   openDropdown: string | null;
   toggleDropdown: (label: string) => void;
   closeMenu: () => void;
}

export default function MobileNav({
   items,
   isOpen,
   openDropdown,
   toggleDropdown,
   closeMenu,
}: MobileNavProps) {
   return (
      <div
         className={cn(
            "absolute inset-x-0 top-[72px] bg-white border-b border-neutral-200 shadow-lg md:hidden transition-all duration-300 origin-top",
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
         )}
      >
         <nav className="px-4 py-6 space-y-4">
            {items.map((item) => {
               const isActive = openDropdown === item.label;

               return (
                  <div key={item.label}>
                     {item.dropdown ? (
                        <>
                           <button
                              onClick={() => toggleDropdown(item.label)}
                              className="flex items-center justify-between w-full text-lg text-black hover:text-gray-900 transition-colors py-2"
                           >
                              {item.label}
                              <Icon
                                 icon="mynaui:chevron-up-solid"
                                 className={cn(
                                    "w-5 h-5 transition-transform",
                                    isActive ? "rotate-180" : "rotate-0"
                                 )}
                              />
                           </button>
                           <div
                              className={cn(
                                 "overflow-hidden transition-all duration-300",
                                 isActive ? "max-h-96" : "max-h-0"
                              )}
                           >
                              <div className="pl-4 pb-2 space-y-2 border-l-2 border-neutral-100 ml-2">
                                 {item.dropdown.map((subItem) => (
                                    <a
                                       key={subItem.label}
                                       href={subItem.href}
                                       className="block text-black hover:text-gray-900 transition-colors py-1"
                                       onClick={closeMenu}
                                    >
                                       {subItem.label}
                                    </a>
                                 ))}
                              </div>
                           </div>
                        </>
                     ) : (
                        <a
                           href={item.href}
                           className="block text-lg text-black hover:text-gray-900 transition-colors py-2"
                           onClick={closeMenu}
                        >
                           {item.label}
                        </a>
                     )}
                  </div>
               );
            })}

            <div className="pt-4">
               <Button className="w-full" asChild>
                  <a href="/join">Join Us</a>
               </Button>
            </div>
         </nav>
      </div>
   );
}
