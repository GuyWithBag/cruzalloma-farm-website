import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layout";
import Home from "@/pages/HomePage";

// Import new pages
import OurFarm from "@/pages/OurFarmPage";
import Shop from "@/pages/ShopPage";
import LearnWithUs from "@/pages/LearnWithUsPage";
import VisitUs from "@/pages/VisitUsPage";
import OurPartners from "@/pages/OurPartnersPage";
import Blog from "@/pages/BlogPage";
import OurImpact from "@/pages/OurImpactPage";
import JoinUs from "@/pages/JoinUsPage";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<RootLayout />}>
               <Route path="/" element={<Home />} />

               {/* Main Nav Items */}
               <Route path="/farm" element={<OurFarm />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/learn" element={<LearnWithUs />} />
               <Route path="/visit" element={<VisitUs />} />

               {/* Dropdown Items */}
               <Route path="/partners" element={<OurPartners />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/impact" element={<OurImpact />} />

               {/* Action Items */}
               <Route path="/join" element={<JoinUs />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
