import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <>
      <Helmet>
        <title>
          Contact Krushi Seva Kendra | Farming Support & Agricultural Solutions
        </title>

        <meta
          name="description"
          content="Contact our Krushi Seva Kendra for quality seeds, fertilizers, pesticides, crop guidance and expert farming support."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra, Agricultural Services, Farming Support, Seeds, Fertilizers, Pesticides"
        />
      </Helmet>

      <section
        className="relative py-12 sm:py-14 lg:py-16 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cropcareequipment.com/wp-content/uploads/2024/03/01-the-history-of-agriculture.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="inline-block text-green-300 font-semibold uppercase tracking-[2px] sm:tracking-[3px] mb-3">
                Need Assistance?
              </span>

              <h2 className="text-2xl md:text-3xl font-bold font-black text-white leading-tight">
                Let's Grow Better Together
              </h2>

              <p className="text-gray-300 mt-4 max-w-xl text-base md:text-lg">
                Get expert guidance for fertilizers, crop protection
                products and modern farming solutions.
              </p>
            </motion.div>

            {/* Right Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Call Button */}
              <a
                href="tel:+919860207957"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-3
                  bg-green-600 hover:bg-green-700
                  text-white font-semibold
                  px-7 py-3.5
                  rounded-xl
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <Phone size={18} />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+919860207957"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-3
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  hover:bg-white hover:text-black
                  text-white font-semibold
                  px-7 py-3.5
                  rounded-xl
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}