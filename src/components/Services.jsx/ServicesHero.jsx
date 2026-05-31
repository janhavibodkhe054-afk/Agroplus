import React from "react";
import { Helmet } from "react-helmet-async";

export default function ServicesHero() {
  return (
    <>
      <Helmet>
        <title>
          Services | Agroplus Farm ERP Software
        </title>

        <meta
          name="description"
          content="Explore Agroplus Farm ERP services including crop management, farm accounting, fertigation tracking, labor management, inventory control, party ledger management, and farm analytics."
        />

        <meta
          name="keywords"
          content="Farm ERP Services, Agriculture ERP Software, Crop Management Software, Farm Accounting, Labor Management, Fertigation Tracking, Farm Analytics, Agroplus ERP"
        />

        <meta
          property="og:title"
          content="Services | Agroplus Farm ERP"
        />

        <meta
          property="og:description"
          content="Discover smart farm management services with Agroplus Farm ERP."
        />
      </Helmet>

      <section
        className="relative h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden pt-14 1g:pt-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-950/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="text-green-200 text-sm md:text-base font-medium mb-3 tracking-widest uppercase">
            Agroplus Farm ERP
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white">
            Services
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2 text-white/80 text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-green-300">Services</span>
          </div>
        </div>
      </section>
    </>
  );
}