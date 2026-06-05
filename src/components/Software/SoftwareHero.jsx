import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function SoftwareHero() {
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

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="relative overflow-hidden min-h-screen flex items-center pt-10 md:pt-10 lg:pt-16 pb-0 md:-pb-0">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop"
            alt="Agriculture ERP Software Dashboard"
            className="w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-black/75"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-green-950/40"></div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Tag */}
              <div className="inline-flex items-center bg-green-500/15 border border-green-500/30 backdrop-blur-sm text-green-300 px-4 sm:px-6 py-2 rounded-full mb-6 text-xs sm:text-sm font-medium">
                Agriculture ERP Software For Farmers
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-10">
                Agriculture ERP Software
                

                <span className="text-green-400">
                  For Smart Farm Management
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8 text-base sm:text-lg lg:text-xl px-2">
                Agroplus Smart ERP is a complete farm management platform
                designed to simplify crop planning, farm accounting,
                inventory management, labor tracking, expense monitoring
                and real-time analytics. Manage your entire agricultural
                operation from a single powerful system.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 max-w-5xl mx-auto">
                {[
                  "Crop Management",
                  "Farm Accounting",
                  "Inventory Tracking",
                  "Labor Management",
                  "Farm Analytics",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs sm:text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <a
                  href="#"
                  className="group border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 text-sm sm:text-base"
                >
                  <Download
                    size={18}
                    className="group-hover:scale-110 transition"
                  />
                  Download Application
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}