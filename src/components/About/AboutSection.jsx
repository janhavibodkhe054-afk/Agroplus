import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Play } from "lucide-react";

export default function AboutSection() {
  const points = [
    "Complete Crop & Farm Management",
    "Farm Accounting & Party Ledger",
    "Real-Time Analytics & Reports",
    "Cloud-Based & Mobile Friendly",
  ];

  return (
    <>
      <Helmet>
        <title>
          About Agroplus Farm ERP Software | Agriculture Management Platform
        </title>

        <meta
          name="description"
          content="Agroplus Farm ERP Software helps farmers manage crop operations, farm accounting, labor management, inventory tracking and farm analytics through one integrated agriculture management platform."
        />

        <meta
          name="keywords"
          content="Farm ERP Software, Agriculture ERP Software, Farm Management Software, Crop Management System, Farm Accounting Software"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#F5F5F5] py-14 md:py-20 lg:py-24">
        {/* Background */}
        <div className="absolute top-10 left-0 w-48 md:w-72 h-48 md:h-72 bg-green-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-56 md:w-80 h-56 md:h-80 bg-yellow-100 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="text-green-700 font-semibold text-base md:text-lg mb-4">
                Get to Know Agroplus
              </p>

              <h2
                className="text-[34px] sm:text-[48px] md:text-[58px] leading-[0.95] text-[#14210f] mb-5"
                style={{
                  fontFamily: "'Amatic SC', cursive",
                }}
              >
                AGROPLUS IS THE
                <br />
                SMART FARM ERP
                <br />
                PLATFORM
              </h2>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#416E1F] mb-5 leading-snug">
                Empowering farmers with smart farm management,
                accounting and analytics.
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Agroplus Farm ERP helps farmers and agribusinesses
                manage crop planning, labor activities, farm
                accounting, inventory tracking and profitability
                analysis through one powerful agriculture
                management platform.
              </p>

              <div className="space-y-4 mb-8">
                {points.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={20}
                      className="text-yellow-500 shrink-0"
                    />

                    <p className="text-base md:text-lg font-semibold text-[#1D2418]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Link
  to="/kendra"
  className="group inline-flex items-center bg-[#3E6C1E] hover:bg-[#355b19] text-white rounded-full overflow-hidden transition-all"
>
  <span className="px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-semibold">
    Learn More
  </span>

  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0C94A] flex items-center justify-center">
    <ArrowRight
      size={22}
      className="text-black group-hover:translate-x-1 transition"
    />
  </div>
</Link>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Yellow Background */}
              <div className="hidden md:block absolute right-[-15px] top-8 w-full h-[90%] bg-[#F0C94A] rounded-[20px]" />

              {/* Play Button */}
              <div className="hidden lg:block absolute left-[-45px] top-20 z-30">
                <div className="w-28 h-28 xl:w-36 xl:h-36 bg-[#ECE8DD] rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#F0C94A] flex items-center justify-center shadow-lg">
                    <Play
                      fill="black"
                      size={22}
                      className="text-black ml-1"
                    />
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-[20px] shadow-2xl">
                <img
                  src="8.jpeg"
                  alt="Agroplus Farm ERP Agriculture Management"
                  className="w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover"
                />
              </div>

              {/* Floating Image */}
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  relative
                  lg:absolute
                  lg:-left-16
                  xl:-left-24
                  lg:bottom-0
                  z-20
                  bg-white
                  p-2 md:p-3
                  rounded-[18px]
                  shadow-2xl
                  mt-4
                  lg:mt-0
                  max-w-[320px]
                  xl:max-w-[380px]
                "
              >
                <img
                  src="https://static.investindia.gov.in/s3fs-public/2019-02/Blog%20Image.jpg"
                  alt="Farm Analytics Dashboard"
                  className="
                    w-full
                    h-[220px]
                    md:h-[260px]
                    lg:h-[280px]
                    rounded-[14px]
                    object-cover
                  "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}