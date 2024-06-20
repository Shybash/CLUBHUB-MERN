import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClubMembers.css';

const ClubMembers = () => {
  const [clubMembers, setClubMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubMembers = async () => {
    try {
      const response = await axios.get('https://clubhub-backend.vercel.app/api/GetClubMembers');
      if (response.data && typeof response.data === 'object') {
        setClubMembers(response.data);
        setLoading(false);
      } else {
        setError('Invalid data format received from the server.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching club members:', error);
      setError('Failed to fetch club members. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubMembers();
  }, []);

  const handleDeleteMember = async (clubName, memberId) => {
    try {
      await axios.delete(`https://clubhub-backend.vercel.app/api/deleteClubMember/${clubName}/${memberId}`);
      
      fetchClubMembers();
    } catch (error) {
      console.error('Error deleting club member:', error);
      setError('Failed to delete club member. Please try again later.');
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="club-members">
          <h2 className="club-members-title">Club Members</h2>
          {Object.keys(clubMembers)
            .sort() // Sorting  the club names alphabetically
            .map((club, index) => (
              <div key={index}>
                <h3 className="club-name">{club} Club</h3>
                <div className="clubmember table-responsive-sm">
                  <table>
                    <thead className="c-head">
                      <tr>
                        <th>#</th>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>Ph no.</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clubMembers[club].map((member, rowIndex) => (
                        <tr key={member._id}>
                          <td>{rowIndex + 1}</td>
                          <td>{member.rollNum}</td>
                          <td>{member.name}</td>
                          <td>{member.contactNumber}</td>
                          <td>
                            <button onClick={() => handleDeleteMember(club, member._id)}>Delete</button>
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
    </div>
  );
};

export default ClubMembers;
