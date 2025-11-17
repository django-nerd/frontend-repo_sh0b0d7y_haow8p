import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden flex items-center" aria-label="Align hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#E3F06F]/70 via-[#E3F06F]/70 to-[#E3F06F]/90 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block text-slate-900/80 bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-1 text-sm"
          >
            Solana transparency & treasury infrastructure
          </motion.span>

          <h1 className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-slate-900">
            Align trust to your token.
          </h1>
          <p className="font-body mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-slate-800/80 max-w-2xl">
            A modular platform that proves who controls your IP, social accounts, and treasury. Adopt modules independently. Earn trust, on-chain.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              whileTap={{ scale: 0.98 }}
              whileHover={{ y: -2 }}
              href="#modules"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-[0_8px_24px_rgba(16,24,40,0.2)] hover:shadow-[0_12px_32px_rgba(16,24,40,0.25)] transition-shadow"
            >
              Explore modules
            </motion.a>
            <a
              href="/test"
              className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur px-5 py-3 font-medium text-slate-900 border border-slate-900/10"
            >
              Check backend
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
