import React, { useState } from 'react';
import './Footer.css';

const PRIVACY_TEXT = `
EcoDose Privacy Policy

We respect your privacy. EcoDose does not collect, store, or share any personal information. All soil data you enter is processed locally in your browser and sent only to our secure backend for dosage calculation and AI feedback. We do not use cookies or trackers. Your data is never sold or shared with third parties. For questions, contact the student team at RVCE.
`;

const TERMS_TEXT = `
EcoDose Terms of Use

EcoDose is an educational project built by students at RVCE for informational and research purposes only. The recommendations and feedback provided by EcoDose are based on machine learning models and should not be considered as professional agricultural advice. Use at your own discretion. The team is not liable for any outcomes resulting from the use of this tool. By using EcoDose, you agree to these terms.
`;

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <a href="#privacy" className="footer-link" onClick={e => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a>
            <span className="footer-sep">|</span>
            <a href="#terms" className="footer-link" onClick={e => { e.preventDefault(); setShowTerms(true); }}>Terms of Use</a>
            <span className="footer-sep">|</span>
            <a href="https://github.com/varunaditya27/EcoDose" target="_blank" rel="noopener" className="footer-link">GitHub Repository</a>
          </nav>
          <div className="footer-note">
            © 2025 EcoDose. Built by 1st year engineering students at RVCE.
          </div>
        </div>
      </footer>
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="footer-modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <h3>Privacy Policy</h3>
            <pre className="footer-modal-text">{PRIVACY_TEXT}</pre>
            <button className="footer-modal-close" onClick={() => setShowPrivacy(false)}>Close</button>
          </div>
        </div>
      )}
      {/* Terms of Use Modal */}
      {showTerms && (
        <div className="footer-modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <h3>Terms of Use</h3>
            <pre className="footer-modal-text">{TERMS_TEXT}</pre>
            <button className="footer-modal-close" onClick={() => setShowTerms(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer; 