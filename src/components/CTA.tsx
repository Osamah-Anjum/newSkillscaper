import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-32 section-divider bg-ink-soft">
      <div className="relative z-10 px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-widest uppercase mb-6 text-accent/50">Get Started</p>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-pearl leading-tight mb-6">
            Stop guessing.<br />Start seeing.
          </h2>

          <div className="w-12 h-px bg-accent mx-auto mb-8" />

          <p className="text-pearl/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join the enterprise teams using Skillscaper to hire with confidence — not hope.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group font-semibold px-10 py-4 rounded-full bg-accent hover:bg-accent-light text-ink transition-colors duration-200 text-sm"
            >
              Request a Demo →
            </a>
            <a
              href="#"
              className="font-medium px-10 py-4 rounded-full text-sm text-pearl/50 hover:text-accent border border-accent/20 hover:border-accent/50 transition-colors duration-200"
            >
              Build a Test
            </a>
          </div>

          <p className="text-pearl/20 text-xs mt-8">No commitment required. Setup in under 48 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
