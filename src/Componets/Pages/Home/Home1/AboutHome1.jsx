import React, { useEffect } from "react";
import aboutImage from "../../../images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 lg:px-10 font-ui-sans-serif bg-[#f9fafb]">
      <div className="container mx-auto px-4" data-aos="fade-right">
        <div className="flex flex-wrap items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-8 lg:mb-0">
              <h6 className="text-md font-semibold text-[#405E98] tracking-wide uppercase">
                Core Codexa
              </h6>
              <h2 className="text-4xl font-bold text-[#0f172a] mt-4 leading-snug">
                We design, develop, implement and support IT Systems
              </h2>
              <p className="mt-6 text-[#0f172a] opacity-90 leading-relaxed text-base">
                Core Codexa is a forward-thinking technology company dedicated
                to providing cutting-edge software development solutions. We
                specialize in crafting innovative digital experiences through a
                blend of creativity, technical expertise, and a customer-first
                approach. At Core Codexa, we offer a wide range of services,
                including custom web and mobile application development,
                full-stack development, and UI/UX design products.
              </p>

              <div className="mt-8 p-6 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-white leading-relaxed">
                  We are a highly trained and qualified team ready to provide
                  viable Core Codexa solutions along with full-time support and
                  expert advice to fulfill your business needs.
                </h3>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 px-4 mt-10 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-lg border border-[#0f172a]/10">
              <img
                src={aboutImage}
                alt="About Core Codexa"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome1;
