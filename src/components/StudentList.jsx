import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

const StudentList = () => {
  const [groupedStudents, setGroupedStudents] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://clubhub-backend.vercel.app/api/StudentForm');
        setGroupedStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student list:', error);
        setError('Failed to fetch student list. Please try again later.');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://clubhub-backend.vercel.app/api/deleteStudent/${id}`);
      setGroupedStudents(prevStudents => {
        const updatedStudents = { ...prevStudents };
        Object.keys(updatedStudents).forEach(club => {
          updatedStudents[club] = updatedStudents[club].filter(student => student._id !== id);
        });
        return updatedStudents;
      });
    } catch (error) {
      console.error('Error deleting student:', error);
      setError('Failed to delete student. Please try again later.');
    }
  };

  const handleAccept = async (id) => {
    try {
        await axios.post(`https://clubhub-backend.vercel.app/api/AcceptStudent/${id}`);

                setGroupedStudents(prevStudents => {
            const updatedStudents = { ...prevStudents };
            Object.keys(updatedStudents).forEach(club => {
                updatedStudents[club] = updatedStudents[club].filter(student => student._id !== id);
            });
            return updatedStudents;
        });
    } catch (error) {
        console.error('Error accepting student:', error);
        setError('Failed to accept student. Please try again later.');
    }
};



  return (
    <div className="studentlis">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="student-list-container">
          <h2 className="student-list">Student List</h2>
          {Object.keys(groupedStudents).map((club, index) => (
            <div key={index}>
              <h3 className="club-name">{club} Club</h3>
              <div className="student-table table-responsive-sm">
                <table>
                  <thead>
                    <tr>
                      <th>Roll Number</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedStudents[club].map(student => (
                      <tr key={student._id}>
                        <td>{student.rollNum}</td>
                        <td>{student.name}</td>
                        <td>{student.contactNumber}</td>
                        <td className>
                          <button className="butt" onClick={() => handleDelete(student._id)}>Delete</button>
                          <button className="butt" onClick={() => handleAccept(student._id)}>Accept</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
        <div className="description-box">
        <p className="description">
          Welcome to the Student List page! Here, you can view a list of students grouped by their respective clubs. Each club has its own table displaying the roll number, name, and contact number of the students belonging to that club. You can easily delete a student by clicking the "Delete" button next to their name. If you encounter any issues while viewing or deleting students, an error message will be displayed to inform you. This page provides a convenient way to manage student data, facilitating organization and administration within the educational institution or club. Feel free to explore and manage the student list as needed!
        </p>
      </div>
    </div>
  );
};

export default StudentList;
