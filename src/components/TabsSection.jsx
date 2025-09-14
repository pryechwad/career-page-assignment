import React, { useState } from "react";

const tabs = [
  "Who we are",
  "Why Sapphire",
  "Benefits / What we offer",
  "Life at Sapphire",
  "Hiring Process",
  "Current Openings"
];

const tabContents = [
  // Fill with actual content for each tab as per the careers page
  <div className="py-8 text-gray-700">Sapphire Solutions, an ISO 27001:2013 certified Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2002. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups. Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 20+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success.</div>,
  <div className="py-8 text-gray-700">We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.</div>,
  <div className="py-8 text-gray-700">Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success.</div>,
  <div className="py-8 text-gray-700">We are deeply committed to creating a positive and lasting impact in the communities we serve. From many years we allocated dedicated budget as part of our CSR initiatives to support education, health, and social welfare programs.</div>,
  <div className="py-8 text-gray-700">We follow a very simple, straightforward, and transparent hiring process. Our HR team ensures a smooth onboarding experience for all new hires.</div>,
  <div className="py-8 text-gray-700">Check our current openings and apply to join our dynamic team!</div>
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#f7fbff] py-8">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-300 ${activeTab === idx ? "bg-blue-100 text-blue-700" : "bg-white text-gray-700"}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-b-lg shadow p-6 animate-fadeIn">
        {tabContents[activeTab]}
      </div>
    </section>
  );
};

export default TabsSection;
