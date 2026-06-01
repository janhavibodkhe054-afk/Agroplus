import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <>
      <Helmet>
        <title>About Agroplus | Farm ERP Software</title>

        <meta
          name="description"
          content="Learn about Agroplus Farm ERP Software and our mission to simplify farm management through smart agriculture technology."
        />
      </Helmet>

      <section
        className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pb-4 md:pb-4 pt-20 lg:pt-20"
        style={{
          backgroundImage: "url('https://khetibuddy.com/wp-content/uploads/2026/05/Software-Development-for-Agriculture.png')",
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
            About Agroplus
          </motion.h1>

          
        </div>
      </section>
    </>
  );
}