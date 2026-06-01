import React from "react";
import { useNavigate } from "react-router-dom";

export default function AgroHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen overflow-hidden md:pt-10">

      {/* 🌄 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/023/060/798/small/farming-tractor-spraying-plants-in-a-field-photo.jpg')",
        }}
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* ✨ GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>

      {/* 📦 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-5 sm:px-8">

        <div className="max-w-3xl text-white pt-24 md:pt-0 animate-fadeUp">

          {/* 🏷️ TAG */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>

            <p className="text-xs sm:text-sm tracking-[3px] uppercase text-orange-300 font-semibold">
              Natural Environment
            </p>
          </div>

          {/* 📝 HEADING */}
          <h1 className="text-[42px] leading-[1.05] sm:text-6xl lg:text-7xl font-black mb-6">
            Healthy & <br />
            Disease-Free{" "}
            <span className="text-green-400">
              Seedlings
            </span>
          </h1>

          {/* 📄 DESCRIPTION */}
          <p className="text-gray-200 text-[16px] sm:text-lg leading-relaxed max-w-2xl mb-8">
            Premium Banana tissue culture, Sugarcane, and Vegetable
            seedlings with expert agricultural guidance for modern farming.
          </p>

          {/* 🔢 STATS */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-10">

            {/* STAT */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
                10+
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mt-1">
                Years Experience
              </p>
            </div>

            {/* STAT */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-400">
                5000+
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mt-1">
                Happy Farmers
              </p>
            </div>

          </div>

          {/* 🔘 BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => navigate("/seed")}
              className="
                bg-gradient-to-r from-green-500 to-orange-400
                hover:scale-105
                text-black
                font-bold
                text-base
                px-7 py-4
                rounded-xl
                shadow-2xl
                transition-all duration-300
              "
            >
              View Seedlings
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="
                border border-white/40
                bg-white/10
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                text-white
                font-semibold
                text-base
                px-7 py-4
                rounded-xl
                transition-all duration-300
              "
            >
              Contact Us
            </button>

          </div>

        </div>
      </div>

      {/* ✨ ANIMATIONS */}
      <style jsx>{`
        .animate-zoom {
          animation: zoomBg 18s ease-in-out infinite alternate;
        }

        @keyframes zoomBg {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.15);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}