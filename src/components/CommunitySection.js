import React from 'react';
import '../styles/CommunitySection.css';

function CommunitySection() {
  return (
    <section className="community-section">
      <h2>Made for You</h2>
      {/* <p>We’re launching soon! Join our waitlist for early access and exclusive updates.</p> */}
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🏢</div>
          <h3>For Designers</h3>
          <p>Streamline your workflow with a platform that handles 3D rendering and client previews in one place.</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">🌐</div>
          <h3>For Homeowners</h3>
          <p>Experiment with layouts and styles—no design skills needed.</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">👥</div>
          <h3>Other user</h3>
          <p>Some other selling point</p>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection; 