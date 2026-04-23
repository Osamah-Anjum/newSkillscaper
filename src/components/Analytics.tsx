import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import dashboard from '../assets/Cinematic Dashboard.png'

const bullets = [
  'Realistic Situations',
  'AI-Powered Insight',
  'Objective Results',
  'Actionable Decisions',
]

export default function Analytics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-divider bg-[#000000]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden min-h-[400px] md:min-h-[480px] flex items-center"
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: '50% 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(13,8,0,0.1)' }} />

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-12 lg:px-20 xl:px-28 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs tracking-widest uppercase text-accent/60 mb-5">WHAT YOU GET</p>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pearl leading-tight mb-6 max-w-3xl">
              A GLIMPSE INSIDE SKILLSCAPER
            </h2>

            <p className="text-pearl/60 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              The platform our clients rely on to see clearly, decide confidently, and unlock human potential.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-pearl/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
