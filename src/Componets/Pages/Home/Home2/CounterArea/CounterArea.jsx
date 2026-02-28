import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const counters = [
  { id: 1, number: '20', unit: '+', heading: 'Years In Business' },
  { id: 2, number: '1.2', unit: 'k', heading: 'Projects Completed' },
  { id: 3, number: '750', unit: '+', heading: 'Reviews' },
  { id: 4, number: '150', unit: '+', heading: 'Team Members' },
];

const CounterArea = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative py-16 font-ui-sans-serif overflow-hidden bg-gradient-to-br from-[#0b0b1a] via-[#121225] to-[#1a1a35]">

      {/* background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#405E98]/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6c8dff]/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">

          {counters.map(counter => (
            <div
              key={counter.id}
              className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8"
            >
              <div className="group h-full">

                {/* card */}
                <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* glow hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#405E98]/20 to-transparent"></div>

                  <div className="relative text-center">

                    {/* number */}
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#6c8dff] via-[#405E98] to-white bg-clip-text text-transparent drop-shadow-md">
                      <span className="counter-number">{counter.number}</span>
                      <span>{counter.unit}</span>
                    </h2>

                    {/* divider */}
                    <div className="w-10 h-[2px] mx-auto my-3 bg-gradient-to-r from-[#405E98] to-[#6c8dff] rounded-full"></div>

                    {/* heading */}
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      {counter.heading}
                    </h3>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CounterArea;