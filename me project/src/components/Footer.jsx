import React from 'react';
import { FiHeart, FiInstagram, FiMail } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FiInstagram />, link: 'https://www.instagram.com/bokamoso1127?igsh=aHA4dDkzem1tbHhu', label: 'Instagram' },
    { icon: <FaTiktok />, link: 'https://www.tiktok.com/@rainbow27ghost?_r=1&_t=ZS-92hyWZQZRIO', label: 'TikTok' },
    { icon: <FaFacebook />, link: 'https://facebook.com/bokasyarnmarket', label: 'Facebook' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/27793200067', label: 'WhatsApp' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo gradient-text">Bokamoso Sebake</h3>
            <p className="footer-tagline">
              Computer Science Student | Creative Enthusiast | Animal Lover
            </p>
            <p className="footer-description">
              A passionate individual exploring the intersection of technology, creativity, and personal growth.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <FiMail className="footer-icon" />
                <a href="mailto:rainbow11272005@gmail.com" className="footer-link">
                  rainbow11272005@gmail.com
                </a>
              </li>
              <li>
                <FaWhatsapp className="footer-icon" />
                <a href="tel:+27793200067" className="footer-link">
                  079 320 0067
                </a>
              </li>
            </ul>
            <div className="footer-cta">
              <p className="footer-cta-text">Want to connect?</p>
              <a href="#contact" className="footer-cta-button">
                Let's Chat
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Bokamoso Sebake. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <FiHeart className="heart-icon" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

