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

  // Close menu on resize to md+
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md border-b border-orange-900/30' : ''
        }`}
        style={scrolled ? { background: 'rgba(13,8,0,0.92)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo + Brand */}
          <div className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Skillscaper logo" className="w-7 h-7 object-contain" />
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight">
              <span className="text-pearl">SKILL</span>
              <span className="text-gradient-orange">SCAPER</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => (
              <li key={l}>
                <a href="#" className="text-sm text-pearl/50 hover:text-accent transition-colors duration-200 whitespace-nowrap">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="#" className="text-sm text-pearl/50 hover:text-accent transition-colors whitespace-nowrap">
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 glow-accent whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
            >
              Request Demo
            </a>
          </div>

          {/* Hamburger button — min 44x44 touch target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-pearl/70 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — rendered outside nav so it covers full screen correctly */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(13,8,0,0.6)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden border-t border-orange-900/30 px-5 pb-8"
              style={{ background: 'rgba(13,8,0,0.98)', backdropFilter: 'blur(16px)' }}
            >
              <ul className="flex flex-col pt-4">
                {links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      className="flex items-center py-3.5 text-base text-pearl/60 hover:text-accent transition-colors border-b"
                      style={{ borderColor: 'rgba(255,164,0,0.06)' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-6">
                <a
                  href="#"
                  className="text-center py-3 text-sm text-pearl/50 hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="block text-center font-semibold text-sm px-4 py-3.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
