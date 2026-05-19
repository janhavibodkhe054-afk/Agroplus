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
  Sprout,
  MapPinned,
  Droplets,
  Users,
  Package,
  Wallet,
  Smartphone,
  Cloud,
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
              <p className="text-sm font-semibold">
                Powerful Features for Smart Farming
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
              Smart Farm <br />
              <span className="text-green-600">
                Management & Analytics
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Agroplus Farm ERP helps farmers and agribusinesses manage
              crop lifecycle, plot-wise income & expenses, fertigation
              records, labor activities, inventory, sales, accounting,
              and farm analytics from one smart platform.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                {
                  icon: Sprout,
                  title: "Crop Management",
                  value: "Plantation to Harvest",
                },
                {
                  icon: MapPinned,
                  title: "Plot-wise Tracking",
                  value: "Profit & Expense",
                },
                {
                  icon: Droplets,
                  title: "Fertigation",
                  value: "Spray Records",
                },
                {
                  icon: Users,
                  title: "Labor Management",
                  value: "Attendance & Wages",
                },
                {
                  icon: Package,
                  title: "Agro Inputs",
                  value: "Stock Management",
                },
                {
                  icon: Wallet,
                  title: "Party Ledger",
                  value: "Easy Accounting",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
                >
                  <item.icon
                    className="text-green-600 mb-3"
                    size={22}
                  />

                  <h4 className="text-gray-500 text-sm">
                    {item.title}
                  </h4>

                  <h3 className="text-lg font-black text-gray-900">
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
                      Smart farming analytics & management
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
                        Total Farm Performance
                      </p>

                      <h2 className="text-4xl font-black text-gray-900 mt-1">
                        98%
                      </h2>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                      <BarChart3
                        className="text-green-600"
                        size={28}
                      />
                    </div>
                  </div>

                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-green-500 rounded-full"></div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Real-time smart farming analytics dashboard
                  </p>
                </div>

                {/* ANALYTICS CARDS */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      label: "Crop Records",
                      value: "Harvest Tracking",
                      icon: Sprout,
                    },
                    {
                      label: "Fertigation",
                      value: "128 Logs",
                      icon: Droplets,
                    },
                    {
                      label: "Labor Reports",
                      value: "54 Workers",
                      icon: Users,
                    },
                    {
                      label: "Sales Tracking",
                      value: "Party Ledger",
                      icon: TrendingUp,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                    >
                      <item.icon
                        className="text-green-600 mb-2"
                        size={20}
                      />

                      <p className="text-xs text-gray-500">
                        {item.label}
                      </p>

                      <h3 className="text-lg font-black text-gray-900">
                        {item.value}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* INFO BOX */}
                <div className="bg-green-50 border border-green-100 rounded-3xl p-5">
                  <h4 className="font-bold text-green-900 mb-3">
                    Smart Farming Insights
                  </h4>

                  <div className="space-y-3 text-sm text-green-800 leading-relaxed">
                    <p>
                      📱 Mobile Friendly access to farm data anytime,
                      anywhere.
                    </p>

                    <p>
                      ☁ Cloud Backup & Security keeps your farm data
                      safe and secure automatically.
                    </p>

                    <p>
                      📊 Smart Reports & Analytics provide real-time
                      performance insights for better farm decisions.
                    </p>

                    <p>
                      💰 Party Ledger & Accounting helps manage
                      customers, suppliers & transporters easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}