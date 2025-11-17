import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Wallet, ArrowRight, Award } from 'lucide-react'

const modules = [
  {
    key: 'identity',
    title: 'Identity & IP Verification',
    description:
      'Prove who controls the brand: social handles, domains, and IP ownership — attested and visible on-chain.',
    icon: ShieldCheck,
    badge: 'Trust Badge',
  },
  {
    key: 'treasury',
    title: 'Treasury Transparency',
    description:
      'Real-time visibility into wallet ownership, multi-sig policies, inflows/outflows, and runway projections.',
    icon: Wallet,
    badge: 'Treasury Certified',
  },
]

const Card = ({ title, description, Icon, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
  >
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full px-2 py-0.5">
            <Award className="h-3.5 w-3.5" /> {badge}
          </span>
        </div>
        <h3 className="font-display text-[22px] leading-[1.1] text-slate-900">{title}</h3>
        <p className="font-body mt-3 text-slate-700 leading-relaxed">{description}</p>
        <a href="#" className="mt-5 inline-flex items-center gap-1 text-slate-900 font-medium">
          Learn more <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </motion.div>
)

const Modules = () => {
  return (
    <section id="modules" className="relative py-12 md:py-20" aria-label="Modules">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {modules.map((m, i) => (
            <Card key={m.key} title={m.title} description={m.description} Icon={m.icon} badge={m.badge} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
