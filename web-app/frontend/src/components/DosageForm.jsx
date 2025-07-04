import React, { useState, useEffect } from 'react';
import './DosageForm.css';

const DosageForm = ({ onResult, loading, setLoading, onSoilDataComplete }) => {
  const [form, setForm] = useState({
    ph: '',
    moisture: '',
    n: '',
    p: '',
    k: '',
    crop: 'Tomato',
    model: 'random_forest',
  });
  const [showToast, setShowToast] = useState(false);
  const [soilDataSaved, setSoilDataSaved] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const allFilled = form.ph && form.moisture && form.n && form.p && form.k;
    if (allFilled && !soilDataSaved) {
      const soilData = {
        ph: form.ph,
        moisture: form.moisture,
        nitrogen: form.n,
        phosphorus: form.p,
        potassium: form.k,
      };
      localStorage.setItem('ecodose_soil_data', JSON.stringify(soilData));
      setShowToast(true);
      setSoilDataSaved(true);
      if (onSoilDataComplete) onSoilDataComplete(soilData);
      setTimeout(() => setShowToast(false), 2500);
    }
    if (!allFilled && soilDataSaved) {
      setSoilDataSaved(false);
    }
  }, [form, soilDataSaved, onSoilDataComplete]);

  const validate = () => {
    const newErrors = {};
    const ph = parseFloat(form.ph);
    const moisture = parseFloat(form.moisture);
    const n = parseFloat(form.n);
    const p = parseFloat(form.p);
    const k = parseFloat(form.k);
    if (isNaN(ph) || ph < 3 || ph > 12) newErrors.ph = 'pH must be between 3 and 12.';
    if (isNaN(moisture) || moisture < 0 || moisture > 100) newErrors.moisture = 'Moisture must be 0-100%.';
    if (isNaN(n) || n < 0 || n > 1000) newErrors.n = 'N must be 0-1000 mg/kg.';
    if (isNaN(p) || p < 0 || p > 1000) newErrors.p = 'P must be 0-1000 mg/kg.';
    if (isNaN(k) || k < 0 || k > 1000) newErrors.k = 'K must be 0-1000 mg/kg.';
    if (!form.crop) newErrors.crop = 'Select a crop type.';
    if (!form.model) newErrors.model = 'Select a prediction model.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
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
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h2>Get Your Dosage Recommendation</h2>
        <div className="input-group">
          <label htmlFor="ph"><span className="icon">🧪</span> Soil pH</label>
          <input type="number" id="ph" name="ph" step="0.01" min="3" max="10" required value={form.ph} onChange={handleChange} />
          {errors.ph && <div className="input-error">{errors.ph}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="moisture"><span className="icon">💧</span> Soil Moisture Level (%)</label>
          <input type="number" id="moisture" name="moisture" step="0.1" min="0" max="100" required value={form.moisture} onChange={handleChange} />
          {errors.moisture && <div className="input-error">{errors.moisture}</div>}
        </div>
        <div className="input-group">
          <label><span className="icon">🧬</span> NPK Levels (mg/kg)</label>
          <div className="npk-group">
            <input type="number" id="n" name="n" placeholder="N" min="0" required value={form.n} onChange={handleChange} />
            <input type="number" id="p" name="p" placeholder="P" min="0" required value={form.p} onChange={handleChange} />
            <input type="number" id="k" name="k" placeholder="K" min="0" required value={form.k} onChange={handleChange} />
          </div>
          <div className="npk-errors">
            {errors.n && <div className="input-error">{errors.n}</div>}
            {errors.p && <div className="input-error">{errors.p}</div>}
            {errors.k && <div className="input-error">{errors.k}</div>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="crop"><span className="icon">🌾</span> Crop Type</label>
          <select id="crop" name="crop" required value={form.crop} onChange={handleChange}>
            <option value="Tomato">Tomato</option>
          </select>
          {errors.crop && <div className="input-error">{errors.crop}</div>}
        </div>
        <div className="input-group">
          <label htmlFor="model"><span className="icon">🤖</span> Prediction Model</label>
          <select id="model" name="model" required value={form.model} onChange={handleChange}>
            <option value="random_forest">Random Forest</option>
            <option value="linear">Linear Regression</option>
          </select>
          {errors.model && <div className="input-error">{errors.model}</div>}
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Calculating...' : 'Calculate Dosage'}</button>
      </form>
      {showToast && (
        <div className="toast soil-toast">✅ Soil data saved. You can now chat with the EcoDose Assistant!</div>
      )}
    </section>
  );
};

export default DosageForm; 