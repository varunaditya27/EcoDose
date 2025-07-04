import React from 'react';
import MeetTheTeam from './MeetTheTeam';
import HowEcoDoseWorks from './HowEcoDoseWorks';
import ResultsAndImpact from './ResultsAndImpact';
import WhatsNext from './WhatsNext';
import WhatIsRhizobium from './WhatIsRhizobium';
import WhyDosageMatters from './WhyDosageMatters';
import WhyUseAI from './WhyUseAI';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <div className="about-expanded-container">
      <div className="intro-card">
        <h2>📚 Project Overview</h2>
        <p className="about-para">
          EcoDose is a full-stack solution that bridges biotechnology and AI to solve one of agriculture's most overlooked challenges: optimizing biofertilizer application.
        </p>
        <p className="about-para">
          Developed as part of RVCE's <strong>Experiential Learning program</strong>, our system blends real-time sensor data, machine learning predictions, and user-friendly design into one platform.
        </p>
        <p className="about-para">
          By leveraging real-time soil input such as <strong>pH</strong>, <strong>moisture</strong>, and <strong>NPK levels</strong>, our system intelligently predicts the right amount of biofertilizer to apply — maximizing crop yield while minimizing waste.
        </p>
        <p className="about-para">
          Scroll down to meet our team, understand how the tech works, and see the impact EcoDose can create in real-world farming practices.
        </p>
      </div>
      <div id="team"><MeetTheTeam /></div>
      <div id="how-ecodose-works"><HowEcoDoseWorks /></div>
      <div id="results-impact"><ResultsAndImpact /></div>
      <div id="whats-next"><WhatsNext /></div>
      <div id="what-is-rhizobium"><WhatIsRhizobium /></div>
      <div id="why-dosage-matters"><WhyDosageMatters /></div>
      <div id="why-ai"><WhyUseAI /></div>
    </div>
  </section>
);

export default About;
