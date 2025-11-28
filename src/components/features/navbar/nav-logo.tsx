import { Link } from "react-router-dom";

export default function NavLogo() {
   return (
      <Link to="/" className="flex items-center">
         <img
            src="/src/assets/images/logo/cruzalloma-logo.png"
            alt="Cruzalloma Farm Logo"
            className="h-13 md:h-14 w-auto object-contain"
         />
      </Link>
   );
}
