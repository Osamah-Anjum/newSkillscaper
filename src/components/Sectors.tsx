import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import cube2 from '../assets/cubes/Cube 2.png'
import cube4 from '../assets/cubes/Cube 4.png'

const sectors = [
  {
    id: '01',
    name: 'Healthcare',
    tagline: 'Decisions that cost lives.',
    description: 'Healthcare is a dynamic and demanding field where precision, empathy, and quick decision-making are crucial. At Skillscaper, we design bespoke assessments tailored to the specific needs of your healthcare roles, ensuring that your team is equipped to deliver exceptional patient care and operate effectively in medical environments.',
    from: 'rgba(255,164,0,0.10)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="17" y="6" width="6" height="28" rx="3" fill="currentColor" opacity="0.9"/>
        <rect x="6" y="17" width="28" height="6" rx="3" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
  },
  {
    id: '02',
    name: 'Financial Services',
    tagline: 'Pressure is the product.',
    description: 'The financial sector demands precision, strategic thinking, and the ability to make informed decisions under pressure. At Skillscaper, we design bespoke assessments tailored to the specific needs of your financial roles, ensuring that your team is equipped to handle the complexities of today’s financial landscape.',
    from: 'rgba(255,120,0,0.10)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <polyline points="4,30 14,18 22,24 36,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        <circle cx="36" cy="10" r="3" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
  },
  {
    id: '03',
    name: 'Hospitality Management.',
    tagline: 'Service Under Pressure',
    description: 'The hospitality industry thrives on delivering exceptional guest experiences, requiring a unique blend of service skills, cultural awareness, and operational efficiency. At Skillscaper, we design bespoke assessments tailored to the specific needs of hospitality roles, ensuring that your team is equipped to provide outstanding service and manage operations seamlessly.',
    from: 'rgba(255,80,0,0.10)',
    icon: (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <line
      x1="8"
      y1="26"
      x2="32"
      y2="26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />
    <path
      d="M10 26 Q20 10 30 26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.9"
    />
    <circle
      cx="20"
      cy="12"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.9"
    />
    <line
      x1="12"
      y1="30"
      x2="28"
      y2="30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
),
  },
  {
    id: '04',
    name: 'Engagement Protocols',
    tagline: 'Military Skills Assessments.',
    description: 'The military demands a unique set of skills, from strategic decision-making and leadership to operational execution under extreme conditions. At Skillscaper, we design bespoke assessments tailored to the specific needs of military roles, ensuring that your personnel are equipped to perform at their best in any situation.',
    from: 'rgba(255,164,0,0.12)',
    icon: (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path
      d="M20 6 L32 10 V18 C32 26 26 32 20 34 C14 32 8 26 8 18 V10 L20 6 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <path
      d="M20 12 L22.5 18 H29 L23.5 21.5 L25.5 28 L20 24.5 L14.5 28 L16.5 21.5 L11 18 H17.5 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <line
      x1="20"
      y1="18"
      x2="20"
      y2="26"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
),
  },
  {
    id: '05',
    name: 'Education & Public Sector',
    tagline: 'Leadership in complexity.',
    description: 'In education, the ability to inspire, instruct, and lead is crucial for fostering a positive learning environment. At Skillscaper, we design bespoke assessments tailored to the specific needs of educational roles, ensuring that your educators and administrators are equipped to deliver high-quality education and manage academic institutions effectively.',
    from: 'rgba(255,100,0,0.10)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6 L36 14 L20 22 L4 14 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        <path d="M10 18 L10 28 Q10 34 20 34 Q30 34 30 28 L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
      </svg>
    ),
  },
  {
    id: '06',
    name: 'Retail & Operations',
    tagline: 'Performance at scale.',
    description: 'The retail industry is fast-paced and customer-focused, requiring a unique set of skills from salesmanship to inventory management. At Skillscaper, we design bespoke assessments tailored to the specific needs of retail roles, ensuring that your team is equipped to deliver exceptional customer experiences and manage retail operations efficiently.',
    from: 'rgba(255,140,0,0.10)',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="16" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2" opacity="0.9"/>
        <path d="M13 16 Q13 8 20 8 Q27 8 27 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
        <line x1="20" y1="22" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
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
      className="group relative rounded-2xl p-7 overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${sector.from} 0%, rgba(26,15,0,0.95) 100%)`,
        border: '1px solid rgba(255,164,0,0.12)',
      }}
      whileHover={{ borderColor: 'rgba(255,164,0,0.3)', y: -4 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,164,0,0.10) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="text-accent">{sector.icon}</div>
          <span className="text-xs font-mono" style={{ color: 'rgba(255,164,0,0.2)' }}>{sector.id}</span>
        </div>
        <p className="text-xs font-medium tracking-widest uppercase mb-2 text-accent">{sector.tagline}</p>
        <h3 className="font-display font-bold text-xl text-pearl mb-3">{sector.name}</h3>
        <p className="text-pearl/40 text-sm leading-relaxed">{sector.description}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore sector <span>→</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 section-divider relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0D0800 0%, #1A0F00 100%)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img src={cube4} alt="" className="absolute w-24 md:w-36 opacity-15"
          style={{ top: '6%', right: '3%' }}
          animate={{ y: [0, -14, 0], rotate: [0, 7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img src={cube2} alt="" className="absolute w-20 md:w-28 opacity-10"
          style={{ bottom: '5%', left: '2%' }}
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,164,0,0.5)' }}>Sector Adaptation</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pearl leading-tight max-w-lg">
              Every profession.<br />
              <span className="text-gradient">Its own world.</span>
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
