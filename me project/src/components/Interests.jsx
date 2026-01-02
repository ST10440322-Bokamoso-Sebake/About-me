import React from 'react';
import { FiCode, FiHeart, FiCamera, FiMusic, FiBookOpen, FiCoffee } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      icon: <FiCode />,
      title: 'Programming',
      description: 'I love exploring new programming languages and building projects that solve real problems.',
      color: '#8B5CF6'
    },
    {
      icon: <FiHeart />,
      title: 'Crochet',
      description: 'A creative hobby that allows me to make beautiful handmade items and express my artistic side.',
      color: '#A78BFA'
    },
    {
      icon: <FiCamera />,
      title: 'Photography',
      description: 'Capturing moments and finding beauty in everyday life through the lens of a camera.',
      color: '#C084FC'
    },
    {
      icon: <FiMusic />,
      title: 'Music',
      description: 'Music is a big part of my life - I enjoy discovering new artists and genres that inspire me.',
      color: '#DDD6FE'
    },
    {
      icon: <FiBookOpen />,
      title: 'Reading',
      description: 'I love reading books about technology, personal development, and creative pursuits.',
      color: '#8B5CF6'
    },
    {
      icon: <FiCoffee />,
      title: 'Coffee & Cafés',
      description: 'Enjoying a good cup of coffee while working or studying is one of my favorite simple pleasures.',
      color: '#A78BFA'
    }
  ];

  const personalFacts = [
    'Animal lover - I have a soft spot for all kinds of animals',
    'Always curious - I love learning about new topics and ideas',
    'Creative problem solver - I enjoy finding unique solutions',
    'Balance seeker - I believe in maintaining a healthy work-life balance'
  ];

  return (
    <section id="interests" className="interests section">
      <div className="container">
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Interests & Hobbies</h2>
          <p className="section-subtitle">
            The things that make me who I am
          </p>
        </motion.div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="interest-card card scroll-reveal"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="interest-icon"
                style={{ background: `linear-gradient(135deg, ${interest.color}, ${interest.color}dd)` }}
              >
                {interest.icon}
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="personal-facts scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="facts-card card">
            <h3 className="facts-title gradient-text">A Few Things About Me</h3>
            <ul className="facts-list">
              {personalFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  className="fact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="fact-icon">✨</span>
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;

