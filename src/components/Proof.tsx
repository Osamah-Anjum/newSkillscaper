import { motion, type Variants } from 'framer-motion'

const stats = [
  { value: '20%', label: 'Increased Productivity' },
  { value: '-10%', label: 'In hiring mistakes' },
  { value: '5-10%', label: 'Effective Collaboration' },
  { value: '10%', label: 'Reducing Turnover' },
]

const pillars = [
  { title: 'Scientifically Validated', body: 'Every scenario is built on occupational psychology frameworks and validated against real performance outcomes.', icon: '◈' },
  { title: 'Inclusive by Design', body: 'Assessments are bias-audited, accessible, and designed to surface talent that traditional screening misses.', icon: '◎' },
  { title: 'Enterprise Ready', body: 'SOC 2 compliant, GDPR aligned, and integrates with your existing ATS and HR infrastructure.', icon: '◆' },
  { title: 'Outcome Linked', body: 'We track post-hire performance to continuously improve scenario accuracy and predictive power.', icon: '◉' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: 'easeOut' } },
}

const statBorder = (i: number) => ({
  borderRight: i % 2 === 0 ? '1px solid rgba(255,164,0,0.08)' : 'none',
  borderBottom: i < 2 ? '1px solid rgba(255,164,0,0.08)' : 'none',
})

export default function Proof() {
  return (
    <section className="py-24 md:py-32 section-divider bg-[#000001]">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display font-bold text-pearl text-center leading-tight mb-10"
        >
          WHY CHOOSE IMMERSIVE ASSESSMENTS
        </motion.h2>

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden mb-20 md:mb-28 border border-accent/30"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 md:p-8 text-center bg-[#000001] active:bg-ink-muted transition-colors"
              style={statBorder(i)}
            >
              <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-accent">{s.value}</div>
              <p className="text-pearl/40 text-sm leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="text-xs tracking-widest uppercase mb-4 text-accent/50">Why It Works</p>
            <h2 className="font-display uppercase font-bold text-4xl md:text-5xl text-pearl leading-tight mb-6">
              Built for the decisions that matter.
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
            <p className="text-pearl/40 leading-relaxed mb-8">
              Skillscaper was built with occupational psychologists, sector experts, and enterprise HR leaders. Every design decision serves one goal: giving you a clearer picture of real performance.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-pearl transition-colors duration-200">
              Read the methodology paper →
            </a>
          </motion.div>

          {/* Pillar cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: 'rgba(255,164,0,0.3)' }}
                className="rounded-xl p-6 border border-accent/10 bg-ink-soft transition-colors duration-300 active:bg-ink-muted"
              >
                <span className="text-accent text-xl mb-3 block">{p.icon}</span>
                <h4 className="font-display font-medium text-pearl text-base mb-2">{p.title}</h4>
                <p className="text-pearl/40 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
