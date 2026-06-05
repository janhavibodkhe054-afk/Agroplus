import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sprout, Leaf, Tractor, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const features = [
    {
      icon: <Sprout size={18} />,
      text: "Premium Quality Agricultural Products",
    },
    {
      icon: <Leaf size={18} />,
      text: "Sustainable Farming Solutions",
    },
    {
      icon: <Tractor size={18} />,
      text: "Modern Agriculture Technology",
    },
    {
      icon: <ShieldCheck size={18} />,
      text: "Trusted Farmer Support Network",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          About AgroPlus | Smart Agriculture Solutions & Agricultural Services
        </title>

        <meta
          name="description"
          content="AgroPlus helps farmers grow better with quality seedlings, agricultural services, farming guidance, and innovative ERP solutions for modern agriculture."
        />
      </Helmet>

      <section
        ref={sectionRef}
        className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div
              className={`transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <p className="text-xs sm:text-sm text-green-600 font-semibold mb-2 uppercase tracking-wider">
                About AgroPlus
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 leading-snug">
                Growing Agriculture With
                
                Innovation & Experience 🌿
              </h2>

              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                At AgroPlus, we believe agriculture thrives when traditional
                farming knowledge meets modern technology. Our mission is to
                provide farmers with reliable products, expert guidance, and
                innovative solutions that improve productivity and create
                sustainable growth opportunities.
              </p>

              <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
                From healthy saplings and quality agricultural inputs to smart
                farm management systems, we are committed to supporting every
                stage of the farming journey. Our focus is on delivering
                practical solutions that help farmers achieve better results and
                long-term success.
              </p>

              {/* FEATURE CARDS */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 text-base md:text-lg">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 bg-white px-4 py-4 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${i * 150}ms`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-orange-400 text-black flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <span className="text-gray-700 font-medium text-base md:text-lg">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className={`bg-gradient-to-r from-green-500 to-orange-400 text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-all duration-300 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                Contact Us →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/aimg.png"
                  alt="Modern Agriculture"
                  className="w-full h-[280px] sm:h-[380px] md:h-[550px] lg:h-[700px] object-cover transition-transform duration-[6000ms] hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>

              {/* FLOATING EXPERIENCE CARD */}
              <div
                className={`relative sm:absolute sm:-bottom-8 sm:right-6 mt-4 sm:mt-0 bg-white shadow-xl p-5 rounded-xl border border-gray-100 w-full sm:w-72 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-orange-400 flex items-center justify-center font-bold text-black">
                    10+
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">
                      Years Experience
                    </h4>

                    <p className="text-sm text-gray-500">
                      Supporting Modern Farming
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-600 italic">
                  "Helping farmers adopt smarter practices for higher
                  productivity and sustainable growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
