import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  TrendingUp,
  Users,
  Sprout,
  Tractor,
  Wallet,
} from "lucide-react";

export default function AgroplusTestimonials() {
  const testimonials = [
    {
      name: "Rahul Patil",
      role: "Banana Farmer",
      icon: <TrendingUp size={20} />,
      review:
        "Agroplus helped us track plot-wise profit and reduce unnecessary expenses.",
    },
    {
      name: "Suresh Jadhav",
      role: "Agribusiness Owner",
      icon: <Users size={20} />,
      review:
        "Managing labor, inventory, and crop records has become much easier.",
    },
    {
      name: "Vikas Shinde",
      role: "Progressive Farmer",
      icon: <Sprout size={20} />,
      review:
        "Now we know which crop and plot gives the best returns.",
    },
    {
      name: "Mahesh Pawar",
      role: "Sugarcane Farmer",
      icon: <Tractor size={20} />,
      review:
        "Farm planning and expense tracking became very easy with Agroplus ERP.",
    },
    {
      name: "Anil Deshmukh",
      role: "Agribusiness Manager",
      icon: <Wallet size={20} />,
      review:
        "Sales tracking and accounting are now fully digital and organized.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white py-14 sm:py-4">
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-52 sm:w-80 md:w-96 h-52 sm:h-80 md:h-96 bg-green-100/50 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-52 sm:w-80 md:w-96 h-52 sm:h-80 md:h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:70px_70px]"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-6"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 sm:px-5 py-2 rounded-full mb-5 sm:mb-6 shadow-sm">
            <Quote size={18} />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-black text-gray-900 leading-tight mb-5 sm:mb-6">
            What Farmers Say About
            
              Agroplus ERP
            
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Trusted by farmers and agribusinesses for better planning,
            smart analytics, and complete farm management.
          </p>
        </motion.div>

        {/* TESTIMONIAL SCROLLER */}
        <div className="relative overflow-hidden pb-16">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 h-full w-10 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 h-full w-10 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent"></div>

          {/* SCROLL ROW */}
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 sm:gap-6 lg:gap-6 w-max px-4"
          >
            {[...testimonials, ...testimonials].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="group relative w-[280px] sm:w-[340px] md:w-[380px] shrink-0"
                >
                  {/* OUTER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-emerald-200/20 rounded-[28px] sm:rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* CARD */}
                  <div className="relative h-full bg-white/90 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 md:p-8 overflow-hidden transition duration-500">
                    {/* TOP GLOW */}
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full blur-3xl opacity-60"></div>

                    {/* BORDER EFFECT */}
                    <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] border border-green-100 group-hover:border-green-300 transition duration-500"></div>

                    {/* HEADER */}
                    <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
                      <motion.div
                        whileHover={{
                          rotate: 6,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg"
                      >
                        {item.icon}
                      </motion.div>

                      <Quote
                        size={30}
                        className="text-green-100"
                      />
                    </div>

                    {/* REVIEW */}
                    <p className="relative z-10 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-2 min-h-[100px] sm:min-h-[120px]">
                      “{item.review}”
                    </p>

                    {/* STARS */}
                    <div className="relative z-10 flex items-center gap-1 mb-5 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            scale: 1.3,
                            rotate: 10,
                          }}
                        >
                          <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* USER */}
                    <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg"
                      >
                        {item.name.charAt(0)}
                      </motion.div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900">
                          {item.name}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* ANIMATED LINE */}
                    <motion.div
                      animate={{
                        x: ["-100%", "300%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute bottom-0 left-0 w-32 h-[3px] bg-gradient-to-r from-transparent via-green-500 to-transparent"
                    />

                    {/* FLOATING CIRCLE */}
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-50 rounded-full"></div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}