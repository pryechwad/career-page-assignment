import React from "react";

const SocialMediaSection = () => (
  <section className="w-full py-10 bg-[#f7fbff] flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-6">Social Media</h3>
    <div className="flex gap-6 mb-6">
        <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition">
          <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition">
          <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
        </a>
        <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition">
          <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition">
          <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="#" className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition">
          <img src="/youtube.png" alt="YouTube" className="w-8 h-8" />
        </a>
    </div>
    <p className="text-lg text-gray-700">We follow a very simple, straightforward, and transparent process</p>
  </section>
);

export default SocialMediaSection;
