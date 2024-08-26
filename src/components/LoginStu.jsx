import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './Authcontext'; 
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.css';
import GoogleButton from 'react-google-button';
import axios from 'axios';

const LoginStudent = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    const { login } = useAuth(); 

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            login(token); 
            navigate('/student');
        }
    }, [login, navigate]);

    const handleGoogleLogin = () => {
        window.location.href = 'https://clubhub-backend.vercel.app/auth/google';
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
    
        try {
            const response = await axios.post(
                'https://clubhub-backend.vercel.app/api/login',
                { email: data.email, password: data.password },
                { withCredentials: true }
            );
    
            if (response.status === 200) {
                const token = Cookies.get('token');
                console.log('Token from cookies after login:', token);
    
                if (token) {
                    await login(token); 
                    navigate('/student');
                } else {
                    setError("Login failed. No token received.");
                }
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.response?.data?.error || "An error occurred while logging in");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="login-container">
            <div className="club-hub">
                <h1>Club Hub</h1>
            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={changeHandler}
                                required
                            />
                            <i
                                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                                onClick={toggleShowPassword}
                            ></i>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="d-flex align-items-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Login...</span>
                                </div>
                                <span className="ml-2">Login...</span>
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
                <GoogleButton
                    onClick={handleGoogleLogin}
                    className='google-login-btn'
                    type='dark'
                    disabled={loading} 
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default LoginStudent;
