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