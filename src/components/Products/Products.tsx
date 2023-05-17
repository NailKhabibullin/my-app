import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './products.css'; // Импортируем CSS файл

interface Product {
  id: number;
  title: string;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Container className="product-container">
      <h2 className="form-title">Products Page</h2>
      <Row className="product-grid">
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="wildberries-card">
              <Card.Img variant="top" src={product.image} className="card-image" />
              <Card.Body>
                <Card.Title className="card-title">{product.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
