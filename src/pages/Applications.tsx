import { motion, type Variants } from 'framer-motion'
import Footer from '../components/Footer'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: 'easeOut' } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const sections = [
  {
    heading: 'CONTEXTUAL READINESS',
    body: 'Our assessments reveal whether someone can interpret a situation, understand what matters, and adjust their response accordingly. This helps uncover practical awareness, judgement, and adaptability beyond standard evaluation.',
  },
  {
    heading: 'APPLIED JUDGEMENT',
    body: 'Theory alone does not show how someone will act when the situation becomes nuanced, uncertain, or demanding. Skillscaper reveals how judgement, communication, and decision-making translate into action.',
  },
]

const sectors = [
  {
    heading: 'DECISION & INTERACTION READINESS',
    body: 'For environments involving coordination, responsibility, support, or fast-moving decisions, assessments can reveal how people structure information, prioritize what matters, communicate clearly, and maintain quality under pressure.',
  },
  {
    heading: 'HUMAN & SERVICE READINESS',
    body: 'For environments involving care, support, service, or sensitive human interaction, assessments can reveal how people listen, respond to nuance, adapt in the moment, and preserve the quality of the experience.',
  },
]

export default function Applications() {
  return (
    <div className="bg-ink text-pearl min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 sm:px-12 lg:px-20 xl:px-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase text-pearl/25 mb-6">
            Applications
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-pearl leading-tight mb-8">
            Assessments built to reveal what static evaluation cannot show.
          </motion.h1>
          <motion.div variants={fadeUp} className="w-8 h-px bg-accent/60 mb-8" />
          <motion.p variants={fadeUp} className="text-pearl/40 leading-relaxed max-w-2xl">
            Skillscaper helps organizations move beyond surface-level answers by placing people inside situations that reflect real-world complexity. The goal is not only to understand what someone knows or says, but to reveal the signals behind their judgement, communication, adaptability, and decision-making.
          </motion.p>
        </motion.div>
      </section>

      {/* Core capabilities */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 xl:px-28 border-t border-pearl/5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {sections.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h2 className="font-display text-pearl mb-5">{s.heading}</h2>
              <div className="w-6 h-px bg-accent/40 mb-5" />
              <p className="text-pearl/35 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sector section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 xl:px-28 border-t border-pearl/5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp} className="max-w-3xl mb-16">
            <h1 className="font-display text-pearl leading-tight mb-8">
              Tailored to sectors, situations, and the realities people actually face.
            </h1>
            <p className="text-pearl/40 leading-relaxed">
              Each sector has its own standards, interactions, pace, and critical moments. Skillscaper adapts the assessment experience to those realities, making evaluation more relevant, specific, and connected to what actually happens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {sectors.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <h2 className="font-display text-pearl mb-5">{s.heading}</h2>
                <div className="w-6 h-px bg-accent/40 mb-5" />
                <p className="text-pearl/35 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
