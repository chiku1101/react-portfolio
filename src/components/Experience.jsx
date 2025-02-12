import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const sectionRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView && scrollDirection === 'down') {
      setHasAnimated(true);
    }
  }, [isInView, scrollDirection]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, scrollDirection === 'down' ? 100 : 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const titleLetters = "Experience".split("");

  const titleCharVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: scrollDirection === 'down' ? i * 0.1 : 0, duration: 0.5, ease: "easeOut" }
    }),
    persistVisible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: scrollDirection === 'down' ? 0.4 : 0, delayChildren: scrollDirection === 'down' ? 1.2 : 0 } },
    persistVisible: { opacity: 1 }
  };

  const lineVariants = {
    hidden: { height: '0%' },
    visible: { height: '100%', transition: { duration: scrollDirection === 'down' ? 1.2 : 0, ease: "easeInOut" } },
    persistVisible: { height: '100%' }
  };

  const getItemVariants = (isLeft) => ({
    hidden: { opacity: 0, x: scrollDirection === 'down' ? (isLeft ? -100 : 100) : 0, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12, duration: scrollDirection === 'down' ? 0.6 : 0 } },
    persistVisible: { opacity: 1, x: 0, scale: 1 }
  });

  const experiences = [
    {
      role: "Frontend Developer",
      period: "2024",
      description: "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      role: "Backend Developer",
      period: "2024",
      description: "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
      skills: ["Node.js", "MongoDB", "PostgreSQL"]
    },
    {
      role: "Full Stack Developer",
      period: "2024 - Present",
      description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
      skills: ["JavaScript", "React.js", "MongoDB"]
    },
    {
      role: "Web Developer Intern at TwiLearn",
      period: "December 2024 - Present",
      description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
      skills: ["JavaScript", "React.js", "Next.js", "MongoDB"]
    }
  ];

  const getAnimationState = () => {
    if (hasAnimated && scrollDirection === 'up') return "persistVisible";
    if (isInView && scrollDirection === 'down') return "visible";
    return "hidden";
  };

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto bg-black overflow-hidden"
    >
      <motion.div style={{ opacity }} className="text-center mb-24 mt-16 relative z-10">
        <motion.div 
          className="flex justify-center items-center gap-1 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text overflow-hidden"
          initial="hidden"
          animate={getAnimationState()}
        >
          {titleLetters.map((letter, index) => (
            <motion.span key={index} custom={index} variants={titleCharVariants} className="inline-block hover:text-blue-500 transition-colors duration-300">
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="relative mx-auto w-full max-w-6xl" variants={containerVariants} initial="hidden" animate={getAnimationState()}>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-800">
          <motion.div className="w-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600" style={{ originY: 0 }} variants={lineVariants} initial="hidden" animate={getAnimationState()} />
        </div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              variants={getItemVariants(isLeft)}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`relative mb-16 w-full md:w-[calc(50%-40px)] bg-[#171923] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isLeft ? 'md:mr-auto' : 'md:ml-auto'
              } border border-gray-800`}
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={hasAnimated ? { scale: 1 } : getAnimationState()}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: scrollDirection === 'down' ? 0.6 + index * 0.4 : 0 }}
                className="absolute top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-md shadow-blue-500/50"
                style={{ [isLeft ? 'right' : 'left']: '-42px', transform: isLeft ? 'translateX(50%)' : 'translateX(-50%)' }}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-gray-400">{exp.period}</span>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Experience;
