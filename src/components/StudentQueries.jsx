import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentQueries.css'; 

const StudentQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('https://clubhub-backend.vercel.app/api/GetQuery'); // Using CORS proxy
        setQueries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student queries:', error);
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://clubhub-backend.vercel.app/api/deleteQuery/${id}`);
      setQueries(queries.filter(query => query._id !== id));
    } catch (error) {
      console.error('Error deleting student query:', error);
    }
  };

  return (
    <div className="cont">
    <div className="student-queries-container">
      <h2 className="student-queries-title">Student Queries</h2>
      {loading ? (
        <p className="loading-message">Loading queries...</p>
      ) : (
        <ul className="query-list">
          {queries.map((query, index) => (
            <li key={index} className="query-item">
              <p className="query-text">Query: {query.query}</p>
              <p className="suggestion-text">Suggestion: {query.suggestion}</p>
              <button onClick={() => handleDelete(query._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default StudentQueries;
