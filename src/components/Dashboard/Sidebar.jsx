import React from "react";
import { Nav } from "react-bootstrap";
import "../../Styles/components/Dashboard/Sidebar.css";
import user from "../../Assets/Images/usergris.png";
import calendar from "../../Assets/Images/calendargris.png";
import home from "../../Assets/Images/homevert.png";
import land from "../../Assets/Images/landgris.png";
import network from "../../Assets/Images/networkgris.png";

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
