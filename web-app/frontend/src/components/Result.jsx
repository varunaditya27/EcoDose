import React from 'react';

const Result = ({ dosage, error, aiFeedback, aiFeedbackLoading }) => {
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
          {(aiFeedbackLoading || aiFeedback) && (
            <div className="ai-feedback-section" style={{marginTop: '1.5em', padding: '1em', background: '#f6f8fa', borderRadius: '8px', border: '1px solid #e1e4e8', minHeight: '60px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
              <div style={{fontWeight: 'bold', color: '#3b3b7a', marginBottom: '0.5em'}}>AI-based Soil Analysis</div>
              {aiFeedbackLoading ? (
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <span className="spinner" style={{width: '20px', height: '20px', border: '3px solid #bbb', borderTop: '3px solid #3b3b7a', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite', marginRight: '10px'}}></span>
                  <span style={{fontSize: '1em', color: '#888'}}>Loading AI analysis...</span>
                </div>
              ) : (
                <div style={{fontSize: '1em', color: '#222'}}>{aiFeedback}</div>
              )}
            </div>
          )}
          {/* Optionally add a bar visualization here */}
        </div>
      </section>
    );
  }
  return null;
};

export default Result; 