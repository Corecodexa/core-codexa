import React, { useEffect } from "react";
import backgroundImage2 from "./../../../images/frontimg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeWell2 = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center px-4 font-ui-sans-serif"
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#121225] opacity-75"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-6 md:space-y-8"
        data-aos="fade-down-right"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold px-4 md:px-10 drop-shadow-lg">
          We Provide Best<span className="text-[#4b6aa8]">Technology Solutions</span>

        </h1>

        <p className="text-base md:text-lg lg:text-lg text-white text-center px-4 md:px-10 drop-shadow-sm">
          We are passionate about bringing enterprise-level productivity,
          scalability, and security to small and medium businesses.
        </p>

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

export default HomeWell2;