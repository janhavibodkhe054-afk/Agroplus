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
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-5"
          >
            About Agroplus
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
          >
            Smart Farm ERP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-200 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Simplifying farm management with technology, analytics, and
            smarter decision-making.
          </motion.p>
        </div>
      </section>
    </>
  );
}