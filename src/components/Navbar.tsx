import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/SKSC-Favicon-512x512-Yellow.png'

const links = ['How It Works', 'Sectors', 'Methodology', 'Results']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md border-b border-orange-900/30'
          : ''
      }`}
      style={scrolled ? { background: 'rgba(13,8,0,0.92)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Skillscaper logo" className="w-7 h-7 object-contain" />
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-pearl">SKILL</span>
            <span className="text-gradient-orange">SCAPER</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="text-sm text-pearl/50 hover:text-accent transition-colors duration-200">{l}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-pearl/50 hover:text-accent transition-colors">Sign in</a>
          <a
            href="#"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 glow-accent"
            style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
          >
            Request Demo
          </a>
        </div>

        <button className="md:hidden text-pearl/70 hover:text-accent" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-orange-900/30 px-6 pb-6"
            style={{ background: 'rgba(26,15,0,0.97)' }}
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <li key={l}><a href="#" className="text-pearl/60 hover:text-accent text-sm">{l}</a></li>
              ))}
              <li>
                <a
                  href="#"
                  className="block text-center font-semibold text-sm px-4 py-2.5 rounded-full mt-2"
                  style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
