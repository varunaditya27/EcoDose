import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './MeetTheTeam.css';

const teamMembers = [
  {
    name: "Varun Aditya",
    dept: "ISE",
    role: "Software Development & ML Lead",
    img: "/team/varun.jpg",
    desc: "Led the software side of the project — including building the web interface, training ML models, and architecting the backend infrastructure.",
    linkedin: "https://www.linkedin.com/in/varunaditya27"
  },
  {
    name: "Lakshana J.",
    dept: "Biotech",
    role: "Lead - Biotech Lab Work",
    img: "/team/lakshana.jpg",
    desc: "Handled Rhizobium culturing and led the physical development of alginate-chitosan biofertilizer beads in the lab.",
    linkedin: "https://www.linkedin.com/in/lakshanaj"
  },
  {
    name: "Tanishi Jain",
    dept: "AIML",
    role: "Biotech Research & Dataset Acquisition",
    img: "/team/tanishi.jpg",
    desc: "Led the research methodology for the biotech components of the project, especially around bead design. Also contributed to dataset acquisition and formulation logic.",
    linkedin: "https://www.linkedin.com/in/tanishi-jain-01871633a"
  },
  {
    name: "Priyanka S.",
    dept: "AIML",
    role: "Biotech + ML + Data",
    img: "/team/priyanka.jpg",
    desc: "Worked on bead development, Rhizobium culture, dataset acquisition, and also contributed to the ML model pipeline.",
    linkedin: "https://www.linkedin.com/in/priyanka-s-2105b2363"
  },
  {
    name: "Advaith Nair",
    dept: "ECE",
    role: "Sensor Integration & NPK Analysis",
    img: "/team/advaith.jpg",
    desc: "Engineered the ESP32-based sensor system and led the chemical analysis experiments for measuring NPK levels.",
    linkedin: "http://www.linkedin.com/in/advaith-nair-55529632a"
  }
];

const MeetTheTeam = () => (
  <section className="team-section" id="team">
    <h2>👥 Meet the Team</h2>
    <p className="team-intro">
      We're a 5-member interdisciplinary crew from RVCE, combining biology, AI, electronics, and software to rethink how sustainable farming works — from lab to land.
    </p>
    <div className="team-card-grid">
      {teamMembers.map((member, i) => (
        <div className="mini-card" key={i}>
          <img src={member.img} alt={member.name} className="mini-photo" />
          <div className="mini-info">
            <h3>{member.name}</h3>
            <p className="dept">{member.dept} Dept.</p>
            <p className="role">{member.role}</p>
            <p className="desc">{member.desc}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MeetTheTeam;
