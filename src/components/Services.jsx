import React from "react";

const services = [
  {
    category: "Promotion & Direct Marketing",
    description: "Comprehensive digital and traditional marketing solutions to amplify your brand reach across multiple platforms.",
    highlights: ["Digital Marketing", "Cinema Ads", "TV & Cable", "Mobile Branding"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    bgImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Print & Outdoor Media",
    description: "High-impact outdoor advertising and print solutions designed for maximum visibility in strategic locations.",
    highlights: ["Flex & Standees", "Backlit Boards", "Hoardings", "Wall Painting"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    bgImage: "https://images.unsplash.com/photo-1509228627150-1dc90b7e4a81?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Transit & Venue Branding",
    description: "Dynamic mobile advertising and venue branding to reach audiences on the move and in popular destinations.",
    highlights: ["Mobile Van/LED", "Auto Rickshaw", "Bus Branding", "Mall Branding"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  }
];

const OurServices = () => (
  <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-red-50">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          OUR <span className="bg-gradient-to-r from-[#A52A2A] to-[#8B0000] bg-clip-text text-transparent">SERVICES</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our step-by-step guide will show you how to easily incorporate our marketing services into your existing strategy. 
          <span className="font-semibold text-[#A52A2A]"> Diversify your promotions</span> and make a positive impact on your audience.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.category} className="group relative">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100 h-full">
              {/* Header with Background */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={service.bgImage}
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#A52A2A]/80 to-[#A52A2A]/60"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#A52A2A] shadow-lg">
                  {service.icon}
                </div>
                
                {/* Title on overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {service.category}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Key Services */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Services:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#A52A2A] rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] text-white text-sm font-medium rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
