import React, { useState } from 'react';
import logo from "../assets/chaitanya.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/chaitanya-sonar-502305283/",
    color: "hover:text-blue-500",
    glowColor: "from-blue-600 to-blue-400",
    label: "LinkedIn"
  },
  {
    Icon: FaGithub,
    url: "https://github.com/2300030974",
    color: "hover:text-gray-400",
    glowColor: "from-gray-600 to-gray-400",
    label: "GitHub"
  },
  {
    Icon: FaSquareXTwitter,
    url: "https://twitter.com/your-twitter",
    color: "hover:text-blue-400",
    glowColor: "from-blue-500 to-blue-300",
    label: "Twitter"
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/chaitanyasonar1101/",
    color: "hover:text-pink-500",
    glowColor: "from-pink-600 via-purple-600 to-orange-500",
    label: "Instagram"
  },
];

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 sm:py-6 mb-0 sm:mb-20">
      {/* Logo Section */}
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative"
          onHoverStart={() => setIsLogoHovered(true)}
          onHoverEnd={() => setIsLogoHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background effects */}
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur-md"
            animate={{
              rotate: [0, 360],
              scale: isLogoHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          <img
            className="relative mx-2 h-16 w-16 rounded-full object-cover border-2 border-neutral-800/50 backdrop-blur-sm transition-all duration-300"
            src={logo}
            alt="logo"
          />
          
          {/* Floating name tag */}
          <AnimatePresence>
            {isLogoHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-1/2 top-16 sm:top-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900/90 px-4 py-2 text-sm font-medium shadow-xl"
              >
                Chaitanya Sonar
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Social Icons Section */}
      <motion.div
        className="m-2 sm:m-8 flex items-center justify-center gap-3 sm:gap-8 text-2xl sm:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {socialLinks.map(({ Icon, url, color, glowColor, label }, index) => (
          <motion.div
            key={index}
            className="relative"
            onHoverStart={() => setHoveredIcon(index)}
            onHoverEnd={() => setHoveredIcon(null)}
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block cursor-pointer transition-all duration-300 ${color}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Icon />
              
              {/* Animated glow effect */}
              <motion.div
                className={`absolute -inset-3 rounded-xl bg-gradient-to-r ${glowColor} opacity-0 blur-md`}
                animate={{
                  opacity: hoveredIcon === index ? [0, 0.3, 0] : 0,
                  scale: hoveredIcon === index ? [0.8, 1.2, 0.8] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Floating label with backdrop blur - Only show on larger screens */}
              <AnimatePresence>
                {hoveredIcon === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="hidden sm:block absolute left-1/2 -bottom-10 -translate-x-1/2 rounded-lg bg-neutral-900/90 px-4 py-2 text-sm font-medium shadow-xl backdrop-blur-sm"
                  >
                    {label}
                    <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-neutral-900/90" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Ripple effect on hover */}
              <motion.div
                className={`absolute -inset-2 rounded-full ${color.replace('hover:', '')} opacity-0`}
                animate={{
                  scale: hoveredIcon === index ? [1, 1.5] : 1,
                  opacity: hoveredIcon === index ? [0.2, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;