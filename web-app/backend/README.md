# EcoDose Backend

This is the backend for [EcoDose](../../README.md), an AI-powered platform to optimize crop yield using Rhizobium-based biofertilizers. The backend provides REST APIs for dosage prediction, AI-based soil analysis, and a context-aware chatbot, leveraging machine learning and Google Gemini.

## Features
- Predicts optimal biofertilizer dosage using Random Forest or Linear Regression models
- AI-powered soil analysis and actionable feedback (Gemini API)
- Context-aware chatbot for agri-queries (Gemini API)
- CORS enabled for frontend integration

## Endpoints
- `POST /predict` — Predicts dosage (g/m²) from soil data and selected model
- `POST /api/chat` — Chatbot endpoint, returns context-aware agri-advice
- `POST /api/soil-feedback` — Returns AI-generated soil health feedback (no dosage)

## Project Structure
```
web-app/backend/
├── app.py              # Flask backend (API, ML, Gemini integration)
├── requirements.txt    # Python dependencies
├── .env                # Environment variables (not committed)
├── models/             # Pre-trained ML models (.pkl)
│   ├── linear_model.pkl
│   └── random_forest_model.pkl
└── README.md           # (This file)
```

## Getting Started

### Prerequisites
- Python 3.7+
- pip

### Installation
1. Clone the repository and navigate to the backend:
   ```sh
   git clone https://github.com/varunaditya27/EcoDose.git
   cd EcoDose/web-app/backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Ensure the `models/` directory contains `random_forest_model.pkl` and `linear_model.pkl`.
4. Create a `.env` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
5. Run the Flask app:
   ```sh
   python app.py
   ```
6. The API will be available at `http://localhost:5001`

## API Usage
### Predict Dosage
`POST /predict`
```json
{
  "pH": 7.2,
  "moisture": 30,
  "nitrogen": 120,
  "phosphorus": 40,
  "potassium": 60,
  "model": "random_forest" // or "linear"
}
```
Returns: `{ "dosage": 12.34 }`

### Chatbot
`POST /api/chat`
```json
{
  "message": "How do I improve my soil?",
  "soil_data": { ... },
  "history": [ ... ]
}
```
Returns: `{ "reply": "..." }`

### Soil Feedback
`POST /api/soil-feedback`
```json
{
  "pH": 7.2,
  "moisture": 30,
  "nitrogen": 120,
  "phosphorus": 40,
  "potassium": 60
}
```
Returns: `{ "feedback": "..." }`

## Tech Stack
- Python, Flask
- scikit-learn (joblib for model loading)
- Google Gemini API
- numpy, python-dotenv, flask-cors

## License
This project is licensed under the [MIT License](../../LICENSE).

---
© 2025 EcoDose Project. Built by 1st year engineering students at RVCE.
