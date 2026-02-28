import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const workSteps = [
  {
    number: 1,
    title: "Discover",
    description:
      'The "Discover" feature is designed to help you explore and find new job opportunities effortlessly.',
  },
  {
    number: 2,
    title: "Design & Build",
    description:
      'The "Design and Build" feature empowers you to create and customize your ideal job search experience.',
  },
  {
    number: 3,
    title: "Deliver",
    description:
      'The "Deliver" feature ensures that your job search or application process is completed effectively and on time.',
  },
];

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white font-ui-sans-serif">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#60a5fa] font-semibold tracking-widest uppercase">
            Work Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            How We Work
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {workSteps.map((step) => (
            <div
              key={step.number}
              data-aos="fade-up"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              {/* card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">

                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-lg font-bold shadow-lg shadow-blue-500/40">
                    {step.number}
                  </div>
                </div>

                {/* content */}
                <div className="pt-10 text-center">
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;