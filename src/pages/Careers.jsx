import { useState } from 'react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Who we are', 'Why Sapphire', 'Benefits', 'Life at Sapphire', 'Hiring Process', 'Current Openings'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Build Your Future With Us</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Join our team and help us deliver innovative technology solutions that transform businesses worldwide
              </p>
              <button 
                onClick={() => setActiveTab(5)}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                View Open Positions
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="/career-illustration.png" 
                alt="Career Growth" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                  activeTab === idx 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {activeTab === 0 && (
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Sapphire Solutions is an ISO 27001:2013 certified Web and Mobile App Development Company, 
                  delivering cutting-edge IT solutions since 2002. We provide comprehensive IT services 
                  tailored for enterprises, ISVs, digital agencies, and startups.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Driven by innovation and excellence, our highly skilled team combines industry best practices, 
                  deep technological expertise, and extensive business domain knowledge to accelerate digital transformation.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/Team work-cuate.png" 
                  alt="Team Work" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 order-2 lg:order-1 flex justify-center">
                <img 
                  src="/image.png" 
                  alt="Why Choose Us" 
                  className="w-full max-w-md h-auto"
                />
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <h2 className="text-4xl font-bold mb-6">Why Choose Sapphire</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are an award-winning, end-to-end software solutions provider with a proven track record. 
                  We have built strong partnerships with 2,500+ satisfied customers, from start-ups to large enterprises.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team comprises highly skilled professionals dedicated to delivering cutting-edge solutions 
                  with deep technical expertise and industry best practices.
                </p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">Benefits & What We Offer</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">🏥</div>
                  <h3 className="text-xl font-bold mb-4">Health & Wellbeing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We place the health and mental well-being of our associates at the core of our values. 
                    Comprehensive health benefits and wellness programs.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">🎓</div>
                  <h3 className="text-xl font-bold mb-4">Learning & Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We foster a culture of continuous learning and development, providing opportunities 
                    for skill enhancement and career growth.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">🤝</div>
                  <h3 className="text-xl font-bold mb-4">Collaborative Culture</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our collaborative team environment ensures that every member feels valued and respected, 
                    driving innovation and success.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">💰</div>
                  <h3 className="text-xl font-bold mb-4">Competitive Salary</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Market-leading compensation packages with performance bonuses and equity options.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">🏠</div>
                  <h3 className="text-xl font-bold mb-4">Remote Work</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Flexible work arrangements with remote and hybrid options available for better work-life balance.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-6">🌴</div>
                  <h3 className="text-xl font-bold mb-4">Unlimited PTO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unlimited paid time off policy to maintain work-life balance and personal well-being.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12">Life at Sapphire</h2>
              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Community</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are deeply committed to creating a positive and lasting impact in the communities we serve. 
                    For many years we have allocated dedicated budget as part of our CSR initiatives to support 
                    education, health, and social welfare programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Diversity</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are an equal opportunity employer dedicated to fostering an inclusive and equitable workplace 
                    where everyone feels valued and respected. Our diverse workforce brings together individuals from 
                    various backgrounds, creating a vibrant environment where innovation and collaboration thrive.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 4 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">Our Hiring Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4">Apply Online</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Submit your application and resume through our online portal with just a few clicks.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4">Interview Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Participate in our comprehensive but efficient interview process with our team members.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome aboard! Start your exciting journey with Sapphire Solutions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 5 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">Current Job Openings</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Senior Software Engineer", 
                    dept: "Engineering", 
                    location: "Remote",
                    description: "Build scalable web applications using modern technologies and best practices."
                  },
                  { 
                    title: "Product Manager", 
                    dept: "Product", 
                    location: "New York, NY",
                    description: "Drive product strategy and work with cross-functional teams to deliver exceptional products."
                  },
                  { 
                    title: "UX/UI Designer", 
                    dept: "Design", 
                    location: "San Francisco, CA",
                    description: "Create exceptional user experiences and intuitive interfaces for our digital products."
                  },
                  { 
                    title: "Data Scientist", 
                    dept: "Analytics", 
                    location: "Remote",
                    description: "Extract insights from complex datasets to drive data-informed business decisions."
                  },
                  { 
                    title: "DevOps Engineer", 
                    dept: "Engineering", 
                    location: "Austin, TX",
                    description: "Manage cloud infrastructure and deployment pipelines for scalable applications."
                  },
                  { 
                    title: "Marketing Manager", 
                    dept: "Marketing", 
                    location: "Chicago, IL",
                    description: "Lead marketing initiatives and drive brand awareness across multiple channels."
                  }
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.dept}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Full-time
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="mr-2">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">IT Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Fortune 500 Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2800+</div>
              <div className="text-lg">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our People Our Pride</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "Business Development Manager", initial: "JS", color: "from-blue-500 to-blue-600" },
              { name: "Alex Davis", role: "Team Lead", initial: "AD", color: "from-green-500 to-green-600" },
              { name: "Mike Wilson", role: "Senior Developer", initial: "MW", color: "from-purple-500 to-purple-600" }
            ].map((person, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className={`w-24 h-24 bg-gradient-to-r ${person.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{person.initial}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready To Take Challenge?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, 
            please send your resume to <span className="font-bold text-blue-400">careers@sapphiresolutions.net</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab(5)}
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              View Open Positions
            </button>
            <a
              href="mailto:careers@sapphiresolutions.net"
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Contact Us Here
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Subscribe for Latest Updates</h3>
          <p className="text-lg text-gray-600 mb-8">Get the latest news and job openings delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Your name *" 
              className="px-4 py-3 rounded-lg border border-gray-300 flex-1"
            />
            <input 
              type="email" 
              placeholder="Your Email ID *" 
              className="px-4 py-3 rounded-lg border border-gray-300 flex-1"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;