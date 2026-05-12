import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SoftwareHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop"
          alt="Agro Background"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-green-900/40"></div>
      </div>

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 backdrop-blur-md text-green-300 px-4 py-2 rounded-full mb-6">

            

            

          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">

            Smart Agro Business <br />

            <span className="text-green-400">
              Management Software
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Manage inventory, billing, financial reports and
            analytics with one smart agriculture software solution.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">

            {[
              "Inventory",
              "GST Billing",
              "Reports",
              "Analytics",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/10
                  border border-white/10
                  backdrop-blur-md
                  px-5 py-2
                  rounded-full
                  text-white
                  text-sm font-medium
                "
              >
                {item}
              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* KNOW MORE */}
            <button
              onClick={() => navigate("/contact")}
              className="
                bg-green-500
                hover:bg-green-600
                text-black
                px-7 py-4
                rounded-2xl
                font-bold
                flex items-center justify-center gap-2
                transition-all duration-300
                shadow-2xl
              "
            >
              Know More
              <ArrowRight size={18} />
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/914105040000
"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-white/20
                bg-white/10
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                text-white
                px-7 py-4
                rounded-2xl
                font-semibold
                flex items-center justify-center gap-2
                transition-all duration-300
              "
            >
              <PhoneCall size={18} />
              +91 41050 40000

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}