import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Leaf,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Cloud,
  Tractor,
} from "lucide-react";

export default function WhyChooseAgroplus() {
  const reasons = [
    "Built specifically for Indian farmers, agribusinesses and FPOs",
    "Complete Farm ERP Software for crop, labor and financial management",
    "Supports multiple farms, plots and crop varieties from a single dashboard",
    "Automates farm records and eliminates manual paperwork",
    "Real-time farm analytics for data-driven agricultural decisions",
    "Secure cloud-based platform with scalability and automatic backup",
  ];

  const industries = [
    "🍌 Banana Farming",
    "🌾 Sugarcane Farming",
    "🍎 Pomegranate Farming",
    "🥭 Papaya Farming",
    "🥬 Vegetable Farming",
    "🤝 Contract Farming",
    "🏢 FPO Management",
    "🌱 Nursery Management",
  ];

  const floatingCards = [
    {
      icon: <TrendingUp size={22} />,
      title: "Farm Profitability",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Farm Analytics",
    },
    {
      icon: <Cloud size={22} />,
      title: "Cloud Security",
    },
    {
      icon: <Tractor size={22} />,
      title: "Farm Automation",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Farm ERP Software | Agriculture Management Software | Agroplus
        </title>

        <meta
          name="description"
          content="Agroplus Farm ERP Software helps farmers manage crop records, labor management, farm accounting, inventory tracking, fertigation records, profitability analysis and real-time farm analytics through one integrated agriculture management platform."
        />

        <meta
          name="keywords"
          content="Farm ERP Software, Agriculture ERP Software, Farm Management Software, Farm Accounting Software, Crop Management System, Agribusiness Management Software, Farm Analytics Dashboard, Smart Farming Solution, Agriculture Management Platform"
        />

        <meta property="og:title" content="Agroplus Farm ERP Software" />

        <meta
          property="og:description"
          content="Complete farm management software for crop planning, accounting, labor tracking, inventory management and agricultural business growth."
        />
      </Helmet>
      <section className="relative overflow-hidden bg-[#07120B] py-16 sm:py-20 lg:py-28 text-white">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-green-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-emerald-400/10 blur-3xl rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:70px_70px]"></div>

        {/* FLOATING PARTICLES */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* TAG */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-green-300 mb-5 sm:mb-6 backdrop-blur-xl"
              >
                <Leaf size={18} />

                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  Farm ERP Software for Modern Agriculture
                </span>
              </motion.div>

              {/* HEADING */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8">
                Why Farmers Choose
                <span className="block text-green-400">
                  Agroplus Farm ERP Software
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Agroplus is a complete Agriculture ERP Software designed for
                farmers, farm owners, FPOs and agribusinesses. Manage crop
                planning, farm accounting, labor attendance, fertigation
                schedules, inventory, sales, purchases and profitability
                tracking through one powerful cloud-based farm management
                platform.
              </p>

              {/* REASONS */}
              <div className="space-y-4 sm:space-y-5">
                {reasons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className={`group relative overflow-hidden flex items-start sm:items-center gap-4 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-4 sm:py-5 ${
                      index % 2 === 0 ? "ml-0" : "sm:ml-8"
                    }`}
                  >
                    {/* HOVER EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000"></div>

                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0"
                    >
                      <CheckCircle2 size={22} />
                    </motion.div>

                    <p className="relative z-10 text-sm sm:text-base text-gray-100 font-medium leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center min-h-[650px] sm:min-h-[780px]"
            >
              {/* CENTER GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute w-[220px] sm:w-[300px] lg:w-[350px] h-[220px] sm:h-[300px] lg:h-[350px] rounded-full bg-green-500/20 blur-3xl"
              />

              {/* ROTATING RINGS */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden sm:block absolute w-[420px] lg:w-[600px] h-[420px] lg:h-[600px] border border-green-500/20 rounded-full"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden sm:block absolute w-[320px] lg:w-[480px] h-[320px] lg:h-[480px] border border-dashed border-green-400/20 rounded-full"
              />

              {/* CENTER CORE */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="relative z-20 w-[300px] sm:w-[300px] lg:w-[300px] h-[300px] sm:h-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-green-500 via-emerald-600 to-green-800 shadow-[0_0_80px_rgba(34,197,94,0.45)] flex flex-col items-center justify-center text-center p-6 sm:p-8 border border-white/10"
              >
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                >
                  <ShieldCheck size={48} className="mb-4 sm:mb-5" />
                </motion.div>

                <h3 className="text-2xl sm:text-2xl font-black mb-1">
                  Agroplus Farm ERP
                </h3>

                <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
                  Advanced agriculture management software for crop monitoring,
                  farm accounting, labor management, inventory control and farm
                  analytics.
                </p>
              </motion.div>

              {/* INDUSTRIES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-16 w-full max-w-2xl">
                {industries.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 text-center hover:border-green-400/40 transition duration-500 h-full">
                      {/* LIGHT EFFECT */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition"></div>

                      <div className="relative z-10 text-3xl sm:text-4xl mb-2 sm:mb-3">
                        {item.split(" ")[0]}
                      </div>

                      <p className="relative z-10 text-xs sm:text-sm font-semibold leading-snug">
                        {item.replace(item.split(" ")[0], "")}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FLOATING MINI CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-xl">
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                    }}
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="w-full"
                  >
                    <div className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl h-full">
                      <div className="text-green-400 shrink-0">{card.icon}</div>

                      <p className="text-xs sm:text-sm font-semibold">
                        {card.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
