import React from 'react';
import './HowEcoDoseWorks.css';

const HowEcoDoseWorks = () => (
  <div className="about-card how-ecodose-works">
    <h2>⚙️ How EcoDose Works</h2>
    <p className="how-para">
      EcoDose uses a smart pipeline of <strong>sensor data</strong>, <strong>machine learning</strong>, and <strong>real-time web inference</strong> to recommend the ideal dosage of microbial biofertilizer — tailored to each user’s soil conditions.
    </p>
    <h3 className="how-subhead">🧭 Step-by-Step Workflow</h3>
    <ol className="custom-ol">
      <li><strong>Soil Data Collection:</strong> pH and moisture levels are captured via sensors (ESP32), while NPK values are entered manually.</li>
      <li><strong>Input Preprocessing:</strong> Inputs are normalized and scaled to align with the training dataset used by the ML model.</li>
      <li><strong>ML Prediction:</strong> A trained <strong>Random Forest Regressor</strong> predicts the ideal bead dosage in <em>grams per square meter</em>.</li>
      <li><strong>Web Delivery:</strong> Dosage is presented through the web interface, with a clear visual display.</li>
      <li><strong>Feedback Loop:</strong> Users can interact with an AI assistant powered by Gemini to ask follow-up questions or get explanations.</li>
    </ol>
    <h3 className="how-subhead">🧠 Model Details</h3>
    <ul className="custom-list">
      <li><strong>Training Data:</strong> Modeled after datasets on crops grown in Indian soil conditions</li>
      <li><strong>Features Used:</strong> pH, Moisture (%), Nitrogen (mg/kg), Phosphorus (mg/kg), Potassium (mg/kg)</li>
      <li><strong>Target Variable:</strong> Dosage of biofertilizer (g/m²)</li>
      <li><strong>Models Compared:</strong> Random Forest (primary), Linear Regression (baseline)</li>
    </ul>
    <h3 className="how-subhead">🔗 System Integration</h3>
    <ul className="custom-list">
      <li><strong>Frontend:</strong> React.js (PWA-ready)</li>
      <li><strong>Backend:</strong> Flask (Python + ML + API logic)</li>
      <li><strong>Hardware:</strong> ESP32 microcontroller with analog sensors</li>
      <li><strong>AI:</strong> ML prediction engine + Gemini LLM (for contextual chatbot)</li>
    </ul>
    <blockquote className="how-future-note">
      💡 <strong>Future Upgrades:</strong> Mobile app interface, multilingual chatbot for rural accessibility, and an automated bead dispersal system for large-scale deployment.
    </blockquote>
  </div>
);

export default HowEcoDoseWorks;
