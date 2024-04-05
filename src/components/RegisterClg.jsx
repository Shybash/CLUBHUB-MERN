import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegisterClg = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [loading, setLoading] = useState(false); // Define loading state variable
    const [error, setError] = useState(null); // Define error state variable

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting form
        setError(null); // Reset error state

        try {
            const response = await axios.post(`https://clubhub-backend.vercel.app/api/RegisterClg`, data);
            alert(response.data);
            setLoading(false); // Set loading to false after successful request
        } catch (error) {
            console.error(error);
            setLoading(false); // Set loading to false after error
            
            if (error.response) {
                // The request was made and the server responded with a status code
                // Display the error message received from the server
                setError(error.response.data.error || "An error occurred");
            } else if (error.request) {
                // The request was made but no response was received
                console.error(error.request);
                setError("No response received from the server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="reg-container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <h3>College Register</h3>
                    {error && <p className="text-danger">{error}</p>} {/* Display error message if present */}
                    <label className="form-label">Username</label>
                    <input type="text" placeholder="username" name="username" onChange={changeHandler} className="form-control" />
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="email" name="email" onChange={changeHandler} className="form-control" />
                    <label className="form-label">Password</label>
                    <input type="password" placeholder="password" name="password" onChange={changeHandler} className="form-control" />
                    <label className="form-label">Confirm Password</label>
                    <input type="password" placeholder="confirm password" name="confirmpassword" onChange={changeHandler} className="form-control" />
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
                            "Register"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterClg;
