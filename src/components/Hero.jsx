import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-16 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight tracking-airier"
            >
              Hi, I'm <span className="font-normal">Chaitanya Sonar</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-600 tracking-airier"
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl tracking-airy font-normal"
            >
              I build scalable web applications with clean code and modern technologies. 
              Passionate about creating seamless digital experiences.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-900 text-white text-base font-normal tracking-airy hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/Chaitanya_Sonar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-300 text-gray-900 text-base font-normal tracking-airy hover:bg-gray-50 transition-colors"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
              <img
                src="/undefined (1).jpeg"
                alt="Chaitanya Sonar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
