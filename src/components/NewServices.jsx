import React from "react";
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const serviceCards = [
  {
    title: "Promotion & Direct Marketing",
    desc: "Our digital marketing services help you reach your audience across multiple platforms with targeted campaigns that drive results.",
    bullets: [
      "Digital Marketing - SEO, SEM, Social Media, Email Marketing",
      "Cinema Ad Screening - Targeted ads in theaters", 
      "Television & Cable Ads - Reach mass audiences",
      "Tri-Cycle Branding - Mobile advertising on three-wheeled vehicles",
      "Look Walker Activity - Brand ambassadors promoting your products",
    ],
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Promotion & Direct Marketing",
    icon: "📱"
  },
  {
    title: "Print & Outdoor Media",
    desc: "Our outdoor media solutions provide high visibility for your brand in strategic locations to maximize exposure.",
    bullets: [
      "Flex - Durable, weather-resistant banner displays",
      "Standee - Free-standing promotional displays",
      "Backlit boards - Illuminated displays for 24/7 visibility",
      "Pamphlet print and Distribution - Targeted information delivery",
      "Hoardings - Large outdoor advertising structures",
      "No Parking signs - Branded signage in high-traffic areas",
      "Street Light Polls - Urban visibility with pole banners",
      "Wall Painting - Custom murals and painted advertisements",
    ],
    img: "https://images.unsplash.com/photo-1509228627150-1dc90b7e4a81?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Print & Outdoor Media",
    icon: "🎯"
  },
  {
    title: "Transit & Venue Branding",
    desc: "Our transit and venue branding solutions put your message in front of audiences on the move and in popular destinations.",
    bullets: [
      "Mobile Van/LED Van/Road Show - Dynamic mobile advertising",
      "Auto Rickshaw Branding - Advertising on three-wheeled taxis",
      "Bus & Bus Shelter Branding - Daily commuter exposure",
      "Local Train & Station Branding - Mass transit visibility",
      "Inside branding at McDonald's - Targeted food venue marketing",
      "Café Coffee Day Branding - Reaching coffee shop customers",
      "Mall Branding - High-traffic retail environment advertising",
    ],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Transit & Venue Branding",
    icon: "🚌"
  },
];

const NewServices = () => (
  <>
    <Navbar />
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-red-50 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive portfolio of marketing solutions to amplify your reach and impact. 
            Each service is engineered for flexibility, results, and modern brand visibility.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {serviceCards.map((svc, index) => (
            <div 
              key={svc.title} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100 hover:border-[#A52A2A]/30 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Side */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A52A2A]/20 to-[#A52A2A]/40 z-10"></div>
                <img
                  src={svc.img}
                  alt={svc.imgAlt}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 z-20">
                  <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-[#A52A2A]/20">
                    {svc.icon}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {svc.desc}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {svc.bullets.slice(0, 6).map((bullet, idx) => {
                    const [title, description] = bullet.includes(" - ") 
                      ? bullet.split(" - ") 
                      : [bullet, ""];
                    
                    return (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-red-50 hover:bg-[#A52A2A]/5 transition-colors border border-red-100/50">
                        <div className="w-2 h-2 bg-[#A52A2A] rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800 text-sm">{title}</span>
                          {description && (
                            <p className="text-gray-600 text-xs mt-1">{description}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Show more button if there are more than 6 items */}
                {svc.bullets.length > 6 && (
                  <button className="mt-4 text-[#A52A2A] hover:text-[#8B0000] font-medium text-sm self-start transition-colors">
                    + {svc.bullets.length - 6} more services
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default NewServices;
