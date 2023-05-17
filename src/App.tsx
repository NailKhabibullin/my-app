// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import CreateProduct from './components/CreateProduct/CreateProduct';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create_product" element={<CreateProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;
