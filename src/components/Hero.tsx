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
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-right"
        />
      </motion.div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(13,8,0,0.12)' }} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-8 sm:px-12 lg:px-20 xl:px-28"
      >
        <div className="flex flex-col justify-center min-h-screen py-24 pt-28 md:pt-32 max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="font-display font-bold leading-[1.06] tracking-tight mb-6 md:mb-8 break-words text-pearl"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            REDUCE HIRING RISK <span className="text-accent">BEFORE</span> YOUR NEW HIRE EVEN STARTS.
          </motion.h1>

          {/* Divider */}
          <div className="w-12 h-px bg-accent mb-6 md:mb-8" />

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
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#"
              className="bg-accent hover:bg-accent-light text-ink font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm text-center"
            >
              Request a Demo →
            </a>
            <a
              href="#how-it-works"
              className="text-pearl/55 hover:text-accent text-sm flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200 py-3.5 sm:py-0"
            >
              See how it works
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
