import React from "react";

function CartPage({ cartItems, total, removeFromCart, updateQuantity }) {
  return (
    <section>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>${item.price.toLocaleString()}</p>
              <div>
                Cantidad:
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              <hr />
            </div>
          ))}
          <p><strong>Total:</strong> ${total.toLocaleString()}</p>
          <button onClick={() => alert("Aquí iría el medio de pago")}>
            Proceder al pago
          </button>
        </>
      )}
    </section>
  );
}

export default CartPage;
