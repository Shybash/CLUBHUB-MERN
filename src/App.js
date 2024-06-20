// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import LoginTabs from './components/LoginTabs';
import RegisterTabs from './components/RegisterTabs';
import About from './components/About';
import { useAuth } from './components/Authcontext';
import NavbarStu from './components/NavbarStu';
import StudentForm from './components/StudentForm';
import NavbarClg from './components/NavbarClg';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import Clubs from './components/ClubTabs';
import Faq from './components/Faq';
import Profile from './components/Profile';
import ClubForm from './components/ClubForm';
import ClubMembers from './components/ClubMembers';
import Suggestion from './components/Contact';
import HomeStud from './components/HomeStud';
import StudentQueries from './components/StudentQueries';
import EventList from './components/EventList';
import Events from './components/Events';

function App() {
  const { authenticated } = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/login" element={<><Navbar /><LoginTabs /></>} />
          <Route path="/register" element={<><Navbar /><RegisterTabs /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />
          <Route path="/faq" element={<><Navbar /><Faq /></>} />

          {authenticated ? (
            <>
              <Route path="/student" element={<><NavbarStu /><HomeStud /></>} />
              <Route path="/studentform" element={<><NavbarStu /><StudentForm /></>} />
              <Route path="/clubs" element={<><NavbarStu /><Clubs /></>} />
              <Route path="/getevents" element={<><NavbarStu /><EventList /></>} />
              <Route path="/suggestion" element={<><NavbarStu /><Suggestion /></>} />
              <Route path="/profile" element={<><NavbarStu /><Profile /></>} />
              <Route path="/studentlist" element={<><NavbarClg /><StudentList /></>} />
              <Route path="/clubform" element={<><NavbarClg /><ClubForm /></>} />
              <Route path="/events" element={<><NavbarClg /><Events /></>} />
              <Route path="/clubmembers" element={<><NavbarClg /><ClubMembers /></>} />
              <Route path="/queries" element={<><NavbarClg /><StudentQueries /></>} />
            </>
          ) : (
            <>
              <Route path="/student" element={<Navigate to="/login" />} />
              <Route path="/studentform" element={<Navigate to="/login" />} />
              <Route path="/clubs" element={<Navigate to="/login" />} />
              <Route path="/getevents" element={<Navigate to="/login" />} />
              <Route path="/suggestion" element={<Navigate to="/login" />} />
              <Route path="/profile" element={<Navigate to="/login" />} />
              <Route path="/studentlist" element={<Navigate to="/login" />} />
              <Route path="/clubform" element={<Navigate to="/login" />} />
              <Route path="/events" element={<Navigate to="/login" />} />
              <Route path="/clubmembers" element={<Navigate to="/login" />} />
              <Route path="/queries" element={<Navigate to="/login" />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
