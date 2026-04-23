import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import dashboard from '../assets/Cinematic Dashboard.png'

const bullets = [
  'Realistic Situations',
  'Cross-Data Anlytics',
  'Objective Results',
  'Actionable Decisions',
]

export default function Analytics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-divider bg-[#000001] overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col justify-center min-h-[500px] lg:min-h-[550px] md:min-h-[480px] overflow-hidden"
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: '70% auto',
          backgroundPosition: 'right bottom',
          backgroundPositionY: 'top 6rem',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay — heavier on left for text, lighter on right for image
        <div className="absolute inset-0" style={{ background: 'rgba(13,8,0,0.1)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,8,0,0.88) 0%, rgba(13,8,0,0.85) 20%, rgba(13,8,0,0.1) 55%, rgba(13,8,0,0.0) 100%)' }} /> */}

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24 max-w-xl">
          <p className="text-xs tracking-widest uppercase text-accent/60 mb-5">WHAT YOU GET</p>

          <h2 className="font-display font-bold text-pearl leading-tight mb-5">
            A GLIMPSE INSIDE SKILLSCAPER
          </h2>

          <div className="w-12 h-px bg-accent mb-6" />

          <p className="text-pearl/60 leading-relaxed mb-8">
            The platform our clients rely on to see clearly, decide confidently, and unlock human potential.
          </p>

          <ul className="flex flex-col gap-3">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-pearl/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
