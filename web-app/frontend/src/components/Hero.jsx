import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>EcoDose</h1>
      <p className="tagline">Smart Dosing. Better Soil. Greener Tomorrow.</p>
      <button id="cta-btn" onClick={() => {
        const formSection = document.getElementById('form-section');
        if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
      }}>
        Get Your Recommendation
      </button>
    </div>
  </section>
);

export default Hero; 