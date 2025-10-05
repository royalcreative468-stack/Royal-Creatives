import React from "react";

// Data arrays
const stats = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "1200+", label: "Projects Completed" },
  { value: "98%", label: "Client Retention" }
];

const awards = [
  {
    title: "Best Marketing Agency 2023",
    description:
      "Awarded by Marketing Excellence Association for our innovative campaigns and exceptional results."
  },
  {
    title: "Digital Innovation Award",
    description:
      "Recognized for our groundbreaking digital marketing strategies that delivered exceptional ROI for clients."
  },
  {
    title: "Top 10 Creative Agencies",
    description:
      "Featured in Marketing Today magazine's annual list of the most creative agencies in the industry."
  }
];

const AchievementsRecognition = () => (
  <section className="w-full bg-[#F5F5F5] py-16 px-2 md:px-10">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 ">
        ACHIEVEMENTS &amp; <span className="text-[#A52A2A]">RECOGNITION</span>
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        Our commitment to excellence and innovation has earned us recognition across the industry. Here are some of our notable achievements.
      </p>

      {/* Top Row: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-10 min-h-[135px]"
            style={{ width: "100%" }}
          >
            <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-[#FDF5E6]">
              {idx === 0 && (
                <svg className="w-7 h-7 text-[#CD7F32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16.5 9.4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                  <path d="M21 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
                </svg>
              )}
              {idx === 1 && (
                <svg className="w-7 h-7 text-[#CD7F32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 17v-4h6v4M21 21H3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16Z" />
                </svg>
              )}
              {idx === 2 && (
                <svg className="w-7 h-7 text-[#CD7F32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-3xl font-bold text-[#A52A2A]">{stat.value}</span>
            <span className="text-base text-gray-700 mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom: Award Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, idx) => (
          <div
            key={award.title}
            className="bg-white rounded-xl border border-[#CD7F32] p-8 flex flex-col items-start shadow-sm min-h-[170px]"
          >
            <div className="flex items-center mb-2">
              <span className="inline-block w-8 h-8 rounded-full bg-[#18C475]/10 mr-2 flex items-center justify-center">
                {idx === 0 && (
                  <svg className="w-5 h-5 text-[#CD7F32]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 3v2H7V3" /><path d="M17 3a5 5 0 0 1-10 0" /><path d="M12 17v4m0 0H8m4 0h4" /><circle cx="12" cy="9" r="6" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-5 h-5 text-[#CD7F32]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-5 h-5 text-[#CD7F32]" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                )}
              </span>
              <span className="font-medium text-[#CD7F32]">{award.title}</span>
            </div>
            <span className="text-gray-700 text-sm">{award.description}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsRecognition;
