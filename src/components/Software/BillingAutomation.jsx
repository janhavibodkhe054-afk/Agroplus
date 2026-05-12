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
  ReceiptText,
  CheckCircle2,
  Tractor,
  IndianRupee,
} from "lucide-react";

export default function BillingAutomation() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <ReceiptText size={18} />
              <p className="text-sm font-semibold">
                Farm Expense Management
              </p>
            </div>

            {/* TITLE */}
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Smart Farming <br />
              <span className="text-green-600">
                Expense Tracking System
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
              Farmers can easily track all farming expenses in one place,
              including seeds, fertilizers, pesticides, labor, tractor usage,
              and irrigation costs.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Get complete crop-wise expense reports and understand total
              farming cost in a simple and easy dashboard.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-8">

              {[
                "Seed & Fertilizer Expense Tracking",
                "Pesticide & Spray Cost Management",
                "Labor, Tractor & Water Expenses",
                "Crop-wise Profit & Expense Reports",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>

                  <p className="text-gray-800 font-medium">{item}</p>

                </div>
              ))}

            </div>

            {/* CTA */}
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

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* FLOATING BADGES */}
            <div className="absolute top-6 left-4 z-20 bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 border">

              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <IndianRupee size={20} />
              </div>

              <p className="text-sm font-semibold text-gray-800">
                Daily Expense Tracking
              </p>

            </div>

            <div className="absolute top-28 left-16 z-20 bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 border">

              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
                <Tractor size={20} />
              </div>

              <p className="text-sm font-semibold text-gray-800">
                Crop-wise Reports
              </p>

            </div>

            {/* MAIN APP UI */}
            <div className="bg-white rounded-[34px] shadow-2xl border border-gray-200 overflow-hidden pt-20">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#f8fafc] border-b">

                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <p className="text-sm font-semibold text-gray-500">
                  Farmer Expense App
                </p>

              </div>

              <div className="p-5 space-y-5">

                {/* SUMMARY */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                    <p className="text-xs text-gray-500">Total Farming Cost</p>
                    <h3 className="text-2xl font-black text-green-600">₹24,500</h3>
                  </div>

                  <div className="bg-gray-900 rounded-2xl p-4">
                    <p className="text-xs text-gray-300">Current Crop</p>
                    <h3 className="text-2xl font-black text-white">Soybean</h3>
                  </div>

                </div>

                {/* EXPENSE LIST */}
                <div className="space-y-3">

                  {[
                    { name: "Seeds", type: "Sowing", amount: "₹6,000" },
                    { name: "Fertilizer", type: "Crop Care", amount: "₹8,500" },
                    { name: "Pesticide", type: "Spraying", amount: "₹4,200" },
                    { name: "Labor", type: "Workers", amount: "₹3,500" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border rounded-2xl px-4 py-3 hover:shadow-md transition"
                    >

                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>

                      <p className="font-bold text-green-600">{item.amount}</p>

                    </div>
                  ))}

                </div>

                {/* INSIGHT */}
                <div className="bg-green-50 border border-green-100 rounded-3xl p-4">

                  <p className="text-sm font-semibold text-green-900 mb-1">
                    Smart Insight
                  </p>

                  <p className="text-xs text-green-800 leading-relaxed">
                    All farming expenses are tracked automatically in one place,
                    so farmers don’t need manual calculations.
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