import React from 'react';

const Navbar = () => (
  <header className="navbar" role="navigation" aria-label="Main Navigation">
    <div className="logo" style={{fontWeight: 900, fontSize: '2.1rem', letterSpacing: '2px'}}>
      <span role="img" aria-label="EcoDose leaf">🌱</span> EcoDose
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#form-section">Dosage Recommendation</a>
      <a href="#about">About</a>
      <a href="#" aria-label="Open EcoDose Assistant" style={{fontWeight:600}}>
        Assistant
      </a>
    </nav>
  </header>
);

export default Navbar; 