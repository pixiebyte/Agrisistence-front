import React from "react";
import { Card } from "react-bootstrap";

const ServiceCard = ({ title, text, icon }) => {
  return (
    <Card className="text-center h-100 custom-card">
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="icon mb-2">{icon}</div>
        <Card.Title className="text-green">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
