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
        <h2>🌱 About EcoDose</h2>
        <p>
          EcoDose is an AI-powered microbial biofertilizer assistant designed to revolutionize sustainable agriculture. 
          Built by a passionate team of first-year engineering students at RVCE, EcoDose combines biotechnology, machine learning, 
          and intuitive design to provide optimized dosage recommendations of Rhizobium-based biofertilizers for leguminous crops.
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
