import React from 'react';
import './Event.css'; // Assuming a CSS file named CollegeEvents.css for styling

const Event = () => {
  return (
    <div className="college-events">
      <div className="event">
        <h2>Annual Cultural Fest</h2>
        <div className="event-info">
          <div className="event-image">
            <img src="/images/cultural_fest.jpg" alt="Cultural Fest" />
          </div>
          <div className="event-description">
            <p>
              Our annual cultural fest is a vibrant celebration of diversity and talent. It brings together students from various cultural backgrounds to showcase their creativity through music, dance, drama, fashion shows, and art exhibitions. The event creates a lively atmosphere filled with performances, delicious food stalls, and interactive cultural activities, fostering a sense of unity and appreciation for different traditions.
            </p>
            <p>
              Venue: College Auditorium and Grounds
            </p>
          </div>
        </div>
      </div>

      <div className="event">
        <h2>Sports Day</h2>
        <div className="event-info">
          <div className="event-image">
            <img src="/images/sports_day.jpg" alt="Sports Day" />
          </div>
          <div className="event-description">
            <p>
              Sports Day is an exhilarating event that promotes teamwork, physical fitness, and sportsmanship among students. It features a wide range of sports competitions, including track and field events, team sports like football and basketball, as well as fun relay races and tug-of-war contests. Participants display their athletic prowess and competitive spirit while spectators cheer them on with enthusiasm, making it an action-packed day of camaraderie and excitement.
            </p>
            <p>
              Venue: College Sports Grounds
            </p>
          </div>
        </div>
      </div>

      <div className="event">
        <h2>Science Exhibition</h2>
        <div className="event-info">
          <div className="event-image">
            <img src="/images/science_exhibition.jpg" alt="Science Exhibition" />
          </div>
          <div className="event-description">
            <p>
              The Science Exhibition showcases innovative projects and experiments by students across various scientific disciplines. From robotics and renewable energy solutions to biology and chemistry demonstrations, the exhibition provides a platform for students to demonstrate their scientific knowledge and creativity. Visitors can explore interactive displays, engage in hands-on experiments, and learn about cutting-edge advancements in science and technology.
            </p>
            <p>
              Venue: College Science Block
            </p>
          </div>
        </div>
      </div>

      <div className="event">
        <h2>Debate Competition</h2>
        <div className="event-info">
          <div className="event-image">
            <img src="/images/debate_competition.jpg" alt="Debate Competition" />
          </div>
          <div className="event-description">
            <p>
              The Debate Competition provides a platform for students to engage in intellectual discourse and articulate their opinions on various social, political, and ethical issues. Participants showcase their persuasive speaking skills, critical thinking abilities, and research prowess as they debate topics ranging from current affairs to philosophical dilemmas. The competition fosters public speaking confidence and encourages respectful dialogue among participants.
            </p>
            <p>
              Venue: College Seminar Hall
            </p>
          </div>
        </div>
      </div>

      {/* Add more events here */}
    </div>
  );
}

export default Event;
