import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <div className="
              inline-flex items-center gap-2
              bg-green-100
              text-green-700
              px-4 py-2
              rounded-full
              mb-6
            ">
              <TrendingUp size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Analytics Dashboard
              </p>
            </div>

            {/* HEADING */}
            <h2 className="
              text-3xl sm:text-4xl md:text-5xl
              font-black
              text-gray-900
              leading-tight
              mb-6
            ">

              Smart Business <br />

              <span className="
                bg-gradient-to-r
                from-green-600
                to-black
                bg-clip-text
                text-transparent
              ">
                Insights & Reports
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="
              text-gray-600
              text-base sm:text-lg
              leading-relaxed
              mb-8
              max-w-xl
            ">
              Monitor revenue, inventory, sales and customer
              performance with powerful analytics dashboards
              built for agro businesses and stores.
            </p>

            

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* KNOW MORE */}
              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-gradient-to-r
                  from-green-600
                  to-black
                  hover:scale-105
                  text-white
                  font-semibold
                  px-7 py-4
                  rounded-2xl
                  shadow-xl
                  transition-all duration-300
                "
              >
                Know More
                <ArrowRight size={18} />
              </a>

              {/* NUMBER */}
              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  border border-green-200
                  bg-white
                  hover:bg-green-50
                  text-gray-800
                  font-semibold
                  px-7 py-4
                  rounded-2xl
                  transition-all duration-300
                "
              >
                <Phone size={18} className="text-green-600" />

                +91 41050 40000

              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* DASHBOARD IMAGE */}
            <div className="
              relative
              bg-black
              rounded-[32px]
              p-4
              shadow-2xl
              border border-gray-800
            ">

              {/* TOP BAR */}
              <div className="flex items-center gap-2 px-2 pb-4">
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-gray-700"></span>
              </div>

              {/* IMAGE */}
              <div className="
                overflow-hidden
                rounded-[24px]
                border border-gray-800
              ">

                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
                  alt="Analytics Dashboard"
                  className="
                    w-full
                    h-[260px] sm:h-[380px] md:h-[450px]
                    object-cover
                  "
                />

              </div>

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="
                absolute
                -bottom-6
                left-6
                bg-white
                shadow-2xl
                rounded-2xl
                px-6 py-5
                border border-gray-100
              "
            >

              <p className="text-sm text-gray-500 mb-1">
                Revenue Growth
              </p>

              <h3 className="text-3xl font-black text-green-600">
                +32%
              </h3>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}