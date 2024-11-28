import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    axios.post('/api/checkout')
      .then(() => {
        alert('Thank you for your purchase!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error completing purchase:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <p style={styles.summary}>Please review your order before proceeding to payment.</p>
      <button onClick={handlePurchase} style={styles.button}>Complete Purchase</button>
    </div>
  );
};
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  summary: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    padding: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    display: 'block',
    margin: '0 auto',
  },
};

export default CheckoutPage;
