import { motion, type Variants } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import Footer from '../components/Footer'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: 'easeOut' } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.company.trim()) newErrors.company = 'Company name is required'

    return newErrors
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-ink text-pearl min-h-screen">
      {/* Form section */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-20 xl:px-28 border-t border-pearl/5 relative overflow-hidden">
        
        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, #FFA400 0%, transparent 70%)' }}
        />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative z-10">

          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="text-xs tracking-widest uppercase mb-4 text-[#FFA400]/50">Why reach out</p>
            <h2 className="font-display uppercase font-bold text-4xl md:text-5xl text-pearl leading-tight mb-6">
              Direct access to our team.
            </h2>
            <div className="w-12 h-px bg-[#FFA400] mb-6" />
            <p className="text-pearl/40 leading-relaxed mb-8">
              Our specialists are ready to discuss your specific hiring challenges, explore sector-specific solutions, and demonstrate how immersive assessments can transform your talent acquisition process.
            </p>

            {/* Info cards */}
            <div className="space-y-6">
              <div className="group">
                <p className="text-xs tracking-widest uppercase mb-2 text-[#FFA400]/60">Response time</p>
                <p className="text-pearl/70">Within 24 hours</p>
              </div>
              <div className="group">
                <p className="text-xs tracking-widest uppercase mb-2 text-[#FFA400]/60">Available for</p>
                <p className="text-pearl/70">Enterprise & mid-market organizations</p>
              </div>
              <div className="group">
                <p className="text-xs tracking-widest uppercase mb-2 text-[#FFA400]/60">Next step</p>
                <p className="text-pearl/70">Personalized demo & consultation</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-8 border border-[#FFA400]/20 bg-[#FFA400]/5 text-center"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-xl text-pearl mb-2">Thank you</h3>
                <p className="text-pearl/50">We've received your message and will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs tracking-widest uppercase mb-2 text-pearl/40">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-[#FFA400]/40 focus:bg-pearl/8 transition-all duration-200"
                    />
                    {errors.firstName && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-[#FFA400]/80 mt-1">
                        {errors.firstName}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs tracking-widest uppercase mb-2 text-pearl/40">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-[#FFA400]/40 focus:bg-pearl/8 transition-all duration-200"
                    />
                    {errors.lastName && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-[#FFA400]/80 mt-1">
                        {errors.lastName}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase mb-2 text-pearl/40">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-[#FFA400]/40 focus:bg-pearl/8 transition-all duration-200"
                  />
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-[#FFA400]/80 mt-1">
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs tracking-widest uppercase mb-2 text-pearl/40">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-[#FFA400]/40 focus:bg-pearl/8 transition-all duration-200"
                  />
                  {errors.company && (
                    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-[#FFA400]/80 mt-1">
                      {errors.company}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase mb-2 text-pearl/40">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hiring challenges..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-pearl/5 border border-pearl/10 text-pearl placeholder:text-pearl/25 text-sm focus:outline-none focus:border-[#FFA400]/40 focus:bg-pearl/8 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-lg bg-[#FFA400] text-ink text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#FFA400]/20"
                >
                  Send Message
                </motion.button>

                <p className="text-xs text-pearl/30 text-center">
                  We respect your privacy. Your information is secure with us.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
