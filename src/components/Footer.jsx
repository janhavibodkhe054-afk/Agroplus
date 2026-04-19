import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Krushi Seva Kendra", path: "/kendra" },
    { name: "Seedling", path: "/seed" },
    { name: "Agroplus Software", path: "/software" },
    { name: "Services", path: "/service" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-6 px-4">

      {/* 🔥 TOP GRADIENT BORDER */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-white to-orange-400"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src="https://agroplus.co.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-3.28.39-PM.jpeg"
            alt="Agroplus Logo"
            className="w-70 h-20 object-contain mb-3"
          />

          <p className="text-sm leading-relaxed text-gray-400">
            Providing high-quality seedlings, agricultural inputs, and smart
            agro solutions to empower farmers with better productivity and growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white hover:translate-x-1 transition duration-200 inline-block"
                >
                  → {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Banana Tissue Culture</li>
            <li>Sugarcane Seedlings</li>
            <li>Vegetable Plants</li>
            <li>Farm Guidance</li>
            <li>Agro Software Solutions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Pargaon Mangrul, Pune, Maharashtra 412105
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> 91 41050 40000
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@agroplus.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-orange-400 hover:text-black transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400 space-y-2">

        <p>
          © {new Date().getFullYear()} Agroplus. All rights reserved.
        </p>

        {/* ✨ DESIGNED BY */}
        <p className="text-xs text-gray-500">
          Designed & Developed by{" "}
          <span className="text-green-400 font-medium hover:underline cursor-pointer">
            Hashgrid Technologies Pvt.Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;