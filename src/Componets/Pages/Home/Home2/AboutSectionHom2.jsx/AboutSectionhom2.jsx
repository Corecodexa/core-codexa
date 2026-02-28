import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="about-area relative py-20 lg:px-16 font-ui-sans-serif bg-gradient-to-br from-white via-[#f5f8ff] to-[#eaf0ff] overflow-hidden">

      {/* background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#405E98]/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0c1824]/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-wrap items-center gap-y-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-6/12">
            <div className="about-content pr-4">

              <h6 className="text-lg font-semibold text-[#405E98] tracking-widest">
                CORE CODEXA
              </h6>

              <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 text-[#0c1824] leading-snug">
                We design, develop, implement and support IT Systems
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
                Core Codexa is a forward-thinking technology company dedicated
                to delivering cutting-edge software solutions. We specialize in
                creating innovative digital experiences through a blend of
                creativity, technical excellence, and a customer-first mindset.
              </p>

              {/* SKILLS */}
              <div className="mt-8 space-y-6">
                {[
                  { name: "IT Consulting", percent: 90 },
                  { name: "Virtual Workstation", percent: 75 },
                  { name: "Managed IT Service", percent: 80 },
                ].map((skill, i) => (
                  <div key={i}>
                    <h6 className="flex justify-between text-sm font-semibold text-[#0c1824]">
                      {skill.name}
                      <span className="text-[#405E98] font-bold">
                        {skill.percent}%
                      </span>
                    </h6>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-[#0c1824] via-[#405E98] to-[#6c8dff]"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            className="w-full lg:w-5/12 lg:ml-auto"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#405E98] via-[#6c8dff] to-[#405E98] shadow-2xl">

              {/* glass card */}
              <div className="bg-[#0c1824]/95 backdrop-blur-xl rounded-2xl p-10 relative overflow-hidden">

                {/* glow light */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#405E98]/30 blur-3xl rounded-full"></div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  Free Consultation
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get expert advice for your business technology needs
                </p>

                <form className="space-y-4">

                  {["name", "email", "phone"].map((field, i) => (
                    <input
                      key={i}
                      type={field === "email" ? "email" : "text"}
                      placeholder={`Your ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`}
                      required
                      className="w-full p-3 rounded-lg bg-white/95 border border-transparent focus:border-[#6c8dff] focus:ring-2 focus:ring-[#405E98]/50 outline-none transition-all duration-300 text-[#0c1824] shadow-sm hover:shadow-md"
                    />
                  ))}

                  <textarea
                    rows="5"
                    required
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg bg-white/95 border border-transparent focus:border-[#6c8dff] focus:ring-2 focus:ring-[#405E98]/50 outline-none transition-all duration-300 text-[#0c1824] shadow-sm hover:shadow-md"
                  />

                  <button
                    type="submit"
                    className="relative w-full py-3 rounded-lg font-semibold text-white overflow-hidden group
                    bg-gradient-to-r from-[#405E98] to-[#2e4979] shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10">Send Message</span>

                    {/* shine effect */}
                    <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700"></span>
                  </button>

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