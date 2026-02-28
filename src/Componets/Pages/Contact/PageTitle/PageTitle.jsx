import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTit from "./../../../images/bg3.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const PageTitle = ({ title, Sub }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative min-h-[340px] md:min-h-[420px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${PageTit})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* background slow zoom */}
      <div className="absolute inset-0 scale-110 animate-[bgZoom_20s_linear_infinite]" />

      {/* strong premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1824]/95 via-[#1c2c50]/90 to-[#405E98]/85" />

      {/* soft blur glass */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center"
        data-aos="fade-up"
      >
        {/* glow light */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-56 h-56 bg-[#405E98]/30 blur-[120px] rounded-full" />

        {/* title */}
        <h1 className="relative text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-2xl">
          {title}
        </h1>

        {/* animated underline */}
        <div className="mt-4 flex justify-center">
          <span className="h-[3px] w-20 bg-gradient-to-r from-[#6b8cd9] to-white rounded-full animate-pulse" />
        </div>

        {/* breadcrumb */}
        <div
          className="mt-7 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl">
            <Link
              to="/"
              className="text-[#c7d8ff] hover:text-white transition font-medium"
            >
              Home
            </Link>

            <IoIosArrowForward className="text-white/70" size={18} />

            <span className="text-white font-semibold tracking-wide">
              {Sub}
            </span>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/50 to-transparent" />

      {/* animation style */}
      <style>
        {`
          @keyframes bgZoom {
            0% { transform: scale(1.1); }
            50% { transform: scale(1.18); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </section>
  );
};

export default PageTitle;