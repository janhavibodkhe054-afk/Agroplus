import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const points = [
    "Own Farming Experience",
    "Quality Seedlings & Nursery Plants",
    "Smart ERP Solutions For Agriculture",
    "Expert Farming Guidance & Support",
  ];

  return (
    <>
      <Helmet>
        <title>
          About Agroplus | Agriculture ERP, Nursery & Krushi Seva Kendra
        </title>

        <meta
          name="description"
          content="Agroplus provides smart agriculture ERP software, healthy disease-free seedlings, and complete Krushi Seva Kendra services to help farmers improve productivity and farm management."
        />

        <meta
          name="keywords"
          content="Agroplus, Agriculture ERP, Banana Tissue Culture, Nursery Plants, Krushi Seva Kendra, Farming Solutions, Agriculture Services"
        />

        <link rel="canonical" href="https://yourwebsite.com/about" />

        <meta
          property="og:title"
          content="About Agroplus | Agriculture ERP & Farming Solutions"
        />

        <meta
          property="og:description"
          content="Empowering farmers with quality seedlings, smart ERP solutions and complete agricultural support services."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden bg-[#F5F5F5] py-14 md:py-20 lg:py-24">
        {/* Background Effects */}
        <div className="absolute top-10 left-0 w-48 md:w-72 h-48 md:h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-56 md:w-80 h-56 md:h-80 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              <p className="text-green-700 font-semibold text-base md:text-lg mb-4 uppercase tracking-wider">
                Get to Know Agroplus
              </p>

              <h2
                className="text-[32px] sm:text-[48px] md:text-[52px] lg:text-[55px] font-bold leading-[0.9] text-[#14210f] mb-5"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                FARMERS FIRST AGRICULTURE ALWAYS
              </h2>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#416E1F] mb-5 leading-snug">
                Providing quality seedlings, smart ERP solutions and complete
                agricultural support for modern farming.
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Agroplus is not just a business — we are farmers ourselves. With
                years of hands-on farming experience, we understand real field
                challenges and provide practical agricultural solutions through
                our Agro Seedlings Nursery, Agroplus ERP platform and Krushi
                Seva Kendra services.
              </p>

              <div className="space-y-4 mb-8">
                {points.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                      <Check size={18} className="text-[#416E1F]" />
                    </div>

                    <p className="text-base md:text-lg font-semibold text-[#1D2418]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-[#3E6C1E] hover:bg-[#355b19] text-white rounded-full overflow-hidden transition-all duration-300 shadow-lg"
              >
                <span className="px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-semibold">
                  Learn More
                </span>

                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0C94A] flex items-center justify-center">
                  <ArrowRight
                    size={22}
                    className="text-black group-hover:translate-x-1 transition"
                  />
                </div>
              </a>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-2"
            >
              {/* Yellow Background Shape */}
              <div className="absolute -right-3 md:-right-5 top-5 w-full h-full bg-[#F0C94A] rounded-[24px]"></div>

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-[24px] shadow-2xl">
                <img
                  src="https://thumbs.dreamstime.com/b/asian-male-farmer-working-sugarcane-farm-to-collect-data-study-innovation-technology-develop-farms-improve-production-457239733.jpg"
                  alt="Agroplus Agriculture Solutions"
                  className="
                    w-full
                    h-[320px]
                    sm:h-[450px]
                    md:h-[550px]
                    lg:h-[650px]
                    object-cover
                    hover:scale-105
                    transition duration-700
                  "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
