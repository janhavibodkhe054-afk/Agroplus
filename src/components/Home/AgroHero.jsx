import React from "react";
import { useNavigate } from "react-router-dom";

export default function AgroHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden pt-[72px] md:pt-[38px]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/023/060/798/small/farming-tractor-spraying-plants-in-a-field-photo.jpg')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      {/* CONTENT */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10
          min-h-[580px]
          sm:min-h-[650px]
          lg:min-h-screen
          flex items-center
        "
      >
        <div className="max-w-3xl text-white py-12 sm:py-16 lg:py-0 animate-fadeUp">
          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>

            <p className="text-[11px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase text-orange-300 font-semibold">
              Natural Environment
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-6xl font-black mb-5">
            Healthy & <br />
            Disease-Free{" "}
            <span className="text-green-400">
              Seedlings
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-200 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8">
            Premium Sugarcane, Vegetable and Marigold
            seedlings with expert agricultural guidance for modern farming and
            higher productivity.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 sm:gap-12 mb-8 sm:mb-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
                10+
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400">
                5000+
              </h3>

              <p className="text-sm sm:text-base text-gray-300 mt-1">
                Happy Farmers
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate("/seed")}
              className="
                w-full sm:w-auto
                bg-gradient-to-r from-green-500 to-orange-400
                hover:scale-105
                text-black
                font-bold
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
                w-full sm:w-auto
                border border-white/40
                bg-white/10
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                text-white
                font-semibold
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

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-zoom {
          animation: zoomBg 18s ease-in-out infinite alternate;
        }

        @keyframes zoomBg {
          from {
            transform: scale(1.03);
          }
          to {
            transform: scale(1.12);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .animate-zoom {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}