import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg71Zt_FRpZwFweucYj-I-MzQBBhqtJ4Nzhz5jZdJRkkWsg16AVWwGOk0IVNf2NcpXrHTZDdthya3dtqddJrAR3rFMM1TGvmGuE40OStCNUv7JzSBRZ5pei8wdjycSyOfBxxfk93MrpV1MW/s320/ss5.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2022/2/SL/NJ/XQ/55158557/krushi-seva-kendra-software.jpg",
  "https://shriramfarmsolutions.com/wp-content/uploads/2025/04/Agricultural-Innovations.jpg",
  "https://newsoftsage.co.uk/wp-content/uploads/2024/02/istockphoto-1429073633-612x612-1.webp",
  "https://images.stockcake.com/public/2/8/6/286e5b6b-817c-447c-8836-0482de32f167_large/precision-agriculture-technology-stockcake.jpg",
];

export default function KrushiSevaSection() {
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

  // 👉 NEXT / PREV (ADDED CLEAN FUNCTIONS)
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // 🔄 AUTO SLIDE (USES nextSlide)
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [pause, current]);

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* 📄 LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-xs sm:text-sm text-green-600 font-semibold mb-2 uppercase tracking-wider">
            Krushi Seva Kendra
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Complete Agricultural Support <br />
            Under One Roof 🌾
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Agroplus provides expert guidance, quality farm inputs, and modern
            solutions for better yield and sustainable farming.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
            {[
              "Expert Farming Guidance",
              "Quality Fertilizers & Seeds",
              "Crop Protection",
              "Soil Testing",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/kendra")}
            data-aos="fade-up"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md shadow-lg transition"
          >
            Know More →
          </button>
        </div>

        {/* 🎬 RIGHT SLIDER */}
        <div
          data-aos="fade-left"
          className="relative group"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[240px] sm:h-[320px] md:h-[420px]">

            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out
                ${i === current ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-10 z-0"}`}
              >
                <img
                  src={img}
                  alt="Krushi Seva"
                  className={`w-full h-full object-cover transition-transform duration-[6000ms]
                  ${i === current ? "scale-110" : "scale-100"}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs border border-white/30">
                  Trusted by Farmers 🌱
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

            {/* ⬅️ PREV */}
            <button
              onClick={() => {
                setPause(true);
                setCurrent((prev) => (prev - 1 + images.length) % images.length);
                setTimeout(() => setPause(false), 4000);
              }}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 
              bg-black/60 hover:bg-black/60 text-white 
              w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
              rounded-full transition z-20"
            >
              ‹
            </button>

            <button
              onClick={() => {
                setPause(true);
                setCurrent((prev) => (prev + 1) % images.length);
                setTimeout(() => setPause(false), 4000);
              }}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 
              bg-black/60 hover:bg-black/60 text-white 
              w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
              rounded-full transition z-20"
            >
              ›
            </button>
          </div>

          {/* FLOATING CARD */}
          <div
            data-aos="zoom-in-up"
            className="relative sm:absolute sm:-bottom-8 sm:right-6 mt-4 sm:mt-0 z-20 bg-white shadow-xl p-4 rounded-xl w-full sm:w-72 border border-gray-100"
          >
            <p className="text-xs sm:text-sm text-gray-700 italic">
              “Your trusted partner for modern farming.”
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-progress {
          animation: progress 3s linear;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}