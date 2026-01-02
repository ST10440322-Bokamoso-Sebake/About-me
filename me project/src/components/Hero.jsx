import React, { useEffect, useRef } from 'react';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Hero.css';

// Import profile photo
import profilePhotoImage from '../assets/images/hero-image2.jpg';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Welcome to my personal space
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Bokamoso Sebake</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Science Student | Creative Enthusiast | Animal Lover
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I'm a passionate individual who loves exploring the intersection of technology and creativity. 
            When I'm not coding or studying, you'll find me pursuing my hobbies, spending time with animals, 
            or working on personal projects that fuel my curiosity.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn-primary" onClick={scrollToContact} aria-label="Navigate to contact section">
              <FiMail /> Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="stat-item">
              <h3 className="stat-number gradient-text">20</h3>
              <p className="stat-label">Years Old</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number gradient-text">Midrand</h3>
              <p className="stat-label">South Africa</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number gradient-text">CS</h3>
              <p className="stat-label">Student</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
          <div className="hero-avatar">
            <img 
              src={profilePhotoImage} 
              alt="Bokamoso Sebake" 
              className="profile-photo"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <FiArrowDown className="scroll-icon animate-bounce" />
      </motion.button>

      <div className="floating-elements">
        <div className="float-element element-1">✨</div>
        <div className="float-element element-2">💻</div>
        <div className="float-element element-3">🎨</div>
        <div className="float-element element-4">🐾</div>
      </div>
    </section>
  );
};

export default Hero;

