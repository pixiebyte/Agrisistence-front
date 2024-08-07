import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../../Styles/components/Dashboard/Header.css";
import logo from "../../Assets/Images/logo.png";
import profileImage from "../../Assets/Images/profile.png";

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
      <Form inline className="search-bar">
        <FormControl
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <Button variant="outline-success" className="search-button">
          Search
        </Button>
      </Form>
      <Nav className="ml-auto navbar-nav">
        <Nav.Item className="nav-box">
          <Nav.Link href="#profile" className="nav-link james-button">
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
              Premium
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
