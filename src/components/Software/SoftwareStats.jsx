import React from "react";
import {
  Store,
  ReceiptText,
  Zap,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SoftwareStats() {
  const stats = [
    {
      icon: <Store size={34} />,
      number: "500+",
      title: "Agro Stores",
      desc: "Trusted by agro businesses across multiple locations.",
    },
    {
      icon: <ReceiptText size={34} />,
      number: "10K+",
      title: "Bills Generated",
      desc: "Fast and accurate billing with automated invoice management.",
    },
    {
      icon: <Zap size={34} />,
      number: "95%",
      title: "Faster Billing",
      desc: "Reduce manual work and improve billing efficiency instantly.",
    },
    {
      icon: <Headphones size={34} />,
      number: "24/7",
      title: "Support",
      desc: "Dedicated customer support whenever you need assistance.",
    },
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <p className="text-orange-500 font-semibold uppercase tracking-[3px] mb-3">
            Trusted Platform
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Helping Agro Businesses <br />
            Grow Smarter 🚀
          </h2>

        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                bg-white
                border border-gray-100
                rounded-3xl
                p-7
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300
                overflow-hidden
              "
            >

              {/* ICON */}
              <div className="
                w-16 h-16
                flex items-center justify-center
                rounded-2xl
                bg-gradient-to-r from-green-500 to-orange-400
                text-white
                mb-6
                shadow-lg
              ">
                {item.icon}
              </div>

              {/* NUMBER */}
              <h3 className="text-4xl font-black text-gray-900 mb-2">
                {item.number}
              </h3>

              {/* TITLE */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* HOVER EFFECT */}
              <div className="
                absolute
                inset-0
                border-2
                border-transparent
                group-hover:border-green-200
                rounded-3xl
                transition-all duration-300
              "></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}