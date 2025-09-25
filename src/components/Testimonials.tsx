import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Yuvan Creations transformed my career! The AI course content is incredibly practical and the webinars are amazing. Best ₹9 I ever spent!',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      role: 'Freelancer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The HTML code sets are pure gold! I\'ve used them in multiple client projects and saved hours of development time. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      role: 'Digital Marketer',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Amazing value for money! The community is super supportive and the instructors are always available to help. My AI skills improved dramatically.',
      rating: 5
    },
    {
      name: 'Amit Singh',
      role: 'Student',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'From zero to building AI applications in just 3 months! The step-by-step approach and practical projects made learning so easy and enjoyable.',
      rating: 5
    },
    {
      name: 'Ritu Gupta',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The design templates and AI integration tutorials helped me create stunning interfaces. This course is a game-changer for designers!',
      rating: 5
    },
    {
      name: 'Vikash Yadav',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'I built my startup\'s entire tech stack using the knowledge from this course. The ROI has been incredible - thousands of times more than ₹9!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful learners who transformed their careers with Yuvan Creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-green-100">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;