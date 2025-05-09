import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="about-area py-12 lg:px-16 font-ui-sans-serif bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full lg:w-6/12 md:w-full">
            <div className="about-content">
              <h6 className="text-lg font-semibold text-[#e1651f]">
                CORE CODEXA
              </h6>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-[#0c1824]">
                We design, develop, implement and support IT Systems
              </h2>
              <p className="mt-4 text-[#333]">
                Core Codexa is a forward-thinking technology company dedicated
                to delivering cutting-edge software solutions. We specialize in
                creating innovative digital experiences through a blend of
                creativity, technical excellence, and a customer-first mindset.
                Our services include custom web and mobile app development,
                full-stack development, and modern UI/UX design tailored to meet
                diverse business needs.
              </p>
              <div className="skills mt-6">
                {[
                  { name: "IT Consulting", percent: 90 },
                  { name: "Virtual Workstation", percent: 75 },
                  { name: "Managed IT Service", percent: 80 },
                ].map((skill, i) => (
                  <div className="skill-item mb-4" key={i}>
                    <h6 className="flex justify-between items-center">
                      {skill.name}{" "}
                      <em className="text-gray-600">{skill.percent}%</em>
                    </h6>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-[#609eae] h-2 rounded-full"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="w-full lg:w-5/12 lg:ml-auto md:w-full mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="contact-section bg-[#0c1824] border border-[#e1651f] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white">
                Free Consultation
              </h3>
              <div className="contact-form mt-6">
                <form id="contact-form" className="form">
                  <div className="space-y-4">
                    {["name", "email", "phone"].map((field, i) => (
                      <div className="form-group" key={i}>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          id={field}
                          className="form-control w-full p-3 border border-gray-300 bg-white text-[#0c1824] rounded"
                          required
                          placeholder={`Your ${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`}
                        />
                      </div>
                    ))}
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control w-full p-3 border border-gray-300 bg-white text-[#0c1824] rounded"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button className="w-32 bg-[#e1651f] hover:bg-[#d45716] text-white py-3 rounded transition-all duration-300">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
