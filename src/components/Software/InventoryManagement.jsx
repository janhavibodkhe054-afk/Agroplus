import React from "react";
import { Helmet } from "react-helmet";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Sprout, ArrowRight, CheckCircle2, Tractor } from "lucide-react";

export default function FarmingExpenseManagement() {
  return (
    <>
      <Helmet>
        <title>
          Agriculture ERP Software | Farm Management Software | Agroplus Smart
          ERP
        </title>

        <meta
          name="description"
          content="Agroplus Smart ERP is a powerful Agriculture ERP Software for farmers, FPOs, and agribusinesses. Manage crop planning, farm accounting, inventory, labor management, fertigation, expense tracking, sales, purchases, and farm analytics from a single platform."
        />

        <meta
          name="keywords"
          content="Agriculture ERP Software, Farm Management Software, Smart Farming Solution, Crop Management System, Farm Accounting Software, Agribusiness ERP, Fertigation Management Software, Inventory Management, Farm Analytics, Digital Farming"
        />
      </Helmet>

      <section className="relative bg-[#f8fafc] py-16 md:py-10 overflow-hidden">
        {/* BACKGROUND EFFECT */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT SIDE DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-white rounded-[32px] shadow-2xl border border-gray-200 overflow-hidden">
                {/* HEADER */}
                <div className="bg-black px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white">
                      <Tractor size={24} />
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-lg">
                        Agroplus Smart ERP
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Agriculture ERP & Farm Management Software
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    LIVE
                  </div>
                </div>

                {/* BODY */}
                <div className="p-6 bg-[#f8fafc]">
                  {/* REVENUE CARD */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 text-white mb-6">
                    <p className="text-green-100 mb-2">
                      Agriculture Business Performance
                    </p>

                    <h2 className="text-4xl font-black mb-4">₹4.8L+</h2>

                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        Farm Management
                      </span>

                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        ERP Analytics
                      </span>
                    </div>
                  </div>

                  {/* MODULES */}
                  <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                    {[
                      {
                        name: "Crop Management Software",
                        amount: "24 Reports",
                      },
                      {
                        name: "Crop-wise Profitability Analysis",
                        amount: "18 Insights",
                      },
                      {
                        name: "Labor & Workforce Tracking",
                        amount: "54 Workers",
                      },
                      {
                        name: "Real-Time Farm Analytics Dashboard",
                        amount: "Live Data",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-6 py-5 border-b last:border-0"
                      >
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {item.name}
                          </h4>

                          <p className="text-sm text-gray-500 mt-1">
                            Agriculture ERP Module
                          </p>
                        </div>

                        <h3 className="text-xl font-black text-green-600">
                          {item.amount}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* TAG */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Sprout size={18} />

                <p className="text-sm font-semibold tracking-wide">
                  #1 Agriculture ERP Software for Farmers & Agribusinesses
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-black leading-snug text-gray-900 mb-6">
                Best Agriculture ERP Software{" "}
                <span className="text-green-600">
                  For Smart Farm Management
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl text-justify md:text-left">
                Agroplus is an advanced Agriculture ERP Software designed for
                farmers. Manage crop planning, farm accounting, expense
                tracking, inventory, labor management, party ledger, and
                real-time farm analytics from a single platform. Increase
                productivity, reduce operational costs, and make data-driven
                farming decisions with Agroplus Smart ERP.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mb-10">
                {[
                  "Complete Farm Management Software with crop lifecycle tracking",
                  "Farm Accounting & Expense Management for higher profitability",

                  "Real-Time Farm Analytics & Business Intelligence Dashboard",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} />
                    </div>

                    <p className="text-lg font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/AgroPlus-Application.apk" // Change to your APK/PDF file path
                  download
                  className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300"
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
