import React from "react";
import { Helmet } from "react-helmet-async";
import { Tractor, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <>
      <Helmet>
        <title>
          Agroplus Farm ERP Demo | Smart Farm Management Software
        </title>

        <meta
          name="description"
          content="Manage crop records, farm accounting, labor management, inventory, fertigation tracking and farm analytics with Agroplus Farm ERP."
        />
      </Helmet>

      <section className="relative overflow-hidden">
        <div
          className="relative"
          style={{
            backgroundImage: "url('/22.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#356B1F]/85"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* LEFT CONTENT */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 text-center sm:text-left">
                {/* Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Tractor
                    size={40}
                    className="text-[#F4C842] sm:w-[48px] sm:h-[48px] lg:w-[55px] lg:h-[55px]"
                  />
                </div>

                {/* Heading */}
                <div>
                  <h2
                    className="text-white leading-tight font-light"
                    style={{
                      fontSize: "clamp(1.6rem, 4vw, 3.6rem)",
                      fontFamily: "cursive",
                    }}
                  >
                    WE'RE LEADING DIGITAL
                    <br />
                    FARM MANAGEMENT &
                    <br />
                    AGRICULTURE ERP
                  </h2>
                </div>
              </div>

              {/* BUTTON */}
              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-full pl-6 sm:pl-8 lg:pl-10 pr-2 py-2 flex items-center justify-between gap-5 sm:gap-8 w-full sm:w-auto min-w-0 sm:min-w-[280px] lg:min-w-[320px] shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="text-gray-900 text-base sm:text-lg lg:text-xl font-semibold whitespace-nowrap">
                  Contact Us
                </span>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F4C842] flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight
                    size={22}
                    className="text-black"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}