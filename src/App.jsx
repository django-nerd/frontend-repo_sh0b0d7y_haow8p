import React from 'react'
import Hero from './components/Hero'
import Modules from './components/Modules'
import Badges from './components/Badges'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#E3F06F] text-slate-900">
      <div className="relative">
        <Hero />
        <div className="relative z-10 pt-6 md:pt-10" />
        <div className="relative z-10 space-y-8 md:space-y-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-6 md:mx-10">
              <Modules />
              <Badges />
              <CTA />
            </div>
          </div>
        </div>
        <footer className="relative z-10 py-10 text-center text-sm text-slate-700/80">© {new Date().getFullYear()} Align — built on Solana</footer>
      </div>
    </div>
  )
}

export default App
