import type { Contact } from "../lib/types/contact";

export const contacts: { [key: string]: Contact } = {
  email: {
    type: "Email",
    value: "hi@example.com",
    href: "mailto:hi@example.com",
  },
  phoneNumber: {
    type: "Phone",
    value: "+1234567890",
    href: "tel:+1234567890",
  },
};
