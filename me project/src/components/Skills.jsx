import React from 'react';
import { FiCode, FiUsers, FiPenTool, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Technical Skills',
      color: '#8B5CF6',
      skills: [
        'Programming',
        'Problem Solving',
        'Web Development',
        'Data Structures',
        'Algorithms'
      ]
    },
    {
      icon: <FiPenTool />,
      title: 'Creative Skills',
      color: '#A78BFA',
      skills: [
        'Crochet Design',
        'Creative Thinking',
        'Handmade Crafts',
        'Pattern Design',
        'Artistic Expression'
      ]
    },
    {
      icon: <FiUsers />,
      title: 'Personal Skills',
      color: '#C084FC',
      skills: [
        'Communication',
        'Time Management',
        'Adaptability',
        'Self-Motivation',
        'Learning Agility'
      ]
    },
    {
      icon: <FiTrendingUp />,
      title: 'Life Skills',
      color: '#DDD6FE',
      skills: [
        'Organization',
        'Patience',
        'Attention to Detail',
        'Balance',
        'Curiosity'
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Abilities</h2>
          <p className="section-subtitle">
            A mix of technical knowledge and personal strengths
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category card scroll-reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

