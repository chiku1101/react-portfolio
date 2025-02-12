import React from 'react';

const ScrollingLanguages = () => {
  // Define different categories of programming languages by difficulty
  const beginnerLangs = ['JavaScript', 'Java', 'SQL', 'Linux', 'Python'];
  const intermediateLangs = ['Git', 'Compass', 'Tailwind CSS'];
  const advancedLangs = ['React', 'Node.js', 'MongoDB', 'Express', 'Django'];

  // Define colors for each language
  const langColors = {
    JavaScript: 'text-yellow-400',
    Java: 'text-blue-400',
    SQL: 'text-purple-400',
    Linux: 'text-teal-400',
    Python: 'text-green-400',
    Git: 'text-red-400',
    Compass: 'text-orange-400',
    'Tailwind CSS': 'text-teal-400',
    React: 'text-cyan-400',
    'Node.js': 'text-orange-400',
    MongoDB: 'text-emerald-400',
    Express: 'text-indigo-400',
    Django: 'text-pink-400'
  };

  // Generate repeated text with different colors
  const generateRepeatedText = (arr, count) => {
    const repeatedArray = Array(count).fill(arr).flat();
    return repeatedArray;
  };

  return (
    <div className="w-full overflow-hidden bg-black py-4 md:py-8">
      <div className="flex flex-col gap-2 md:gap-4">
        {/* Beginner Languages - Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(beginnerLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(beginnerLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Intermediate Languages - Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(intermediateLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(intermediateLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Advanced Languages - Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(advancedLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1 md:py-2">
            {generateRepeatedText(advancedLangs, 5).map((text, index) => (
              <span key={index} className={`mx-2 md:mx-4 text-2xl md:text-4xl font-bold ${langColors[text]}`}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingLanguages;