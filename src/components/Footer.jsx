import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Krushi Seva Kendra", path: "/kendra" },
    { name: "Seedling", path: "/seed" },
    
  ];

  const pages = [
    { name: "Agroplus Software", path: "/software" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ];

  return (
    <footer className="relative bg-[#111827] text-gray-300 overflow-hidden">
      {/* Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-green-500" />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="/logo.png"
              alt="Agroplus Logo"
              className="h-20 w-auto object-contain mb-5"
            />

            <p className="text-sm leading-relaxed text-gray-400">
              Agroplus provides quality seedlings, agricultural inputs,
              crop protection products and smart digital solutions that
              help farmers improve productivity and achieve sustainable
              agricultural growth.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
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

          {/* Pages */}
          <div>
            <h3 className="text-white text-lg font-bold mb-5">
              Pages
            </h3>

            <ul className="space-y-3">
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
          <div>
            <h3 className="text-white text-lg font-bold mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+914105040000"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-green-400" />
                </div>

                <span>+91 41050 40000</span>
              </a>

              <a
                href="mailto:info@agroplus.com"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition"
              >
                <div className="w-9 h-9 rounded-lg bg-green-600/15 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-green-400" />
                </div>

                <span>info@agroplus.com</span>
              </a>

              <a
                href="https://wa.me/914105040000"
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Agroplus. All Rights Reserved.
            </p>

            

            <p className="text-sm text-gray-500">
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