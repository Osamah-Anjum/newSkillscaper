import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import cube1 from '../assets/cubes/Cube 1.png'
import cube2 from '../assets/cubes/Cube 2.png'
import cube3 from '../assets/cubes/Cube 3.png'
import cube4 from '../assets/cubes/Cube 4.png'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D0800 0%, #1A0C00 60%, #0D0800 100%)' }}>

      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 30%, rgba(255,164,0,0.14) 0%, rgba(255,107,0,0.06) 50%, transparent 70%)'
        }} />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[140px]"
          style={{ background: 'rgba(255,120,0,0.07)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-[400px] md:h-[400px] rounded-full blur-[80px] md:blur-[120px]"
          style={{ background: 'rgba(255,60,0,0.06)' }} />
      </div>

      {/* Floating cubes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right cube */}
        <motion.img src={cube1} alt="" className="absolute w-24 md:w-36 lg:w-44 opacity-30 md:opacity-40"
          style={{ top: '8%', right: '6%' }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom-left cube */}
        <motion.img src={cube2} alt="" className="absolute w-20 md:w-28 lg:w-36 opacity-20 md:opacity-30"
          style={{ bottom: '12%', left: '4%' }}
          animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Mid-right cube */}
        <motion.img src={cube3} alt="" className="absolute w-16 md:w-24 opacity-15 md:opacity-25"
          style={{ top: '45%', right: '2%' }}
          animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Top-left small cube */}
        <motion.img src={cube4} alt="" className="absolute w-14 md:w-20 opacity-15 md:opacity-20"
          style={{ top: '18%', left: '3%' }}
          animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 py-28 pt-32 text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase"
          style={{ border: '1px solid rgba(255,164,0,0.25)', background: 'rgba(255,164,0,0.07)', color: '#FFA400' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Immersive Assessment Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-7"
        >
          <span className="text-pearl">Reduce hiring risk </span>
          <span className="text-gradient">before your new hire even starts.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-pearl/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Skillscaper helps organisations assess and develop the capabilities that matter most in their real environment. Through immersive, context-based assessments and training experiences, we reveal not just what people know, but how effectively they are likely to perform,{' '}
          <span className="text-accent font-medium">before day one, and beyond.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group font-semibold px-8 py-3.5 rounded-full transition-all duration-300 glow-accent text-sm w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
          >
            Request a Demo
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#how-it-works" className="text-pearl/40 hover:text-accent text-sm flex items-center gap-2 transition-colors">
            <span className="w-8 h-px" style={{ background: 'rgba(255,164,0,0.3)' }} />
            See how it works
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}
