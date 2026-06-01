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

      <section className="bg-[#f8f8f8] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT IMAGE LAYOUT */}
            {/* LEFT IMAGE LAYOUT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5 order-2 lg:order-1"
            >
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-5">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5612AQEtMc7-bu9nwg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1688187907939?e=2147483647&v=beta&t=XLtz2GNcdXyBsQuR5hVx3BRrQmIOwRU5_YQs218c4fA"
                  alt="Farmer working in agricultural field"
                  className="h-[160px] md:h-[320px] w-full object-cover rounded-[22px]"
                />

                <img
                  src="https://www.bentoli.com/wp-content/uploads/2017/07/CommercialFarming-1.jpg"
                  alt="Agriculture farm plantation"
                  className="h-[160px] md:h-[320px] w-full object-cover rounded-[22px]"
                />
              </div>

              {/* TALL IMAGE */}
              <div>
                <img
                  src="https://media.istockphoto.com/id/1901542091/photo/tractor-spraying-soybean-crops-field.jpg?b=1&s=1024x1024&w=0&k=20&c=VYiEhZqdwR69LHWvKpC5v7ax5ceNQcAwnQP1Xo0HFFg="
                  alt="Modern tractor in farming field"
                  className="h-[342px] md:h-[660px] w-full object-cover rounded-[22px]"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Subtitle */}
              <p className="text-green-700 text-xl font-medium mb-4">
                About Krushi Seva Kendra
              </p>

              {/* Heading */}
              <h2
                className="text-[20px] md:text-[32px] font-bold leading-[1.05] text-[#14210f] mb-5"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                TRUSTED AGRICULTURAL PRODUCTS & FARMING SOLUTIONS
              </h2>
              {/* Divider */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-[3px] bg-yellow-500 rounded-full"></div>
                <div className="w-6 h-[3px] bg-yellow-500 rounded-full"></div>
                <div className="w-6 h-[3px] bg-yellow-500 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                At Krushi Seva Kendra, we provide quality seeds, fertilizers,
                pesticides, crop protection products and expert agricultural
                guidance to help farmers improve crop productivity,
                profitability and sustainable farming practices.
              </p>

              {/* FEATURES */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle size={22} className="text-yellow-500 mt-1" />

                    <h3 className="text-2xl font-bold text-[#16220f]">
                      Quality Agricultural Inputs
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    Premium seeds, fertilizers and crop nutrition products from
                    trusted agricultural brands.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle size={22} className="text-yellow-500 mt-1" />

                    <h3 className="text-2xl font-bold text-[#16220f]">
                      Farmer Support & Guidance
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    Expert recommendations for crop management, disease control
                    and better farm productivity.
                  </p>
                </div>
              </div>

              {/* PROGRESS BAR 1 */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-2xl text-[#16220f]">
                    Product Quality
                  </h4>

                  <span className="text-xl text-gray-600 font-semibold">
                    95%
                  </span>
                </div>

                <div className="w-full h-[7px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-green-700 rounded-full"
                  />
                </div>
              </div>

              {/* PROGRESS BAR 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-2xl text-[#16220f]">
                    Farmer Satisfaction
                  </h4>

                  <span className="text-xl text-gray-600 font-semibold">
                    98%
                  </span>
                </div>

                <div className="w-full h-[7px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.4 }}
                    viewport={{ once: true }}
                    className="h-full bg-green-700 rounded-full"
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
