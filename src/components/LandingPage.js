
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Welcome to Supermarket Management</h1>
        <p style={styles.heroSubtitle}>Efficiently manage your supermarket with our cutting-edge app.</p>
        <div style={styles.heroButtons}>
          <button onClick={() => navigate('/login')} style={styles.button}>Login</button>
          <button onClick={() => navigate('/signup')} style={{ ...styles.button, marginLeft: '10px' }}>Sign Up</button>
          <button onClick={() => navigate('/inventory')} style={{ ...styles.buttonSecondary, marginLeft: '10px' }}>Get Started</button>
        </div>
      </header>
     
      
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Supermarket Management App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: 0,
    padding: 0,
  },
  heroSection: {
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
  },
  heroHeading: {
    fontSize: '3rem',
    margin: '0 0 10px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    margin: '0 0 20px',
  },
  heroButtons: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#28a745',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  buttonSecondary: {
    backgroundColor: '#ffc107',
  },
  featuresSection: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  feature: {
    width: '30%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '5px',
    margin: '10px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    margin: '0 0 10px',
  },
  featureDescription: {
    fontSize: '1rem',
  },
  testimonialsSection: {
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    textAlign: 'center',
  },
  testimonials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  testimonial: {
    width: '60%',
    marginBottom: '20px',
  },
  testimonialText: {
    fontSize: '1.2rem',
    margin: '0 0 10px',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: '1rem',
    color: '#007bff',
  },
  footer: {
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
  footerText: {
    margin: 0,
  },
};

export default LandingPage;
