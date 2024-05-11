// EventList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventList.css'; // Import your CSS file for styling

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://clubhub-backend.vercel.app/api/Events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.title}</h3>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Time: {event.time}</p>
          <p>AM/PM: {event.ampm}</p>
          <p>Venue: {event.venue}</p>
          <p>Description: {event.description}</p>
          {/* Display all fields from the event model */}
        </div>
      ))}
    </div>
  );
};

export default EventList;
