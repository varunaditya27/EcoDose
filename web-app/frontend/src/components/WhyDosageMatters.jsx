import React from 'react';
import './WhyDosageMatters.css';

const WhyDosageMatters = () => (
  <div className="about-card why-dosage">
    <h2>❓ Why Does Dosage Matter?</h2>
    <p className="dosage-para">
      Microbial biofertilizers like <strong>Rhizobium</strong> are living organisms — not chemical sprays. Their effectiveness depends on applying the right amount to the right soil, at the right time.
    </p>
    <h3 className="dosage-subhead">🌾 Consequences of Incorrect Dosage:</h3>
    <ul className="custom-list">
      <li><span className="list-title">Overapplication:</span> Leads to microbial overcrowding and competition, reducing nitrogen fixation efficiency and wasting resources.</li>
      <li><span className="list-title">Underapplication:</span> Results in weak colonization of root nodules, leading to poor nitrogen availability and stunted plant growth.</li>
    </ul>
    <h3 className="dosage-subhead">🎯 The Sweet Spot:</h3>
    <p className="dosage-para">
      EcoDose uses AI to calculate the <strong>ideal microbial bead dosage (in g/m²)</strong> for your soil conditions. This balance:
    </p>
    <ul className="custom-list">
      <li>Maximizes nitrogen fixation efficiency</li>
      <li>Reduces waste and environmental runoff</li>
      <li>Promotes healthier crops and consistent yield</li>
    </ul>
    <blockquote className="future-note">
      🌍 By optimizing dosage, we promote sustainable farming — using just enough to help the soil, without harming the ecosystem.
    </blockquote>
  </div>
);

export default WhyDosageMatters;
