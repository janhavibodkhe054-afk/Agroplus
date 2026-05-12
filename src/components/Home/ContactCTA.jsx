import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center z-0 -mt-68"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/016/807/601/non_2x/beautiful-green-leaf-background-watercolor-vector.jpg')",
      }}
    >
      {/* WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* 🌿 MAIN BOX */}
      <div className="relative max-w-5xl mx-auto px-6 text-center pt-40">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 mt-20">
          Contact Agroplus Today 🌱
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Get expert guidance, quality seedlings, and complete farming solutions.
          We're here to support your growth.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 text-black font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Contact Us →
        </button>
      </div>

      {/* 🔥 OVERLAP SPACE */}
      <div className="h-12"></div>
    </section>
  );
}