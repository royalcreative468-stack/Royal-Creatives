import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientLogos = [
  'https://via.placeholder.com/150x80?text=Client+1',
  'https://via.placeholder.com/150x80?text=Client+2',
  'https://via.placeholder.com/150x80?text=Client+3',
  'https://via.placeholder.com/150x80?text=Client+4',
  'https://via.placeholder.com/150x80?text=Client+5',
  'https://via.placeholder.com/150x80?text=Client+6',
  'https://via.placeholder.com/150x80?text=Client+1',
  'https://via.placeholder.com/150x80?text=Client+2',
  'https://via.placeholder.com/150x80?text=Client+3',
  'https://via.placeholder.com/150x80?text=Client+4',
  'https://via.placeholder.com/150x80?text=Client+5',
  'https://via.placeholder.com/150x80?text=Client+6',
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,             // Slower, smoother transition (ms)
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,        // Start moving immediately
    cssEase: "linear",       // Removes acceleration/deceleration
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="my-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Our <span className='text-[#A52A2A]'>Clients</span></h2>
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Client ${index + 1}`} className="max-h-20 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
