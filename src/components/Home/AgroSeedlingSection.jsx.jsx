import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://agronomy.unl.edu/sites/unl.edu.ianr.agronomy-horticulture/files/media/image/Soybean-young-4x5.jpg",
  "https://hasiruagro.com/images/service_plant_nursery_shop_hasiru_agro.webp",
  "https://img.freepik.com/premium-photo/pepper-plant-garden-early-morning-planting-pepper-seedlings-ground-concept-conservation-nature-agriculture_332694-192.jpg",
  "https://img.freepik.com/premium-photo/baby-plants-sowing-small-pots-trays-agricultural-seedlings-front-view-seedlings-pots-windowsill-green-plants-plastic-cups_106652-6237.jpg",
  "https://swiftagro.com/wp-content/uploads/2022/09/banner-15.jpg",
];

export default function AgroSeedlingSection() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // 🔄 AUTO SLIDER
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  // 👀 SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* 📄 LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 delay-100 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >
          <p className="text-xs sm:text-sm text-green-600 font-semibold mb-2 uppercase tracking-wider">
            Agro Seedlings
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            High Quality Seedlings For <br />
            Better Farming Growth 🌱
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We provide disease-free, high-yield seedlings including Banana tissue
            culture, Sugarcane, and vegetable plants for better productivity.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
            {[
              "Banana Tissue Culture",
              "Vegetable Seedlings",
              "Disease-Free Plants",
              "High Yield Growth",
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/seedlings")}
            className={`w-full sm:w-auto bg-gradient-to-r from-green-500 to-orange-400 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md shadow-lg transition-all duration-700 ${
              visible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            Know More →
          </button>
        </div>

        {/* 🎬 RIGHT SLIDER */}
        <div
          className={`relative group transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[240px] sm:h-[320px] md:h-[420px]">

            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  i === current
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 -translate-x-10 z-0"
                }`}
              >
                <img
                  src={img}
                  alt="Seedlings"
                  className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
                    i === current ? "scale-110" : "scale-100"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
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

          {/* FLOATING CARD */}
          <div
            className={`relative sm:absolute sm:-bottom-8 sm:right-6 mt-4 sm:mt-0 z-20 bg-white shadow-xl p-4 rounded-xl w-full sm:w-72 border border-gray-100 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xs sm:text-sm text-gray-700 italic">
              “Healthy roots today, stronger crops tomorrow.”
            </p>
          </div>
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