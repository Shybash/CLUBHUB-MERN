// Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the corresponding CSS file
import { faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/shybash.shaik.35/', icon: faFacebook },
  { name: 'Twitter', url: 'https://twitter.com/home', icon: faTwitter },
  { name: 'Instagram', url: 'https://www.instagram.com/i_m_shybashshaik/', icon: faInstagram },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/shybash-shaik-5769b323b/', icon: faLinkedin },
  { name: 'GitHub', url: 'https://github.com/Shybash', icon: faGithub } // Add your GitHub URL here
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="foot">
      <footer className="footer">
        <h1 className="clubhubb">CLUB HUB</h1>
        <div className="footer-content">
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={link.icon} />
                    <span>{link.name}</span> 
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="useful-links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="/suggestion">Contact Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:clubhub@gmail.com">clubhub@gmail.com</a></li>
              <li>Phone: <a href="tel:9191919191">9191919191</a></li>
              <li>Address: 3-5-***, Narayanaguda, Hyderabad, Telangana</li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; {currentYear} CLUBHUB. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
