import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [studentDetails, setStudentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const userId = localStorage.getItem("Id");
                if (!userId) {
                    throw new Error("User ID not found");
                }
                const response = await axios.get(
                    `https://clubhub-backend.vercel.app/api/student/${userId}`
                );
                setStudentDetails(response.data);
            } catch (error) {
                console.error('Error fetching student:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentDetails();
    }, []);
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div className="error">Error: {error}</div>;
    }
    return (
        <div className="backgroun">
        <div className="profile-container">
            {studentDetails && (
                <div>
                    <h2>Student Profile</h2>
                    <p>Name: {studentDetails.username}</p>
                    <p>Roll Number: {studentDetails.rollnum}</p>
                    <p>Created: {new Date(studentDetails.created).toLocaleString()}</p>
                </div>
            )}
            </div>
        </div>
    );
};

export default Profile;
