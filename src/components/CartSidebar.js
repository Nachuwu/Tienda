import React from "react";

function CartSidebar({ isOpen, cartItems, total, toggleCart, removeFromCart, updateQuantity }) {
  if (!isOpen) return null;

  return (
    <aside className="cart-sidebar">
      <h3>Carrito de Compras</h3>
      <button onClick={toggleCart}>Cerrar</button>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Precio: ${item.price.toLocaleString()}</p>
            <p>
              Cantidad: 
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}
      <p>Total: ${total.toLocaleString()}</p>
    </aside>
  );
}

export default CartSidebar;
