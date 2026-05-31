import React from "react";
import { Helmet } from "react-helmet-async";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | Agroplus Farm ERP</title>

        <meta
          name="description"
          content="Agroplus Farm ERP vision and mission focused on empowering farmers with smart agriculture technology, farm management software, crop tracking, accounting and analytics."
        />

        <meta
          name="keywords"
          content="Farm ERP Software, Agriculture ERP, Smart Farming, Farm Management Software, Agroplus ERP"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-white py-12 md:py-16">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Eye size={22} className="text-green-600" />
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Our Vision
                </h2>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                To become India's leading Farm ERP Software platform,
                empowering farmers and agribusinesses with smart,
                data-driven agriculture management solutions that
                improve productivity, profitability and sustainability.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Target size={22} className="text-green-600" />
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Our Mission
                </h2>
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                To simplify farm operations through crop management,
                farm accounting, labor tracking, inventory control,
                fertigation records and real-time analytics in one
                powerful digital farming platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}