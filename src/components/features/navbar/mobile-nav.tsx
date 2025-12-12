import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
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
            // Position
            "absolute top-[72px] right-5 z-40",
            // Shape & Colors
            "bg-[#9DC08B] border-[5px] border-[#FDFCF8] rounded-[24px] rounded-tr-none shadow-xl",
            // Sizing (Smaller now)
            "w-[230px] p-4",
            // Animation: Fade In/Out Only (No scaling)
            "transition-all duration-300 ease-in-out",
            isOpen
               ? "opacity-100 translate-y-0 visible"
               : "opacity-0 -translate-y-2 invisible"
         )}
      >
         <nav className="grid grid-cols-2 gap-y-4 gap-x-2">
            {items.map((item, index) => {
               const isFirst = index === 0;
               const isDropdownActive = openDropdown === item.label;

               return (
                  <div
                     key={item.label}
                     className={cn(
                        "relative flex flex-col items-center justify-center text-center",
                        isFirst ? "col-span-2" : "col-span-1"
                     )}
                  >
                     {item.dropdown ? (
                        <>
                           <button
                              onClick={() => toggleDropdown(item.label)}
                              className="flex flex-col items-center gap-1.5 group outline-none"
                           >
                              {/* Circle Icon Container (Smaller: 48px) */}
                              <div className="w-12 h-12 rounded-full bg-[#1A3C1A] flex items-center justify-center text-[#9DC08B] group-hover:bg-[#2F522F] transition-colors shadow-sm">
                                 <Icon
                                    icon={item.icon || "mdi:circle"}
                                    className="w-6 h-6 text-[#FDFCF8]"
                                 />
                              </div>
                              {/* Label (Smaller Text) */}
                              <span className="flex items-center gap-1 text-xs font-bold text-[#1A3C1A]">
                                 {item.label}
                                 <Icon
                                    icon="mynaui:chevron-up-solid"
                                    className={cn(
                                       "w-3 h-3 transition-transform",
                                       isDropdownActive
                                          ? "rotate-180"
                                          : "rotate-0"
                                    )}
                                 />
                              </span>
                           </button>

                           {/* Dropdown Mini Popover */}
                           <div
                              className={cn(
                                 "absolute top-full mt-1 w-40 bg-[#F8F7F2] rounded-lg shadow-lg border border-stone-200 overflow-hidden transition-all duration-200 z-50",
                                 "left-1/2 -translate-x-1/2",
                                 isDropdownActive
                                    ? "opacity-100 translate-y-0 visible"
                                    : "opacity-0 -translate-y-2 invisible"
                              )}
                           >
                              <ul className="py-1">
                                 {item.dropdown.map((subItem) => (
                                    <li key={subItem.label}>
                                       <Link
                                          to={subItem.href}
                                          onClick={closeMenu}
                                          className="flex items-center gap-2 px-3 py-2 text-xs text-stone-700 hover:bg-stone-100 hover:text-black"
                                       >
                                          {subItem.icon && (
                                             <Icon
                                                icon={subItem.icon}
                                                className="w-3.5 h-3.5 opacity-70"
                                             />
                                          )}
                                          {subItem.label}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </>
                     ) : (
                        <Link
                           to={item.href}
                           onClick={closeMenu}
                           className="flex flex-col items-center gap-1.5 group outline-none"
                        >
                           <div className="w-12 h-12 rounded-full bg-[#1A3C1A] flex items-center justify-center group-hover:bg-[#2F522F] transition-colors shadow-sm">
                              <Icon
                                 icon={item.icon || "mdi:circle"}
                                 className="w-6 h-6 text-[#FDFCF8]"
                              />
                           </div>
                           <span className="text-xs font-bold text-[#1A3C1A]">
                              {item.label}
                           </span>
                        </Link>
                     )}
                  </div>
               );
            })}
         </nav>
      </div>
   );
}
