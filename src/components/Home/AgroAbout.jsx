import React from "react";
import { Leaf, Sprout, Tractor } from "lucide-react";

export default function AgroAbout() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE CARD */}
        <div className="relative flex justify-center">
          
          {/* BACK SHAPE */}
          <div className="absolute w-72 h-72 bg-green-100 rounded-[40%] -top-6 -left-6"></div>

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="Agroplus Nursery"
            className="relative w-72 h-80 object-cover rounded-xl shadow-lg"
          />

          {/* SMALL CARD */}
          <div className="absolute bottom-0 left-0 bg-white shadow-md px-5 py-3 rounded-lg flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Leaf className="text-green-600" size={20} />
            </div>
            <p className="text-sm font-medium text-gray-700">
              Trusted Agro Services
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm text-green-500 font-semibold mb-2 uppercase tracking-wider">
            About Agroplus
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Growing Healthy Crops <br />
            For a Better Tomorrow 🌱
          </h2>

          <p className="text-gray-500 mb-6">
            Agroplus Seedlings & Nursery is dedicated to providing high-quality,
            disease-free plants including Banana tissue culture, Sugarcane, and
            vegetable seedlings. We also offer expert guidance through our Krushi
            Seva Kendra for modern and sustainable farming.
          </p>

          {/* FEATURES */}
          <div className="space-y-4">

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Sprout className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Premium Quality Seedlings
                </h4>
                <p className="text-sm text-gray-500">
                  Healthy, disease-free plants for better yield and growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Leaf className="text-orange-500" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Sustainable Farming Solutions
                </h4>
                <p className="text-sm text-gray-500">
                  Eco-friendly practices to improve productivity and soil health.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Tractor className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Expert Guidance & Support
                </h4>
                <p className="text-sm text-gray-500">
                  Professional advice from our Krushi Seva Kendra experts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}