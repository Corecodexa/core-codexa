import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const workSteps = [
  {
    number: 1,
    title: "Discover",
    description:
      'The "Discover" feature is designed to help you explore and find new job opportunities effortlessly.',
    color: "bg-[#0f172a]",
  },
  {
    number: 2,
    title: "Design & Build",
    description:
      'The "Design and Build" feature empowers you to create and customize your ideal job search experience.',
    color: "bg-[#0f172a]",
  },
  {
    number: 3,
    title: "Deliver",
    description:
      'The "Deliver" feature ensures that your job search or application process is completed effectively and on time.',
    color: "bg-[#0f172a]",
  },
];

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-[#fb923c]">
            3 Step Work Process
          </h6>
          <h2 className="text-3xl font-bold text-[#0f172a]">
            Our Working Process
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {workSteps.map((step) => (
            <div
              key={step.number}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              data-aos="fade-up"
            >
              <div className="group relative p-6 rounded-lg border border-[#0f172a] shadow-lg bg-white">
                {/* Step Number with Hover Animation */}
                <div
                  className={`flex items-center justify-center w-12 h-12 text-white rounded-full absolute top-[-1.5rem] left-20 transform -translate-x-[150%] group-hover:-translate-x-1/2 transition-all duration-500 ease-in-out ${step.color}`}
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </div>

                <div className="mt-12 text-center h-40">
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{step.description}</p>
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
