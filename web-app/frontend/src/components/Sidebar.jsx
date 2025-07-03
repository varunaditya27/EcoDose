import React, { useState } from 'react';
import { FaHome, FaFlask, FaInfoCircle, FaRobot, FaBars, FaLeaf, FaUsers, FaCogs, FaChartBar, FaLightbulb, FaSeedling, FaQuestionCircle, FaBrain } from 'react-icons/fa';
import './Sidebar.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#why-ecodose', label: 'Why EcoDose', icon: <FaSeedling /> },
  { href: '#form-section', label: 'Dosage Recommendation', icon: <FaFlask /> },
  { href: '#about', label: 'Project Overview', icon: <FaInfoCircle /> },
  { href: '#team', label: 'Meet the Team', icon: <FaUsers /> },
  { href: '#how-ecodose-works', label: 'How EcoDose works', icon: <FaCogs /> },
  { href: '#results-impact', label: "Results & Impact", icon: <FaChartBar /> },
  { href: '#whats-next', label: "What's Next", icon: <FaLightbulb /> },
  { href: '#what-is-rhizobium', label: 'What is Rhizobium', icon: <FaLeaf /> },
  { href: '#why-dosage-matters', label: 'Why does dosage matter', icon: <FaQuestionCircle /> },
  { href: '#why-ai', label: 'Why use AI', icon: <FaBrain /> },
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