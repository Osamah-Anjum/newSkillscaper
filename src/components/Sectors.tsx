import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const sectors = [
  {
    id: '01', name: 'Healthcare', tagline: 'Decisions that cost lives.',
    description: 'Healthcare is a dynamic and demanding field where precision, empathy, and quick decision-making are crucial. We design bespoke assessments tailored to your healthcare roles.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><rect x="17" y="6" width="6" height="28" rx="3" fill="currentColor" opacity="0.9"/><rect x="6" y="17" width="28" height="6" rx="3" fill="currentColor" opacity="0.9"/></svg>),
  },
  {
    id: '02', name: 'Financial Services', tagline: 'Pressure is the product.',
    description: 'The financial sector demands precision, strategic thinking, and the ability to make informed decisions under pressure. We tailor assessments to your financial roles.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><polyline points="4,30 14,18 22,24 36,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/><circle cx="36" cy="10" r="3" fill="currentColor" opacity="0.9"/></svg>),
  },
  {
    id: '03', name: 'Hospitality Management', tagline: 'Service under pressure.',
    description: 'The hospitality industry thrives on exceptional guest experiences. We design assessments tailored to hospitality roles ensuring outstanding service and seamless operations.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><line x1="8" y1="26" x2="32" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/><path d="M10 26 Q20 10 30 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/><circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" opacity="0.9"/></svg>),
  },
  {
    id: '04', name: 'Engagement Protocols', tagline: 'Military skills assessments.',
    description: 'The military demands strategic decision-making and leadership under extreme conditions. We design bespoke assessments for military roles ensuring peak performance.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><path d="M20 6 L32 10 V18 C32 26 26 32 20 34 C14 32 8 26 8 18 V10 L20 6 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.9"/></svg>),
  },
  {
    id: '05', name: 'Education & Public Sector', tagline: 'Leadership in complexity.',
    description: 'In education, the ability to inspire and lead is crucial. We design assessments for educational roles ensuring high-quality education and effective institutional management.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><path d="M20 6 L36 14 L20 22 L4 14 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/><path d="M10 18 L10 28 Q10 34 20 34 Q30 34 30 28 L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/></svg>),
  },
  {
    id: '06', name: 'Retail & Operations', tagline: 'Performance at scale.',
    description: 'The retail industry is fast-paced and customer-focused. We design assessments for retail roles ensuring exceptional customer experiences and efficient operations.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-7 h-7"><rect x="6" y="16" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2" opacity="0.9"/><path d="M13 16 Q13 8 20 8 Q27 8 27 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/></svg>),
  },
]

function SectorCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl p-6 border border-accent/10 hover:border-accent/30 bg-ink-soft transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-accent">{sector.icon}</div>
        <span className="text-xs font-mono text-accent/20">{sector.id}</span>
      </div>
      <p className="text-xs font-medium tracking-widest uppercase mb-2 text-accent/60">{sector.tagline}</p>
      <h3 className="font-display font-bold text-lg text-pearl mb-3">{sector.name}</h3>
      <p className="text-pearl/40 text-sm leading-relaxed">{sector.description}</p>
      <div className="mt-5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore sector →
      </div>
    </motion.div>
  )
}

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 section-divider bg-ink-soft">
      <div className="px-8 sm:px-12 lg:px-20 xl:px-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4 text-accent/50">Sector Adaptation</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pearl leading-tight max-w-lg">
              Every profession.<br />Its own world.
            </h2>
            <p className="text-pearl/40 max-w-sm text-sm leading-relaxed">
              Skillscaper assessments are built from the inside out — each sector has its own scenarios, pressures, and performance signals.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s, i) => <SectorCard key={s.id} sector={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
