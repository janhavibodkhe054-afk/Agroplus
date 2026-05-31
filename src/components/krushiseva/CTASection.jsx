import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <>
      <Helmet>
        <title>Contact Krushi Seva Kendra | Farming Support & Agricultural Solutions</title>

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
        className="relative py-14 lg:py-16 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('https://cropcareequipment.com/wp-content/uploads/2024/03/01-the-history-of-agriculture.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-green-300 font-semibold uppercase tracking-[3px] mb-3">
                Need Assistance?
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Let's Grow Better
                <span className="block text-[#F0C84B]">
                  Together
                </span>
              </h2>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+919860207957"
                className="group inline-flex items-center justify-center gap-3 bg-[#F0C84B] hover:bg-white text-black font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}