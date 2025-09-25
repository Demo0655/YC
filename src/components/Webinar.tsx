import React, { useState } from 'react';
import { Calendar, Clock, Users, PlayCircle } from 'lucide-react';
import RegisterForm from './RegisterForm';

const Webinar: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const tutors = [
    {
      name: 'Nishant Sharma',
      title: 'AI Specialist & Senior Developer',
      bio: 'With over 8 years of experience in AI and machine learning, Nishant has helped thousands of students transition into AI careers.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Aman Verma',
      title: 'Full Stack Developer & AI Enthusiast',
      bio: 'Aman specializes in integrating AI tools with web development and has built multiple successful AI-powered applications.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <section id="webinar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🔴 LIVE WEBINAR
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Free Webinar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert instructors for an exclusive session on "Building AI-Powered Applications in 2025"
          </p>
        </div>

        {/* Webinar Details */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Building AI-Powered Applications in 2025
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-blue-300" />
                  <span className="text-lg">Saturday, January 25, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-300" />
                  <span className="text-lg">7:00 PM - 9:00 PM IST</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-300" />
                  <span className="text-lg">Limited to 1000 participants</span>
                </div>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                Register for Free Webinar
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                alt="Webinar Preview"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">What You'll Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Latest AI tools and technologies',
              'Building ChatGPT-powered applications',
              'AI integration with web development',
              'Monetizing AI skills',
              'Career opportunities in AI',
              'Hands-on project walkthrough'
            ].map((topic, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <span className="font-medium text-gray-900">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Your Instructors */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Your Instructors</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {tutors.map((tutor, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Expert Instructor
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{tutor.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{tutor.title}</p>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">{tutor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && <RegisterForm onClose={() => setShowForm(false)} isWebinar={true} />}
    </section>
  );
};

export default Webinar;