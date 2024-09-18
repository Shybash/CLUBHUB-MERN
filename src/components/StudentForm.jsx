import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './Authcontext';
import './StudentForm.css';

const StudentForm = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [club, setClub] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [clubOptions, setClubOptions] = useState([]);
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.userId) {
        try {
          setLoading(true);
          await Promise.all([fetchClubOptions(), fetchStudentDetails()]);
        } catch (err) {
          setError('An error occurred while fetching data. Please try again.');
          console.error('Error in fetchData:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError('User is not authenticated or user ID is missing.');
      }
    };

    fetchData();
  }, [user]);

  const fetchClubOptions = async () => {
    try {
      const response = await axios.get('https://clubhub-backend.vercel.app/api/GetClubs', {
        withCredentials: true
      });
      console.log("Clubs Response:", response.data);
      if (response.data && Array.isArray(response.data)) {
        setClubOptions(response.data.map(club => club.name));
      } else {
        setError('Invalid data format received from the server.');
      }
    } catch (error) {
      setError('An error occurred while fetching club options. Please try again.');
      console.error('Error fetching club options:', error);
    }
  };

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(`https://clubhub-backend.vercel.app/api/student/${user.userId}`, {
        withCredentials: true
      });
      console.log("Student Details Response:", response.data);
      setStudentDetails(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Student details not found.');
      } else {
        setError('An error occurred while fetching student details. Please try again.');
      }
      console.error('Error fetching student details:', error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://clubhub-backend.vercel.app/api/studentForm', {
        rollNum: studentDetails.rollnum,
        name,
        contactNumber,
        club
      }, { withCredentials: true });

      console.log(response.data);
      setName('');
      setContactNumber('');
      setClub('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setError('An error occurred while submitting the form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!studentDetails) {
    return <div>Student details not found. Please try again later.</div>;
  }

  return (
    <div className="back">
      <div className="Formcontainer">
        <h1>Apply To Join Club</h1>
        <form className="forms" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="rollNum" className="form-label">Roll Number</label>
            <input
              type="text"
              className="form-control"
              id="rollNum"
              value={studentDetails.rollnum}
              readOnly
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              placeholder="Enter Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="club" className="form-label">Club</label>
            <select
              className="form-control"
              id="club"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              required
            >
              <option value="">Select a club</option>
              {clubOptions.map((club, index) => (
                <option key={index} value={club}>{club}</option>
              ))}
            </select>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary submitbtn">Submit</button>
        </form>
        {submitted && <div className="submission-popup">Submitted Successfully!</div>}
      </div>
    </div>
  );
};

export default StudentForm;
