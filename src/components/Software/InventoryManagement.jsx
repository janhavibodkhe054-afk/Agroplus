import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  BellRing,
  FolderTree,
  History,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

export default function InventoryManagement() {
  const features = [
    {
      icon: <BellRing size={20} />,
      title: "Low Stock Alerts",
    },
    {
      icon: <FolderTree size={20} />,
      title: "Product Categories",
    },
    {
      icon: <History size={20} />,
      title: "Stock History",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Purchase Tracking",
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      {/* 🌈 BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl"></div>

      {/* DOTS */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-10 left-20 grid grid-cols-8 gap-4">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            ></span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >

            {/* FLOATING BOX */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="
                absolute
                top-0
                left-2 sm:left-8
                z-20
                bg-white
                shadow-xl
                rounded-2xl
                px-5 py-4
                flex items-center gap-3
                border border-gray-100
              "
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <BellRing size={20} />
              </div>

              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Real-Time Stock Alerts
              </p>
            </motion.div>

            {/* SECOND FLOATING */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="
                absolute
                top-20
                left-12 sm:left-20
                z-20
                bg-white
                shadow-xl
                rounded-2xl
                px-5 py-4
                flex items-center gap-3
                border border-gray-100
              "
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                <Boxes size={20} />
              </div>

              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Inventory Automation
              </p>
            </motion.div>

            {/* MAIN MOCKUP */}
            <div className="relative pt-28 sm:pt-32">

              <div className="
                bg-white
                rounded-[32px]
                shadow-2xl
                border border-gray-200
                overflow-hidden
              ">

                {/* HEADER */}
                <div className="flex items-center justify-between px-5 py-4 border-b bg-[#f8fafc]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  </div>

                  <p className="text-sm font-semibold text-gray-500">
                    Agroplus Inventory
                  </p>
                </div>

                {/* DASHBOARD */}
                <div className="p-5 bg-white">

                  {/* TOP CARDS */}
                  <div className="grid grid-cols-2 gap-4 mb-5">

                    <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                      <p className="text-sm text-gray-500 mb-1">
                        Total Products
                      </p>

                      <h3 className="text-2xl font-black text-green-600">
                        2,540
                      </h3>
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                      <p className="text-sm text-gray-500 mb-1">
                        Low Stock
                      </p>

                      <h3 className="text-2xl font-black text-orange-500">
                        18
                      </h3>
                    </div>

                  </div>

                  {/* TABLE */}
                  <div className="rounded-2xl border border-gray-100 overflow-hidden">

                    <div className="grid grid-cols-3 bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-gray-600">
                      <p>Product</p>
                      <p>Category</p>
                      <p>Stock</p>
                    </div>

                    {[
                      ["Banana Seedlings", "Seedlings", "240"],
                      ["Fertilizer", "Agro Products", "120"],
                      ["Pesticides", "Crop Care", "65"],
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 px-4 py-3 border-t text-sm text-gray-700"
                      >
                        <p>{item[0]}</p>
                        <p>{item[1]}</p>

                        <p className="font-semibold text-green-600">
                          {item[2]}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>
              </div>

              {/* FLOATING ACCURACY */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="
                  absolute
                  -bottom-6
                  right-0
                  bg-black
                  text-white
                  rounded-2xl
                  px-6 py-4
                  shadow-2xl
                "
              >
                <p className="text-sm text-gray-300 mb-1">
                  Inventory Accuracy
                </p>

                <h3 className="text-3xl font-black text-green-400">
                  98%
                </h3>
              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            {/* TAG */}
            <div className="
              inline-flex items-center gap-2
              bg-green-100
              text-green-700
              px-4 py-2
              rounded-full
              mb-6
            ">
              <Boxes size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Inventory Management
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-6">

              Manage Agro <br />

              <span className="text-green-600">
                Inventory Smarter
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Track fertilizers, seedlings, pesticides, agricultural
              products and stock levels in real-time with powerful
              inventory automation built for agro businesses.
            </p>

            

            {/* WHATSAPP CTA */}
            <div className="
              flex flex-col sm:flex-row
              overflow-hidden
              rounded-2xl
              border border-gray-300
              bg-white
              shadow-md
              max-w-xl
            ">

              <div className="
                flex items-center
                px-5 py-4
                bg-[#f8fafc]
                border-b sm:border-b-0 sm:border-r
                font-semibold
                text-gray-800
              ">
                +91
              </div>

              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="
                  flex-1
                  px-5 py-4
                  outline-none
                  text-gray-700
                "
              />

              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  bg-black
                  hover:bg-gray-900
                  text-white
                  font-semibold
                  px-7 py-4
                  transition
                "
              >
                Know More
                <ArrowRight size={18} />
              </a>

            </div>

            <p className="text-sm text-gray-500 mt-4">
              Connect instantly with Agroplus Software Support
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}