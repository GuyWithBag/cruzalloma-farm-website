import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants/navbarItems";
import { cn } from "@/lib/utils/utils";

const NavAnimatedText = ({
   children,
   isActive = false,
   lineColor = "bg-white",
}: {
   children: React.ReactNode;
   isActive?: boolean;
   lineColor?: string;
}) => (
   <span className="relative inline-block w-fit group">
      {children}
      <span
         className={cn(
            "absolute left-0 bottom-[-1px] h-[2px] w-full origin-center transition-transform duration-300 ease-out",
            lineColor,
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
         )}
      />
   </span>
);

export default function Navbar() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

   const toggleMenu = () => setIsMobileMenuOpen((v) => !v);
   const closeMenu = () => setIsMobileMenuOpen(false);
   const toggleDropdown = (label: string) =>
      setOpenDropdown((prev) => (prev === label ? null : label));

   return (
      <header className="fixed inset-x-0 top-0 z-50 bg-olive-green-300 shadow-[0_4px_5px_0_rgba(0,0,0,0.5)]">
         <div className="flex h-18 items-center justify-between px-5 md:px-18">
            {/* Logo */}
            <a href="/" className="flex items-center">
               <img
                  src="/src/assets/images/logo/cruzalloma-logo.png"
                  alt="Cruzalloma Farm Logo"
                  className="h-14 w-auto object-contain"
               />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
               <ul className="flex gap-10 items-center">
                  {NAV_ITEMS.map((item) => {
                     const active = openDropdown === item.label;
                     return (
                        <li
                           key={item.label}
                           className="relative h-full flex items-center"
                           onMouseEnter={() => setOpenDropdown(item.label)}
                           onMouseLeave={() => setOpenDropdown(null)}
                        >
                           {item.dropdown ? (
                              <>
                                 {/* Dropdown Trigger */}
                                 <button
                                    onClick={() => toggleDropdown(item.label)}
                                    className={cn(
                                       "flex items-center gap-1 transition-colors outline-none",
                                       active
                                          ? "text-gray-900"
                                          : "text-black hover:text-gray-900"
                                    )}
                                 >
                                    <NavAnimatedText
                                       isActive={active}
                                       lineColor="bg-gray-900"
                                    >
                                       {item.label}
                                    </NavAnimatedText>

                                    <Icon
                                       icon="mynaui:chevron-up-solid"
                                       className={cn(
                                          "w-5 h-5 transition-transform duration-200",
                                          active ? "rotate-180" : "rotate-0"
                                       )}
                                    />
                                 </button>

                                 {/* Dropdown Items */}
                                 <div
                                    className={cn(
                                       "absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4 transition-all duration-200 ease-in-out",
                                       active
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

            {/* CTA */}
            <div className="hidden md:block">
               <Button asChild size="lg">
                  <a href="/join">Join Us</a>
               </Button>
            </div>

            {/* Mobile Toggle */}
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

         {/* Mobile Menu */}
         <div
            className={cn(
               "absolute inset-x-0 top-[72px] bg-white border-b border-neutral-200 shadow-lg md:hidden transition-all duration-300 origin-top",
               isMobileMenuOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0"
            )}
         >
            <nav className="px-4 py-6 space-y-4">
               {NAV_ITEMS.map((item) => {
                  const active = openDropdown === item.label;
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
                                       active ? "rotate-180" : "rotate-0"
                                    )}
                                 />
                              </button>
                              <div
                                 className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    active ? "max-h-96" : "max-h-0"
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
      </header>
   );
}
