import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    phase: '01',
    label: 'Context Sensitivity',
    title: 'SKILLSCAPER IS THE ONLY COMPANY THAT FOCUSES ON THIS CRUCIAL DIMENSION OF PROFESSIONAL SKILLS.',
    body: 'Just because someone has superior knowledge doesn\'t mean they know how to use it effectively, nor are they necessarily the most suitable person for the company and structure they join.Efficacy comes from another level of mastery.',
  },
  {
    phase: '02',
    label: 'Non-Linear Testing',
    title: 'OUR UNIQUE IMMERSIVE NON-LINEAR TESTS ARE ROOTED IN THE REALITY OF PROFESSIONAL PERFORMANCE.',
    body: 'Traditional assessments follow a linear path, taking little account of real-world complexities. Skillscaper breaks this mold by offering non-linear assessments that mirror the dynamic nature of actual tasks.Our tests listen, adapt, and evolve in the moment. The scenarios are developed to reflect the candidates\' decisions. This is the key to unlocking an accurate, contextual and actionable evaluation.',
  },
  {
    phase: '03',
    label: 'Test Adaptability',
    title: 'SKILLSCAPER ADAPTS TO THE SKILLS THAT MATTER MOST IN YOUR WORLD.',
    body: 'Every sector has its reality. That\’s why our assessments are designed to reflect the challenges, language, and decisions specific to your industry.',
  },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col"
    >
      {/* Phase number + top border
      <div className="border-t border-accent/20 group-hover:border-accent transition-colors duration-300 pt-6 mb-6">
        <span className="text-xs font-mono text-accent/40 group-hover:text-accent transition-colors duration-300">
          {step.phase}
        </span>
      </div> */}

      {/* Label */}
      <span className="text-xs font-medium tracking-widest uppercase text-accent/50 mb-4">
        {step.label}
      </span>

      {/* Title */}
      <h3 className="font-display font-bold text-xl sm:text-2xl text-pearl leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
        {step.title}
      </h3>

      {/* Body */}
      <p className="text-pearl/45 text-sm leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  )
}

export default function ScrollNarrative() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 md:py-32 section-divider bg-ink">
      <div className="px-8 sm:px-12 lg:px-20 xl:px-28">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-pearl leading-tight max-w-2xl">
              EVALUATING SKILLS, IN THEIR CONTEXT.
            </h2>
            <p className="text-pearl/40 text-sm leading-relaxed max-w-sm shrink-0">
              Every assessment is built in collaboration with your team — tailored to your sector, your roles, and your performance standards.
            </p>
          </div>
          {/* <div className="w-12 h-px bg-accent mt-8" /> */}
        </motion.div>

        {/* Steps — horizontal on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-16">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
