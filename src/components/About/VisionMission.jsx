import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | Agroplus Agriculture Solutions</title>

        <meta
          name="description"
          content="Agroplus empowers farmers through quality seedlings, smart ERP solutions and complete agricultural support services for sustainable farming growth."
        />

        <meta
          name="keywords"
          content="Agroplus, Agriculture ERP, Nursery, Banana Tissue Culture, Krushi Seva Kendra, Farming Solutions"
        />
      </Helmet>

      <section
        className="relative py-10 lg:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/agrionhtml/main-html/assets/images/backgrounds/testimonial-one-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#f7ebdd] rounded-full blur-3xl opacity-60" />

        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#f2dfc8] rounded-full blur-3xl opacity-60" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-gray-100 rounded-[36px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Corner Shape */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/40 rounded-full group-hover:scale-125 transition duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-8">
                  <Eye size={30} className="text-[#416E1F]" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-[#14210f] mb-6">
                  Our Vision
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                  To become a trusted agricultural partner for farmers by
                  providing innovative farming solutions, healthy disease-free
                  seedlings, advanced agricultural technologies and expert
                  support that improve productivity, profitability and long-term
                  sustainability.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-gray-100 rounded-[36px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Corner Shape */}
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/40 rounded-full group-hover:scale-125 transition duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-8">
                  <Target size={30} className="text-[#416E1F]" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-[#14210f] mb-6">
                  Our Mission
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                  To support farmers through premium banana tissue culture,
                  sugarcane and vegetable seedlings, smart ERP solutions for
                  agro businesses, and complete Krushi Seva Kendra services
                  including crop guidance, fertilizers, crop protection and
                  modern farming practices that deliver better yields and
                  sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
