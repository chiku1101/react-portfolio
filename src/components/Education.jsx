import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const Education = ({ id }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-20 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-16 tracking-airier"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="border-l-2 border-gray-200 pl-6 md:pl-8 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full" />
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 tracking-airier">
                    {edu.degree}
                  </h3>
                  <span className="text-base md:text-lg text-gray-500 tracking-airy font-normal">{edu.period}</span>
                </div>
                {edu.specialization && (
                  <p className="text-base md:text-lg text-gray-700 font-normal tracking-airy">
                    {edu.specialization}
                  </p>
                )}
                <p className="text-base md:text-lg text-gray-600 tracking-airy font-normal">
                  {edu.institution}
                </p>
                <p className="text-base md:text-lg text-gray-600 tracking-airy font-normal">
                  {edu.grade}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

