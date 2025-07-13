import React, { useState, useEffect, useRef } from 'react';
import logo from '/logo.png';
import { FaHome, FaFlask, FaInfoCircle, FaRobot, FaBars, FaLeaf, FaUsers, FaCogs, FaChartBar, FaLightbulb, FaSeedling, FaQuestionCircle, FaBrain } from 'react-icons/fa';
import './Sidebar.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#why-ecodose', label: 'Why EcoDose', icon: <FaSeedling /> },
  { href: '#form-section', label: 'Dosage Recommendation', icon: <FaFlask /> },
  { href: '#about', label: 'Project Overview', icon: <FaInfoCircle /> },
  { href: '#team', label: 'Meet the Team', icon: <FaUsers /> },
  { href: '#how-ecodose-works', label: 'How EcoDose works', icon: <FaCogs /> },
  { href: '#results-impact', label: 'Results & Impact', icon: <FaChartBar /> },
  { href: '#whats-next', label: "What's Next", icon: <FaLightbulb /> },
  { href: '#what-is-rhizobium', label: 'What is Rhizobium', icon: <FaLeaf /> },
  { href: '#why-dosage-matters', label: 'Why does dosage matter', icon: <FaQuestionCircle /> },
  { href: '#why-ai', label: 'Why use AI', icon: <FaBrain /> },
];

const sectionIds = navLinks.map(link => link.href.replace('#', ''));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    let prevRatio = 0;
    observerRef.current = new window.IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0;
        let visibleId = 'home';
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleId = entry.target.id;
          }
        });
        setActiveSection(visibleId);
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px', // triggers when section is 40% from top
        threshold: Array.from({length: 21}, (_, i) => i * 0.05),
      }
    );
    sections.forEach(section => {
      observerRef.current.observe(section);
    });
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <aside className={`sidebar${open ? ' open' : ''}`} aria-label="Sidebar Navigation">
        <div className="sidebar-logo">
          <img src={logo} alt="EcoDose Logo" className="sidebar-logo-img" />
        </div>
        <nav className="sidebar-nav" role="navigation">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`sidebar-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
              tabIndex={0}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
              onClick={() => setOpen(false)}
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