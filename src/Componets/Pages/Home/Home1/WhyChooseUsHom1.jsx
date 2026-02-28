import React, { useEffect } from "react";
import icon1 from "../../../images/icon-1.jpg";
import icon2 from "../../../images/icon-2.jpg";
import icon3 from "../../../images/icon-3.jpg";
import icon4 from "../../../images/icon-4.jpg";
import icon5 from "../../../images/icon-5.jpg";
import icon6 from "../../../images/icon-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const whyChooseData = [
  {
    icon: icon1,
    title: "Protect your Business",
    description:
      "We safeguard companies against the ever-evolving landscape of risks and challenges. Our comprehensive business protection services offer peace of mind.",
  },
  {
    icon: icon2,
    title: "Network Monitoring",
    description:
      "We ensure the performance, security, and reliability of your IT infrastructure through advanced monitoring solutions.",
  },
  {
    icon: icon3,
    title: "Network Security",
    description:
      "Our mission is to secure your business with robust digital infrastructure protection against growing cyber threats.",
  },
  {
    icon: icon4,
    title: "Managed IT Service",
    description:
      "We simplify technology management by delivering tailored end-to-end IT solutions for your business needs.",
  },
  {
    icon: icon5,
    title: "Dedicated IT Support",
    description:
      "Personalized and reliable IT support designed to keep your business running efficiently with minimal downtime.",
  },
  {
    icon: icon6,
    title: "Custom Developed Software",
    description:
      "We create tailored software solutions to meet your unique business requirements, because no two businesses are the same.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const WhyChooseUsHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-24 px-4 lg:px-16 bg-[#2e3e67] font-ui-sans-serif">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 text-white">
          <h6 className="text-lg lg:text-xl tracking-wide uppercase">
            <span className="text-[#6b8cd9] font-semibold">CoreCodexa</span> So Different?
          </h6>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight">
            Why Trust Us?
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -mx-4" data-aos="fade-up">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="p-8 h-full bg-white rounded-3xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#0c1824] hover:to-[#405E98] group"
              >
                {/* Icon */}
                <div className="mb-6 w-20 h-20 rounded-full bg-[#405E98] group-hover:bg-white flex items-center justify-center shadow-md transition-colors duration-1000">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-12 h-12 object-cover rounded-full transition-colors duration-1000 group-hover:invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#405E98] group-hover:text-white transition-colors duration-1000">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4f6096] group-hover:text-white text-sm lg:text-base leading-relaxed transition-colors duration-1000">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHom1;