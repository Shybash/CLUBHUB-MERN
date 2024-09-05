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
                setUser(response.data.user);
            } catch (error) {
                console.log('Not authenticated', error);
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

    const authenticated = !!user; // Determine if the user is authenticated

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, authenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
