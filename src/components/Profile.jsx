import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './Authcontext';

const Profile = () => {
    const { token, userId } = useAuth();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(
                    `https://clubhub-backend.vercel.app/api/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUserDetails(response.data);
            } catch (error) {
                setError("Error fetching user details");
            } finally {
                setLoading(false);
            }
        };

        if (token && userId) {
            fetchUserDetails();
        }
    }, [token, userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="profile-container">
            {userDetails && (
                <div >
                    <h2>User Profile</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    {/* Add more user details as needed */}
                </div>
            )}
        </div>
    );
};

export default Profile;
