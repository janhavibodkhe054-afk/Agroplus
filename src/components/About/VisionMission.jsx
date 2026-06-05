import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | AgroPlus</title>
      </Helmet>

      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14 items-center">
            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-orange-400 flex items-center justify-center shadow-lg">
                  <Eye size={22} className="text-black" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To build a future where every farmer has access to innovative
                agricultural solutions, quality resources and modern technology
                that improve productivity, sustainability and long-term growth.
              </p>
            </motion.div>

            {/* CENTER IMAGE */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-orange-400/30 blur-3xl rounded-full scale-125"></div>

              <div className="relative z-10">
                <div className="p-2 bg-white rounded-[28px] shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop"
                    alt="Agriculture"
                    className="w-52 h-72 md:w-64 md:h-80 object-cover rounded-3xl"
                  />
                </div>

               
                
              </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-orange-400 flex items-center justify-center shadow-lg">
                  <Target size={22} className="text-black" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To empower farmers through expert guidance, premium agricultural
                products, smart farming services and innovative solutions that
                simplify operations and maximize agricultural success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}