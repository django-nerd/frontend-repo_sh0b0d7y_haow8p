import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Badge = ({ label, delay }) => (
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    whileInView={{ scale: [1.05, 1], opacity: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ times: [0, 1], duration: 0.6, delay }}
    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-slate-900/90" />
      <div>
        <p className="font-display text-[18px] leading-[1.1] text-slate-900">{label}</p>
        <p className="font-body text-slate-600 text-sm">Earned on verification</p>
      </div>
    </div>
  </motion.div>
)

const Badges = () => {
  return (
    <section id="badges" className="relative py-12 md:py-20" aria-label="Badges">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Badge label="Identity Verified" delay={0.05} />
          <Badge label="Treasury Certified" delay={0.1} />
          <Badge label="Community Safe" delay={0.15} />
        </div>
      </div>
    </section>
  )
}

export default Badges
