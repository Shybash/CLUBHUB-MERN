import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Profile.css';

const Profile = () => {
    const [studentDetails, setStudentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const response = await axios.get(
                    `https://clubhub-backend.vercel.app/api/student/details`,
                    { withCredentials: true } 
                );
                
                setStudentDetails(response.data);
            } catch (error) {
                console.error('Error fetching student:', error);
                setError(error.response?.data?.message || "An error occurred while fetching student details.");
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
        <div className="background">
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
