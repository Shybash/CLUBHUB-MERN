import React from 'react';
import './Mudra.css';
const Recurse= () => {
  return (
    <div>
      <div className="Mudra">
        <h1>Recurse - The Technical Club</h1>
        <p>
        The purpose of this club is to provide students with the opportunity, experience, and resources to pursue a career in Computer Science and also in Electronics & Communication outside the classrooms. This club can expand upon criteria in the curriculum to assist students in competing with their peers for enhancing their own skills. Though the main focus of this club is to provide an emphasis on computer programming, it is intended for the club to delve into all aspects in order to prevent educational limitations for its members.
        </p>
        <h2>Team heads:</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the student</th>
              <th>Roll no</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>karthik ramasami</td>
              <td>21BD1A66B1</td>
              <td>SENIOR CLUB HEAD</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rahuvaran reddy</td>
              <td>21BD1A052F</td>
              <td>JUNIOR CLUB HEAD</td>
            </tr>
          </tbody>
        </table>
        <h2>Events conducted:</h2>
        <ul>
          <li>1.Code Sangram On 9th December, 20221</li>
          <li>2.Treasure Hunt 5th April, 2022</li>
          <li>3. Ideathon</li>
          <li>4.Code Auction</li>
        </ul>
        <h2>Upcoming Events:</h2>
        <ul>
          <li>1.Website for Recurse</li>
          <li>2. Frequent Competitive Coding Contests</li>
          <li>3. Hackathon</li>
        </ul>
      </div>
    </div>
  );
};

export default Recurse;
