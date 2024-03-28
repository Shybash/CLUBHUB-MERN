import React from 'react';
import './Mudra.css';
const Mudra= () => {
  return (
    <div>
      <div className="Mudra">
        <h1>MUDRA-DANCE CLUB</h1>
        <p>
          In an age where expression is one of the most powerful tools a person can possess, dance has become more than just a form of art. It is a way of moving that uses the body as an instrument of expression and communication. Through dance, one can learn teamwork, focus, and improvisation. Hence, the initiative to create the KMIT dance club was taken. We aim to bring talented students across all years under one roof and on one platform. The name we chose, Mudra, is a prominent term in a dancer’s vocabulary and is one of the most significant features of Indian classical dance.
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
              <td>Spoorthy Sheri</td>
              <td>20BD1A66B1</td>
              <td>SENIOR CLUB HEAD</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Chamu Sree Miryalkar</td>
              <td>20BD1A052F</td>
              <td>JUNIOR CLUB HEAD</td>
            </tr>
          </tbody>
        </table>
        <h2>Events conducted:</h2>
        <ul>
          <li>1.DANCE COVER - (Song: Jimmiki Kamal, Idea: Single Shot Video) on 19th November, 2021</li>
          <li>2.Instagram Reel - (Song: Jugnu) on 24th November, 2021</li>
          <li>3.Instagram TV (IGTV Series) - (Idea: Fusion of Forms) on 9th January, 2022</li>
        </ul>
        <h2>Upcoming Events:</h2>
        <ul>
          <li>1.Reel Series</li>
          <li>2.Dance Cover (Different dance forms)</li>
          <li>3.Different dance styles Flashmob</li>
        </ul>
      </div>
    </div>
  );
};

export default Mudra;
