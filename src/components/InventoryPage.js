import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InventoryPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', price: 1.5, image: 'https://th.bing.com/th/id/OIP.kzo22vGPqcf7d5w_QJhrfQHaFj?w=258&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7', quantity: 0 },
    { id: 2, name: 'Banana', price: 1.2, image: 'https://th.bing.com/th?id=OIP.ejv3S6zZx3ykff8i0GZmUgHaGQ&w=271&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', quantity: 0 },
    { id: 3, name: 'Orange', price: 1.8, image: 'https://th.bing.com/th?id=OIP.PKHYlstDYAp3lswvX1o0aAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', quantity: 0 },
  ]);

  const [cart, setCart] = useState([]);

  // Fetch inventory items on page load (Optional if using static items as above)
  useEffect(() => {
    // Load inventory (can be from static data or backend)
    axios.get('/api/inventory')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching inventory:', error);
      });

    // Fetch cart data when component loads
    axios.get('/api/cart')
      .then(response => {
        setCart(response.data); // Load cart items from the backend
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, []);

    const addToCart = (item) => {
      axios.post('/api/cart', { itemId: item.id, quantity: 1 })
        .then(response => {
          alert(`${item.name} added to cart`);

          // Update cart state with the response from the backend
          setCart(response.data);  // Assuming backend returns the updated cart
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
        });
    };
   
    

  return (

    <div style={styles.container}>
      <h2 style={styles.heading}>Inventory</h2>
      <div style={styles.items}>
        {items.map(item => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)} style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/cart')} style={styles.button}>Go to Cart</button>
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
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    width: '30%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  itemImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  itemName: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  itemPrice: {
    fontSize: '1rem',
    margin: '10px 0',
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
  },
};

export default InventoryPage;
