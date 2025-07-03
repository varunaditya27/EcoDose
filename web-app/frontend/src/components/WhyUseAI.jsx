import React from 'react';

const WhyUseAI = () => (
  <div className="about-card why-ai">
    <h2>🤖 Why Use AI?</h2>
    <p>
      In agriculture, no two soil samples are ever the same. Traditional fertilizer charts assume uniformity, but real-world farming conditions are far more complex and variable.
    </p>
    <p>
      <strong>EcoDose uses machine learning</strong> to make intelligent, adaptive decisions based on live input — such as pH, moisture, and nutrient levels — rather than generic guidelines.
    </p>

    <h4>🧠 Benefits of AI in EcoDose:</h4>
    <ul className="custom-list">
      <li>
        <span className="list-title">Personalized Dosage:</span> Every prediction is tailored to your soil’s exact condition — no overuse, no underuse.
      </li>
      <li>
        <span className="list-title">Smarter Than Charts:</span> ML models learn from data patterns, making them more accurate than static, one-size-fits-all tables.
      </li>
      <li>
        <span className="list-title">Scalable Intelligence:</span> As more data is collected (via sensors or user input), EcoDose becomes smarter over time.
      </li>
      <li>
        <span className="list-title">Explainable Decisions:</span> Pairing the AI with an LLM chatbot helps users understand why a dosage was recommended.
      </li>
    </ul>

    <p className="future-note">
      ⚡ In short, AI transforms EcoDose from a static tool into a dynamic assistant — one that learns, adapts, and optimizes for the soil, the crop, and the future of sustainable farming.
    </p>
  </div>
);

export default WhyUseAI;
