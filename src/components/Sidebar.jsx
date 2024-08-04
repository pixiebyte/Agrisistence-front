import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";
import user from "../images/usergris.png";
import calendar from "../images/calendargris.png";
import home from "../images/homevert.png";
import land from "../images/landgris.png";
import network from "../images/networkgris.png";

const Sidebar = () => {
  return (
    <Nav className="sidebar d-flex flex-column">
      <Nav.Item className="nav-box">
        <Nav.Link href="#home" className="nav-link boxed-link">
          <img src={home} alt="Home" className="nav-icon" />
          <span>Home</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#profile" className="nav-link">
          <img src={user} alt="Profile" className="nav-icon" />
          <span>Profile</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#your-land" className="nav-link">
          <img src={land} alt="Your Land" className="nav-icon" />
          <span>Your Land</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#calendar" className="nav-link">
          <img src={calendar} alt="Calendar" className="nav-icon" />
          <span>Calendar</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#network" className="nav-link">
          <img src={network} alt="Your Network" className="nav-icon" />
          <span>Your Network</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
