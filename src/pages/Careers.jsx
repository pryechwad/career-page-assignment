import { useState } from 'react';
import AnimationWrapper from '../components/AnimationWrapper';
import JobListings from '../components/JobListings';

const tabList = [
  'Who we are',
  'Why Sapphire',
  'Benefits / What we offer',
  'Life at Sapphire',
  'Hiring Process',
  'Current Openings',
];

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const scrollToPositions = () => {
    setActiveTab(5); // Set to Current Openings tab
    setTimeout(() => {
      const element = document.getElementById('job-listings');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const tabContent = [
    // Who we are
    <div key="who-we-are" className="flex flex-col md:flex-row items-center gap-8 py-8">
      <img src="src\assets\image.png" alt="Who we are illustration" className="w-64 h-auto mx-auto rounded-lg" />
      <div className="max-w-xl mx-auto">
        <p className="text-gray-700 text-lg mb-4">Sapphire Solutions, an ISO 27001:2013 certified Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2002. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups.</p>
        <p className="text-gray-700 text-lg">Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 20+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success.</p>
      </div>
    </div>,
    // Why Sapphire
    <div key="why-sapphire" className="flex flex-col md:flex-row items-center gap-8 py-8">
      <img src="src\assets\career-illustration.png" alt="Why Sapphire illustration" className="w-64 h-auto mx-auto rounded-lg" />
      <div className="max-w-xl mx-auto">
        <p className="text-gray-700 text-lg mb-4">We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.</p>
        <p className="text-gray-700 text-lg">Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success.</p>
      </div>
    </div>,
    // Benefits / What we offer
    <div key="benefits" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-4xl mb-2">🏥</div>
        <h3 className="font-bold mb-2">Health & Wellbeing</h3>
        <p className="text-gray-600">We place the health and mental well-being of our associates at the core of our values. Through initiatives that promote a culture of fitness and wellness, we encourage holistic growth and a balanced lifestyle.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-4xl mb-2">🎓</div>
        <h3 className="font-bold mb-2">Continuous Learning</h3>
        <p className="text-gray-600">We foster a culture of continuous learning and development, providing opportunities for skill enhancement and career growth.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-4xl mb-2">🤝</div>
        <h3 className="font-bold mb-2">Collaborative Culture</h3>
        <p className="text-gray-600">Our collaborative team environment ensures that every member feels valued and respected, driving innovation and success.</p>
      </div>
    </div>,
    // Life at Sapphire
    <div key="life-at-sapphire" className="flex flex-col md:flex-row items-center gap-8 py-8">
      <img src="src\assets\image.png" alt="Life at Sapphire illustration" className="w-64 h-auto mx-auto rounded-lg" />
      <div className="max-w-xl mx-auto">
        <h3 className="font-bold mb-2">Community</h3>
        <p className="text-gray-700 text-lg mb-4">We are deeply committed to creating a positive and lasting impact in the communities we serve. From many years we allocated dedicated budget as part of our CSR initiatives to support education, health, and social welfare programs.</p>
        <h3 className="font-bold mb-2">Diversity</h3>
        <p className="text-gray-700 text-lg">We are an equal opportunity employer dedicated to fostering an inclusive and equitable workplace where everyone feels valued and respected. Our diverse workforce brings together individuals from various backgrounds, generations, and perspectives, creating a vibrant environment where innovation and collaboration thrive.</p>
      </div>
    </div>,
    // Hiring Process
    <div key="hiring-process" className="grid md:grid-cols-3 gap-8 py-8">
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">1</div>
        <h3 className="font-bold mb-2">Apply Online</h3>
        <p className="text-gray-600">Submit your application and resume through our online portal.</p>
      </div>
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">2</div>
        <h3 className="font-bold mb-2">Interview Process</h3>
        <p className="text-gray-600">Participate in our comprehensive interview process with our team.</p>
      </div>
      <div className="text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">3</div>
        <h3 className="font-bold mb-2">Join Our Team</h3>
        <p className="text-gray-600">Welcome aboard! Start your journey with Sapphire Solutions.</p>
      </div>
    </div>,
    // Current Openings
    <div key="current-openings" className="py-8">
      <JobListings />
    </div>,
  ];

  return (
    <div className="bg-[#f7fbff] min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#f7fbff] py-12 flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
        <AnimationWrapper animation="fade-right">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Build your Future with us</h1>
            <p className="text-lg text-gray-700 mb-6">Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.</p>
          </div>
        </AnimationWrapper>
        <AnimationWrapper animation="fade-left">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="src\assets\Team work-cuate.png" alt="Career Illustration" className="w-96 h-auto rounded-lg shadow-lg" />
          </div>
        </AnimationWrapper>
      </section>

      {/* Tab Navigation */}
      <nav className="w-full flex flex-wrap justify-center gap-2 bg-white border-b">
        {tabList.map((tab, idx) => (
          <button
            key={tab}
            className={`px-6 py-3 font-semibold transition-colors duration-300 ${activeTab === idx ? "bg-blue-100 text-blue-700 border-b-4 border-blue-700" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div id="job-listings" className="max-w-5xl mx-auto bg-white rounded-b-lg shadow p-6">
        <AnimationWrapper animation="fade-up" key={activeTab}>
          {tabContent[activeTab]}
        </AnimationWrapper>
      </div>

      {/* Stats Section */}
      <section className="w-full bg-blue-700 py-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8">
          <AnimationWrapper animation="fade-up" delay={0}>
            <div className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px]">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-lg font-medium">IT Professionals</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <div className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px]">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-lg font-medium">Fortune 500 Companies</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px]">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg font-medium">Client Retention</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={300}>
            <div className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px]">
              <div className="text-3xl font-bold mb-2">2800+</div>
              <div className="text-lg font-medium">Satisfied Clients</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={400}>
            <div className="bg-blue-700 text-white rounded-lg px-8 py-6 shadow text-center min-w-[150px]">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-lg font-medium">Years of Experience</div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our People Our Pride Carousel */}
      <section className="w-full py-12 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Our People Our Pride</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <AnimationWrapper animation="fade-up" delay={0}>
            <div className="bg-gray-100 rounded-lg shadow p-6 w-72 flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <div className="text-xl font-semibold mb-2">John Smith</div>
              <div className="text-gray-600">Business Development Manager</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <div className="bg-gray-100 rounded-lg shadow p-6 w-72 flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AD</span>
              </div>
              <div className="text-xl font-semibold mb-2">Alex Davis</div>
              <div className="text-gray-600">Team Lead</div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={200}>
            <div className="bg-gray-100 rounded-lg shadow p-6 w-72 flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MW</span>
              </div>
              <div className="text-xl font-semibold mb-2">Mike Wilson</div>
              <div className="text-gray-600">Team Lead</div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full py-10 bg-[#f7fbff] flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-6">Social Media</h3>
        <div className="flex gap-6 mb-6">
          {[{icon:'📘',label:'Facebook'},{icon:'🐦',label:'Twitter'},{icon:'💼',label:'LinkedIn'},{icon:'📷',label:'Instagram'},{icon:'📺',label:'YouTube'}].map((item) => (
            <button
              key={item.label}
              className="bg-white rounded-full p-4 shadow hover:bg-blue-100 transition-transform duration-300 focus:outline-none"
              style={{transition:'transform 0.3s'}}
              onClick={e => {
                e.currentTarget.classList.add('scale-125');
                setTimeout(() => e.currentTarget.classList.remove('scale-125'), 300);
              }}
              aria-label={item.label}
            >
              <span className="text-blue-700 text-2xl">{item.icon}</span>
            </button>
          ))}
        </div>
        <p className="text-lg text-gray-700">We follow a very simple, straightforward, and transparent process</p>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 bg-[#0072b1] flex flex-col items-center">
        <AnimationWrapper animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Ready To Take Challenge?</h2>
          <p className="mb-8 text-center text-lg md:text-xl text-white max-w-2xl">
            If you have a passion for planning & want to work for a rapidly growing entrepreneurial company,<br />
            please send your resume to <span className="font-semibold">careers@sapphiresolutions.net</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPositions}
              className="bg-white text-[#0072b1] font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition text-lg"
            >
              View Open Positions
            </button>
            <a
              href="mailto:careers@sapphiresolutions.net"
              className="bg-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900 transition text-lg"
            >
              Contact Us Here
            </a>
          </div>
        </AnimationWrapper>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-10 bg-[#eaf6ff] flex flex-col items-center">
        <AnimationWrapper animation="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Subscribe us and Get the latest updates and news</h3>
          <form className="flex flex-wrap gap-4 justify-center mb-6">
            <input type="text" placeholder="Your name *" className="px-4 py-2 rounded border border-gray-300" />
            <input type="email" placeholder="Your Email ID *" className="px-4 py-2 rounded border border-gray-300" />
            <input type="text" placeholder="+91 Mobile Number *" className="px-4 py-2 rounded border border-gray-300" />
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800 transition-colors">Subscribe</button>
          </form>
        </AnimationWrapper>

        {/* Company, Services, Technology, Solutions Section */}
        <div className="w-full bg-white rounded-lg shadow mt-2 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#0072b1]">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li>About Sapphire</li>
                <li>Our Team</li>
                <li>Events & Activities</li>
                <li>Careers (Jobs)</li>
                <li>Contact-Us</li>
                <li>Portfolio</li>
                <li>Awards & Recognition</li>
                <li>Why Choose Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#0072b1]">Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Product Development</li>
                <li>Cloud Development</li>
                <li>UI/UX Design</li>
                <li>Microsoft Development</li>
                <li>IT Outsourcing</li>
                <li>Testing & QA</li>
                <li>Hire Dedicated Developers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#0072b1]">Technology</h4>
              <ul className="space-y-2 text-gray-700">
                <li>.NET</li>
                <li>PHP</li>
                <li>Android</li>
                <li>IOS</li>
                <li>Flutter</li>
                <li>Xamarin</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#0072b1]">Solutions</h4>
              <ul className="space-y-2 text-gray-700 grid grid-cols-2 md:grid-cols-1">
                <li>Taxi Booking App</li>
                <li>Covid Tracker App</li>
                <li>E-Commerce App</li>
                <li>Product Finder App</li>
                <li>Eyelash Booking App</li>
                <li>Language Learning App</li>
                <li>Barber shop Booking App</li>
                <li>On Demand App Development</li>
                <li>Fitness App</li>
                <li>Dating App</li>
                <li>Salon App</li>
                <li>Car Wash App</li>
                <li>E-Learning App</li>
                <li>Car Rental App</li>
                <li>Bike Rental App</li>
                <li>Food Delivery App</li>
                <li>E-Commerce Solution</li>
                <li>Car Rental App</li>
                <li>Medicine Delivery App</li>
                <li>Chat App Development</li>
                <li>Pet Management App</li>
                <li>Emergency Alert App</li>
                <li>Payment Service App</li>
                <li>Sports App Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="w-full bg-white rounded-lg shadow mt-6 p-6">
          <h4 className="font-bold text-lg mb-4 text-[#0072b1]">Awards & Recognition</h4>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-semibold">ISO Certified:</span> Recognized for international quality standards in software development.</li>
            <li><span className="font-semibold">Chamber of Commerce Member:</span> Active member supporting business excellence and networking.</li>
            <li><span className="font-semibold">Top Rated:</span> Consistently rated among the best IT solution providers by clients.</li>
            <li><span className="font-semibold">Clutch Leader:</span> Featured as a top B2B service provider on Clutch platform.</li>
            <li><span className="font-semibold">Most Reviewed:</span> Highly reviewed for outstanding service and customer satisfaction.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Animated floating icons (WhatsApp, Call)
const FloatingIcons = () => (
  <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4">
    <a
      href="tel:+917542587670"
      className="bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center animate-bounce"
      title="Call"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://img.icons8.com/material-outlined/24/ffffff/phone.png" alt="Call" className="w-7 h-7" />
    </a>
    <a
      href="https://wa.me/919429709662"
      className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center animate-bounce"
      title="WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://img.icons8.com/material-outlined/24/ffffff/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
    </a>
  </div>
);

const CareersPage = () => (
  <>
    <Careers />
    <FloatingIcons />
  </>
);

export default CareersPage;