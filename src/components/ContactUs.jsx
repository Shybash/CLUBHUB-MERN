

import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'
const ContactUs = () => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(query,suggestion);
      const response = await axios.post('https://clubhub-backend.vercel.app/api/StudentQuery', { query, suggestion });
      if (response.data.success) {
        setSubmitted(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setError('An error occurred while submitting the query.');
    }
  };

  return (
    <div>
      {submitted ? (
        <p>Query and suggestion submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="query">Query:</label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="suggestion">Suggestion to Solve:</label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ContactUs;
