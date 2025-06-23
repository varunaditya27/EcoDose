
# EcoDose ESP32 Firmware

This folder contains the firmware code used for interfacing an ESP32 with a pH sensor and a capacitive soil moisture sensor.

## 📍 Purpose

To collect real-time soil data (pH and moisture) and preprocess the readings such that they align with the value ranges used to train the EcoDose AI model. This ensures consistency in inference and avoids unpredictable model behavior due to domain mismatch.

## 🔌 Sensor Calibration

- **Soil Moisture**: Mapped from raw analog values using empirical calibration.
  - Dry value: 3600
  - Wet value: 1600
  - Output constrained to 10–60%, matching the training dataset.

- **pH Sensor**: Output voltage converted to pH value using datasheet-based linear formula.
  - Center point: 2.5V ≈ pH 7
  - Constrained between 4.5–8.6 to reflect model training boundaries.

## 🧠 Why the calibration matters

To prevent inference errors, the model must receive inputs in the same format and distribution as it was trained on. This firmware handles that preprocessing on-device using lightweight arithmetic operations.

## 🛠️ How to Use

1. Connect the pH sensor to GPIO 35 and the soil moisture sensor to GPIO 34.
2. Upload the sketch to your ESP32 using the Arduino IDE.
3. Open the serial monitor to view the readings in real time.
4. Integrate with EcoDose Flask app for automatic prediction.

---

© 2025 EcoDose Project
