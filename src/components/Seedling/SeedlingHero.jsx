import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function SeedlingHero() {
  return (
    <>
      <Helmet>
        <title>
          Seedlings | Agroplus Farm ERP Software
        </title>

        <meta
          name="description"
          content="Explore Agroplus Farm ERP services including crop management, farm accounting, fertigation tracking, labor management, inventory control, party ledger management, and farm analytics."
        />

        <meta
          name="keywords"
          content="Farm ERP Services, Agriculture ERP Software, Crop Management Software, Farm Accounting, Labor Management, Fertigation Tracking, Farm Analytics, Agroplus ERP"
        />

        <meta
          property="og:title"
          content="Seedlings | Agroplus Farm ERP"
        />

        <meta
          property="og:description"
          content="Discover smart farm management services with Agroplus Farm ERP."
        />
      </Helmet>

      

      <section
        className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pb-4 md:pb-4 pt-20 lg:pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop')",
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
            Seedlings
          </motion.h1>

          
        </div>
      </section>
    </>
  );
}