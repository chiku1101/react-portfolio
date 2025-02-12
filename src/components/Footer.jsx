import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black mt-12">
      <motion.div
      
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center"
      >
        <p className="text-lg text-gray-300">
          Crafted by
          <span className="font-semibold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            {" Chaitanya Sonar "}
          </span>
          — 
          <span className="text-gray-500">© 2025</span>
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 text-sm text-gray-400 font-light"
        >
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
