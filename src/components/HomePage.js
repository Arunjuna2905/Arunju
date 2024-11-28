
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Supermarket Management System</h1>
        <p style={styles.subtitle}>Your one-stop solution for managing and shopping.</p>
      </header>
      <main style={styles.main}>
        <section style={styles.featureSection}>
          <h2 style={styles.featureHeading}>Features</h2>
          <div style={styles.featureList}>
            <div style={styles.featureItem}>
              <img src="https://th.bing.com/th?q=Inventory+Management+Graphic+Design&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Feature 1" style={styles.featureImage} />
              <h3 style={styles.featureTitle}>Easy Inventory Management</h3>
              <p style={styles.featureDescription}>Manage your inventory with ease and keep track of stock levels.</p>
            </div>
            <div style={styles.featureItem}>
              <img src="https://th.bing.com/th/id/OIP.j7yBT4Y9xuFdYVz4TD4zzgHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 2" style={styles.featureImage} />
              <h3 style={styles.featureTitle}>User-Friendly Shopping</h3>
              <p style={styles.featureDescription}>Browse and shop with a seamless and intuitive interface.</p>
            </div>
            <div style={styles.featureItem}>
              <img src="https://via.placeholder.com/150httphttps://th.bing.com/th/id/OIP.94Qt5IZ0z3_2zaIHrqWMRgHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7s://th.bing.com/th/id/OIP.x3SqEir2VE4Ud0daK3Y6IQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 3" style={styles.featureImage} />
              <h3 style={styles.featureTitle}>Secure Checkout</h3>
              <p style={styles.featureDescription}>Enjoy a secure and straightforward checkout process.</p>
            </div>
          </div>
        </section>
        <section style={styles.ctaSection}>
          <button onClick={() => navigate('/inventory')} style={styles.ctaButton}>Shop Now</button>
        </section>
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Supermarket Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
  main: {
    width: '80%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureSection: {
    marginBottom: '40px',
  },
  featureHeading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#007bff',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    width: '30%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  featureImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#007bff',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  ctaSection: {
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  footerText: {
  margin: '0',
  },
};

export default HomePage;
