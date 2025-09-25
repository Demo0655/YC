import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What exactly do I get for ₹9?',
      answer: 'You get lifetime access to our complete AI learning platform including: comprehensive AI courses, 500+ HTML code sets, all live webinars (recorded + future ones), exclusive learning resources, private community access, industry certificates, and 24/7 support. This is a one-time payment with no hidden costs.'
    },
    {
      question: 'Is this really just ₹9? Are there any hidden charges?',
      answer: 'Yes, it\'s really just ₹9 with no hidden charges! This is a limited-time promotional offer. After purchase, you get lifetime access to all current and future content without any additional fees. The only cost is the one-time ₹9 payment.'
    },
    {
      question: 'How long do I have access to the content?',
      answer: 'You get lifetime access! Once you purchase, you can access all courses, resources, and future updates forever. There are no subscription fees or expiry dates. You also get access to all new content and courses we add in the future.'
    },
    {
      question: 'Are the webinars live or recorded?',
      answer: 'Both! You get access to all our previously recorded webinars instantly, plus you can join all future live webinars for free. Live webinars happen monthly and are also recorded for later viewing. All recordings are available in your dashboard.'
    },
    {
      question: 'What if I\'m a complete beginner in AI?',
      answer: 'Perfect! Our courses are designed for all levels, from complete beginners to advanced learners. We start with basics and gradually move to advanced topics. Each module includes practical exercises and real-world projects to ensure you learn effectively.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'Absolutely! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with the content, just email us within 30 days of purchase and we\'ll refund your ₹9, no questions asked.'
    },
    {
      question: 'How do I access the content after payment?',
      answer: 'Immediately after successful payment, you\'ll receive login credentials via email. You can then access our learning platform where all courses, resources, and community features are available. The setup takes less than 2 minutes.'
    },
    {
      question: 'Will this offer be available later?',
      answer: 'No, this is a limited-time flash sale. After the countdown ends, the price will go back to ₹999. This ₹9 offer is only available for a few days to celebrate our platform launch. Don\'t miss out!'
    },
    {
      question: 'Do I get certificates after completing courses?',
      answer: 'Yes! You receive industry-recognized certificates for each course you complete. These certificates are verifiable and can be added to your LinkedIn profile, resume, or portfolio to showcase your AI skills to employers.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit/debit cards, net banking, UPI, and popular wallets like Paytm, PhonePe, and Google Pay. All payments are processed securely through encrypted payment gateways.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our ₹9 AI learning offer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7. Get instant answers to any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@yuvancreations.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              📧 Email Support
            </a>
            <a
              href="https://wa.me/918979220256"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;