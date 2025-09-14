import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Sapphire Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                Services
              </a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md">
                Careers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50 rounded-lg">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100">
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Services
              </a>
              <a href="#" className="bg-blue-600 text-white block px-4 py-3 text-base font-semibold rounded-lg">
                Careers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;