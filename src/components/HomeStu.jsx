// HomePage.js

import React from "react";
import "./HomeStu.css"; // Import CSS file for styling

const HomeStu = () => {
  return (
    <div className="home-page">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/Kmit.png"
              className="d-block w-100"
              alt="Event 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/Kmit2.png"
              className="d-block w-100"
              alt="Event 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/Kmit3.png"
              className="d-block w-100"
              alt="Event 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/sports.png"
              className="d-block w-100"
              alt="Event 4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="college-info">
        <h1>Welcome to Keshav Memorial Institute of Technology (KMIT)</h1>
        <p>
          Keshav Memorial Institute of Technology (KMIT) is a premier
          engineering college located in Hyderabad, Telangana. Established in
          2007, KMIT is affiliated with Jawaharlal Nehru Technological
          University (JNTU) and is approved by the All India Council for
          Technical Education (AICTE).
        </p>
        <p>
          At KMIT, we strive to provide quality education in engineering and
          technology, fostering innovation, creativity, and leadership among our
          students. Our state-of-the-art campus, experienced faculty, and
          industry-oriented curriculum ensure that our students are
          well-equipped to meet the challenges of the modern world.
        </p>
      </div>
      <div className="courses-offered">
        <h2>Our Courses</h2>
        <ul>
          <li>
            Bachelor of Technology (B.Tech) in Computer Science and Engineering
          </li>
          <li>
            Bachelor of Technology (B.Tech) in Electronics and Communication
            Engineering
          </li>
          <li>
            Bachelor of Technology (B.Tech) in Electrical and Electronics
            Engineering
          </li>
          <li>Bachelor of Technology (B.Tech) in Information Technology</li>
          {/* Add more courses here */}
        </ul>
      </div>
    </div>
  );
};

export default HomeStu;
