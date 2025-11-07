import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_t35zfge";
const EMAILJS_TEMPLATE_ID = "template_56cznau";
const EMAILJS_PUBLIC_KEY = "ydjbRvdrXB-ptxTFO";

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
    <section id={id} className="py-20 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-12 tracking-airier">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-5 py-4 text-base border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors tracking-airy font-normal"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-5 py-4 text-base border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors tracking-airy font-normal"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Message"
              className="w-full px-5 py-4 text-base border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none tracking-airy font-light"
              required
            />
          </div>
          
          {status.error && (
            <p className="text-base text-red-600 tracking-airy font-normal">{status.error}</p>
          )}
          {status.success && (
            <p className="text-base text-green-600 tracking-airy font-normal">Message sent successfully!</p>
          )}
          
          <button
            type="submit"
            disabled={status.loading}
            className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white text-base font-normal hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 tracking-airy"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
            {!status.loading && <Send className="w-5 h-5" />}
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="space-y-4 text-base md:text-lg text-gray-600 tracking-airy font-normal">
            <p>
              <span className="font-normal text-gray-900">Email:</span> chaitanyasonar339@gmail.com
            </p>
            <p>
              <span className="font-normal text-gray-900">Phone:</span> +91 8177968861
            </p>
            <p>
              <span className="font-normal text-gray-900">Location:</span> KL University, Vaddeswaram, Guntur, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
