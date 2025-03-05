import React from 'react';

function CommunitySection() {
  return (
    <section className="community-section">
      <h2>Manage your entire community in a single system</h2>
      <p>Who is Nextcent suitable for?</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon">🏢</div>
          <h3>Membership Organizations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">🌐</div>
          <h3>National Associations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">👥</div>
          <h3>Clubs And Groups</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection; 