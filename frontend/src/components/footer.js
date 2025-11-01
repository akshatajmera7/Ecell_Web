import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const initiativeItems = [
    'Launchpad',
    'Speakers Sessions',
    'Startup Spotlight',
    'Management Temptations',
    'Networking Arena',
  ];

  // Global site links (match App routes)
  const usefulLinks = [
    { label: 'Home', to: '/' },
    { label: 'Programs', to: '/program' },
    { label: 'Our Team', to: '/team' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <footer className="pt-12 bg-ecell-bg text-ecell-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Social */}
          <div>
            <div className="mb-6">
              <div className="text-xl text-elegant-header leading-tight" style={{fontWeight: 800}}>E-CELL</div>
              <div className="text-sm text-elegant-body opacity-80">BITS Pilani Hyderabad Campus</div>
            </div>

            <div className="text-sm mb-3 opacity-90">Get connected with us on social networks:</div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/e-cell-bphc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="hover:text-ecell-primary transition-colors text-ecell-text">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ecell_bphc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="hover:text-ecell-primary transition-colors text-ecell-text">
                <FaInstagram size={22} />
              </a>
              <a href="https://x.com/ecell_bphc" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" title="X (Twitter)" className="hover:text-ecell-primary transition-colors text-ecell-text">
                <FaTwitter size={22} />
              </a>
              <a href="https://www.facebook.com/groups/158307448076754/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="hover:text-ecell-primary transition-colors text-ecell-text">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          {/* Our Initiatives (col 1) */}
          <div>
            <h3 className="text-sm text-elegant-box mb-4 text-ecell-primary font-semibold">OUR INITIATIVES</h3>
            <ul className="space-y-2">
              {initiativeItems.slice(0, 6).map((item, idx) => (
                <li key={idx} className="opacity-90 hover:opacity-100 hover:text-ecell-primary transition-all">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm text-elegant-box mb-4 text-ecell-primary font-semibold">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label} className="opacity-90 hover:opacity-100 hover:text-ecell-primary transition-all">
                  {link.to.startsWith('http') ? (
                    <a href={link.to} target="_blank" rel="noopener noreferrer" title={link.label}>{link.label}</a>
                  ) : (
                    <Link to={link.to} aria-label={link.label} title={link.label}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm text-elegant-box mb-4 text-ecell-primary font-semibold">CONTACT</h3>
            <ul className="space-y-3 text-sm">
              <li className="opacity-90">
                <span>BITS Pilani, Hyderabad Campus,</span><br />
                <span>Hyderabad, Telangana 500078</span>
              </li>
              <li className="opacity-90 hover:text-ecell-primary transition-colors">
                <a href="mailto:ecell@hyderabad.bits-pilani.ac.in">ecell@hyderabad.bits-pilani.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 py-4 text-center text-sm text-ecell-primary">
          © 2025 Copyright: E-Cell BITS Pilani Hyderabad
        </div>
      </div>
    </footer>
  );
};

export default Footer;