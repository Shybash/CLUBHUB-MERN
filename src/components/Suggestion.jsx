import React, { useState } from 'react';
import axios from 'axios';

const Suggestion = () => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://clubhub-backend.vercel.app/api/suggestions', { query, suggestion });
      alert('Suggestion submitted successfully!');
      // Clear form fields after successful submission
      setQuery('');
      setSuggestion('');
    } catch (error) {
      alert('Error submitting suggestion. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Suggestion Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Query:</label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div>
          <label>Suggestion:</label>
          <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Suggestion;
