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
    <section className="relative overflow-hidden bg-white py-10 md:py-12">
      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-6">
            <CheckCircle2 size={18} />
            <span className="text-sm font-semibold tracking-wide">
              Benefits of Agroplus ERP
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
            What You Gain with
            <span className="block text-green-600">
              Agroplus Farm ERP
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Improve farm operations, increase profitability, and make
            smarter agricultural decisions with a powerful digital farm
            management platform.
          </p>
        </motion.div>

        {/* BENEFITS TIMELINE STYLE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-200 via-green-500 to-green-200 -translate-x-1/2"></div>

          <div className="space-y-14">
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
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                {/* CONTENT CARD */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative w-full lg:w-[46%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 to-emerald-200/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative bg-white border border-gray-100 shadow-xl rounded-[32px] p-8 overflow-hidden">
                    {/* CORNER GLOW */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-60"></div>

                    <div className="relative z-10 flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CENTER ICON */}
                <div className="hidden lg:flex relative z-20 w-16 h-16 rounded-full bg-white border-4 border-green-500 shadow-2xl items-center justify-center">
                  <CheckCircle2
                    size={28}
                    className="text-green-600"
                  />
                </div>

                {/* EMPTY SPACE */}
                <div className="hidden lg:block w-[46%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          
        </motion.div>
      </div>
    </section>
  );
}