import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DosageForm from './components/DosageForm'
import Result from './components/Result'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [dosage, setDosage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleDosageResult = (result, err) => {
    setDosage(result)
    setError(err)
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <DosageForm onResult={handleDosageResult} loading={loading} setLoading={setLoading} />
      <Result dosage={dosage} error={error} />
      <Footer />
    </>
  )
}

export default App
