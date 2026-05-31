import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Sprout,
  Tractor,
  BarChart3,
} from "lucide-react";

export default function AboutFarmSection() {
  const features = [
    {
      icon: <Tractor size={36} />,
      title: "Farm Operations",
    },
    {
      icon: <Sprout size={36} />,
      title: "Crop Management",
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Farm Analytics",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Smart Farm Management Software | Agroplus ERP
        </title>

        <meta
          name="description"
          content="Agroplus ERP helps farmers manage crop planning, labor, inventory, fertigation, accounting and farm analytics from one smart agriculture platform."
        />

        <meta
          name="keywords"
          content="farm management software, agriculture ERP, crop management software, smart farming, farm analytics, agribusiness software"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/about"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#fafafa] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Yellow Background Block */}
              <div className="absolute -top-16 -left-16 w-[280px] h-[280px] bg-[#efc94c] rounded-sm hidden lg:block"></div>

              {/* Green Accent Block */}
              <div className="absolute top-12 right-[-25px] w-24 h-[75%] bg-[#3c6e1a] rounded-2xl hidden lg:block"></div>

              <div className="relative z-10 overflow-hidden rounded-[22px] shadow-2xl">
                <img
                  src="/44.jpeg"
                  alt="Smart Agriculture ERP and Farm Management Software"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-green-700 font-semibold text-lg">
                Smart Agriculture ERP
              </span>

              <h2 className="mt-4 text-4xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                Modern Farm
                
                Management
                
                Solutions
              </h2>

              {/* Decorative Divider */}
              <div className="flex items-center gap-2 mt-6">
                <div className="w-10 h-[2px] bg-[#efc94c]"></div>
                <div className="w-3 h-3 rounded-full bg-[#efc94c]"></div>
                <div className="w-10 h-[2px] bg-[#efc94c]"></div>
              </div>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-xl">
                Agroplus ERP empowers farmers and agribusinesses with
                complete control over crop planning, fertigation,
                labor management, inventory, accounting, and farm
                performance analytics from a single digital platform.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="bg-white border border-gray-200 rounded-3xl p-4 text-center shadow-sm hover:shadow-xl"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-3">
                      {item.icon}
                    </div>

                    <h3 className="font-bold text-medium text-gray-900">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}