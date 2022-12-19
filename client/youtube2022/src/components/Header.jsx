import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="green" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Nav className="me-auto color navbar-dark">
              <Link to="/home" className="nav-link">
                car-sell
              </Link>
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/allcar" className="nav-link">
                All car
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link to="/sellcar" className="nav-link">
                Sellcar
              </Link>
            </Nav>
            <Nav>
              {currentUser && (
                <div className="buttons">
                  <button onClick={logout} className="btn btn-success">
                    Logout
                  </button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
