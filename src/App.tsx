import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollNarrative from './components/ScrollNarrative'
import Sectors from './components/Sectors'
import Analytics from './components/Analytics'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ink text-pearl">
      <Navbar />
      <Hero />
      <ScrollNarrative />
      <Sectors />
      <Analytics />
      <Proof />
      <CTA />
      <Footer />
    </div>
  )
}
