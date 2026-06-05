import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function SoftwareHero() {
  return (
    <>
      <Helmet>
        <title>
          Agriculture ERP Software | Farm Management Software | Agroplus
        </title>

        <meta
          name="description"
          content="Agroplus Farm ERP Software helps farmers digitize farm operations, manage crop records, monitor farm expenses, control inventory, track labor activities and improve profitability."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#f8faf7] py-14 lg:py-16">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-2"
            >
              <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Smart Agriculture ERP Software
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-black leading-snug text-gray-900 mb-6">
                Farm ERP Software &{" "}
                <span className="text-green-600">
                  Advanced Agriculture Analytics
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 text-justify md:text-left">
                Agroplus Farm ERP Software helps farmers digitize farm
                operations, manage crop records, monitor farm expenses,
                control inventory, track labor activities, and improve
                profitability through a centralized agriculture management
                platform.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Crop Management System",
                  "Planting to Harvest Tracking",
                  "Farm Profitability Analysis",
                  "Plot-wise Cost & Revenue",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>

                    <span className="font-medium text-gray-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* DOWNLOAD BUTTON */}
              <a
                href="/AgroPlus-App.apk"
                download
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-7 py-4 rounded-2xl shadow-xl transition-all duration-300"
              >
                <Download size={18} />
                Download Application
              </a>
            </motion.div>

            {/* RIGHT DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">
                    Agriculture ERP Dashboard
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                    Farm Management, Accounting & Analytics Platform
                  </h3>
                </div>

                {/* Efficiency Section */}
                <div className="p-6 sm:p-8 bg-green-50 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">
                        Overall Farm Efficiency
                      </p>

                      <h2 className="text-4xl sm:text-5xl font-black text-green-600 mt-2">
                        98%
                      </h2>
                    </div>

                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      ACTIVE
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">
                    Live farm analytics and performance monitoring
                  </p>
                </div>

                {/* Dashboard Items */}
                {[
                  {
                    name: "Crop Performance",
                    amount: "Real-Time Tracking",
                  },
                  {
                    name: "Farm Operations",
                    amount: "128 Activity Logs",
                  },
                  {
                    name: "Labor Analytics",
                    amount: "54 Active Workers",
                  },
                  {
                    name: "Revenue Management",
                    amount: "Sales & Profit Reports",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b last:border-0 border-gray-100"
                  >
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.name}
                    </h4>

                    <span className="text-green-600 font-bold text-xs sm:text-sm text-right">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}