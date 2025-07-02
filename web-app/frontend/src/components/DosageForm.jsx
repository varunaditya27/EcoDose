import React, { useState } from 'react';

const DosageForm = ({ onResult, loading, setLoading }) => {
  const [form, setForm] = useState({
    ph: '',
    moisture: '',
    n: '',
    p: '',
    k: '',
    crop: 'Tomato',
    model: 'random_forest',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    onResult(null, null);
    try {
      const res = await fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pH: form.ph,
          moisture: form.moisture,
          nitrogen: form.n,
          phosphorus: form.p,
          potassium: form.k,
          model: form.model,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        onResult(data.dosage, null);
      } else {
        onResult(null, data.error || 'Prediction failed');
      }
    } catch (err) {
      onResult(null, 'Network error');
    }
    setLoading(false);
  };

  return (
    <section className="form-section" id="form-section">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Get Your Dosage Recommendation</h2>
        <div className="input-group">
          <label htmlFor="ph"><span className="icon">🧪</span> Soil pH</label>
          <input type="number" id="ph" name="ph" step="0.01" min="3" max="10" required value={form.ph} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="moisture"><span className="icon">💧</span> Soil Moisture Level (%)</label>
          <input type="number" id="moisture" name="moisture" step="0.1" min="0" max="100" required value={form.moisture} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label><span className="icon">🧬</span> NPK Levels (mg/kg)</label>
          <div className="npk-group">
            <input type="number" id="n" name="n" placeholder="N" min="0" required value={form.n} onChange={handleChange} />
            <input type="number" id="p" name="p" placeholder="P" min="0" required value={form.p} onChange={handleChange} />
            <input type="number" id="k" name="k" placeholder="K" min="0" required value={form.k} onChange={handleChange} />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="crop"><span className="icon">🌾</span> Crop Type</label>
          <select id="crop" name="crop" required value={form.crop} onChange={handleChange}>
            <option value="Tomato">Tomato</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="model"><span className="icon">🤖</span> Prediction Model</label>
          <select id="model" name="model" required value={form.model} onChange={handleChange}>
            <option value="random_forest">Random Forest</option>
            <option value="linear">Linear Regression</option>
          </select>
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Calculating...' : 'Calculate Dosage'}</button>
      </form>
    </section>
  );
};

export default DosageForm; 