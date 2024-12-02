import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // Initial loading set to false
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user && location.pathname === '/login') {
            navigate('/student'); // Redirect logged-in users away from login page
        }
    }, [user, location.pathname, navigate]);

    const login = (userData) => {
        setUser(userData);
        setAuthenticated(true);
        navigate('/student');
    };

    const logout = async () => {
        await axios.post('https://clubhub-backend.vercel.app/api/logout', {}, { withCredentials: true });
        setUser(null);
        setAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, authenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
