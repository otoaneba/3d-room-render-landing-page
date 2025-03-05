import React from 'react';
import '../styles/HeroSection.css';
import heroBackground from '../assets/interior_design_large.jpg';

function HeroSection() {
  return (
    <main 
      className="hero-section" 
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-content">
        <h1>
          Master Your Room
          <br />
          <span className="highlight">Design Today.</span>
        </h1>
        <p>Transform your space with our AI-powered 3D room planner. Design, visualize, and bring your dream interior to life—no design experience needed.</p>
        <button className="cta-button">Start Designing</button>
      </div>
      {/* <div className="hero-footer">
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="discover-more">
          Discover More
          <span className="arrow">→</span>
        </div>
      </div> */}
    </main>
  );
}

export default HeroSection; 