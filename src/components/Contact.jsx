import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; 

const Contact = () => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://clubhub-backend.vercel.app/api/StudentQuery', { query, suggestion });
      alert('Suggestion submitted successfully!');
      setQuery('');
      setSuggestion('');
    } catch (error) {
      alert('Error submitting suggestion. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="backgr">
      
    <div className="contact-card">
      <h2>Contact Us</h2>
      <p>Have a question or suggestion? We'd love to hear from you!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="query">Query:</label>
          <input type="text" id="query" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div>
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea id="suggestion" value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  
    </div>
  );
};

export default Contact;
