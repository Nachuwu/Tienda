import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal, removeFromCart } = useCart();

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Tu carrito</h2>
        <button onClick={closeCart} className="close-btn">&times;</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>{item.quantity} x ${item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="close-btn">&times;</button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <Link to="/cart" onClick={closeCart}>
            <button>Go to Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
