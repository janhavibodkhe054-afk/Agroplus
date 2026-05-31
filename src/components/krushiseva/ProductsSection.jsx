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
      icon: <Droplets size={42} />,
      title: "Drip Irrigation",
      desc: "Modern irrigation materials for efficient water management and savings.",
    },
    {
      icon: <Tractor size={42} />,
      title: "Farm Equipment",
      desc: "Agricultural tools and equipment designed for everyday farming operations.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Crop Protection",
      desc: "Advanced solutions to protect crops and maximize farm productivity.",
    },
    {
      icon: <TrendingUp size={42} />,
      title: "Growth Promoters",
      desc: "Specialized products that support healthy crop development and higher yields.",
    },
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
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold uppercase tracking-[3px]">
              Products We Offer
            </span>

            <h2
              className="text-4xl md:text-6xl text-[#172312] mt-6"
              style={{
                fontFamily: "'Amatic SC', cursive",
              }}
            >
              Complete Agricultural Solutions
            </h2>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg leading-relaxed">
              Premium agricultural products designed to improve crop
              health, enhance soil fertility, increase productivity
              and support sustainable farming practices.
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
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="group relative h-[420px] flex flex-col overflow-hidden rounded-[32px] bg-white border border-gray-100 shadow-md hover:shadow-[0_20px_60px_rgba(22,101,52,0.15)] transition-all duration-500"
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