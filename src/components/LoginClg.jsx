import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './Authcontext'; 
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Loginclg = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    const { login } = useAuth(); 

  
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
    
        try {
            const response = await axios.post(
                'https://clubhub-backend.vercel.app/api/LoginClg',
                { email: data.email, password: data.password },
                { withCredentials: true } 
            );
    
            if (response.status === 200 && response.data.user) {
                login(response.data.user);
                navigate('/StudentList');
            } else {
                console.log("Login failed.");
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
                <h2>College Login</h2>
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
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <span className="ml-2">Loading...</span>
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default Loginclg;
