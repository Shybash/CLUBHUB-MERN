import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faqs">
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        <li className="faq-item">
          <div className="question">
            <span className="dot"></span>
            <h3>What is ClubHub?</h3>
          </div>
          <p>
            A: ClubHub is a dynamic platform designed to revolutionize the way
            clubs and organizations manage their operations.
          </p>
        </li>
        <li className="faq-item">
          <div className="question">
            <span className="dot"></span>
            <h3>What are the key features of ClubHub?</h3>
          </div>
          <p>
            A: Key features include membership management, event planning,
            communication tools, resource allocation, and financial tracking.
          </p>
        </li>
        <li className="faq-item">
          <div className="question">
            <span className="dot"></span>
            <h3>How can ClubHub benefit my club or organization?</h3>
          </div>
          <p>
            A: ClubHub simplifies administrative tasks, enhances
            communication, and fosters community engagement, allowing clubs to
            thrive.
          </p>
        </li>
        <li className="faq-item">
          <div className="question">
            <span className="dot"></span>
            <h3>Is ClubHub user-friendly?</h3>
          </div>
          <p>
            A: Yes, ClubHub offers intuitive interfaces accessible via web
            browsers or mobile applications, catering to diverse needs.
          </p>
        </li>
        <li className="faq-item">
          <div className="question">
            <span className="dot"></span>
            <h3>How do I get started with ClubHub?</h3>
          </div>
          <p>
            A: To get started, simply sign up for an account and explore the
            features tailored to your club or organization's needs.
          </p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Faq;
