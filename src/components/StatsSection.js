import React from 'react';

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-item">
          <h3>2,245,341</h3>
          <p>Members</p>
        </div>
        <div className="stat-item">
          <h3>46,328</h3>
          <p>Clubs</p>
        </div>
        <div className="stat-item">
          <h3>828,867</h3>
          <p>Event Bookings</p>
        </div>
        <div className="stat-item">
          <h3>1,926,436</h3>
          <p>Payments</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection; 