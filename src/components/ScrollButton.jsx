import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollIndicator = () => {
  const [showScrollText, setShowScrollText] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollText(window.scrollY <= 50);
      setShowBackToTop(window.scrollY > 300);

      // Show the animation line when scrolling down and hide when scrolling up
      if (window.scrollY > 50) {
        setAnimateLine(false);  // Hide animation line when scrolling down
      } else {
        setAnimateLine(true);   // Show animation line when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially to check visibility on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className="fixed bottom-24 right-4 flex flex-col items-center z-50"
      role="complementary"
      aria-label="Scroll indicators"
    >
      {showScrollText && (
        <>
          <div 
            id="scrollText"
            className="text-blue-600 text-xl tracking-[0.25em] font-light mb-2 z-10 animate-pulseScroll" // Animation applied only to the text
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              letterSpacing: '0.25em',
              transform: 'rotate(180deg)'
            }}
            aria-hidden="true"
          >
            scroll
          </div>
        </>
      )}

      <div className="relative flex items-center justify-center">
        {/* The Animated Line */}
        {animateLine && (
          <div 
            className="absolute top-0 w-[2px] bg-white z-10 animate-pulseScrollLine" // Applying the pulse animation to the line here
            style={{
              transitionDuration: '300ms',
            }}
          ></div>
        )}

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="mt-4 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
