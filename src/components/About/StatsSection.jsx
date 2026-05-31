import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Users,
  BarChart3,
  Wallet,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Sprout size={30} />,
      value: "50+",
      title: "Crop Types Managed",
    },
    {
      icon: <Users size={30} />,
      value: "1000+",
      title: "Farm Activities Tracked",
    },
    {
      icon: <Wallet size={30} />,
      value: "24/7",
      title: "Farm Data Access",
    },
    {
      icon: <BarChart3 size={30} />,
      value: "100%",
      title: "Digital Farm Records",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/40 to-green-100/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {item.value}
                </h3>

                <p className="text-gray-600 font-medium">
                  {item.title}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-green-50 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}