import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  TrendingUp,
} from "lucide-react";

/* Counter Component */
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: CalendarDays,
      value: 10,
      suffix: "+",
      title: "Years Experience",
    },
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      title: "Happy Farmers",
    },
    {
      icon: TrendingUp,
      value: 96,
      suffix: "%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#f8f8f5]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="relative text-center"
              >
                {/* Vertical Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                )}

                {/* Icon Area */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <img
                    src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/counter-one-shape-1.png"
                    alt=""
                    className="w-14 h-14 object-contain opacity-80"
                  />

                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-green-200 scale-125"></div>

                    {/* Icon Circle */}
                    <div className="relative w-22 h-22 rounded-full bg-white shadow-xl border border-green-100 flex items-center justify-center">
                      <Icon
                        size={42}
                        className="text-[#416E1F]"
                      />
                    </div>
                  </div>

                  <img
                    src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/counter-one-shape-2.png"
                    alt=""
                    className="w-14 h-14 object-contain opacity-80"
                  />
                </div>

                {/* Counter */}
                <h2 className="text-4xl lg:text-5xl font-bold text-[#13210d] mb-4">
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h2>

                {/* Gradient Divider */}
                <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-green-500 to-orange-400 mx-auto mb-5"></div>

                {/* Title */}
                <p className="text-gray-600 text-lg lg:text-xl font-medium">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}