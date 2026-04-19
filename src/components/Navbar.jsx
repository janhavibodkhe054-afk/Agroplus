import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Krushi Seva Kendra", path: "/kendra" },
    { name: "Seedling", path: "/seed" },
    { name: "Agroplus Software", path: "/software" },
    { name: "Services", path: "/service" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://agroplus.co.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-3.28.39-PM.jpeg"
            alt="Agroplus"
            className="h-14 sm:h-16 md:h-18 w-40 object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide">

          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <div className="hidden md:block shrink-0">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-orange-400 hover:scale-105 text-black px-4 py-2 rounded-md text-sm font-semibold transition whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={() => setOpen(false)}
            className="block py-3 border-b text-gray-700 hover:text-green-600"
          >
            {link.name}
          </NavLink>
        ))}

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="block mt-4 bg-gradient-to-r from-green-500 to-orange-400 text-black text-center py-2 rounded-md font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}