import React, { useState, useEffect, createContext, useContext } from 'react';
import ToastNotification from '../components/ToastNotification';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // 1. Leer el estado inicial del carrito desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart items from localStorage", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 2. Guardar el estado del carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    showToast(`${product.title} añadido al carrito!`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === productId);
      if (itemExists.quantity === 1) {
        return prevItems.filter(item => item.id !== productId);
      } else {
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    toggleCart,
    closeCart,
    cartCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    cartTotal: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {toastMessage && <ToastNotification message={toastMessage} />}
    </CartContext.Provider>
  );
};