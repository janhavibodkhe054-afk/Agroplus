import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCTA() {
  return (
    <>
      <Helmet>
        <title>
          Agriculture ERP Services | Agroplus Farm Management Solutions
        </title>

        <meta
          name="description"
          content="Explore smart agriculture ERP services including crop management, farm analytics, labor management, fertigation tracking, inventory management and agribusiness solutions."
        />

        <meta
          name="keywords"
          content="Agriculture ERP, Farm Management Software, Crop Management, Smart Farming, Agribusiness Software, Farm Analytics, Agriculture Services"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/services"
        />
      </Helmet>

      <section className="relative overflow-hidden py-14 lg:py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1958219674/photo/young-sprout-agricultural-technologies-banner.jpg?s=612x612&w=0&k=20&c=TAefRzWb-1biB1IPUmm-HF5_SUu0EbC6JNHgm98ns08=')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#23460d]/75" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <div className="border border-white/10 rounded-[24px] py-10 lg:py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
              {/* Top Text */}
              <p className="text-[#f4c542] font-semibold text-sm md:text-lg mb-4">
                Smart Agriculture & Farm ERP Solutions
              </p>

              {/* Heading Row */}
              <div className="flex items-center justify-center gap-4 lg:gap-8">
                {/* Left Leaf */}
                <img
                  src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/unbeatable-shape-1.png"
                  alt="Agriculture Services"
                  className="hidden md:block w-14 lg:w-20"
                />

                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Agriculture ERP
                  <br />
                  Services
                </h2>

                {/* Right Leaf */}
                <img
                  src="https://pixydrops.com/agrionhtml/main-html/assets/images/shapes/unbeatable-shape-2.png"
                  alt="Farm Management Services"
                  className="hidden md:block w-14 lg:w-20"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-[#3d6f18] hover:bg-[#2f5912] rounded-full overflow-hidden transition"
                >
                  <span className="px-8 py-4 text-white font-bold text-base">
                    Contact Us
                  </span>

                  <span className="w-14 h-14 bg-[#f4c542] flex items-center justify-center">
                    <ArrowRight
                      size={22}
                      className="text-black group-hover:translate-x-1 transition"
                    />
                  </span>
                </Link>

                <a
                  href="tel:+914105040000"
                  className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}