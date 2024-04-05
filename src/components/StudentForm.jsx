import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
  const [rollNum, setRollNum] = useState('');
  const [name, setName] = useState('');
  const [club, setClub] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const clubOptions = ['Riti', 'Alap', 'Mudra', 'Abhinaya', 'Recurse','vachan','Traces of Lenses','Kreeda']; // Sample club names

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://clubhub-backend.vercel.app/api/studentForm`, {
        rollNum,
        name,
        club
      });
      console.log(response.data);
      setRollNum('');
      setName('');
      setClub('');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.log(error);
    }
  };

  return (
    <div className="Formcontainer">
      <h1>Apply To Join Club</h1>
      <form className="forms" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="rollNum" className="form-label">Roll Number</label>
          <input type="text" className="form-control" id="rollNum" placeholder="Enter Roll Number" value={rollNum} onChange={(e) => setRollNum(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="club" className="form-label">Club</label>
          <select className="form-control" id="club" value={club} onChange={(e) => setClub(e.target.value)} required>
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
  );
};

export default StudentForm;
