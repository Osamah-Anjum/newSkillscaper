import { motion, type Variants } from 'framer-motion'
import { useState, type FormEvent } from 'react'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CTA() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }

    if (!agreed) {
      setError('Please agree to Terms & Conditions')
      return
    }

    // Success — handle submission
    console.log('Email submitted:', email)
    setEmail('')
    setAgreed(false)
  }

  return (
    <section className="py-24 md:py-32 section-divider bg-[#000001] relative overflow-hidden">

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, #FFA400 0%, transparent 70%)' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-28"
      >
        <div className="max-w-2xl">

          <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase mb-6 text-[#FFA400]">
            Get Started
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display uppercase text-pearl leading-tight mb-6">
            Stop guessing.<br />Start seeing.
          </motion.h2>

          <motion.div variants={fadeUp} className="w-8 h-px bg-[#FFA400] mb-6" />

          <motion.p variants={fadeUp} className="text-pearl/45 leading-relaxed mb-10">
            Join the enterprise teams using Skillscaper to hire with confidence — not hope.
          </motion.p>

          {/* Email form */}
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
            <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your work email"
                  className="w-full px-5 py-3.5 rounded-full bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-accent/40 focus:bg-pearl/8 transition-all duration-200"
                />
                <div className="h-6">
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-accent/80 mt-2 ml-5"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full bg-accent text-ink text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 whitespace-nowrap"
              >
                Join Now!
              </motion.button>
            </div>

            {/* Checkbox */}
            <motion.div variants={fadeUp} className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked)
                  setError('')
                }}
                className="w-4 h-4 mt-1 rounded border border-pearl/20 bg-pearl/5 cursor-pointer accent-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all duration-200"
              />
              <label htmlFor="terms" className="text-xs text-pearl/35 cursor-pointer leading-relaxed">
                I agree to the <a href="#" className="text-pearl/60 hover:text-accent transition-colors">Terms & Conditions</a>
              </label>
            </motion.div>
          </motion.form>

        </div>
      </motion.div>
    </section>
  )
}
