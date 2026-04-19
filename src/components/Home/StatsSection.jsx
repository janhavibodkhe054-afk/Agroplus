import React, { useEffect, useState } from "react";
import { Leaf, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: <Leaf size={22} /> },
  { value: 5000, suffix: "+", label: "Happy Farmers", icon: <Users size={22} /> },
  { value: 96, suffix: "%", label: "Success Rate", icon: <TrendingUp size={22} /> },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    const increments = stats.map((item) => item.value / steps);
    let step = 0;

    const interval = setInterval(() => {
      step++;

      setCounts((prev) =>
        prev.map((count, i) => {
          const next = count + increments[i];
          return step >= steps ? stats[i].value : Math.ceil(next);
        })
      );

      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pb-24 z-10">

  {/* 🌄 BG IMAGE */}
  <div
    className="h-[220px] md:h-[260px] bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
    }}
  >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-white to-orange-400"></div>
  </div>

  {/* 💎 FLOATING CARDS */}
  <div className="relative -mt-20 md:-mt-24 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 z-20">

    {stats.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition duration-300"
      >
        {/* ICON */}
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-orange-400 text-white shadow-lg">
          {item.icon}
        </div>

        {/* COUNT */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {counts[i]}
          {item.suffix}
        </h2>

        {/* LABEL */}
        <p className="text-gray-600 text-sm mt-2 font-medium">
          {item.label}
        </p>
      </div>
    ))}
  </div>

</section>
  );
}