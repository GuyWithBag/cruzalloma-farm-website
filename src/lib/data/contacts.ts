import type { Contact } from "../types/contact";

export const contacts: { [key: string]: Contact } = {
   email: {
      type: "Email",
      value: "cruzalloma@gmail.com",
      href: "mailto:cruzalloma@gmail.com",
   },
   phoneNumber: {
      type: "Phone",
      value: "+63 927 824 6320",
      href: "tel:+639278246320",
   },
};
