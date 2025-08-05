import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import ProductCard from "../components/ProductCard";

function HomePage({ products, addToCart }) {
  return (
    <>
      <Home />
      <section>
        <h2>Productos</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </section>
      <About />
    </>
  );
}

export default HomePage;
