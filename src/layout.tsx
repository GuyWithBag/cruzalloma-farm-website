import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout() {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar />
         <main className="flex-grow">
            <Outlet /> {/* Renders child route pages here */}
         </main>
      </div>
   );
}
