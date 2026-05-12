import React from "react";
import { motion } from "framer-motion";
import {
  ReceiptText,
  Printer,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function BillingAutomation() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* 🌈 BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/40 rounded-full blur-3xl"></div>

      {/* DOTS */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-16 left-24 grid grid-cols-8 gap-4">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-orange-400"
            ></span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <div className="
              inline-flex items-center gap-2
              bg-orange-100
              text-orange-600
              px-4 py-2
              rounded-full
              mb-6
            ">
              <ReceiptText size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Billing Automation
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-6">

              Fast GST Billing <br />

              <span className="text-orange-500">
                For Agro Stores
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
              Generate GST invoices instantly with automated
              billing, thermal printer support, customer
              history and smart billing workflows built for
              agro businesses and Krushi Seva Kendras.
            </p>

            

            {/* EXTRA POINT */}
            <div className="flex items-center gap-3 mb-8">

              <CheckCircle2
                size={24}
                className="text-green-600 shrink-0"
              />

              <p className="text-gray-700 text-sm sm:text-base">
                Secure invoice records with easy billing management.
              </p>

            </div>

            {/* WHATSAPP CTA */}
            <div className="
              flex flex-col sm:flex-row
              overflow-hidden
              rounded-2xl
              border border-gray-300
              bg-white
              shadow-md
              max-w-xl
            ">

              <div className="
                flex items-center
                px-5 py-4
                bg-[#f8fafc]
                border-b sm:border-b-0 sm:border-r
                font-semibold
                text-gray-800
              ">
                +91
              </div>

              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="
                  flex-1
                  px-5 py-4
                  outline-none
                  text-gray-700
                "
              />

              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  bg-black
                  hover:bg-gray-900
                  text-white
                  font-semibold
                  px-7 py-4
                  transition
                "
              >
                Know More
                <ArrowRight size={18} />
              </a>

            </div>

            <p className="text-sm text-gray-500 mt-4">
              Get instant Agroplus billing software support
            </p>

          </motion.div>

          {/* RIGHT DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* FLOATING TOP CARD */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="
                absolute
                top-4
                left-4
                z-20
                bg-white
                shadow-xl
                rounded-2xl
                px-5 py-4
                flex items-center gap-3
                border border-gray-100
              "
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                <ReceiptText size={20} />
              </div>

              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Generate GST Bills
              </p>
            </motion.div>

            {/* FLOATING SECOND CARD */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="
                absolute
                top-24
                left-14
                z-20
                bg-white
                shadow-xl
                rounded-2xl
                px-5 py-4
                flex items-center gap-3
                border border-gray-100
              "
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <Zap size={20} />
              </div>

              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Fast Billing Process
              </p>
            </motion.div>

            {/* MAIN DASHBOARD */}
            <div className="
              bg-[#111827]
              rounded-[32px]
              shadow-2xl
              border border-gray-700
              overflow-hidden
              pt-24
            ">

              {/* HEADER */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700 bg-[#1f2937]">

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <p className="text-sm font-semibold text-gray-300">
                  Agroplus Billing
                </p>

              </div>

              {/* DASHBOARD CONTENT */}
              <div className="p-5">

                {/* TOP CARDS */}
                <div className="grid grid-cols-2 gap-4 mb-5">

                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
                    <p className="text-sm text-gray-400 mb-1">
                      Bills Today
                    </p>

                    <h3 className="text-2xl font-black text-green-400">
                      248
                    </h3>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
                    <p className="text-sm text-gray-400 mb-1">
                      Revenue
                    </p>

                    <h3 className="text-2xl font-black text-orange-400">
                      ₹1.8L
                    </h3>
                  </div>

                </div>

                {/* TABLE */}
                <div className="rounded-2xl border border-gray-700 overflow-hidden">

                  <div className="grid grid-cols-3 bg-[#1f2937] px-4 py-3 text-sm font-semibold text-gray-300">
                    <p>Invoice</p>
                    <p>Customer</p>
                    <p>Amount</p>
                  </div>

                  {[
                    ["INV-1021", "Rahul Patil", "₹4,500"],
                    ["INV-1022", "Ganesh Agro", "₹8,900"],
                    ["INV-1023", "Shiv Farms", "₹2,750"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 px-4 py-3 border-t border-gray-700 text-sm text-gray-300"
                    >
                      <p>{item[0]}</p>
                      <p>{item[1]}</p>

                      <p className="font-semibold text-green-400">
                        {item[2]}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}