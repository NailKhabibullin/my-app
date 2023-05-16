import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <Nav className="nav">
        <Nav.Item className="nav-item">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active-link' : ''}`}>Products</Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/create_product" className={`nav-link ${location.pathname === '/create_product' ? 'active-link' : ''}`}>Create product</Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}>About</Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
