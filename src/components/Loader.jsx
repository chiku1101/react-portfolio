import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const fullText = "Chaitanya Sonar";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Typewriter effect
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  useEffect(() => {
    // Complete loading after typewriter and animation
    const timer = setTimeout(() => {
      setShowLoader(false);
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Animated dots
  const dots = [0, 1, 2];

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center justify-center space-y-12">
            {/* Typewriter text with animated cursor */}
            <div className="flex items-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 tracking-airier"
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block w-0.5 h-12 md:h-16 bg-gray-900 ml-1"
                />
              </motion.h1>
            </div>

            {/* Unique animated dots pattern */}
            <div className="flex items-center space-x-3">
              {dots.map((dot, index) => (
                <motion.div
                  key={dot}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-gray-900 rounded-full"
                />
              ))}
            </div>

            {/* Subtle tagline reveal */}
            {charIndex >= fullText.length && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-gray-400 tracking-airy font-normal"
              >
                Loading...
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
