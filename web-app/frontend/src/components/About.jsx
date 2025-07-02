import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="about-expanded-container">
      <h2>🌱 Why EcoDose?</h2>
      <p>
        As first-year engineering students passionate about sustainability and technology, we noticed a big gap in how biofertilizers are used. Farmers either overdose or underdose due to guesswork, especially with microbial fertilizers like Rhizobium.<br /><br />
        We thought: <b>What if AI could bridge that gap?</b><br />
        EcoDose was born — a project to recommend the right quantity of biofertilizer based on actual soil conditions.<br /><br />
        It started as an Idea Lab project, but we quickly realized it had real-world potential — especially in regions like Karnataka where Rhizobium-based fertilization is common but not optimized.
      </p>
      <h2>👨‍💻 Meet the Team</h2>
      <ul className="team-list">
        <li><b>Varun Aditya</b><br />Backend & ML Integration | Loves building AI that actually <i>does</i> something.<br />Also the guy writing this. Probably overcaffeinated.</li>
        <li><b>Lakshana J.</b><br />UI/UX & Frontend Lead | Designed the layout that made our judges say "ooh, clean."</li>
        <li><b>Tanishi Jain</b><br />Sensor & Hardware Interface | Knows which wire goes where. Always calm during debugging.</li>
        <li><b>Priyanka S.</b><br />Data & Research Analyst | Dug through papers to understand what Rhizobium even <i>is</i>.</li>
        <li><b>Advaith Nair</b><br />Vision & Outreach | Talked to professors, gathered feedback, and helped shape the roadmap.</li>
      </ul>
      <h2>⚙️ How It Works</h2>
      <p>
        EcoDose uses real-time <b>soil data</b> — including pH, moisture, and NPK — to predict the <b>ideal dosage of Rhizobium-based biofertilizer beads (in g/m²)</b> using a trained <b>Random Forest Regressor</b> model.<br /><br />
        <ul>
          <li><b>Training Data:</b> Simulated but hyper-realistic data based on GKVK field parameters.</li>
          <li><b>Features:</b> pH, Moisture %, Nitrogen, Phosphorus, Potassium</li>
          <li><b>Target:</b> Ideal dosage (g/m²) of microbial beads</li>
          <li><b>Model:</b> Random Forest + Linear Regression (for comparison)</li>
        </ul>
        We use <b>Flask</b> as our backend, serve predictions through a <b>web frontend</b>, and support <b>sensor integration via ESP32</b>.<br /><br />
        <i>Future updates will include a mobile version, NLP support for rural languages, and possibly an automated dispersal system.</i>
      </p>
      <h2>🚀 Results So Far</h2>
      <ul>
        <li>Model Accuracy: R² = 0.85, MAE ≈ 4.42 g/m²</li>
        <li>Real-time sensors for pH and moisture calibrated to match training data</li>
        <li>UI/UX optimized for ease of use by farmers and agri students</li>
        <li>Professors at RVCE have shown strong interest in real-world application</li>
      </ul>
      <blockquote>“EcoDose represents the kind of AI we actually need in agri-tech.” – RVCE Faculty (Anonymous)</blockquote>
      <h2>🗺️ What's Next?</h2>
      <ul>
        <li>Integrate multilingual NLP interface for rural farmers (vernacular commands)</li>
        <li>Convert to a PWA (progressive web app)</li>
        <li>Field testing with actual soil samples at GKVK</li>
        <li>Automate the <b>bead dispersal</b> based on predicted dosage</li>
      </ul>
      <h2>🌾 What is Rhizobium?</h2>
      <p>
        Rhizobium is a nitrogen-fixing bacteria commonly used in microbial biofertilizers for leguminous crops. It converts atmospheric nitrogen into plant-usable nitrogen — reducing the need for synthetic fertilizers.
      </p>
      <h2>❓ Why dose matters?</h2>
      <p>
        Too much → waste & microbial competition.<br />
        Too little → ineffective results.<br />
        EcoDose finds that <b>sweet spot</b> using real soil data.
      </p>
      <h2>🤖 Why use AI?</h2>
      <p>
        Because soil isn't one-size-fits-all.<br />
        AI lets us customize dosage based on <b>actual conditions</b>, not generic charts.
      </p>
    </div>
  </section>
);

export default About; 