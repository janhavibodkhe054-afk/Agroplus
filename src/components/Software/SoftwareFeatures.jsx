import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  ReceiptText,
  BarChart3,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

export default function SoftwareFeatures() {

  const features = [
    {
      title: "Inventory Management",
      icon: <Boxes size={26} />,
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1400&auto=format&fit=crop",
      desc:
        "Track fertilizers, seeds, pesticides, and agricultural products with real-time inventory updates and smart stock management.",
      points: [
        "Real-time stock tracking",
        "Low stock alerts",
        "Category management",
        "Purchase & sales history",
      ],
    },

    {
      title: "Billing Automation",
      icon: <ReceiptText size={26} />,
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop",
      desc:
        "Generate invoices instantly with fast billing workflows designed for agro stores and agricultural businesses.",
      points: [
        "GST invoice generation",
        "Fast customer billing",
        "Thermal printer support",
        "Customer billing history",
      ],
    },

    {
      title: "Financial Reports",
      icon: <BarChart3 size={26} />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
      desc:
        "Access complete sales, expense, and profit reports to make smarter business decisions with confidence.",
      points: [
        "Profit & loss reports",
        "Monthly sales reports",
        "Expense tracking",
        "Export reports easily",
      ],
    },

    {
      title: "Analytics Dashboard",
      icon: <LayoutDashboard size={26} />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      desc:
        "Visualize your business growth using modern analytics dashboards with powerful insights and performance tracking.",
      points: [
        "Revenue analytics",
        "Business performance charts",
        "Customer insights",
        "Interactive dashboard UI",
      ],
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-orange-500 font-semibold uppercase tracking-[3px] mb-3">
            Powerful Features
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Everything You Need To <br />
            Manage Your Agro Business 🌱
          </h2>

        </motion.div>

        {/* FEATURES */}
        <div className="space-y-24">

          {features.map((feature, index) => (

            <div
              key={index}
              className={`
                grid lg:grid-cols-2 gap-12 lg:gap-16 items-center
                ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}
              `}
            >

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`
                  relative
                  ${index % 2 !== 0 ? "lg:col-start-2" : ""}
                `}
              >

                {/* IMAGE CARD */}
                <div className="
                  overflow-hidden
                  rounded-[32px]
                  shadow-2xl
                  border border-gray-200
                  bg-white
                ">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="
                      w-full
                      h-[260px] sm:h-[400px] md:h-[480px]
                      object-cover
                      hover:scale-110
                      transition duration-[4000ms]
                    "
                  />
                </div>

                {/* FLOATING BADGE */}
                <div className="
                  absolute
                  -bottom-5
                  left-6
                  bg-white
                  shadow-xl
                  rounded-2xl
                  px-5 py-4
                  border border-gray-100
                  hidden sm:flex
                  items-center gap-3
                ">

                  <div className="
                    w-12 h-12
                    rounded-xl
                    bg-gradient-to-r from-green-500 to-orange-400
                    text-white
                    flex items-center justify-center
                  ">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {feature.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Smart business solution
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >

                {/* ICON */}
                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-r from-green-500 to-orange-400
                  text-white
                  flex items-center justify-center
                  shadow-lg
                  mb-6
                ">
                  {feature.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {feature.desc}
                </p>

                {/* POINTS */}
                <div className="space-y-4">

                  {feature.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        size={22}
                        className="text-green-600 shrink-0"
                      />

                      <p className="text-gray-700 text-sm sm:text-base">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}