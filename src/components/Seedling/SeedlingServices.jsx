import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sprout,
  Trees,
  ArrowRight,
  Flower2,
} from "lucide-react";

export default function SeedlingServices() {
  const services = [
    {
      title: "Sugarcane Seedlings",
      icon: <Sprout size={34} />,
      description:
        "Premium quality sugarcane seedlings developed for strong root systems and healthy crop establishment.",
    },
    {
      title: "Vegetable Seedlings",
      icon: <Trees size={34} />,
      description:
        "Wide range of vegetable plants and seedlings suitable for commercial and small-scale farming.",
    },
    {
      title: "Marigold Seedlings",
      icon: <Flower2 size={34} />,
      description:
        "Healthy marigold seedlings suitable for commercial flower farming, landscaping and decorative cultivation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Seedlings, Banana Tissue Culture & Farm Solutions | Agroplus
        </title>

        <meta
          name="description"
          content="Explore banana tissue culture plants, sugarcane seedlings, vegetable plants and agricultural solutions from Agroplus."
        />
      </Helmet>

      <section className="relative py-12 md:py-16 overflow-hidden bg-[#f8faf7]">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14 text-left md:text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-xs sm:text-sm mb-4">
              Agroplus Seedling
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#172312] mb-4">
              Seedlings & Farming Solutions
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
              Quality seedlings, tissue culture plants, farming guidance and
              agricultural solutions designed to support healthy crop growth and
              better farming outcomes.
            </p>
          </motion.div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-600 rounded-[24px] md:rounded-[30px] transition-all duration-500"></div>

                {/* Card */}
                <div className="relative h-full min-h-[340px] md:min-h-[380px] bg-white rounded-[24px] md:rounded-[30px] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden">
                  {/* Number */}
                  <span className="absolute top-4 right-4 md:top-5 md:right-6 text-5xl md:text-6xl font-black text-gray-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-green-100 text-[#2d6416] flex items-center justify-center mb-5 group-hover:bg-green-700 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#172312] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="w-12 md:w-16 h-1 bg-green-600 rounded-full my-5"></div>

                  {/* Button */}
                  <a
                    href="https://wa.me/919860207957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2d6416] font-semibold text-sm border border-green-200 hover:border-green-600 hover:bg-green-50 px-4 md:px-5 py-2 rounded-full transition-all duration-300 w-fit"
                  >
                    Enquire Now
                    <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}