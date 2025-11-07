import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock,
  Github,
  Linkedin,
  Youtube,
  Twitter
} from 'lucide-react';
import { CONTACT } from '../constants';

const Contact = ({ id }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const digitalSpaces = [
    { name: 'Bento', url: '#', icon: '🍱' },
    { name: 'Github', url: 'https://github.com/chiku1101', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chaitanya-sonar-622327262/', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'X', url: 'https://twitter.com', icon: <Twitter className="w-5 h-5" /> },
    { name: 'YouTube', url: 'https://youtube.com', icon: <Youtube className="w-5 h-5" /> },
  ];

  const profiles = [
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '💬' },
    { name: 'HackerRank', url: 'https://hackerrank.com', icon: 'H' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/sonar_1101', icon: '👨‍🍳' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/klu2300030974/', icon: '💻' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/chaitanyasonar', icon: '📊' },
  ];


  return (
    <section id={id} className="py-20 md:py-32 w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8 tracking-airier"
          >
          Get in Touch
          </motion.h2>

          {/* Decorative Line with Dot */}
          <motion.div
            variants={fadeIn}
            className="relative w-full mb-16"
          >
            <div className="h-px bg-gray-200 w-full"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
          </motion.div>

          {/* Four Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1: Let's Connect */}
            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="text-2xl font-normal text-gray-900 tracking-airier">Let's Connect</h3>
              <p className="text-base text-gray-600 leading-relaxed tracking-airy font-normal">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
              </p>
              
              {/* Spotify Section - Desktop only */}
              <div className="hidden md:block mt-16 md:mt-20 space-y-3">
                <h4 className="text-lg font-normal text-gray-900 tracking-airier">On Spotify</h4>
                <p className="text-sm text-gray-600 tracking-airy font-normal">
                  Music fuels my coding sessions. Here's what's been in my ears lately.
                </p>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-1 tracking-airy">Last Played</p>
                      <p className="text-sm font-semibold text-gray-900 mb-1">All The Stars (with SZA)</p>
                      <p className="text-xs text-gray-500 mb-1">Kendrick Lamar</p>
                      <p className="text-xs text-gray-400">48d ago</p>
                    </div>
                    <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.36.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Contact */}
            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="text-2xl font-normal text-gray-900 tracking-airier">Contact</h3>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="text-base text-gray-900 hover:text-gray-700 transition-colors tracking-airy font-normal"
                >
                  {CONTACT.email}
                </a>
              </div>
            </motion.div>

            {/* Column 3: Digital Spaces */}
            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="text-2xl font-normal text-gray-900 tracking-airier">Digital Spaces</h3>
              <ul className="space-y-3">
                {digitalSpaces.map((space, index) => (
                  <li key={index}>
                    <a
                      href={space.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base text-gray-900 hover:text-gray-700 transition-colors tracking-airy font-normal group"
                    >
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {typeof space.icon === 'string' ? space.icon : space.icon}
                      </span>
                      <span>{space.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Profiles */}
            <motion.div variants={fadeIn} className="space-y-6">
              <h3 className="text-2xl font-normal text-gray-900 tracking-airier">
                Profiles <span className="text-gray-600">&lt; /&gt;</span>
              </h3>
              <ul className="space-y-3 mb-8">
                {profiles.map((profile, index) => (
                  <li key={index}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base text-gray-900 hover:text-gray-700 transition-colors tracking-airy font-normal group"
                    >
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors w-5 h-5 flex items-center justify-center text-sm font-normal">
                        {profile.icon}
                      </span>
                      <span>{profile.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Location Section */}
              <div className="pt-12 md:pt-16 border-t border-gray-200">
                <h4 className="text-lg font-normal text-gray-900 mb-3 tracking-airier">Location</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-base text-gray-600 tracking-airy font-normal">
                      Vijayawada, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-base text-gray-600 tracking-airy font-normal">
                      {currentTime}
                    </span>
                  </div>
          </div>
          </div>
            </motion.div>
          </div>
          
          {/* Spotify Section - Mobile only (appears after Location) */}
          <motion.div variants={fadeIn} className="md:hidden mt-8 space-y-3">
            <h4 className="text-lg font-normal text-gray-900 tracking-airier">On Spotify</h4>
            <p className="text-sm text-gray-600 tracking-airy font-normal">
              Music fuels my coding sessions. Here's what's been in my ears lately.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1 tracking-airy">Last Played</p>
                  <p className="text-sm font-semibold text-gray-900 mb-1">All The Stars (with SZA)</p>
                  <p className="text-xs text-gray-500 mb-1">Kendrick Lamar</p>
                  <p className="text-xs text-gray-400">48d ago</p>
                </div>
                <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.36.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
          </div>
        </div>
      </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
