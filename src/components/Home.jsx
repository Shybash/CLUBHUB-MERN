import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="home">
          <div className="header">
            <h1 className="welcome">Welcome to ClubHub</h1>
          </div>
          <div className="logContainer">
          <div className="image-container"> 
        <img className="homeimg" src="/images/clubimg.png" alt="clubimage" />
      </div>
      <div className="buttons right-buttons">
          <Link to="/Register">
            <div className="register">
              {loading ? (
                <button className="btn btn-danger" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger btn-lg register"
                  onClick={handleClick}
                >
                  Register
                </button>
              )}
            </div>
          </Link>
          <Link to="/Login">
            <div className="login">
              {loading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-lg register"
                  onClick={handleClick}
                >
                  Login
                </button>
              )}
            </div>
          </Link>
        </div>
        </div>
        <div className="contentt">
          <p>Revolutionizing the way clubs and organizations operate</p>
          <p>
            ClubHub is a dynamic platform designed to revolutionize the way
            clubs and organizations manage their operations. It serves as a
            comprehensive management tool, streamlining administrative tasks,
            enhancing communication, and fostering community engagement within
            clubs.
          </p>
          <p>With ClubHub, finding the perfect club to match your interests has 
            never been easier. Browse through our extensive directory of clubs 
            covering a wide range of topics and activities, from academic and 
            professional organizations to cultural and recreational groups. 
            With just a few clicks, you can explore the diverse array of clubs 
            our campus has to offer.</p>
            <p>
            Overall, ClubHub empowers clubs and organizations to thrive by
            providing them with the tools they need to effectively manage their
            activities, communicate with members, and foster a sense of
            belonging and camaraderie among their members.
          </p>
          </div>
        </div>
  );
};

export default Home;
