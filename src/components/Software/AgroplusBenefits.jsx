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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white py-10 md:py-10 lg:py-10">
      {/* Background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-green-200 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left md:text-center max-w-5xl mx-auto mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5">
            <CheckCircle2 size={18} />
            <span className="text-sm font-semibold">
              Benefits of Agroplus ERP
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-black text-gray-900 leading-tight mb-5">
            What You Gain with Agroplus Farm ERP
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Improve farm operations, increase profitability and make
            smarter agricultural decisions with a powerful digital
            farm management platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-200 via-green-500 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-6 lg:space-y-2">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="w-full lg:w-[46%]"
                >
                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-white border-4 border-green-600 shadow-xl items-center justify-center mx-6 z-20">
                  <CheckCircle2
                    size={28}
                    className="text-green-600"
                  />
                </div>

               
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}