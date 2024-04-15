import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        if (storedToken && storedUserId) {
            setToken(storedToken);
            setUserId(storedUserId);
            setAuthenticated(true);
        }
    }, []); // Only run once on component mount

    const login = (newToken, newUserId) => {
        setToken(newToken);
        setUserId(newUserId);
        localStorage.setItem('token', newToken);
        localStorage.setItem('userId', newUserId);
        setAuthenticated(true);
    };

    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ token, authenticated, userId, login, logout }}>
            {children}
           
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
