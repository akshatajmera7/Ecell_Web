import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Footer Text */}
        <p className="text-lg font-medium opacity-80">Follow us on social media</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-purple-500 transition-colors duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-purple-500 transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-purple-500 transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-purple-500 transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-60 mt-4">&copy; 2025 E-Cell BITS Pilani Hyderabad Campus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

