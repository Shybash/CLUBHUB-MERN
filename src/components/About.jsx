// About.js

import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="containers">
        <h1 className="display-4">About ClubHub</h1>
        <p className="lead">Welcome to ClubHub, your go-to platform for finding and joining clubs and organizations at your school!</p>
        <p>Our mission is to connect students with clubs that match their interests and passions, providing opportunities for personal growth and community involvement.</p>
        <p>With ClubHub, you can:</p>
        <ul>
          <li>Discover a wide range of clubs covering various interests such as sports, arts, academic, cultural, and more.</li>
          <li>Learn about each club's goals, activities, and upcoming events.</li>
          <li>Connect with like-minded students and engage in collaborative projects and initiatives.</li>
          <li>Join clubs with a simple click and start participating in their events and meetings.</li>
        </ul>
        <p>ClubHub is designed to foster a vibrant and inclusive campus community where students can explore their interests, develop leadership skills, and make lasting connections.</p>
        <p>Whether you're a freshman looking to get involved, a senior wanting to try something new, or anything in between, ClubHub has something for you!</p>
        <p>Joining clubs not only enhances your college experience but also helps you develop valuable skills such as teamwork, communication, and time management.</p>
        <p>Ready to embark on your journey with ClubHub? Sign up today and start exploring the vibrant world of student clubs!</p>
        <p>For any inquiries or support, please contact us at <a href="mailto:support@clubhub.com">support@clubhub.com</a>.</p>
      </div>
    </div>
  );
}

export default About;
