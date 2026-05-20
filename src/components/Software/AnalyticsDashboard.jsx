import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  ArrowRight,
  Phone,
  Sprout,
  MapPinned,
  Droplets,
  Users,
  Package,
  Wallet,
} from "lucide-react";

export default function AnalyticsDashboard() {
  const features = [
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
  ];

  const analyticsCards = [
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
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-green-50 py-14 sm:py-16 md:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:55px_55px] sm:bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* TOP TAG */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5 sm:mb-6 shadow-sm"
            >
              <TrendingUp size={18} />
              <p className="text-xs sm:text-sm font-semibold">
                Powerful Features for Smart Farming
              </p>
            </motion.div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5 sm:mb-6">
              Smart Farm
              <br />
              <span className="text-green-600">
                Management & Analytics
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Agroplus Farm ERP helps farmers and agribusinesses manage
              crop lifecycle, plot-wise income & expenses, fertigation
              records, labor activities, inventory, sales, accounting,
              and farm analytics from one smart platform.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="group relative bg-white/90 backdrop-blur-xl border border-white rounded-2xl p-5 shadow-md hover:shadow-2xl overflow-hidden"
                >
                  {/* HOVER EFFECT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg mb-4"
                    >
                      <item.icon size={22} />
                    </motion.div>

                    <h4 className="text-gray-500 text-xs sm:text-sm mb-1">
                      {item.title}
                    </h4>

                    <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                      {item.value}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
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

          {/* RIGHT SIDE DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="bg-white/90 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] shadow-2xl border border-white overflow-hidden"
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-green-900 to-green-700 px-5 sm:px-6 py-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white"
                  >
                    <PieChart size={22} />
                  </motion.div>

                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      Farm ERP Dashboard
                    </h3>

                    <p className="text-green-100 text-xs">
                      Smart farming analytics & management
                    </p>
                  </div>
                </div>

                <span className="bg-white text-green-700 text-xs px-3 py-1 rounded-full font-semibold w-fit">
                  ACTIVE
                </span>
              </div>

              {/* DASHBOARD BODY */}
              <div className="p-4 sm:p-6 bg-[#f8fafc]">
                {/* MAIN PERFORMANCE CARD */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 mb-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Total Farm Performance
                      </p>

                      <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">
                        98%
                      </h2>
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.1,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-100 flex items-center justify-center"
                    >
                      <BarChart3
                        className="text-green-600"
                        size={28}
                      />
                    </motion.div>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    ></motion.div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Real-time smart farming analytics dashboard
                  </p>
                </motion.div>

                {/* ANALYTICS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {analyticsCards.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3"
                      >
                        <item.icon size={20} />
                      </motion.div>

                      <p className="text-xs text-gray-500">
                        {item.label}
                      </p>

                      <h3 className="text-base sm:text-lg font-black text-gray-900">
                        {item.value}
                      </h3>
                    </motion.div>
                  ))}
                </div>

                {/* INFO BOX */}
                <motion.div
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="bg-green-50 border border-green-100 rounded-3xl p-5"
                >
                  <h4 className="font-bold text-green-900 mb-4 text-base sm:text-lg">
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}