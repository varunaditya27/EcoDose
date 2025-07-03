import React, { useState } from 'react';

const ChatbotButton = ({ enabled, soilData, open, setOpen }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <button
        className={`chatbot-fab${enabled ? '' : ' chatbot-fab-disabled'}`}
        onClick={() => enabled && setOpen(true)}
        onMouseEnter={() => !enabled && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        disabled={!enabled}
        aria-label="Open EcoDose Assistant"
        style={{ position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: 200 }}
      >
        <span role="img" aria-label="chat">💬</span>
      </button>
      {showTooltip && (
        <div className="chatbot-tooltip" style={{ position: 'fixed', bottom: '5.2rem', right: '2.5rem', background: '#333', color: '#fff', padding: '0.7rem 1.1rem', borderRadius: '8px', fontSize: '1rem', zIndex: 201 }}>
          Enter soil data to unlock the EcoDose Assistant.
        </div>
      )}
      {open && enabled && (
        <div className="chatbot-modal">
          {/* Chatbot UI goes here. Soil data: {JSON.stringify(soilData)} */}
          <div className="chatbot-modal-content">
            <button className="chatbot-modal-close" onClick={() => setOpen(false)}>&times;</button>
            <h3>EcoDose Assistant</h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Soil data: {JSON.stringify(soilData)}</p>
            <div style={{ marginTop: '2rem', color: '#aaa' }}>[Chatbot UI coming soon]</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton; 