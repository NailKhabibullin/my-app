import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './createProduct.css';

const CreateProduct: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    axios
      .post('https://fakestoreapi.com/products', formData)
      .then(response => {
        console.log('Object created successfully:', response.data);
        setTitle('');
        setDescription('');
        setImage(null);
      })
      .catch(error => {
        console.error('Error creating object:', error);
      });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="create-product-form">
      <h2 className="form-title">Create Product</h2>
      <Form.Group controlId="formTitle">
        <Form.Label className="form-label">Title:</Form.Label>
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-input" />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label className="form-label">Description:</Form.Label>
        <Form.Control as="textarea" value={description} onChange={e => setDescription(e.target.value)} className="form-input" />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label className="form-label">Image:</Form.Label>
        <Form.Control type="file" onChange={handleImageChange} className="form-file-input" />
      </Form.Group>
      <Button variant="primary" type="submit" className="form-submit-btn">
        Create
      </Button>
    </Form>
  );
};

export default CreateProduct;
