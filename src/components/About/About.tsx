import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';
import aboutImage from '../../images/about.png';

const About: React.FC = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col md={6}>
          <div className="about-content">
            <h2 className="about-title">About Page</h2>
            <p className="about-description">
              Welcome to the About page of your application!
              <br />
              <br />
              Our company, XYZ Corporation, is a leading provider of high-quality products. We are dedicated to delivering excellent customer service and ensuring customer satisfaction.
              <br />
              <br />
              Address: 123 Main Street, City, Country
              <br />
              Phone: +1 123-456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="about-image-container">
            <img src={aboutImage} alt="About" className="about-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
