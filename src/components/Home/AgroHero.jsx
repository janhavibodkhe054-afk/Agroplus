import React from "react";
import { useNavigate } from "react-router-dom";

export default function AgroHero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">

      {/* 🌄 BACKGROUND IMAGE (ZOOM ANIMATION) */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/023/060/798/small/farming-tractor-spraying-plants-in-a-field-photo.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">

        <div className="text-white max-w-2xl animate-fadeUp">

          {/* TAG */}
          <p className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-orange-400 uppercase tracking-widest text-xs sm:text-sm mb-4 font-semibold">
            Natural Environment
          </p>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Healthy & Disease-Free <br />
            <span className="text-green-400 relative">
              Quality Seedlings
              
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-100 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
            Agroplus Seedlings & Nursery providing premium Banana tissue culture,
            Sugarcane, and Vegetable seedlings. Visit our Krushi Seva Kendra
            for expert guidance and quality farm inputs.
          </p>

          {/* BUTTONS */}
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  
  <button
    onClick={() => navigate("/seedlings")}
    className="bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 
    text-black font-semibold 
    px-4 py-2 text-sm 
    sm:px-6 sm:py-3 sm:text-base 
    rounded-md shadow-lg transition"
  >
    View Seedlings
  </button>

  <button
    onClick={() => navigate("/contact")}
    className="border border-white hover:bg-white hover:text-black 
    px-4 py-2 text-sm 
    sm:px-6 sm:py-3 sm:text-base 
    rounded-md transition"
  >
    Contact Us
  </button>

</div>

          {/* LOCATION */}
          <p className="mt-5 text-gray-100 text-xs sm:text-sm flex items-center gap-2">
            <span className="text-orange-400">📍</span> Based in Pargaon
          </p>
        </div>
      </div>

      {/* ✨ ANIMATIONS */}
      <style jsx>{`
        .animate-zoom {
          animation: zoomBg 20s ease-in-out infinite alternate;
        }

        @keyframes zoomBg {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out;
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
      `}</style>
    </section>
  );
}