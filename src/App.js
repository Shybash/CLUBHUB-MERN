// App.js
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import LoginTabs from './components/LoginTabs';
import RegisterTabs from './components/RegisterTabs';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {useAuth} from './components/Authcontext';
import NavbarStu from './components/NavbarStu';
import HomeStu from './components/HomeStu';
import StudentForm from './components/StudentForm';
import Event from './components/Event';
import NavbarClg from './components/NavbarClg';
import HomeClg from './components/homeClg';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import Clubs from './components/ClubTabs';
import Faq from './components/Faq';
import Profile from './components/Profile';
import ClubForm from './components/ClubForm';
// export const StoreContext = createContext();

function App() {
  // const [token, setToken] = useState(null);
  const {authenticated}=useAuth();
  return (
    <>
      {/* <StoreContext.Provider value={[token, setToken]}> */}
        <Router>
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/Login" element={<> <Navbar /><LoginTabs /></>} /> {/* Changed path to "/login" */}
            <Route path="/Register" element={<><Navbar /> <RegisterTabs /></>} />
            <Route path="/About"    element={<> <Navbar /> <About /></>} />
            <Route path="/contact" element={<><Navbar /> <ContactUs /></>} />
            <Route path="/faq" element={<><Navbar /> <Faq /></>} />

            {authenticated ? (
              <>
          <Route path="/Student" element={ <> <NavbarStu /> <HomeStu /></>} />
          <Route path="/StudentForm" element={<><NavbarStu /><StudentForm /></>} />
          <Route path="/Events" element={<><NavbarStu /> <Event /></>} />
          <Route path="/Clubs" element={<><NavbarStu /> <Clubs /> </>} />
          <Route path="/profile" element={<><NavbarStu /> <Profile /> </>} />
          </>
        ) : (
          <Route path="*" element={<> <Navbar /><LoginTabs /></>} />
        )}

        {authenticated ?(
          <>
          <Route path="/College" element={<><NavbarClg /> <HomeClg /></>} />
          <Route path="/StudentList" element={<><NavbarClg /> <StudentList /></>} />
          <Route path="/clubform" element={<> <NavbarClg /> <ClubForm /></>} />
          </>
        ):(
          <Route path="*" element={<> <Navbar /><LoginTabs /></>} />
        )}
          
          </Routes>
          <Footer />

        </Router>
      {/* </StoreContext.Provider> */}
    </>
  );
}

export default App;
