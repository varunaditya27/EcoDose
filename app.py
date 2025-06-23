from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the model at startup
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'random_forest_model.pkl')
try:
    model = joblib.load(MODEL_PATH)
except Exception as e:
    model = None
    print(f"Model loading failed: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if not model:
        return jsonify({'error': 'Model not loaded'}), 500
    data = request.get_json()
    required = ['pH', 'moisture', 'nitrogen', 'phosphorus', 'potassium']
    if not data or not all(k in data for k in required):
        return jsonify({'error': 'Missing input fields'}), 400
    try:
        features = [
            float(data['pH']),
            float(data['moisture']),
            float(data['nitrogen']),
            float(data['phosphorus']),
            float(data['potassium'])
        ]
        X = np.array([features])
        dosage = model.predict(X)[0]
        return jsonify({'dosage': float(dosage)})
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
