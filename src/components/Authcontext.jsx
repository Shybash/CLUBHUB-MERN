import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        checkLoggedInStatus();
    }, []); // Only run once on component mount

    const checkLoggedInStatus = () => {
        const storedToken = Cookies.get('token');
        const storedUserId = Cookies.get('userId');
        if (storedToken && storedUserId) {
            setToken(storedToken);
            setUserId(storedUserId);
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    };

    const login = (newToken, newUserId) => {
        setToken(newToken);
        setUserId(newUserId);
        Cookies.set('token', newToken);
        Cookies.set('userId', newUserId);
        setAuthenticated(true);
    };

    const logout = () => {
        setToken(null);
        setUserId(null);
        Cookies.remove('token');
        Cookies.remove('userId');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ token, authenticated, userId, login, logout, checkLoggedInStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
