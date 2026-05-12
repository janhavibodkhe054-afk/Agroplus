import React from "react";
import { motion } from "framer-motion";
import { ReceiptText } from "lucide-react";

export default function FinancialReports() {
  return (
    <section className="relative bg-[#f8fafc] py-10 md:py-12 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >

            {/* GREEN BACKGROUND CIRCLE */}
            <div className="absolute top-10 left-10 w-[420px] h-[420px] bg-green-200 rounded-full opacity-40 blur-2xl"></div>

            {/* IMAGE */}
            <div className="relative z-10 flex justify-center">
              <div className="w-full max-w-[520px]">
                <img
                  src="/mobile.jpeg"
                  alt="Farmer Expense Management App"
                  className="w-full h-auto object-contain rounded-[32px] shadow-2xl border border-gray-200"
                />
              </div>
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <ReceiptText size={18} />
              <p className="text-sm font-semibold tracking-wide">
                Farmer Expense Reports
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Track Farming Costs <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                & Share Crop Reports Instantly
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Farmers can easily track complete crop expenses including seeds,
              fertilizers, labour, irrigation and tractor costs.
              Generate simple expense reports for each farming season.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Share farming cost details with family, partners or buyers directly
              through WhatsApp in one click.
            </p>

            {/* INPUT + BUTTON */}
            <div className="flex flex-col sm:flex-row items-stretch w-full max-w-xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">

              <div className="flex items-center justify-center px-5 font-bold text-gray-900 border-b sm:border-b-0 sm:border-r border-gray-300 bg-gray-50">
                +91
              </div>

              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="flex-1 px-5 py-4 outline-none text-gray-700"
              />

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noreferrer"
                className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 transition flex items-center justify-center whitespace-nowrap"
              >
                Get Report
              </a>

            </div>

            {/* NOTE */}
            <p className="text-sm text-gray-500 mt-4">
              Simple farming expense reports designed for farmers to track and manage crop cost easily.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}