import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollNarrative from './components/ScrollNarrative'
import Sectors from './components/Sectors'
import Analytics from './components/Analytics'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SectionTransition from './components/SectionTransition'
import Applications from './pages/Applications'

function Home() {
  return (
    <>
      <Hero />
      <SectionTransition><ScrollNarrative /></SectionTransition>
      <SectionTransition><Sectors /></SectionTransition>
      <SectionTransition><Analytics /></SectionTransition>
      <SectionTransition><Proof /></SectionTransition>
      <SectionTransition><CTA /></SectionTransition>
      <SectionTransition><Footer /></SectionTransition>
    </>
  )
}

export default function App() {
  return (
    <div className="bg-ink text-pearl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  )
}
