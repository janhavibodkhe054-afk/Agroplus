import React from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Banana,
  Sprout,
  Leaf,
  Tractor,
  MonitorSmartphone,
  Trees,
  ArrowRight,
} from "lucide-react";

import "swiper/css";

export default function SeedlingServices() {
  const services = [
    {
      title: "Banana Farming",
      icon: <Banana size={34} />,
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
      description:
        "Complete banana farming solutions with expert guidance for higher productivity and better crop management.",
    },
    {
      title: "Sugarcane Farming",
      icon: <Tractor size={34} />,
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
      description:
        "Modern sugarcane farming techniques and support to improve yield, quality and farm profitability.",
    },
    {
      title: "Banana Tissue Culture",
      icon: <Leaf size={34} />,
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
      description:
        "Healthy disease-free banana tissue culture plants for uniform growth and superior production.",
    },
    {
      title: "Sugarcane Seedlings",
      icon: <Sprout size={34} />,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium quality sugarcane seedlings developed for strong root systems and healthy crop establishment.",
    },
    {
      title: "Vegetable Plants",
      icon: <Trees size={34} />,
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
      description:
        "Wide range of vegetable plants and seedlings suitable for commercial and small-scale farming.",
    },
    {
      title: "Farm Guidance",
      icon: <Tractor size={34} />,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
      description:
        "Professional agricultural consultation for crop planning, nutrition management and farm success.",
    },
    {
      title: "Agro Software Solutions",
      icon: <MonitorSmartphone size={34} />,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      description:
        "Smart agriculture ERP software for farm management, inventory tracking, accounting and analytics.",
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
          content="Explore banana tissue culture plants, sugarcane seedlings, vegetable plants, farm guidance services, banana farming solutions and Agro ERP software from Agroplus."
        />

        <meta
          name="keywords"
          content="Banana Tissue Culture, Sugarcane Seedlings, Vegetable Plants, Banana Farming, Sugarcane Farming, Farm Guidance, Agro Software Solutions, Nursery Plants"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/seedlings"
        />

        <meta
          property="og:title"
          content="Seedlings & Agricultural Solutions | Agroplus"
        />

        <meta
          property="og:description"
          content="Premium banana tissue culture plants, sugarcane seedlings, vegetable plants and smart agricultural solutions."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative py-10 overflow-hidden bg-[#f8faf7]">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
              Agroplus Seedling
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-[#172312] mb-5">
              Seedlings & Farming Solutions
            </h2>

            <p className="max-w-5xl mx-auto text-gray-600 text-lg">
              Quality seedlings, tissue culture plants, farming guidance and
              smart agricultural solutions designed for modern farmers.
            </p>
          </motion.div>

          {/* Auto Scroll Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000, // Stops 2 sec on each slide
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
            }}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[520px] flex flex-col"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-[240px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="w-16 h-16 rounded-2xl bg-green-700 text-white flex items-center justify-center mb-5 group-hover:bg-[#f0c84b] group-hover:text-black transition duration-500">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#172312] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    <a
                      href="https://wa.me/914105040000
"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center justify-between bg-[#2d6416] hover:bg-[#214b10] text-white rounded-full overflow-hidden"
                    >
                      <span className="px-6 py-4 font-semibold">
                        Enquire Now
                      </span>

                      <div className="w-14 h-14 bg-[#f0c84b] flex items-center justify-center">
                        <ArrowRight
                          size={20}
                          className="text-black group-hover/button:translate-x-1 transition"
                        />
                      </div>
                    </a>
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