import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
