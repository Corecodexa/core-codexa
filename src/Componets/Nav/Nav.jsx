import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import ShimmerButton from "../Button/ShimmerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/our-services", label: "Service" },
    { path: "/project", label: "Project" },
    { path: "/our-team", label: "Team" },
  ];

  return (
    <header className="bg-[#fafafa] sticky top-0 z-50 shadow-md w-full">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4 h-20 font-ui-sans-serif">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/logo1.png"
              alt="Sky Innovation Logo"
              className="w-20 object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-between w-8 h-6 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-1 w-full bg-[#405E98] rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#405E98] rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#405E98] rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-[#fafafa] flex flex-col items-center justify-center gap-6 text-lg text-[#405E98] font-semibold transform transition-transform duration-500 md:relative md:h-auto md:w-auto md:flex md:flex-row md:gap-8 md:bg-transparent md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="hover:text-[#6c86c2] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <ShimmerButton text="Contact us" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
