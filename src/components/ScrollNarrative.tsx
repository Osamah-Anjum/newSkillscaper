import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const steps = [
  {
    phase: '01',
    label: 'Context Sensitivity',
    title: 'SKILLSCAPER IS THE ONLY COMPANY THAT FOCUSES ON THIS CRUCIAL DIMENSION OF PROFESSIONAL SKILLS.',
    body: "Just because someone has superior knowledge doesn't mean they know how to use it effectively, nor are they necessarily the most suitable person for the company and structure they join. Efficacy comes from another level of mastery.",
  },
  {
    phase: '02',
    label: 'Non-Linear Testing',
    title: 'OUR UNIQUE IMMERSIVE NON-LINEAR TESTS ARE ROOTED IN THE REALITY OF PROFESSIONAL PERFORMANCE.',
    body: "Traditional assessments follow a linear path, taking little account of real-world complexities. Skillscaper breaks this mold by offering non-linear assessments that mirror the dynamic nature of actual tasks. Our tests listen, adapt, and evolve in the moment.",
  },
  {
    phase: '03',
    label: 'Test Adaptability',
    title: 'SKILLSCAPER ADAPTS TO THE SKILLS THAT MATTER MOST IN YOUR WORLD.',
    body: "Every sector has its reality. That's why our assessments are designed to reflect the challenges, language, and decisions specific to your industry.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="group flex flex-col gap-3"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.1, ease: 'easeOut' }}
        className="font-display font-bold text-5xl md:text-6xl text-accent/15 leading-none select-none"
      >
        {step.phase}
      </motion.span>
      <span className="text-xs font-medium tracking-widest uppercase text-accent/50">{step.label}</span>
      <h3 className="font-display font-bold text-xl sm:text-2xl text-pearl leading-tight group-hover:text-accent transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-pearl/45 text-sm leading-relaxed">{step.body}</p>
    </motion.div>
  )
}

export default function ScrollNarrative() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 md:py-32 section-divider bg-[#010000]">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
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
        </motion.div>

        {/* Animated divider line */}
        <div ref={lineRef} className="relative mb-12 md:mb-16 hidden md:block">
          <div className="h-px w-full bg-accent/8" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-accent/40"
            initial={{ width: '0%' }}
            animate={lineInView ? { width: '100%' } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 lg:gap-16">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
