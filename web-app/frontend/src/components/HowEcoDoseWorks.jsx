import React from 'react';

const HowEcoDoseWorks = () => (
  <div className="about-card">
    <h2>⚙️ How EcoDose Works</h2>

    <p>
      EcoDose uses a smart pipeline of <strong>sensor data</strong>, <strong>machine learning</strong>, and <strong>real-time web inference</strong> 
      to recommend the ideal dosage of microbial biofertilizer — tailored to each user’s soil conditions.
    </p>

    <h4 style={{ marginTop: '1.5rem' }}>🧭 Step-by-Step Workflow</h4>
    <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.7' }}>
      <li>
        <strong>Soil Data Collection:</strong> pH and moisture levels are captured via sensors (ESP32), while NPK values are entered manually.
      </li>
      <li>
        <strong>Input Preprocessing:</strong> Inputs are normalized and scaled to align with the training dataset used by the ML model.
      </li>
      <li>
        <strong>ML Prediction:</strong> A trained <strong>Random Forest Regressor</strong> predicts the ideal bead dosage in <em>grams per square meter</em>.
      </li>
      <li>
        <strong>Web Delivery:</strong> Dosage is presented through the web interface, with a clear visual display.
      </li>
      <li>
        <strong>Feedback Loop:</strong> Users can interact with an AI assistant powered by Gemini to ask follow-up questions or get explanations.
      </li>
    </ol>

    <h4 style={{ marginTop: '2rem' }}>🧠 Model Details</h4>
    <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.7' }}>
      <li><strong>Training Data:</strong> Simulated but realistic values modeled after GKVK field conditions</li>
      <li><strong>Features Used:</strong> pH, Moisture (%), Nitrogen (mg/kg), Phosphorus (mg/kg), Potassium (mg/kg)</li>
      <li><strong>Target Variable:</strong> Dosage of biofertilizer (g/m²)</li>
      <li><strong>Models Compared:</strong> Random Forest (primary), Linear Regression (baseline)</li>
    </ul>

    <h4 style={{ marginTop: '2rem' }}>🔗 System Integration</h4>
    <p style={{ lineHeight: '1.6' }}>
      - <strong>Frontend:</strong> React.js (PWA-ready)<br />
      - <strong>Backend:</strong> Flask (Python + ML + API logic)<br />
      - <strong>Hardware:</strong> ESP32 microcontroller with analog sensors<br />
      - <strong>AI:</strong> ML prediction engine + Gemini LLM (for contextual chatbot)
    </p>

    <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#333' }}>
      💡 <strong>Future Upgrades:</strong> Mobile app interface, multilingual chatbot for rural accessibility, and an automated bead dispersal system for large-scale deployment.
    </p>
  </div>
);

export default HowEcoDoseWorks;
