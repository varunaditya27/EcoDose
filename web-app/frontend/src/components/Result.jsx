import React, { useRef } from 'react';
import './Result.css';

// Utility function for TTS
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Sorry, your browser does not support text-to-speech.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = 'en-IN';
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

const Result = ({ dosage, error, aiFeedback, aiFeedbackLoading }) => {
  const lastFeedbackRef = useRef('');

  // Only update ref if new feedback is available
  if (aiFeedback && aiFeedback !== lastFeedbackRef.current) {
    lastFeedbackRef.current = aiFeedback;
  }

  const handleTTS = () => {
    if (!lastFeedbackRef.current) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      // Optionally restart after cancel
      setTimeout(() => speakText(lastFeedbackRef.current), 150);
    } else {
      speakText(lastFeedbackRef.current);
    }
  };

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
            <div className="ai-feedback-section">
              <div className="ai-feedback-title">AI-based Soil Analysis</div>
              {aiFeedbackLoading ? (
                <div className="ai-feedback-loading">
                  <span className="spinner"></span>
                  <span className="ai-feedback-loading-text">Loading AI analysis...</span>
                </div>
              ) : (
                <div className="ai-feedback-text-with-tts">
                  <div className="ai-feedback-text">{aiFeedback}</div>
                  <button
                    className="tts-btn"
                    aria-label="Read out soil feedback"
                    title="Read Out"
                    onClick={handleTTS}
                    style={{ marginLeft: 8, fontSize: '1.1em', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    🔊 Read Out
                  </button>
                </div>
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