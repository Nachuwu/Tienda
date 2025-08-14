import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CartSidebar from './components/CartSidebar';
import { useCart } from './context/CartContext';

function App() {
  const { cartCount, toggleCart } = useCart();

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-brand">Tienda React</Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <div className="cart-icon" onClick={toggleCart}>
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </nav>

      <CartSidebar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;