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
          Agriculture ERP Software | Farm Management Software | Agroplus Smart
          ERP
        </title>

        <meta
          name="description"
          content="Agroplus Smart ERP helps farmers and agribusinesses manage crop planning, farm accounting, inventory management, labor tracking, fertigation schedules, sales, purchases and farm analytics."
        />

        <meta
          name="keywords"
          content="Agriculture ERP Software, Farm Management Software, Crop Management Software, Farm Accounting, Farm Analytics, Labor Management, Inventory Management"
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="relative overflow-hidden flex items-center bg-white py-6 lg:py-10">
        {/* Background Blur Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-70"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white"></div>

        {/* Content */}
        <div className="relative z-10 w-full text-left md:text-center ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left md:text-center"
            >
              {/* Tag */}
              <div className="inline-flex items-center bg-green-100 border border-green-200 text-green-700 px-5 py-2 rounded-full mb-6 text-xs sm:text-sm font-semibold">
                Agriculture ERP Software For Farmers
              </div>

              {/* Heading */}
              <h1 className="text-2xl md:text-3xl font-bold font-black text-gray-900 leading-snug mb-8">
                Agriculture ERP Software{" "}
                <span className="text-green-600">
                  For Smart Farm Management
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed mb-10 text-base md:text-lg px-2">
                Agroplus Smart ERP is a complete farm management platform
                designed to simplify crop planning, farm accounting, inventory
                management, labor tracking, expense monitoring and real-time
                analytics. Manage your entire agricultural operation from a
                single powerful system.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-12 max-w-5xl mx-auto text-base sm:text-lg">
  {[
    "Crop Management",
    "Farm Accounting",
    
    "Labor Management",
    "Farm Analytics",
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-gray-700 text-xs sm:text-sm font-medium hover:border-green-500 transition"
    >
      {item}
    </div>
  ))}
</div>

              {/* Download Button */}
              <div className="flex justify-center">
                <a
                  href="/AgroPlus-Application.apk"
                  download
                  className="
                   flex items-center justify-center gap-2
    w-full md:w-auto
    bg-gradient-to-r from-green-500 to-orange-400
    hover:scale-105
    text-black font-semibold
    px-8 py-4
    rounded-2xl shadow-xl
    transition-all duration-300
                  "
                >
                  <Download size={18} />
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
