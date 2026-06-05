import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutKrushiSevaKendra() {
  return (
    <>
      <Helmet>
        <title>
          About Krushi Seva Kendra | Quality Agricultural Products & Farming
          Solutions
        </title>

        <meta
          name="description"
          content="Krushi Seva Kendra provides quality seeds, fertilizers, pesticides, crop protection products and expert agricultural guidance to help farmers improve productivity and profitability."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra, Agricultural Products, Seeds, Fertilizers, Pesticides, Farming Solutions, Crop Protection Products, Agriculture Store"
        />

        <link
          rel="canonical"
          href="https://www.yourwebsite.com/krushi-seva-kendra"
        />
      </Helmet>

      <section className="bg-[#f8f8f5] py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Accent Background */}
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-gradient-to-br from-green-500 to-orange-400 rounded-[30px]"></div>

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-[30px] shadow-2xl">
                <img
                  src="/21.jpeg"
                  alt="Krushi Seva Kendra"
                  className="
                    w-full
                    h-[420px]
                    md:h-[650px]
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="
                  absolute
                  bottom-6
                  left-6
                  z-20
                  bg-white
                  rounded-2xl
                  shadow-xl
                  px-6
                  py-4
                  border
                  border-gray-100
                "
              >
                <h4 className="text-3xl font-bold text-[#416E1F]">
                  10+
                </h4>

                <p className="text-gray-600 text-base md:text-lg">
                  Years Supporting Farmers
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Subtitle */}
              <p className="text-green-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
  About Krushi Seva Kendra
</p>

<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
  Trusted Agricultural Products & Farming Solutions
</h2>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                <div className="w-8 h-[3px] bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                At Krushi Seva Kendra, we provide quality fertilizers,
                pesticides, Insecticides crop protection products and expert agricultural
                guidance to help farmers improve crop productivity,
                profitability and sustainable farming practices.
              </p>

              {/* FEATURES */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle
                      size={22}
                      className="text-orange-400 mt-1"
                    />

                    <h3 className="text-xl font-bold text-[#16220f]">
                      Quality Agricultural Inputs
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg">
                    Premium fertilizers, pesticides and crop nutrition products from
                    trusted agricultural brands.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle
                      size={22}
                      className="text-orange-400 mt-1"
                    />

                    <h3 className="text-xl font-bold text-[#16220f]">
                      Farmer Support & Guidance
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg">
                    Expert recommendations for crop management, disease control
                    and better farm productivity.
                  </p>
                </div>
              </div>

              {/* PROGRESS BAR 1 */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <h4 className="font-bold text-lg text-[#16220f]">
                    Product Quality
                  </h4>

                  <span className="text-base text-gray-600 font-semibold">
                    95%
                  </span>
                </div>

                <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-green-500 to-orange-400 rounded-full"
                  />
                </div>
              </div>

              {/* PROGRESS BAR 2 */}
              <div>
                <div className="flex justify-between mb-3">
                  <h4 className="font-bold text-lg text-[#16220f]">
                    Farmer Satisfaction
                  </h4>

                  <span className="text-base text-gray-600 font-semibold">
                    98%
                  </span>
                </div>

                <div className="w-full h-[8px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-green-500 to-orange-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}