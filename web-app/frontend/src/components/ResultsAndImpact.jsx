import React from 'react';
import './ResultsAndImpact.css';

const ResultsAndImpact = () => (
  <div className="about-card results-impact">
    <h2>🚀 Results & Impact</h2>
    <p className="results-para">
      EcoDose isn’t just a concept — it’s a working system that has demonstrated strong performance across simulation and initial test environments.
    </p>
    <p className="results-para">
      Here’s what we’ve achieved so far:
    </p>
    <h3 className="results-subhead">📈 Model Performance</h3>
    <ul className="custom-list">
      <li><span className="list-title">R² Score:</span> 0.85 — strong correlation between predicted and optimal dosage</li>
      <li><span className="list-title">MAE:</span> ~4.42 g/m² — low average prediction error for dosage</li>
    </ul>
    <h3 className="results-subhead">🔧 System Calibration</h3>
    <ul className="custom-list">
      <li>pH and moisture sensors calibrated to reflect dataset input distribution</li>
      <li>Analog data mapped and constrained to training data ranges</li>
    </ul>
    <h3 className="results-subhead">🧑‍🌾 Human-Centered Design</h3>
    <ul className="custom-list">
      <li>Clean, intuitive UI/UX optimized for farmers and agri students</li>
      <li>Multi-model option for explainability (Linear vs. Random Forest)</li>
    </ul>
    <h3 className="results-subhead">🏫 Institutional Backing</h3>
    <ul className="custom-list">
      <li>Positive reception from RVCE faculty, biotech advisors, and agri-tech mentors</li>
      <li>Potential for pilot collaboration in future semesters</li>
    </ul>
    <blockquote className="eco-quote">
      “EcoDose represents the kind of AI we actually need in agri-tech.”
      <br />
      <span className="eco-quote-source">– RVCE Faculty (Anonymous)</span>
    </blockquote>
  </div>
);

export default ResultsAndImpact;
