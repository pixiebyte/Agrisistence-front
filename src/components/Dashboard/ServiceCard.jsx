import React from "react";
import "../../Styles/components/Dashboard/Servicecard.css"; // Ensure the path is correct

const ServiceCard = ({ title, text, icon }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <div className="service-card-text">
          <div className="service-card-title">{title}</div>
          <div className="service-card-description">{text}</div>
        </div>
        <div className="service-card-icon">{icon}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
