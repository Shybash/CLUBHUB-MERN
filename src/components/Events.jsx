import React, { useState } from 'react';
import axios from 'axios';
import './Events.css';

const EventForm = () => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    time: '',
    ampm: '', // Add state for ampm
    venue: '',
    description: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false });
    try {
      await axios.post('https://clubhub-backend.vercel.app/api/Events', event);
      setFormStatus({ loading: false, success: true });
      setEvent({
        title: '',
        date: '',
        time: '',
        ampm: '', // Reset ampm field
        venue: '',
        description: ''
      });
      console.log('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
    } finally {
      setFormStatus({ ...formStatus, loading: false });
    }
  };

  return (
    <div className="events">
      <form className="event-form" onSubmit={handleSubmit}>
        <h1>Add Events</h1>
        <input type="text" name="title" value={event.title} onChange={handleChange} placeholder="Event Title" required />
        <input type="date" name="date" value={event.date} onChange={handleChange} required />
        <input type="time" name="time" value={event.time} onChange={handleChange} required />
        <select name="ampm" value={event.ampm} onChange={handleChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <input type="text" name="venue" value={event.venue} onChange={handleChange} placeholder="Event Venue" required />
        <textarea name="description" value={event.description} onChange={handleChange} placeholder="Event Description" required></textarea>
        <button type="submit" disabled={formStatus.loading}>Add Event</button>
        {formStatus.loading && <p>Loading...</p>}
        {formStatus.success && <p>Event added successfully!</p>}
      </form>
    </div>
  );
};

export default EventForm;
