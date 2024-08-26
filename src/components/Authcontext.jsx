import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Check if there's a token in the cookies on mount
        const storedToken = Cookies.get('token');
        if (storedToken) {
            setToken(storedToken);
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const login = (newToken) => {
        setToken(newToken);
        Cookies.set('token', newToken, { expires: 7, secure: true, sameSite: 'Strict' });
        setAuthenticated(true);
    };

    const logout = () => {
        setToken(null);
        Cookies.remove('token');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ token, authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
