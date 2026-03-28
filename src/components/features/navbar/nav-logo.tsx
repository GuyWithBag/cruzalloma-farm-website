import { Link } from "react-router-dom";
import { logos } from "@/lib/data/logos";

export default function NavLogo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logos.cruzalloma.icon}
        alt={logos.cruzalloma.alt}
        className="h-13 md:h-14 w-auto object-contain"
      />
    </Link>
  );
}
