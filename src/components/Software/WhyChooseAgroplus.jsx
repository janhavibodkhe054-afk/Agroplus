import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  TrendingUp,
  Layers3,
  CheckCircle2,
  Sprout,
  BarChart3,
  Wheat,
  Building2,
  Cloud,
  Activity,
  Tractor,
} from "lucide-react";

export default function WhyChooseAgroplus() {
  const reasons = [
    "Designed specially for Indian agriculture",
    "Easy to use for farmers & farm managers",
    "Supports multiple crops & multiple farms",
    "Reduces paperwork and manual errors",
    "Improves profitability with data-driven decisions",
    "Fast, secure & scalable platform",
  ];

  const industries = [
    "🍌 Banana",
    "🌾 Sugarcane",
    "🍎 Pomegranate",
    "🥭 Papaya",
    "🥬 Vegetables",
    "🤝 Contract Farming",
    "🏢 FPOs",
    "🌱 Nursery",
  ];

  return (
    <section className="relative overflow-hidden bg-[#07120B] py-24 md:py-32 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* FLOATING PARTICLES */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
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
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-5 py-2 rounded-full text-green-300 mb-6 backdrop-blur-xl">
              <Leaf size={18} />
              <span className="text-sm font-semibold tracking-wide">
                Why Choose Agroplus
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8">
              Smart ERP Built
              <span className="block text-green-400">
                For Indian Farming
              </span>
            </h2>

            {/* DESC */}
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
              Agroplus Farm ERP helps farmers and agribusinesses
              digitize farm operations, manage multiple crops,
              reduce manual work, and improve profitability with
              real-time analytics & smart management tools.
            </p>

            {/* REASONS */}
            <div className="space-y-5">
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
                    x: 12,
                    scale: 1.02,
                  }}
                  className={`group relative overflow-hidden flex items-center gap-4 backdrop-blur-xl border border-white/10 bg-white/5 rounded-3xl px-6 py-5 ${
                    index % 2 === 0 ? "ml-0" : "ml-8"
                  }`}
                >
                  {/* HOVER EFFECT */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000"></div>

                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={24} />
                  </div>

                  <p className="relative z-10 text-gray-100 font-medium">
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
            className="relative min-h-[750px] flex items-center justify-center"
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
              className="absolute w-[350px] h-[350px] rounded-full bg-green-500/20 blur-3xl"
            />

            {/* OUTER ROTATING RINGS */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[600px] h-[600px] border border-green-500/20 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[480px] h-[480px] border border-dashed border-green-400/20 rounded-full"
            />

            {/* CENTER CORE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-20 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-green-500 via-emerald-600 to-green-800 shadow-[0_0_80px_rgba(34,197,94,0.45)] flex flex-col items-center justify-center text-center p-8 border border-white/10"
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
                <ShieldCheck size={60} className="mb-5" />
              </motion.div>

              <h3 className="text-3xl font-black mb-3">
                Agroplus ERP
              </h3>

              <p className="text-green-100 text-sm leading-relaxed">
                Complete farm management platform for smart
                agriculture & agribusiness growth.
              </p>
            </motion.div>

            {/* FLOATING INDUSTRIES */}
            {industries.map((item, index) => {
              const angle =
                (index / industries.length) * Math.PI * 2;

              const radius = 280;

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  whileHover={{
                    scale: 1.12,
                  }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 70px)`,
                    top: `calc(50% + ${y}px - 70px)`,
                  }}
                >
                  <div className="group relative w-36 h-36 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-4 hover:border-green-400/40 transition duration-500">
                    {/* LIGHT EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition"></div>

                    <div className="text-4xl mb-3 relative z-10">
                      {item.split(" ")[0]}
                    </div>

                    <p className="text-sm font-semibold text-center leading-snug relative z-10">
                      {item.replace(item.split(" ")[0], "")}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* FLOATING MINI CARDS */}
            {[
              {
                icon: <TrendingUp size={24} />,
                title: "Profit Tracking",
                pos: "top-10 left-0",
              },
              {
                icon: <BarChart3 size={24} />,
                title: "Analytics",
                pos: "bottom-10 left-10",
              },
              {
                icon: <Cloud size={24} />,
                title: "Cloud Backup",
                pos: "top-20 right-0",
              },
              {
                icon: <Tractor size={24} />,
                title: "Farm Control",
                pos: "bottom-16 right-0",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className={`absolute ${card.pos} z-30`}
              >
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl">
                  <div className="text-green-400">
                    {card.icon}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      {card.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}