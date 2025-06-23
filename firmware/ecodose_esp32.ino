
// EcoDose ESP32 Firmware - pH and Soil Moisture Sensor Integration

#define SOIL_MOISTURE_PIN 34  // Analog pin for soil moisture
#define PH_SENSOR_PIN 35      // Analog pin for pH sensor

#define DRY_VAL 3600          // Calibrated dry value for moisture sensor
#define WET_VAL 1600          // Calibrated wet value for moisture sensor

void setup() {
  Serial.begin(115200);
}

void loop() {
  int soilRaw = analogRead(SOIL_MOISTURE_PIN);
  int phRaw = analogRead(PH_SENSOR_PIN);

  // Map soil moisture to percentage and constrain to model range
  float soilMoisture = map(soilRaw, DRY_VAL, WET_VAL, 0, 100);
  soilMoisture = constrain(soilMoisture, 10, 60);  // Based on training data

  // Convert pH analog reading to voltage, then estimate pH value
  float voltage = (phRaw / 4095.0) * 3.3;
  float pHValue = 7 + ((2.5 - voltage) * 3.5);
  pHValue = constrain(pHValue, 4.5, 8.6);  // Based on model range

  Serial.print("Soil Moisture: ");
  Serial.print(soilMoisture);
  Serial.println(" %");

  Serial.print("pH Value: ");
  Serial.println(pHValue);

  delay(2000);
}
