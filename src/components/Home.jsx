import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard"; // Ensure this path is correct
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col md={6} className="left-column">
          <Card className="text-center custom-card">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="text-left">
                <h5>Welcome back, Ryma Felkir</h5>
                <span className="days-span">-20 days until harvest</span>
              </div>
              <div>
                <img
                  src="/images/logo.png" // Ensure the path is correct
                  alt="Logo"
                  className="card-image"
                />
              </div>
              <div className="text-right">
                <span className="text-danger">+3 new suggestions</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-green">Our Aim</Card.Title>
              <Card.Text>
                We aim to improve agriculture in Africa and exploit the lands
                available for a better lifestyle and a better economy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="service-cards-row">
        <Col xs={12} md={4} className="service-card-col">
          <ServiceCard
            title={<span className="text-green">Help manage your land</span>}
            text="We offer tracking of the improvements and progress as well as daily improvements suggestions and reminders"
          />
        </Col>
        <Col xs={12} md={4} className="service-card-col">
          <ServiceCard
            title={<span className="text-green">Look for partners</span>}
            text="We help you find suitable business partners and build a consistent network for: product marketing, supply and promotion"
          />
        </Col>
        <Col xs={12} md={4} className="service-card-col">
          <ServiceCard
            title={
              <span className="text-green">Improve financial profits</span>
            }
            text="We help you invest in promising products and ensure the highest profit, financial management and best business plan"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
