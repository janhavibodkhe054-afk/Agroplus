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
    <section className="relative py-10 overflow-hidden bg-[#f7f7f7]">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                {/* Leaves + Icon */}
                <div className="flex items-center justify-center gap-5 mb-8">
                  <img
                    src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/counter-one-shape-1.png"
                    alt=""
                    className="w-16 h-16 object-contain"
                  />

                  <div className="w-24 h-24 rounded-full border-2 border-[#4c742d] bg-white shadow-lg flex items-center justify-center">
                    <Icon
                      size={42}
                      className="text-[#4c742d]"
                    />
                  </div>

                  <img
                    src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/counter-one-shape-2.png"
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Counter */}
                <h2 className="text-4xl lg:text-5xl font-bold text-[#13210d] mb-4">
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h2>

                {/* Small Divider */}
                <div className="w-14 h-[2px] bg-[#e7c34a] mx-auto mb-4"></div>

                {/* Title */}
                <p className="text-gray-500 text-lg lg:text-xl font-medium">
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