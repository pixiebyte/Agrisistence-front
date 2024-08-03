import React from "react";
import { Card } from "react-bootstrap";
import "./Home.css"; // Make sure Home.css is imported if not already

const ServiceCard = ({ title, text }) => {
  return (
    <Card className="mb-3 service-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
