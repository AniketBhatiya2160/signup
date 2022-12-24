import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Oheader = () => {
  return (
    <div>
      <Navbar
        className="navbar navbar-dark bg-dark"
        collapseOnSelect
        expand="lg"
        bg="black"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <Nav className="me-auto ">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
            {/* <Nav className="me-auto">
              <Link to="/sellcar" className="nav-link">
                Sellcar
              </Link>
            </Nav> */}
            {/* <Nav>
              <div className="buttons">
                <button className="btn btn-success">Login</button>
              </div>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Oheader;
