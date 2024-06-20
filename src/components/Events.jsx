import React, { useState } from 'react';
import axios from 'axios';
import './Events.css';

const Events = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    time: '',
    ampm: '',
    location: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://clubhub-backend.vercel.app/api/Events', event);
      setMessage('Event added successfully');
      setEvent({
        name: '',
        date: '',
        time: '',
        ampm: '',
        location: '',
        description: ''
      });
      setTimeout(() => {
        setMessage('');
      }, 2000); 
    } catch (error) {
      console.error('Error adding event: ', error);
      setMessage('Error adding event');
    }
  };

  return (
    <div className="event">
      <div className="event-card">
        <h1>Add Events</h1>
        <form className="events-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
          <input type="date" name="date" value={event.date} onChange={handleChange} required />
          <input type="time" name="time" value={event.time} onChange={handleChange} required />
          <select name="ampm" value={event.ampm} onChange={handleChange} required>
            <option value="">AM/PM</option>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <input type="text" name="location" value={event.location} onChange={handleChange} placeholder="Location" required />
          <textarea name="description" value={event.description} onChange={handleChange} placeholder="Description" required />
          <button type="submit">Add Event</button>
          {message && <p className="messages">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Events;
