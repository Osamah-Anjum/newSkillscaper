import { motion, type Variants } from 'framer-motion'
import dashboard from '../assets/Cinematic Dashboard.png'

const bullets = [
  'Realistic Situations',
  'Cross-Data Analytics',
  'Objective Results',
  'Actionable Decisions',
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, x: -16, filter: 'blur(4px)' },
  show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Analytics() {
  return (
    <section className="section-divider bg-[#000001] overflow-hidden">
      <div
        className="relative flex flex-col justify-center min-h-[500px] lg:min-h-[550px] overflow-hidden"
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: '70% auto',
          backgroundPosition: 'right top 4rem',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient overlay for mobile readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,1,0.96) 0%, rgba(0,0,1,0.45) 15%, rgba(0,0,1,0.4) 45%, rgba(0,0,1,0.0) 100%)' }}
        />
        {/* Mobile: heavier bottom overlay so image doesn't clash */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{ background: 'rgba(0,0,1,0.55)' }}
        />

        <div className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24 max-w-xl">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xs tracking-widest uppercase text-accent/60 mb-5"
          >
            WHAT YOU GET
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            className="font-display font-bold text-pearl leading-tight mb-5"
          >
            A GLIMPSE INSIDE SKILLSCAPER
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="w-12 h-px bg-accent mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-pearl/60 leading-relaxed mb-8"
          >
            The platform our clients rely on to see clearly, decide confidently, and unlock human potential.
          </motion.p>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-3"
          >
            {bullets.map((b, i) => (
              <motion.li key={i} variants={item} className="flex items-center gap-3 text-sm text-pearl/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
