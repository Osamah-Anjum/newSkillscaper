import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    phase: '01',
    label: 'Context Sensitivity',
    title: 'Most assessments test what people know.',
    body: 'We stand out with our focus on context-sensitive analysis. This unique approach allows us to understand and assess skills in a more nuanced and realistic manner. Traditional skill assessment methods often rely on binary responses and are presented in multiple-choice formats.',
    visual: 'abstract',
  },
  {
    phase: '02',
    label: 'Non-Linear Testing',
    title: 'We put them inside the job.',
    body: 'Our most revolutionary contribution is in the area of non-linear testing. Unlike all other tests that follow a predictable, linear path, our evaluations simulate real, potentially shifting, dynamic scenarios, offering a more accurate and detailed measure of skills and abilities.',
    visual: 'transition',
  },
  {
    phase: '03',
    label: 'Test Adaptability',
    title: 'You see exactly who they are.',
    body: 'Skillscapers products are designed to adapt to the unique needs of our clients, making our tests a versatile tool for assessing a wide range of skills. Whether you are evaluating language skills, problem-solving abilities, or the best sales techniques or psychological profiles, our assessments can be tailored in collaboration with your teams to meet your specific needs.',
    visual: 'real',
  },
]

function AbstractVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none">
      {[...Array(5)].map((_, i) => (
        <rect key={i} x={40 + i * 50} y={60 + (i % 2) * 30} width="30" height="80" rx="4"
          fill={`rgba(255,${120 - i * 15},0,${0.07 + i * 0.04})`}
          stroke={`rgba(255,164,0,${0.2 + i * 0.05})`} strokeWidth="1" />
      ))}
      <circle cx="160" cy="100" r="65" stroke="rgba(255,164,0,0.12)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="160" cy="100" r="40" stroke="rgba(255,107,0,0.08)" strokeWidth="1" strokeDasharray="2 6" />
      <text x="160" y="105" textAnchor="middle" fill="rgba(255,245,228,0.2)" fontSize="11" fontFamily="monospace">score: 74%</text>
    </svg>
  )
}

function TransitionVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none">
      <rect x="20" y="20" width="125" height="155" rx="8"
        fill="rgba(255,107,0,0.05)" stroke="rgba(255,164,0,0.15)" strokeWidth="1" />
      <circle cx="82" cy="68" r="26" fill="rgba(255,107,0,0.10)" stroke="rgba(255,164,0,0.25)" strokeWidth="1" />
      <rect x="40" y="108" width="85" height="7" rx="3.5" fill="rgba(255,245,228,0.07)" />
      <rect x="52" y="122" width="58" height="5" rx="2.5" fill="rgba(255,245,228,0.04)" />
      <path d="M168 100 L198 100" stroke="rgba(255,164,0,0.6)" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="198,95 210,100 198,105" fill="rgba(255,164,0,0.6)" />
      <rect x="214" y="28" width="88" height="144" rx="8"
        fill="rgba(255,164,0,0.07)" stroke="rgba(255,164,0,0.25)" strokeWidth="1" />
      <circle cx="258" cy="73" r="26" fill="rgba(255,164,0,0.14)" stroke="rgba(255,164,0,0.35)" strokeWidth="1" />
      <rect x="228" y="113" width="60" height="6" rx="3" fill="rgba(255,164,0,0.2)" />
      <rect x="228" y="127" width="40" height="5" rx="2.5" fill="rgba(255,164,0,0.12)" />
    </svg>
  )
}

function RealVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none">
      <rect x="18" y="14" width="284" height="172" rx="12"
        fill="rgba(255,107,0,0.05)" stroke="rgba(255,164,0,0.15)" strokeWidth="1" />
      <rect x="18" y="14" width="284" height="32" rx="12"
        fill="rgba(255,164,0,0.08)" />
      <circle cx="36" cy="30" r="5" fill="rgba(255,107,0,0.4)" />
      <circle cx="52" cy="30" r="5" fill="rgba(255,164,0,0.3)" />
      <circle cx="68" cy="30" r="5" fill="rgba(255,200,0,0.3)" />
      <rect x="90" y="24" width="140" height="12" rx="6" fill="rgba(255,245,228,0.06)" />
      <rect x="35" y="58" width="160" height="9" rx="4.5" fill="rgba(255,245,228,0.08)" />
      <rect x="35" y="74" width="110" height="7" rx="3.5" fill="rgba(255,245,228,0.05)" />
      <circle cx="258" cy="68" r="20" fill="rgba(255,164,0,0.18)" stroke="rgba(255,164,0,0.4)" strokeWidth="1" />
      <path d="M250 68 L256 74 L267 62" stroke="#FFA400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="35" y="95" width="250" height="1" fill="rgba(255,164,0,0.08)" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <circle cx="52" cy={112 + i * 26} r="9"
            fill="rgba(255,164,0,0.12)" stroke="rgba(255,164,0,0.3)" strokeWidth="1" />
          <rect x="70" y={106 + i * 26} width="95" height="7" rx="3.5" fill="rgba(255,245,228,0.07)" />
          <rect x="70" y={118 + i * 26} width="65" height="5" rx="2.5" fill="rgba(255,245,228,0.04)" />
          <rect x="238" y={108 + i * 26} width="38" height="12" rx="6"
            fill={`rgba(255,${164 - i * 30},0,${0.22 + i * 0.06})`} />
        </g>
      ))}
    </svg>
  )
}

const visuals = { abstract: AbstractVisual, transition: TransitionVisual, real: RealVisual }

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const Visual = visuals[step.visual as keyof typeof visuals]
// amazonq-ignore-next-line

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,164,0,0.5)' }}>{step.phase}</span>
          <span className="w-8 h-px" style={{ background: 'rgba(255,164,0,0.25)' }} />
          <span className="text-xs font-medium tracking-widest uppercase text-accent">{step.label}</span>
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-pearl mb-4 leading-tight">{step.title}</h3>
        <p className="text-pearl/45 leading-relaxed">{step.body}</p>
      </div>
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] min-h-[180px]"
        style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(26,15,0,0.9) 100%)', border: '1px solid rgba(255,164,0,0.12)' }}>
        <div className="absolute inset-0 p-6">
          <Visual />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(13,8,0,0.5) 0%, transparent 60%)' }} />
      </div>
    </motion.div>
  )
}

export default function ScrollNarrative() {
  return (
    <section id="how-it-works" className="py-32 section-divider" style={{ background: 'linear-gradient(180deg, #1A0F00 0%, #0D0800 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,164,0,0.5)' }}>The Methodology</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pearl leading-tight">
            Reflexes, spontaneous thinking,<br />
            <span className="text-gradient"> and the ability to make decisions in real time.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {steps.map((step, i) => <Step key={i} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
