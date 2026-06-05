import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <>
      <Helmet>
        <title>AgroPlus Farm ERP Demo | Smart Farm Management Software</title>

        <meta
          name="description"
          content="Manage crop records, farm accounting, labor management, inventory, fertigation tracking and farm analytics with AgroPlus Farm ERP."
        />
      </Helmet>

      <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/22.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[24px] px-6 md:px-10 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="text-center lg:text-left">
                <span className="text-green-300 text-xs font-semibold uppercase tracking-[0.25em]">
                  AgroPlus
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-3 leading-tight">
                  Growing Better Futures
                  <br />
                  For Farmers Every Day
                </h2>

                <p className="text-white/80 text-base md:text-lg max-w-2xl">
                  From quality agricultural solutions to expert guidance,
                  AgroPlus is committed to supporting farmers with the resources
                  and knowledge they need to grow with confidence.
                </p>
              </div>

              {/* Button */}
              <a
                href="https://wa.me/+919860207957"
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 bg-gradient-to-r from-green-500 to-orange-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
