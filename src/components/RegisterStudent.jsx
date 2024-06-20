import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegisterStudent = () => {
  const [data, setData] = useState({
    username: '',
    rollnum: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [loading, setLoading] = useState(false); // Define loading state variable
  const [error, setError] = useState(null); // Define error state variable

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    axios.post(`https://clubhub-backend.vercel.app/api/register`, data)
      .then(res => {
        alert(res.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error(error);
        setLoading(false); 

        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="reg-container">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <h3>Register</h3>
          {error && <p className="text-danger">{error}</p>} 
          <label className="form-label">Username</label>
          <input type="text" placeholder="username" name="username" onChange={changeHandler} className="form-control" />
          <label className="form-label">Roll Number</label>
          <input type="text" placeholder="roll number" name="rollnum" onChange={changeHandler} className="form-control" />
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

export default RegisterStudent;
