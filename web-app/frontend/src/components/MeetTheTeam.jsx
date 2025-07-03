import React from 'react';

const MeetTheTeam = () => (
  <div className="about-card">
    <h2>👨‍💻 Meet the Team</h2>
    <p>
      Our diverse team brings together expertise in AI, hardware, research, and design to make EcoDose a reality:
    </p>
    <ul className="team-list">
      <li><b>Varun Aditya</b> – Backend & ML Integration<br /><span className="team-desc">Architects the AI and backend systems. Loves building tech that actually <i>does</i> something. Probably overcaffeinated.</span></li>
      <li><b>Lakshana J.</b> – UI/UX & Frontend Lead<br /><span className="team-desc">Designs intuitive interfaces and ensures a seamless user experience. Made our judges say "ooh, clean."</span></li>
      <li><b>Tanishi Jain</b> – Sensor & Hardware Interface<br /><span className="team-desc">Integrates sensors and hardware, ensuring reliable real-time data. Always calm during debugging.</span></li>
      <li><b>Priyanka S.</b> – Data & Research Analyst<br /><span className="team-desc">Digs through research to ground our models in science. Knows what Rhizobium really <i>is</i>.</span></li>
      <li><b>Advaith Nair</b> – Vision & Outreach<br /><span className="team-desc">Connects with experts, gathers feedback, and shapes our roadmap for real-world impact.</span></li>
    </ul>
  </div>
);

export default MeetTheTeam; 