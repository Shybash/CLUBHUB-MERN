import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('https://clubhub-backend.vercel.app/api/is-logged-in', {
                    withCredentials: true,
                });
                console.log('API Response:', response.data); 
                if (response.data.loggedIn) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log('Not authenticated', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = (userData) => {
        setUser(userData);
        navigate('/student');
    };

    const logout = async () => {
        await axios.post('https://clubhub-backend.vercel.app/api/logout', {}, { withCredentials: true });
        setUser(null);
        navigate('/login');
    };

    const authenticated = !!user; 

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, authenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
