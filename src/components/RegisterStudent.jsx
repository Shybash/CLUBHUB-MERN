import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    username: '',
    rollnum: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmpassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://clubhub-backend.vercel.app/api/register', formData);
      alert(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Register</h3>
          {error && <p className="text-danger">{error}</p>}
          <label className="form-label">Username</label>
          <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} className="form-control" />
          <label className="form-label">Roll Number</label>
          <input type="text" placeholder="Roll Number" name="rollnum" value={formData.rollnum} onChange={handleChange} className="form-control" />
          <label className="form-label">Email</label>
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
          <label className="form-label">Password</label>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
          <label className="form-label">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} className="form-control" />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Register'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStudent;
