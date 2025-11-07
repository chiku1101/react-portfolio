import React from "react";
import { motion } from "framer-motion";

const About = ({ id }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id={id} className="py-20 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-12 tracking-airier"
        >
          About
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="max-w-3xl space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed tracking-airy font-normal"
        >
          <p>
            I'm a Full Stack Developer with experience in building modern web applications 
            using React, Next.js, Node.js, and various databases. I enjoy solving complex 
            problems and turning ideas into reality through clean, maintainable code.
          </p>
          
          <p>
            Currently working at TwiLearn, I focus on creating efficient and scalable solutions 
            that deliver exceptional user experiences. I'm always learning new technologies and 
            best practices to stay at the forefront of web development.
          </p>

          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
            projects, and sharing knowledge with the developer community.
          </p>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
