import React from "react";
import { Helmet } from "react-helmet-async";

export default function SeedlingHero() {
  return (
    <>
      <Helmet>
        <title>
          Seedlings | Agroplus Farm ERP Software
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
          content="Seedlings | Agroplus Farm ERP"
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
          

          <h1 className="text-5xl md:text-6xl font-black text-white">
            Seedlings
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2 text-white/80 text-sm">
            <span>Home</span>
            <span>/</span>
            <span className="text-green-300">Seedlings</span>
          </div>
        </div>
      </section>
    </>
  );
}