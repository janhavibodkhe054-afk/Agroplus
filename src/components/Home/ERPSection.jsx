import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://theerphub.com/assets/img/all-in-one-erp-technology-for-agriculture-1.webp",
  "https://img1.wsimg.com/isteam/ip/9693bb0a-3668-4032-8be0-b0e099f2b939/Agriculture_Farm_Dashboard_Finance.jpg",
  "https://www.charisma.ro/upload/userfiles/images/level%202-charisma-erp-agricultura.jpg",
  "https://climate.ai/wp-content/uploads/2023/09/shutterstock_1689558058-scaled.jpg",
  "https://clickvalley.in/media/y1xdxn4j/istockphoto-1294890443-170667a.jpg",
];

export default function ERPSection() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);
  const navigate = useNavigate();

  // 🔥 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* 🎬 SLIDER */}
        <div
          data-aos="fade-right"
          className="relative group"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[240px] sm:h-[320px] md:h-[420px]">

            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out
                ${i === current ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-10 z-0"}`}
              >
                <img
                  src={img}
                  alt="ERP"
                  className={`w-full h-full object-cover transition-transform duration-[6000ms]
                  ${i === current ? "scale-110" : "scale-100"}`}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
            ))}

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
              <div
                key={current}
                className="h-full bg-gradient-to-r from-green-500 to-orange-400 animate-progress"
              ></div>
            </div>

            {/* ARROWS */}
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black px-2 sm:px-3 py-1.5 sm:py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % images.length)
              }
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black px-2 sm:px-3 py-1.5 sm:py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ›
            </button>
          </div>

          {/* 💎 FLOATING CARD */}
          <div
            data-aos="zoom-in-up"
            className="relative sm:absolute sm:-bottom-8 sm:left-6 mt-4 sm:mt-0 z-20 bg-white shadow-xl p-4 rounded-xl w-full sm:w-72 border border-gray-100"
          >
            <p className="text-xs sm:text-sm text-gray-700 italic">
              “Digitize your agro business with powerful ERP tools & insights.”
            </p>
          </div>
        </div>

        {/* 📄 CONTENT */}
        <div data-aos="fade-left">
          <p className="text-xs sm:text-sm text-green-600 font-semibold mb-2 uppercase tracking-wider">
            Agroplus ERP
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Smart ERP Solutions For <br />
            Modern Agriculture 🌱
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Manage inventory, billing, and financial data with ease using our
            intelligent ERP platform designed for agro businesses.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
            {[
              "Inventory Management",
              "Billing Automation",
              "Financial Reports",
              "Analytics Dashboard",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg hover:shadow-md transition"
              >
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/erp")}
            data-aos="fade-up"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md shadow-lg transition"
          >
            Know More →
          </button>
        </div>
      </div>

      {/* ✨ CUSTOM ANIMATION */}
      <style jsx>{`
        .animate-progress {
          animation: progress 4s linear;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}