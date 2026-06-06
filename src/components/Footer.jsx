import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Krushi Seva Kendra", path: "/kendra" },
    { name: "Seedling", path: "/seed" },
    { name: "Agroplus Software", path: "/software" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#111827] text-gray-300 overflow-hidden">
      {/* Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-green-500" />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Company Info */}
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="Agroplus Logo"
              className="h-20 w-auto object-contain mb-5 -ml-12"
            />

            <p className="max-w-md text-base md:text-lg leading-relaxed text-gray-400">
              Agroplus provides quality seedlings, agricultural inputs,
              crop protection products, and smart digital solutions that help
              farmers improve productivity and achieve sustainable agricultural
              growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center text-white transition-all duration-300"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col lg:mx-auto">
            <h3 className="text-white text-lg font-bold mb-5">
              Pages
            </h3>

            <ul className="space-y-3 lg:min-w-[220px]">
              {pages.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold mb-5">
              Contact Information
            </h3>

            <div className="space-y-4 lg:max-w-sm">
              <a
                href="tel:+919860207957"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-green-400" />
                </div>

                <span>+91 98602 07957</span>
              </a>

              <a
                href="mailto:info@agroplus.co.in"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-green-400" />
                </div>

                <span>info@agroplus.co.in</span>
              </a>

              <a
                href="https://wa.me/919860207957"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  💬
                </div>

                <span>WhatsApp Chat</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Pargaon+Mangrul+Pune+Maharashtra+412105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-green-400" />
                </div>

                <span>
                  Pargaon Mangrul,
                  <br />
                  Pune, Maharashtra 412105
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} Agroplus. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-green-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="text-gray-500 hover:text-green-400 transition"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Developer Credit */}
            <p className="text-sm text-gray-500 text-center lg:text-right">
              Designed & Developed by{" "}
              <a
                href="https://hashgridtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Hashgrid Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}