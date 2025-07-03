
// EcoDose ESP32 Firmware - pH and Soil Moisture Sensor Integration

#define SOIL_MOISTURE_PIN 32  // Analog pin for soil moisture
#define PH_SENSOR_PIN 34      // Analog pin for pH sensor

#define DRY_VAL 4095        // Dry value for moisture sensor
#define WET_VAL 0         // Wet value for moisture sensor

void setup() {
  Serial.begin(115200);
}

void loop() {
  int soilRaw = analogRead(SOIL_MOISTURE_PIN);
  int phRaw = analogRead(PH_SENSOR_PIN);

  // Map soil moisture to percentage
  float soilMoisture = map(soilRaw, DRY_VAL, WET_VAL, 0, 100);

  // Convert pH analog reading to voltage, then estimate pH value
  float voltage = (phRaw / 4095.0) * 3.3;
  float pHValue = 7 + ((2.5 - voltage) * 3.5);
  pHValue = constrain(pHValue, 4.5, 8.6);  // Based on model range

  Serial.print("Soil Moisture: ");
  Serial.print(soilMoisture);
  Serial.print(" %    ||    ");

  //Serial.print("pH Value: ");
  //Serial.println(pHValue);

  delay(2000);
}
