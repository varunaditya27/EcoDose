from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load both models at startup
MODEL_DIR = os.path.join(os.path.dirname(__file__), 'models')
RF_MODEL_PATH = os.path.join(MODEL_DIR, 'random_forest_model.pkl')
LIN_MODEL_PATH = os.path.join(MODEL_DIR, 'linear_model.pkl')

models = {}
try:
    models['random_forest'] = joblib.load(RF_MODEL_PATH)
except Exception as e:
    models['random_forest'] = None
    print(f"Random Forest model loading failed: {e}")
try:
    models['linear'] = joblib.load(LIN_MODEL_PATH)
except Exception as e:
    models['linear'] = None
    print(f"Linear model loading failed: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    required = ['pH', 'moisture', 'nitrogen', 'phosphorus', 'potassium']
    if not data or not all(k in data for k in required):
        return jsonify({'error': 'Missing input fields'}), 400
    model_type = data.get('model', 'random_forest')
    model = models.get(model_type)
    if not model:
        return jsonify({'error': f'Model "{model_type}" not loaded'}), 500
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
