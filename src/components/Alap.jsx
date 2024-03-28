import React from 'react';
import './Mudra.css';
const Alap= () => {
  return (
    <div>
      <div className="Mudra">
        <h1>Aalap - The Music Club</h1>
        <p>
        The first club formed in KMIT, AALAP – The Music Club of KMIT visions in exploring the various new aspects of music, as the tagline says #EXPLORE YOURSELF. AALAP provides the right platform to all music aspirants and enthusiasts in not only showcasing their talent, but to also explore, innovate and implement such ideas. From live performances and interactive jams to online collaborations, AALAP loves to take challenges and expand its wings, reach out to more and more people and keep entertaining them in the World of Music.        </p>
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
              <td>Akshay</td>
              <td>21BD1A66B9</td>
              <td>SENIOR CLUB HEAD</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mahendar</td>
              <td>21BD1A053j</td>
              <td>JUNIOR CLUB HEAD</td>
            </tr>
          </tbody>
        </table>
        <h2>Events conducted:</h2>
        <ul>
          <li>1. Battle of bands-31st Dec 2022</li>
          <li>IIT Kanpur competition at Moonshine Project-9th January 2022</li>
          <li> AALAP’s performance at next premia mall, Irrummanzil-27th June 2022</li>
        </ul>
        <h2>Upcoming Events:</h2>
        <ul>
          <li>1. Battle of Bands 2.0</li>
          <li>onthly Band Practice</li>
          <li> Timely Instagram and Youtube Posts and Reels</li>
        </ul>
      </div>
    </div>
  );
};

export default Alap;
