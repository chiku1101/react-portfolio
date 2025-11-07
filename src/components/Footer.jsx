import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-base text-gray-500 tracking-airy font-normal">
            © {new Date().getFullYear()} Chaitanya Sonar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
