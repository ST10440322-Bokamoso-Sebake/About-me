import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/themes.css';
import './styles/animations.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      // Clean up any observed elements
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Interests />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

