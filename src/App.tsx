import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import AdvisorWidget from "./components/AdvisorWidget";
import FeaturesPage from "./pages/FeaturesPage";

import ToolsPage from "./pages/ToolsPage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SIPCalculator from "./components/calculators/SIPCalculator";
import FDCalculator from "./components/calculators/FDCalculator";
import PPFCalculator from "./components/calculators/PPFCalculator";
import EMICalculator from "./components/calculators/EMICalculator";
import NetWorthCalculator from "./components/calculators/NetWorthCalculator";
import SukanyaCalculator from "./components/calculators/SukanyaCalculator";
import GSTCalculator from "./components/calculators/GSTCalculator";
import GratuityCalculator from "./components/calculators/GratuityCalculator";
import RentReceipt from "./components/calculators/RentReceipt";
import ContactUsPage from "./pages/ContactUsPage";
import LegalPage from "./pages/LegalPage";
import ReferPage from "./pages/ReferPage";
import TermsPage from "./pages/TermsPage";
import FDTermsPage from "./pages/FDTermsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import GoldRatePage from "./pages/GoldRatePage";
import ReferTermsPage from "./pages/ReferTermsPage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />

        <Route
          path="/products"
          element={<ProductPage />}
        />

        

        <Route
          path="/features"
          element={<FeaturesPage />}
        />

        <Route
          path="/blog"
          element={<BlogPage/>}
        />
        <Route
          path="/blog-details"
          element={<BlogDetailsPage/>}
        />

        <Route
          path="/gold-rates"
          element={<GoldRatePage/>}
        />


       

        <Route
          path="/tools"
          element={<ToolsPage />}
        />

        <Route
          path="/about"
          element={<AboutUsPage/>}
        />
        <Route
          path="/contact"
          element={<ContactUsPage/>}
        />
        <Route
          path="/privacy-policy"
          element= {<PrivacyPolicy/>}
        />
        <Route
          path="/refer-and-earn"
          element= {<ReferPage/>}
          />
        <Route
          path="/refer-and-earn-terms"
          element= {<ReferTermsPage/>}
          />
        <Route
          path="/terms-and-conditions"
          element= {<TermsPage/>}
        />
        <Route
          path="/fd-terms"
          element= {<FDTermsPage/>}
        />
        <Route
          path="/legal"
          element= {<LegalPage/>}
        />
        <Route
          path="/tools/sip-calculator"
          element= {<SIPCalculator/>}
        />
        <Route
          path="/tools/fd-calculator"
          element= {<FDCalculator/>}
        />
        <Route
          path="/tools/ppf-calculator"
          element= {<PPFCalculator/>}
        />
        <Route
          path="/tools/loan-calculator"
          element= {<EMICalculator/>}
        />
        <Route
          path="/tools/net-worth-calculator"
          element= {<NetWorthCalculator/>}
        />
        <Route
          path="/tools/sukanya-yojana"
          element= {<SukanyaCalculator/>}
        />
        <Route
          path="/tools/gst-calculator"
          element= {<GSTCalculator/>}
        />
        <Route
          path="/tools/gratuity-calculator"
          element= {<GratuityCalculator/>}
        />
        <Route
          path="/tools/rent-receipt"
          element= {<RentReceipt/>}
        />

      </Routes>

      <Footer />

      <AdvisorWidget />
    </>
  );
}