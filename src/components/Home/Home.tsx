import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import shoppingImage from '../../images/shopping.jpeg'

const Home: React.FC = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col className="home-content">
          <div className="home-text">
            <h2 className="home-title">Welcome to our Online Grocery Store!</h2>
            <p className="home-description">Explore a wide range of high-quality food products. We take pride in offering fresh and natural products from trusted suppliers.</p>
            <p className="home-description">Our team cares about your health and well-being, so we meticulously select each product to ensure its quality. We strive to provide you with the best products, so you can enjoy great taste and receive nutrition that benefits your body.</p>
            <p className="home-description">Shop with us and experience the freshness and quality of our products that will help you maintain a healthy lifestyle. Thank you for choosing our store, and we hope you'll be satisfied with our products and services.</p>
          </div>
          <div className="home-image-container">
            <img src={shoppingImage} alt="Shopping" className="home-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
