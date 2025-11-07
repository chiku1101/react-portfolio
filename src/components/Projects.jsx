import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = ({ id }) => {
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
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="group"
          >
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-airier group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-airy font-normal">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-normal bg-gray-100 text-gray-700 tracking-airy"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ) : (
              <div className="border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-airier">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-airy font-normal">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-normal bg-gray-100 text-gray-700 tracking-airy"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
