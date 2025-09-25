import React, { useState } from 'react';
import { X, User, Mail, Phone, CheckCircle } from 'lucide-react';

interface RegisterFormProps {
  onClose: () => void;
  isWebinar?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose, isWebinar = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms submission
      const formDataObj = new FormData();
      formDataObj.append('access_key', '92578840-f9be-45ba-8dc4-da7386c7708c');
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.mobile);
      formDataObj.append('subject', isWebinar ? 'Webinar Registration' : 'Course Registration');
      formDataObj.append('message', `Registration Type: ${isWebinar ? 'Webinar' : 'Course'}\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        setShowSuccess(true);
        // Here you would also trigger WhatsApp notification
        console.log('Form submitted successfully');
        
        // Reset form
        setFormData({ name: '', email: '', mobile: '' });
        
        // Close modal after showing success for 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center transform animate-bounce">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600 mb-2">Success! 🎉</h3>
          <p className="text-gray-600 mb-4">
            {isWebinar ? 
              'You have been registered for the webinar! Check your email for confirmation.' :
              'Registration successful! You will receive payment instructions via email.'
            }
          </p>
          <p className="text-sm text-gray-500">
            We've also sent a WhatsApp notification to our team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isWebinar ? 'Register for Webinar' : 'Register for Course'}
          </h2>
          <p className="text-gray-600">
            {isWebinar ? 
              'Join our exclusive AI learning webinar for free!' :
              'Get instant access to AI courses for just ₹9'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : isWebinar 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {isSubmitting ? 'Submitting...' : isWebinar ? 'Register for Webinar' : 'Register Now - ₹9'}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          By registering, you agree to receive updates via email and WhatsApp.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;