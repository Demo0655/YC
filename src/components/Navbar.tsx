import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Users, Calendar, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Yuvan Creations
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-blue-600 transition-colors font-medium ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Home</a>
            <a href="#features" className={`hover:text-blue-600 transition-colors font-medium ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Features</a>
            <a href="#webinar" className={`hover:text-blue-600 transition-colors font-medium ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Webinar</a>
            <a href="#pricing" className={`hover:text-blue-600 transition-colors font-medium ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Pricing</a>
            <a href="#contact" className={`hover:text-blue-600 transition-colors font-medium ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Contact</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-semibold">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#webinar" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Webinar</a>
              <a href="#pricing" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-semibold">
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;