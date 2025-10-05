import React from "react";

const steps = [
  {
    number: 1,
    icon: (
      <svg className="w-8 h-8 text-[#18C475]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 18h6M10 21h4M12 2a7 7 0 0 0-7 7c0 2.43 1.35 4.55 3.45 5.7.25.14.55.37.55.65V16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1.65c0-.28.3-.5.55-.65A7.002 7.002 0 0 0 12 2Z"/>
      </svg>
    ),
    title: "Discovery",
    desc: "We start by understanding your business, goals, target audience, and competitive landscape through in-depth research and analysis."
  },
  {
    number: 2,
    icon: (
      <svg className="w-8 h-8 text-[#18C475]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Strategy",
    desc: "We develop a comprehensive marketing strategy tailored to your specific needs, with clear objectives, timelines, and measurable outcomes."
  },
  {
    number: 3,
    icon: (
      <svg className="w-8 h-8 text-[#18C475]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Execution",
    desc: "Our team of experts implements the strategy across all relevant channels, ensuring consistent messaging and maximum impact."
  },
  {
    number: 4,
    icon: (
      <svg className="w-8 h-8 text-[#18C475]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 17v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"/>
        <rect x="17" y="7" width="6" height="10" rx="2"/>
      </svg>
    ),
    title: "Analysis & Optimization",
    desc: "We continuously monitor performance, analyze results, and make data-driven optimizations to maximize ROI and achieve your goals."
  }
];

const HowWeWork = () => (
  <section className="w-full bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center  mb-3">
        HOW WE <span className="text-[#A52A2A]">WORK</span>
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Our proven methodology ensures that every project delivers exceptional results. We follow a structured approach to understand your needs and create impactful marketing solutions.
      </p>

      {/* Steps Process Row */}
      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Tiny connector line, z-0 ensures it sits behind steps */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-1 z-0">
          <div className="h-full w-full border-t-2 border-dashed border-[#CD7F32]"></div>
        </div>
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative z-10 flex flex-col items-center w-full md:w-1/4 px-2 mb-12 md:mb-0"
          >
            {/* Step marker overlays connector line */}
            <span className="flex items-center justify-center w-12 h-12 bg-[#FDF5E6] rounded-full mb-2 font-semibold text-[#CD7F32] text-lg shadow border-4 border-white box-content">
              {step.number}
            </span>
           <span className="mb-2">
            {React.cloneElement(step.icon, { style: { color: "#CD7F32" } })}
          </span>


            <span className="block font-semibold text-base md:text-lg text-[#A52A2A] mb-1 text-center">
              {step.title}
            </span>
            <span className="block text-gray-600 text-sm md:text-base text-center">
              {step.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
