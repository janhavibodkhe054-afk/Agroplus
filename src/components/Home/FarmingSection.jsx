import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://img.freepik.com/free-photo/robot-spraying-fertilizer-vegetable-garden_35913-3099.jpg?semt=ais_hybrid&w=740&q=80",
  "https://5.imimg.com/data5/SELLER/Default/2023/9/348871584/TM/VO/VX/5317005/h2y7t9io-500x500.png",
  "https://agricdemy.com/content/uploads/images/March2018/ag-solutions.jpg",
  "https://connectcx.ai/wp-content/uploads/2024/07/Smart-Farming-Solutions-in-Southeast-Asia-scaled.jpg",
  "https://static.vecteezy.com/system/resources/previews/070/683/468/large_2x/precision-agriculture-field-monitoring-with-technology-overlay-displaying-smart-farming-solutions-for-sustainable-crop-management-and-yield-photo.jpeg",
];

export default function FarmingSection() {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  const navigate = useNavigate();

  // AUTO SLIDER
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pause]);

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div
            data-aos="fade-right"
            className="relative group"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >

            {/* IMAGE SLIDER */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] shadow-2xl h-[260px] sm:h-[380px] md:h-[480px]">

              {images.map((img, i) => (
                <div
                  key={i}
                  className={`
                    absolute inset-0 transition-all duration-1000 ease-in-out
                    ${
                      i === current
                        ? "opacity-100 translate-x-0 z-10"
                        : "opacity-0 translate-x-10 z-0"
                    }
                  `}
                >

                  <img
                    src={img}
                    alt="Farming"
                    className={`
                      w-full h-full object-cover transition-transform duration-[6000ms]
                      ${i === current ? "scale-110" : "scale-100"}
                    `}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                </div>
              ))}

              {/* PROGRESS */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">

                <div
                  key={current}
                  className="h-full bg-gradient-to-r from-green-500 to-orange-400 animate-progress"
                ></div>

              </div>

              {/* LEFT ARROW */}
              <button
                onClick={() => {
                  setPause(true);

                  setCurrent(
                    (prev) => (prev - 1 + images.length) % images.length
                  );

                  setTimeout(() => setPause(false), 4000);
                }}
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-full
                  bg-black/50 hover:bg-black/70
                  text-white
                  flex items-center justify-center
                  z-20 transition
                "
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() => {
                  setPause(true);

                  setCurrent((prev) => (prev + 1) % images.length);

                  setTimeout(() => setPause(false), 4000);
                }}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-full
                  bg-black/50 hover:bg-black/70
                  text-white
                  flex items-center justify-center
                  z-20 transition
                "
              >
                ›
              </button>

            </div>

            {/* FLOATING CARD */}
            <div
              data-aos="zoom-in"
              className="
                relative sm:absolute
                sm:-bottom-8 sm:left-6
                mt-4 sm:mt-0
                z-20
                bg-white
                shadow-xl
                p-4 sm:p-5
                rounded-2xl
                w-full sm:w-[300px]
                border border-gray-100
              "
            >

              <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed">
                “Empowering farmers with modern tools &
                sustainable farming practices.”
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center"
          >

            {/* TAG */}
            <p className="text-xs sm:text-sm text-green-600 font-semibold uppercase tracking-[3px] mb-3">
              About Our Farming
            </p>

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
  Farmers First{" "}
  <span className="text-green-600">
    Agriculture Always 
  </span>
</h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5">
              Agroplus is not just a business — we are farmers ourselves.
              With years of hands-on farming experience, we understand
              real field challenges and provide practical agricultural
              solutions that truly help farmers grow.
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              From quality seedlings and crop care guidance to modern
              farming techniques, we work closely with farmers to improve
              productivity, soil health and sustainable growth.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">

              {[
                "Own Farming Experience",
                "Quality Seedlings",
                "Expert Guidance",
                "Modern Agriculture",
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="
                    flex items-center gap-3
                    bg-gray-50
                    px-4 py-3
                    rounded-xl
                    border border-gray-100
                    hover:shadow-md
                    transition-all duration-300
                  "
                >

                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-500 to-orange-400"></span>

                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/about")}
              data-aos="zoom-in-up"
              className="
                w-full sm:w-fit
                bg-gradient-to-r from-green-500 to-orange-400
                hover:scale-105
                text-black
                font-semibold
                px-6 sm:px-7
                py-3 sm:py-3.5
                rounded-xl
                shadow-lg
                transition-all duration-300
              "
            >
              Know More →
            </button>

          </div>

        </div>

      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-progress {
          animation: progress 3s linear;
        }

        @keyframes progress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }
      `}</style>

    </section>
  );
}