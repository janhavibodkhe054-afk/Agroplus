import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Tractor,
  BarChart3,
} from "lucide-react";

export default function AboutBenefits() {
  return (
    <>
      <Helmet>
        <title>
          Agroplus Farm ERP Software | Smart Agriculture Management Platform
        </title>

        <meta
          name="description"
          content="Agroplus Farm ERP Software helps farmers and agribusinesses manage crop planning, labor tracking, inventory, accounting, fertigation records and real-time farm analytics from one smart platform."
        />

        <meta
          name="keywords"
          content="Farm ERP Software, Agriculture ERP Software, Farm Management Software, Smart Farming Software, Crop Management Software, Farm Accounting Software"
        />

        <link
          rel="canonical"
          href="https://www.agropluserp.com/about"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#2d6416]">
        <div className="grid lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative min-h-[350px] sm:min-h-[450px] lg:min-h-[650px]">
            <img
              src="https://climate.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/shutterstock_1689558058-scaled.jpg.webp"
              alt="Farm Management Software for Modern Agriculture"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15"></div>

            {/* Yellow Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                absolute
                bottom-0
                left-0
                right-0
                md:left-auto
                md:right-0
                bg-[#f0c84b]
                p-5
                md:p-7
                lg:p-8
                w-full
                md:max-w-[420px]
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0">
                  <Tractor
                    size={28}
                    className="text-[#2d6416]"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-black leading-tight">
                  We help farmers
                  <br />
                  grow smarter every day.
                </h3>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center">
            <div className="max-w-[650px] mx-auto px-5 md:px-8 lg:px-12 py-12 lg:py-16 relative z-10">
              {/* Tag */}
              <p className="text-green-200 text-base md:text-lg mb-4 font-medium">
                Why Farmers Choose Agroplus
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Smart Farm ERP
                <br />
                For Modern
                <br />
                Agriculture
              </h2>

              {/* Line */}
              <div className="w-20 h-1 bg-[#f0c84b] rounded-full mb-6"></div>

              {/* Description */}
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
                Agroplus Farm ERP Software helps farmers,
                agribusinesses, FPOs, nurseries and contract
                farming projects manage crop records, labor,
                fertigation, inventory, accounting and farm
                analytics from one centralized platform.
              </p>

              {/* Stats */}
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Stat 1 */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#f0c84b] flex items-center justify-center shrink-0">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      90%
                    </span>
                  </div>

                  <div>
                    <BarChart3
                      size={24}
                      className="text-green-300 mb-2"
                    />

                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                      Farm
                      <br />
                      Productivity
                    </h3>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#f0c84b] flex items-center justify-center shrink-0">
                    <span className="text-2xl md:text-3xl font-black text-white">
                      98%
                    </span>
                  </div>

                  <div>
                    <BarChart3
                      size={24}
                      className="text-green-300 mb-2"
                    />

                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                      Data
                      <br />
                      Accuracy
                    </h3>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Shape */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none hidden lg:block">
              <img
                src="https://pixydrops.com/agrionhtml/main-html/assets/images/backgrounds/provide-one-shape-1.png"
                alt=""
                className="w-[400px] xl:w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}