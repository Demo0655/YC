import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">Yuvan Creations</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Transforming careers through comprehensive AI education and cutting-edge web development resources. 
              Join thousands of successful students who've mastered AI for just ₹9.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Features</a></li>
              <li><a href="#webinar" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Webinars</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">support@yuvancreations.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 8979220256</p>
                  <p className="text-sm text-gray-400">24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-6">
              <a
                href="https://wa.me/918979220256"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">₹9</div>
              <div className="text-sm text-gray-400">Limited Time Offer</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">10,000+</div>
              <div className="text-sm text-gray-400">Happy Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">500+</div>
              <div className="text-sm text-gray-400">Code Templates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-sm text-gray-400">Premium Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Yuvan Creations. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3">
            <span className="text-green-400 mr-2">🔒</span>
            <span className="text-sm text-gray-300">Secure Payment • SSL Encrypted • 30-Day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;