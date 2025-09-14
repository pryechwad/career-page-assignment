import React from "react";

const HeroSection = () => (
  <section className="w-full bg-white py-12 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 animate-fadeIn">
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Build your Future with us</h1>
      <p className="text-lg text-gray-700 mb-6">Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.</p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Career Illustration" className="w-96 h-auto rounded-lg shadow-lg" />
    </div>
  </section>
);

export default HeroSection;
