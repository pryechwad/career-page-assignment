import React from "react";

const stats = [
  { label: "IT Professionals", value: "200+" },
  { label: "Fortune 500 Companies", value: "20+" },
  { label: "Client Retention", value: "95%" },
  { label: "Satisfied Clients", value: "2800+" },
  { label: "Years of Experience", value: "20+" }
];

const StatsSection = () => (
  <section className="w-full bg-blue-100 py-10 flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px] animate-fadeIn">
          <div className="text-3xl font-bold mb-2">{stat.value}</div>
          <div className="text-lg font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
