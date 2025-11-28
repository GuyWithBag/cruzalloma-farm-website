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

                           <div
                              className={cn(
                                 "absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4 transition-all duration-200 ease-in-out",
                                 isActive
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                              )}
                           >
                              <div className="rounded-md shadow-xl overflow-hidden p-1 bg-white">
                                 <ul className="flex flex-col">
                                    {item.dropdown.map((subItem) => (
                                       <li key={subItem.label}>
                                          <a
                                             href={subItem.href}
                                             className="block px-4 py-2 text-sm text-black hover:text-gray-900 hover:bg-neutral-50 rounded-md transition-colors"
                                          >
                                             <NavAnimatedText lineColor="bg-gray-900">
                                                {subItem.label}
                                             </NavAnimatedText>
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
