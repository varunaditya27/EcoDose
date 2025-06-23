# EcoDose: AI-Powered Biofertilizer Assistant

EcoDose is a web application that helps farmers and agri-enthusiasts optimize crop yield using Rhizobium-based biofertilizers. By leveraging real-time soil data and machine learning models, EcoDose recommends the ideal dosage of biofertilizer beads (g/m²) for your unique soil and crop profile.

## Features
- Predicts optimal biofertilizer dosage using AI (Random Forest and Linear Regression models)
- User-friendly web interface built with Flask
- Inputs: Soil pH, moisture, NPK (Nitrogen, Phosphorus, Potassium) levels, and crop type
- Modern, responsive UI with clear dosage recommendations
- Future-ready: Vision for mobile support, NLP for rural languages, and automation

## How It Works
1. User enters soil parameters and selects a prediction model.
2. The backend loads pre-trained ML models (`random_forest_model.pkl`, `linear_model.pkl`) and predicts the recommended dosage.
3. The result is displayed in a visually appealing format.

## Project Structure
```
├── app.py                  # Flask backend
├── requirements.txt        # Python dependencies
├── models/                 # Pre-trained ML models
│   ├── linear_model.pkl
│   └── random_forest_model.pkl
├── static/
│   ├── script.js           # Frontend JS
│   └── style.css           # Custom styles
├── templates/
│   └── index.html          # Main HTML template
└── prompt.txt              # (Optional) Project prompt/notes
```

## Getting Started

### Prerequisites
- Python 3.7+
- pip

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/varunaditya27/EcoDose.git
   cd EcoDose
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Ensure the `models/` directory contains the required `.pkl` model files.
4. Run the Flask app:
   ```sh
   python app.py
   ```
5. Open your browser and go to `http://localhost:5001`

## Usage
- Fill in the soil parameters and select a model.
- Click "Calculate Dosage" to get your recommendation.

## Tech Stack
- Python, Flask
- scikit-learn (for model training, not included here)
- HTML, CSS, JavaScript (Vanilla)

## Future Vision
- Mobile app support
- NLP for rural languages
- Automated sensor integration

## License
This project is for academic and educational purposes.

---
© 2025 EcoDose. Built by 1st year engineering students at RVCE.
