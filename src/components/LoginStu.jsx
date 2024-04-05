import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from './Authcontext'; // Import useAuth from your Authcontext
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.css';

const LoginStudent = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Get navigate from react-router-dom
    const { login } = useAuth(); // Get login function from your Authcontext

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `https://clubhub-backend.vercel.app/api/login`,
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const newToken = response.data.token;

            await login(newToken);
            localStorage.setItem("token", newToken);
            // localStorage.setItem("Id", response.data.user._id); 
            navigate("/Student"); // Navigate to "/Student" route
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("User not found or invalid password");
            } else {
                console.error("Login Error:", error);
                setError("An error occurred while logging in");
            }
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
                            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={toggleShowPassword}></i>
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
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default LoginStudent;
