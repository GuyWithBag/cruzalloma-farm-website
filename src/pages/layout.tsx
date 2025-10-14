import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";

export default function RootLayout() {
  return (
    <div>
      {/* Insert Navbar here */}
      <main>
        <Outlet /> {/* Renders child route pages here */}
      </main>
      <Footer />
    </div>
  );
}
