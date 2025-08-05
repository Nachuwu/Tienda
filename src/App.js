import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./App.css";

const sampleProducts = [
  { id: 1, name: "Camiseta", price: 15000 },
  { id: 2, name: "Pantalón", price: 30000 },
  { id: 3, name: "Zapatillas", price: 50000 },
];

function App() {
  const [products] = useState(sampleProducts);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Mi Tienda</h1>
          <nav>
            <Link to="/">Inicio</Link> |{" "}
            <Link to="/carrito">Carrito ({cartItems.length})</Link>
          </nav>
        </header>

        <Routes>
          <Route 
            path="/" 
            element={<HomePage products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/carrito" 
            element={
              <CartPage 
                cartItems={cartItems}
                total={total}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
