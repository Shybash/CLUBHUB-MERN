import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClubForm.css';

const CreateClubForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); 

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://clubhub-backend.vercel.app/api/CreateClub', {
                name,
                description,
                category
                        });
            if (response.status === 201) {
                setMessage('Club created successfully!');
                setName('');
                setDescription('');
                setCategory('');
            } else {
                setMessage('Failed to create club.');
            }
        } catch (error) {
            console.error('Error creating club:', error);
            setMessage('Failed to create club.');
        }
        setLoading(false);
    };

    return (
        <div className="clubhome">
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
                <button type="submit" disabled={loading}>
                    {loading ? (
                        <div className="loading-spinner"></div>
                    ) : (
                        'Create Club'
                    )}
                </button>
                {loading && <p className="loading-text">Creating...</p>}
            </form>
        </div>
        </div>
    );
}

export default CreateClubForm;
