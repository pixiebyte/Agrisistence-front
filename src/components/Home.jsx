import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard"; // Ensure this path is correct
import "./Home.css";
import profile from "../images/profile.png";
import improve from "../images/improve.png";
import aim from "../images/aim.png";
import manage from "../images/manage.png";
import partner from "../images/partner.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Row className="mb-3 align-items-stretch">
          <Col md={7} className="left-column">
            <Card className="text-center custom-card welcome-card">
              <Card.Body className="d-flex flex-column align-items-start p-3 position-relative">
                <div className="top-left position-absolute">
                  <img src={profile} alt="Logo" className="card-image" />
                </div>
                <div className="welcome-text">
                  <h5>
                    Welcome back, <strong>James Bkham</strong>
                  </h5>
                </div>
                <div className="bottom-left mt-auto mb-2">
                  <span className="days-span">- 20 days until harvest</span>
                </div>
                <div className="bottom-right text-danger">
                  <span>+3 new suggestions</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="text-center custom-card aim-card">
              <Card.Body className="d-flex flex-column align-items-start">
                <div className="aim-card-content">
                  <div className="aim-card-text">
                    <Card.Title className="text-green">Our Aim</Card.Title>
                    <Card.Text>
                      We aim to improve agriculture in Africa and exploit the
                      lands available for a better lifestyle and a better
                      economy.
                    </Card.Text>
                  </div>
                  <div className="aim-card-icon">
                    <img src={aim} alt="Aim" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="text-green">Services we render</h3>
        <div class="spacer"></div>
        <Row className="service-cards-row align-items-stretch">
          <Col xs={12} md={4} className="service-card-col mb-3">
            <ServiceCard
              title={<span className="text-green">Help manage your land</span>}
              text="We offer tracking of the improvements and progress as well as daily improvements suggestions and reminders"
              icon={<img src={manage} alt="Manage" />}
            />
          </Col>
          <Col xs={12} md={4} className="service-card-col mb-3">
            <ServiceCard
              title={<span className="text-green">Look for partners</span>}
              text="We help you find suitable business partners and build a consistent network for: product marketing, supply and promotion"
              icon={<img src={partner} alt="Partners" />}
            />
          </Col>
          <Col xs={12} md={4} className="service-card-col mb-3">
            <ServiceCard
              title={
                <span className="text-green">Improve financial profits</span>
              }
              text="We help you invest in promising products and ensure the highest profit, financial management and best business plan"
              icon={<img src={improve} alt="Financial" />}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
