from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os
import google.generativeai as genai

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

GEMINI_API_KEY = "AIzaSyDLgv-OO6JXp0dM6_YbzMIugzllQj7LQLM"
genai.configure(api_key=GEMINI_API_KEY)

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
        # Round the dosage to 2 decimal places
        return jsonify({'dosage': round(float(dosage), 2)})
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    soil_data = data.get('soil_data', {})
    history = data.get('history', [])

    if not user_message:
        return jsonify({'reply': "Please enter a message."}), 400

    # Compose context for Gemini
    context_parts = []
    if soil_data:
        context_parts.append("Soil data: " + ', '.join(f"{k}: {v}" for k, v in soil_data.items()))
    if history:
        context_parts.append("Chat history: " + ' | '.join(f"{m['role']}: {m['content']}" for m in history[-6:]))
    context_str = '\n'.join(context_parts)

    prompt = f"""
You are EcoDose Assistant, an expert in soil science, biofertilizers, and sustainable agriculture. Use the provided soil data and chat history to answer user questions helpfully and concisely.
{context_str}
User: {user_message}
EcoDose Assistant:"""

    try:
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(prompt)
        reply = response.text if hasattr(response, 'text') else None
        if not reply:
            reply = "Sorry, I couldn't generate a response."
        return jsonify({'reply': reply})
    except Exception as e:
        # Fallback to demo response
        soil_str = ', '.join(f"{k}: {v}" for k, v in soil_data.items()) if soil_data else "(no soil data)"
        reply = (
            f"[Gemini error: {e}]\n"
            f"You said: '{user_message}'.\n"
            f"Current soil data: {soil_str}.\n"
            f"(This is a fallback response.)"
        )
        return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
