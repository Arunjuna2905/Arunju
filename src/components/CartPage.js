import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart</h2>
      <div style={styles.cartItems}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
              <p style={styles.itemQuantity}>Quantity: {item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
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
  cartItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cartItem: {
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
  itemQuantity: {
    fontSize: '1rem',
    margin: '10px 0',
  },
};

export default CartPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = React.useState([
//     { id: 1, name: 'Apple', price: 1.5, quantity: 2 },
//     { id: 2, name: 'Banana', price: 1.2, quantity: 3 },
//   ]);

//   const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Shopping Cart</h2>
//       <div style={styles.cartItems}>
//         {cartItems.map(item => (
//           <div key={item.id} style={styles.cartItem}>
//             <h3 style={styles.cartItemName}>{item.name}</h3>
//             <p style={styles.cartItemDetails}>Price: ${item.price.toFixed(2)}</p>
//             <p style={styles.cartItemDetails}>Quantity: {item.quantity}</p>
//             <p style={styles.cartItemDetails}>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//       <h3 style={styles.totalCost}>Total Cost: ${totalCost.toFixed(2)}</h3>
//       <button onClick={() => navigate('/checkout')} style={styles.button}>Proceed to Checkout</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f8f9fa',
//   },
//   heading: {
//     fontSize: '2rem',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   cartItems: {
//     marginBottom: '20px',
//   },
//   cartItem: {
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     marginBottom: '10px',
//   },
//   cartItemName: {
//     fontSize: '1.2rem',
//     margin: '0 0 10px',
//   },
//   cartItemDetails: {
//     fontSize: '1rem',
//     margin: '5px 0',
//   },
//   totalCost: {
//     fontSize: '1.5rem',
//     margin: '20px 0',
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     border: 'none',
//     color: '#fff',
//     padding: '10px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease',
//     display: 'block',
//     margin: '0 auto',
//   },
// };

// export default CartPage;
