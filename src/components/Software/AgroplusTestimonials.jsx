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
    <section className="relative overflow-hidden bg-white pb-20 md:pb-28 pt-4 md:pt-2">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-6">
            <Quote size={18} />
            <span className="text-sm font-semibold tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
            What Farmers Say About
            <span className="block text-green-600">
              Agroplus ERP
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Trusted by farmers and agribusinesses for better planning,
            smart analytics, and complete farm management.
          </p>
        </motion.div>

        {/* SINGLE AUTO SCROLL ROW */}
        <div className="relative overflow-hidden">
          {/* FADE EFFECT LEFT */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>

          {/* FADE EFFECT RIGHT */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >
            {[...testimonials, ...testimonials].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative w-[380px] shrink-0"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-100/10 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* CARD */}
                  <div className="relative h-full bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden">
                    {/* TOP ICON */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                        {item.icon}
                      </div>

                      <Quote
                        size={34}
                        className="text-green-100"
                      />
                    </div>

                    {/* REVIEW */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 min-h-[110px]">
                      “{item.review}”
                    </p>

                    {/* STARS */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={17}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* USER */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                        {item.name.charAt(0)}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* BOTTOM LINE */}
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