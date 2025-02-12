import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pic.png";

const Hero = () => {
  const fadeIn = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    }
  });

  return (
    <div className="bg-black border-b border-neutral-900 pb-10 lg:mb-40 relative overflow-hidden">
      {/* Background gradient (optional, can be removed if not needed) */}
      <div className="absolute inset-0 bg-black" />

      <div className="flex flex-wrap relative">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start p-10 lg:p-16">
            
            {/* Name at the top */}
            <motion.h1
              variants={fadeIn(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-extrabold tracking-tight lg:text-8xl 
                         text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500
                         transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              Chaitanya Sonar
            </motion.h1>

            {/* Two-line space */}
            <div className="h-8"></div>

            {/* "Elevate Your Vision" tagline */}
            <motion.h2
              variants={fadeIn(0.3)}
              initial="hidden"
              animate="visible"
              className="relative text-4xl font-semibold tracking-tight text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-400 to-purple-600 
                         transition-all duration-500 cursor-pointer"
            >
              Elevate Your Vision
            </motion.h2>

            {/* Extra spacing */}
            <div className="h-4"></div>

            {/* "Full Stack Developer" tagline */}
            <motion.h3
              variants={fadeIn(0.5)}
              initial="hidden"
              animate="visible"
              className="relative text-3xl font-medium tracking-tight text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-300 to-purple-500 
                         transition-all duration-500 cursor-pointer"
            >
              Full Stack Developer 🚀
            </motion.h3>

            <motion.p
              variants={fadeIn(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg font-light tracking-tighter text-gray-300
                         bg-white/10 dark:bg-neutral-800/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
            >
              Crafting seamless digital experiences through clean code, innovative design, and a passion for problem-solving.  
              Let's transform ideas into reality.
            </motion.p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              alt="Chaitanya Sonar"
              className="rounded-full shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
