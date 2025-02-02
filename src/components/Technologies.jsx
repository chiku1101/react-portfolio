import React, { useRef } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiDjango, SiTailwindcss, SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

const Technologies = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: false });

  const icons = [
    { Icon: RiReactjsLine, color: "text-cyan-400", bgColor: "bg-cyan-400", name: "React", link: "https://react.dev/" },
    { Icon: TbBrandNextjs, color: "text-white", bgColor: "bg-white", name: "Next.js", link: "https://nextjs.org/" },
    { Icon: SiMongodb, color: "text-green-500", bgColor: "bg-green-500", name: "MongoDB", link: "https://www.mongodb.com/" },
    { Icon: SiExpress, color: "text-gray-400", bgColor: "bg-gray-400", name: "Express.js", link: "https://expressjs.com/" },
    { Icon: FaNodeJs, color: "text-orange-400", bgColor: "bg-orange-400", name: "Node.js", link: "https://nodejs.org/" },
    { Icon: BiLogoPostgresql, color: "text-sky-700", bgColor: "bg-sky-700", name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { Icon: SiDjango, color: "text-green-400", bgColor: "bg-green-400", name: "Django", link: "https://www.djangoproject.com/" },
    { Icon: SiPython, color: "text-yellow-400", bgColor: "bg-yellow-400", name: "Python", link: "https://www.python.org/" },
    { Icon: SiTailwindcss, color: "text-blue-500", bgColor: "bg-blue-500", name: "Tailwind CSS", link: "https://tailwindcss.com/" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="h-screen bg-gray-950 flex flex-col justify-center py-8">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={isTitleInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
        </motion.h1>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {icons.map(({ Icon, color, bgColor, name, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="relative group">
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-xl bg-gray-900 p-8 h-48 flex flex-col items-center justify-center border border-gray-800 transition-all duration-300 group-hover:border-gray-700 group-hover:shadow-lg"
              >
                <motion.div animate={isInView ? { y: [0, -8, 0] } : {}} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}>
                  <Icon className={`text-8xl ${color} transition-all duration-300 group-hover:scale-110`} />
                </motion.div>
                <motion.span className={`mt-6 text-base font-medium ${color}`} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  {name}
                </motion.span>
                <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 ${bgColor}`} />
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
