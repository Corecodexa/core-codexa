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
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUsHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 px-4 lg:px-10 bg-[#0c1824] text-white font-ui-sans-serif">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-lg">
            <span className="text-[#e1651f] font-semibold">CoreCodexa</span> So
            Different?
          </h6>
          <h2 className="text-4xl font-bold text-[#609eae]">Why Trust Us?</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="p-6 h-full bg-white text-[#0c1824] border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-[#609eae]">
                <div className="mb-4">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-12 h-12 mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#e1651f]">
                  {item.title}
                </h3>
                <p className="text-center text-[#4b5563]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHom1;
