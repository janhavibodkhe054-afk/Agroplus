import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
          Agriculture Gallery | Modern Farming & Crop Management Photos
        </title>

        <meta
          name="description"
          content="Explore our agriculture gallery showcasing modern farming practices, crop cultivation, irrigation systems, harvesting operations, greenhouse farming, and sustainable agriculture solutions."
        />

        <meta
          name="keywords"
          content="agriculture gallery, farming photos, crop management, smart farming, sustainable agriculture, greenhouse farming, harvesting, irrigation systems, farm management"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/agriculture-gallery"
        />

        <meta
          property="og:title"
          content="Agriculture Gallery | Smart Farming & Crop Management"
        />

        <meta
          property="og:description"
          content="View agriculture and farming gallery featuring crop cultivation, harvesting, irrigation, greenhouse farming, and modern farm operations."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="py-20 bg-[#f8faf7] overflow-hidden relative"
        aria-label="Agriculture Gallery"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          {/* Heading */}
          

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                }}
                viewport={{ once: true }}
                onClick={() => setSelected(img)}
                className="group relative h-[300px] overflow-hidden cursor-pointer rounded-2xl bg-black shadow-lg"
              >
                <img
                  src={img}
                  alt={`Agriculture farming activity ${index + 1}`}
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    transition-all duration-700
                    group-hover:scale-125
                    group-hover:rotate-[2deg]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

                {/* Border Animation */}
                <div
                  className="
                    absolute inset-0
                    border-[0px]
                    border-green-500
                    group-hover:border-[8px]
                    transition-all duration-500
                  "
                />

                {/* Number */}
                <div
                  className="
                    absolute bottom-0 left-0
                    translate-y-full
                    group-hover:translate-y-0
                    transition duration-500
                    bg-green-600
                    text-white
                    px-5 py-3
                    font-bold
                    text-lg
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0 z-50
                bg-black/95
                flex items-center justify-center
                p-6
              "
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close gallery image"
                className="
                  absolute top-6 right-6
                  bg-green-600
                  p-3
                  rounded-full
                  text-white
                  hover:bg-green-700
                  transition
                "
              >
                <X size={22} />
              </button>

              <motion.img
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selected}
                alt="Agriculture gallery preview"
                className="
                  w-full
                  max-w-[1100px]
                  max-h-[88vh]
                  object-cover
                  rounded-2xl
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}