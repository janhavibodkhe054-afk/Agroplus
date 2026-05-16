import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  Phone,
  Target,
  DollarSign,
} from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <section className="relative bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp size={18} />
              <p className="text-sm font-semibold">Agroplus Farm ERP</p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
              Smart Farm <br />
              <span className="text-green-600">Analytics Dashboard</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Agroplus helps farmers and agribusinesses monitor crop-wise
              profitability, expenses, labor records, fertigation history,
              and farm activities through a smart real-time dashboard.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">

              {[
                { icon: DollarSign, title: "Farm Revenue", value: "₹8.5L" },
                { icon: Target, title: "Active Crops", value: "6 Crops" },
                { icon: BarChart3, title: "Farm Reports", value: "24 Reports" },
                { icon: Activity, title: "Efficiency", value: "98%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
                >
                  <item.icon className="text-green-600 mb-3" size={22} />
                  <h4 className="text-gray-500 text-sm">{item.title}</h4>
                  <h3 className="text-2xl font-black text-gray-900">
                    {item.value}
                  </h3>
                </div>
              ))}

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl"
              >
                Know More
                <ArrowRight size={18} />
              </a>

              <div className="flex items-center justify-center gap-2 border border-gray-300 bg-white px-8 py-4 rounded-2xl font-semibold text-gray-800">
                <Phone size={18} className="text-green-600" />
                +91 98602 07957
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE - DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            <div className="bg-white rounded-[32px] shadow-2xl border border-gray-200 overflow-hidden">

              {/* HEADER */}
              <div className="flex items-center justify-between bg-gradient-to-r from-green-900 to-green-700 px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <PieChart size={22} />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Farm ERP Dashboard
                    </h3>
                    <p className="text-green-100 text-xs">
                      Real-time farm management system
                    </p>
                  </div>

                </div>

                <span className="bg-white text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  ACTIVE
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6 bg-[#f8fafc]">

                {/* MAIN CARD */}
                <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 mb-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-gray-500 text-sm">
                        Total Farm Profitability
                      </p>

                      <h2 className="text-4xl font-black text-gray-900 mt-1">
                        ₹12.5L
                      </h2>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                      <DollarSign className="text-green-600" size={28} />
                    </div>

                  </div>

                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-green-500 rounded-full"></div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Overall farm performance analytics
                  </p>

                </div>

                {/* ANALYTICS CARDS */}
                <div className="grid grid-cols-2 gap-4 mb-6">

                  {[
                    {
                      label: "Crop Records",
                      value: "6 Active",
                      icon: Target,
                    },
                    {
                      label: "Fertigation",
                      value: "128 Logs",
                      icon: Activity,
                    },
                    {
                      label: "Labor Reports",
                      value: "54 Workers",
                      icon: BarChart3,
                    },
                    {
                      label: "Sales Tracking",
                      value: "₹4.2L",
                      icon: TrendingUp,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                    >
                      <item.icon className="text-green-600 mb-2" size={20} />

                      <p className="text-xs text-gray-500">
                        {item.label}
                      </p>

                      <h3 className="text-xl font-black text-gray-900">
                        {item.value}
                      </h3>
                    </div>
                  ))}

                </div>

                {/* INFO BOX */}
                <div className="bg-green-50 border border-green-100 rounded-3xl p-5">

                  <h4 className="font-bold text-green-900 mb-2">
                    Smart Farming Insight
                  </h4>

                  <p className="text-sm text-green-800 leading-relaxed">
                    Agroplus Farm ERP gives complete visibility of
                    crop-wise expenses, labor activities, sales,
                    fertigation history, and farm profitability
                    through real-time analytics.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}