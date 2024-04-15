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
      <div className="first">
     
        
        <div className="buttons">
          <center>
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
          </center>
          <center>
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
          </center>
        </div>
      </div>
      <div className="white-box">
        <div className="clubhub-info">
          <h2 className="club">Welcome to ClubHub</h2>
          <p>
            ClubHub is a dynamic platform designed to revolutionize the way
            clubs and organizations manage their operations. It serves as a
            comprehensive management tool, streamlining administrative tasks,
            enhancing communication, and fostering community engagement within
            clubs.
          </p>
          <p>
            Key features of ClubHub typically include membership management,
            event planning and scheduling, communication tools such as messaging
            and announcements, resource allocation, and financial tracking. The
            platform often incorporates user-friendly interfaces accessible via
            web browsers or mobile applications, catering to the diverse needs
            of club members and administrators alike.
          </p>
          <p>
            With ClubHub, clubs can efficiently organize meetings, track
            attendance, collect dues, and promote events, fostering a more
            cohesive and engaged community. It simplifies the administrative
            burden on club leaders, allowing them to focus more on enriching
            club experiences and less on mundane tasks.
          </p>
          <p>
            Overall, ClubHub empowers clubs and organizations to thrive by
            providing them with the tools they need to effectively manage their
            activities, communicate with members, and foster a sense of
            belonging and camaraderie among their members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
