import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImg from '../assets/heroSection/Image A part 1, 2.jpg'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ink">

      {/* Full background image with parallax */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0 pointer-events-none origin-center"
      >
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Layered overlays for readability */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Strong left dark panel for text */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(13,8,0,0.97) 0%, rgba(13,8,0,0.92) 20%, rgba(13,8,0,0.70) 42%, rgba(13,8,0,0.25) 62%, rgba(13,8,0,0.05) 100%)'
        }} />
        {/* Top vignette for navbar */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,8,0,0.6) 0%, transparent 18%)'
        }} />
        {/* Bottom vignette for section transition */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(13,8,0,0.9) 0%, transparent 22%)'
        }} />
        {/* Subtle orange warmth on right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(255,120,0,0.08) 0%, transparent 70%)'
        }} />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        <div className="flex flex-col justify-center min-h-screen py-24 pt-28 md:pt-32 max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">

          {/* Label pill
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 self-start text-xs font-medium px-4 py-2 rounded-full mb-6 md:mb-8 tracking-widest uppercase"
            style={{ border: '1px solid rgba(255,164,0,0.30)', background: 'rgba(255,164,0,0.08)', color: '#FFA400' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Immersive Assessment Platform
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="font-display font-bold leading-[1.06] tracking-tight mb-6 md:mb-8 break-words"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            <span className="text-pearl">Reduce hiring risk </span>
            <span className="text-gradient">before your new hire even starts.</span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="origin-left h-px w-16 mb-6 md:mb-8"
            style={{ background: 'linear-gradient(to right, #FFA400, transparent)' }}
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-pearl/65 text-sm sm:text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg"
          >
            Skillscaper helps organisations assess and develop the capabilities that matter most in their real environment. Through immersive, context-based assessments and training experiences, we reveal not just what people know, but how effectively they are likely to perform,{' '}
            <span className="text-accent font-medium">before day one, and beyond.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 md:mb-16"
          >
            <a
              href="#"
              className="group font-semibold px-8 py-3.5 rounded-full transition-all duration-300 glow-accent text-sm text-center"
              style={{ background: 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)', color: '#0D0800' }}
            >
              Request a Demo
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#how-it-works"
              className="text-pearl/55 hover:text-accent text-sm flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200 py-3.5 sm:py-0"
            >
              <span className="w-6 h-px" style={{ background: 'rgba(255,164,0,0.4)' }} />
              See how it works
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
