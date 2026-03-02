'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <div>
          <div className="page-content">
      {/* INNER PAGE BANNER */}
      <div className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/images/4.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Putting a plan to action, to assure your satisfaction!
            </h2>
          </div>
        </div>
      </div>
      {/* INNER PAGE BANNER END */}

      {/* SECTION CONTENT START */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          {/* CONTACT FORM & INFO */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* CONTACT FORM */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* TITLE START */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-uppercase">
                    <span className="text-blue-600">Get</span> In touch
                  </h2>
                  <div className="h-1 w-24 bg-blue-600 mt-4"></div>
                </div>
                {/* TITLE END */}

                <div>
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-10 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-1">
              <div>
                {/* TITLE START */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-uppercase">
                    <span className="text-blue-600">Contact</span> Info
                  </h2>
                  <div className="h-1 w-24 bg-blue-600 mt-4"></div>
                </div>
                {/* TITLE END */}

                <div className="bg-gray-900 text-white p-8 rounded-lg space-y-8">
                  {/* Phone */}
                  <div className="flex space-x-4">
                    <div className="text-2xl text-blue-600">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Phone number</h5>
                      <p className="text-gray-300">+966 576150857</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex space-x-4">
                    <div className="text-2xl text-blue-600">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Email address</h5>
                      <p className="text-gray-300">info@specializemaintenance.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex space-x-4">
                    <div className="text-2xl text-blue-600">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Address info</h5>
                      <p className="text-gray-300">Prince Abdul Muhsin Bin Abdulaziz Rd, Al Malaz, Riyadh 12841</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="460"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.044383174594!2d-73.98517634822427!3d40.753964399662806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a938897f87%3A0x77a53418bbd56c17!2s34%20St%20-%20Herald%20Sq!5e0!3m2!1sen!2sin!4v1658249652295!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* SECTION CONTENT END */}
      </div>
    </div>
  );
};

export default Contact;