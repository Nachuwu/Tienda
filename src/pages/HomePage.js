import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>Bienvenido a Tienda React</h1>
        <p>Tu lugar para encontrar productos increíbles.</p>
      </header>
      
      <section className="home-section">
        <h2>Nuestra Misión</h2>
        <p>Ofrecer productos de la más alta calidad con un servicio al cliente excepcional, creando una experiencia de compra inigualable para cada uno de nuestros clientes.</p>
      </section>
      
      <section className="home-section">
        <h2>Nuestra Visión</h2>
        <p>Ser la tienda en línea líder en nuestra categoría, reconocida por nuestra innovación, compromiso con la calidad y la satisfacción total de nuestros clientes.</p>
      </section>
      
      <section className="home-section">
        <h2>Ubicación</h2>
        <p>Nos encontramos en el corazón de la ciudad, pero nuestra tienda online llega a todos los rincones del país. ¡Compra desde la comodidad de tu hogar!</p>
        <p><strong>Dirección:</strong> Av. Siempre Viva 742, Puente Alto, Santiago.</p>
      </section>
    </div>
  );
};

export default HomePage;
