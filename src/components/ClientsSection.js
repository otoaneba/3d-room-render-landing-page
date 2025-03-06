import React from 'react';
import '../styles/ClientsSection.css';

function ClientsSection() {
  return (
    <section className="clients-section" id="products">
      <h2>Bring Your Interior Ideas to Life</h2>
      <p>Our platform lets you design rooms in 3D with intuitive tools, pre-loaded assets, and real-time rendering.</p>
      <div className="client-logos">
        {/* Add 4-6 client logo images here */}
        <img src="/client1.png" alt="Client 1" className="client-logo" />
        <img src="/client2.png" alt="Client 2" className="client-logo" />
        <img src="/client3.png" alt="Client 3" className="client-logo" />
        <img src="/client4.png" alt="Client 4" className="client-logo" />
      </div>
    </section>
  );
}

export default ClientsSection; 