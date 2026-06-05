import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Eye, Target, ArrowRight } from "lucide-react";

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | AgroPlus</title>
      </Helmet>

      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-300/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-white rounded-[32px] p-8 md:p-10 border border-green-100 shadow-xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg mb-6">
                  <Eye size={28} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To create a future where every farmer has access to modern
                  agricultural technology, quality resources, and expert
                  guidance that improve productivity, sustainability, and
                  long-term prosperity.
                </p>

                
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-200/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-white rounded-[32px] p-8 md:p-10 border border-orange-100 shadow-xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6">
                  <Target size={28} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  To empower farmers through premium agricultural products,
                  smart farming solutions, professional support, and digital
                  innovations that simplify farm operations and maximize
                  profitability.
                </p>

                
              </div>
            </motion.div>
          </div>

          
          
        </div>
      </section>
    </>
  );
}