import React from 'react';
import './WhatIsRhizobium.css';

const WhatIsRhizobium = () => (
  <div className="about-card what-is-rhizobium">
    <h2>🌾 What is Rhizobium?</h2>
    <p className="rhizo-para">
      <strong>Rhizobium</strong> is a genus of nitrogen-fixing bacteria that forms a symbiotic relationship with the roots of leguminous plants like beans, peas, chickpeas, and groundnuts.
    </p>
    <p className="rhizo-para">
      These microbes colonize the plant’s root nodules and convert inert atmospheric nitrogen (N₂) into ammonia (NH₃) — a form that plants can absorb and use for growth.
    </p>
    <h3 className="rhizo-subhead">🌱 Why is Rhizobium Important?</h3>
    <ul className="custom-list">
      <li><span className="list-title">Boosts Soil Fertility:</span> Naturally enriches the soil by replenishing nitrogen, reducing dependence on chemical fertilizers.</li>
      <li><span className="list-title">Sustainable Farming:</span> Supports long-term soil health and reduces the risk of runoff, pollution, and ecosystem damage.</li>
      <li><span className="list-title">Ideal for Indian Cropping Systems:</span> Legume-rich rotations in India make Rhizobium a powerful biofertilizer for local agricultural needs.</li>
    </ul>
    <blockquote className="future-note">
      🧪 At EcoDose, we encapsulate Rhizobium in alginate-chitosan beads to ensure better microbial survival and controlled release — making nature's nitrogen fixer even smarter.
    </blockquote>
  </div>
);

export default WhatIsRhizobium;
