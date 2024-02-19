/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import "./index.scss";
// pages
import Index from "views/Index.js";
import AboutUs from "components/AboutUs/AboutUs";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
import Support from "components/Support/Support";
import ContactUs from "components/ContactUs/ContactUs";
import ItConsultingServices from "components/ItConsultingServices/ItConsultingServices";
import ItProjectServices from "components/ItProjectServices/ItProjectServices";
import GISServices from "components/GISServices/GISServices";
import OurPortfolio from "components/OurPortfolio/OurPortfolio";
import OurJobs from "components/OurJobs/OurJobs";
const root = ReactDOM.createRoot(document.getElementById("root"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

root.render(
  <HashRouter>
    <ScrollToTop />
    <IndexNavbar />
    <Routes>
      <Route path="/home" element={<Index />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/it-consulting" element={<ItConsultingServices />} />
      <Route path="/it-project" element={<ItProjectServices />} />
      <Route path="/gis-services" element={<GISServices />} />
      <Route path="/our-portfolio" element={<OurPortfolio />} />
      <Route path="/our-jobs" element={<OurJobs />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
    <Footer />
  </HashRouter>
);
