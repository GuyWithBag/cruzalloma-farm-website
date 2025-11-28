import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils/utils";
import NavAnimatedText from "@/components/features/navbar/nav-animated-text";
import type { NavbarItem } from "@/lib/types/navbarItem";

interface DesktopNavProps {
   items: NavbarItem[];
   openDropdown: string | null;
   setOpenDropdown: (label: string | null) => void;
}

export default function DesktopNav({
   items,
   openDropdown,
   setOpenDropdown,
}: DesktopNavProps) {
   const navRef = useRef<HTMLElement>(null);
   const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setOpenDropdown(null);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [setOpenDropdown]);

   return (
      <nav
         ref={navRef}
         className="hidden min-[1024px]:block absolute left-1/2 -translate-x-1/2"
      >
         <ul className="flex gap-10 items-center whitespace-nowrap">
            {items.map((item) => {
               const isActive = openDropdown === item.label;

               return (
                  <li
                     key={item.label}
                     className="relative h-full flex items-center"
                  >
                     {item.dropdown ? (
                        <>
                           <button
                              onClick={() =>
                                 setOpenDropdown(isActive ? null : item.label)
                              }
                              className={cn(
                                 "flex items-center gap-1 transition-colors outline-none cursor-pointer",
                                 isActive
                                    ? "text-gray-900"
                                    : "text-black hover:text-gray-900"
                              )}
                           >
                              <NavAnimatedText
                                 isActive={isActive}
                                 lineColor="bg-gray-900"
                              >
                                 {item.label}
                              </NavAnimatedText>
                              <Icon
                                 icon="mynaui:chevron-up-solid"
                                 className={cn(
                                    "w-5 h-5 transition-transform duration-200",
                                    isActive ? "rotate-180" : "rotate-0"
                                 )}
                              />
                           </button>

                           {/* Dropdown Menu */}
                           <div
                              className={cn(
                                 "absolute top-full w-50 pt-4 transition-all duration-300 ease-out z-50",
                                 "left-[calc(100%-24px)]",
                                 isActive
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                              )}
                           >
                              <div className="bg-[#F8F7F2] shadow-xl overflow-hidden rounded-[40px] rounded-tl-[8px] border-2 border-stone-300">
                                 <ul className="flex flex-col">
                                    {item.dropdown.map(
                                       (subItem, index, arr) => (
                                          <li
                                             key={subItem.label}
                                             className="flex flex-col"
                                          >
                                             <Link
                                                to={subItem.href}
                                                onClick={() =>
                                                   setOpenDropdown(null)
                                                }
                                                onMouseEnter={() =>
                                                   setHoveredSubItem(
                                                      subItem.label
                                                   )
                                                }
                                                onMouseLeave={() =>
                                                   setHoveredSubItem(null)
                                                }
                                                className="flex items-center gap-5 px-7 py-3 text-base text-stone-600 hover:text-stone-900 rounded-2xl transition-all duration-200 group/item"
                                             >
                                                {subItem.icon && (
                                                   <Icon
                                                      icon={subItem.icon}
                                                      className={cn(
                                                         "w-5 h-5",
                                                         "text-stone-900 group-hover/item:text-stone-900 transition-colors",
                                                         subItem.iconClassName
                                                      )}
                                                   />
                                                )}

                                                <NavAnimatedText
                                                   lineColor="bg-stone-900"
                                                   isActive={
                                                      hoveredSubItem ===
                                                      subItem.label
                                                   }
                                                >
                                                   {subItem.label}
                                                </NavAnimatedText>
                                             </Link>

                                             {index < arr.length - 1 && (
                                                <div className="h-[1px] bg-stone-300 w-full self-center" />
                                             )}
                                          </li>
                                       )
                                    )}
                                 </ul>
                              </div>
                           </div>
                        </>
                     ) : (
                        <Link
                           to={item.href}
                           onClick={() => setOpenDropdown(null)}
                           className="text-black hover:text-gray-900 outline-none"
                        >
                           <NavAnimatedText lineColor="bg-white">
                              {item.label}
                           </NavAnimatedText>
                        </Link>
                     )}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
