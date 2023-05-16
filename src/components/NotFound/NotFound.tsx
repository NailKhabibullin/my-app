import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">404 - Page Not Found</h2>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go to Home</Link>
    </div>
  );
};

export default NotFound;
