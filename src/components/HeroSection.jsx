import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-8 py-16 md:py-24 bg-white">
      {/* ---- LEFT: Text Block ---- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pr-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Empowering marketing through <span className="text-[#A52A2A]">innovation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-[#A52A2A]">Royal Creative</span>, where we combine creativity and innovation to revolutionize your marketing campaigns.
        </p>
        <Link to="/about">
          <Button className="bg-[#A52A2A] hover:bg-[#FF474C] rounded-full px-8 py-3 text-lg font-semibold shadow-md">
            About Us
          </Button>
        </Link>
      </div>
      {/* ---- RIGHT: Image Block ---- */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Creative Marketing"
          className="rounded-xl shadow-lg w-72 md:w-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
