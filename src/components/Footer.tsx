import { motion, type Variants } from 'framer-motion'

const cols = [
  { heading: 'Product', links: ['How It Works', 'Sectors', 'Methodology', 'Pricing'] },
  { heading: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { heading: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Accessibility'] },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Footer() {
  return (
    <footer className="py-12 bg-ink border-t border-accent/8">
      <div className="px-6 sm:px-12 lg:px-20 xl:px-28">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12"
        >
          <motion.div variants={fadeUp} className="max-w-xs">
            <span className="font-display font-bold text-lg text-pearl">SKILLSCAPER</span>
            <p className="text-pearl/30 text-sm mt-3 leading-relaxed">
              Immersive assessments that reveal true professional performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            {cols.map(col => (
              <motion.div key={col.heading} variants={fadeUp}>
                <p className="text-xs tracking-widest uppercase mb-4 text-accent/40">{col.heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-pearl/35 hover:text-accent transition-colors duration-200">{l}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-6 border-t border-accent/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pearl/20"
        >
          <p>© {new Date().getFullYear()} Skillscaper. All rights reserved.</p>
          <p>Built for enterprise. Designed for humans.</p>
        </motion.div>

      </div>
    </footer>
  )
}
