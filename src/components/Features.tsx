import React from 'react';
import { Brain, Code, Video, BookOpen, Users, Trophy, Clock, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Products Learning',
      description: 'Master cutting-edge AI tools and technologies with hands-on projects and real-world applications.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Code,
      title: 'HTML Code Sets',
      description: 'Premium collection of HTML templates, components, and code snippets for rapid development.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Video,
      title: 'Live Webinars',
      description: 'Interactive sessions with industry experts covering latest AI trends and practical insights.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Comprehensive study materials, guides, and documentation to accelerate your learning journey.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join thousands of learners in our exclusive community for networking and collaboration.',
      color: 'text-indigo-600 bg-indigo-100'
    },
    {
      icon: Trophy,
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon completion of courses and assessments.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'One-time payment for unlimited access to all current and future course content.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 dedicated support team to help you overcome any learning challenges.',
      color: 'text-pink-600 bg-pink-100'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Yuvan Creations?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master AI and web development, all in one comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Video Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">AI Tools Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;