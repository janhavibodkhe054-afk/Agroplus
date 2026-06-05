import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Krushi Seva Kendra", path: "/kendra" },
    { name: "Seedling", path: "/seed" },
    { name: "Agroplus Software", path: "/software" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[78px] lg:h-[88px] flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Agroplus"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[16px] font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/914105040000"
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-2
                bg-gradient-to-r
                from-green-500
                to-orange-400
                hover:scale-105
                text-black
                px-5 py-2.5
                rounded-xl
                font-semibold
                transition-all duration-300
                whitespace-nowrap
              "
            >
              Get In Touch
            </a>
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram size={15} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 border-b border-gray-100 text-[16px] font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/914105040000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="
              mt-5 flex items-center justify-center gap-2
              bg-gradient-to-r from-green-500 to-orange-400
              text-black font-semibold
              py-3 rounded-xl
            "
          >
            <FaWhatsapp />
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}