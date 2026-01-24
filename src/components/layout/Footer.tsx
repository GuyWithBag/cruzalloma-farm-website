import logo from "@/assets/images/logo/cruzalloma-logo.png";
import { contacts } from "@/lib/data/contacts";
import { socials } from "@/lib/data/socials";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const primaryLinks = [
  { label: "Farm tours", to: "/visit" },
  { label: "Learning hub", to: "/learn" },
  { label: "Sustainable methods", to: "/farm" },
  { label: "Community impact", to: "/impact" },
  { label: "Digital programme", to: "/learn" },
];

const secondaryLinks = [
  { label: "Crop insights", to: "/blog" },
  { label: "Harvest updates", to: "/blog" },
  { label: "Research links", to: "/learn" },
  { label: "Partner network", to: "/partners" },
  { label: "Support resources", to: "/join" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of engagement", href: "#" },
  { label: "Cookie preferences", href: "#" },
];

export default function Footer() {
  const email = contacts.email;
  const phoneNumber = contacts.phoneNumber;

  const facebookHref = socials.facebook.href || "https://www.facebook.com/";
  const instagramHref = socials.instagram.href || "https://www.instagram.com/";

  return (
    <footer className="bg-navbar-green pt-16 pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-19">
        <div className="border-[3px] border-green-stroke-line bg-yellow-green-200 px-6 py-10 md:px-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr]">
            <div className="flex items-start gap-4">
              <img
                src={logo}
                alt="Cruzalloma"
                className="h-12 w-12 shrink-0 md:h-14 md:w-14"
                loading="lazy"
              />

              <div className="min-w-0">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">
                    Address
                  </p>
                  <address className="not-italic text-sm leading-5 text-primary">
                    Kiwalan, Sta. Filomena, Iligan City,
                    <br />
                    Lanao del Norte, Philippines, Iligan
                    <br />
                    City, Philippines
                  </address>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-sm font-semibold text-primary">
                    Contact
                  </p>
                  <div className="space-y-1">
                    <a
                      href={phoneNumber.href}
                      className="block w-fit text-sm text-primary underline underline-offset-4"
                    >
                      {phoneNumber.value}
                    </a>
                    <a
                      href={email.href}
                      className="block w-fit text-sm text-primary underline underline-offset-4"
                    >
                      {email.value}
                    </a>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-4">
                  <a
                    href={facebookHref}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    <Icon icon="mdi:facebook" className="h-6 w-6" />
                  </a>
                  <a
                    href={instagramHref}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    <Icon icon="mdi:instagram" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <nav aria-label="Footer" className="md:pl-2">
              <ul className="space-y-4">
                {primaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm font-semibold text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer secondary" className="md:pl-2">
              <ul className="space-y-4">
                {secondaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm font-semibold text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Legal"
            className="order-1 md:order-2"
          >
            <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary underline underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="order-2 md:order-1 text-sm text-primary">
            © 2025 CRUZALLOMA. Growing knowledge, nurturing communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
