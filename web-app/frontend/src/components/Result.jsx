import React from 'react';

const Result = ({ dosage, error }) => {
  if (error) {
    return (
      <section className="result-section" id="result-section">
        <div className="card result-card">
          <h2>Error</h2>
          <div className="dosage-value" style={{ color: '#c0392b' }}>{error}</div>
        </div>
      </section>
    );
  }
  if (dosage !== null) {
    return (
      <section className="result-section" id="result-section">
        <div className="card result-card">
          <h2>Recommended Dosage</h2>
          <div className="dosage-value">
            <span id="dosage-counter">{dosage}</span> <span className="unit">g/m²</span>
          </div>
          <div className="success-message">Optimal dosage calculated for your soil!</div>
          {/* Optionally add a bar visualization here */}
        </div>
      </section>
    );
  }
  return null;
};

export default Result; 