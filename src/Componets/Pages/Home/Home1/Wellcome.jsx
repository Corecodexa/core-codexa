import React, { useEffect } from "react";
import "./Wellcome.css"; // If you need additional custom styles

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
      <div
        className="absolute inset-0  bg-[#121225]  opacity-75"
        aria-hidden="true"
      ></div>
      <div
        className="relative w-full max-w-3xl mx-auto text-center space-y-5 "
        data-aos="fade-down-right"
      >
        <h1
          className="text-white font-ui-sans-serif font-bold text-xl md:text-4xl lg:text-5xl"
          data-aos="flip-up"
        >
          Welcome To <span className="text-[#405E98]">Core Codexa</span> <br />
          <span className="text-[#609eae]">Think • Build • Elevate</span>
        </h1>

        <h3 className="text-white text-sm md:text-lg font-ui-sans-serif lg:text-lg">
          Success is multifaceted concept that varies widely depending on
          individual goals, values, and context.
        </h3>
        <div className="space-x-3">
          <Link to="/contact">
            <button className="bg-[#0c1824] hover:bg-[#405E98] hover:scale-105 transform p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-semibold transition-all duration-300">
              Contact Us
            </button>
          </Link>
          <Link to="/our-services">
            <button className="bg-[#0c1824] hover:bg-[#405E98] hover:scale-105 transform p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-semibold transition-all duration-300">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
