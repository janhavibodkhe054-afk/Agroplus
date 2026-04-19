import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://b1721680.smushcdn.com/1721680/wp-content/uploads/2021/09/Smart-Farming-Solution-A-Sneak-Peek-into-Farming-Revolution-Primary-image-1-1200x600.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/9/348871584/TM/VO/VX/5317005/h2y7t9io-500x500.png",
  "https://agricdemy.com/content/uploads/images/March2018/ag-solutions.jpg",
  "https://connectcx.ai/wp-content/uploads/2024/07/Smart-Farming-Solutions-in-Southeast-Asia-scaled.jpg",
  "https://static.vecteezy.com/system/resources/previews/070/683/468/large_2x/precision-agriculture-field-monitoring-with-technology-overlay-displaying-smart-farming-solutions-for-sustainable-crop-management-and-yield-photo.jpeg",
];

export default function FarmingSection() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);
  const navigate = useNavigate();

  // 🔄 AUTO SLIDER
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  // ✨ AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

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
                  alt="Farming"
                  className={`w-full h-full object-cover transition-transform duration-[6000ms]
                  ${i === current ? "scale-110" : "scale-100"}`}
                />

                {/* 🌑 OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white z-10">
                  <p className="text-xs sm:text-sm text-gray-200">
                    Improving yield with smart agriculture
                  </p>
                </div>
              </div>
            ))}

            {/* PROGRESS */}
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
            data-aos="zoom-in"
            className="relative sm:absolute sm:-bottom-8 sm:left-6 mt-4 sm:mt-0 z-20 bg-white shadow-xl p-4 rounded-xl w-full sm:w-72 border border-gray-100"
          >
            <p className="text-xs sm:text-sm text-gray-700 italic">
              “Empowering farmers with modern tools & sustainable practices.”
            </p>
          </div>
        </div>

        {/* 📄 CONTENT */}
        <div data-aos="fade-left">
          <p className="text-xs sm:text-sm text-orange-500 font-semibold mb-2 uppercase tracking-wider">
            Farming Solutions
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Smart & Sustainable <br />
            Farming Practices 🚜
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Agroplus supports farmers with modern farming techniques, crop
            management solutions, and expert guidance to increase productivity
            while maintaining sustainability.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
            {[
              "Modern Irrigation",
              "Crop Management",
              "Soil Health Care",
              "Sustainable Practices",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
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
            onClick={() => navigate("/farming")}
            data-aos="zoom-in-up"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md shadow-lg transition"
          >
            Know More →
          </button>
        </div>
      </div>

      {/* 🔥 PROGRESS ANIMATION */}
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