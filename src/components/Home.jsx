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
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000 ">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./images/group.png" className="d-block w-100" alt="Event 1"   />
            </div>
            <div className="carousel-item">
              <img src="./images/dance1.png" className="d-block w-100" alt="Event 2" />
            </div>
            <div className="carousel-item">
              <img src="./images/drama.png" className="d-block w-100" alt="Event 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
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
