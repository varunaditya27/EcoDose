# EcoDose: AI-Powered Biofertilizer Assistant

EcoDose is a full-stack, AI-powered platform that empowers farmers and agri-enthusiasts to optimize crop yield using Rhizobium-based biofertilizers. By leveraging real-time soil data, machine learning, and generative AI, EcoDose provides precise dosage recommendations, actionable soil feedback, and a context-aware chatbot assistant.

---

## 🚀 Features
- **AI-powered dosage prediction** using Random Forest and Linear Regression models
- **AI-based soil analysis**: Actionable feedback on your soil data (powered by Google Gemini)
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
├── LICENSE              # MIT License
└── README.md            # (This file)
```

- See [`web-app/backend/README.md`](web-app/backend/README.md) for backend details
- See [`web-app/frontend/README.md`](web-app/frontend/README.md) for frontend details
- See [`firmware/README.md`](firmware/README.md) for firmware usage

---

## 🧑‍💻 Quick Start

### 1. Backend (Flask API)
- Python 3.7+
- See [`web-app/backend/README.md`](web-app/backend/README.md) for setup and API usage

### 2. Frontend (React + Vite)
- Node.js & npm
- See [`web-app/frontend/README.md`](web-app/frontend/README.md) for setup and usage

### 3. Firmware (ESP32)
- See [`firmware/README.md`](firmware/README.md) for wiring, calibration, and upload instructions

---

## 🌱 How It Works
1. **Input soil data** (pH, moisture, NPK) via the web app or ESP32 sensors
2. **Get dosage recommendation** (g/m²) instantly
3. **See AI-based soil analysis**: actionable feedback for soil improvement, powered by Gemini
4. **Chatbot**: Ask agri-questions with context-aware AI support

---

## 📚 More Info
- [Backend README](web-app/backend/README.md)
- [Frontend README](web-app/frontend/README.md)
- [Firmware README](firmware/README.md)

## License
This project is licensed under the [MIT License](LICENSE).

---
© 2025 EcoDose Project. Built by 1st year engineering students at RVCE.
