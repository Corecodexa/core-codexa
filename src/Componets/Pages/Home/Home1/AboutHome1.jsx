import React, { useEffect } from "react";
import aboutImage from "../../../images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#f9fafb] to-[#e2e8f0] font-ui-sans-serif">
      <div className="container mx-auto px-6 lg:px-20" data-aos="fade-right">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-2 lg:px-0">
            <h6 className="text-md font-semibold text-[#405E98] tracking-widest uppercase">
              Core Codexa
            </h6>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 leading-tight drop-shadow-lg">
              We design, develop, implement and support IT Systems
            </h2>
            <p className="mt-6 text-[#0f172a] text-base lg:text-lg leading-relaxed opacity-90">
              Core Codexa is a forward-thinking technology company dedicated
              to providing cutting-edge software development solutions. We
              specialize in crafting innovative digital experiences through a
              blend of creativity, technical expertise, and a customer-first
              approach. At Core Codexa, we offer a wide range of services,
              including custom web and mobile application development,
              full-stack development, and UI/UX design products.
            </p>

            <div className="mt-10 p-8 bg-gradient-to-r from-[#0c1824] to-[#405E98] border border-white/20 rounded-2xl shadow-2xl transform transition-transform duration-1000 hover:scale-105">
              <h3 className="text-lg lg:text-xl font-medium text-white leading-relaxed">
                We are a highly trained and qualified team ready to provide
                viable Core Codexa solutions along with full-time support and
                expert advice to fulfill your business needs.
              </h3>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-2 lg:px-0 mt-10 lg:mt-0">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-[#0f172a]/10 transform transition-transform duration-1000 hover:scale-105">
              <img
                src={aboutImage}
                alt="About Core Codexa"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Optional subtle hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-1000 rounded-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome1;