import React, { createContext, useContext, useState, useEffect } from 'react';

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setAuthenticated(true);
        }
    }, []); // Only run once on component mount

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        setAuthenticated(true);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setAuthenticated(false);
    };

    return (
        <Authcontext.Provider value={{ token, authenticated, login, logout }}>
            {children}
        </Authcontext.Provider>
    );
};

export const useAuth = () => useContext(Authcontext);
