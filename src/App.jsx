import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Software from "./pages/Software";

export default function App() {
  return (
    <Router>
      <div >
        
        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
        </Routes>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}