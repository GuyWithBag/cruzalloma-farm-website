export type NavbarItem = {
   label: string;
   href: string;
   icon?: string;
   dropdown?: NavbarDropdownItem[];
};

export type NavbarDropdownItem = {
   label: string;
   href: string;
   icon?: string;
};
