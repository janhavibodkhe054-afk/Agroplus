import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Sprout,
  ShieldCheck,
  Leaf,
  BadgePercent,
  Droplets,
  Map,
  Tractor,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: FlaskConical,
      title: "Soil Testing",
      desc: "Accurate soil testing services to analyze nutrient levels and improve crop productivity through scientific farming practices.",
    },
    {
      icon: Sprout,
      title: "Crop Advisory",
      desc: "Expert crop guidance on variety selection, cultivation methods, seasonal planning and yield improvement strategies.",
    },
    {
      icon: ShieldCheck,
      title: "Pest & Disease Management",
      desc: "Professional recommendations to protect crops from pests, insects, diseases and reduce crop losses effectively.",
    },
    {
      icon: BadgePercent,
      title: "Fertilizer Recommendation",
      desc: "Customized fertilizer recommendations based on soil condition, crop type and nutrient requirements.",
    },
    {
      icon: Leaf,
      title: "Organic Farming Guidance",
      desc: "Support for sustainable and organic farming practices using bio-products and eco-friendly cultivation methods.",
    },
    {
      icon: Tractor,
      title: "Government Scheme Assistance",
      desc: "Guidance and support for agricultural subsidies, government schemes, grants and farmer welfare programs.",
    },
    {
      icon: Droplets,
      title: "Irrigation Guidance",
      desc: "Efficient irrigation planning including drip irrigation systems and water management solutions.",
    },
    {
      icon: Map,
      title: "Farm Planning Support",
      desc: "Strategic farm planning services to maximize productivity, profitability and long-term farm growth.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Agricultural Services | Soil Testing, Crop Advisory & Farm Support
        </title>

        <meta
          name="description"
          content="Professional agricultural services including soil testing, crop advisory, pest management, fertilizer recommendations, irrigation guidance, organic farming support, government scheme assistance and farm planning solutions."
        />

        <meta
          name="keywords"
          content="Soil Testing, Crop Advisory, Pest Management, Fertilizer Recommendation, Organic Farming, Irrigation Guidance, Farm Planning, Agricultural Services, Krushi Seva Kendra"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/services"
        />

        <meta
          property="og:title"
          content="Agricultural Services for Better Farming"
        />

        <meta
          property="og:description"
          content="Complete agricultural support services including soil testing, crop advisory, irrigation guidance and farm planning."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden py-10 bg-gradient-to-b from-[#f8faf5] via-white to-[#f5f9f2]">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-green-700 uppercase tracking-[4px] font-semibold">
              Agricultural Services
            </span>

            <h2 className="text-3xl md:text-3xl font-black text-[#172312] mt-5 mb-3">
              Expert Farming Solutions
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Comprehensive agricultural support services designed to
              improve productivity, crop health, soil fertility and
              farm profitability.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-green-200 via-green-500 to-green-200 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -80 : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    className={`relative flex items-center ${
                      index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }`}
                  >
                    {/* Timeline Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-400 blur-xl opacity-50 rounded-full animate-pulse"></div>

                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white flex items-center justify-center shadow-2xl border-4 border-white">
                          <Icon size={30} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      whileHover={{
                        y: -12,
                        scale: 1.03,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                      className={`group relative overflow-hidden w-full lg:w-[46%]
                      rounded-[32px]
                      bg-white/80
                      backdrop-blur-xl
                      border border-white
                      shadow-xl
                      hover:shadow-[0_25px_60px_rgba(34,197,94,0.18)]
                      ${
                        index % 2 === 0
                          ? "lg:mr-auto"
                          : "lg:ml-auto"
                      }`}
                    >
                      {/* Hover Background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-green-50 via-white to-yellow-50"></div>

                      {/* Number */}
                      <div className="absolute top-6 right-6">
                        <span className="text-6xl font-black text-green-100">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Glow */}
                      <div className="absolute -top-10 -right-10 w-40 h-40  bg-green-200 blur-3xl opacity-30"></div>

                      <div className="relative z-10 p-8 md:p-10">
                        <div className="flex items-start gap-2">
                          {/* Mobile Icon */}
                          <motion.div
                            whileHover={{
                              rotate: 10,
                              scale: 1.1,
                            }}
                            className="lg:hidden w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 text-white flex items-center justify-center shadow-lg shrink-0"
                          >
                            <Icon size={28} />
                          </motion.div>

                          <div>
                            <h3 className="text-2xl md:text-2xl font-black text-[#172312] mb-2">
                              {service.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-lg">
                              {service.desc}
                            </p>
                          </div>
                        </div>

                        {/* Animated Line */}
                        <div className="mt-8 h-[4px] bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-green-600 to-yellow-400"></div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}