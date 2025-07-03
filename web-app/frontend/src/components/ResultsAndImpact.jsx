import React from 'react';

const ResultsAndImpact = () => (
  <div className="about-card">
    <h2>🚀 Results & Impact</h2>
    <p>
      EcoDose has already made a measurable difference in the way biofertilizer dosing is approached. Our models and system have been tested and validated in both simulated and real-world conditions.
    </p>
    <ul>
      <li><b>Model Accuracy:</b> R² = 0.85, MAE ≈ 4.42 g/m²</li>
      <li>Real-time sensors for pH and moisture calibrated to match training data</li>
      <li>UI/UX designed for ease of use by farmers and agri students</li>
      <li>Strong interest from professors and agri-tech experts at RVCE</li>
    </ul>
    <blockquote style={{fontWeight:600, fontSize:'1.1rem', color:'#3a5a40', borderLeft:'5px solid #588157'}}>“EcoDose represents the kind of AI we actually need in agri-tech.”<br /><span style={{fontWeight:400, fontSize:'1rem'}}>– RVCE Faculty (Anonymous)</span></blockquote>
  </div>
);

export default ResultsAndImpact; 