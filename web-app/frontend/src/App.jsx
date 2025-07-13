import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import WhyEcoDose from './components/WhyEcoDose'
import About from './components/About'
import DosageForm from './components/DosageForm'
import Result from './components/Result'
import Footer from './components/Footer'
import ChatbotButton from './components/ChatbotButton'
import './App.css'

function App() {
  const [dosage, setDosage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [soilData, setSoilData] = useState(null)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [aiFeedback, setAiFeedback] = useState(null)
  const [aiFeedbackLoading, setAiFeedbackLoading] = useState(false)

  const handleDosageResult = async (result, err) => {
    setDosage(result)
    setError(err)
    setLoading(false)
    setAiFeedback(null)
    setAiFeedbackLoading(false)
    if (result && soilData) {
      setAiFeedbackLoading(true)
      try {
        const res = await fetch('https://ecodose.onrender.com/api/soil-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pH: soilData.ph,
            moisture: soilData.moisture,
            nitrogen: soilData.nitrogen,
            phosphorus: soilData.phosphorus,
            potassium: soilData.potassium,
          }),
        });
        const data = await res.json();
        if (res.ok && data.feedback) {
          setAiFeedback(data.feedback);
        } else {
          setAiFeedback('Could not fetch AI-based feedback.');
        }
        setAiFeedbackLoading(false)
      } catch (e) {
        setAiFeedback('Network error while fetching AI-based feedback.');
        setAiFeedbackLoading(false)
      }
    }
  }

  const handleSoilDataComplete = (data) => {
    setSoilData(data)
  }

  return (
    <>
      <Sidebar />
      <Hero />
      <WhyEcoDose />
      <DosageForm onResult={handleDosageResult} loading={loading} setLoading={setLoading} onSoilDataComplete={handleSoilDataComplete} />
      <ChatbotButton
        enabled={!!soilData}
        soilData={soilData}
        open={chatbotOpen}
        setOpen={setChatbotOpen}
      />
      <Result dosage={dosage} error={error} aiFeedback={aiFeedback} aiFeedbackLoading={aiFeedbackLoading} />
      <About />
      <Footer />
    </>
  )
}

export default App
