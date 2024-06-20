import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const checkLoggedInStatus = async () => {
        try {
            const response = await axios.get('/auth/logged_in', { withCredentials: true });
            const data = response.data;
            if (data.loggedIn) {
                setToken(data.token);
                setUser(data.user);
                setAuthenticated(true);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            setAuthenticated(false);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        const cookieToken = Cookies.get('token');

        const currentToken = storedToken || cookieToken;

        if (currentToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
            setToken(currentToken);
            setAuthenticated(true);

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                checkLoggedInStatus();
            }
        } else {
            checkLoggedInStatus();
        }
    }, []);

    const login = (newToken, newUser) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        setAuthenticated(true);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Cookies.remove('token');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ token, authenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
