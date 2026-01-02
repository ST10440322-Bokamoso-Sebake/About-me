import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text gradient-text">Bokamoso Sebake</span>
          </div>

          <nav className="nav">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="sidebar-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          ></div>
          <div className="sidebar">
            <div className="sidebar-header">
              <button
                className="sidebar-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
              <button
                className="theme-toggle sidebar-theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
            </div>

            <nav className="sidebar-nav">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="sidebar-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

