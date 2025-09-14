import React from "react";

const SocialMediaSection = () => (
  <section className="w-full py-10 bg-[#f7fbff] flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-6">Social Media</h3>
    <div className="flex gap-6 mb-6">
      <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition"><i className="fab fa-facebook-f text-blue-700 text-2xl"></i></a>
      <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition"><i className="fab fa-twitter text-blue-700 text-2xl"></i></a>
      <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition"><i className="fab fa-linkedin-in text-blue-700 text-2xl"></i></a>
      <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition"><i className="fab fa-instagram text-blue-700 text-2xl"></i></a>
      <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition"><i className="fab fa-youtube text-blue-700 text-2xl"></i></a>
    </div>
    <p className="text-lg text-gray-700">We follow a very simple, straightforward, and transparent process</p>
  </section>
);

export default SocialMediaSection;
