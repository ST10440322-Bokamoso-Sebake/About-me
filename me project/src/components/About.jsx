import React from 'react';
import { FiUser, FiHeart, FiTarget, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const aboutCards = [
    {
      icon: <FiUser />,
      title: 'Who I Am',
      description: 'A passionate Computer Science student with a love for creativity, technology, and animals. I believe in the power of combining different interests to create something unique.'
    },
    {
      icon: <FiBook />,
      title: 'My Studies',
      description: 'Currently pursuing Computer Science at Varsity College Midrand, where I\'m exploring programming, problem-solving, and the endless possibilities of technology.'
    },
    {
      icon: <FiHeart />,
      title: 'My Passions',
      description: 'I love crochet as a creative outlet, spending time with animals, and exploring how technology can enhance traditional crafts and hobbies.'
    },
    {
      icon: <FiTarget />,
      title: 'My Values',
      description: 'I value authenticity, continuous learning, creativity, and the importance of balancing work with personal interests and well-being.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the person behind the profile
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-main scroll-reveal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-text-card card">
              <h3 className="about-heading gradient-text">My Story</h3>
              <p className="about-paragraph">
                I am <strong>Bokamoso Sebake</strong>, a 20-year-old Computer Science student based in Midrand, South Africa. 
                I'm someone who finds joy in the intersection of technology and creativity, and I believe that the best 
                innovations come from combining different passions and perspectives.
              </p>
              <p className="about-paragraph">
                My journey has been shaped by a love for learning and creating. Whether I'm coding, working on a crochet project, 
                or spending time with animals, I approach everything with curiosity and dedication. I've learned that personal 
                growth comes from embracing all aspects of who you are, not just focusing on one area.
              </p>
              <p className="about-paragraph">
                As a student, I'm constantly exploring new technologies and concepts. I see Computer Science not just as a field 
                of study, but as a way of thinking that can be applied to solve problems in creative and innovative ways. This 
                mindset extends beyond the classroom and into everything I do.
              </p>
              <p className="about-paragraph">
                When I'm not studying or coding, you'll find me pursuing my hobbies, connecting with others who share similar 
                interests, or simply enjoying the simple pleasures in life. I believe that a well-rounded life makes you a 
                more interesting and capable person.
              </p>
            </div>
          </motion.div>

          <div className="about-cards grid-2">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className="about-card card scroll-reveal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="card-icon">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

