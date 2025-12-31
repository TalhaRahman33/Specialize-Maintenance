'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = () => {
    // const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      // [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            CONTACT US
          </h1>
          <p className="text-white text-opacity-90 text-lg leading-relaxed px-4">
            We're here to help! Whether you have questions about our services,
            need support, or want to discuss a project, feel free to reach out.
          
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border-b-2 border-blue-300 text-white placeholder-blue-200 py-3 px-2 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Mail"
              className="w-full bg-transparent border-b-2 border-blue-300 text-white placeholder-blue-200 py-3 px-2 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          <div>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent border-b-2 border-blue-300 text-white placeholder-blue-200 py-3 px-2 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={handleSubmit}
              className="border-2 border-white text-white font-semibold px-10 py-3 rounded hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="tracking-wider">SUBMIT</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;