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
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[72px] md:h-[88px] flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center justify-start shrink-0"
        >
          <img
            src="logo.png"
            alt="Agroplus"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">

          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `text-sm lg:text-[15px] font-medium transition duration-300 whitespace-nowrap ${
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
            className="
              bg-gradient-to-r from-green-500 to-orange-400
              hover:scale-105
              text-black
              px-5 py-2.5
              rounded-lg
              text-sm
              font-semibold
              transition-all duration-300
            "
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          bg-white
          overflow-hidden
          transition-all duration-300
          shadow-lg
          ${open ? "max-h-[500px] py-4" : "max-h-0"}
        `}
      >

        <div className="px-6">

          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-gray-100 text-gray-700 hover:text-green-600"
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="
              block mt-5
              bg-gradient-to-r from-green-500 to-orange-400
              text-black
              text-center
              py-3
              rounded-lg
              font-semibold
            "
          >
            Contact Us
          </Link>

        </div>
      </div>
    </header>
  );
}