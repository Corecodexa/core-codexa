import React, { useEffect } from "react";
import "./Wellcome.css"; // Additional custom styles if needed
import backgroundImage from "./../../../images/thinker3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Wellcome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-cover bg-center font-ui-sans-serif"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#121225] opacity-75"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div
        className="relative w-full max-w-3xl mx-auto text-center space-y-6"
        data-aos="fade-down-right"
      >
        <h1
          className="text-white font-bold text-2xl md:text-4xl lg:text-5xl drop-shadow-lg"
          data-aos="flip-up"
        >
          Welcome To <span className="text-[#405E98]">Core Codexa</span> <br />
          <span className="text-[#609EAE]">Think • Build • Elevate</span>
        </h1>

        <h3 className="text-white text-sm md:text-lg lg:text-lg font-ui-sans-serif drop-shadow-sm px-4 md:px-0">
          Success is a multifaceted concept that varies widely depending on
          individual goals, values, and context.
        </h3>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#0c1824] to-[#405E98] hover:from-[#405E98] hover:to-[#609EAE] hover:scale-105 transform p-3 md:p-3 w-32 md:w-40 text-white rounded-full font-semibold shadow-lg transition-all duration-500">
              Contact Us
            </button>
          </Link>

          <Link to="/our-services">
            <button className="bg-gradient-to-r from-[#0c1824] to-[#405E98] hover:from-[#405E98] hover:to-[#609EAE] hover:scale-105 transform p-3 md:p-3 w-32 md:w-40 text-white rounded-full font-semibold shadow-lg transition-all duration-500">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;