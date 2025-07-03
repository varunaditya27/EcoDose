import React from 'react';
import MeetTheTeam from './MeetTheTeam';
import HowEcoDoseWorks from './HowEcoDoseWorks';
import ResultsAndImpact from './ResultsAndImpact';
import WhatsNext from './WhatsNext';
import WhatIsRhizobium from './WhatIsRhizobium';
import WhyDosageMatters from './WhyDosageMatters';
import WhyUseAI from './WhyUseAI';

const About = () => (
  <section className="about" id="about">
    <div className="about-expanded-container">
      <div className="intro-card">
      <h2>📚 Project Overview</h2>
        <p>
          EcoDose is a full-stack solution that bridges biotechnology and AI to solve one of agriculture’s most overlooked challenges: optimizing biofertilizer application. 
          Developed as part of RVCE’s <strong>Experiential Learning program</strong>, our system blends real-time sensor data, machine learning predictions, and user-friendly design into one platform.
        </p>
        <p>
          By leveraging real-time soil input such as <strong>pH</strong>, <strong>moisture</strong>, and <strong>NPK levels</strong>, 
          our system intelligently predicts the right amount of biofertilizer to apply — maximizing crop yield while minimizing waste.
        </p>
        <p>
          Scroll down to meet our team, understand how the tech works, and see the impact EcoDose can create in real-world farming practices.
        </p>
      </div>

      <MeetTheTeam />
      <HowEcoDoseWorks />
      <ResultsAndImpact />
      <WhatsNext />
      <WhatIsRhizobium />
      <WhyDosageMatters />
      <WhyUseAI />
    </div>
  </section>
);

export default About;
