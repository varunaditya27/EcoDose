# EcoDose: AI-Powered Biofertilizer Assistant

EcoDose is a full-stack platform that empowers farmers and agri-enthusiasts to optimize crop yield using Rhizobium-based biofertilizers. By leveraging real-time soil data, machine learning, and generative AI, EcoDose provides both precise dosage recommendations and actionable soil feedback.

---

## 🚀 Features
- **AI-powered dosage prediction** using Random Forest and Linear Regression models
- **AI-based soil analysis**: Get instant, actionable feedback on your soil data (powered by Gemini)
- **Modern web interface** (React + Vite)
- **ESP32 firmware** for real-time soil data collection and calibration
- **Chatbot assistant** for agri-queries (Gemini-powered)
- Responsive, user-friendly design

---

## 🗂️ Project Structure
```
EcoDose/
├── web-app/
│   ├── backend/         # Flask backend (ML models, API, Gemini integration)
│   └── frontend/        # React + Vite frontend
├── firmware/
│   └── ecodose_esp32/   # ESP32 firmware for soil sensors
└── README.md            # (This file)
```

- See `web-app/backend/README.md` for backend details
- See `web-app/frontend/README.md` for frontend details
- See `firmware/README.md` for firmware usage

---

## 🧑‍💻 Quick Start

### 1. Backend (Flask API)
- Python 3.7+
- Install dependencies: `pip install -r web-app/backend/requirements.txt`
- Set up `.env` with your Gemini API key
- Run: `python web-app/backend/app.py`

### 2. Frontend (React + Vite)
- Node.js & npm
- Install dependencies: `cd web-app/frontend && npm install`
- Run: `npm run dev`

### 3. Firmware (ESP32)
- See `firmware/README.md` for wiring, calibration, and upload instructions

---

## 🌱 How It Works
1. **Input soil data** (pH, moisture, NPK) via the web app or ESP32 sensors
2. **Get dosage recommendation** (g/m²) instantly
3. **See AI-based soil analysis**: actionable feedback for soil improvement, powered by Gemini
4. **Chatbot**: Ask agri-questions with context-aware AI support

---

## 🆕 AI-Based Soil Analysis
- After submitting soil data, the app now displays an AI-generated analysis in the dosage card
- This feedback is independent of the chatbot and provides actionable suggestions for soil health
- Powered by Google Gemini API (see backend setup)

---

## 📚 More Info
- [Backend README](web-app/backend/README.md)
- [Frontend README](web-app/frontend/README.md)
- [Firmware README](firmware/README.md)

---

© 2025 EcoDose Project. Built by 1st year engineering students at RVCE.
