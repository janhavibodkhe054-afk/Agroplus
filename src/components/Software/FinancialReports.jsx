import React from "react";
import { motion } from "framer-motion";
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

export default function FinancialReports() {
  const features = [
    {
      icon: <Sprout size={24} />,
      title: "Crop Management",
      desc: "Track complete crop lifecycle from plantation to harvest.",
    },
    {
      icon: <MapPinned size={24} />,
      title: "Plot-wise Tracking",
      desc: "Know exact profit and expenses for each plot and crop.",
    },
    {
      icon: <Droplets size={24} />,
      title: "Fertigation Records",
      desc: "Maintain detailed nutrient & spray application history.",
    },
    {
      icon: <Users size={24} />,
      title: "Labor Management",
      desc: "Track labor attendance, wages & daily work activities.",
    },
    {
      icon: <Package size={24} />,
      title: "Agro Input Management",
      desc: "Manage fertilizers, pesticides, seeds & stock efficiently.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Smart Reports",
      desc: "Get real-time farm performance reports & insights.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Party Ledger",
      desc: "Maintain customer, supplier & transporter ledgers easily.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Friendly",
      desc: "Access your farm data anytime, anywhere.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Backup",
      desc: "Secure farm data with automatic cloud backup.",
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-12 md:py-16 overflow-hidden">
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
            className="relative order-2 lg:order-1"
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
            className="order-1 lg:order-2"
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <ReceiptText size={18} />
              <p className="text-sm font-semibold tracking-wide">
                Smart ERP for Modern Farming
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Smart ERP for <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Modern Farming & Agribusiness
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-6">
              Manage your complete farm operations with one powerful
              platform — crop planning, plot-wise expenses, income
              tracking, inventory, labor, sales, party ledger, and
              smart farm analytics.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Agroplus Farm ERP helps farmers and agribusiness owners
              digitize daily farm activities and make better decisions
              using real-time data for banana, sugarcane, papaya,
              pomegranate, vegetables, and more.
            </p>

            

            {/* INPUT + BUTTON */}
            <div className="flex flex-col sm:flex-row items-stretch w-full max-w-xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
              <div className="flex items-center justify-center px-5 font-bold text-gray-900 border-b sm:border-b-0 sm:border-r border-gray-300 bg-gray-50">
                +91
              </div>

              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="flex-1 px-5 py-4 outline-none text-gray-700"
              />

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noreferrer"
                className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 transition flex items-center justify-center whitespace-nowrap"
              >
                Get Demo
              </a>
            </div>

            {/* NOTE */}
            <p className="text-sm text-gray-500 mt-4">
              Easy-to-use farm ERP software specially designed for Indian
              farmers & agribusinesses.
            </p>
          </motion.div>
        </div>

        

        
      </div>
    </section>
  );
}