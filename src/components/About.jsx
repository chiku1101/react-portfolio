import React from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const textRef = React.useRef(null);
  const textInView = useInView(textRef, { amount: 0.3, once: false });

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
    <div className="bg-gray-950 flex flex-col items-center justify-center min-h-screen px-6 py-16 md:px-12">
      <motion.h1
        animate={{
          opacity: textInView ? 1 : 0,
          y: textInView ? 0 : 50,  // Start from below and slide into view
        }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 text-center"
      >
        About Gandu
      </motion.h1>

      <motion.div
        ref={textRef}
        className="w-full max-w-3xl space-y-6"
      >
        {aboutPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start from below with fade
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }} // Slide up into view with fade
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-lg leading-relaxed text-gray-300 rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900/80 transition-all border border-gray-800"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{point.icon}</span>
              <div className="space-y-2">
                {point.title && (
                  <h3 className="font-semibold text-white">{point.title}</h3>
                )}
                <p className="whitespace-pre-line">{point.text}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start from below with fade
          animate={{ opacity: 1, y: 0 }} // Slide up into view with fade
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="/Chaitanya_Sonar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 md:px-8 py-3 md:py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800"
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
      </motion.div>
    </div>
  );
};

export default About;
