import React from 'react';
import { FiBook, FiCode, FiHeart, FiTarget, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Journey.css';

const Journey = () => {
  const timeline = [
    {
      year: '2019',
      title: 'A Creative Beginning',
      description: 'Started exploring my creative side through crochet, discovering a passion for handmade crafts and creative expression.',
      icon: <FiHeart />,
      color: '#8B5CF6'
    },
    {
      year: '2020-2022',
      title: 'Growth & Learning',
      description: 'Continued developing my creative skills while exploring technology and discovering my interest in Computer Science.',
      icon: <FiBook />,
      color: '#A78BFA'
    },
    {
      year: '2023',
      title: 'Academic Journey',
      description: 'Enrolled in Computer Science at Varsity College Midrand, beginning my formal education in technology and programming.',
      icon: <FiCode />,
      color: '#C084FC'
    },
    {
      year: '2024',
      title: 'Balancing Act',
      description: 'Successfully balancing my studies with personal interests, learning the importance of maintaining a well-rounded life.',
      icon: <FiTarget />,
      color: '#DDD6FE'
    },
    {
      year: 'Present',
      title: 'Continuous Growth',
      description: 'Continuing to learn, grow, and explore new opportunities while staying true to my values and interests.',
      icon: <FiZap />,
      color: '#8B5CF6'
    }
  ];

  return (
    <section id="journey" className="journey section">
      <div className="container">
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A timeline of personal growth and experiences
          </p>
        </motion.div>

        <div className="timeline-container">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item scroll-reveal"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div 
                  className="timeline-icon"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
                >
                  {item.icon}
                </div>
                <div className="timeline-details">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
              {index < timeline.length - 1 && <div className="timeline-line"></div>}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="journey-quote scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="quote-card card">
            <div className="quote-icon">"</div>
            <blockquote className="quote-text">
              Every step in my journey has taught me something valuable. I believe that personal growth 
              comes from embracing all experiences - both successes and challenges - and using them to 
              become a better version of myself.
            </blockquote>
            <p className="quote-author">— Bokamoso Sebake</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;

