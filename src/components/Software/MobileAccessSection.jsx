import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  MonitorSmartphone,
  Wifi,
  ShieldCheck,
} from "lucide-react";

export default function MobileAccessSection() {

  const features = [
    {
      icon: <MonitorSmartphone size={20} />,
      title: "Fully Responsive Software",
    },
    {
      icon: <Wifi size={20} />,
      title: "Access Anywhere Anytime",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure Cloud Access",
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              <Smartphone size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Mobile Access
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">

              Access Agroplus <br />

              <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Anywhere, Anytime
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Manage inventory, billing, reports and analytics
              seamlessly from mobile, tablet or desktop with
              fully responsive cloud-based software access.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-8">

              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="
                    flex items-center gap-4
                    bg-white
                    border border-gray-100
                    rounded-2xl
                    px-5 py-4
                    shadow-sm
                    hover:shadow-lg
                    transition-all duration-300
                  "
                >

                  {/* ICON */}
                  <div className="
                    w-12 h-12
                    rounded-xl
                    bg-gradient-to-r from-green-500 to-orange-400
                    text-white
                    flex items-center justify-center
                    shrink-0
                  ">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* EXTRA TEXT */}
            <p className="text-sm text-gray-500">
              Compatible with Android, iPhone, Tablet & Desktop Devices.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* PHONE MOCKUP */}
            <div className="
              relative
              w-[280px]
              sm:w-[320px]
              bg-[#111827]
              rounded-[42px]
              border-[10px]
              border-black
              shadow-2xl
              overflow-hidden
            ">

              {/* TOP NOTCH */}
              <div className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-36
                h-6
                bg-black
                rounded-b-3xl
                z-20
              "></div>

              {/* SCREEN IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                alt="Mobile Dashboard"
                className="
                  w-full
                  h-[580px]
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "></div>

              {/* FLOATING STATS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  w-[88%]
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  rounded-2xl
                  px-5 py-4
                  text-white
                "
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-gray-200 mb-1">
                      Monthly Revenue
                    </p>

                    <h3 className="text-2xl font-black">
                      ₹4.8L
                    </h3>
                  </div>

                  <div className="
                    bg-green-500/20
                    text-green-300
                    text-sm
                    px-3 py-1
                    rounded-full
                  ">
                    +18%
                  </div>

                </div>

              </motion.div>

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="
                absolute
                top-10
                -left-2 sm:left-0
                bg-white
                shadow-2xl
                rounded-2xl
                px-5 py-4
                border border-gray-100
              "
            >

              <p className="text-sm text-gray-500 mb-1">
                Live Orders
              </p>

              <h3 className="text-2xl font-black text-green-600">
                1,280+
              </h3>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}