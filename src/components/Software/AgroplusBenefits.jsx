import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Wallet,
  ShieldCheck,
  Target,
  Sprout,
} from "lucide-react";

export default function AgroplusBenefits() {
  const benefits = [
    {
      icon: <Target size={28} />,
      title: "Better Farm Planning",
      desc: "Plan crop activities, expenses, and operations efficiently with smart farm management tools.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Increased Productivity",
      desc: "Track farm performance and improve productivity using real-time insights and analytics.",
    },
    {
      icon: <Wallet size={28} />,
      title: "Accurate Financial Tracking",
      desc: "Monitor income, expenses, sales, and profitability with complete financial transparency.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Reduced Operational Losses",
      desc: "Reduce manual errors, unnecessary expenses, and operational inefficiencies.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Better Decision Making",
      desc: "Use data-driven reports and analytics to make smarter farming decisions.",
    },
    {
      icon: <Sprout size={28} />,
      title: "Complete Farm Transparency",
      desc: "Get complete visibility of labor, fertigation, crop records, and farm activities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white py-10 sm:py-10 md:py-10 lg:py-10">
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:55px_55px] sm:bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 sm:px-5 py-2 rounded-full mb-5 sm:mb-6 shadow-sm">
            <CheckCircle2 size={18} />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Benefits of Agroplus ERP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5 sm:mb-6">
            What You Gain with
            <span className="block text-green-600 mt-2">
              Agroplus Farm ERP
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
            Improve farm operations, increase profitability, and make
            smarter agricultural decisions with a powerful digital farm
            management platform.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-200 via-green-500 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-4 sm:space-y-10 lg:space-y-2">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  className="group relative w-full lg:w-[46%]"
                >
                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-300/40 to-emerald-300/30 rounded-[28px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl border border-white shadow-xl rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 md:p-8">
                    {/* TOP GLOW */}
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full blur-3xl opacity-60"></div>

                    {/* BORDER ANIMATION */}
                    <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] border border-green-100 group-hover:border-green-300 transition duration-500"></div>

                    <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                      {/* ICON */}
                      <motion.div
                        whileHover={{
                          rotate: 6,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shrink-0"
                      >
                        {item.icon}
                      </motion.div>

                      {/* CONTENT */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">
                          {item.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* FLOATING DOT */}
                    <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-green-50 rounded-full"></div>
                  </div>
                </motion.div>

                {/* CENTER ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="hidden lg:flex relative z-20 w-16 h-16 rounded-full bg-white border-4 border-green-500 shadow-2xl items-center justify-center"
                >
                  <CheckCircle2
                    size={28}
                    className="text-green-600"
                  />
                </motion.div>

                {/* EMPTY SIDE */}
                <div className="hidden lg:block w-[46%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}