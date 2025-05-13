import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import ShimmerButton from "../Button/ShimmerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/our-services", label: "Service" },
    { path: "/project", label: "Project" },
    { path: "/our-team", label: "Team" },
  ];

  return (
    // Updated color scheme version
    <header className="bg-[#fafafa] h-20 sticky z-40 top-0 shadow-md p-3">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-full sm:px-4 font-ui-sans-serif">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/logo1.png"
              alt="Sky innovation logo"
              className="w-20 object-cover"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-[#405E98] hover:text-[#6c86c2]"
        >
          <div className="flex flex-col absolute right-5 gap-1 items-center">
            <span
              className={`w-7 h-1 bg-[#405E98] rounded transition-transform duration-300 ${
                isOpen ? "rotate-[45deg]" : ""
              }`}
            />
            <span
              className={`w-7 h-1 bg-[#405E98] rounded ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-7 h-1 bg-[#405E98] rounded transition-transform duration-300 ${
                isOpen ? "rotate-[-45deg] translate-y-1" : ""
              }`}
            />
          </div>
        </button>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 absolute md:static ring-1 ring-white md:ring-0 w-full md:w-auto bg-[#fafafa] ${
            isOpen ? "top-20" : "top-[-100vh]"
          } duration-500 md:top-0 px-4 md:px-0`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path} className="relative group">
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="nav-link flex items-center py-2 md:py-0 hover:text-[#6c86c2] text-lg font-semibold text-[#405E98]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="flex-shrink-0 hidden md:block">
          <Link to="/contact">
            <ShimmerButton text="Contact us" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
