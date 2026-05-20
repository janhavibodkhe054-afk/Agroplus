import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ReceiptText,
  CheckCircle2,
  Tractor,
  IndianRupee,
} from "lucide-react";

export default function BillingAutomation() {
  const features = [
    "Crop-wise Accounting",
    "Plot-wise Profitability",
    "Fertigation & Spray Records",
    "Labor Management",
    "Sales & Purchase Tracking",
    "Party Ledger Management",
    "Farm Reports & Analytics",
  ];

  const managementList = [
    {
      name: "Crop Accounting",
      type: "Finance",
      amount: "24 Reports",
    },
    {
      name: "Fertigation Records",
      type: "Crop Care",
      amount: "132 Entries",
    },
    {
      name: "Labor Management",
      type: "Workers",
      amount: "58 Staff",
    },
    {
      name: "Sales Tracking",
      type: "Business",
      amount: "₹3.2L",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white py-14 sm:py-16 md:py-20 lg:py-24">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-black/5 rounded-full blur-3xl"></div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5 sm:mb-6 shadow-sm"
            >
              <ReceiptText size={18} />
              <p className="text-xs sm:text-sm font-semibold">
                Smart Farm ERP Software
              </p>
            </motion.div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5 sm:mb-6">
              Complete Farm
              <br />
              <span className="text-green-600">
                Accounting & Analytics
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6 max-w-2xl">
              Whether you manage a single farm or multiple plots,
              Agroplus gives complete control over daily farm
              operations with smart digital management tools and
              real-time farm analytics.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Manage crop-wise accounting, plot-wise profitability,
              fertigation & spray records, labor management,
              sales & purchase tracking, party ledger management,
              and complete farm reports through one powerful
              ERP dashboard.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-10">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group flex items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shrink-0"
                  >
                    <CheckCircle2 size={18} />
                  </motion.div>

                  <p className="text-sm sm:text-base text-gray-800 font-semibold">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-6 sm:px-8 py-4 rounded-2xl shadow-xl text-sm sm:text-base"
              >
                Know More
                <ArrowRight size={18} />
              </motion.a>

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white px-6 sm:px-8 py-4 rounded-2xl font-semibold text-gray-800 shadow-sm text-sm sm:text-base"
              >
                <Phone size={18} className="text-green-600" />
                +91 98602 07957
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative mt-6 lg:mt-0"
          >
            {/* FLOATING BADGES */}
            <motion.div
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              className="absolute top-2 sm:top-6 left-0 sm:left-4 z-20 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-3 border border-white"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <IndianRupee size={20} />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                Plot-wise Profit Tracking
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              className="absolute top-24 sm:top-28 left-6 sm:left-16 z-20 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-3 border border-white"
            >
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
                <Tractor size={20} />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                Smart Farm Reports
              </p>
            </motion.div>

            {/* MAIN CARD */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="bg-white/90 backdrop-blur-xl rounded-[28px] sm:rounded-[34px] shadow-2xl border border-white overflow-hidden pt-20 sm:pt-24"
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-4 bg-[#f8fafc] border-b">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-gray-500">
                  Agroplus Farm ERP
                </p>
              </div>

              <div className="p-4 sm:p-5 space-y-5">
                {/* SUMMARY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className="bg-green-50 border border-green-100 rounded-2xl p-4"
                  >
                    <p className="text-xs text-gray-500">
                      Total Farm Revenue
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-black text-green-600">
                      ₹8.5L
                    </h3>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className="bg-gray-900 rounded-2xl p-4"
                  >
                    <p className="text-xs text-gray-300">
                      Current Crop
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Banana
                    </h3>
                  </motion.div>
                </div>

                {/* MANAGEMENT LIST */}
                <div className="space-y-3">
                  {managementList.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        scale: 1.02,
                        x: 4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      className="flex justify-between items-center gap-4 border border-gray-100 bg-white rounded-2xl px-4 py-3 hover:shadow-lg"
                    >
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                          {item.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.type}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base font-bold text-green-600 whitespace-nowrap">
                        {item.amount}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* INSIGHT */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="bg-green-50 border border-green-100 rounded-3xl p-4"
                >
                  <p className="text-sm font-semibold text-green-900 mb-2">
                    Smart Insight
                  </p>

                  <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
                    Agroplus digitizes daily farm operations and provides
                    real-time reports to improve productivity and profitability.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}