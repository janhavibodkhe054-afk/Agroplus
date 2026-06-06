import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ReceiptText,
  Sprout,
  MapPinned,
  Droplets,
  Users,
  Package,
  BarChart3,
  Wallet,
  Smartphone,
  Cloud,
} from "lucide-react";
import { Download } from "lucide-react";

export default function FinancialReports() {
  const features = [
    {
      icon: <Sprout size={24} />,
      title: "Crop Management System",
      desc: "Plan, monitor and manage complete crop cycles from plantation to harvest.",
    },
    {
      icon: <MapPinned size={24} />,
      title: "Plot-wise Profitability",
      desc: "Track income, expenses and profitability for every farm plot.",
    },
    {
      icon: <Droplets size={24} />,
      title: "Fertigation & Spray Records",
      desc: "Maintain accurate nutrient, irrigation and spray application history.",
    },
    {
      icon: <Users size={24} />,
      title: "Labor & Workforce Management",
      desc: "Manage attendance, wages, productivity and daily labor activities.",
    },
    {
      icon: <Package size={24} />,
      title: "Inventory Management",
      desc: "Track fertilizers, pesticides, seeds and agricultural stock efficiently.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Farm Analytics Dashboard",
      desc: "Get actionable insights through real-time reports and performance analytics.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Sales & Ledger Management",
      desc: "Manage customers, suppliers, purchases, sales and account ledgers.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Farm ERP",
      desc: "Access your farm business data securely from any device.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Secure Cloud Platform",
      desc: "Protect important farm records with automatic cloud backup.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Farm ERP Software | Agriculture Management Software | Agroplus
        </title>

        <meta
          name="description"
          content="Agroplus Farm ERP Software helps farmers and agribusinesses manage crop records, farm accounting, labor management, inventory, sales, purchases, profitability tracking and real-time farm analytics."
        />

        <meta
          name="keywords"
          content="Farm ERP Software, Agriculture ERP Software, Farm Management Software, Crop Management System, Farm Accounting Software, Agribusiness Management Software, Farm Analytics Platform, Smart Farming Solution"
        />

        <meta property="og:title" content="Agroplus Farm ERP Software" />

        <meta
          property="og:description"
          content="Complete agriculture ERP software for crop management, accounting, labor tracking, inventory control and farm profitability analytics."
        />
      </Helmet>
      <section className="relative bg-[#f8fafc] py-10 md:py-8 overflow-hidden">
        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-2"
            >
              {/* GREEN BACKGROUND CIRCLE */}
              <div className="absolute top-10 left-10 w-[420px] h-[420px] bg-green-200 rounded-full opacity-40 blur-2xl"></div>

              {/* IMAGE */}
              <div className="relative z-10 flex justify-center">
                <div className="w-full max-w-[520px]">
                  <img
                    src="/mobile.jpeg"
                    alt="Agroplus Farm ERP Dashboard"
                    className="w-full h-auto object-contain rounded-[32px] shadow-2xl border border-gray-200"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              {/* TAG */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <ReceiptText size={18} />
                <p className="text-sm font-semibold tracking-wide">
                  Smart Agriculture ERP Software
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-2xl md:text-3xl font-bold font-black text-gray-900 snug mb-6">
                Farm ERP Software for {""}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Smart Farming & Agribusiness Management
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-6 ">
                Agroplus is a complete Farm ERP Software designed for farmers to
                manage crop planning, farm accounting, inventory, labor
                operations, and profitability through one powerful digital
                platform.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 ">
                Track crop-wise expenses, monitor plot performance, maintain
                labor records, control inventory, and access real-time farm
                analytics to improve productivity, reduce operational costs, and
                maximize agricultural profits.
              </p>

              {/* INPUT + BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
  href="/AgroPlus-Application.apk"
  download
  className="
    flex items-center justify-center gap-2
    bg-gradient-to-r
    from-green-500
    to-orange-400
    hover:scale-105
    text-black
    font-semibold
    px-8 py-4
    rounded-2xl
    shadow-xl
    transition-all duration-300
  "
>
  <Download size={18} />
  Download Application
</a>
              </div>

              {/* NOTE */}
             
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
