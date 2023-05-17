import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <Container className="contact-container">
      <Row>
        <Col> 
          <h2 className="form-title">Contact Page</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="form-label">Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="form-submit-btn">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
