import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init('yAZ2pii-ZSB7RSUYf');
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error: Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Chaitanya",
      };

      const result = await emailjs.send(
        'service_t35zfge',
        'template_q2qwgkp',
        templateParams,
        'yAZ2pii-ZSB7RSUYf'
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error: Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-20 text-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        LET'S POOL OUR EFFORTS
      </h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your@email.com"
            className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={loading}
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 border border-gray-600 rounded-md bg-black text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full p-3 bg-blue-500 text-white font-bold rounded-md transition-colors duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 p-3 rounded-md ${
            status === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status === "success"
            ? "Message sent successfully!"
            : status.replace("error: ", "")}
        </div>
      )}
    </div>
  );
};

export default Contact;