import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Fetch student queries from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://clubhub-backend.vercel.app/api/getQuery');
        setQueries(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Student Queries</h2>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>
            <strong>Title:</strong> {query.title}<br />
            <strong>Query:</strong> {query.query}<br />
            <strong>Suggestion to Solve:</strong> {query.suggestion}<br />
            <strong>Date:</strong> {new Date(query.createdAt).toLocaleString()}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentQueries;
