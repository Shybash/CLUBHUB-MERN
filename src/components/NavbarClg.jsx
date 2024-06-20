import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; 
import { useAuth } from './Authcontext';
import { useNavigate } from 'react-router-dom';
import './NavbarStu.css';

function NavbarClg() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loading,setLoading]=useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    logout();
    navigate("/");
    setShowLogoutModal(false);
    setLoading(false);
  };
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid my-0.5">
        <Link className="navbar-brand" to="/College">
        <svg
          id="logo"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> 
        </svg>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-pages"
          aria-controls="navbar-pages"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar-pages">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/StudentList">
                StudentList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/queries">
               queries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clubform">
               ClubForm
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Events">
               Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ClubMembers">
               ClubMembers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <button
                type="button"
                className="btn btn-danger btn-lg"
                id="logout"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogoutModal(true)}}
              >
                {" "}
                Log Out {" "}
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>

      {showLogoutModal && (
        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to log out? You will be redirected to the home
            page.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
            
          </Modal.Footer>
        </Modal>
      )}

      </div>
    
  );
}

export default NavbarClg;
