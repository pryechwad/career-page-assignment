import React from "react";

const people = [
  { name: "John Smith", role: "Business Development Manager", initials: "JS", bgColor: "from-blue-500 to-blue-600" },
  { name: "Alex Davis", role: "Team Lead", initials: "AD", bgColor: "from-green-500 to-green-600" },
  { name: "Mike Wilson", role: "Team Lead", initials: "MW", bgColor: "from-purple-500 to-purple-600" }
];

const PeopleCarousel = () => (
  <section className="w-full py-12 bg-white flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-8 text-center">Our People Our Pride</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {people.map((person) => (
        <div key={person.name} className="bg-gray-100 rounded-lg shadow p-6 w-72 flex flex-col items-center animate-fadeIn">
          <div className={`w-24 h-24 bg-gradient-to-r ${person.bgColor} rounded-full mb-4 flex items-center justify-center`}>
            <span className="text-2xl font-bold text-white">{person.initials}</span>
          </div>
          <div className="text-xl font-semibold mb-2">{person.name}</div>
          <div className="text-gray-600">{person.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default PeopleCarousel;
