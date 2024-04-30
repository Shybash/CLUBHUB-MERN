import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './HomeStud.css';

const HomeStud = () => {
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get(
          "https://clubhub-backend.vercel.app/api/GetClubs"
        );
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleJoinClub = (e) => {
    e.stopPropagation();
    navigate("/StudentForm");
  };

  return (
    <div className="HomeStud">
      <div className="welcomee">
      <h1>Welcome to Clubhub</h1>
      <h2 className="clubList">Club List</h2>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {clubs.map((club, index) => (
            <div key={index} className="col mb-4">
              <div className=" cardStyle card h-100">
                <div className="card-body">
                  <h5 className="cardtitl card-title">{club.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Category: {club.category}</h6>
                  <p className="card-text">Description: {club.description}</p>
                  <div className="club-links">
                    <button className="btn btn-primary" onClick={handleJoinClub}>
                      Join Club
                    </button>
                    <Link to="/clubs" className="btn btn-secondary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStud;
