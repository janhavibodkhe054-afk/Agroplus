import React from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "Agriculture Products",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
    link: "/agriculture",
  },
  {
    title: "Organic Products",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    link: "/organic",
  },
  {
    title: "Fresh Vegetables",
    img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    link: "/vegetables",
  },
  {
    title: "Dairy Products",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    link: "/dairy",
  },
  {
    title: "Seeds & Fertilizers",
    img: "https://images.unsplash.com/photo-1598514982846-6a7a3b5d5d7d",
    link: "/seeds",
  },
  {
    title: "Farm Equipment",
    img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    link: "/equipment",
  },
];

export default function OfferingSection() {
  const navigate = useNavigate();

  // duplicate for infinite loop
  const loopItems = [...items, ...items];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          What We’re Offering
        </h2>
        <p className="text-gray-500 mt-3">
          Explore our wide range of agricultural services
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 w-max animate-scroll">
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[280px] h-[350px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <button
                  onClick={() => navigate(item.link)}
                  className="text-sm text-green-300 hover:text-orange-400 transition"
                >
                  Know More →
                </button>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-400/30 blur-2xl rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}