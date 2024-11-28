
import React from 'react';
import { Link } from 'react-router-dom';
import { globalStyles } from '../styles/globalStyles';
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>Supermarket Management</h1>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/inventory" style={styles.navLink}>Inventory</Link>
        <Link to="/cart" style={styles.navLink}>Cart</Link>
        <Link to="/checkout" style={styles.navLink}>Checkout</Link>
        <Link to="/login" style={styles.navLink}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#007bff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  brand: {
    fontSize: '1.8rem',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
