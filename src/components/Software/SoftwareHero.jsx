import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SoftwareHero() {
  const navigate = useNavigate();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Agroplus Smart ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Agriculture ERP Software for farm management, crop planning, farm accounting, inventory management, labor tracking, fertigation management and agribusiness operations.",
  };

  return (
    <>
      <Helmet>
        <title>
          Agriculture ERP Software | Farm Management Software | Agroplus Smart ERP
        </title>

        <meta
          name="description"
          content="Agroplus Smart ERP helps farmers and agribusinesses manage crop planning, farm accounting, inventory management, labor tracking, fertigation schedules, sales, purchases and farm analytics."
        />

        <meta
          name="keywords"
          content="Agriculture ERP Software, Farm Management Software, Crop Management Software, Farm Accounting Software, Agribusiness ERP, Smart Farming Software, Farm Analytics, Inventory Management, Fertigation Management"
        />

        <meta
          property="og:title"
          content="Agriculture ERP Software | Agroplus Smart ERP"
        />

        <meta
          property="og:description"
          content="Complete Farm Management Software for Farmers, FPOs and Agribusinesses."
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="relative overflow-hidden pb-20 lg:pb-20 pt-20 lg:pt-30">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop"
            alt="Agriculture ERP Software Dashboard for Smart Farm Management"
            className="w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-green-900/30"></div>
        </div>

        {/* BLUR EFFECT */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 backdrop-blur-md text-green-300 px-5 py-2 mt-2 rounded-full mb-6 text-sm font-medium">
              Agriculture ERP Software for Farmers, FPOs & Agribusinesses
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Agriculture ERP Software
              <br />
              <span className="text-green-400">
                For Smart Farm Management & Growth
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
              Agroplus Smart ERP is a complete Farm Management Software
              designed for farmers, FPOs, agri-consultants, and
              agribusiness companies. Manage crop planning, farm
              accounting, expense tracking, inventory management,
              labor management, fertigation schedules, sales,
              purchases, and real-time farm analytics from a
              single platform to improve productivity, reduce
              operational costs, and maximize profitability.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                "Crop Management Software",
                "Farm Accounting",
                "Inventory Management",
                "Labor Tracking",
                "Farm Analytics",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-2xl"
              >
                Schedule Demo
                <ArrowRight size={18} />
              </button>

              <a
                href="#"
                className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Download size={18} />
                Download Application
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}