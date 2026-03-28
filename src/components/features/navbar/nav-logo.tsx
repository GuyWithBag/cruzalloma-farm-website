import { Link } from "react-router-dom";
import logo from "@/assets/logos/cruzalloma.png";

export default function NavLogo() {
   return (
      <Link to="/" className="flex items-center">
         <img
            src={logo}
            alt="Cruzalloma logo"
            className="h-13 md:h-14 w-auto object-contain"
         />
      </Link>
   );
}
