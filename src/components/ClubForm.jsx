// src/components/CreateClubForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './ClubForm.css';
const ClubForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://clubhub-backend.vercel.app/api/CreateClub`, { name, description, category, createdBy });
            setMessage('Club created successfully!');
            setName('');
            setDescription('');
            setCategory('');
            setCreatedBy('');
        } catch (error) {
            console.error('Error creating club:', error);
            setMessage('Failed to create club.');
        }
    };

    return (
        <div className="create-club-form">
            <h2>Create a New Club</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Created By:</label>
                    <input type="text" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />
                </div>
                <button type="submit">Create Club</button>
            </form>
        </div>
    );
}

export default ClubForm;
