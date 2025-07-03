import { useState } from 'react'
import Navbar from './components/Navbar'
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

  const handleDosageResult = (result, err) => {
    setDosage(result)
    setError(err)
    setLoading(false)
  }

  const handleSoilDataComplete = (data) => {
    setSoilData(data)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <WhyEcoDose />
      <DosageForm onResult={handleDosageResult} loading={loading} setLoading={setLoading} onSoilDataComplete={handleSoilDataComplete} />
      <ChatbotButton
        enabled={!!soilData}
        soilData={soilData}
        open={chatbotOpen}
        setOpen={setChatbotOpen}
      />
      <Result dosage={dosage} error={error} />
      <About />
      <Footer />
    </>
  )
}

export default App
