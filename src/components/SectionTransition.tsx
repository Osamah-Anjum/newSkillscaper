import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

export default function SectionTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
