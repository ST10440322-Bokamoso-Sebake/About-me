import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'rainbow11272005@gmail.com',
      link: 'mailto:rainbow11272005@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone / WhatsApp',
      value: '079 320 0067',
      link: 'tel:+27793200067'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Midrand, South Africa',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FiInstagram />,
      name: 'Instagram',
      handle: '@bokamoso1127',
      link: 'https://www.instagram.com/bokamoso1127?igsh=aHA4dDkzem1tbHhu',
      color: '#E4405F'
    },
    {
      icon: <FaTiktok />,
      name: 'TikTok',
      handle: '@rainbow27ghost',
      link: 'https://www.tiktok.com/@rainbow27ghost?_r=1&_t=ZS-92hyWZQZRIO',
      color: '#000000'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      handle: 'Bokamoso Sebake',
      link: 'https://facebook.com/bokasyarnmarket',
      color: '#1877F2'
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      handle: '079 320 0067',
      link: 'https://wa.me/27793200067',
      color: '#25D366'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'd love to hear from you! Whether you want to chat, collaborate, or just say hello.
          </p>
        </motion.div>

        <motion.div
          className="contact-info scroll-reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="info-card card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 className="info-title gradient-text">Contact Information</h3>
            <p className="info-description">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="info-item"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4 className="info-item-title">{item.title}</h4>
                    <p className="info-item-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-handle">{social.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

