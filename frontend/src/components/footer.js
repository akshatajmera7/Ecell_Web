import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section - Branding */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/navbarlogo.png" alt="ECell Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold font-syne tracking-tighter">E-CELL</h2>
          </div>
          <p className="text-gray-400 font-manrope text-sm leading-relaxed">
            Entrepreneurship Cell, BITS Pilani Hyderabad Campus is a student-run organization dedicated to fostering the spirit of entrepreneurship in the community.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} href="https://www.facebook.com/ecellbphc/" />
            <SocialIcon icon={<FaTwitter />} href="https://twitter.com/ecellbphc" />
            <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/ecell_bphc/" />
            <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/company/e-cell-bphc/" />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold">Quick Links</h3>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/team">Team</FooterLink>
            <FooterLink href="/program">Programs</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold">Legal</h3>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold">Contact</h3>
          <p className="text-gray-400 font-manrope text-sm">BITS Pilani Hyderabad Campus<br />Jawahar Nagar, Shameerpet<br />Hyderabad, Telangana 500078</p>
          <p className="text-gray-400 font-manrope text-sm">ecell@hyderabad.bits-pilani.ac.in</p>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-xs font-manrope">
        &copy; {new Date().getFullYear()} E-Cell BITS Pilani Hyderabad Campus. All rights reserved.
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-sm font-manrope text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;