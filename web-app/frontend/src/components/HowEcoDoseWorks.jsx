import React from 'react';

const HowEcoDoseWorks = () => (
  <div className="about-card">
    <h2>⚙️ How EcoDose Works</h2>
    <p>
      EcoDose leverages real-time <b>soil data</b>—including pH, moisture, and NPK levels—to predict the <b>ideal dosage of Rhizobium-based biofertilizer beads (in g/m²)</b> using advanced machine learning models.
    </p>
    <ul>
      <li><b>Training Data:</b> Simulated, hyper-realistic data based on GKVK field parameters</li>
      <li><b>Features:</b> pH, Moisture %, Nitrogen, Phosphorus, Potassium</li>
      <li><b>Target:</b> Ideal dosage (g/m²) of microbial beads</li>
      <li><b>Models:</b> Random Forest & Linear Regression (for comparison)</li>
    </ul>
    <p>
      <b>System Integration:</b> Flask backend, web frontend, and ESP32 sensor support.<br />
      <i>Future: Mobile app, NLP for rural languages, and automated dispersal system.</i>
    </p>
  </div>
);

export default HowEcoDoseWorks; 