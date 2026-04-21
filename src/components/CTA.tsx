import { motion } from 'framer-motion'
import cube1 from '../assets/cubes/Cube 1.png'
import cube3 from '../assets/cubes/Cube 3.png'

export default function CTA() {
  return (
    <section className="py-32 section-divider relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0800 0%, #1A0F00 50%, #0D0800 100%)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, rgba(255,164,0,0.12) 0%, rgba(255,80,0,0.06) 50%, transparent 70%)' }} />
        {/* Floating cubes */}
        <motion.img src={cube1} alt="" className="absolute w-28 md:w-40 opacity-20"
          style={{ top: '5%', right: '5%' }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img src={cube3} alt="" className="absolute w-20 md:w-32 opacity-15"
          style={{ bottom: '8%', left: '4%' }}
          animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 rounded-full blur-2xl scale-150"
              style={{ background: 'rgba(255,164,0,0.25)' }} />
            <span className="relative text-5xl text-accent">◈</span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-pearl leading-tight mb-6">
            Stop guessing.<br />
            <span className="text-gradient">Start seeing.</span>
          </h2>

          <p className="text-pearl/40 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join the enterprise teams using Skillscaper to hire with confidence — not hope.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group font-semibold px-10 py-4 rounded-full transition-all duration-300 glow-accent text-sm"
              style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
            >
              Request a Demo
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#"
              className="font-medium px-10 py-4 rounded-full transition-all duration-300 text-sm text-pearl/50 hover:text-accent"
              style={{ border: '1px solid rgba(255,164,0,0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,164,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,164,0,0.2)')}
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
