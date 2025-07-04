import React from 'react';
import './WhatsNext.css';

const WhatsNext = () => (
  <div className="about-card whats-next">
    <h2>🗺️ What's Next?</h2>

    <p>
      EcoDose is just the beginning. Here's a look at what we're building next to make it more powerful, accessible, and impactful:
    </p>

    <ul className="custom-list">
      <li>
        <span className="list-title">🌐 Multilingual NLP Interface:</span> Enable farmers to interact with EcoDose in their native languages — including Kannada, Hindi, and more — for better accessibility.
      </li>
      <li>
        <span className="list-title">📱 Native Mobile App:</span> Develop a lightweight Android application for offline-first usage, sensor integration, and on-the-go recommendations.
      </li>
      <li>
        <span className="list-title">🤖 Automated Bead Dispersal System:</span> Design a hardware extension that physically dispenses the right quantity of microbial beads — based on our AI predictions.
      </li>
    </ul>

    <p className="future-note">
      🚀 Our long-term goal is to transform EcoDose into a farmer-friendly, AI-powered ecosystem — combining smart software with intuitive hardware, built entirely by student innovators.
    </p>
  </div>
);

export default WhatsNext;
