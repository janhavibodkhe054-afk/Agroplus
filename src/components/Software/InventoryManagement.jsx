import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  ArrowRight,
  CheckCircle2,
  Tractor,
} from "lucide-react";

export default function FarmingExpenseManagement() {
  return (
    <section className="relative bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE IMAGE/UI */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >

            {/* MAIN DASHBOARD */}
            <div
              className="
              bg-white
              rounded-[32px]
              shadow-2xl
              border border-gray-200
              overflow-hidden
            "
            >

              {/* TOP HEADER */}
              <div
                className="
                bg-black
                px-6 py-5
                flex items-center justify-between
              "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                    w-12 h-12
                    rounded-2xl
                    bg-green-500
                    flex items-center justify-center
                    text-white
                  "
                  >
                    <Tractor size={24} />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Agroplus Farm ERP
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Smart Farm Management Software
                    </p>
                  </div>

                </div>

                <div
                  className="
                  bg-green-500/20
                  text-green-400
                  px-3 py-1
                  rounded-full
                  text-sm
                  font-semibold
                "
                >
                  LIVE
                </div>

              </div>

              {/* BODY */}
              <div className="p-6 bg-[#f8fafc]">

                {/* TOTAL CARD */}
                <div
                  className="
                  bg-gradient-to-r
                  from-green-500
                  to-green-600
                  rounded-3xl
                  p-6
                  text-white
                  mb-6
                "
                >

                  <p className="text-green-100 mb-2">
                    Total Farm Revenue
                  </p>

                  <h2 className="text-4xl font-black mb-4">
                    ₹4.8L
                  </h2>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      Banana Farming
                    </span>

                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      Season 2026
                    </span>
                  </div>

                </div>

                {/* MANAGEMENT LIST */}
                <div
                  className="
                  bg-white
                  rounded-3xl
                  border border-gray-100
                  overflow-hidden
                "
                >

                  {[
                    {
                      name: "Crop-wise Accounting",
                      amount: "24 Reports",
                    },
                    {
                      name: "Fertigation Records",
                      amount: "128 Entries",
                    },
                    {
                      name: "Labor Management",
                      amount: "54 Workers",
                    },
                    {
                      name: "Sales & Purchase Tracking",
                      amount: "₹2.1L",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center justify-between
                        px-6 py-5
                        border-b last:border-0
                      "
                    >

                      <div>
                        <h4 className="font-bold text-gray-900">
                          {item.name}
                        </h4>

                        <p className="text-sm text-gray-500 mt-1">
                          Farm ERP Management
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

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="
                absolute
                -bottom-6
                right-0
                bg-white
                shadow-2xl
                rounded-2xl
                px-5 py-4
                border border-gray-100
              "
            >

              <p className="text-sm text-gray-500 mb-1">
                Farm Management Efficiency
              </p>

              <h3 className="text-3xl font-black text-green-600">
                98%
              </h3>

            </motion.div>

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
            <div
              className="
              inline-flex items-center gap-2
              bg-green-100
              text-green-700
              px-4 py-2
              rounded-full
              mb-6
            "
            >
              <Sprout size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Smart Farm ERP Software
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
              text-4xl
              sm:text-5xl
              font-black
              leading-tight
              text-gray-900
              mb-6
            "
            >

              Complete Farm <br />

              <span className="text-green-600">
                ERP Management Software
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              text-gray-600
              text-lg
              leading-relaxed
              mb-8
              max-w-xl
            "
            >
              Agroplus Farm ERP helps farmers and agribusinesses
              digitize daily farm operations with real-time data,
              crop-wise accounting, labor management, fertigation
              records, and smart farm analytics.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-10">

              {[
                "Track crop lifecycle from plantation to harvest",
                "Manage plot-wise income & expense records",
                "Maintain fertigation & spray history",
                "Access real-time reports & farm analytics",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4"
                >

                  <div
                    className="
                    w-11 h-11
                    rounded-xl
                    bg-green-100
                    text-green-600
                    flex items-center justify-center
                    shrink-0
                  "
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="text-lg font-medium text-gray-800">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* CTA */}
            <div
              className="
              flex flex-col sm:flex-row
              gap-4
            "
            >

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  bg-black
                  hover:bg-gray-900
                  text-white
                  font-semibold
                  px-8 py-4
                  rounded-2xl
                  shadow-xl
                  transition-all duration-300
                "
              >
                Know More
                <ArrowRight size={18} />
              </a>

              <div
                className="
                flex items-center justify-center
                border border-gray-300
                bg-white
                px-8 py-4
                rounded-2xl
                text-gray-800
                font-semibold
              "
              >
                +91 98602 07957
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}