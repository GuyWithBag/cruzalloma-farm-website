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
   return (
      <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
         <ul className="flex gap-10 items-center">
            {items.map((item) => {
               const isActive = openDropdown === item.label;

               return (
                  <li
                     key={item.label}
                     className="relative h-full flex items-center"
                     onMouseEnter={() => setOpenDropdown(item.label)}
                     onMouseLeave={() => setOpenDropdown(null)}
                  >
                     {item.dropdown ? (
                        <>
                           <button
                              className={cn(
                                 "flex items-center gap-1 transition-colors outline-none",
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
                                 "absolute top-full w-56 pt-4 transition-all duration-300 ease-out z-50",
                                 // Positioning: Aligns sharp left edge under the chevron
                                 "left-[calc(100%-24px)]",
                                 isActive
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                              )}
                           >
                              {/* The Bubble Shape */}
                              <div className="bg-[#F8F7F2] shadow-xl overflow-hidden p-2 rounded-[28px] rounded-tl-none border border-stone-100">
                                 <ul className="flex flex-col gap-1">
                                    {item.dropdown.map((subItem) => (
                                       <li key={subItem.label}>
                                          <a
                                             href={subItem.href}
                                             className="flex items-center gap-3 px-4 py-3 text-sm text-stone-600 hover:text-stone-900 hover:bg-white/50 rounded-2xl transition-all duration-200 group/item"
                                          >
                                             {/* Icon Render */}
                                             {subItem.icon && (
                                                <Icon
                                                   icon={subItem.icon}
                                                   className="w-5 h-5 text-stone-500 group-hover/item:text-stone-900 transition-colors"
                                                />
                                             )}
                                             <span className="font-medium">
                                                {subItem.label}
                                             </span>
                                          </a>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </>
                     ) : (
                        <a
                           href={item.href}
                           className="text-black hover:text-gray-900 outline-none"
                        >
                           <NavAnimatedText lineColor="bg-white">
                              {item.label}
                           </NavAnimatedText>
                        </a>
                     )}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
