import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import RegisterForm from './RegisterForm';

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Limited Time Badge */}
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
            <Clock className="w-4 h-4 mr-2" />
            LIMITED TIME OFFER - ENDS SOON!
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Master AI Learning
            <span className="block text-orange-400">For Just ₹9</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your career with comprehensive AI courses, HTML code sets, exclusive webinars, and premium learning resources.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2 text-orange-400" />
              <span className="font-medium">AI Products Learning</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-medium">HTML Code Sets</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3">
              <Clock className="w-5 h-5 mr-2 text-green-400" />
              <span className="font-medium">Live Webinars</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => setShowForm(true)}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
            >
              Register Now - Just ₹9
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
              Join Free Webinar
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-4">Trusted by 10,000+ students</p>
            <div className="flex justify-center items-center space-x-8 text-4xl">
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <div className="text-gray-400">|</div>
              <div className="text-2xl font-bold text-green-400">4.9/5 Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && <RegisterForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;