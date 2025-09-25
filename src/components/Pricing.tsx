import React, { useState } from 'react';
import { Check, Zap, Crown, Gift } from 'lucide-react';
import RegisterForm from './RegisterForm';

const Pricing: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Incredible Value, Unbeatable Price
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get lifetime access to everything for just ₹9 - that's 99% off the regular price!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Price Comparison */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-4">
              <p className="text-lg font-bold">🚨 FLASH SALE - ENDS SOON! 🚨</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-gray-500 text-lg line-through mb-2">Regular Price: ₹999</div>
                    <div className="text-6xl font-bold text-orange-500 mb-2">₹9</div>
                    <div className="text-sm text-gray-600">One-time payment • Lifetime access</div>
                  </div>
                  
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block font-semibold mb-6">
                    <Gift className="w-4 h-4 inline mr-2" />
                    Save 99% - ₹990 OFF!
                  </div>
                  
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 mr-2" />
                    Get Instant Access - ₹9
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Crown className="w-7 h-7 text-yellow-500 mr-2" />
                    What's Included:
                  </h3>
                  
                  {[
                    'Complete AI Products Learning Course',
                    '500+ Premium HTML Code Sets',
                    'Access to All Live Webinars',
                    'Exclusive Learning Resources Library',
                    'Private Community Access',
                    'Industry Certificates',
                    'Lifetime Updates & New Content',
                    '24/7 Premium Support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Secure Payment Options</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold text-gray-700">💳 Credit/Debit Cards</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold text-gray-700">🏦 Net Banking</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold text-gray-700">📱 UPI</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold text-gray-700">💰 Wallets</span>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">30-Day Money Back Guarantee</h3>
            <p className="text-green-700 text-lg">
              Not satisfied? Get your full refund within 30 days, no questions asked. 
              Your success is our priority!
            </p>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && <RegisterForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Pricing;