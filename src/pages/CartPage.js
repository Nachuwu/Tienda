import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, cartTotal, addToCart, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h2>Tu Carrito está vacío</h2>
          <p>Parece que aún no has añadido nada. ¡Explora nuestros productos!</p>
          <Link to="/productos" className="btn-shop">Ir a Productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-page-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-page-item-info">
            <h3>{item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="cart-page-item-actions">
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        </div>
      ))}
      <div className="cart-page-total">
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
      </div>
      <div className="cart-page-actions">
        <button className="checkout-btn" disabled>Proceder al Pago</button>
      </div>
    </div>
  );
};

export default CartPage;
