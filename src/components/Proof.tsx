import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '94%', label: 'Predictive validity vs. traditional assessments' },
  { value: '3×', label: 'Faster time-to-hire for enterprise clients' },
  { value: '40+', label: 'Sector-specific scenario libraries' },
  { value: '99%', label: 'Candidate completion rate' },
]

const pillars = [
  { title: 'Scientifically Validated', body: 'Every scenario is built on occupational psychology frameworks and validated against real performance outcomes.', icon: '◈' },
  { title: 'Inclusive by Design', body: 'Assessments are bias-audited, accessible, and designed to surface talent that traditional screening misses.', icon: '◎' },
  { title: 'Enterprise Ready', body: 'SOC 2 compliant, GDPR aligned, and integrates with your existing ATS and HR infrastructure.', icon: '◆' },
  { title: 'Outcome Linked', body: 'We track post-hire performance to continuously improve scenario accuracy and predictive power.', icon: '◉' },
]

export default function Proof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 section-divider" style={{ background: 'linear-gradient(180deg, #1A0F00 0%, #0D0800 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Stats bar */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden mb-24"
          style={{ border: '1px solid rgba(255,164,0,0.12)', background: 'linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(13,8,0,0.9) 100%)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 text-center border-b border-r border-transparent"
              style={{
                borderRightColor: i % 2 === 0 ? 'rgba(255,164,0,0.08)' : 'transparent',
                borderBottomColor: i < 2 ? 'rgba(255,164,0,0.08)' : 'transparent',
              }}
            >
              <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-gradient-orange">{s.value}</div>
              <p className="text-pearl/40 text-sm leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,164,0,0.5)' }}>Why It Works</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pearl leading-tight mb-6">
              Built for the<br />
              <span className="text-gradient">decisions that matter.</span>
            </h2>
            <p className="text-pearl/40 leading-relaxed mb-8">
              Skillscaper was built with occupational psychologists, sector experts, and enterprise HR leaders. Every design decision serves one goal: giving you a clearer picture of real performance.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-pearl transition-colors">
              Read the methodology paper <span>→</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,164,0,0.07) 0%, rgba(26,15,0,0.8) 100%)',
                  border: '1px solid rgba(255,164,0,0.10)',
                }}
              >
                <span className="text-accent text-xl mb-3 block">{p.icon}</span>
                <h4 className="font-display font-semibold text-pearl text-base mb-2">{p.title}</h4>
                <p className="text-pearl/40 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
