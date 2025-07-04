import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <nav className="footer-nav">
        <a href="#" className="footer-link">Privacy Policy</a>
        <span className="footer-sep">|</span>
        <a href="#" className="footer-link">Terms of Use</a>
        <span className="footer-sep">|</span>
        <a href="https://github.com/varunaditya27/EcoDose" target="_blank" rel="noopener" className="footer-link">GitHub Repository</a>
      </nav>
      <div className="footer-note">
        © 2025 EcoDose. Built by 1st year engineering students at RVCE.
      </div>
    </div>
  </footer>
);

export default Footer; 