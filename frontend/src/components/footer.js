import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const LFooter = () => {
  const initiativeItems = [
    'Launchpad',
    'Speakers Sessions',
    'Startup Spotlight',
    'Management Temptations',
    'Networking Arena',
  ];

  const usefulLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '#' },
    { label: 'E-Cell Blog', to: '#' },
    { label: 'Gallery', to: '#' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
  <footer className="pt-12" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Social */}
          <div>
            <div className="mb-6">
              <div className="text-xl font-extrabold leading-tight">E-CELL</div>
              <div className="text-sm opacity-80">BITS Pilani Hyderabad Campus</div>
            </div>

            <div className="text-sm mb-3 opacity-90">Get connected with us on social networks:</div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/e-cell-bphc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-90" style={{ color: '#F5EDE4' }}>
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ecell_bphc?igsh=MXI5OGhld2lwMzMzNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-90" style={{ color: '#F5EDE4' }}>
                <FaInstagram size={22} />
              </a>
              <a href="https://x.com/ecell_bphc?t=1KAgGwoLWyXLe5-li71adA&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:opacity-90" style={{ color: '#F5EDE4' }}>
                <FaTwitter size={22} />
              </a>
              <a href="https://www.facebook.com/groups/158307448076754/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-90" style={{ color: '#F5EDE4' }}>
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          {/* Our Initiatives (col 1) */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: '#E2C07C' }}>OUR INITIATIVES</h3>
            <ul className="space-y-2">
              {initiativeItems.slice(0, 6).map((item, idx) => (
                <li key={idx} className="opacity-90 hover:opacity-100 transition-opacity">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: '#E2C07C' }}>USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label} className="opacity-90 hover:opacity-100 transition-opacity">
                  {link.to.startsWith('http') ? (
                    <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ) : (
                    <Link to={link.to}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-4" style={{ color: '#E2C07C' }}>CONTACT</h3>
            <ul className="space-y-3 text-sm">
              <li className="opacity-90">
                <span>BITS Pilani, Hyderabad Campus,</span><br />
                <span>Hyderabad, Telangana 500078</span>
              </li>
              <li className="opacity-90">
                <a href="mailto:ecell@hyderabad.bits-pilani.ac.in">ecell@hyderabad.bits-pilani.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 py-4 text-center text-sm" style={{ color: '#E2C07C' }}>
          © 2025 Copyright: E-Cell BITS Pilani Hyderabad
        </div>
      </div>
    </footer>
  );
};

export default LFooter;