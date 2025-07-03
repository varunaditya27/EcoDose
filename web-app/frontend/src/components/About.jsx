import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="about-expanded-container">
      <div className="about-card">
        <h2>👨‍💻 Meet the Team</h2>
        <ul className="team-list">
          <li><b>Varun Aditya</b><br />Backend & ML Integration | Loves building AI that actually <i>does</i> something.<br />Probably overcaffeinated.</li>
          <li><b>Lakshana J.</b><br />UI/UX & Frontend Lead | Designed the layout that made our judges say "ooh, clean."</li>
          <li><b>Tanishi Jain</b><br />Sensor & Hardware Interface | Knows which wire goes where. Always calm during debugging.</li>
          <li><b>Priyanka S.</b><br />Data & Research Analyst | Dug through papers to understand what Rhizobium even <i>is</i>.</li>
          <li><b>Advaith Nair</b><br />Vision & Outreach | Talked to professors, gathered feedback, and helped shape the roadmap.</li>
        </ul>
      </div>
      <div className="about-card">
        <h2>⚙️ How EcoDose Works</h2>
        <p>
          EcoDose uses real-time <b>soil data</b>—including pH, moisture, and NPK—to predict the <b>ideal dosage of Rhizobium-based biofertilizer beads (in g/m²)</b> using a trained <b>Random Forest Regressor</b> model.
        </p>
        <ul>
          <li><b>Training Data:</b> Simulated, hyper-realistic data based on GKVK field parameters</li>
          <li><b>Features:</b> pH, Moisture %, Nitrogen, Phosphorus, Potassium</li>
          <li><b>Target:</b> Ideal dosage (g/m²) of microbial beads</li>
          <li><b>Models:</b> Random Forest & Linear Regression (for comparison)</li>
        </ul>
        <p>
          We use <b>Flask</b> as our backend, serve predictions through a <b>web frontend</b>, and support <b>sensor integration via ESP32</b>.<br />
          <i>Future updates: mobile version, NLP for rural languages, and automated dispersal system.</i>
        </p>
      </div>
      <div className="about-card">
        <h2>🚀 Results & Impact</h2>
        <ul>
          <li>Model Accuracy: <b>R² = 0.85</b>, <b>MAE ≈ 4.42 g/m²</b></li>
          <li>Real-time sensors for pH and moisture calibrated to match training data</li>
          <li>UI/UX optimized for ease of use by farmers and agri students</li>
          <li>Professors at RVCE have shown strong interest in real-world application</li>
        </ul>
        <blockquote>“EcoDose represents the kind of AI we actually need in agri-tech.” – RVCE Faculty (Anonymous)</blockquote>
      </div>
      <div className="about-card">
        <h2>🗺️ What's Next?</h2>
        <ul>
          <li>Integrate multilingual NLP interface for rural farmers</li>
          <li>Convert to a PWA (progressive web app)</li>
          <li>Field testing with actual soil samples at GKVK</li>
          <li>Automate <b>bead dispersal</b> based on predicted dosage</li>
        </ul>
      </div>
      <div className="about-card">
        <h2>🌾 What is Rhizobium?</h2>
        <p>
          <b>Rhizobium</b> is a nitrogen-fixing bacteria used in microbial biofertilizers for leguminous crops. It converts atmospheric nitrogen into plant-usable nitrogen, reducing the need for synthetic fertilizers.
        </p>
      </div>
      <div className="about-card">
        <h2>❓ Why Does Dosage Matter?</h2>
        <p>
          Too much → waste & microbial competition.<br />
          Too little → ineffective results.<br />
          EcoDose finds that <b>sweet spot</b> using real soil data.
        </p>
      </div>
      <div className="about-card">
        <h2>🤖 Why Use AI?</h2>
        <p>
          Because soil isn't one-size-fits-all.<br />
          AI lets us customize dosage based on <b>actual conditions</b>, not generic charts.
        </p>
      </div>
    </div>
  </section>
);

export default About; 