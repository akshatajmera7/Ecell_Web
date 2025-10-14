import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        {/* Footer Text */}
        <p className="text-lg font-medium opacity-80" style={{ color: '#F5EDE4' }}>Follow us on social media</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/groups/158307448076754/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors duration-300"
            style={{ color: '#F5EDE4' }}
            onMouseEnter={(e) => e.target.style.color = '#FD8916'}
            onMouseLeave={(e) => e.target.style.color = '#F5EDE4'}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/ecell_bphc?t=1KAgGwoLWyXLe5-li71adA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors duration-300"
            style={{ color: '#F5EDE4' }}
            onMouseEnter={(e) => e.target.style.color = '#FD8916'}
            onMouseLeave={(e) => e.target.style.color = '#F5EDE4'}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/ecell_bphc?igsh=MXI5OGhld2lwMzMzNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors duration-300"
            style={{ color: '#F5EDE4' }}
            onMouseEnter={(e) => e.target.style.color = '#FD8916'}
            onMouseLeave={(e) => e.target.style.color = '#F5EDE4'}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/e-cell-bphc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors duration-300"
            style={{ color: '#F5EDE4' }}
            onMouseEnter={(e) => e.target.style.color = '#FD8916'}
            onMouseLeave={(e) => e.target.style.color = '#F5EDE4'}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-60 mt-4" style={{ color: '#F5EDE4' }}>&copy; 2025 E-Cell BITS Pilani Hyderabad Campus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
