import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log("calling islogged in from frontend");
                const response = await axios.get('https://clubhub-backend.vercel.app/api/is-logged-in', {
                    withCredentials: true,
                });
                console.log("response is",response);
                if(response.data?.error)
                {
                    console.log("logged out ");
                    navigate('/login');
                    setUser(null);
                    setAuthenticated(false);
                }
                else if (response?.data?.loggedIn==true) {
                    setUser(response.data.user);
                    console.log("user is authenticated");
                    console.log(response.data.user); 
                    setAuthenticated(true);
                    console.log("user in context",user)
                }
                // else if(response.data.loggedIn==false){
                //     console.log("logged out ");
                //     navigate('/login');
                //     setUser(null);
                //     setAuthenticated(false);
                // }
            } catch (error) {
                console.log("from the frontend , user is not auth")
                console.log('Not authenticated', error);
                setAuthenticated(false);
            } finally {
                setLoading(false);  
            }
        };

        checkAuth();
    }, []);

    const login = (userData) => {
        setUser(userData);
        console.log("logged set");
        navigate('/student');
        setAuthenticated(true)
        // checkAuth();
    };

    const logout = async () => {
        // checkAuth();
        await axios.post('https://clubhub-backend.vercel.app/api/logout', {}, { withCredentials: true });
        setUser(null);
        navigate('/login');
        setAuthenticated(false);
    };

    // const authenticated = !!user; 

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, authenticated }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
