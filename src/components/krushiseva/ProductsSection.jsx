import React from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Sprout,
  FlaskConical,
  Bug,
  Leaf,
  Droplets,
  Tractor,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import "swiper/css";

export default function ProductsSection() {
  const products = [
    {
      icon: <Sprout size={42} />,
      title: "Seeds",
      desc: "High-quality certified seeds for improved crop yield and healthy plant growth.",
    },
    {
      icon: <FlaskConical size={42} />,
      title: "Fertilizers",
      desc: "Balanced nutrition solutions to enhance soil fertility and crop productivity.",
    },
    {
      icon: <Bug size={42} />,
      title: "Pesticides",
      desc: "Reliable crop protection products against insects, pests and diseases.",
    },
    {
      icon: <Leaf size={42} />,
      title: "Bio Products",
      desc: "Eco-friendly agricultural inputs supporting sustainable farming practices.",
    },
    
    {
  icon: <Bug size={42} />,
  title: "Insecticides",
  desc: "High-quality insecticides that help safeguard crops against pests.",
}
   
  ];

  return (
    <>
      <Helmet>
        <title>
          Agricultural Products | Seeds, Fertilizers, Pesticides &
          Farm Inputs
        </title>

        <meta
          name="description"
          content="Explore premium agricultural products including seeds, fertilizers, pesticides, bio products, drip irrigation materials, crop protection products, plant growth promoters and farm equipment."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra, Agricultural Products, Seeds, Fertilizers, Pesticides, Bio Products, Drip Irrigation, Farm Equipment, Crop Protection Products, Plant Growth Promoters"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/products"
        />

        <meta
          property="og:title"
          content="Agricultural Products & Farming Solutions"
        />

        <meta
          property="og:description"
          content="Quality agricultural inputs including seeds, fertilizers, pesticides, irrigation materials and farming equipment."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative py-10 overflow-hidden bg-gradient-to-b from-[#f8f8f5] via-white to-green-50">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-10">
  <span className="inline-block text-green-700 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
    Products We Offer
  </span>

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
    Complete Agricultural
    
    Solutions For Modern Farming
  </h2>

  <div className="flex items-center justify-center gap-2 mb-6">
    <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
    <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
    <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
  </div>

  <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
    Premium agricultural products and farming essentials that help
    improve crop health, increase productivity and support sustainable
    farming practices throughout every stage of cultivation.
  </p>
</div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="h-auto py-8">
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="group relative h-[400px] flex flex-col overflow-hidden rounded-[32px] bg-white border border-gray-100 shadow-md hover:shadow-[0_20px_60px_rgba(22,101,52,0.15)] transition-all duration-500"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/50 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  {/* Top Border Animation */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-green-600 to-emerald-500 group-hover:w-full transition-all duration-700"></div>

                  {/* Decorative Circle */}
                  <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-green-50 group-hover:scale-125 transition duration-700"></div>

                  <div className="relative z-10 flex flex-col h-full p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.15,
                      }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center mx-auto mb-8 shadow-xl"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-center text-[#172312] mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed flex-grow">
                      {item.desc}
                    </p>

                    {/* Bottom Text */}
                    <div className="mt-8 flex justify-center">
                      <span className="text-green-700 font-semibold text-sm tracking-wide uppercase">
                        Agricultural Solution
                      </span>
                    </div>

                    {/* Animated Line */}
                    <div className="mt-6 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-green-600 to-emerald-500 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}