import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand href="#">
        <img
          src={logo} // Use imported logo variable
          alt="Logo"
          className="navbar-logo"
        />
      </Navbar.Brand>
      <Nav className="ml-auto navbar-nav">
        <Nav.Item className="nav-box">
          <Nav.Link href="#your-land" className="nav-link">
            <img
              src="../images/logo.png"
              className="nav-icon"
              alt="Your Land"
            />
            <span>Ryma Felkir</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span className="premium">premium</span>
          <span className="free-mode ml-2">Free mode</span>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
