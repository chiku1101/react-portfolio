import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const projectVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    y: index % 2 === 0 ? -100 : 100,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Title Animation */}
      <motion.h1
        className="my-20 text-center text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={titleVariants}
      >
        Projects
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl border border-neutral-700 
              bg-gradient-to-b from-black/40 to-black/90 p-6 backdrop-blur-lg shadow-2xl 
              hover:scale-105 hover:shadow-xl group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={projectVariants}
            custom={index}
          >
            {/* Image Section */}
            <div className="relative w-full overflow-hidden rounded-lg border border-neutral-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <h6 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h6>
            <p className="mt-2 text-neutral-400">{project.description}</p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-orange-500 
                    transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
