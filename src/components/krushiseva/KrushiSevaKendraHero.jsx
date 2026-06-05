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

      <section
              className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pb-4 md:pb-4 pt-20 lg:pt-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55"></div>
      
              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                
      
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
                >
                  Krushi Seva Kendra
                </motion.h1>
      
                
              </div>
            </section>
    </>
  );
}