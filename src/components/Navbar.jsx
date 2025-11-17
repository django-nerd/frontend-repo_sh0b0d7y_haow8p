import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-6 bg-white/70 backdrop-blur border border-white/60 rounded-2xl">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="/" className="font-display text-xl text-slate-900">Align</a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-slate-700 hover:text-slate-900">Modules</a>
              <a href="#badges" className="text-slate-700 hover:text-slate-900">Badges</a>
              <a href="/test" className="text-slate-700 hover:text-slate-900">Status</a>
              <a href="#cta" className="inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2">Get access</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
