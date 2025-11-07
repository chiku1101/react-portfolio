import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/chaitanya-sonar-502305283/",
    label: "LinkedIn"
  },
  {
    Icon: FaGithub,
    url: "https://github.com/chiku1101",
    label: "GitHub"
  },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#"
            className="text-2xl md:text-3xl font-normal text-gray-900 mr-8 md:mr-12 tracking-airier"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            CS
          </motion.a>

          <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-normal text-gray-600 hover:text-gray-900 transition-colors tracking-airy"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 md:space-x-8">
            {socialLinks.map(({ Icon, url, label }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
