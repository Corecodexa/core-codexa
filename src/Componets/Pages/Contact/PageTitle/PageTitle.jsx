import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTit from "./../../../images/bg3.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const PageTitle = ({ title, Sub }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="relative py-32 text-white"
      style={{
        backgroundImage: `url(${PageTit})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1c2c50]/80" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-ui-sans-serif text-white drop-shadow-lg">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 mt-4 text-sm md:text-base text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link to="/" className="text-[#405E98] hover:underline font-medium">
            Home
          </Link>
          <IoIosArrowForward className="text-white" size={18} />
          <span className="text-[#405E98] font-medium">{Sub}</span>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
