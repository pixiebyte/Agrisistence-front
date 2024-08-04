import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import logo from "../images/logo.png";
import profileImage from "../images/profile.png"; // Add the path to the profile image

const Header = () => {
  const [isPremium, setIsPremium] = useState(false);

  const handleToggle = () => {
    setIsPremium(!isPremium);
  };

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
          <Nav.Link href="#profile" className="nav-link boxed-link">
            <img src={profileImage} className="nav-icon" alt="Profile" />
            <span>James Bekham</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="premium-container">
          <div className="switch" onClick={handleToggle}>
            <span className={`switch-label ${!isPremium ? "active" : ""}`}>
              Free mode
            </span>
            <span className={`switch-label ${isPremium ? "active" : ""}`}>
              premium
            </span>
            <div
              className={`switch-toggle ${isPremium ? "premium" : "free"}`}
            ></div>
          </div>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
