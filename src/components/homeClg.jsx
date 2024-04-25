// HomePage.js

import React from 'react';
import './HomeStud.css'; // Import CSS file for styling

const HomeClg = () => {
    return (
        <div className="home-page">
            <header>
                <h1>Welcome to KMIT College Events</h1>
            </header>
            <main>
                <section className="about">
                    <h2>About Us</h2>
                    <p>
                        Keshav Memorial Institute of Technology (KMIT) is a premier engineering college located in Hyderabad, Telangana. 
                        Our college organizes various events throughout the year to foster innovation, creativity, and leadership among students.
                        Explore our upcoming and past events to get involved!
                    </p>
                </section>
                <section className="events">
                    <h2>Events</h2>
                    <div className="upcoming-events">
                        <h3>Upcoming Events</h3>
                        <ul>
                            <li>Event 1 - Date</li>
                            <li>Event 2 - Date</li>
                            {/* Add more upcoming events */}
                        </ul>
                    </div>
                    <div className="past-events">
                        <h3>Past Events</h3>
                        <ul>
                            <li>Event 3 - Date</li>
                            <li>Event 4 - Date</li>
                            {/* Add more past events */}
                        </ul>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 KMIT College Events</p>
            </footer>
        </div>
    );
};

export default HomeClg;
