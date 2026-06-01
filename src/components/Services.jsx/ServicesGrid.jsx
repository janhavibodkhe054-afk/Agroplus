import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tractor,
  Sprout,
  Wheat,
  Droplets,
  BarChart3,
  Warehouse,
  Bug,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function AgricultureServicesCarousel() {
  const services = [
    {
      image:
        "/11.jpeg",
      icon: <Tractor size={32} />,
      title: "Farm Management",
      description:
        "Manage crop planning, farm activities, expenses, and daily operations efficiently.",
    },
    {
      image:
        "/12.jpeg",
      icon: <Sprout size={32} />,
      title: "Crop Monitoring",
      description:
        "Track crop growth stages, plantation records, and harvest performance digitally.",
    },
    {
      image:
        "/13.jpeg",
      icon: <Droplets size={32} />,
      title: "Fertigation Management",
      description:
        "Maintain fertilizer, irrigation, and spray records for better crop productivity.",
    },
    {
      image:
        "/14.jpeg",
      icon: <Warehouse size={32} />,
      title: "Inventory Management",
      description:
        "Manage fertilizers, pesticides, seeds, stock, and agricultural inputs.",
    },
    {
      image:
        "/15.jpeg",
      icon: <BarChart3 size={32} />,
      title: "Farm Analytics",
      description:
        "Get real-time reports, profitability analysis, and farm performance insights.",
    },
    {
      image:
        "/16.jpeg",
      icon: <Wheat size={32} />,
      title: "Harvest & Sales Tracking",
      description:
        "Track production, harvest records, sales entries, and customer transactions.",
    },
    {
  image: "/17.jpeg",
  icon: <Bug size={32} />,
  title: "Pesticides Solutions",
  description:
    "Effective pesticide solutions to protect crops from diseases, improve plant health and maximize farm productivity.",
},
{
  image: "/18.jpeg",
  icon: <ShieldCheck size={32} />,
  title: "Insecticides Management",
  description:
    "Advanced insecticide products and crop protection programs for healthy growth and reduced pest damage.",
},
{
  image: "/17.jpeg",
  icon: <Leaf size={32} />,
  title: "Organic Farming Solutions",
  description:
    "Guidance and products for sustainable farming including organic fertilizers, bio-inputs, soil health improvement and eco-friendly crop cultivation practices.",
}
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 3 >= services.length ? 0 : prev + 3
      );
    }, 5000); // 3 sec visible + transition time

    return () => clearInterval(interval);
  }, [services.length]);

  const visibleCards = services.slice(current, current + 3);

  return (
    <>
      <Helmet>
        <title>
          Agriculture ERP Services | Farm Management Software
        </title>

        <meta
          name="description"
          content="Explore agriculture ERP services including crop management, farm analytics, fertigation tracking, inventory management, harvest monitoring, and smart farming solutions."
        />

        <meta
          name="keywords"
          content="Agriculture ERP Services, Farm Management Software, Crop Monitoring, Fertigation Management, Farm Analytics, Inventory Management, Harvest Tracking"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/services"
        />
      </Helmet>

      <section className="bg-[#f8f8f8] py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {visibleCards.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group bg-white rounded-[10px] shadow-sm hover:shadow-2xl transition-all duration-500 p-8 text-center relative overflow-hidden"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Circular Image */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-[240px] h-[240px] rounded-full object-cover"
                      />

                      {/* Floating Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.1,
                        }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-28 h-28 rounded-full bg-[#3b6f16] text-white flex items-center justify-center shadow-xl"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-10">
                    <h3 className="text-[20px] leading-tight font-bold text-[#17230f] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-medium leading-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-[10px] transition-all duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {[0, 3].map((dot, index) => (
              <button
                key={index}
                onClick={() => setCurrent(dot)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === dot
                    ? "w-10 bg-green-700"
                    : "w-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}