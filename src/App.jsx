import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

import ScrollToTop from "./components/ScrollToTop";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Software from "./pages/Software";
import About from "./pages/About";
import Service from "./pages/Service";
import Seedling from "./pages/Seedling";
import KrushiSeva from "./pages/KrushiSeva";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div >
        
        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service/>} />
          <Route path="/Seed" element={<Seedling/>} />
          <Route path="/kendra" element={<KrushiSeva/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditions/>} />
        </Routes>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}