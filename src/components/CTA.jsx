import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="cta" className="relative py-14 md:py-24" aria-label="Call to action">
      <div className="container mx-auto px-6 md:px-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <div className="md:flex items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-[40px] leading-[1.1] text-slate-900">Bring truth to your token.</h3>
              <p className="font-body mt-4 text-slate-700">Request early access and help shape the standard for transparency on Solana.</p>
            </div>

            <div className="mt-6 md:mt-0 w-full md:w-auto">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-medium shadow-[0_8px_24px_rgba(16,24,40,0.2)]"
                onClick={() => alert('Thanks! We\'ll reach out soon.')}
              >
                Request access
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
