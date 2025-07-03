import React, { useState } from 'react';
import { FaHome, FaFlask, FaInfoCircle, FaRobot, FaBars, FaLeaf } from 'react-icons/fa';
import './Sidebar.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#form-section', label: 'Dosage Recommendation', icon: <FaFlask /> },
  { href: '#about', label: 'About', icon: <FaInfoCircle /> },
  { href: '#', label: 'Assistant', icon: <FaRobot /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Determine active link by hash
  const activeHash = typeof window !== 'undefined' ? window.location.hash : '';

  return (
    <>
      <aside className={`sidebar${open ? ' open' : ''}`} aria-label="Sidebar Navigation">
        <div className="sidebar-logo">
          <FaLeaf className="sidebar-logo-icon" aria-label="EcoDose leaf" />
          <span className="sidebar-logo-text">EcoDose</span>
        </div>
        <nav className="sidebar-nav" role="navigation">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`sidebar-link${activeHash === link.href ? ' active' : ''}`}
              tabIndex={0}
              aria-current={activeHash === link.href ? 'page' : undefined}
            >
              <span className="sidebar-link-icon">{link.icon}</span>
              <span className="sidebar-link-label">{link.label}</span>
            </a>
          ))}
        </nav>
      </aside>
      <button
        className="sidebar-hamburger"
        aria-label="Open sidebar menu"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>
      {/* Overlay for mobile */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} aria-hidden="true"></div>}
    </>
  );
};

export default Sidebar; 