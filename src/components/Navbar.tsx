import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo_Horizontal-Transparent-Yellow.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Applications', to: '/applications' },
  { label: 'Methodology', to: '/methodology' },
  { label: 'About Us', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs tracking-widest uppercase transition-colors duration-200 whitespace-nowrap ${
      isActive ? 'text-accent' : 'text-pearl/35 hover:text-pearl'
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center py-3.5 text-sm tracking-widest uppercase transition-colors border-b border-pearl/5 ${
      isActive ? 'text-accent' : 'text-pearl/40 hover:text-pearl'
    }`

  return (
    <>
      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-pearl/5' : ''
        }`}
        style={scrolled ? { background: 'rgba(13,8,0,0.7)', backdropFilter: 'blur(12px)' } : {}}
      >
        <div className="px-5 sm:px-8 lg:px-20 xl:px-28 h-16 flex items-center justify-between">

          <div className="flex items-center shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Skillscaper" className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="/get-in-touch"
              className="text-xs px-5 py-2 rounded-full bg-accent font-semibold text-ink transition-all duration-200 whitespace-nowrap hover:shadow-lg hover:shadow-accent/20"
            >
              Request a Demo →
            </a>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-pearl/50 hover:text-pearl transition-colors"
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

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden bg-ink/60"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden border-t border-pearl/5 px-5 pb-8"
              style={{ background: 'rgba(13,8,0,0.98)', backdropFilter: 'blur(16px)' }}
            >
              <ul className="flex flex-col pt-4">
                {links.map(l => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={mobileLinkClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 mt-6">
                <a href="/get-in-touch" className="text-center py-3 text-xs text-pearl/35 hover:text-pearl transition-colors" onClick={() => setMenuOpen(false)}>
                  Get In Touch
                </a>
                <a
                  href="#"
                  className="block text-center text-xs px-4 py-3.5 rounded-full bg-accent text-ink transition-colors duration-200"
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
