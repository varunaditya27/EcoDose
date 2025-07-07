# EcoDose Frontend

This is the frontend for [EcoDose](../../README.md), an AI-powered platform to help farmers and agri-enthusiasts optimize crop yield using Rhizobium-based biofertilizers. Built with React and Vite, it provides a modern, responsive, and interactive user experience.

## Features
- Sidebar navigation and educational content (WhyEcoDose, About, etc.)
- Dosage form: Input soil data (pH, moisture, N, P, K), crop type, and model; validates and saves data
- Displays dosage prediction and AI-based soil analysis (with text-to-speech)
- Chatbot: Floating button opens a sidebar for context-aware agri-advice (Gemini-powered)
- Responsive design and custom CSS

## Main Components
- `Sidebar` — Navigation and quick links
- `Hero` — Landing section
- `WhyEcoDose`, `About`, etc. — Educational content
- `DosageForm` — Main form for soil data input and prediction
- `Result` — Shows dosage and AI feedback, with TTS
- `ChatbotButton` — Floating action button and sidebar chatbot
- `Footer` — Project info and links

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Navigate to the frontend directory:
   ```sh
   cd web-app/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to the local address shown in the terminal (usually `http://localhost:5173`)

## Project Structure
```
web-app/frontend/
├── src/
│   ├── components/      # React components (DosageForm, Result, ChatbotButton, etc.)
│   ├── App.jsx          # Main app logic and layout
│   └── ...
├── index.html           # Main HTML entry point
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact dependency versions
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── README.md            # (This file)
```

## Tech Stack
- React
- Vite
- JavaScript (ES6+)
- CSS/HTML

## License
This project is licensed under the [MIT License](../../LICENSE).

---
© 2025 EcoDose Project. Built by 1st year engineering students at RVCE.
