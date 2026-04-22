import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    phase: '01',
    label: 'Context Sensitivity',
    title: 'SKILLSCAPER IS THE ONLY COMPANY THAT FOCUSES ON THIS CRUCIAL DIMENSION OF PROFESSIONAL SKILLS.',
    body: 'Just because someone has superior knowledge doesn’t mean they know how to use it effectively, nor are they necessarily the most suitable person for the company and structure they join. Efficacy comes from another level of mastery.',
  },
  {
    phase: '02',
    label: 'Non-Linear Testing',
    title: 'OUR UNIQUE IMMERSIVE NON-LINEAR TESTS ARE ROOTED IN THE REALITY OF PROFESSIONAL PERFORMANCE.',
    body: 'Traditional assessments follow a linear path, taking little account of real-world complexities. Skillscaper breaks this mold by offering non-linear assessments that mirror the dynamic nature of actual tasks.Our tests listen, adapt, and evolve in the moment. The scenarios are developed to reflect the candidates’ decisions. This is the key to unlocking an accurate, contextual and actionable evaluation.',
  },
  {
    phase: '03',
    label: 'Test Adaptability',
    title: 'SKILLSCAPER ADAPTS TO THE SKILLS THAT MATTER MOST IN YOUR WORLD.',
    body: 'Every sector has its reality. That’s why our assessments are designed to reflect the challenges, language, and decisions specific to your industry.',
  },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative flex gap-6 md:gap-10"
    >
      {/* Left timeline */}
      <div className="flex flex-col items-center pt-1 shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, rgba(255,164,0,0.15) 0%, rgba(255,107,0,0.08) 100%)',
            border: '1px solid rgba(255,164,0,0.3)',
            color: '#FFA400',
          }}
        >
          {step.phase}
        </div>
        {index < steps.length - 1 && (
          <div
            className="w-px flex-1 mt-3"
            style={{ background: 'linear-gradient(to bottom, rgba(255,164,0,0.2), rgba(255,164,0,0.03))' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 md:pb-16 flex-1">
        <span
          className="inline-block text-xs font-medium tracking-widest uppercase mb-3"
          style={{ color: 'rgba(255,164,0,0.6)' }}
        >
          {step.label}
        </span>
        <h3
          className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-pearl leading-tight mb-4 transition-colors duration-300 group-hover:text-accent"
          style={{ maxWidth: '520px' }}
        >
          {step.title}
        </h3>
        <p className="text-pearl/50 text-sm sm:text-base leading-relaxed" style={{ maxWidth: '480px' }}>
          {step.body}
        </p>

        {/* Accent underline on hover */}
        <motion.div
          className="mt-5 h-px w-0 group-hover:w-16 transition-all duration-500 origin-left"
          style={{ background: 'linear-gradient(to right, #FFA400, transparent)' }}
        />
      </div>
    </motion.div>
  )
}

export default function ScrollNarrative() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 section-divider"
      style={{ background: 'linear-gradient(180deg, #0A0500 0%, #0D0800 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-pearl leading-tight mb-6">
              EVALUATING SKILLS,{' '}
              <span className="text-gradient"> IN THEIR CONTEXT.</span>
            </h2>
            <div className="w-12 h-px mb-6" style={{ background: 'linear-gradient(to right, #FFA400, transparent)' }} />
            <p className="text-pearl/40 text-sm sm:text-base leading-relaxed mb-10">
              Every assessment is built in collaboration with your team — tailored to your sector, your roles, and your performance standards.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-pearl transition-colors duration-200"
            >
              Explore the full methodology
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a> */}
          </motion.div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Step key={i} step={step} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
