import React from "react";

const NewsletterSection = () => (
  <section className="w-full py-10 bg-[#eaf6ff] flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-6 text-center">Subscribe us and Get the latest updates and news</h3>
    <form className="flex flex-wrap gap-4 justify-center mb-6">
      <input type="text" placeholder="Your name *" className="px-4 py-2 rounded border border-gray-300" />
      <input type="email" placeholder="Your Email ID *" className="px-4 py-2 rounded border border-gray-300" />
      <input type="text" placeholder="+91 Mobile Number *" className="px-4 py-2 rounded border border-gray-300" />
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-bold">Subscribe</button>
    </form>
  </section>
);

export default NewsletterSection;
