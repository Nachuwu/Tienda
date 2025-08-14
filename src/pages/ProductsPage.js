import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <div>
      <h1>Nuestros Productos</h1>
      {products.length === 0 ? (
        <p>Aún no hay productos en la tienda. ¡Vuelve pronto!</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;