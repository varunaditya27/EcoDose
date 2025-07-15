import React, { useState, useEffect, useRef } from 'react';
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

  // Fix: Only save soil data when all fields are filled AND the user leaves the field (onBlur), or on submit
  // Use a ref to track last saved form
  const lastSavedForm = useRef({});
  useEffect(() => {
    const allFilled = form.ph && form.moisture && form.n && form.p && form.k;
    const formString = JSON.stringify(form);
    if (allFilled && formString !== JSON.stringify(lastSavedForm.current)) {
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
      lastSavedForm.current = { ...form };
    }
    if (!allFilled && soilDataSaved) {
      setSoilDataSaved(false);
    }
  }, [form, soilDataSaved, onSoilDataComplete]);

  const validateField = (name, value) => {
    let error;
    const num = parseFloat(value);
    switch (name) {
      case 'ph':
        if (isNaN(num) || num < 3 || num > 12) error = 'pH must be between 3 and 12.';
        break;
      case 'moisture':
        if (isNaN(num) || num < 0 || num > 100) error = 'Moisture must be 0-100%.';
        break;
      case 'n':
        if (isNaN(num) || num < 0 || num > 1000) error = 'N must be 0-1000 mg/kg.';
        break;
      case 'p':
        if (isNaN(num) || num < 0 || num > 1000) error = 'P must be 0-1000 mg/kg.';
        break;
      case 'k':
        if (isNaN(num) || num < 0 || num > 1000) error = 'K must be 0-1000 mg/kg.';
        break;
      case 'crop':
        if (!value) error = 'Select a crop type.';
        break;
      case 'model':
        if (!value) error = 'Select a prediction model.';
        break;
      default:
        break;
    }
    return error;
  };

  const validate = (formToValidate = form) => {
    const newErrors = {};
    Object.keys(formToValidate).forEach((key) => {
      const error = validateField(key, formToValidate[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Always store as string to avoid partial update issues
    setForm((prev) => ({ ...prev, [name]: value.toString() }));
    // Validate this field immediately
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    onResult(null, null);
    try {
      const res = await fetch('https://ecodose.onrender.com/predict', {
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