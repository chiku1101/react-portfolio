import React from "react";
import { motion, useInView } from "framer-motion";

const About = ({ id }) => {
  const titleRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const titleInView = useInView(titleRef, { amount: 0.5, once: true });
  const buttonInView = useInView(buttonRef, { amount: 0.5, once: true });

  const aboutPoints = [
    {
      icon: "👋",
      text: "Hey there! I'm Chaitanya Sonar, a passionate Full-Stack Developer skilled in React, Next.js, Node.js, MongoDB, PostgreSQL, and more. I love turning ideas into real-world applications and exploring new technologies."
    },
    {
      icon: "🚀",
      title: "My Expertise & Achievements",
      text: "Skilled in React, Next.js, Node.js, MongoDB, PostgreSQL, Redis, Blockchain, and Tailwind CSS. Currently interning at TwiLearn, gaining hands-on experience in modern development."
    },
    {
      icon: "❤️",
      title: "Why I Love What I Do",
      text: "Technology is more than just code for me—it's about problem-solving, innovation, and making an impact. I love building efficient web applications and exploring blockchain solutions."
    },
    {
      icon: "🔍",
      title: "How I Work",
      text: "I believe in writing clean, scalable, and maintainable code. My workflow usually involves:\n1️⃣ Understanding the problem\n2️⃣ Planning architecture & UX\n3️⃣ Building with creativity & best practices\n4️⃣ Testing, optimizing, and refining for performance"
    },
    {
      icon: "💫",
      title: "Let's Connect!",
      text: "I'm open to new opportunities, collaborations, and tech discussions. Feel free to reach out via email, LinkedIn, or GitHub!"
    }
  ];

  return (
    <div id={id} className="bg-black flex flex-col items-center justify-center min-h-screen px-6 py-16 md:px-12">
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: titleInView ? 1 : 0,
          y: titleInView ? 0 : 50,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 text-center"
      >
        About Me
      </motion.h1>

      <div className="w-full max-w-3xl space-y-8 mb-16">
        {aboutPoints.map((point, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { amount: 0.3, once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : (index % 2 === 0 ? -50 : 50)
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2, 
                ease: "easeOut"
              }}
              className="text-lg leading-relaxed text-gray-300 rounded-xl p-4 sm:p-6 bg-black hover:bg-gray-900 transition-all border border-gray-800"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.span 
                  className="text-2xl"
                  animate={{
                    scale: isInView ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    times: [0, 0.5, 1]
                  }}
                >
                  {point.icon}
                </motion.span>
                <div className="space-y-2">
                  {point.title && (
                    <h3 className="font-semibold text-white">{point.title}</h3>
                  )}
                  <p className="whitespace-pre-line">{point.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: buttonInView ? 1 : 0,
            y: buttonInView ? 0 : 30
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 mb-24 w-full flex justify-center" 
        >
          <motion.a
            href="/Chaitanya_Sonar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-black px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white transition-all hover:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl group-hover:translate-x-1 transition-transform">📄</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              View Resume
            </span>
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-lg transition-all group-hover:opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
