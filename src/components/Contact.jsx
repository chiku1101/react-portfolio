import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_t35zfge";
const EMAILJS_TEMPLATE_ID = "template_56cznau";
const EMAILJS_PUBLIC_KEY = "ydjbRvdrXB-ptxTFO";

const contactInfo = [];

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch {
      setStatus({ loading: false, error: 'Failed to send message. Please try again.', success: false });
    }
  };

  return (
    <div id={id} className="h-screen w-full bg-black flex flex-col items-center">
      <div className="flex-grow flex flex-col items-center justify-center px-4 w-full">
        <h1 className="text-7xl md:text-8xl lg:text-7xl font-bold mb-7 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
          LET'S POOL OUR EFFORTS
        </h1>

        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              className="w-full p-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="w-full p-3 bg-[#111827] border border-gray-700 rounded-lg text-white placeholder-gray-400 resize-none"
              required
            />
            {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
            {status.success && <p className="text-green-500 text-sm">Message sent successfully!</p>}
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              {status.loading ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>

        <div className="mt-8 space-y-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-[#111827] p-4 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
