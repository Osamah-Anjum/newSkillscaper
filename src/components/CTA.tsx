import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CTA() {
  return (
    <section className="py-24 md:py-32 section-divider bg-[#0D0800] relative overflow-hidden">

      {/* Ambient glow — bottom left */}
      <motion.div
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-28"
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-end">

          {/* Left — copy */}
          <div>
            <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase mb-6 text-accent">
              Get Started
            </motion.p>

            <motion.h2 variants={fadeUp} className="font-display font-bold uppercase text-pearl leading-tight mb-6">
              Stop guessing.<br />Start seeing.
            </motion.h2>

            <motion.div variants={fadeUp} className="w-8 h-px bg-accent/60 mb-6" />

            <motion.p variants={fadeUp} className="text-pearl/40 leading-relaxed max-w-md">
              Join the enterprise teams using Skillscaper to hire with confidence — not hope.
            </motion.p>
          </div>

          {/* Right — actions */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 min-w-[200px]">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-accent font-semibold text-ink text-sm text-center transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              Request a Demo
            </motion.a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
