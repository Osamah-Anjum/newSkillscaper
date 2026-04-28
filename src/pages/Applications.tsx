import { motion, type Variants } from 'framer-motion'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

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
    icon: '◆',
  },
  {
    heading: 'APPLIED JUDGEMENT',
    body: 'Theory alone does not show how someone will act when the situation becomes nuanced, uncertain, or demanding. Skillscaper reveals how judgement, communication, and decision-making translate into action.',
    icon: '◎',
  },
]

const sectors = [
  {
    heading: 'DECISION & INTERACTION READINESS',
    body: 'For environments involving coordination, responsibility, support, or fast-moving decisions, assessments can reveal how people structure information, prioritize what matters, communicate clearly, and maintain quality under pressure.',
    icon: '◈',
  },
  {
    heading: 'HUMAN & SERVICE READINESS',
    body: 'For environments involving care, support, service, or sensitive human interaction, assessments can reveal how people listen, respond to nuance, adapt in the moment, and preserve the quality of the experience.',
    icon: '◉',
  },
]

export default function Applications() {
  return (
    <div className="bg-[#000001] text-pearl min-h-screen">

      {/* Hero section */}
      <section className="pt-40 pb-32 px-6 sm:px-12 lg:px-20 xl:px-28 section-divider bg-[#000001] relative overflow-hidden">
        
        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, #FFA400 0%, transparent 70%)' }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl relative z-10"
        >
          <motion.h1 variants={fadeUp} className="font-display font-normal uppercase text-pearl leading-tight mb-8">
            Assessments built to reveal what static evaluation cannot show.
          </motion.h1>
          
          <motion.div variants={fadeUp} className="w-9 h-px bg-accent mb-8" />
          
          <motion.p variants={fadeUp} className="text-pearl/50 leading-relaxed max-w-2xl text-lg">
            Skillscaper helps organizations move beyond surface-level answers by placing people inside situations that reflect real-world complexity. The goal is not only to understand what someone knows or says, but to reveal the signals behind their judgement, communication, adaptability, and decision-making.
          </motion.p>
        </motion.div>
      </section>

      {/* Core capabilities section */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-20 xl:px-28 bg-[#000001]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {sections.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="group">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-[#FFA400]/40 text-2xl group-hover:text-[#FFA400] transition-colors duration-300">{s.icon}</span>
                <h3 className="font-display text-pearl leading-tight">{s.heading}</h3>
              </div>
              <div className="w-6 h-px bg-[#FFA400]/40 group-hover:bg-[#FFA400] mb-6" />
              <p className="text-pearl/45 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sector-specific section */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-20 xl:px-28 section-divider bg-[#000001] relative overflow-hidden">
        
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
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="max-w-3xl mb-20">
            <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase mb-6 text-accent">
              Sector Adaptation
            </motion.p>
            <h2 className="font-display uppercase text-pearl leading-tight mb-6">
              Tailored to sectors, situations, and the realities people actually face.
            </h2>
            <div className="w-8 h-px bg-accent mb-6" />
            <p className="text-pearl/45 leading-relaxed">
              Each sector has its own standards, interactions, pace, and critical moments. Skillscaper adapts the assessment experience to those realities, making evaluation more relevant, specific, and connected to what actually happens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {sectors.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="group">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-[#FFA400]/40 text-2xl group-hover:text-[#FFA400] transition-colors duration-300">{s.icon}</span>
                  <h3 className="font-display text-pearl leading-tight">{s.heading}</h3>
                </div>
                <div className="w-6 h-px bg-[#FFA400]/40 group-hover:bg-[#FFA400] mb-6" />
                <p className="text-pearl/45 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA section */}
      <CTA />

      <Footer />
    </div>
  )
}
