import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function KrushiSevaKendraHero() {
  return (
    <>
      <Helmet>
        <title>
          Krushi Seva Kendra | Agricultural Products & Farming Solutions
        </title>

        <meta
          name="description"
          content="Krushi Seva Kendra provides quality seeds, fertilizers, pesticides, crop protection products and agricultural solutions for modern farming and better crop productivity."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra, Agricultural Products, Seeds, Fertilizers, Pesticides, Farming Solutions, Agriculture Store, Crop Protection Products"
        />

        <link
          rel="canonical"
          href="https://www.yourwebsite.com/krushi-seva-kendra"
        />

        <meta
          property="og:title"
          content="Krushi Seva Kendra | Agricultural Products & Farming Solutions"
        />

        <meta
          property="og:description"
          content="Quality agricultural inputs, crop protection products and farming solutions for farmers."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative h-[45vh] min-h-[320px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
            alt="Krushi Seva Kendra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mt-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Krushi Seva Kendra
          </h1>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Quality agricultural products, crop protection solutions,
            fertilizers, seeds and expert farming guidance for better
            productivity and sustainable agriculture.
          </p>
        </motion.div>
      </section>
    </>
  );
}