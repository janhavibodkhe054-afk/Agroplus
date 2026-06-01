import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X, Images } from "lucide-react";

import "swiper/css";

export default function SeedlingPhotos() {
  const [selected, setSelected] = useState(null);

  const gallery = Array.from(
    { length: 65 },
    (_, i) => `/${i + 1}.jpeg`
  );

  return (
    <>
      <Helmet>
        <title>
          Agriculture Gallery | Farming, Seedlings & Crop Photos
        </title>

        <meta
          name="description"
          content="Explore our agriculture gallery featuring banana farming, sugarcane cultivation, vegetable seedlings, tissue culture plants and modern farming activities."
        />
      </Helmet>

      <section className="relative pb-20 bg-[#f8faf7] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-[1500px] mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
              <Images size={18} />
              Our Gallery
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-[#172312] mb-5">
              Farming In Action
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Explore our farming projects, nursery plants, banana tissue
              culture, sugarcane cultivation and agricultural activities.
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={5000}
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3.5,
              },
              1400: {
                slidesPerView: 4.5,
              },
            }}
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  onClick={() => setSelected(img)}
                  className="
                    group
                    relative
                    h-[320px]
                    overflow-hidden
                    rounded-[28px]
                    cursor-pointer
                    bg-white
                    shadow-lg
                    hover:shadow-[0_25px_60px_rgba(22,34,15,0.25)]
                    transition-all
                    duration-500
                  "
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                    "
                  />

                  {/* Number Badge */}
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      backdrop-blur-md
                      bg-white/20
                      border
                      border-white/20
                      text-white
                      px-4
                      py-2
                      rounded-full
                      font-bold
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Bottom Label */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-6
                      translate-y-full
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    

                    <p className="text-white/80 text-sm mt-2">
                      Click to view image
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                z-50
                bg-black/95
                flex
                items-center
                justify-center
                p-5
              "
            >
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute
                  top-5
                  right-5
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  p-3
                  rounded-full
                "
              >
                <X size={22} />
              </button>

              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selected}
                alt="Gallery Preview"
                className="
                  w-full
                  max-w-[1200px]
                  max-h-[90vh]
                  rounded-3xl
                  object-contain
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}